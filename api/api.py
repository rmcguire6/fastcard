from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, Integer, String
from flask_marshmallow import Marshmallow
import os

app = Flask(__name__)
basedir = os.path.abspath(os.path.dirname(__file__))
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'matches.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
ma = Marshmallow(app)

@app.before_first_request
def create_tables():
    db.create_all()

@app.route('/')
def homepage():
    return ('homepage')

@app.route('/matches', methods=['GET'])
def matches():
    matches_list = Match.query.all()
    result = matches_schema.dump(matches_list)
    return {"matches": result}

@app.route('/add_match', methods=['POST'])
def add_match():
    if request.is_json:
        spanish = request.json['spanish']
        english = request.json['english']
        conj = request.json['conj']
        matchId = request.json['matchId']
    else:
        spanish = request.form['spanish']
        english = request.form['english']
        conj = request.form['conj']
        matchId = request.form['matchId']
    test = Match.query.filter_by(spanish=spanish).first()
    if test:
        return jsonify(message='That spanish and english word match is already in the database.'), 409
    else:
        match = Match(spanish=spanish, english=english, matchId=matchId, conj=conj)
        db.session.add(match)
        db.session.commit()
        return jsonify(message='That match was successfully added to the database.'), 201

@app.route('/remove_match', methods=['DELETE'])
def remove_match():
    if request.is_json:
        spanish = request.json['spanish']
    else:
        spanish = request.form['spanish']
    match = Match.query.filter_by(spanish=spanish).first()
    if match:
        db.session.delete(match)
        db.session.commit()
        return jsonify(message='That match was successfully removed from the database.'), 202
    else:
        return jsonify(message='That match was not in the database'), 404


# database models

class Match(db.Model):
    __tablename__ = 'matches'
    id = Column(Integer, primary_key=True)
    matchId = Column(String, unique=True)
    spanish = Column(String, nullable=False)
    english = Column(String, nullable=False)
    conj = Column(String, default='')

class MatchSchema(ma.Schema):
    class Meta:
        fields = ('id', 'matchId', 'spanish', 'english', 'conj')

match_schema = MatchSchema()
matches_schema = MatchSchema(many=True)

# cli commands

@app.cli.command('db_create')
def db_create():
    db.create_all()
    print('Database created!')

if __name__ == '__main__':
    app.run()

 
