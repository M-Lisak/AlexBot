
export const StartBot = async (bot) => {
    try {
        bot.setMyCommands([
            {command: '/start', description: 'Профиль'},
        ])

        bot.on('message', async msg => {
            const text = msg.text
            const chatId = msg.chat.id

            if (text === '/start') {
                
            }
        })
    } catch (e) {
        console.log('error startBot', e)
    }
}