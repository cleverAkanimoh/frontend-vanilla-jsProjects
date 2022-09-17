// var cache = {
//     "/img/responsiveweb1.png":{
//         "$img": jQuery,
//         "isLoadng": false
//     },
//     "/img/responsiveweb2.png": {
//         "$img": jQuery,
//         "isLoadng": false
//     },
//     "/img/responsiveweb3.png": {
//         "$img": jQuery,
//         "isLoadng": false
//     },
//     "/img/tradeabc.jpg": {
//         "$img": jQuery,
//         "isLoadng": false
//     }
// }

// var request;
// var $current;
// const cache = {}
// const frame = $('.photo-viewer')
// const thumb = $('.thumb')

// crossFade = (img) => {
//     if ($current) {
//         $current.stop().fadeOut('slow')
//     }
//     img.css({
//         marginLeft: -img.width() / 2,
//         marginTop: -img.height() / 2
//     })

//     img.stop().fadeTo('slow', 1)

//     $current = img
// }

// $(document).on('click', '.thumb', (e)=>{
//     e.preventdefault()

//     var img
//     let src = this.href
//     request = src

//     thumb.removeClass('.active')
//     this.addClass('active')

//     if (cache.hasOwnProperty(src)) {
//         if (cache[src].isLoading === false) {
//             crossFade(cache[src].img)
//         }
//     }else {
//         img = $('<img/>')
//         cache[src] = {
//             img: img,
//             isLoading: true
//         }

//         // next few lines will run when when image has loaded but are prepared first
//         img.on('load', () => {
//             img.hide()

//             // Remove is loading class from frame and apend new image
//             frame.removeClass('is-loading').append(img)
//             cache[src].isLoading = false

//             // if still most recently requested image then
//             if (request === src) {
//                 crossFade(img)
//             }
//         })

//         frame.addClass('is-loading')

//         img.attr({
//             'src': src,
//             'alt': this.title || ''
//         })
//     }
// })

// // this line runs to show the first image

// $('.thumb').eq(0).click();

// my own image Gallery

const cache = {}
const frame = document.querySelector('.photo-viewer')
const thumbOne = document.querySelector('.one')
const thumbTwo = document.querySelector('.two')
const thumbThree = document.querySelector('.three')
const thumbFour = document.querySelector('.four')
const imgOne = '<img src="responsiveweb1.png" alt="responsive 1">'
const imgTwo = '<img src="responsiveweb2.png" alt="responsive 2">'
const imgThree = '<img src="responsiveweb3.png" alt="responsive 3">'
const imgFour = '<img src="TradeABC.jpg" alt="tradeABC">'


thumbOne.addEventListener('click', () => {
    thumbFour.removeAttribute('id', 'active')
    thumbTwo.removeAttribute('id', 'active')
    thumbThree.removeAttribute('id', 'active')
    thumbOne.setAttribute('id', 'active')
    imageViewer(imgOne)

    let img = imgOne
    let src = "/img/responsiveweb1.png"
    if (cache.hasOwnProperty(src)) {
        if (cache[src].isLoading === false) {
            imageViewer(cache[src].img)
        }
    } else {
        cache[src] = {
            img: img,
            src: src,
            isLoading: true
        }
    }
})



thumbTwo.addEventListener('click', () => {
    thumbOne.removeAttribute('id', 'active')
    thumbFour.removeAttribute('id', 'active')
    thumbThree.removeAttribute('id', 'active')
    thumbTwo.setAttribute('id', 'active')
    imageViewer(imgTwo)

    let img = imgTwo
    let src = "/img/responsiveweb2.png"
    if (cache.hasOwnProperty(src)) {
        if (cache[src].isLoading === false) {
            imageViewer(cache[src].img)
        }
    } else {
        cache[src] = {
            img: img,
            src: src,
            isLoading: true
        }
    }
})

thumbThree.addEventListener('click', () => {
    thumbOne.removeAttribute('id', 'active')
    thumbTwo.removeAttribute('id', 'active')
    thumbFour.removeAttribute('id', 'active')
    thumbThree.setAttribute('id', 'active')
    imageViewer(imgThree)

    let img = imgThree
    let src = "/img/responsiveweb3.png"
    if (cache.hasOwnProperty(src)) {
        if (cache[src].isLoading === false) {
            imageViewer(cache[src].img)
        }
    } else {
        cache[src] = {
            img: img,
            src: src,
            isLoading: true
        }
    }
})

thumbFour.addEventListener('click', () => {
    thumbOne.removeAttribute('id', 'active')
    thumbTwo.removeAttribute('id', 'active')
    thumbThree.removeAttribute('id', 'active')
    thumbFour.setAttribute('id', 'active')
    imageViewer(imgFour)

    let img = imgFour
    let src = "/img/TradeABC.jpg"
    if (cache.hasOwnProperty(src)) {
        if (cache[src].isLoading === false) {
            imageViewer(cache[src].img)
        }
    } else {
        cache[src] = {
            img: img,
            src: src,
            isLoading: true
        }
    }
    console.log(cache)
})


// universal function
imageViewer = (img) => {
    let active = document.querySelector('#active')
    if (active) {
        frame.innerHTML = img
    }
}