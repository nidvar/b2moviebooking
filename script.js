//create row
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

            const x = e.target.id.slice(1)
            console.log(x)
            e.target.classList.toggle('yourSeat')
        })
        const rows = document.getElementsByClassName('row')
        rows[row_number].appendChild(row)
    }
}

createRow(0);
createRow(1);