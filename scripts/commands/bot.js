module.exports.config = {
    name: "bot",
    version: "1.0.2",
    permission: 0,
    prefix: 'awto',
    credits: "Emon",
    description: "ai",
    category: "botAi",
    usages: "bot+bot Help", 
    cooldowns: 5,
};

module.exports.run = async function({ api, event, args, Users }) {
    const axios = require("axios");
    const query = args.join(" ");
    var name = await Users.getNameUser(event.senderID);
    var tl = ["বেশি bot Bot করলে leave নিবো কিন্তু!😒😒 " , "শুনবো না😼 তুমি আমাকে প্রেম করাই দাও নি🥺 পচা তুমি!🥺 " , "এত কাছেও এসো না,প্রেম এ পরে যাবো তো!🙈" , "Bolo Babu, তুমি কি আমাকে ভালোবাসো? 🙈 " , "বার বার ডাকলে মাথা গরম হয় কিন্তু!😑", "হা বলো😒,কি করতে পারি!🧐" , "এতো ডাকছিস কোনো?🤨 ","মে হলে নিয়াজ বসের সাথে প্রেম করো?🙈. " ,  "আরে Bolo আমার জান ,কেমন আসো?😚 " , "Bot বলে অসম্মান করছো,😰😿" , "Hop 😾,Jan বল Jan😼" , "চুপ ,নই তো দাত ভেগে দিবো কিন্তু" , "Bot না , জানু বল জানু 😘 " , "এতো ডাকো কেনো?😾,আমার নিয়াজ জানু এর সাথে ব্যাস্ত আসি😋"  , "আমাকে ডাকলে ,আমি কিন্তূ কিস করে দেবো😘 " , "আমি মজা করার mood এ নাই😒" , "হা জানু , এইদিক এ আসো কিস দেই🤭 😘" , "দূরে যাও, তোমার কোনো কাজ নাই, শুধু bot bot কর?  😉😋🤣" , "তোমার কথা তোমার বাড়ির কেউ শুনে না ,তো আমি কোনো শুনবো ?🤔😂 " , "কি হলো ,মিস টিস কর নাকি?🤣" , "বলো কি বলবা, সবার সামনে বলবা নাকি?🤭 " , "কালকে দেখা করিও তো একটু 😈" , "হা বলো, শুনছি আমি 😏" , "আর কত বার ডাকবা ,শুনছি তো" , "BOSS Niyaz কে Ummmmha দেও!😒" , "বলো কি করতে পারি তোমার জন্য" , "আমি তো অন্ধ কিছু দেখি না🐸😎" , "Bot না জানু,বলো 😌" , "বলো জানু 🌚" , "তোর কি চোখে পড়ে না আমি Niyaz BOSS এর সাথে ব্যাস্ত আসি😒"];
    var rand = tl[Math.floor(Math.random() * tl.length)];
    
    try {
        if (!query) {
            return api.sendMessage(`👤${name},\n💌${rand}\n\n`, event.threadID, event.messageID);
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
