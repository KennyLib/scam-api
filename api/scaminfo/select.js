const sequelize = require('../../conf/sequelize')()
const scaminfoModel = sequelize.import('../../models/scaminfo')
module.exports = {
    findAll: async (req, reply) => {
        try {
            let _where = {}
            if (req.payload.status) {
                where = {
                    scam_status: req.payload.status
                }
            }
            let res = await scaminfoModel.findAll({
                where: _where,
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
                let res = await scaminfoModel.findById(req.payload.id)
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
        }
}
