from flask import Flask, render_template
from notificacoes import bp


app = Flask(__name__)

@app.route('/')
def index():
    return render_template('demanda.html')

app.register_blueprint(bp)

app.run(debug=True)