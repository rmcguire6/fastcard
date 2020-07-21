from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, Integer, String
import os

app = Flask(__name__)
basedir = os.path.abspath(os.path.dirname(__file__))
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'matches.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

@app.route('/')
def homepage():
    return('homepage')

# database models

class Match(db.Model):
    __tablename__ = 'matches'
    id = Column(Integer, primary_key=True)
    match_id = Column(String, unique=True)
    spanish = Column(String, nullable=False)
    english = Column(String, nullable=False)

if __name__ == '__main__':
    app.run()

 
