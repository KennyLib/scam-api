/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('accountstatus', {
		status: {
			type: DataTypes.STRING(200),
			allowNull: true
		},
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		}
	}, {
		tableName: 'accountstatus',
		timestamps: false
	});
};
