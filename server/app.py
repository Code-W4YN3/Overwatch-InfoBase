from config import app,db
from flask_restful import Resource, Api
from models import Role, Hero, PassiveAbility, HeroPassive, GameMode, Map, User, Comment
from flask import jsonify,make_response, session, request, render_template

api = Api(app)

if __name__ == '__main__':
    app.run()