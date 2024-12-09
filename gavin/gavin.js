//create quiestion area FIRST
// worry abt actual questions later, just design and placament is the real shiz rn

//area, q, qimage, rainbnow, blck ad, blck ad

let bgMusic = new Audio("../audios/eek.mp3")
bgMusic.volume = .4
bgMusic.currentTime = 0
bgMusic.playbackRate = 1.3463
bgMusic.loop = true
bgMusic.play()

let questions = {
    'How tall are you???': ['under 4\"', '4-5\"', '5-5\"6\'', '5\"7\'-6+\"'], 
    'Whats your favorite type of animal???????' : ['canine', 'feline', 'equine', 'non mammal (youre weird)'], 
    'Are you Married/In a relationship??' : ['Yes, to someone of the same gender', 'Yes, to someone of another gender', 'NO, but I\'m gay', 'I killed my wife'],
    'Out of these dishes, which is the most appealing to you?????????????' : ['Big GAY stromboli', 'SUPER FENTANYL', 'Banana :3', 'My wife\'s desecrated corpse'],
    'On a scale of 1-10 how large is your house???' : ['mid-sized', 'WAY TOO BIG', 'solid 6', 'I sold my wifes organs'],
    'How many people have you killed???' : ['WHAT??? Zero', '5+', '200', 'just my wife'],
    'What\'s your favorite sport' : ['FOOBALL', 'SOCK CAR', 'BASKEET BARL', 'smth else (killing my wife)'],
    'Where were you on the night of nov 9th, 1999?' : ['uhh.. being born?', 'killing my wife ;)', 'KILLING WIFE 👿', 'eating GAY stromboli'],
    'Umm, Im hungry... I\'ll wrtie another question later' : ['I killed my wife', 'SUPERSUPERSUPER FENTANYL', 'lord save me', 'MERRY CHRISTMAS'],
    'Are you gay?!?!?!?!??!?!?!?!??' : ["I did it again...", 'I\'m addicted to SUPERFENTANYL', 'I KILLED HER', 'I\m soooooo drunk'],
}


let questionWords = []
for (let key in questions) {
    questionWords.push(key)
}



let questionImages = new Array() 
for (let i=0;i<questionWords.length;i++) {
    let filePath = "questionImages/"
    filePath += `qImage${i+1}.jpg`
    questionImages.push(filePath)
}

let jollyImages = new Array()
for (let i=0; i<28; i++) {
    let filePath = "JOLLYJOLLYJOLLY/"
    filePath += `jolly${i+1}.gif`
    jollyImages.push(filePath)
}


for (let i=1;i<3;i++) {
    let img = document.getElementById(`ad${i}`)
    img.src = jollyImages[Math.floor(Math.random() * 27) + 1]
}




let completeQuestions = []

for (let i=0; i<questionWords.length; i++) {

    let questionArea = document.createElement('div')
    questionArea.className = 'questionArea'

    let tallAd = document.createElement('div')
    tallAd.className = 'tallAd'
    let tallImg = document.createElement('img')
    tallImg.src = jollyImages[Math.floor(Math.random() * 27) + 1]
    tallAd.appendChild(tallImg)
    
    let rainbow = document.createElement('div')
    rainbow.className = 'rainbow'
    let idekbreh = document.createElement('img')
    idekbreh.src = "../images/prideflag.png"
    rainbow.appendChild(idekbreh)
    
    let question = document.createElement('div')
    question.className = 'question'

    let h1 = document.createElement('h1')
    h1.className = 'questionWords'
    h1.textContent = questionWords[i]

    let h3 = document.createElement('h3')
    h3.textContent = `${i+1}/${questionWords.length}`

    let questionImage = document.createElement('img')
    questionImage.className = 'questionImage'
    questionImage.src = questionImages[i]

    let next = document.createElement('button')
    next.className = 'next'
    next.id = `next${i}`
    if (i < (questionWords.length -1)) {
        next.textContent = 'Next Question'
        next.addEventListener('click', event => loadQuestion(next.id), {once : true})
    } else {
        next.textContent = 'RESULTS YAYAYAYAY'
        next.addEventListener('click', event => loadResults(), {once : true})
    }
    
    question.appendChild(h1)
    question.appendChild(questionImage)
    question.appendChild(h3)
    for (let j=0;j<4;j++) {
        let button = document.createElement('button')
        button.className = 'answer'
        button.textContent = questions[questionWords[i]][j]
        question.appendChild(button)
    }
    question.appendChild(next)


    questionArea.appendChild(tallAd)
    questionArea.appendChild(question)
    questionArea.appendChild(rainbow)
    for (let i=0;i<2;i++) {
        let blockAd = document.createElement('div')
        blockAd.className = 'blockAd'
        blockAd.id = `ad${i+1}`
        let blockImg = document.createElement('img')
        blockImg.src = jollyImages[Math.floor(Math.random() * 27) + 1]
        blockAd.appendChild(blockImg)
        questionArea.appendChild(blockAd)

    }

    





    completeQuestions.push(questionArea)
}


let start = document.getElementById('start')
start.addEventListener('click', function () {
    document.body.appendChild(completeQuestions[0])
    completeQuestions.splice(0,1)
    let areas = document.querySelectorAll('.question')
    areas.forEach(area => {
        let buttons = area.querySelectorAll('.answer')
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                area.querySelector('.special')?.classList.remove('special')
                button.classList.add('special')
            })
        })
    })
}, {once : true})


function loadQuestion(uh){
    let question = uh.at(-1)
    document.body.appendChild(completeQuestions[question])
    let areas = document.querySelectorAll('.question')
    areas.forEach(area => {
        let buttons = area.querySelectorAll('.answer')
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                area.querySelector('.special')?.classList.remove('special')
                button.classList.add('special')
            })
        })
    })
}

function loadResults() {
    let div = document.createElement('div')
    div.className = 'results'
    let h1 = document.createElement('h1')
    h1.textContent = 'YAYAYAAYYAYAYAYY!!!!!!'
    let gayBox = document.createElement('div')
    gayBox.className = 'gayBox'
    let gay = document.createElement('h1')
    gay.textContent = 'YOURE GAY!!!! 100% NO DOUBT ABOUT IT I SWEAR IT ON MY LIFE YOU ARE GAY!!! GAYGAYGAYGAYGAYGAY'

    let button = document.createElement('button')
    button.textContent = 'return to quiz'
    button.addEventListener('click', () => {location.reload()})

    let a = document.createElement('a')
    a.href = '../Mainpage.html'
    let button2 = document.createElement('button')
    button2.textContent = 'return to home page'
    a.appendChild(button2)

    let check = document.createElement('img')
    check.src = 'thumb.jpg'
    let meow = new Audio('mlem.mp3')
    let EXPLODE = new Audio('explosion.mp3')
    check.addEventListener('click', soundMoment)
    
    function soundMoment() {
        if (meow.playbackRate < 1.4){
            meow.currentTime = 0
            meow.playbackRate += .01
            meow.preservesPitch = false
            meow.play()
        } else {
            check.removeEventListener('click', soundMoment)
            meow.pause()
            EXPLODE.play()
            check.src = 'meowBomb.jpg'
            check.width = 212
            check.height = 238
        }
    }



    check.style.userSelect = 'none'

    document.body.style.backgroundImage = 'url(\'bg.gif\')'
    document.body.style.fontFamily = "Georgia, 'Times New Roman', Times, serif"
    document.body.style.textAlign = 'center'
    document.body.style.alignItems = 'center'
    
    div.style.margin = 0
    div.style.textAlign = 'center'
    div.style.alignItems = 'center'
    div.style.padding = '20px'
    div.style.borderStyle = 'solid'
    div.style.border = '2px'
    div.style.marginTop = '30px'

    gayBox.style.textAlign = 'center'
    gayBox.style.alignItems = 'center'
    gayBox.style.verticalAlign = 'middle'
    gayBox.style.marginTop = '15%'

    button.style.scale = 2
    button.style.float = "left"
    button.style.padding = '6px'
    button.style.margin = '20%'
    button.style.textAlign = 'center'
    button.style.alignItems = 'center'
    button.style.marginBottom = '0'
    button.style.marginTop = '8%'

    button2.style.scale = 2
    button2.style.float = 'right'
    button2.style.margin = '20%'
    button2.style.padding = '6px'
    button2.style.textAlign = 'center'
    button2.style.alignSelf = 'center'
    button2.style.marginBottom = '0'
    button2.style.marginTop = '8%'

    div.appendChild(h1)
    gayBox.appendChild(gay)
    gayBox.appendChild(check)
    div.appendChild(gayBox)


    
    document.body.innerHTML = ''
    document.body.appendChild(div)
    document.body.appendChild(button)
    document.body.appendChild(a)
    bgMusic.pause()
    bgMusic.currentTime = 0

    let YAY = new Audio("YAY.mp3")
    let victory = new Audio("victoryMusic.mp3")
    let backgrnd = new Audio("meowmeowmeowmeowmeowmeowmeowmeowmeow.mp3")
    backgrnd.volume = .7
    victory.volume = .7
    victory.playbackRate = 1.3
    YAY.play()
    victory.play()
    victory.addEventListener('play', event => setTimeout(function() {victory.pause()}, 9730))
    victory.addEventListener('pause', event => setTimeout(function() {backgrnd.play()}, 2000))

}