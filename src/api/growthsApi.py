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
        "Caspar":
        {  
            "Hp": "55",
            "Str": "45",
            "Mag": "25",
            "Dex": "45",
            "Spd": "45",
            "Lck": "40",
            "Def": "30",
            "Res": "20",
            "Cha": "25"
        },
        "Claude":
        {
            "Hp": "35",
            "Str": "40",
            "Mag": "25",
            "Dex": "60",
            "Spd": "55",
            "Lck": "45",
            "Def": "30",
            "Res": "25",
            "Cha": "55"
        },
        "Cyril":
        {
        
            "Hp": "35",
            "Str": "20",
            "Mag": "15",
            "Dex": "40",
            "Spd": "40",
            "Lck": "30",
            "Def": "10",
            "Res": "10",
            "Cha": "15"
        },
        "Dedue":
        {
            "Hp": "60",
            "Str": "50",
            "Mag": "15",
            "Dex": "30",
            "Spd": "20",
            "Lck": "25",
            "Def": "50",
            "Res": "10",
            "Cha": "30"
        },
        "Dimitri":
        {
        
            "Hp": "55",
            "Str": "60",
            "Mag": "20",
            "Dex": "50",
            "Spd": "50",
            "Lck": "25",
            "Def": "40",
            "Res": "20",
            "Cha": "55"
        },
        "Dorothea": 
        {
            "Hp": "40",
            "Str": "20",
            "Mag": "40",
            "Dex": "45",
            "Spd": "40",
            "Lck": "35",
            "Def": "15",
            "Res": "35",
            "Cha": "40"
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
