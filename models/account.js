/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('account', {
		wechartContent: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		createtime: {
			type: DataTypes.DATE,
			allowNull: true
		},
		updatetime: {
			type: DataTypes.DATE,
			allowNull: true
		},
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			autoIncrement: true
		}
	}, {
		tableName: 'account',
		timestamps: false
	});
};
