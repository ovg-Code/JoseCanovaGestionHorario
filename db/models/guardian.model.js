const {Model,DataTypes,sequelize} = require('sequelize')

const GUARDIAN_TABLE = 'guardian'

const GuardianSchema = {
    id_card_guardian:{
        allowNull: false,
        unique:true,
        autoIncrement: false,
        primaryKey: true,
        type: DataTypes.STRING
    },
    firstnameguardian:{
        allowNull: false,
        type: DataTypes.STRING
    },
    secondnameguardian:{
        type: DataTypes.STRING
    },
    firstlastnameguardian:{
        allowNull: false,
        type: DataTypes.STRING
    },
    secondlastnameguardian:{
        type: DataTypes.STRING
    },
    phonenumberguardian:{
        allowNull: false,
        type: DataTypes.STRING
    },
    emailguardian:{
        type: DataTypes.STRING
    },
    provinceguardian:{
        allowNull: false,
        type: DataTypes.STRING
    },
    districtguardian:{
        allowNull: false,
        type: DataTypes.STRING
    },
    corregimientoguardian:{
        allowNull: false,
        type: DataTypes.STRING
    },
    photoguardian:{
        type: DataTypes.STRING
    },
    passwordguardian:{
        allowNull: false,
        type: DataTypes.STRING
    }

}

class Guardian extends Model{
    static assocciate(models){
        this.hasMany(models.Studentguardian,{
            as:'student',
            foreignKey: 'id_card_student',
        })
    }
    static config(sequelize){
        return{
            sequelize,
            tableName: GUARDIAN_TABLE,
            modelName: 'Guardian',
            timestamps: false
        }
    }
}

module.exports ={GUARDIAN_TABLE,GuardianSchema,Guardian}
