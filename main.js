const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const fs = require('fs')
const moment = require('moment-timezone')
const figlet = require('figlet')
const { wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
const { color, bgcolor } = require('./lib/color')
const setting = JSON.parse(fs.readFileSync('./config.json'))
let session = `./${setting.sessionName}.json`
const _welkom = JSON.parse(fs.readFileSync('./database/welcome.json'))

require('./message/help.js')
require('./message/rahma.js')
nocache('./message/help.js', module => console.log(`${module} Updated!`))
nocache('./message/rahma.js', module => console.log(`${module} Updated!`))

const starts = async (rahma = new WAConnection()) => {
    rahma.logger.level = 'warn'
    rahma.version = [2, 2152, 12]
    console.log(color(`\x1b[1;37m\n> Base New\n`,'red'))
	console.log(color(figlet.textSync('RahmaV1', {
		font: 'Standard',
		horizontalLayout: 'default',
		vertivalLayout: 'default',
		width: 80,
		whitespaceBreak: false
	}), 'green'))
    console.log(color('[ CREATED BY HARISS GANTENG AWOKWOK ]'))
    rahma.browserDescription = ['Rahma','Chrome', '3.0']
    rahma.on('qr', () => {
        console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan Dong'))
    })

    fs.existsSync(session) && rahma.loadAuthInfo(session)
    rahma.on('connecting', () => {
        start('2', 'Connecting...')
    })
    rahma.on('open', () => {
        success('2', 'Connected!!')
    })
    await rahma.connect({timeoutMs: 30*1000})
        fs.writeFileSync(`./${setting.sessionName}.json`, JSON.stringify(rahma.base64EncodedAuthInfo(), null, '\t'))
    
    rahma.on('chat-update', async (message) => {
        require('./message/rahma.js')(rahma, message, _welkom)
    })

const sendButImage = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1;
mhan = await rahma.prepareMessage(id, kma, MessageType.image);
buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4,
}
rahma.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}

    rahma.on("group-participants-update", async (anu) => {
    const isWelkom = _welkom.includes(anu.jid)
    try {
      groupMet = await rahma.groupMetadata(anu.jid)
      groupMembers = groupMet.participants
      groupAdmins = getGroupAdmins(groupMembers)
      mem = anu.participants[0]

      console.log(anu)
      try {
        pp_user = await rahma.getProfilePicture(mem)
      } catch (e) {
        pp_user = "https://telegra.ph/file/c9dfa715c26518201f478.jpg"
      }
      try {
        pp_grup = await rahma.getProfilePicture(anu.jid)
      } catch (e) {
        pp_grup =
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
      }
      if (anu.action == "add" && mem.includes(rahma.user.jid)) {
        rahma.sendMessage(anu.jid, `Halo!.. Saya ${setting.botName}, Assisten kamu masa kini\nuntuk memulai silahkan ketik !menu.`, "conversation")
      }
      if (!isWelkom) return
      if (anu.action == 'add' && !mem.includes(rahma.user.jid)) {
        groupMet = await rahma.groupMetadata(anu.jid)
        groupMembers = groupMet.participants
        mdata = await rahma.groupMetadata(anu.jid)
        memeg = mdata.participants.length
        num = anu.participants[0]
        groupName = mdata.subject
        let v = rahma.contacts[num] || { notify: num.replace(/@.+/, '') }
        anu_user = v.vname || v.notify || num.split('@')[0]
        teks = `Hai kak @${mem.split('@')[0]}\nWelcome in group  *${mdata.subject}*\n\n*Jangan lupa baca desk ya ajg*`
        buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/welcome?nama=${anu_user}&descriminator=${groupMembers.length}&memcount=${memeg}&gcname=${encodeURI(mdata.subject)}&pp=${pp_user}&bg=https://i.ibb.co/x3ykXgn/20211125-113317.jpg`)
        but = [{ buttonId: `welkom`, buttonText: {displayText: `Welcome`}, type: 1}]
        sendButImage(mdata.id, teks, `Welcome Message By F-Team`, buff, but, options = {contextInfo: {mentionedJid: [num]}, thumbnail: Buffer.alloc(0)})
      }
      if (!isWelkom) return
      if (anu.action == 'remove' && !mem.includes(rahma.user.jid)) {
        mdata = await rahma.groupMetadata(anu.jid)
        num = anu.participants[0]
        let w = rahma.contacts[num] || { notify: num.replace(/@.+/, '') }
        anu_user = w.vname || w.notify || num.split('@')[0]
        memeg = mdata.participants.length
        out = `Kenapa tuh? kok keluar?\nkena mental ya @${num.split('@')[0]} ?\n\n*aeoakwokeok canda ngab🗿*`
        buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/goodbye?nama=${anu_user}&descriminator=${groupMembers.length}&memcount=${memeg}&gcname=${encodeURI(mdata.subject)}&pp=${pp_user}&bg=https://i.ibb.co/x3ykXgn/20211125-113317.jpg`)
        butt = [{ buttonId: `left`, buttonText: {displayText: `Sayonara`}, type: 1}]
        sendButImage(mdata.id, out, `Leave Message By F-Team`, buff, butt, options = {contextInfo: {mentionedJid: [num]}, thumbnail: Buffer.alloc(0)})
      }
      if (anu.action == "promote") {
        const mdata = await rahma.groupMetadata(anu.jid)
        anu_user = rahma.contacts[mem]
        num = anu.participants[0]
        try {
          ppimg = await rahma.getProfilePicture(
            `${anu.participants[0].split("@")[0]}@c.us`
          )
        } catch {
          ppimg =
            "https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg"
        }
        let buff = await getBuffer(ppimg)
        teks = `@${num.split("@")[0]} Telah dipromote`
        rahma.sendMessage(mdata.id, teks, MessageType.text)
      }

      if (anu.action == "demote") {
        anu_user = rahma.contacts[mem]
        num = anu.participants[0]
        const mdata = await rahma.groupMetadata(anu.jid)
        try {
          ppimg = await rahma.getProfilePicture(
            `${anu.participants[0].split("@")[0]}@c.us`
          )
        } catch {
          ppimg =
            "https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg"
        }

        let buff = await getBuffer(`https://gatauajg.yogipw.repl.co/api/demote?name=${anu_user.notify}&msg=selamat%20menjadi%20admin&mem=5&picurl=${ppimg}&bgurl=https://cdn.discordapp.com/attachments/819995259261288475/835055559941292032/style.jpg`)
        teks = `@${num.split("@")[0]} Telah didemote`
        rahma.sendMessage(mdata.id, teks, MessageType.text)
      }
    } catch (e) {
      console.log("Error : %s", color(e, "red"))
    }

  })
}


/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    console.log('Module', `'${module}'`, 'dipantau oleh tukang owner')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

starts()
