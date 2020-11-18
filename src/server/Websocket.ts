/** @format */

import socketIO from 'socket.io'
import http from 'http'
import consola from 'consola'
import Server from './index'

// export default class WebSocket {
//   private io: socketIO.Server;

//   constructor(server: http.Server) {
//     this.io = socketIO(server, res {
//       maxHttpBufferSize: 52488000;
//       res.setHeader('Content-Type', 'text/html')
//     })
//     this.io.on('connection', WebSocket.connection);
//   }

//   private static connection(socket: SocketIO.Socket) {

//   }
// }

export default class websocket {
  private io: socketIO.Server

  constructor(server: http.Server) {
    this.io = new socketIO.Server()
    this.io.on('connection', websocket.connection)
  }

  private static connection(socket: socketIO.Socket) {
    socket.on('test', (data: any) => {
      //womp;
      console.log('did it', data)
    })
    socket.emit('connection')
  }
}
