import { Request, Response, NextFunction } from "express";
import ram from "./util/create.js";

interface middleWare {
  req: Request;
  res: Response;
  next: NextFunction;
}
type ram = {
  name: string;
};
const Routes = new Map();

function CreateRoute(name: string, value: string) {
  Routes.set(name, value);
}
export default function AutoCache(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { path } = req;
  Routes.has(path) ? null : CreateRoute(path, path);
  console.log(req.path);
  console.log(Routes);
  next();
}
