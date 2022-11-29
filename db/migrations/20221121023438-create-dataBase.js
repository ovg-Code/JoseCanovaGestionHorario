'use strict';

const{ClassroomSchema,CLASSROOM_TABLE}=require('./../models/classroom.model')
const {GroupSchema,GROUP_TABLE} = require('./../models/group.model')
const {GroupLaboratorySchema,GROUPLABORATORY_TABLE} = require('./../models/groupLaboratory.model')
const {GuardianSchema,GUARDIAN_TABLE} = require('./../models/guardian.model')
const {LaboratorySchema,LABORATORY_TABLE} = require('./../models/laboratory.model')
const {MiddleSchema,MIDDLE_TABLE} = require('./../models/middle.model')
const {TeacherSchema,TEACHER_TABLE} = require('./../models/teacher.model')
const {PremiddleSchema,PREMIDDLE_TABLE} = require('./../models/premiddle.model')
const {StudentSchema,STUDENT_TABLE} = require('./../models/student.model')
const {StudentguardianSchema,STUDENTGUARDIAN_TABLE} =require('./../models/studentguardian.model')
const {SubjectSchema,SUBJECT_TABLE} = require('./../models/subject.model')
const {TeacherSubjectGroupSchema,TEACHERSUBJECTGROUP_TABLE} = require('./../models/teachersubjectgroup.model')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(CLASSROOM_TABLE,ClassroomSchema)
    await queryInterface.createTable(GROUP_TABLE,GroupSchema)
    await queryInterface.createTable(LABORATORY_TABLE,LaboratorySchema)
    await queryInterface.createTable(GROUPLABORATORY_TABLE,GroupLaboratorySchema)
    await queryInterface.createTable(GUARDIAN_TABLE,GuardianSchema)
    await queryInterface.createTable(MIDDLE_TABLE,MiddleSchema)
    await queryInterface.createTable(TEACHER_TABLE,TeacherSchema)
    await queryInterface.createTable(PREMIDDLE_TABLE,PremiddleSchema)
    await queryInterface.createTable(STUDENT_TABLE,StudentSchema)
    await queryInterface.createTable(STUDENTGUARDIAN_TABLE,StudentguardianSchema)
    await queryInterface.createTable(SUBJECT_TABLE,SubjectSchema)
    await queryInterface.createTable(TEACHERSUBJECTGROUP_TABLE,TeacherSubjectGroupSchema)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.drop(CLASSROOM_TABLE)
    await queryInterface.drop(GROUP_TABLE)
   | await queryInterface.drop(GROUPLABORATORY_TABLE)
    await queryInterface.drop(GUARDIAN_TABLE)
    await queryInterface.drop(LABORATORY_TABLE)
    await queryInterface.drop(MIDDLE_TABLE)
 |   await queryInterface.drop(TEACHER_TABLE)
    await queryInterface.drop(PREMIDDLE_TABLE)
    await queryInterface.drop(STUDENT_TABLE)
    await queryInterface.drop(STUDENTGUARDIAN_TABLE)
    await queryInterface.drop(SUBJECT_TABLE)
    await queryInterface.drop(TEACHERSUBJECTGROUP_TABLE)
  }
};
