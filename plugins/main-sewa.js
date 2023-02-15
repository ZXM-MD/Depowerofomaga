import moment from 'moment-timezone'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
//-----PRICE
let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
    
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00 
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    
    let tag = `@${m.sender.replace(/@.+/, '')}`
  let mentionedJid = [m.sender]
let ucpn = `${ucapan()}`
let name = conn.getName(m.sender)

//sewa
let sh = '2'
let sn = '10'
let ss = '25'
let sp = '30'
let sv = '45'
//premium
let ph = '2'
let pn = '10'
let pp = '25'
let pv = '30'
let ppm = '45'
let wibb = `${wktuwib}`

let info = 
`
Open Sewa Bot:)
`
  /*  {title: "🔖 HEMAT", rowId: '.order *Paket:* HEMAT • Sewa', description: 'PRICE: ' + sh + 'k (1 minggu)' },
	    {title: "🔖 NORMAL", rowId: '.order *Paket:* NORMAL • Sewa', description: 'PRICE: ' + sn + 'k (1 bulan)' },
	{title: "🔖 STANDAR", rowId: '.order *Paket:* STANDAR • Sewa', description: 'PRICE: ' + ss + 'k (2 bulan)' },
	{title: "🔖 PRO", rowId: '.order *Paket:* PRO • Sewa', description: 'PRICE: ' + sp + 'k (4 bulan)' },
	{title: "🔖 VIP", rowId: '.order *Paket:* VIP • Sewa', description: 'PRICE: ' + sv + 'k (12 bulan)' },*/
const sections = [{
title: `⟥⟝⟢⟨ Sᴇᴡᴀ Bᴏᴛ ⟩⟣⟞⟤`,
rows: [
{title: "⟣⟨ HEMAT ⟩⟢",
rowId: '.store sewabottt 15 Hari',
description: 'Pʀɪᴄᴇ Sᴇᴡᴀ 2 ᴋ : 15 Hᴀʀɪ' },
{title: "⟣⟨ NORMAL ⟩⟢",
rowId: '.store sewabottt 30 Hari',
description: 'Pʀɪᴄᴇ Sᴇᴡᴀ 7 ᴋ : 30 Hᴀʀɪ' },
{title: "⟣⟨ STANDAR ⟩⟢",
rowId: '.store sewabottt 40 hari',
description: 'Pʀɪᴄᴇ Sᴇᴡᴀ 10 ᴋ : 40 Hᴀʀɪ' },
{title: "⟣⟨ PRO ⟩⟢",
rowId: '.store sewabottt 50 hari',
description: 'Pʀɪᴄᴇ Sᴇᴡᴀ 15 ᴋ : 50 Hᴀʀɪ' },
]},
{
title: `${htjava} PREMIUM ✦-------`,
rows: [
{title: "🌟 HEMAT", 
rowId: '.order  *premium 20 hari*', 
description: 'PRICE: ' + ph + 'k (20 Hᴀʀɪ)' },
{title: "🌟 NORMAL", 
rowId: '.order *premium 43 hari*', 
description: 'PRICE: ' + pn + 'k (43 Hᴀʀɪ)' },
]},
]

const listMessage = {
  text: info,
  footer:  `Hᴀʟʟᴏ Wᴇʟᴄᴏᴍᴇ Tᴏ Mʏ Bᴏᴛ Sᴛᴏʀᴇ ${name}\n📆 : ${week} ${weton} ${date}\n⌛: ${wibb}`,
  title: '⬒ ───⟢⟨ *Mʏ Lɪsᴛ Sᴛᴏʀᴇ* ⟩⟣─── ⬒',
  buttonText: "Click Here!",
  sections
}

let type = (args[0] || '').toLowerCase()
  let isAll = false, isUser = false
  switch (type) {
  
  case 'sewabottt': 
  let teks = `*${htki} ${command.toUpperCase()} ${htka}*\n📮 : ${text}\n*- @${m.sender.split`@`[0]}*`
conn.reply(global.nomorown + '@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
        contextInfo: {
            mentionedJid: [m.sender]
        }
    })
   m.reply('☑️ Pesan Telah terkirim ke Owner!\n_*Menunggu confirmasi Dari Owner...*_')
  break
  case 'aa': {
  m.reply('ʜᴀʟᴏ:ᴠ')
  }
  break
  
  default:
  if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, listMessage)
  throw false
  }
  /* m.reply('☑️ Pesan Telah terkirim ke Owner!\n_*Menunggu confirmasi Dari Owner...*_')*/
}

handler.help = ['store']
handler.tags = ['main']
handler.command = /^(masuk)$/i

export default handler

function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Sudah Dini Hari Kok Belum Tidur Kak? 🥱"
  if (time >= 4) {
    res = "Pagi Lord 🌄"
  }
  if (time >= 10) {
    res = "Selamat Siang Kak ☀️"
  }
  if (time >= 15) {
    res = "Selamat Sore Kak 🌇"
  }
  if (time >= 18) {
    res = "Malam Kak 🌙"
  }
  return res
}