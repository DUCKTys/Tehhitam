export default {
   names: ['Main Menu'],
   tags: ['main'],
   command: ['bot'],
   start: async (m, { 
      Format
   }) => {
      /**
        *Example Simply Send message
        */
      //example reply message without advertisement (text, image, jid)
      m.adReply(' Online\n\nada yg bisa saya bantu?', setting.thumbnail, m.chat)
      await Format.sleep(3000)                  
   }
};
