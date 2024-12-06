const fs = require('fs-extra')
//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '255628227557 ;
global.mongodb = process.env.MONGODB_URI || "" ; 
global.port=5000  ;
global.audio = '' ; 
global.video = '' ;
global.blockJids = process.env.BLOCK_JID ||'120363169665426586@g.us' ;
global.allowJids = process.env.ALLOW_JID ||'120363169665426586@g.us' ;
global.email = 'astromedia0010@outlook.com' ; 
global.github = 'https://github.com/Astropeda/Asta-Md' ;
global.location = 'Nigeria Lagos' ;
global.timezone  = process.env.TIME_ZONE || 'Africa/Lagos'
global.gurl = '' ; 
global.sudo =  process.env.SUDO || "2348039607375" ;
global.devs = "2348039607375"; //Dont change it
global.mztit = process.env.MZTIT ||"Asta-Md", 
global.Gname = process.env.GNAME ||"Asta-Md-sᴜᴘᴘᴏʀᴛ",
global.zyt = process.env.ZYT || '1',
global.waUrl = process.env.WAURL ||"",
global.website = '' ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || '' ;
module.exports = {
  sessionName: process.env.SESSION_ID || 'SUHAIL_14_37_12_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAzMixcbiAgICAgICAgNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTE2LFxuICAgICAgICA4MyxcbiAgICAgICAgMTkxLFxuICAgICAgICA2OCxcbiAgICAgICAgMTc3LFxuICAgICAgICA1MyxcbiAgICAgICAgMyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMzksXG4gICAgICAgIDE4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDk3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDgxLFxuICAgICAgICA3MixcbiAgICAgICAgMjQxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNjcsXG4gICAgICAgIDYzLFxuICAgICAgICAxMSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDg0LFxuICAgICAgICA4MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMzksXG4gICAgICAgIDYzLFxuICAgICAgICA5NixcbiAgICAgICAgMTU1LFxuICAgICAgICA2MyxcbiAgICAgICAgODAsXG4gICAgICAgIDkzLFxuICAgICAgICAxODMsXG4gICAgICAgIDU1LFxuICAgICAgICA3NyxcbiAgICAgICAgMyxcbiAgICAgICAgODYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDg5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEyNixcbiAgICAgICAgOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTEyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEwLFxuICAgICAgICA1NyxcbiAgICAgICAgMTczLFxuICAgICAgICAzMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNDEsXG4gICAgICAgIDM1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTk4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDM1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc1LFxuICAgICAgICAxODgsXG4gICAgICAgIDI1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDk3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDU4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEwMixcbiAgICAgICAgNDIsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMTksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTUzLFxuICAgICAgICA1MixcbiAgICAgICAgMzEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxOTksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMCxcbiAgICAgICAgMTkzLFxuICAgICAgICA3MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIzLFxuICAgICAgICA3NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDMxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNDUsXG4gICAgICAgIDIyNixcbiAgICAgICAgNDMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgODQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTE0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDQyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDg4LFxuICAgICAgICA4MSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDczLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjksXG4gICAgICAgIDE0NixcbiAgICAgICAgNzIsXG4gICAgICAgIDg0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwLFxuICAgICAgICA0OSxcbiAgICAgICAgMjA2LFxuICAgICAgICA0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDYwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgODksXG4gICAgICAgIDE0MSxcbiAgICAgICAgOSxcbiAgICAgICAgMTY1LFxuICAgICAgICA3NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDYzLFxuICAgICAgICAwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDkzLFxuICAgICAgICAxOTksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNzZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMwLFxuICAgICAgICA2MixcbiAgICAgICAgMjAwLFxuICAgICAgICAxMixcbiAgICAgICAgMTIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEzMixcbiAgICAgICAgODcsXG4gICAgICAgIDExMixcbiAgICAgICAgMzcsXG4gICAgICAgIDI1LFxuICAgICAgICA0LFxuICAgICAgICA3OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDExOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjQyLFxuICAgICAgICA0NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNDksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTE2LFxuICAgICAgICA3MixcbiAgICAgICAgMTUwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTE2LFxuICAgICAgICA5NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTQ2LFxuICAgICAgICA4LFxuICAgICAgICAxNTksXG4gICAgICAgIDgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMDksXG4gICAgICAgIDMzLFxuICAgICAgICA4NixcbiAgICAgICAgMTM0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNzQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNTVWdU5HY2Q0MWlodFhkbmY4TWJHcVVPK1hiYjVtM3hHRG9hNWtaUndMMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiOUhSTkpnSkpRMkdQZF9mUU5fMm1xQVwiLFxuICBcInBob25lSWRcIjogXCJhZGFjZDAzMS0wZjYwLTQ4YzQtYWYwMS02ZTY1NDEyNTc4YTVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQwLFxuICAgICAgODgsXG4gICAgICAyMDMsXG4gICAgICAxODMsXG4gICAgICAxOTcsXG4gICAgICA0MixcbiAgICAgIDIyNSxcbiAgICAgIDIxMSxcbiAgICAgIDI0NSxcbiAgICAgIDEwOSxcbiAgICAgIDIwMyxcbiAgICAgIDE1NixcbiAgICAgIDU0LFxuICAgICAgMTEwLFxuICAgICAgMTMxLFxuICAgICAgMjA2LFxuICAgICAgMjgsXG4gICAgICAxNTMsXG4gICAgICAxODcsXG4gICAgICAyMzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTAsXG4gICAgICAyMTEsXG4gICAgICA0NixcbiAgICAgIDIxOCxcbiAgICAgIDIwMixcbiAgICAgIDEwLFxuICAgICAgMjEwLFxuICAgICAgMjA5LFxuICAgICAgMTM0LFxuICAgICAgNzEsXG4gICAgICAxOTUsXG4gICAgICA1NCxcbiAgICAgIDIyMyxcbiAgICAgIDIwMCxcbiAgICAgIDEyNixcbiAgICAgIDQwLFxuICAgICAgMTUsXG4gICAgICAyMjksXG4gICAgICAxNDIsXG4gICAgICA1NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJNN0NLUksxSFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU1NjI4MjI3NTU3OjE4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwibWFpZ2F0Z3JlYXQxMjNcIixcbiAgICBcImxpZFwiOiBcIjgwNDE5MzAzMjE5MzEyOjE4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ042TXQ0SUhFSU9ZekxvR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwieU1Xa09XaXAwc25mcDJYdEdjRnV2T2Q3MEhZUDNDVThXdWs5K2lhMDgydz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ4RHJCc1k0L0JZc0R4N1lnMmpXZEhvdExaSTk1WnRveFU3WEN2dlduU3A4TGs4OTNWSW1YUnVmSlExT3dlNFFieU5MUWFUOXcrc1ZaZG1TNVowemtDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJqSDJIUVNPWUFiWUR6Q3NEM1BRQ2phYUZuRkJIQS95VC9ieUx6STVCWUxCVGlOTlQ3cFl1VCtnRTU3S0NDTkVCRExJZEk5Z0N3MVF3K0VHdUc2L1pndz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTU2MjgyMjc1NTc6MThAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEwOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMzNDk1ODE2XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ==',
  botname: process.env.BOT_NAME || 'Asta-Md',
  ownername:  process.env.OWNER_NAME || `maiga`,
  author:  process.env.PACK_AUTHER || 'Astro', 
  auto_read_status : process.env.AUTO_READ_STATUS || 'true',
  packname:  process.env.PACK_NAME || "Asta-Md" , 
  autoreaction: process.env.AUTO_REACTION || 'true',
  antibadword : process.env.ANTI_BAD_WORD || 'nobadwordokey',
  alwaysonline: process.env.ALWAYS_ONLINE || 'true', 
  antifake :   process.env.FAKE_COUNTRY_CODE ||'212',
  readmessage: process.env.READ_MESSAGE || 'true',
  HANDLERS: process.env.PREFIX || '.',
  warncount : process.env.WARN_COUNT || 2,
  disablepm: process.env.DISABLE_PM || "false",
  MsgsInLog:process.env.MSGS_IN_LOG ||'false',
  pmMsgsInLog:process.env.PM_MSGS_IN_LOGS ||'false',
  levelupmessage: process.env.LEVEL_UP_MESSAGE || 'true', 
  antilink: process.env.ANTILINK_VALUES || 'chat.whatsapp.com',
  antilinkaction: process.env.BRANCH || 'remove',
  BRANCH: process.env.BRANCH || 'Main',
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME,
  HEROKU_API_KEY: process.env.HEROKU_API_KEY,
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "34wcCGPoe3yaGtpiBZgx4SN7",
  caption :process.env.CAPTION || "\t*ᴘᴏᴡᴇʀᴇᴅ ʙʏ Asta-Md* ",
  promote_demote_messages : process.env.PROMOTE_DEMOTE_MESSAGES || 'true' ,
  OPENAI_API_KEY: process.env.OPENAI_API_KEY ||'' ,
  VERSION: process.env.VERSION || 'V.4.5.0',
  LANG: process.env.THEME|| 'Asta_Md',
  menu : process.env.MENU || '',
  WORKTYPE: process.env.WORKTYPE || 'private'
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
