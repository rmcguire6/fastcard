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

@app.route('/')
def homepage():
    return ('homepage')

@app.route('/matches', methods=['GET'])
def matches():
    matches_list = Match.query.all()
    result = matches_schema.dump(matches_list)
    return jsonify(result)

@app.route('/add_match', methods=['POST'])
def add_match():
    if request.is_json:
        spanish = request.json['spanish']
        english = request.json['english']
        conj = request.json['conj']
        match_id = request.json['match_id']
    else:
        spanish = request.form['spanish']
        english = request.form['english']
        conj = request.form['conj']
        match_id = request.form['match_id']
    test = Match.query.filter_by(spanish=spanish).first()
    if test:
        return jsonify(message='That spanish and english word match is already in the database.'), 409
    else:
        match = Match(spanish=spanish, english=english, match_id=match_id, conj=conj)
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
    match_id = Column(String, unique=True)
    spanish = Column(String, nullable=False)
    english = Column(String, nullable=False)
    conj = Column(String, default='')

class MatchSchema(ma.Schema):
    class Meta:
        fields = ('id', 'match_id', 'spanish', 'english', 'conj')

match_schema = MatchSchema()
matches_schema = MatchSchema(many=True)

if __name__ == '__main__':
    app.run()

 
