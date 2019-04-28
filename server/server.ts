import * as restify from 'restify'
import { environment } from '../common/environment'
import { Router } from '../common/Router'


export class Server {

  aplication: restify.Server

  initRoutes(routers: Router[] ): Promise<any> {
    return new Promise((resolve, reject) => {
      try { 

        this.aplication = restify.createServer({
          name: 'eatery-api',
          version: '1.0.0'
        })
        
        this.aplication.use(restify.plugins.queryParser())

        // Routes
        for (let router of routers) {
          router.applyRoutes(this.aplication)          
        }

        this.aplication.listen(environment.server.port, () => {
          resolve(this.aplication)
        })        

      } catch (error) {
        reject(error)
      }
    })
  }

  bootstrap(routers: Router[] = []): Promise<Server> {
    return this.initRoutes(routers).then(() => this)
  }

}