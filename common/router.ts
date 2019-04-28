import * as restify from 'restify'


export abstract class Router {
  abstract applyRoutes(aplication: restify.Server)
}