//criando uma classe abstrata para servir de modelo para as próximas classes
abstract class Pessoa{
    protected nome: string
    protected cpf: string
    protected email: string
    protected data_Nascimento: Date
    protected telefone_primario: string
    protected telefone_secundario?: string
    protected genero?: string
constructor(
    nome: string,
    cpf: string,
    email: string,
    data_Nascimento: Date,
    telefone_primario: string,
    telefone_secundario?: string,
    genero?: string){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.data_Nascimento = data_Nascimento
    this.telefone_primario = telefone_primario
    this.telefone_secundario = telefone_secundario
    this.genero = genero
    }
}


//criando a classe 'Funcionario' que vai extender atributos da classe modelo 'Pessoa'
class Funcionario extends Pessoa{
    //atributos próprios de 'Funcionario'
    protected id_funcionario: string
    protected cargo: string
constructor(
    nome: string, 
    cpf: string, 
    email: string, 
    data_Nascimento: Date,
    id_funcionario: string,
    cargo: string,
    telefone_primario: string, 
    telefone_secundario?: string,
    genero?: string){
    //chamando o construtor da classe modelo (Pessoa) usando super()
    super(nome, cpf, email, data_Nascimento, telefone_primario, telefone_secundario, genero)
    this.id_funcionario = id_funcionario,
    this.cargo = cargo
    }
//criando o método para mostrar os dados do funcionario
dadosFuncionario(){
    console.log('------Dados do Funcionário------')
    console.log(`ID: ${this.id_funcionario}`)
    console.log(`Cargo ${this.cargo}`)
    console.log(`Nome: ${this.nome}`)
    console.log(`CPF: ${this.cpf}`)
    console.log(`Email: ${this.email}`)
    console.log(`Data de Nascimento: ${this.data_Nascimento.toLocaleDateString('pt-BR')}`)
    console.log(`Telefone: ${this.telefone_primario}`)
    
    if(this.telefone_secundario){
    console.log(`Telefone Secundário: ${this.telefone_secundario}`)

    }
    if(this.genero){
    console.log(`Gênero: ${this.genero}`)

    }
    console.log('----------')
        }
}


class Equipe{
    protected id_equipe: string
    protected projeto: string[] //id do projeto ou projetos
    protected membros: string[] //id de cada funcionario
    protected lider: string // id do funcionario
constructor(
    id_equipe: string,
    projeto: string[],
    membros: string[],
    lider: string){
    this.id_equipe = id_equipe
    this.projeto = projeto
    this.membros = membros
    this.lider = lider
    }
//criando o método para mostrar os dados da Equipe
dadosEquipe(){
    console.log('------Dados da Equipe------')
    console.log(`ID da Equipe: ${this.id_equipe}`)
    console.log(`Lider da Equipe ${this.lider}`)
    console.log(`Membros da Equipe: ${this.membros}`)
    console.log(`ID do Projeto: ${this.projeto}`)
    console.log('------------')
    }
}


class Projeto{
    //atributos identificadores para identificar o 'projeto' e 'equipe do projeto'
    protected id_projeto: string
    protected id_equipe: string
    protected nome_projeto: string
    protected descricao: string
    protected data_inicio: Date
    protected data_fim: Date
    protected status: string //atributo status ((em andamento, concluído, etc.)) 
constructor(
    id_projeto: string,
    id_equipe: string,
    nome_projeto: string, 
    descricao: string, 
    data_inicio: Date, 
    data_fim: Date, 
    status: string){ 
    this.id_projeto = id_projeto,
    this.id_equipe = id_equipe,
    this.nome_projeto = nome_projeto
    this.descricao = descricao
    this.data_inicio = data_inicio
    this.data_fim = data_fim
    this.status = status
    }
//criando o método para mostrar os dados do projeto
dadosProjeto(){
    console.log('------Dados do Projeto------')
    console.log(`ID do Projeto: ${this.id_projeto}`)
    console.log(`ID da Equipe: ${this.id_equipe}`)
    console.log(`Nome do Projeto: ${this.nome_projeto}`)
    console.log(`Descrição: ${this.descricao}`)
    console.log(`Data de Início: ${this.data_inicio.toLocaleDateString('pt-BR')}`)
    console.log(`Data de Finalização: ${this.data_fim.toLocaleDateString('pt-BR')}`)
    console.log(`Status do Projeto: ${this.status}`)
    console.log('------------')
    }
}

class Tarefas{
    protected id_tarefa: string
    protected nome_tarefa: string
    protected descricao: string
    protected responsavel: string //id do funcionario
    protected prazo: Date
    protected status: string //atributo status ((pendente, em execução, concluída))
constructor(
    id_tarefa: string,
    nome_tarefa: string,
    descricao: string,
    responsavel: string,
    prazo: Date,
    status: string){
    this.id_tarefa = id_tarefa
    this.nome_tarefa = nome_tarefa
    this.descricao = descricao
    this.responsavel = responsavel
    this.prazo = prazo
    this.status = status
    }
//criando o método para mostrar os dados da Tarefa
dadosTarefas(){
    console.log('------Dados da Tarefa------')
    console.log(`ID da Tarefa: ${this.id_tarefa}`)
    console.log(`ID do Responsável: ${this.responsavel}`)
    console.log(`Nome da Tarefa: ${this.nome_tarefa}`)
    console.log(`Descrição: ${this.descricao}`)
    console.log(`Prazo: ${this.prazo.toLocaleDateString('pt-BR')}`)
    console.log(`Status: ${this.status}`)
    console.log('------------')
    }
}

//Instânciando a Classe 'Funcionario'
var rafael = new Funcionario('Rafael', '123','Rafael@gmail.com', new Date('2005-12-31'), '36590836583', 'Engenheiro Banco de Dados', '(84) 95555-5555', '(84) 95655-5555', 'M')
rafael.dadosFuncionario()

console.log('')


//Instânciando a Classe 'Equipe'
var selva = new Equipe('555650525', ['Projeto Manhattan: 555640424', 'Projeto Nattahnam: 555640666'], ['Rafael: 36590836583','James Bond: 36590836524','Zé Vaqueiro: 36590836540'], 'Homer Simpson: 3659083000')
selva.dadosEquipe()

console.log('')


//Instânciando a Classe 'Projeto'
var manhattan = new Projeto('555640424', 'Equipe Selva: 555650525', 'Projeto Manhattan', 'Criando o código atômico', new Date('1942-6-13'), new Date('1945-6-20'), 'Em Andamento')
manhattan.dadosProjeto()

console.log('')


//Instânciando a Classe 'Tarefa'
var tarefa1 = new Tarefas('0000555','50 Tons de Tarefa', 'Não se preocupe, apenas trabalhe', 'Rafael: 36590836583', new Date('2024-03-20'), 'Concluído')
tarefa1.dadosTarefas()