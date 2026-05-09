class Aluno {
    constructor(primeiroNome, segundoNome, primeiraNota, segundaNota) {
        this.primeiroNome = primeiroNome;
        this.segundoNome = segundoNome;
        this.primeiraNota = primeiraNota;
        this.segundaNota = segundaNota;
    }

    nomeCompleto() {
        return `${this.primeiroNome} ${this.segundoNome}`;
    }

    media() {
        return (this.primeiraNota * 0.6) + (this.segundaNota * 0.4);
    }

    situacao() {
        return this.media() > 6 ? "Aprovado" : "Reprovado";
    }
}

// 1.2. Array contendo 5 objetos Aluno
const alunos = [
    new Aluno("João", "da Silva", 7, 8.5),
    new Aluno("Maria", "Souza", 8, 9),
    new Aluno("Carlos", "Pereira", 5, 6.5),
    new Aluno("Ana", "Clara", 9, 10),
    new Aluno("Fulano", "Santos", 4, 5)
];

// 1.3. Função que percorre o array e mostra as informações
function mostrarAlunos(listaAlunos) {
    listaAlunos.forEach(aluno => {
        // Uso de console.log no F12 e um alert para exibir as informações
        const msg = `Nome: ${aluno.nomeCompleto()}\nMédia: ${aluno.media().toFixed(2)}\nSituação: ${aluno.situacao()}`;
        console.log(msg);
        alert(msg);
    });
}

// 1.5 Mostrar os dados de no mínimo 3 alunos (estamos exibindo os 5)
mostrarAlunos(alunos);