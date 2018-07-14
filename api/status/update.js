const sequelize = require('../../conf/sequelize')()
const statusModel = sequelize.import('../../models/status')
module.exports = async (req, reply) => {
    try {
        let _status = await statusModel.findById(req.payload.id)
        _status.status = req.payload.status || _status.status
        _status.update_time = new Date()
        await _status.save()
        if (_status || _status.length > 0) {
            scaminfo = {
                code: 200,
                msg: 'success',
                data: _status
            }
        } else {
            scaminfo = {
                code: 1001,
                msg: '修改失败'
            }
        }
        return JSON.stringify(_status)
    } catch (error) {
        return {
            code: 404,
            msg: error
        }
    }
}