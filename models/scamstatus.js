/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('scamstatus', {
		status: {
			type: DataTypes.STRING(200),
			allowNull: true
		},
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		}
	}, {
		tableName: 'scamstatus',
		timestamps: false
	});
};
