export default async function displayLoadingScreen(conn, from) {
    const loadingStages = [
      "𝙳𝙰𝚁𝙺 𝙱𝙾𝚃 ʟᴏᴀᴅɪɴɢ 《 █▒▒▒▒▒▒▒▒▒▒▒》10%,",
      "𝙳𝙰𝚁𝙺 𝙱𝙾𝚃 ʟᴏᴀᴅɪɴɢ 《 ████▒▒▒▒▒▒▒▒》30%,",
      "𝙳𝙰𝚁𝙺 𝙱𝙾𝚃 ʟᴏᴀᴅɪɴɢ 《 ███████▒▒▒▒▒》50%,",
      "𝙳𝙰𝚁𝙺 𝙱𝙾𝚃 ʟᴏᴀᴅɪɴɢ 《 ██████████▒▒》80%,",
      "𝙳𝙰𝚁𝙺 𝙱𝙾𝚃 ʟᴏᴀᴅɪɴɢ 《 ████████████》100%,",
      "𝙳𝙰𝚁𝙺 𝙱𝙾𝚃 ʜᴀs ʟᴏᴀᴅᴇᴅ ᴄᴏᴍᴘʟᴇᴛʟʏ"
    ];
  
    try {
      const { key } = await conn.sendMessage(from, { text: 'ʟᴏᴀᴅɪɴɢ...' });
  
      for (let i = 0; i < loadingStages.length; i++) {
        await conn.relayMessage(from, {
          protocolMessage: {
            key: key,
            type: 14,
            editedMessage: {
              conversation: loadingStages[i]
            }
          }
        }, {});
      }
    } catch (error) {
      console.error('Error displaying loading screen:', error);
    }
  }
  
