const Employee = require('../models/employeeModel');

const employeeController = {
  getAllEmployees: (req, res) => {
    Employee.getAll((err, results) => {
      if (err) {
        console.error('Erro ao buscar funcionários:', err);
        res.status(500).json({ error: 'Erro ao buscar funcionários' });
        return;
      }
      res.json(results);
    });
  },

  getEmployeeById: (req, res) => {
    const { id } = req.params;
    Employee.getById(id, (err, result) => {
      if (err) {
        console.error('Erro ao buscar funcionário por ID:', err);
        res.status(500).json({ error: 'Erro ao buscar funcionário por ID' });
        return;
      }
      res.json(result[0]);
    });
  },

  createEmployee: async (req, res) => {
    console.log(req.body);
    const { name, role } = req.body;

    const employeer = await Employee.create({ name, role });
    console.log(employeer);
    return res.json({
      message: 'Funcionário criado com sucesso',

    });
  },

  updateEmployee: (req, res) => {
    const { id } = req.params;
    const { name, role } = req.body;
    Employee.update(id, { name, role }, (err) => {
      if (err) {
        console.error('Erro ao atualizar funcionário:', err);
        res.status(500).json({ error: 'Erro ao atualizar funcionário' });
        return;
      }
      res.json({ message: 'Funcionário atualizado com sucesso' });
    });
  },

  deleteEmployee: (req, res) => {
    const { id } = req.params;
    Employee.delete(id, (err) => {
      if (err) {
        console.error('Erro ao excluir funcionário:', err);
        res.status(500).json({ error: 'Erro ao excluir funcionário' });
        return;
      }
      res.json({ message: 'Funcionário excluído com sucesso' });
    });
  },

  populateEmployees: async (req, res) => {
    try {
      await Employee.populateFromRandomUserAPI(10);

      return res.status(200).json({ message: 'Dados de Employee populados com sucesso' });
    } catch (error) {
      console.error('Erro ao buscar usuários aleatórios:', error);
      return res.status(500).json({ error: 'Erro ao buscar usuários aleatórios' });
    }
  },
};

module.exports = employeeController;
