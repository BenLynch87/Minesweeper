class Minefield {
    constructor(width, height, mineNum){
        this.field = []
        this.mines = []
        this.foundMines = mineNum
        for (let i = 0; i < height ; i++){
            let array = new Array(width).fill(0)
            this.field.push(array)
        }
        this.layMines()
        this.setVicinities()
        this.buildRows(width, height)
    }

    layMines(){
        for (let i = 0; i < this.field.length; i++){
            for (let j = 0; j < this.field[i].length; j++){
                let chance = Math.random()
                if (this.field[i][j] === 0 && this.foundMines > 0 && chance < 0.05){
                    this.field[i][j] = 9
                    this.foundMines--
                    this.mines.push([i, j])
                }
            }
        }
        if (this.foundMines > 0){this.layMines()}
    }

    setVicinities(){
        for (let i = 0; i < this.mines.length; i++){
            let X = this.mines[i][0], Y = this.mines[i][1]
            for (let j = 0; j < 3; j++){
                if (X - 1 > -1 && Y - 1 + j < this.field[X].length && Y - 1 + j > -1 && this.field[X - 1][Y - 1 + j] !== 9){
                    this.field[X - 1][Y - 1 + j]++
                }
            }
            for (let j = 0; j < 3; j++){
                if (X + 1 < this.field.length && Y - 1 + j < this.field[X].length && Y - 1 + j > -1 && this.field[X + 1][Y - 1 + j] !== 9){
                    this.field[X + 1][Y - 1 + j]++
                }
            }
            if (Y - 1 > -1 && this.field[X][Y - 1] !== 9){this.field[X][Y - 1]++}
            if (Y + 1 < this.field[X].length && this.field[X][Y + 1] !== 9){this.field[X][Y + 1]++}
        }
    }

    fillRows(width, row){
        for (let i = 0; i < width; i++){
            let newSpace = document.createElement('div')
            newSpace.classList.add('space')
            row.append(newSpace)
        }
    }

    buildRows(width, height){
        for (let i = 0; i < height; i++){
            let newRow = document.createElement('div')
            newRow.classList.add('row')
            this.fillRows(width, newRow)
            let main = document.querySelector('main')
            main.append(newRow)
        }
    }
}