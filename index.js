console.log('🕒 Starting Meleficent . . .')
import path, {
   dirname
} from 'path'
import {
   spawn
} from 'child_process'
import {
   fileURLToPath
} from 'url'
import express from 'express'
process.on('uncaughtException', console.log);
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express(); 
app.get('/', (req, res) => {
  res.send('Hello Express app!')
}) 
app.listen(3000, () => {
  console.log('server started')
})
const start = () => {
   let args = [path.join(__dirname, 'main.js'), ...process.argv.slice(2)]
   let p = spawn(process.argv[0], args, {
         stdio: ['inherit', 'inherit', 'inherit', 'ipc']
      })
      .on('message', data => {
         if (data == 'reset') {
            console.log('🕒 Restarting Meleficent . . .')
            p.kill();
         }
         if (data == 'uptime') {
            p.send(process.uptime())
         }
      })
      .on('exit', code => {
         console.error('Exited with code:', code)
         p.kill();
         start();
      })
};
start();
