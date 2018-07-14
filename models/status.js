/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('status', {
		status: {
			type: DataTypes.STRING(200),
			allowNull: true
		},
		parent_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		}
	}, {
		tableName: 'status',
		timestamps: false
	});
};
