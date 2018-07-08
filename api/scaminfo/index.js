module.exports = () => {
    return {
        select: require('./select'),
        insert: require('./insert'),
        update: require('./update')
    }
}