import { log } from "console";
import { NextFunction, Request, Response } from "express";
import * as redis from "redis";
interface Config {
  excludedPaths?: Set<string>;
}

export class AutoCache {
  private config: Config;

  constructor(param: Config) {
    this.config = param;
  }


  CachingMiddleware = (req: Request, res: Response, next: NextFunction) => {

    const { excludedPaths } = this.config;
    const { path } = req;
    if (excludedPaths?.has(path)) {

      return next();
    }


  };
}
