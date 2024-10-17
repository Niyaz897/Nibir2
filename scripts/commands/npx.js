const fs = require("fs");
module.exports = {
  config:{
	name: "😒",
        version: "1.0.1",
        prefix: false,
	permssion: 0,
	credits: "nayan", 
	description: "Fun",
	category: "no prefix",
	usages: "😒",
        cooldowns: 5, 
},

handleEvent: function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
	if (body.indexOf("Niyaz Id ")==0 || body.indexOf("Boss id ")==0 || body.indexOf("niyaz id")==0 || body.indexOf("🔥")==0) {
		var msg = {
				body: "Niyaz Boss ar Id 👇",
				attachment: fs.createReadStream(__dirname + `/Nayan/Niyazp.png`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😁", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {

  }
}
