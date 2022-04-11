let ratingBtn = document.querySelectorAll('div#ratingBtn input')
let scoreBoard = document.querySelector('p#score span')

// 先處理mouseover
ratingBtn.forEach((element, i) => {
    element.addEventListener('mouseover', () => {
        // reset star
        ratingBtn.forEach((elem) => {
            elem.style = '';
        })
        // add the style to the current element & the element in front of current element.
        for (let j = 0; j <= i; j++){
            ratingBtn[j].style = 
                `
                background-color: hsl(25, 97%, 53%);
                color: white;
                `
        }
    })

    let index;
    // click
    element.addEventListener('click', () => {
        index = i;
        let score = index + 1;
        scoreBoard.innerHTML = score;
    })

    // mouseout
    element.addEventListener('mouseout', () => {
        ratingBtn.forEach((elem) => {
            elem.style = '';
        })
        for (let j = 0; j <= index; j++){
            ratingBtn[j].style = 
                `
                background-color: hsl(25, 97%, 53%);
                color: white;
                `
        }
    })
})

// change page
let cards = document.querySelectorAll('main');
let submit = document.querySelector('#submit');

submit.addEventListener('click', (e) => {
    e.preventDefault();
    cards[0].style = 'display: none;';
    cards[1].style = 'display: flex;';
})