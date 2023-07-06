import {webhookStream} from "vercel-grammy";
import {bot, secretToken} from "../src/bot.mjs";

export const config = {runtime: "edge"};

// Custom grammY handler for incoming updates via webhooks with streaming response
export default webhookStream(bot, {
    timeoutMilliseconds: 59_000,
    secretToken,
});
