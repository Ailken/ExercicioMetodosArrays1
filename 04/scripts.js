function atendimento (listaPacientes, operar, nomePaciente) {
    if(operar === 'agendar') {
    listaPacientes.push(nomePaciente);
    } else if (operar === 'atender') {
        listaPacientes.shift();
    }

    console.log(listaPacientes.join(', '));
}

const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];
atendimento(pacientes, 'agendar', 'Mário');
atendimento(pacientes, 'atender');