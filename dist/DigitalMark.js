"use strict";
//criando uma classe abstrata para servir de modelo para as próximas classes
class Pessoa {
    nome;
    cpf;
    email;
    data_Nascimento;
    telefone_primario;
    telefone_secundario;
    genero;
    constructor(nome, cpf, email, data_Nascimento, telefone_primario, telefone_secundario, genero) {
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
        this.data_Nascimento = data_Nascimento;
        this.telefone_primario = telefone_primario;
        this.telefone_secundario = telefone_secundario;
        this.genero = genero;
    }
}
//criando a classe 'Funcionario' que vai extender atributos da classe modelo 'Pessoa'
class Funcionario extends Pessoa {
    //atributos próprios de 'Funcionario'
    id_funcionario;
    cargo;
    constructor(nome, cpf, email, data_Nascimento, id_funcionario, cargo, telefone_primario, telefone_secundario, genero) {
        //chamando o construtor da classe modelo (Pessoa) usando super()
        super(nome, cpf, email, data_Nascimento, telefone_primario, telefone_secundario, genero);
        this.id_funcionario = id_funcionario,
            this.cargo = cargo;
    }
    //criando o método para mostrar os dados do funcionario
    dadosFuncionario() {
        console.log('------Dados do Funcionário------');
        console.log(`ID: ${this.id_funcionario}`);
        console.log(`Cargo ${this.cargo}`);
        console.log(`Nome: ${this.nome}`);
        console.log(`CPF: ${this.cpf}`);
        console.log(`Email: ${this.email}`);
        console.log(`Data de Nascimento: ${this.data_Nascimento.toLocaleDateString('pt-BR')}`);
        console.log(`Telefone: ${this.telefone_primario}`);
        if (this.telefone_secundario) {
            console.log(`Telefone Secundário: ${this.telefone_secundario}`);
        }
        if (this.genero) {
            console.log(`Gênero: ${this.genero}`);
        }
        console.log('----------');
    }
}
class Equipe {
    id_equipe;
    projeto; //id do projeto ou projetos
    membros; //id de cada funcionario
    lider; // id do funcionario
    constructor(id_equipe, projeto, membros, lider) {
        this.id_equipe = id_equipe;
        this.projeto = projeto;
        this.membros = membros;
        this.lider = lider;
    }
    dadosEquipe() {
        console.log('------Dados da Equipe------');
        console.log(`ID da Equipe: ${this.id_equipe}`);
        console.log(`Lider da Equipe ${this.lider}`);
        console.log(`Membros da Equipe: ${this.membros}`);
        console.log(`ID do Projeto: ${this.projeto}`);
        console.log('------------');
    }
}
class Projeto {
    //atributos identificadores para identificar o 'projeto' e 'equipe do projeto'
    id_projeto;
    id_equipe;
    nome_projeto;
    descricao;
    data_inicio;
    data_fim;
    status; //atributo status ((em andamento, concluído, etc.)) 
    constructor(id_projeto, id_equipe, nome_projeto, descricao, data_inicio, data_fim, status) {
        this.id_projeto = id_projeto,
            this.id_equipe = id_equipe,
            this.nome_projeto = nome_projeto;
        this.descricao = descricao;
        this.data_inicio = data_inicio;
        this.data_fim = data_fim;
        this.status = status;
    }
    dadosProjeto() {
        console.log('------Dados do Projeto------');
        console.log(''); //Parei aqui!!, terminar em casa a partir daqui
    }
}
class Tarefas {
    id_tarefa;
    nome_tarefa;
    descricao;
    responsavel; //id do funcionario
    prazo;
    status; //atributo status ((pendente, em execução, concluída))
    constructor(id_tarefa, nome_tarefa, descricao, responsavel, prazo, status) {
        this.id_tarefa = id_tarefa;
        this.nome_tarefa = nome_tarefa;
        this.descricao = descricao;
        this.responsavel = responsavel;
        this.prazo = prazo;
        this.status = status;
    }
}
//instânciando a classe 'Funcionario'
var rafael = new Funcionario('Rafael', '123', 'Rafael@gmail.com', new Date('2005-12-31'), '36590836583', 'Engenheiro Banco de Dados', '(84) 95555-5555', '(84) 95655-5555', 'M');
rafael.dadosFuncionario();
