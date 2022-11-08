const {Model,DataTypes,sequelize} = require('sequelize')
const { CLASSROOM_TABLE } = require('./classroom.model')
const GROUP_TABLE = 'group'

const GroupSchema = {
    id_group:{
        allowNull: false,
        unique:true,
        autoIncrement: false,
        primaryKey: true,
        type: DataTypes.STRING
    },
    yeargroup:{
        allowNull: false,
        type: DataTypes.STRING
    },
    levelgroup:{
        allowNull: false,
        type: DataTypes.STRING
    },
    lettergroup:{
        allowNull: false,
        type: DataTypes.STRING
    },
    periodgroup:{
        allowNull: false,
        type: DataTypes.STRING
    },
    fk_id_classroom:{
        allowNull: false,
        type: DataTypes.STRING, 
        references: {
            model: CLASSROOM_TABLE,
            key: 'id_classroom'
          }
    }

}

class Group extends Model{
    static assocciate(models){
        this.hasMany(models.Student,{
            as:'students',
            foreignKey: 'fk_id_group'
        })
        this.belongsToMany(models.Laboratory,{
            as:'Laboratory',
            through: models.GroupLaboratory,
            foreignKey: 'fk_id_group',
            otherKey: 'fk_id_laboratory'
            
        })

        this.hasMany(models.Middle,{
            as:'middle',
            foreignKey: 'fk_id_group'
        })

        this.hasMany(models.Middle,{
            as:'Premiddle',
            foreignKey: 'fk_id_group'
        })

    
    }
    static config(sequelize){
        return{
            sequelize,
            tableName: GROUP_TABLE,
            modelName: 'Group',
            timestamps: false
        }
    }
}

module.exports ={GROUP_TABLE,GroupSchema,Group}
