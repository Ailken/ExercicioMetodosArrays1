function agendar (listaPacientes, paciente) {
    listaPacientes.push(paciente);
    console.log(listaPacientes.join(', '));
}

function atender(listaPacientes) {
    listaPacientes.shift();
    console.log(listaPacientes.join(', '));
}

function cancelar(listaPacientes, paciente) {
    const index = listaPacientes.indexOf(paciente);
    if (index !== -1) {
        listaPacientes.splice(index, 1);
    }
    console.log(listaPacientes.join(', '));
}

const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];
agendar(pacientes, 'Mário');
atender(pacientes);
cancelar(pacientes, 'Ana');