const preview = document.getElementById('pre')
let back = document.querySelector('.icon')

const questions = [
    {
        num: 1,
        que: 'lorem God fuje feufhe fuef efuehf ef he eue eurre reur tr trtyer teytr tyrt ytr trtyr trytr etryt rtyret rtyr tyrthr tr trhgdfog dytgor tr hter  ',
    },
    {
        num: 2,
        que: 'em God fuje feufhe fuef efuehf ef',
    },
    {
        num: 3,
        que: 'lorem Gode feufhe fuef efuehf ef',
    },
    {
        num: 4,
        que: 'lorem Gouje feufhe fuef efuehf ef',
    },
    {
        num: 5,
        que: 'fkgfglorem God fuje feufhe fuef efuehf ef',
    },
    {
        num: 6,
        que: 'ejfelorem God fuje feufhe fuef efuehf ef',
    },
    {
        num: 7,
        que: 'florem God fuje feufhe fuef efuehf ef',
    },
    {
        num: 8,
        que: 'llllllorem God fuje feufhe fuef efuehf ef',
    },
    {
        num: 9,
        que: 'lorem God fuje feufhe fuef efuehf efdkjdfudhfdf',
    },
    {
        num: 10,
        que: 'ldforem God fuje feufhe fuef efuehf ef',
    },
    {
        num: 11,
        que: 'ldfdfrem God fuje feufhe fuef efuehf ef',
    },
    {
        num: 12,
        que: 'lddfdf God fuje feufhe fuef efuehf ef',
    },
    {
        num: 13,
        que: 'loremdg God fuje feufhe fuef efuehf ef',
    },
    {
        num: 14,
        que: 'loretertem God fuje feufhe fuef efuehf ef',
    },
    {
        num: 15,
        que: 'lorem God fuje feufhe fuefdwdewewe efuehf ef',
    },
    {
        num: 16,
        que: 'lorem Gsdsdod fuje feufhe fuef efuehf ef',
    },
    {
        num: 17,
        que: 'lorem God fuje feufhe fuefwew efuehf ef',
    },
    {
        num: 18,
        que: 'lorem God fuje feufhsdasde fuef efuehf ef',
    },
    {
        num: 19,
        que: 'lorem God fuje feufhuiyuiu65e fuef efuehf ef',
    },
    {
        num: 20,
        que: 'poiorpwerlorem God fuje feufhe fuef efuehf ef',
    },
    {
        num: 21,
        que: 'lwdweorem God fuje feufhe fuef efuehf ef',
    },
    {
        num: 22,
        que: 'lorem God fuje feimuyiyiutu   ufhe fuef efuehf ef',
    },
    {
        num: 23,
        que: 'loefwererrewfdrem God fuje feufhe fuef efuehf ef',
    },
    {
        num: 24,
        que: 'loferttrrem God fuje feufhe fuef efuehf ef',
    },
    {
        num: 25,
        que: 'lfweretertorem God fuje feufhe fuef efuehf ef',
    },
    {
        num: 26,
        que: 'lfwerrtorem God fuje feufhe fuef efuehf ef',
    },
    {
        num: 27,
        que: 'lyh67t676965orem God fuje feufhe fuef efuehf ef',
    },
    {
        num: 28,
        que: 'lorem God fuje feufhe fuef efuehf ef',
    },
    {
        num: 29,
        que: 'lorem God fuje feufhe fuef efuehf ef',
    },
    {
        num: 30,
        que: 'lorem God fuje feufhe fuef efuehf ef',
    },
    {
        num: 31,
        que: 'lorem God fuje feufhe fuef efuehf ef',
    },
    {
        num: 32,
        que: 'lorem God fuje feufhe fuef efuehf ef',
    },
    {
        num: 33,
        que: 'lorem God fuje feufhe fuef efuehf ef',
    },
    {
        num: 34,
        que: 'lorem God fuje feufhe fuef efuehf ef',
    },
    {
        num: 35,
        que: 'lorem God fuje feufhe fuef efuehf ef',
    },
    {
        num: 36,
        que: 'lorem God fuje feufhe fuef efuehf ef',
    },
    {
        num: 37,
        que: 'lorem God fuje feufhe fuef efuehf ef',
    },
    {
        num: 38,
        que: 'lorem God fuje feufhe fuef efuehf ef',
    },
    {
        num: 39,
        que: 'lorem God fuje feufhe fuef efuehf ef',
    },
    {
        num: 40,
        que: 'lorem God fuje feufhe fuef efuehf ef',
    },
    {
        num: 41,
        que: 'lorem God fuje feufhe fuef efuehf ef',
    },
    {
        num: 42,
        que: 'lorem God fuje feufhe fuef efuehf ef',
    },
    {
        num: 43,
        que: 'lorem God fuje feufhe fuef efuehf ef',
    },
    {
        num: 44,
        que: 'lorem God fuje feufhe fuef efuehf ef',
    },
    {
        num: 45,
        que: 'lorem God fuje feufhe fuef efuehf ef',
    },
    {
        num: 46,
        que: 'lorem God fuje feufhe fuef efuehf ef',
    },
    {
        num: 47,
        que: 'lorem God fuje feufhe fuef efuehf ef',
    },
    {
        num: 48,
        que: 'lorem God fuje feufhe fuef efuehf ef',
    },
    {
        num: 49,
        que: 'lorem God fuje feufhe fuef efuehf ef',
    },
    {
        num: 50,
        que: 'lorem God fuje feufhe fuef efuehf efjghv yrfg',
    },
]

const questions2 = [
    {
        num: 1,
        que: 'lorem God fuje feufhe fuef efuehf ef',
    },
    {
        num: 2,
        que: 'em God fuje feufhe fuef efuehf ef',
    },
    {
        num: 3,
        que: 'lorem Gode feufhe fuef efuehf ef',
    },
    {
        num: 4,
        que: 'lorem Gouje feufhe fuef efuehf ef',
    },
    {
        num: 5,
        que: 'fkgfglorem God fuje feufhe fuef efuehf ef',
    },
    {
        num: 6,
        que: 'ejfelorem God fuje feufhe fuef efuehf ef',
    },
    {
        num: 7,
        que: 'florem God fuje feufhe fuef efuehf ef',
    },
    {
        num: 8,
        que: 'llllllorem God fuje feufhe fuef efuehf ef',
    },
    {
        num: 9,
        que: 'lorem God fuje feufhe fuef efuehf efdkjdfudhfdf',
    },
    {
        num: 10,
        que: 'ldforem God fuje feufhe fuef efuehf ef',
    },
    {
        num: 11,
        que: 'ldfdfrem God fuje feufhe fuef efuehf ef',
    },
    {
        num: 12,
        que: 'lddfdf God fuje feufhe fuef efuehf ef',
    },
    {
        num: 13,
        que: 'loremdg God fuje feufhe fuef efuehf ef',
    },
    {
        num: 14,
        que: 'loretertem God fuje feufhe fuef efuehf ef',
    },
    {
        num: 15,
        que: 'lorem God fuje feufhe fuefdwdewewe efuehf ef',
    },
    {
        num: 16,
        que: 'lorem Gsdsdod fuje feufhe fuef efuehf ef',
    },
    {
        num: 17,
        que: 'lorem God fuje feufhe fuefwew efuehf ef',
    },
    {
        num: 18,
        que: 'lorem God fuje feufhsdasde fuef efuehf ef',
    },
    {
        num: 19,
        que: 'lorem God fuje feufhuiyuiu65e fuef efuehf ef',
    },
    {
        num: 20,
        que: 'poiorpwerlorem God fuje feufhe fuef efuehf ef',
    },
    {
        num: 21,
        que: 'lwdweorem God fuje feufhe fuef efuehf ef',
    },
    {
        num: 22,
        que: 'lorem God fuje feimuyiyiutu   ufhe fuef efuehf ef',
    },
    {
        num: 23,
        que: 'loefwererrewfdrem God fuje feufhe fuef efuehf ef',
    },
    {
        num: 24,
        que: 'loferttrrem God fuje feufhe fuef efuehf ef',
    },
    {
        num: 25,
        que: 'lfweretertorem God fuje feufhe fuef efuehf ef',
    },
    {
        num: 26,
        que: 'lfwerrtorem God fuje feufhe fuef efuehf ef',
    },
    {
        num: 27,
        que: 'lyh67t676965orem God fuje feufhe fuef efuehf ef',
    },
    {
        num: 28,
        que: 'lorem God fuje feufhe fuef efuehf ef',
    },
    {
        num: 29,
        que: 'lorem God fuje feufhe fuef efuehf ef',
    },
    {
        num: 30,
        que: 'lorem God fuje feufhe fuef efuehf ef',
    },
]

const questions3 = [
    {
        num: 1,
        que: 'lorem God fuje feufhe fuef efuehf ef',
    },
    {
        num: 2,
        que: 'em God fuje feufhe fuef efuehf ef',
    },
    {
        num: 3,
        que: 'lorem Gode feufhe fuef efuehf ef',
    },
    {
        num: 4,
        que: 'lorem Gouje feufhe fuef efuehf ef',
    },
    {
        num: 5,
        que: 'fkgfglorem God fuje feufhe fuef efuehf ef',
    },
    {
        num: 6,
        que: 'ejfelorem God fuje feufhe fuef efuehf ef',
    },
    {
        num: 7,
        que: 'florem God fuje feufhe fuef efuehf ef',
    },
    {
        num: 8,
        que: 'llllllorem God fuje feufhe fuef efuehf ef',
    },
    {
        num: 9,
        que: 'lorem God fuje feufhe fuef efuehf efdkjdfudhfdf',
    },
    {
        num: 10,
        que: 'ldforem God fuje feufhe fuef efuehf ef',
    },
    {
        num: 11,
        que: 'ldfdfrem God fuje feufhe fuef efuehf ef',
    },
    {
        num: 12,
        que: 'lddfdf God fuje feufhe fuef efuehf ef',
    },
    {
        num: 13,
        que: 'loremdg God fuje feufhe fuef efuehf ef',
    },
    {
        num: 14,
        que: 'loretertem God fuje feufhe fuef efuehf ef',
    },
    {
        num: 15,
        que: 'lorem God fuje feufhe fuefdwdewewe efuehf ef',
    },
    {
        num: 16,
        que: 'lorem Gsdsdod fuje feufhe fuef efuehf ef',
    },
    {
        num: 17,
        que: 'lorem God fuje feufhe fuefwew efuehf ef',
    },
    {
        num: 18,
        que: 'lorem God fuje feufhsdasde fuef efuehf ef',
    },
    {
        num: 19,
        que: 'lorem God fuje feufhuiyuiu65e fuef efuehf ef',
    },
    {
        num: 20,
        que: 'poiorpwerlorem God fuje feufhe fuef efuehf ef',
    },
    {
        num: 21,
        que: 'lwdweorem God fuje feufhe fuef efuehf ef',
    },
    {
        num: 22,
        que: 'lorem God fuje feimuyiyiutu   ufhe fuef efuehf ef',
    },
    {
        num: 23,
        que: 'loefwererrewfdrem God fuje feufhe fuef efuehf ef',
    },
    {
        num: 24,
        que: 'loferttrrem God fuje feufhe fuef efuehf ef',
    },
    {
        num: 25,
        que: 'lfweretertorem God fuje feufhe fuef efuehf ef',
    },

]

const oral = document.querySelector('.oral')
const fill = document.querySelector('.fil')
const quote = document.querySelector('.quot')
let contque = document.getElementById('contque')
const topic = document.getElementById('nnn')
const text = document.getElementById('text')
let y = 51
let x = 26
let z = 31
let currentQuiz = 0
let currentNum = 20



const num = document.getElementById('ques')
const num2 = document.getElementById('fill')
const num3 = document.getElementById('quote')


const note = document.querySelector('.notice')
const pop = document.getElementById('icon')
pop.addEventListener('click', () => {
    num.classList.remove('show')
    num2.classList.remove('show')
    num3.classList.remove('show')
    note.classList.add('note')
    oral.classList.remove('active')
    fill.classList.remove('active')
    quote.classList.remove('active')
})
oral.addEventListener('click', () => {
    oral.classList.add('active')
    fill.classList.remove('active')
    quote.classList.remove('active')


    if (oral.classList.contains('active')) {
        num.classList.add('show')
        num2.classList.remove('show')
        num3.classList.remove('show')
        note.classList.remove('note')
    }
})
fill.addEventListener('click', () => {
    oral.classList.remove('active')
    fill.classList.add('active')
    quote.classList.remove('active')

    if (fill.classList.contains('active')) {
        num2.classList.add('show')
        num.classList.remove('show')
        num3.classList.remove('show')
        note.classList.remove('note')
    }
})
quote.addEventListener('click', () => {
    oral.classList.remove('active')
    fill.classList.remove('active')
    quote.classList.add('active')

    if (quote.classList.contains('active')) {
        num3.classList.add('show')
        num2.classList.remove('show')
        num.classList.remove('show')
        note.classList.remove('note')
    }
})

let time = document.querySelector('.time')

function pre() {
    preview.style.transform = 'translateX(100%)'
    time.classList.remove('anim')
}

for (let i = 1; i < y; i++) {

    const box = document.createElement('span')
    box.classList.add('span')
    box.innerText = i
    num.appendChild(box)



    box.addEventListener('click', () => {
        
        preview.style.transform = 'translateX(0)'
        let time = document.querySelector('.time')
        topic.innerHTML = `Question number ${box.innerText} `

        questions.forEach(q => {
            text.innerHTML = questions[`${box.innerText - 1}`].que

        })
        if (box.style.background === 'red') {
            text.innerHTML ='Question already answered'
        }
        box.style.background = 'red'
        time.classList.add('anim')

        
        let timeout = setTimeout( pre, 15000);

        back.addEventListener('click', () => {

            clearTimeout(timeout)
        })

    })

}

back.addEventListener('click', () => {
    preview.style.transform = 'translateX(100%)'
    time.classList.remove('anim')
})


for (let i = 1; i < z; i++) {

    const box2 = document.createElement('span')
    box2.classList.add('span')
    box2.innerText = i
    num2.appendChild(box2)




    box2.addEventListener('click', () => {
        preview.style.transform = 'translateX(0)'
        let tt = document.querySelector('.time')
        topic.innerHTML = `Question number ${box2.innerText} `

        questions2.forEach(q => {
            text.innerHTML = questions2[`${box2.innerText - 1}`].que

            // tt.classList.add('anim')
        })
        if (box2.style.background === 'red') {
            text.innerHTML ='Question already answered'
        }
        box2.style.background = 'red'

        time.classList.add('anim')

        
        let timeout = setTimeout( pre, 15000);

        back.addEventListener('click', () => {

            clearTimeout(timeout)
        })
    })


}

for (let i = 1; i < x; i++) {

    const box3 = document.createElement('span')
    box3.classList.add('span')
    box3.innerText = i
    num3.appendChild(box3)

    box3.addEventListener('click', () => {
        preview.style.transform = 'translateX(0)'
        let tt = document.querySelector('.time')
        topic.innerHTML = `Question number ${box3.innerText} `

        questions3.forEach(q => {
            text.innerHTML = questions3[`${box3.innerText - 1}`].que

            // tt.classList.add('anim')
        })
        if (box3.style.background === 'red') {
            text.innerHTML ='Question already answered'
        }
        box3.style.background = 'red'
        time.classList.add('anim')

        let timeout = setTimeout( pre, 15000);

        back.addEventListener('click', () => {
            clearTimeout(timeout)
        })
    })

}

