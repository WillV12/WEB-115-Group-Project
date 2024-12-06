function getImageNames() {
    let ads = url("../images/gavinImgaes")

    return ads
}

function assignImages(ads) {
    let images = document.querySelectorAll('img')
    console.log(images)
    for (let i =0; i<images.length; i++) {
        let image = images[i]
        if (image.id === 'ad') {
            let rand = parseInt((Math.random() * ads.length) + 1)
            let ad = ads[rand]
            console.log(rand)
            //image.src = ad
            //ads.splice(rand, rand)
        } else {
            continue
        }

    }
}
let ads = getImageNames()
console.log(ads)