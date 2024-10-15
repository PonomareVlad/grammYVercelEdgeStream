import {Bot} from "grammy";
import {scheduler} from "node:timers/promises";

export const {

    // Telegram bot token from t.me/BotFather
    TELEGRAM_BOT_TOKEN: token,

    // Secret token to validate incoming updates
    TELEGRAM_SECRET_TOKEN: secretToken = String(token).split(":").pop()

} = process.env;

// Default grammY bot instance
export const bot = new Bot(token);

// Sample handler for a simple echo bot
bot.on("message:text", ctx => scheduler.wait(55_000).then(() => ctx.reply(ctx.msg.text)));
