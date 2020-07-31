function clickSpace(e){
    const flagDiv = e.currentTarget.lastElementChild
    const symbolDiv = e.currentTarget.firstElementChild
    if (flagDiv.classList.value === 'flag'){
        flagDiv.hidden = true
    }
    if (symbolDiv.innerHTML === ''){
        flood(e)
    } else {symbolDiv.hidden = false}
}

function rClickSpace(e){
    const flagDiv = e.currentTarget.lastElementChild
    const symbolDiv = e.currentTarget.firstElementChild
    if (symbolDiv.hidden === true && flagDiv.classList.value !== 'flag'){
        let newDiv = document.createElement('div')
        newDiv.classList.add('flag')
        newDiv.append('🚩')
        e.currentTarget.append(newDiv)
    } else if (flagDiv.classList.value === 'flag' && flagDiv.hidden === false){
        flagDiv.hidden = true
    } else if (flagDiv.classList.value === 'flag' && flagDiv.hidden === true && symbolDiv.hidden === true){
        flagDiv.hidden = false}
}

function flood(e){
    let stack = e.currentTarget.id.split(',')
    let x = +stack.pop()
    let y = +stack.pop()
    fill(y, x)
}

function fill(y, x){
    const current = document.getElementById(`${y}, ${x}`)
    if (current !== undefined && current.innerHTML === ''){
        current.hidden = false
        document.getElementById(`${y - 1}, ${x}`).hidden = false
        document.getElementById(`${y + 1}, ${x}`).hidden = false
        document.getElementById(`${y}, ${x - 1}`).hidden = false
        document.getElementById(`${y}, ${x + 1}`).hidden = false
        document.getElementById(`${y - 1}, ${x - 1}`).hidden = false
        document.getElementById(`${y - 1}, ${x + 1}`).hidden = false
        document.getElementById(`${y + 1}, ${x - 1}`).hidden = false
        document.getElementById(`${y + 1}, ${x + 1}`).hidden = false
        fill(y - 1, x)
        fill(y + 1, x)
        fill(y - 1, x - 1)
        fill(y - 1, x + 1)
        fill(y, x + 1)
        fill(y, x - 1)
        fill(y + 1, x - 1)
        fill(y + 1, x + 1)
    }
}