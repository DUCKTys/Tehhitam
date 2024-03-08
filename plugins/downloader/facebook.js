import { igdl } from '../../lib/download.js';
export default {
   names: ['Downloader'],
   tags: ['facebook'],
   command: ['fb', 'facebook', 'fbdl'],
   start: async (m, {
      conn,
      text,
      prefix,
      command
   }) => {
      if (!text) return m.reply(`Masukan link facebook nya! \nContoh: ${prefix+command} https://www.facebook.com/100070546388418/posts/pfbid0279knMA1reA28n52rKTDmDW1wMa88afUHZMGNapEUJQ1bRbQcYMfBaeHz4nhhzNTUl/`);
      let res = await igdl(text);
      m.adReply(loading, setting.thumbnail, m.chat);
      let result = res.data;
      let data;
      try {
         m.reply(`Data Found!`);
         data = result.find(i => i.resolution === "720p (HD)")        
      } catch {
         m.reply(`HD not found switch to SD`);
         data = result.find(i => i.resolution === "360p (SD)")
      }
      let video = data.url      
      conn.sendFile(m.chat, video, {
         caption: `𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊`,
         quoted: m
      });      
   },
   limit: 5,
   premium: false
};
