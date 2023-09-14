// eslint-disable-next-line import/no-extraneous-dependencies
const axios = require('axios');
const db = require('../db');

const Employee = {
  getAll: (callback) => {
    db.query('SELECT * FROM employees', callback);
  },

  getById: (id, callback) => {
    db.query('SELECT * FROM employees WHERE id = ?', [id], callback);
  },

  create: ({ name, role }, callback) => {
    db.query('INSERT INTO employees (name, role) VALUES (?, ?)', [name, role], callback);
  },

  update: (id, employee, callback) => {
    db.query('UPDATE employees SET name = ?, role = ? WHERE id = ?', [employee.name, employee.role, id], callback);
  },

  delete: (id, callback) => {
    db.query('DELETE FROM employees WHERE id = ?', [id], callback);
  },

  populateFromRandomUserAPI: async (count) => {
    try {
      const response = await axios.get(`https://randomuser.me/api/?results=${count}`);

      if (response.status === 200) {
        const users = response.data.results;

        const employees = users.map((user) => ({
          name: `${user.name.first} ${user.name.last}`,
          role: `Email: ${user.email}, Gender: ${user.gender}, Address: ${user.location.street.name} ${user.location.street.number} ${user.location.city}`,

        }));

        db.query(
          'INSERT INTO employees (name, role) VALUES ?',
          [employees.map((employee) => [employee.name, employee.role])],
          (error, result) => {
            if (error) {
              console.error('Erro ao inserir dados de Employee:', error);
            } else {
              console.log(`Inseridos ${result.affectedRows} funcionários.`);
            }
          },
        );
      } else {
        console.error('Erro na API Random User Generator');
      }
    } catch (error) {
      console.error('Erro ao buscar usuários aleatórios:', error);
    }
  },

};

module.exports = Employee;
