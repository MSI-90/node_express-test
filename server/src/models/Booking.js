const { DataTypes } = require("sequelize");
const sequelize = require('../config/database');
const Event = require("./Event");

const Booking = sequelize.define("Booking", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    event_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Event,
            key: 'id'
        },
        onDelete: "CASCADE",
    },
    user_id: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    }
}, {
    tableName: "bookings",
    timestamps: false,
    indexes: [
        {
            unique: true,
            fields: ["event_id", "user_id"]
        }
    ]
});

Event.hasMany(Booking, { foreignKey: "event_id" });
Booking.belongsTo(Event, { foreignKey: "event_id" });