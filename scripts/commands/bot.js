module.exports.config = {
  name: "bot",
  version: "0.0.4",
  permission: 0,
  prefix: false,
  credits: "Nayan",
  description: "talk with bot",
  category: "user",
  usages: "",
  cooldowns: 5,
};

module.exports.run = async function({ api, event, args, Users }) {
    const axios = require("axios");
    const query = args.join(" ");
    var name = await Users.getNameUser(event.senderID);
    var tl = ["আহ শুনা আমার তোমার অলিতে গলিতে উম্মাহ😇😘",
  " কি গো সোনা আমাকে ডাকছ কেনো",
  "বার বার আমাকে ডাক কেন😡",
  "আহ শোনা আমার আমাকে এতো ডাক্তাছো কেনো আসো বুকে আশো🥱",
  "হুম জান তোমার অইখানে না মানে গালে উম্মমাহ😷😘",
  " আসসালামু আলাইকুম বলেন আপনার জন্য কি করতে পারি",
  "আমাকে এতো না ডেকে বস নিয়াজকে একটা গফ দে 🙄",
  "jang hanga korba",
  "Jan ki hoiche bolo🙂"];
    var rand = tl[Math.floor(Math.random() * tl.length)];
    
    try {
        if (!query) {
            return api.sendMessage(`👤‚『${name}』,\n💌${rand}\n\n`, event.threadID, event.messageID);
        }
        
        const encodedQuery = encodeURIComponent(query);
        const apiUrl = `https://gemini-api-production-5fa9.up.railway.app/gemini?q=${encodedQuery}`;
        
        const res = await axios.get(apiUrl);
        
        if (res.data && res.data.generated_text) {
            return api.sendMessage(`${name},\n\n${res.data.generated_text}`, event.threadID, event.messageID);
        } else {
            return api.sendMessage('Failed to get a valid response', event.threadID, event.messageID);
        }
    } catch (error) {
        console.error('Error fetching data:', error.message);
        return api.sendMessage('An error occurred while fetching the response', event.threadID, event.messageID);
    }
};
