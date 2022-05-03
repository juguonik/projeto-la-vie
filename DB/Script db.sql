create database lavie;
use lavie;
CREATE TABLE pacientes(
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100),
  email VARCHAR(100),
  idade DATE
);
CREATE TABLE psicologos(
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100),
  email VARCHAR(100),
  senha VARCHAR(24),
  apresentacao VARCHAR(100)
);

CREATE TABLE atendimentos(
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  paciente_id int not null,
  psicologos_id int not null,
  constraint paciente_psicologos foreign key (paciente_id) references pacientes(id),
  constraint psicologos_paciente foreign key (psicologos_id) references psicologoss(id),
  data_atendimento DATE,
  observacao VARCHAR(100)  
  );
  




