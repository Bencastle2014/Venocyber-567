//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "losrios755@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "255742862266";
global.sudo = process.env.SUDO || "254769323504";
global.owner = process.env.OWNER_NUMBER || "254769323504";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "true";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidU43akNYaUpraWRJVDAzQXpxcklETnYzSVl2THRyNUhIZ3Jta01odUltcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTElxNDQ0UnBKeEl4SURRLzV5TnVRM2Q1OUR6MkljOE03MnJaWUVtTVRFST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPQngxRXBBbDlDNFNzS1V2a0JpdXM0a0pHY2M5Y3Yzd3FrbHBZS3p5czBZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZUVBaS2JVQ3dpTmtYQzhxNkkxRjFoOFhLenROT09LVU4zakR2czE2OEdNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklFVmQ4QitpcmZWMHBabk8vRFQxRkpJMFBVR2FsZXRlZWZReEN4MWltMWc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpidWVkeVJ1aytUL2c4Z0lZT05vUUdJK3ZWdEo2RVlpa1RKZndDL1NYbGs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia09LY1d1RjJ1TnJpTHZXblpydVNvdVdvanhzR3VIakZTMFU5S2hKdi8wUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidlk2ZE56TEJab05hSllueWpCZGp3eUhLME13aEVjY1BUbVJtb0hCUUJIYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imx2NURCVURlNVdhMzJvNWZRcS9QbW1vN0JWM2pKOVZ1SWh1a3pCbEloMkRwK1JMK0JDYXc3N3F3dSs2dFJ3ckVpeUp1RkRXQ2srelA2K2VuTEkyaGh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjA5LCJhZHZTZWNyZXRLZXkiOiIwUmxYeGsrTnVLZys0S1VKT1NwQ2Q0dU44ZlRuY3MvaEE2cldaWTd1WHpFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJVZnA4Zi1jYVFDbU14V0hCUS1ybXh3IiwicGhvbmVJZCI6IjBjZDFlYjgxLWY5ZmQtNGJkOC04MjZkLWJhY2Y3YjBlZjA3NSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvdUduaDFLS05SVzVsS2ZyZ1RSZzY1WW9NNnM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkNyTkNtSTM4Mk81MTFrMCtLL1ZRb1hVOU5JPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkpMUEVISzU5IiwibWUiOnsiaWQiOiIyNTQ3NjkzMjM1MDQ6NzhAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1Bub2h1Y0RFSmFlOWJRR0dBWWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IldYczUrc2NpTURxRWt0bGRSd0FXMnE1R21kaGpVOCtVU3pOdzd0WjRRVkk9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkFhdkozTE9tUDhYOVlweGs0NUZUSXJNbXJpMmxCSVFKWndTa0FFT011WXNZVldlVjJpNkIxMzRiQVBQNjNzTDk1cERGZmFSTDNSaTcvUlBEOE9xZkR3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJHenIxTHFFZEJxZlpJaGd4b010WVdYZ2JMSSs1N2UrdGhtK0RvWlh2RUR5Qk85WEhKWU44a002UkxIOHdEMkwvWTArMmw0TU1IdmNySXhiVDVobkFodz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDc2OTMyMzUwNDo3OEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWbDdPZnJISWpBNmhKTFpYVWNBRnRxdVJwbllZMVBQbEVzemNPN1dlRUZTIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIxNTg1NDQzLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU5RcyJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in Tanzania| enjoy your time| this is 𝐕𝐄𝐍𝐎𝐂𝐘𝐁𝐄𝐑 𝐌𝐃",
  author: process.env.PACK_AUTHER || "VENOCYBER",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "G-UNIT❤️",
  ownername: process.env.OWNER_NAME || "BENCASTLE ❤️",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "VENOCYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
