const inputForm = document.getElementById('inputForm')
const output1 = document.getElementById('output1')
const amp = .5



function hzUpdate(freq, num){
    let val = document.getElementById(`val${num}`)

    val.innerHTML = `Value: ${freq} Hz`
}

function generateWave(hertz){

    let ylist = new Array
    for (let i=0; i<5; i+=.001){
        waveValue = amp*Math.sin((2*Math.PI)*hertz*i)+0.5
        ylist.push(waveValue)
    }
        return ylist
    
}


function combineWave(wave1, wave2){
    let newWave = new Array
    for (let i = 0; i<wave1.length; i++){
        console.log(`wave1: ${wave1[i]}`)
        console.log(`wave2: ${wave2[i]}`)
       component = wave1[i] + wave2[i]
       console.log(`new: ${component}`)
       newWave.push(component)
    }
    return newWave
}

inputForm.addEventListener('submit', (event) =>{
    event. preventDefault()

    let freq1 = parseInt(document.getElementById('freq1').value)
    let freq2 = parseInt(document.getElementById('freq2').value)
    let freq3 = parseInt(document.getElementById('freq3').value)

    freq1_y = generateWave(freq1)
    freq2_y = generateWave(freq2)
    freq3_y = generateWave(freq3)
    newFreq_y = combineWave(freq1_y, freq2_y)

    


    let xlist = new Array
        for (let i = 0; i<5000; i++){
            xlist.push(i)
        }

  


    Plotly.newPlot( output1, [{
        x: xlist,
        y: freq1_y }], {
        margin: { t: 0 } } );

    Plotly.newPlot( output2, [{
        x: xlist,
        y: freq2_y }], {
        margin: { t: 0 } } );

    Plotly.newPlot( output3, [{
        x: xlist,
        y: newFreq_y }], {
        margin: { t: 0 } } );

   


})



