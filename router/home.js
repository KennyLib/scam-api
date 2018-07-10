module.exports = {
    method: 'GET',
    path: '/',
    config: { auth: false },
    handler: (request, h) => {
        return h.file('index.html');
    }
}

