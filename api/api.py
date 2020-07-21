from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, Integer, String
import os

app = Flask(__name__)
basedir = os.path.abspath(os.path.dirname(__file__))
app.config['SQLACHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'matches.db')

db = SQLAlchemy(app)

@app.route('/')
def homepage():
    return('homepage')

if __name__ == '__main__':
    app.run()

 
