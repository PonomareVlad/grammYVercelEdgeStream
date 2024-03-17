import {bot, secretToken} from "../src/bot.mjs";
import {webhookStream} from "vercel-grammy";

export const config = {runtime: "edge"};

// Custom grammY handler for incoming updates via webhooks with streaming response
export const POST = webhookStream(bot, {
    timeoutMilliseconds: 59_000,
    secretToken,
});
