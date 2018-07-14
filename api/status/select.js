const sequelize = require('../../conf/sequelize')()
const statusModel = sequelize.import('../../models/status')
module.exports = {
    findAll: async (req, reply) => {
        try {
            let res = await statusModel.findAll({
                order: [['create_time', 'DESC']]
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
                    message: '查询失败'
                }
            }
            return JSON.stringify(res)
        } catch (error) {
            return {
                code: 404,
                msg: error
            }
        }
    },
    findById:
        async (req, reply) => {
            try {
                let res = await statusModel.findById(req.payload.id)
                if (res || res.length > 0) {
                    res = {
                        status: 200,
                        message: 'success',
                        data: res
                    }
                } else {
                    res = {
                        status: 1001,
                        message: '查询失败'
                    }
                }
                return JSON.stringify(res)
            } catch (error) {
                return {
                    code: 404,
                    msg: error
                }
            }
        }
}
