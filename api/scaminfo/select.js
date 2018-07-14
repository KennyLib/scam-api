const sequelize = require('../../conf/sequelize')()
const scaminfoModel = sequelize.import('../../models/scaminfo')
module.exports = {
    findAll: async (req, reply) => {
        try {
            let res = await scaminfoModel.findAll()
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
                let res = await scaminfoModel.findById(req.payload.id)
                return JSON.stringify(res)
            } catch (error) {
                return {
                    code: 404,
                    msg: error
                }
            }
        }
}
