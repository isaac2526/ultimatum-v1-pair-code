const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: Mbuvi_Tech,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("maher-zubair-baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function MBUVI_MD_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Pair_Code_By_Mbuvi_Tech = Mbuvi_Tech({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: ["Chrome (Ubuntu)", "Chrome (Linux)", "Chrome (MacOs)"]
             });
             if(!Pair_Code_By_Mbuvi_Tech.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await Pair_Code_By_Mbuvi_Tech.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            Pair_Code_By_Mbuvi_Tech.ev.on('creds.update', saveCreds)
            Pair_Code_By_Mbuvi_Tech.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(5000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(800);
               let b64data = Buffer.from(data).toString('base64');
               let session = await Pair_Code_By_Mbuvi_Tech.sendMessage(Pair_Code_By_Mbuvi_Tech.user.id, { text: '' + b64data });

               let MBUVI_MD_TEXT = `
𝐔𝐋𝐓𝐈𝐌𝐀𝐓𝐔𝐌-𝐕1 𝘾𝙊𝙉𝙉𝙀𝘾𝙏𝙀𝘿*
 *𝐔𝐋𝐓𝐈𝐌𝐀𝐓𝐔𝐌-𝐕1 𝙇𝙊𝙂𝙂𝙀𝘿* 
______________________________
╔════◇
『••• 𝗩𝗶𝘀𝗶𝘁 𝗙𝗼𝗿 𝗛𝗲𝗹𝗽 •••』
║❍ 𝐎𝐰𝐧𝐞𝐫: _https://wa.me/2348135138141_
║❍ 𝐑𝐞𝐩𝐨: _https://github.com/isaac2526/Ultimatum-V1
║❍ 𝐖𝐚𝐂𝐡𝐚𝐧𝐧𝐞𝐥: _https://whatsapp.com/channel/0029Vb3Vx4jCBtx6yFD45S19_
║❍ 𝐓𝐞𝐥𝐞𝐠𝐫𝐚𝐦:_https://t.me/isaacarinolatech_
______________________________

Don't Forget To Give Star⭐ To My Repo`

 await Pair_Code_By_Mbuvi_Tech.sendMessage(Pair_Code_By_Mbuvi_Tech.user.id,{text:MBUVI_MD_TEXT},{quoted:session})
 

        await delay(100);
        await Pair_Code_By_Mbuvi_Tech.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    MBUVI_MD_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service Currently Unavailable"});
         }
        }
    }
    return await MBUVI_MD_PAIR_CODE()
});
module.exports = router
