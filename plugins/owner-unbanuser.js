let handler = async (m, { conn, text }) => {
    if (!text) throw 'Masukkan user yang ingin di ban\n\nExample: .unban 6282361160044'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Etiqueta uno'
    let users = global.db.data.users
    users[who].banned = false
    conn.reply(m.chat, `Desban con exito`, m)
}
handler.help = ['unbanuser']
handler.tags = ['owner']
handler.command = /^unbanuser$/i
handler.mods = true

module.exports = handler
