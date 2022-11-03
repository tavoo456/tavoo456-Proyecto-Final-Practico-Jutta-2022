from flask import Flask, render_template, request, redirect, url_for, session, flash
from flaskext.mysql import MySQL

#CONFIGURACION
app = Flask(__name__)
app.secret_key = "123456"

#CONEXION A BD
mysql = MySQL()
app.config['MYSQL_DATABASE_HOST']= 'localhost'
app.config['MYSQL_DATABASE_USER']= 'root'
app.config['MYSQL_DATABASE_PASSWORD' ]= 'gu2tavogoogle'
app.config['MYSQL_DATABASE_DB']= 'REGISTRO'
mysql.init_app(app)

#RUTAS
@app.route("/")
def ini():
    return render_template("inicio.html")

@app.route("/registro")
def registro():
    return render_template("registro.html")

@app.route("/inicio_sesion")
def inicio():
    return render_template("inicio_sesion.html")

#FUNCIONES
@app.route("/registrar", methods=['POST'])
def registrar():
    
    nombre_ = request.form['nombre']
    correo_ = request.form['correo']
    contraseña_ = request.form['contraseña']
    
    if nombre_ == "" or correo_ == "" or contraseña_ == "":
        flash("Pone el mensaje que queras")
        return redirect(url_for('registro'))
    
    sql = "INSERT INTO registros (nombre, correo, contraseña) VALUES (%s, %s, %s);"
    
    datos = (nombre_, correo_, contraseña_)
    conn = mysql.connect()
    cursor = conn.cursor()
    cursor.execute(sql, datos)
    conn.commit()
    return redirect(url_for('inicio'))

@app.route("/sesion", methods=['POST'])
def sesion():

    nombre = request.form['nombre']
    correo = request.form['correo']
    contraseña = request.form['contraseña']
        
    conn = mysql.connect()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM registros WHERE nombre = %s AND correo = %s AND contraseña = %s", (nombre, correo, contraseña))
    comprobar = cursor.fetchone()
    if comprobar:
        session['loggedin'] = True
        session['nombre'] = comprobar[1]
        session['correo'] = comprobar[2]
        return redirect(url_for('index'))
    else:
        flash("Correo o contraseña incorrecta o el nombre tambien")
        return render_template("inicio_sesion.html")

#RUTAS PAGINAS
@app.route("/index")
def index():
    if session.get('correo') is not None:
        return render_template("index.html", nombre = session['nombre'], correo = session['correo'])
    else:
        return render_template('inicio_sesion.html')

@app.route("/about")
def about():
    return render_template("/menu/about.html")

@app.route("/contact")
def contact():
    return render_template("/menu/contact.html")

@app.route("/more")
def more():
    return render_template("/menu/more.html")

# TEMAS
@app.route("/Area")
def Area():
    return render_template("/temas/Area.html")

@app.route("/cuadratica")
def cuadratica():
    return render_template("/temas/for_cuadratica.html")

@app.route("/ley de coseno")
def coseno():
    return render_template("/temas/ley_coseno.html")

@app.route("/ley de seno")
def seno():
    return render_template("/temas/ley_seno.html")

@app.route("/Teorema de Pitagoras")
def pitagoras():
    return render_template("/temas/pitagoras.html")

#JUEGOS
@app.route("/multiplicacion")
def multiplicacion():
    return render_template("/juegos/multiplicacion.html")

@app.route("/suma_resta")
def suma_resta():
    return render_template("/juegos/suma_resta.html")


@app.route('/logout')
def logout():
    session.pop('loggedin', None)
    session.pop('correo', None)
    return redirect(url_for('inicio'))


if __name__ == '__main__':
    app.run(debug=True)