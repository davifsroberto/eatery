import * as restify from 'restify'
import { environment } from '../common/environment'


export class Server {

  aplication: restify.Server

  initRoutes(): Promise<any> {
    return new Promise((resolve, reject) => {
      try { 

        this.aplication = restify.createServer({
          name: 'eatery-api',
          version: '1.0.0'
        })
        
        this.aplication.use(restify.plugins.queryParser())

        // Routes
        this.aplication.get('/info', (req, resp, next) => {
          resp.json({ 
            browser: req.userAgent() 
          })
          return next()
        })

        this.aplication.listen(environment.server.port, () => {
          resolve(this.aplication)
        })        

      } catch (error) {
        reject(error)
      }
    })
  }

  bootstrap(): Promise<Server> {
    return this.initRoutes().then(() => this)
  }

}