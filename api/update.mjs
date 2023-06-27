import {webhookStream} from "vercel-grammy";
import {bot, secretToken} from "../src/bot.mjs";

export const config = {runtime: "edge"};

// Default grammY handler for incoming updates via webhooks
export default webhookStream(bot, {
    timeoutMilliseconds: 29_000,
    secretToken,
});
