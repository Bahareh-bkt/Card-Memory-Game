document.addEventListener('DOMContentLoaded' ,() => {})

const CardArray =[
   // {
   //     name: 'beet', img:'Images/beet.png'
   // },
   // {
    //    name: 'carrot', img:'Images/carrot.png'
    //},
    {
        name: 'corn', img:'Images/corn.png'
    },
    {
        name: 'eggplant', img:'Images/eggplant.png'
    },
    {
        name: 'okra', img:'Images/okra.png'
    },
    {
        name: 'peppers', img:'Images/peppers.png'
    },
    {
        name: 'pumpkin', img:'Images/pumpkin.png'
    },
    {
        name: 'radish', img:'Images/radish.png'
    },
    {
        name: 'squash', img:'Images/squash.png'
    },
    {
        name: 'tomato', img:'Images/tomato.png'
    },
    //{
    //    name: 'beet', img:'Images/beet.png'
   // },
   // {
    //    name: 'carrot', img:'Images/carrot.png'
    //},
    {
        name: 'corn', img:'Images/corn.png'
    },
    {
        name: 'eggplant', img:'Images/eggplant.png'
    },
    {
        name: 'okra', img:'Images/okra.png'
    },
    {
        name: 'peppers', img:'Images/peppers.png'
    },
    {
        name: 'pumpkin', img:'Images/pumpkin.png'
    },
    {
        name: 'radish', img:'Images/radish.png'
    },
    {
        name: 'squash', img:'Images/squash.png'
    },
    {
        name: 'tomato', img:'Images/tomato.png'
    }
]

// Make random Cards
CardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')

var cardsChosen = []
var cardsChosenId = []
var cardsWon = []

//------------------------------------------------------------------
function creatBoard(){
    for ( let i = 0 ; i < CardArray.length ; i++)
    {
        var card = document.createElement('img')
        card.setAttribute('src', 'Images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}
// ---------------------------------------------------------------
// check for correct match:

function checkForMatch(){
    var cards = document.querySelectorAll('img')
    const optionFirstId = cardsChosenId[0]
    const optionSecondId = cardsChosenId[1]
    if (cardsChosen[0] === cardsChosen[1]){
        //alert(' Correct!')
        cardsWon.push(cardsChosen)
    }else{
        cards[cardsChosenId[0]].setAttribute('src', 'Images/blank.png')
        cards[cardsChosenId[1]].setAttribute('src', 'Images/blank.png')
        //alert('Sorry ! Wrong selected')
    }
    cardsChosen= []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === CardArray.length/ 2 ){
        resultDisplay.textContent= 'You Found Them All! '
    }
}

// -------------------------------------------------------------------
// flip cards
function flipCard(){
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(CardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', CardArray[cardId].img)
    if (cardsChosen.length===2){
        setTimeout(checkForMatch, 600)
    }
}

creatBoard()