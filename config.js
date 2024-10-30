const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94726357671";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_12_05_10_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDcyLFxuICAgICAgICAzMCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDg5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMDksXG4gICAgICAgIDUxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDkzLFxuICAgICAgICA1MSxcbiAgICAgICAgMTYyLFxuICAgICAgICA2OCxcbiAgICAgICAgMTgyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxODYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjA5LFxuICAgICAgICAzOSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTksXG4gICAgICAgIDg0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDExLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDM1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxODUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTgyLFxuICAgICAgICA0LFxuICAgICAgICA3MixcbiAgICAgICAgMjAyLFxuICAgICAgICA4MixcbiAgICAgICAgNixcbiAgICAgICAgMTMxLFxuICAgICAgICA2OCxcbiAgICAgICAgNTksXG4gICAgICAgIDMsXG4gICAgICAgIDMxLFxuICAgICAgICAyNCxcbiAgICAgICAgMTUyLFxuICAgICAgICA1MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjMyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjQ3LFxuICAgICAgICA4MSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgODksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTY3LFxuICAgICAgICA5NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDEzLFxuICAgICAgICAxODgsXG4gICAgICAgIDMzLFxuICAgICAgICAzOCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTY5LFxuICAgICAgICA5NyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDk4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDExLFxuICAgICAgICAyMjksXG4gICAgICAgIDE4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNzMsXG4gICAgICAgIDUwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTc1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNSxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMDksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDUwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDgxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDQ0LFxuICAgICAgICA4NSxcbiAgICAgICAgMjUwLFxuICAgICAgICAzNCxcbiAgICAgICAgNjMsXG4gICAgICAgIDgwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDU0LFxuICAgICAgICA0MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAzNyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDgxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE1NixcbiAgICAgICAgOTYsXG4gICAgICAgIDUzLFxuICAgICAgICA2MyxcbiAgICAgICAgMTA3LFxuICAgICAgICA4MixcbiAgICAgICAgMjA5LFxuICAgICAgICA4NyxcbiAgICAgICAgODMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgODksXG4gICAgICAgIDIzNixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTUxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNixcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDk1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA3M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDc2LFxuICAgICAgICAxMzksXG4gICAgICAgIDQ3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMzgsXG4gICAgICAgIDk3LFxuICAgICAgICAxODIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMTksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMDksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDM5LFxuICAgICAgICAxODgsXG4gICAgICAgIDIwLFxuICAgICAgICAyLFxuICAgICAgICAxODIsXG4gICAgICAgIDkxLFxuICAgICAgICAyMSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxODYsXG4gICAgICAgIDgyLFxuICAgICAgICA4NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA1NyxcbiAgICAgICAgOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjMxLFxuICAgICAgICAyMSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMSxcbiAgICAgICAgMjE3LFxuICAgICAgICA1MixcbiAgICAgICAgOTksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTY5LFxuICAgICAgICA3NCxcbiAgICAgICAgODUsXG4gICAgICAgIDgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTQzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNTUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiaDViWU5LRUtYdmhLdGtWT3NhL0hvS1RPSGFzNnh2dlJNdzlORW55bEdvND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUlU4MnUybzdTYUdaVmNtMW9EX0NJd1wiLFxuICBcInBob25lSWRcIjogXCI4ZmMxZDk3NS03ZjMzLTQ5ZTctYTk0Ny1jZWJkZDc2NTk3Y2FcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDQsXG4gICAgICAxMTYsXG4gICAgICAxOTIsXG4gICAgICAxNDgsXG4gICAgICAxMjgsXG4gICAgICAxMjYsXG4gICAgICAxOTUsXG4gICAgICAyMzgsXG4gICAgICA4MixcbiAgICAgIDEyNSxcbiAgICAgIDIxOCxcbiAgICAgIDE3MSxcbiAgICAgIDE3LFxuICAgICAgNzcsXG4gICAgICAxOSxcbiAgICAgIDE2NyxcbiAgICAgIDE3NixcbiAgICAgIDI0NixcbiAgICAgIDIyNyxcbiAgICAgIDE4MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDIsXG4gICAgICAxNjksXG4gICAgICA3OCxcbiAgICAgIDEyOCxcbiAgICAgIDI1MyxcbiAgICAgIDIxOCxcbiAgICAgIDIzMixcbiAgICAgIDI0OCxcbiAgICAgIDE1OSxcbiAgICAgIDE4MCxcbiAgICAgIDE0OSxcbiAgICAgIDEzMSxcbiAgICAgIDI0NCxcbiAgICAgIDIzNixcbiAgICAgIDg4LFxuICAgICAgMjM2LFxuICAgICAgMTY4LFxuICAgICAgMTY4LFxuICAgICAgNzAsXG4gICAgICAyMTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVkZSUkYzTkRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzI2MzU3NjcxOjM0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMTUyNTU2OTEwMzg3OTM6MzRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTlRVamV3R0VQbkJpTGtHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI1bFBBdEc4aUR2TFp4ZTRkZXB6ZStnRzFpMGtROEpnUWxRd2JQdUs3alZVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImlyamNpUWI0TWtreWxvVTlTS1I3ZEZ4VWpDc3AyZ0UzYm1jTTl4cDF1ZHJiUTlSNTdBU3lsbnlKWVZKM1hhMXJPZUNrV0svOWk4SU5SMy80aU5QRUNnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkR1YXBxcExiczNEbVZGTHBlN1lFa0dsSmpaUXpGRE1YSDdabjNoRFZIaFZ6Q2dwWTFBZmJDNVZNU1ZDb0lCY2pwekNRZHNZMU50eHZIN2l6ZjBUdWpRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzI2MzU3NjcxOjM0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDg1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzAyODk5MTcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCVGNcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJUYy5qc29uIjogIntcImtleURhdGFcIjpcIllxZFc3L1BENWUvZ3RnaDdRdlZGcCtZcGY5dVI3aDY3WWgyMXdUNC9KS1k9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTgzNzMyODk4MCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
