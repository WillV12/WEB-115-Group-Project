let form = document.forms[0]
let loading = document.createElement('img')
loading.src = 'loading.gif'
loading.style.display ='none'
loading.style.zIndex = 1
loading.style.left = 0
loading.style.top = 0
loading.style.width = '100%'
loading.style.height = '100%'
loading.style.minHeight = '1010px'
loading.style.minWidth = '1024px'
loading.style.position = 'fixed'
document.body.appendChild(loading)
form.addEventListener('submit', e => {
    e.preventDefault()
    let boxidk = document.getElementById('boxidk')
    let img = document.getElementById('blah')
    loading.style.display = 'flex'
    boxidk.innerHTML = ''
    let halfBox = document.createElement('div')
    let otherHalfBox = document.createElement('div')
    halfBox.classList.add('half')
    otherHalfBox.classList.add('half')
    
    img.style.objectFit = 'fill'
    img.style.minWidth = '100%'
    img.style.borderRadius = '20px'
    img.style.borderTopRightRadius = '0px'
    img.style.borderBottomRightRadius = '0px'
    img.style.maxWidth - '100%'
    img.style.width = 'inherit'
    halfBox.appendChild(img)

    halfBox.style.float = 'left'
    halfBox.style.marginLeft - '50px'
    halfBox.style.borderTopRightRadius = '0px'
    halfBox.style.borderBottomRightRadius = '0px'
    halfBox.style.borderRightWidth = '0px'

    otherHalfBox.style.float = 'left'
    otherHalfBox.style.marginRight = '20px'
    otherHalfBox.style.borderTopLeftRadius = '0px'
    otherHalfBox.style.borderBottomLeftRadius = '0px'
    otherHalfBox.style.backgroundImage = 'url(../../images/prideflag.png)'

    let title = document.createElement('h1')
    title.style.scale = 2
    title.style.webkitTextStroke = '1px black'
    title.textContent = 'CONGRATULATIONS!!!!'
    let subtitle = document.createElement('h2')
    let label = document.createElement('p')
    label.textContent = 'Not happy? Change it yourself!!!'
    label.style.color = 'white'
    let slider = document.createElement('input')
    title.style.marginTop = '26px'
    title.style.color = 'white'
    subtitle.style.scale = 2
    subtitle.style.webkitTextStroke = '1px black'
    subtitle.style.marginTop = '5px'
    subtitle.style.color = 'white'

    let button = document.createElement('button')
    button.textContent = 'try again????'
    button.addEventListener('click', () => {
        location.reload()
    })


    label.style.scale = 2
    label.style.webkitTextStroke = '.5px black'

    slider.id = 'slide'
    slider.type = 'range'
    slider.min = '0'
    slider.max = '100'
    let rand = parseInt((Math.random() * 20) + 1)
    console.log(rand)
    if (rand < 3) {
        slider.value = 0
    } else if (3 <= rand && rand < 8) {
        slider.value = 70
    } else if (8 <= rand && rand < 17) {
        slider.value = 86 
    } else {
        slider.value = 100
    }
    subtitle.textContent = `You are ${slider.value}% GAY!!!!`

    label.style.marginTop = '40%'
    slider.style.marginTop = '15px'

    slider.addEventListener('change', () => {
        subtitle.textContent = `You are ${slider.value}% GAY!!!!`
    })

    otherHalfBox.appendChild(title)
    otherHalfBox.appendChild(subtitle)
    otherHalfBox.appendChild(label)
    otherHalfBox.appendChild(slider)


    boxidk.appendChild(halfBox)
    boxidk.appendChild(otherHalfBox)
    boxidk.appendChild(button)
    let YAY = new Audio('../YAY.mp3')
    setTimeout(function () {
        loading.style.display = 'none'
        YAY.play()
    }, 3600)
})