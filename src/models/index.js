const atendimento = require ('./Atendimentos');
const paciente = require ('./Pacientes');
const psicologo = require ('./Psicologos');

paciente.belongsTo(psicologo, {
    foreignKey: 'psicologo_id',
});

psicologo.hasMany(paciente, {
    foreignKey: 'paciente_id',
});

psicologo.belongsToMany(paciente, {
    foreignKey: 'paciente_id',
    through: atendimento,
});

paciente.belongsToMany(psicologo, {
    foreignKey: 'psicologo_id',
    through: atendimento,
});

module.exports = {
    paciente,
    psicologo,
};