const sequelize = require('../../conf/sequelize')()
const scaminfoModel = sequelize.import('../../models/scaminfo')
module.exports = async (req, reply) => {
    try {

        let scaminfo = await scaminfoModel.findById(req.payload.id)
        scaminfo.content = req.payload.content || scaminfo.content
        scaminfo.scam_status = req.payload.status || scaminfo.scam_status
        scaminfo.update_time = new Date()
        await scaminfo.save()
        if (scaminfo || scaminfo.length > 0) {
            scaminfo = {
                code: 200,
                msg: 'success',
                data: scaminfo
            }
        } else {
            scaminfo = {
                code: 1001,
                msg: '修改失败'
            }
        }
        return JSON.stringify(scaminfo)
    } catch (error) {
        return {
            code: 404,
            msg: error
        }
    }
}