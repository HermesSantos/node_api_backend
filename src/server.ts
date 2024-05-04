import { app } from "./app";

const port = process.env.PORT || 3000

const server = app.listen(port, () => {
  console.log(`Ouvindo na porta ${port}`)
})

process.on('SIGINT', () => {
  server.close()
  console.log('Server was stopped')
})
