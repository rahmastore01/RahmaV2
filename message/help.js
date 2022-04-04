exports.menu = (pushname, tampilUcapan, ownerName, botName, pendaftar, time, calender, latensi, runtime, isOwner, isPremium, sender, getBalance, balance, limitCount, limit, getLimit, prefix) => {
    return`Selamat ${tampilUcapan} ${pushname}

👑 Creator : ${ownerName}
🤖 Bot Name : ${botName}
👥 Total Pengguna : ${pendaftar.length}
⌚ Jam : ${time}
📆 Tanggal : ${calender}
📊 Speed : ${latensi.toFixed(4)} second
⏳ Runtime :
${runtime(process.uptime())}

*USER INFO*

*‣ Status : ${isOwner ? 'Owner' : isPremium ? 'Premium' : 'Gratisan'}*
*‣ Name : ${pushname}*
*‣ Nomor : ${sender.split('@')[0]}*
*‣ Balance : $${(getBalance(sender, balance))}*
*‣ Limit : ${isOwner ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}*

*LIST MENU BOT*

あ ${prefix}groupmenu
あ ${prefix}downloadmenu
あ ${prefix}searchmenu
あ ${prefix}toolsmenu
あ ${prefix}wibumenu
あ ${prefix}rpgmenu
あ ${prefix}funmenu
あ ${prefix}ownermenu
あ ${prefix}othermenu
`
}

exports.groupmenu = (prefix) => {
    return`
あ ${prefix}antilink
あ ${prefix}antiwame
あ ${prefix}welcome
あ ${prefix}antivirtex
あ ${prefix}opengrup
あ ${prefix}closegrup
あ ${prefix}linkgc
あ ${prefix}promote
あ ${prefix}demote
あ ${prefix}add
あ ${prefix}kick
あ ${prefix}setpp
あ ${prefix}setdesc
あ ${prefix}setname
あ ${prefix}hidetag
あ ${prefix}revoke
あ ${prefix}event
`
}

exports.downloadmenu = (prefix) => {
    return`
あ ${prefix}play
あ ${prefix}ytmp3
あ ${prefix}ytmp4
あ ${prefix}tiktok
あ ${prefix}tiktokmp3
あ ${prefix}instagram
あ ${prefix}mediafire
`
}

exports.searchmenu = (prefix) => {
    return`
あ ${prefix}nickff
あ ${prefix}nickml
あ ${prefix}nickpubg
あ ${prefix}nickdomino
あ ${prefix}ytsearch
あ ${prefix}jooxsearch
あ ${prefix}spotifysearch
あ ${prefix}pinterestsearch
`
}

exports.toolsmenu = (prefix) => {
    return`
あ ${prefix}attp
あ ${prefix}toimg
あ ${prefix}sticker
あ ${prefix}smoji
あ ${prefix}swm
あ ${prefix}take
あ ${prefix}tomp3
あ ${prefix}tovideo
`
}

exports.textpromenu = (prefix) => {
    return`
あ ${prefix}pornhub
あ ${prefix}grafity
あ ${prefix}logowolf
`
}

exports.wibumenu = (prefix) => {
    return`
あ ${prefix}waifu
あ ${prefix}neko
あ ${prefix}trap
あ ${prefix}blowjob
あ ${prefix}shinobu
あ ${prefix}megumin
あ ${prefix}bully
あ ${prefix}cuddle
あ ${prefix}cry
あ ${prefix}hug
あ ${prefix}awoo
あ ${prefix}kiss
あ ${prefix}lick
あ ${prefix}pat
あ ${prefix}smug
あ ${prefix}bonk
あ ${prefix}yeet
あ ${prefix}blush
あ ${prefix}smile
あ ${prefix}wave
あ ${prefix}highfive
あ ${prefix}handhold
あ ${prefix}nom
あ ${prefix}bite
あ ${prefix}glomp
あ ${prefix}slap
あ ${prefix}kill
あ ${prefix}happy
あ ${prefix}wink
あ ${prefix}poke
あ ${prefix}dance
あ ${prefix}cringe
`
}

exports.rpgmenu = (prefix) => {
    return`
あ ${prefix}joinrpg
あ ${prefix}quest
あ ${prefix}inventory
あ ${prefix}mining
あ ${prefix}mancing
あ ${prefix}adventure
あ ${prefix}topleaderboard
`
}

exports.funmenu = (prefix) => {
    return`
あ ${prefix}truth
あ ${prefix}dare
あ ${prefix}jadian
あ ${prefix}ngewe
あ ${prefix}terganteng
あ ${prefix}terjelek
あ ${prefix}tercantik
あ ${prefix}tergay
あ ${prefix}terpedo
あ ${prefix}terwibu
`
}

exports.ownermenu = (prefix) => {
    return`
あ ${prefix}mode
あ ${prefix}self
あ ${prefix}public
あ ${prefix}exif
あ ${prefix}bc
あ ${prefix}setprofile
あ ${prefix}setbio
あ ${prefix}setname
あ ${prefix}addpremium
あ ${prefix}delpremium
`
}

exports.othermenu = (prefix) => {
    return`
あ ${prefix}owner
あ ${prefix}report
あ ${prefix}speed
あ ${prefix}runtime
あ ${prefix}donasi
あ ${prefix}listpremium
あ ${prefix}buylimit
`
}
