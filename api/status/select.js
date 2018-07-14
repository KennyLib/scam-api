const sequelize = require('../../conf/sequelize')()
const statusModel = sequelize.import('../../models/status')
module.exports = {
    findAll: async (req, reply) => {
        try {
            let res = await statusModel.findAll({
                order: [['create_time', 'DESC']]
            })
            res = {
                code: 200,
                msg: 'success',
                data: res
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
                return JSON.stringify(res)
            } catch (error) {
                return {
                    code: 404,
                    msg: error
                }
            }
        }
}
