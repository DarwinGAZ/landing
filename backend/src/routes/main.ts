import { Router } from "express";
import { subscribeController } from "../controllers/subscribe.controller";
import { emailController } from "../controllers/email.controller";

const routes = Router();

routes.post("/subscribe", subscribeController);
routes.post("/mail", emailController);
routes.get("/ping", (req, res) => {
    res.json({ pong: true });
});

export default routes;
