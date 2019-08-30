from flask import Flask
from flask_restful import Api, Resource, reqparse

app = Flask("Growths")
api = Api(app)


growths = [
    {
        "name": "Ashe",
        "Hp":"23",
        "Str":"8",
        "Mag":"5",
        "Dex":"8",
        "Spd":"9",
        "Lck":"6",
        "Def":"5",
        "Res":"6",
        "Cha":"5",
    },
    {
        "name": "ae",
        "Hp":"__",
        "Str":"__",
        "Mag":"__",
        "Dex":"__",
        "Spd":"__",
        "Lck":"__",
        "Def":"__",
        "Res":"__",
        "Cha":"__",
    }
]

class Growth(Resource):
    def get(self, name):
        for growth in growths:
            if(name == growth["name"]):
                return growth,200
            return "User not found",404

api.add_resource(Growth,"/growth/<string:name>")
app.run(debug=True)
