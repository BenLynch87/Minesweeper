function textbox (name, interface){
    let newLabel = document.createElement('label')
    newLabel.append(`${name}: `)
    let newInput = document.createElement('input')
    newInput.id = `${name}Box`
    newInput.value = 10
    interface.append(newLabel)
    interface.append(newInput)
}

function resetButton(interface){
    let newButton = document.createElement('button')
    newButton.append('Reset')
    newButton.id = 'reset'
    newButton.addEventListener('click', function(){

    })
    interface.append(newButton)
}

function startButton(interface){
    let newButton = document.createElement('button')
    newButton.append('Start')
    newButton.id = 'start'
    newButton.addEventListener('click', function(){
        width = +document.getElementById('WidthBox').value
        height = +document.getElementById('HeightBox').value
        mines = +document.getElementById('Mine#Box').value
        if(Number.isInteger(width) && Number.isInteger(height) && Number.isInteger(mines)
        && width > 0 && height > 0 && mines > 0){
            let myne = new Minefield(width, height, mines)
        }else{
            alert("The dimensions of the minefield and the number of mines must be non-zero positive integers!")
        }
    })
    interface.append(newButton)
}

function interface(){
    let newInterface = document.createElement('div')
    newInterface.classList.add('interface')
    textbox('Width', newInterface)
    textbox('Height', newInterface)
    textbox('Mine#', newInterface)
    startButton(newInterface)
    let main = document.querySelector('main')
    main.append(newInterface)
}