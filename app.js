document.addEventListener('DOMContentLoaded', () => {
    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);
    
    let cardsArray = [
        {
            name: 'fries',
            img: './images/fries.png'
        },
        {
            name: 'cheeseburger',
            img: './images/cheeseburger.png'
        },
        {
            name: 'hotdog',
            img: './images/hotdog.png'
        },
        {
            name: 'ice-cream',
            img: './images/ice-cream.png'
        },
        {
            name: 'milkshake',
            img: './images/milkshake.png'
        },
        {
            name: 'pizza',
            img: './images/pizza.png'
        },
        {
            name: 'fries',
            img: './images/fries.png'
        },
        {
            name: 'cheeseburger',
            img: './images/cheeseburger.png'
        },
        {
            name: 'hotdog',
            img: './images/hotdog.png'
        },
        {
            name: 'ice-cream',
            img: './images/ice-cream.png'
        },
        {
            name: 'milkshake',
            img: './images/milkshake.png'
        },
        {
            name: 'pizza',
            img: './images/pizza.png'
        },
    ];
    // Sort(comparing two values (not callback))
    // cardsArray.sort( () => 0.5 - Math.random())
    // console.log(cardsArray);
    let cardChosen = [];
    let cardChosenIds = [];
    
    const cardWon = [];
    
    const resultDisplay = $('.result');
    const gridDisplay = $('#grid');
    
    function createBoard(){
        for(let i = 0 ; i < cardsArray.length ; i++){
            const card = document.createElement('img');
            // Set the attribute of element card
            // Set attribute default card image
            card.setAttribute('src', 'images/blank.png')
            // Set the attribute data id to be seen as INDEX
            card.setAttribute('data-id',i);
            // When we click the card, the flipCard will run
            card.addEventListener('click', flipCard)
            gridDisplay.appendChild(card);   
        }
    }
    // Check the process of the match during the match's taking place
    function checkMath(){
        const cards = $$('img');
        const optionOneId = cardChosenIds[0];
        const optionTwoId = cardChosenIds[1];
    
        if (optionOneId == optionTwoId){
            cards[optionOneId].setAttribute('src', 'images/blank.png');
            cards[optionTwoId].setAttribute('src', 'images/blank.png');
            alert('You click the same image');
        }
    
    
        // If each card's name that we pick are the same
        else if (cardChosen[0] == cardChosen[1]){
            cards[optionOneId].setAttribute('src', 'images/white.png');
            cards[optionTwoId ].setAttribute('src', 'images/white.png');
            // Remove the click event to avoid the card emergency
            cards[optionOneId].removeEventListener('click', flipCard);
            cards[optionTwoId ].removeEventListener('click', flipCard);
            cardWon.push(cardChosen)
        }
        // If both items are not match 
        else{
            cards[optionOneId].setAttribute('src', 'images/blank.png');
            cards[optionTwoId].setAttribute('src', 'images/blank.png');
            alert('Sorry, try again broooo');
        }
        // Show the number of the card that we click before
        resultDisplay.textContent = cardWon.length;
        // When we click the image, the cardChosen and cardChosenIds will reset to remake the selecting
        cardChosen = [];
        cardChosenIds = [];
    
        // If the cardWon.length equals to cardsArray.length --> Finished the game
        if (cardWon.length === (cardsArray.length / 2)){
            resultDisplay.textContent = 'Congratulation, you found them all !!!!';
        }
    }
    
    function flipCard(){
        // Get the data-id as the index of cardsId array
        const cardsId = this.getAttribute('data-id');
        // Push the name of these cards
        cardChosen.push(cardsArray[cardsId].name);
        // Push the id of these cards
        cardChosenIds.push(cardsId);
        // console.log(cardChosenIds);
        this.setAttribute('src', cardsArray[cardsId].img); 
    
        if(cardChosen.length === 2){
            setTimeout(checkMath, 500);
        }
    }
    
    createBoard();
})
