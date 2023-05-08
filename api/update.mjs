import bot from "../src/bot.mjs";
import {webhookStream} from "edge-grammy";

export const config = {runtime: "edge"};

export default webhookStream(bot);
