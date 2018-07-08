const sequelize = require('../../conf/sequelize')()
const scaminfoModel = sequelize.import('../../models/scaminfo')
module.exports = async (req, reply) => {
    try {
        let res = await scaminfoModel.create({
            content: req.query.content,
            account_id: 1,
            scam_status: 1,
            create_time: new Date()
        })
        if (res || res.length > 0) {
            res = {
                status: 200,
                message: 'success',
                data: res
            }
        } else {
            res = {
                status: 1001,
                message: '插入失败'
            }
        }
        return JSON.stringify(res)
    } catch (error) {
        return {
            status: 404,
            message: error
        }
    }
}