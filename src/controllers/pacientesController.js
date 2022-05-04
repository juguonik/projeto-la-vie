const  Pacientes = require("../models/Pacientes");

const pacientesController = {
  async listarPacientes(req, res){
    try {
      const listaPacientes = await Pacientes.findAll();
      res.status(201).json(listaPacientes);
    } 
    catch (error) {
      res.json(`Falha ao listar pacientes!`);
      console.error(error)
    }
  },

  async listarPacientesId(req, res){
    const { id } = req.params;
    try {
      const paciente = await Pacientes.findByPk(id);

      if(!paciente){
        res.status(404).json("Paciente não encontrado");
      }
      res.status(201).json(paciente);
    } 
    catch (error) {
      res.json(`Falha ao listar pacientes!`);
      console.error(error)
    }
  },

  async cadastrarPacientes(req, res){
    try {
      const { nome, email, idade } = req.body;

      const existePaciente = await Pacientes.count({where: { email }});
      if(existePaciente){
        return res.status(400).json("email já cadastrada!");
      }

      const novoPaciente = await Pacientes.create({
        nome, email, idade
      });
      res.status(201).json(novoPaciente);
    } 
    catch (error) {
      res.json(`Falha ao cadastrar paciente!`);
      console.error(error);
    }
  },

  async excluirPacientes(req, res){
    try {
      const { id } = req.params;

      const existeId = await Pacientes.count({where: { id }});

      if(!existeId){
        return res.status(400).json("Paciente não encontrado!");
      }

      await Pacientes.destroy({
        where: { id }
      });

      res.status(201).json("Paciente removido!");
    } catch (error) {
      res.json("Falha ao remover paciente!")
      console.error(error);
    }
  },

  async atualizarPacientes(req, res){
    try {
    const { id } = req.params;
    const { nome, email, idade } = req.body;

    const existeId = await Pacientes.count({where: { id }});

    if(!existeId){
      return res.status(400).json("Paciente não encontrado!");
    }

    const pacienteAtualizado = await Pacientes.update(
    { nome, email, idade },
    {
      where: {
        id,
      }
    }
    );
     res.status(201).json("Paciente atualizado com sucesso!");
    } 
    catch (error) {
      res.status(404).json("Verfique os dados e tente novamente");
      console.error(error);
    };
    }
};

module.exports = pacientesController;