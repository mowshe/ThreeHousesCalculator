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
            "Hp":"25",
            "Str":"30",
            "Mag":"50",
            "Dex":"50",
            "Spd":"35",
            "Lck":"35",
            "Def":"20",
            "Res":"30",
            "Cha":"35",
        },

        "Ashe": 
        {
            "Hp":"22",
            "Str":"22",
            "Mag":"22",
            "Dex":"22",
            "Spd":"22",
            "Lck":"22",
            "Def":"22",
            "Res":"22",
            "Cha":"22",
        },
        
        "Bernadetta": 
        {
            "Hp":"22",
            "Str":"22",
            "Mag":"22",
            "Dex":"22",
            "Spd":"22",
            "Lck":"22",
            "Def":"22",
            "Res":"22",
            "Cha":"22",
        },

        "Byleth": 
        {
            "Hp":"111",
            "Str":"11",
            "Mag":"16",
            "Dex":"11",
            "Spd":"11",
            "Lck":"11",
            "Def":"11",
            "Res":"11",
            "Cha":"11",
        },

        "Myrmidon":
        {
            "Hp":"10",
            "Str":"0",
            "Mag":"0",
            "Dex":"0",
            "Spd":"5",
            "Lck":"0",
            "Def":"0",
            "Res":"-5",
            "Cha":"5",
        },        
        
        "Soldier":
        {
            "Hp":"10",
            "Str":"5",
            "Mag":"0",
            "Dex":"0",
            "Spd":"5",
            "Lck":"0",
            "Def":"0",
            "Res":"-5",
            "Cha":"5",
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
