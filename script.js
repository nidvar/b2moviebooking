const alphabet = 'abcdefghijklmnopqr'
const rowArray = alphabet.toUpperCase().split('')
//create row
let result = ''
const createRow = (row_number)=>{
    for(let i=0; i<=22; i++){
        const row = document.createElement('div');
        row.classList.add('seats')
        if(i === 6){
            row.classList.add('space')
        }
        if(i === 17){
            row.classList.add('space')
        }
        row.setAttribute('id', `${row_number}${i}`)
        row.addEventListener('click',(e)=>{
            
            if(row_number<10){
                const x = e.target.id.slice(1)
                const y = rowArray[row_number]+x
                console.log(y)
                console.log(result)
                result = result +' - '+ y
                console.log(result)
            }else{
                const x = e.target.id.slice(2)
                const y = rowArray[row_number]+x
                result = result +' - '+ y
            }
            document.getElementById('results').innerHTML = result
            e.target.classList.toggle('yourSeat')
        })
        const rows = document.getElementsByClassName('rowLetter')
        rows[row_number].appendChild(row)
    }
}

for(let i=0; i<=17; i++){
    const rowLetter = document.createElement('div');
    const p = document.createElement('p');
    p.classList.add('p_tag')
    p.textContent = rowArray[i]
    rowLetter.appendChild(p)
    rowLetter.classList.add('rowLetter')
    document.getElementById('cinema').appendChild(rowLetter)
    createRow(i)
}