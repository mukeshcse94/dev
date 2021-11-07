const express = require('express');
const msgRouter = express.Router();
const Nexmo = require('nexmo');
const socketio = require('socket.io');

// Init Nexmo
const nexmo = new Nexmo({
  apiKey: 'YOURAPIKEY',
  apiSecret: 'YOURAPISECRET'
}, { debug: true });


// Catch form submit
msgRouter.post('/', (req, res) => {
  // res.send(req.body);
  // console.log(req.body);
  const { number, text } = req.body;

  nexmo.message.sendSms(
    'YOURVURTUALNUMBER', number, text, { type: 'unicode' },
    (err, responseData) => {
      if (err) {
        console.log(err);
      } else {
        const { messages } = responseData;
        const { ['message-id']: id, ['to']: number, ['error-text']: error } = messages[0];
        console.dir(responseData);
        // Get data from response
        const data = {
          id,
          number,
          error
        };

        // Emit to the client
        io.emit('smsStatus', data);
      }
    }
  );
});

// Connect to socket.io
// const io = socketio(server);
// io.on('connection', (socket) => {
//   console.log('Connected');
//   io.on('disconnect', () => {
//     console.log('Disconnected');
//   })
// });


module.exports = msgRouter;
