from config import app,db
from flask_restful import Resource, Api
from models import Role, Hero, PassiveAbility, HeroPassive, GameMode, Map, User, Save
from flask import jsonify, make_response, session, request, render_template


api = Api(app)

@app.route('/')
def home():
    return {'Welcome': 'to Overwatch 2 Api!'}

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
    
    def get(self, id):
        user_id = [user.id for user in User.query.all()]
        if(id in user_id):
            user_dict = User.query.filter_by(id = id).first().to_dict()
            return make_response(jsonify(user_dict), 200)
        else:
            return {"error": "User not found"}
    
api.add_resource(UsersById, '/users/<int:id>')

class Saves(Resource):
    
    def get(self):
        saves_dict = [save.to_dict() for save in Save.query.all()]
        return make_response(jsonify(saves_dict), 200)
    
api.add_resource(Saves, '/saves')

if __name__ == '__main__':
    app.run()