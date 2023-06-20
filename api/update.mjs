import {bot} from "../src/bot.mjs";
import {secretToken} from "../src/data.mjs";
import {webhookStream} from "vercel-grammy";

export const config = {runtime: "edge"};

export default webhookStream(bot, {
    secretToken,
});
