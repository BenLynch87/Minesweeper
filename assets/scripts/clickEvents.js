function clickSpace(e){
    const flagDiv = e.currentTarget.lastElementChild
    const symbolDiv = e.currentTarget.firstElementChild
    if (flagDiv.classList.value === 'flag'){
        flagDiv.hidden = true
    }
    symbolDiv.hidden = false
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