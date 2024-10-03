const TelegramApi = require('node-telegram-bot-api')
const { StartBot } = require('./functionalBot')

// const webAppUrl = 'https://main--glistening-lebkuchen-76ca7f.netlify.app/'

const TOKEN = '7603045394:AAH0xA8uG6Zb4stOjxSu7EL5zr0fzySFflY'

const bot = new TelegramApi(TOKEN, {polling: true})

StartBot(bot)
