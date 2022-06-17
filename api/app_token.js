var jwt = require('jsonwebtoken');
var uuid4 = require('uuid4');

var app_access_key = process.env.APP_ACCESS_KEY;
var app_secret = process.env.APP_SECRET;

var payload = {
  access_key: app_access_key,
  room_id: '629dc724b873787aa270296b',
  user_id: uuid4(),
  role: 'guest',
  type: 'app',
  version: 2,
  iat: Math.floor(Date.now() / 1000),
  nbf: Math.floor(Date.now() / 1000),
};

export default function handler(req, res) {
  jwt.sign(
    payload,
    app_secret,
    {
      algorithm: 'HS256',
      expiresIn: '24h',
      jwtid: uuid4(),
    },
    function (err, token) {
      res.status(200).json({ token });
    }
  );
}
