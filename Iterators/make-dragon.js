const randomItem = require('./random-item')

makeDragon = () => {
    const dragonSizes = ['big', 'medium', 'tiny']
    const dragonAbilities = ['time', 'fire', 'ice', 'lightning']
    return randomItem(dragonSizes) + ' ' +
        randomItem(dragonAbilities) + ' ' +
        ' dragon'
}

module.exports = makeDragon;
