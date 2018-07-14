const sequelize = require('../../conf/sequelize')()
const statusModel = sequelize.import('../../models/status')
module.exports = async (req, reply) => {
    try {
        let res = await statusModel.create({
            parent_id: req.payload.parentid,
            status: req.payload.status,
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