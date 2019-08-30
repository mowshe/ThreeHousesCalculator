from flask import Flask, jsonify
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS, cross_origin

app = Flask("Growths")
api = Api(app)

CORS(app, support_credentials=True)

@app.route("/login")
@cross_origin(supports_credentials=True)
def login():
  return jsonify({'success': 'ok'})


growths = {
        "Annette": 
        {
            "Hp":"23",
            "Str":"6",
            "Mag":"11",
            "Dex":"7",
            "Spd":"7",
            "Lck":"6",
            "Def":"5",
            "Res":"4",
            "Cha":"6",
        },

        "Ashe": 
        {
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
        
        "Bernadetta": 
        {
            "Hp":"25",
            "Str":"8",
            "Mag":"5",
            "Dex":"6",
            "Spd":"8",
            "Lck":"6",
            "Def":"6",
            "Res":"2",
            "Cha":"6",
        },

        "Byleth": 
        {
            "Hp":"27",
            "Str":"13",
            "Mag":"6",
            "Dex":"9",
            "Spd":"8",
            "Lck":"8",
            "Def":"6",
            "Res":"6",
            "Cha":"7",
        }
}

class Growth(Resource):
    def get(self):
        return growths

class Name(Resource):
    def get(self, name):
        return growths[name],200

class IndividualStat(Resource):
    def get(self, name, stat):
        return growths[name][stat],200

api.add_resource(Growth,"/growth")
api.add_resource(Name,"/growth/<string:name>")
api.add_resource(IndividualStat,"/growth/<string:name>/<string:stat>")

app.run(debug=True)
