from config import app,db
import os
from flask_restful import Resource, Api
from models import Role, Hero, PassiveAbility, HeroPassive, GameMode, Map, User, Save, Guide
from flask import jsonify, make_response, session, request, render_template


api = Api(app)

@app.route('/')
@app.route('/<int:id>')
def home(id=0):
    return render_template("index.html")

class Heroes(Resource):
    
    def get(self):
        hero_dict = [hero.to_dict() for hero in Hero.query.all()]
        return make_response(jsonify(hero_dict), 200)
    
api.add_resource(Heroes, '/heroes')

class HeroesById(Resource):
    
    def get(self, id):
        hero_id = [hero.id for hero in Hero.query.all()]
        if(id in hero_id):
            hero_dict = Hero.query.filter_by(id = id).first().to_dict()
            return make_response(jsonify(hero_dict), 200)
        else:
            return {"error": "Hero not found"}
        
    def patch(self, id):
        hero_id = [hero.id for hero in Hero.query.all()]
        if(id in hero_id):
            hero = Hero.query.filter_by(id = id).first()
            for attr in request.form:
                setattr(hero, attr, request.form[attr])

            db.session.add(hero)
            db.session.commit()

            response_dict = hero.to_dict()

            return make_response(response_dict,200)
        else:
            return {"error": "Hero not found"}
    
api.add_resource(HeroesById, '/heroes/<int:id>')

class Roles(Resource):
    
    def get(self):
        roles_dict = [role.to_dict() for role in Role.query.all()]
        return make_response(jsonify(roles_dict), 200)
    
api.add_resource(Roles, '/roles')

class RolesById(Resource):
    
    def get(self, id):
        role_id = [role.id for role in Role.query.all()]
        if(id in role_id):
            role_dict = Role.query.filter_by(id = id).first().to_dict()
            return make_response(jsonify(role_dict), 200)
        else:
            return {"error": "Hero Role not found"}
           
api.add_resource(RolesById, '/roles/<int:id>')

class HeroPassives(Resource):
    def post(self):
        data = request.form
        new_record = HeroPassive(
            hero_id=data['hero_id'],
            passive_id=data['passive_id'],
        )

        db.session.add(new_record)
        db.session.commit()

        response_dict = new_record.to_dict()

        return make_response(response_dict ,200)
    
api.add_resource(HeroPassives, '/heropassives')

class PassiveAbilities(Resource):
    
    def get(self):
        passive_dict = [passive.to_dict() for passive in PassiveAbility.query.all()]
        return make_response(jsonify(passive_dict), 200)
    
api.add_resource(PassiveAbilities, '/passiveabilities')

class GameModes(Resource):
    
    def get(self):
        mode_dict = [mode.to_dict() for mode in GameMode.query.all()]
        return make_response(jsonify(mode_dict), 200)
    
api.add_resource(GameModes, '/gamemodes')

class Maps(Resource):
    
    def get(self):
        maps_dict = [map.to_dict() for map in Map.query.all()]
        return make_response(jsonify(maps_dict), 200)
    
api.add_resource(Maps, '/maps')

class Users(Resource):
    
    def post(self):
        data = request.get_json()
        username = data['username']
        password = data['password']

        new_user = User(username = username, password_hash = password)

        db.session.add(new_user)
        db.session.commit()
        session['random_user'] = new_user.id

        return {"message":"New User created successfully"}, 201
    
api.add_resource(Users, '/users')

class UsersById(Resource):
    
    def get(self, username):
        users = [user.username for user in User.query.all()]
        if(username in users):
            user_dict = User.query.filter_by(username = username).first().to_dict()
            return make_response(jsonify(user_dict), 200)
        else:
            return {"error": "User not found"}
    
api.add_resource(UsersById, '/users/<username>')

class Login(Resource):

    def post(self):
        user = User.query.filter(
            User.username == request.get_json()['username'] and
            User.password == request.get_json()['password']
        ).first()

        session['user_id'] = user.id
        return jsonify(user.to_dict())

api.add_resource(Login, '/login')

class CheckSession(Resource):

    def get(self):
        user = User.query.filter(User.id == session.get('user_id')).first()
        if user:
            return jsonify(user.to_dict())
        else:
            return jsonify({'message': '401: Not Authorized'}), 401

api.add_resource(CheckSession, '/check_session')

class Logout(Resource):

    def delete(self):
        session['user_id'] = None
        return {'message': '204: No Content'}, 204

api.add_resource(Logout, '/logout')

class Guides(Resource):
    
    def get(self):
        guides_dict = [guide.to_dict() for guide in Guide.query.all()]
        return make_response(jsonify(guides_dict), 200)
    
api.add_resource(Guides, '/guides')

class Saves(Resource):
    
    def get(self):
        saves_dict = [save.to_dict() for save in Save.query.all()]
        return make_response(jsonify(saves_dict), 200)
    
    def post(self):
        data = request.get_json()
        name = data['name']
        url = data['url']
        image = data['image']
        username = data['username']

        new_save = Save(name = name , url = url, image = image, username = username)

        db.session.add(new_save)
        db.session.commit()

        return {"message":"Added to Saves"}, 201
    
api.add_resource(Saves, '/saves')
    
class SavesID(Resource):

    def delete(self, id):
        save = Save.query.filter_by(id=id).first()

        db.session.delete(save)
        db.session.commit()

        response = make_response(
            {"msg": "Deleted Save"}
        )

        return response
    
api.add_resource(SavesID, '/saves/<int:id>')
    
@app.route('/owheroes')
@app.route('/owmaps')
@app.route('/owguides')
@app.route('/owsignup')
@app.route('/owsignin')
@app.route('/owuser')
@app.route('/owheroes/D.va')
@app.route('/owheroes/Doomfist')
@app.route('/owheroes/Junker Queen')
@app.route('/owheroes/Orisa')
@app.route('/owheroes/Ramattra')
@app.route('/owheroes/Reinhardt')
@app.route('/owheroes/Roadhog')
@app.route('/owheroes/Sigma')
@app.route('/owheroes/Winston')
@app.route('/owheroes/Wrecking Ball')
@app.route('/owheroes/Zarya')
@app.route('/owheroes/Ashe')
@app.route('/owheroes/Bastion')
@app.route('/owheroes/Cassidy')
@app.route('/owheroes/Echo')
@app.route('/owheroes/Genji')
@app.route('/owheroes/Hanzo')
@app.route('/owheroes/Junkrat')
@app.route('/owheroes/Mei')
@app.route('/owheroes/Pharah')
@app.route('/owheroes/Reaper')
@app.route('/owheroes/Sojourn')
@app.route('/owheroes/Soldier: 76')
@app.route('/owheroes/Sombra')
@app.route('/owheroes/Symmetra')
@app.route('/owheroes/Torbjorn')
@app.route('/owheroes/Tracer')
@app.route('/owheroes/Widowmaker')
@app.route('/owheroes/Ana')
@app.route('/owheroes/Baptiste')
@app.route('/owheroes/Brigitte')
@app.route('/owheroes/Illari')
@app.route('/owheroes/Kiriko')
@app.route('/owheroes/Lifeweaver')
@app.route('/owheroes/Lucio')
@app.route('/owheroes/Mercy')
@app.route('/owheroes/Moira')
@app.route('/owheroes/Zenyatta')
def catch_all():
    return render_template("index.html")

if __name__ == '__main__':
    app.run()