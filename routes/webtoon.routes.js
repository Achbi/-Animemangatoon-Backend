// routes/webtoons.js
import express from "express";

import { Add } from "../controller/webtoon.contoller.js";
import { getallwebtoon } from "../controller/webtoon.contoller.js";
import { getwebtoonbyid} from "../controller/webtoon.contoller.js";
import { deletewebtoon } from "../controller/webtoon.contoller.js";
import protectMessage from "../middlewares/protectroute.js";
import limiter from "../middlewares/ratelimit.js";
const router = express.Router();


router.post("/new",protectMessage,limiter,Add);

router.get("/getwt", getallwebtoon,);

router.get("/getwt/:id",getwebtoonbyid);

router.delete("/:id",protectMessage,limiter,deletewebtoon);

export default router;
