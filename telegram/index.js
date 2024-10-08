const TelegramApi = require('node-telegram-bot-api')

const TOKEN = '7603045394:AAH0xA8uG6Zb4stOjxSu7EL5zr0fzySFflY'

const bot = new TelegramApi(TOKEN, {polling: true})

const start = async () => {
    bot.setMyCommands([
        {command: '/start', description: 'Старт'},
    ])

    bot.on('message', async msg => {
        const text = msg.text
        const chatId = msg.chat.id
        if(text == '/start') {
            bot.sendMessage(chatId, 'стартуем!')
        } else {
            bot.sendMessage(chatId, text)

        }
    })
}

start()