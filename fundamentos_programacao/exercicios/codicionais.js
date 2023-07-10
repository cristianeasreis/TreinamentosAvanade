// definir a senioridade de um profissional pelo salário
// até 3000 => junior
// até

const estagiario = 3000;
const junior = 4500;
const pleno = 6000;
const senior = 6000;

const salario = 4000;

if (salario <= 3000) {
    console.log('Esté profissional é estagiário')
}else if (salario <= 4500) {
    console.log('Este profissional é junior ')
}else if (salario <= 6000) {
    console.log('Este profissional é pleno ')
}else {
    console.log('Este profissional é senior')
}

