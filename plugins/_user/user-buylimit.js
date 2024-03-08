export default {
   names: ['User Menu'],
   tags: ['buylimit'],
   command: ['buylimit'],
   start: async (m, {
      text,
      User
   }) => {
      if (!text) return m.reply(`Masukkan Parameter contoh: .buylimit 1`);
      if (User.cekuang(m.sender)) return m.reply(`Uang kamu tidak cukup atau habis untuk membeli limit\nsilahkan bayar hutang kalo minus punya hutang\nketik .claimuang untuk uang harian\natau Ketik .my untuk cek sisa uang`);
      let deduct;
      let upgrade;
      if (/^[1-9]\d*$/.test(text)) {
         let jumlahLimit = parseInt(text);
         let hargaLimit = jumlahLimit * 10; //dont change 10 uang per 1 limit
         deduct = {
            uang: hargaLimit
         };
         upgrade = {
            limit: jumlahLimit
         };
         await User.dbPlus(m.sender, upgrade);
         await User.dbMinus(m.sender, deduct);
         m.adReply(`Kamu berhasil membeli ${jumlahLimit} limit dengan harga ${hargaLimit} uang`, setting.thumbnail, m.chat)
      } else {
         return m.reply(`Masukkan parameter angka yang valid`);
      }
   }
};