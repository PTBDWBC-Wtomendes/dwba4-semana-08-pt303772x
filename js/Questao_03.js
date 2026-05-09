function calcularNota(nome, nota1, nota2) {
    let nomeAluno = nome;
    let primeiraNota = nota1;
    let segundaNota = nota2;
    
    let multNota1 = primeiraNota * 0.6;
    let multNota2 = segundaNota * 0.4;
    
    let notaTotal = multNota1 + multNota2;
    
    alert(`Aluno: ${nomeAluno}\nPrimeira nota: ${primeiraNota}\nSegunda nota: ${segundaNota}`);
    alert(`Aluno: ${nomeAluno}\nNota total: ${notaTotal.toFixed(2)}`);
}

// Resolvendo com no mínimo 3 alunos
calcularNota("João da Silva", 7, 8.5);
calcularNota("Maria Souza", 8, 9);
calcularNota("Carlos Pereira", 5, 6.5);