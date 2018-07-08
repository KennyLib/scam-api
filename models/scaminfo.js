/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('scaminfo', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		content: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		account_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		scam_status: {
			type: DataTypes.INTEGER(3),
			allowNull: true
		},
		create_time: {
			type: DataTypes.DATE,
			allowNull: true
		},
		update_time: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		tableName: 'scaminfo',
		timestamps: false
	});
};
