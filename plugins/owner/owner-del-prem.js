export default {
   names: ['Owner'],
   tags: ['hapusprem'],
   command: ['removeprem', 'hapusprem', 'delprem'],
   start: async (m, {
      text,
      prefix,
      User,
      command
   }) => {
      if (!text) return m.reply(`Masukkan Nomornya. Contoh: ${prefix+command} nomor\nContoh: ${prefix+command} 62xxxxx`);
      let usernya = `${text}@s.whatsapp.net`
      User.addPremiumUser(usernya, false);
      m.reply(`Nomor ${usernya} tidak lagi menjadi premium`);
   },
   owner: true
};