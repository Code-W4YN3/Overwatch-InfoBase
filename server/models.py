from config import db, bcrypt
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.orm import validates
from sqlalchemy.ext.hybrid import hybrid_property


class Role(db.Model, SerializerMixin):
    __tablename__ = 'roles'

    serialize_rules= ('-heroes.role',)

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    icon = db.Column(db.String)
    description = db.Column(db.String)

    heroes = db.relationship('Hero', backref = 'role')


class Hero(db.Model, SerializerMixin):
    __tablename__ = 'heroes'

    serialize_only=('passive_abilities', 'role_id', 'id', 'name', 'icon', 'image', 'ability1', 'ability2', 'ability3', 'ability4', 'ultimate_ability', 'ability1_icon', 'ability2_icon', 'ability3_icon', 'ability4_icon', 'ultimate_icon')
    serialize_rules= ('-passive_abilities.heroes',)

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    icon = db.Column(db.String)
    image = db.Column(db.String)
    ability1 = db.Column(db.String)
    ability1_icon = db.Column(db.String)
    ability2 = db.Column(db.String)
    ability2_icon = db.Column(db.String)
    ability3 = db.Column(db.String)
    ability3_icon = db.Column(db.String)
    ability4 = db.Column(db.String)
    ability4_icon = db.Column(db.String)
    ultimate_ability = db.Column(db.String)
    ultimate_icon = db.Column(db.String)

    role_id = db.Column(db.Integer, db.ForeignKey('roles.id'), nullable = False)

    passive_abilities = db.relationship('PassiveAbility', secondary = 'hero_passives', back_populates = 'heroes')


class PassiveAbility(db.Model, SerializerMixin):
    __tablename__ = 'passive_abilities'

    serialize_rules= ('-heroes.passive_abilities',)

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    icon = db.Column(db.String)
    description = db.Column(db.String)

    heroes = db.relationship('Hero', secondary = 'hero_passives', back_populates = 'passive_abilities')


class HeroPassive(db.Model, SerializerMixin):
    __tablename__ = 'hero_passives'

    id = db.Column(db.Integer, primary_key=True)
    hero_id = db.Column(db.Integer, db.ForeignKey('heroes.id'), nullable = False)
    passive_id = db.Column(db.Integer, db.ForeignKey('passive_abilities.id'), nullable = False)


class GameMode(db.Model, SerializerMixin):
    __tablename__ = 'game_modes'

    serialize_rules= ('-maps.game_mode',)

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    icon = db.Column(db.String)
    description = db.Column(db.String)

    maps = db.relationship('Map', backref = 'game_mode')


class Map(db.Model, SerializerMixin):
    __tablename__ = 'maps'

    serialize_rules= ('-game_mode.maps',)

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    image = db.Column(db.String)
    location = db.Column(db.String)
    game_mode_id = db.Column(db.Integer, db.ForeignKey('game_modes.id'))


class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    serialize_rules= ('-saves.user',)

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, unique = True, nullable = False)
    _password_hash = db.Column(db.String, nullable = False)

    saves = db.relationship('Save', backref = 'user')

    @hybrid_property
    def password_hash(self):
        return {"message":"You can't view password hashes"}
    
    @password_hash.setter
    def password_hash(self,password):
        our_hash = bcrypt.generate_password_hash(password.encode('utf-8'))
        self._password_hash = our_hash.decode('utf-8')

    def validatepassword(self,password):
        is_valid = bcrypt.check_password_hash(self._password_hash,password.encode('utf-8'))
        return is_valid


class Save(db.Model, SerializerMixin):
    __tablename__ = 'saves'

    serialize_rules= ('-user.saves',)

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    image = db.Column(db.String)
    url = db.Column(db.String)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable = False)





