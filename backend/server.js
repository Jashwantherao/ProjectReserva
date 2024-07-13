// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/projectreserva', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const bookingRoutes = require('./routes/bookingRoutes');
app.use('/api/bookings', bookingRoutes);

app.listen(5000, () => {
  console.log('Server running on port 5000');
});

const shopRoutes = require('./routes/shopRoutes');
app.use('/api/shops', shopRoutes);

// server.js
const http = require('http');
const { Server } = require('socket.io');

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
  },
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});

server.listen(5000, () => {
  console.log('Server running on port 5000');
});

// server.js
const missingBagRoutes = require('./routes/missingBagRoutes');
app.use('/api/missing-bags', missingBagRoutes);

const ticketRoutes = require('./routes/ticketRoutes');
app.use('/api/tickets', ticketRoutes);