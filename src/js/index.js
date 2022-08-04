const btnAdvanced = document.getElementById('btn-advance')

const btnReturn = document.getElementById('btn-return')

const cards = document.querySelectorAll('.pokemon-card')

let currentCard = 0

btnAdvanced.addEventListener('click', showNextImage)

btnReturn.addEventListener('click', showBackImage)

function hideSelectedCard() {

    //selecionando todas as classes com o nome 'selected'
    const SelectedCard = document.querySelector('.selected')

    //removendo a classe "selected" do cartão anterior
    SelectedCard.classList.remove('selected')
}

function showSelectedCard(indexCard) {

    //adicionando a classe "selected" ao cartão exibido
    cards[indexCard].classList.add('selected')

}

function showNextImage() {

    if (currentCard === cards.length -1) return

    hideSelectedCard()
   
    //incrementando o valor do cartão atual
    currentCard++

    showSelectedCard(currentCard)
}

function showBackImage() {

    if (currentCard === 0) return

    hideSelectedCard()
    
    //decrementando o valor do cartão atual
   currentCard--

   showSelectedCard(currentCard)
}
