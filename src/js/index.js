const botoesCarrossel = document.querySelectorAll('.botao')
const imagens = document.querySelectorAll('.imagem')

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        DesativarBotao(botao)

        AtivarBotao(botao)

        EsconderImagem()

        MostrarImagem(indice)
    })
})

function MostrarImagem(indice) {
    console.log(imagens)
    imagens[indice].classList.add('ativa')
}

function EsconderImagem() {
    const imagemAtiva = document.querySelector('.ativa')
    imagemAtiva.classList.remove('ativa')
}

function AtivarBotao(botao) {
    botao.classList.add('selecionado')
}

function DesativarBotao(botao) {
    const botaoSelecionado = document.querySelector('.selecionado')
    botaoSelecionado.classList.remove('selecionado')
}

