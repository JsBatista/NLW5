import {Router} from "express";
import { SettingsController } from "./controllers/SettingsController";

const routes = Router();

/**
 * Tipos de Parâmetros
 * RouteParams => Parametros de rotas
 * QueryParams => Filtros e buscas
 * BodyParams => Inserções, passar objetos dentro da requisição, JSONs
 */

const settingsController = new SettingsController();

routes.post("/settings", settingsController.create);

export {routes};