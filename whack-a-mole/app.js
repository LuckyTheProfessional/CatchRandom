const moles = document.querySelector('.moles');
const scoreHtml = document.querySelector('.score');
const timerHtml = document.querySelector('.timer');
const startButtonHtml = document.querySelector('.start');
const molesList = ['img1', 'img2', 'img3', 'img4', 'img5', 'img6'];
let oneMole = '';
let score = 0;
let timer = 20;

const beginTimer = () => {
    setInterval(() => {
        if (timer === 0) {
            timer += 21;
        }
    
        timer -= 1;
        timerHtml.innerHTML = `
        <p class="timer">Timer: ${timer}s</p>
        `
    
    }, 1000)
}


const showMole = () => {
    setInterval(() => {
        Array.from(moles.children).forEach(child => {
            if (child.classList.contains('show')) {
                child.classList.remove('show');
            }
        })
    
    
    
        oneMole = molesList[Math.round(Math.random() * (molesList.length - 1))];
        
        Array.from(moles.children).forEach(child => {
            if (child.classList.contains(oneMole)) {
                child.classList.add('show');
            }
        })
    
    }, 700)

}

startButtonHtml.addEventListener('click', () => {
    beginTimer();
    showMole();
})

    
Array.from(moles.children).forEach(child => {
    child.addEventListener('click', (e) => {
        if (e.target.classList.contains('show')) {
            score += 1;
            scoreHtml.innerHTML = `
            <p class="score">${score}</p>
            `
        }
    })
})

