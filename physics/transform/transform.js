let freq1 = document.getElementById('freq1')
let freq2 = document.getElementById('freq2')
let freq3 = document.getElementById('freq3')



function hzPrint(num){

    
    


}

freq1.addEventListener('change', (event) =>{
    freq = document.getElementById(`freq1`).value
    let val = document.getElementById(`val1`)

    val.innerHTML = `Value: ${freq} Hz`
})
freq2.addEventListener('change', (event) =>{
    freq = document.getElementById(`freq1`).value
    let val = document.getElementById(`val1`)

    val.innerHTML = `Value: ${freq} Hz`
})
freq3.addEventListener('change', (event) =>{
    freq = document.getElementById(`freq1`).value
    let val = document.getElementById(`val1`)

    val.innerHTML = `Value: ${freq} Hz`
})
