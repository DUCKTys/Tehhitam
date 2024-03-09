export default {
   names: ['Main Menu'],
   tags: ['script'],
   command: ['script', 'sc', 'repo', 'repositori'],
   start: async (m) => {
      let script = 'Menggunakan Base Script Ini \n\nhttps://github.com/Nurutomo/wabot-aq'
      m.adsReply(script, setting.thumbnail, m.chat)
   }
};
