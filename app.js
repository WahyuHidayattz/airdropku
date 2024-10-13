let buttonHome = document.getElementById('home')
let buttonUpragde = document.getElementById('upgrade')
let buttonAirdrop = document.getElementById('airdrop')
let buttonAbout = document.getElementById('about')

let homeContainer = document.getElementById('home-container')
let upgradeContaier = document.getElementById('upgrade-container')
let airdropContainer = document.getElementById('airdrop-container')
let aboutContainer = document.getElementById('about-container')

localStorage.setItem('page', 'home')
page = localStorage.getItem('page')
setPage(page)

function setPage(page){
    switch(page){
        case 'home':
            homeContainer.classList.remove('hidden')
            upgradeContaier.classList.add('hidden')
            airdropContainer.classList.add('hidden')
            aboutContainer.classList.add('hidden')
            break;
        case 'upgrade':
            homeContainer.classList.add('hidden')
            upgradeContaier.classList.remove('hidden')
            airdropContainer.classList.add('hidden')
            aboutContainer.classList.add('hidden')
            break;
        case 'airdrop':
            homeContainer.classList.add('hidden')
            upgradeContaier.classList.add('hidden')
            airdropContainer.classList.remove('hidden')
            aboutContainer.classList.add('hidden')
            break;
        case 'about':
            homeContainer.classList.add('hidden')
            upgradeContaier.classList.add('hidden')
            airdropContainer.classList.add('hidden')
            aboutContainer.classList.remove('hidden')
            break;
    }
}

let coin    = document.getElementById('coin')
let amount = 0

if(localStorage.coin){
    amount = localStorage.coin
}

function tambang(){
    amount++
    localStorage.setItem('coin', amount)
    coin.innerHTML = amount
    setIcon(amount)
}

coin.innerHTML = amount
setIcon(amount)

function setIcon(amount){
    let iconGame = document.getElementById('icon-game')
    let level   = document.getElementById('level')
    
    if(amount>=300){
        iconGame.src = "assets/images/level2.png"
        level.textContent = "Level 2"
    }
    if(amount>=1000){
        iconGame.src = "assets/images/level3.png"
        level.textContent = "Level 3"
    }
}
