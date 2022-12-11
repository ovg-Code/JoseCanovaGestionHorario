'use strict';

const {TeacherSubjectGroupSchema,TEACHERSUBJECTGROUP_TABLE} = require('./../models/teachersubjectgroup.model')


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.addColumn(TEACHERSUBJECTGROUP_TABLE,'id_schedule',TeacherSubjectGroupSchema.id_schedule)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn(TEACHERSUBJECTGROUP_TABLE,'id_schedule')
  }
};
