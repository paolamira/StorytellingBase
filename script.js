const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você nota que está no terceirão e, com isso, vêm o vestibular e o Enem. Como decide agir?",
        alternativas: [
            {
                texto: "Reconhece a dificuldade e começa a estudar para as provas desde o começo.",
                afirmacao: "Reconhecer a dificuldade e começar a estudar desde o início ajudou você a se preparar com mais segurança para o vestibular e o Enem."
            },
            {
                texto: "Decide agir com negligência por não saber o que quer cursar e, além disso, pelo desânimo.",
                afirmacao: "A indecisão sobre o curso e o desânimo fizeram com que você negligenciasse os estudos e deixasse a preparação para depoiis."
            }
        ]
    },
    {
        enunciado: "Quando você pisca, nota que já está na metade do ano; portanto, a pressão para o vestibular e o Enem aumenta.",
        alternativas: [
            {
                texto: "Sente-se segura em relação a isso por ter lidado com esse problema desde o começo do ano.",
                afirmacao: "Ter começado a se preparar desde o início do ano fez com que você se sentisse mais segura diante da pressão social em relação do vestibular e do Enem."
            },
            {
                texto: "Começa a se sentir culpada por ter negligenciado o seu futuro. Além disso, vê seus amigos extremamente confiantes em relação aos estudos.",
                afirmacao: "A culpa por ter negligenciado os estudos, somada à comparação com seus amigos, aumentou a pressão e a insegurança em relação ao seu futuro."
            }
        ]
    },
    {
        enunciado: "Já estamos em outubro, faltando um mês para as provas começarem. Como você está se sentindo?",
        alternativas: [
            {
                texto: "Permanece segura, está finalizando alguns conteúdos e se sente pronta para encarar as provas.",
                afirmacao: "Manter uma rotina de estudos desde o início permitiu que você chegasse a outubro mais segura e preparada para as provas."
            },
            {
                texto: "Começa a se sentir cada vez mais desconfortável e insegura. Tenta encaixar os estudos na sua rotina.",
                afirmacao: "A falta de preparação ao longo do ano fez com que você chegasse perto das provas insegura e precisasse adaptar sua rotina para conseguir estudar."
            }
        ]
    },
    {
        enunciado: "No fim, já é dezembro. Você já terminou todas as provas. Como você lidou com isso?",
        alternativas: [
            {
                texto: "Você lidou da melhor forma, sabia a maioria dos conteúdos e sente que irá entrar em uma faculdade.",
                afirmacao: "A preparação ao longo do ano fez com que você chegasse às provas mais confiante, dominando a maior parte dos conteúdos e acreditando na possibilidade de ingressar em uma faculdade."
            },
            {
                texto: "Você tenta estudar, mas, no dia da prova, esquece o pouco que sabia por conta da ansiedade.",
                afirmacao: "A falta de preparação e a ansiedade durante as provas dificultaram a concentração e fizeram com que você esquecesse conteúdos que havia estudado."
            }
        ]
    },
    {
        enunciado: "Os resultados chegaram no site. Como você se saiu?",
        alternativas: [
            {
                texto: "A ansiedade atacou ao entrar no site, mas todo o seu empenho valeu a pena: passou em quinto lugar na faculdade de Direito.",
                afirmacao: "Mesmo enfrentando a ansiedade no momento do resultado, todo o esforço e a preparação ao longo do ano contribuíram para que você conquistasse o quinto lugar em Direito."
            },
            {
                texto: "Você entra no site por pressão da família. Você rola e rola e não vê o seu nome. Então, chega ao final da lista: você não passou e nem na lista de espera está.",
                afirmacao: "A falta de preparação ao longo do ano resultou na reprovação no vestibular, fazendo com que você percebesse as consequências de ter negligenciado os estudos."
            }
        ]
    }
];
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();