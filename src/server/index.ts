/** @format */
import express from 'express'
import http from 'http'
import path from 'path'
import consola from 'consola'

export default class Server {
  private readonly app: express.Application
  private readonly host: string
  private readonly port: number
  private readonly server: http.Server
  private readonly websocket: Websock

  constructor() {
    this.app = express()
    this.host = '127.0.0.1'
    this.port = 3000
    this.server = http.createServer(this.app)
  }
  public start(): void {
    this.app.use(express.static(path.resolve('dist')))
    this.app.get('/chatterbox', (req, res) => {
      res.send(path.resolve('dist / '))
    })
    this.app.get('/', (req, res) => {
      res.sendFile(path.resolve('dist/index.html'))
    })

    this.server.listen(this.port, this.host)
    consola.ready(`Server listening at http://${this.host}:${this.port}`)
  }
}

if (process.argv[2] == '--version') {
  console.log(Server) // eslint-disable-line no-console
} else {
  const server = new Server()
  server.start()
}
