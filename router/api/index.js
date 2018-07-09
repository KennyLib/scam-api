module.exports = () => {
    return {
        method: 'GET',
        path: '/api',
        config: {
            auth: false,
            tags: ['api'],
            description: 'Get todo',
            notes: '测试接口是否通畅'
        },
        handler: (request, h) => {
            return 'api';
        }
    }
}