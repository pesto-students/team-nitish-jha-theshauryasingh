
module.exports = (sequelize, DataTypes) => {
  const Asset = sequelize.define('Asset', {
    asset_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    asset_type: {
      type: DataTypes.ENUM('Equity', 'Fixed Income', 'Alternatives'),
      allowNull: false,
    },
    asset_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    value: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  })

  
  return Asset;
}