const inputForm = document.getElementById('inputForm')
const clear = document.getElementById('clear')
const e = Math.E
const complex = math.complex(0, 1)
const amp = .5
const desmos = document.getElementById('output5')
let count = 0
var calculator = Desmos.GraphingCalculator(desmos, 
    object = {
    "allowComplex": true,
    "polarMode": true, 
    "expressions": false, 
    "keypad": false,
    "settingsMenu": false,
    "lockViewport": true,
    "zoomFit": true})





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


function combineWave(wave1, wave2, wave3){
    let newWave = new Array
    for (let i = 0; i<wave1.length; i++){
       component = wave1[i] + wave2[i] + wave3[i]
       newWave.push(component)
    }
    return newWave
}

function wrap(graph, f, hertz1, hertz2, hertz3){
 
    graph.setExpression({id: 'circle', latex: `((1*\\sin(2*\\pi*${hertz1}*x))+(1*\\sin(2*\\pi*${hertz2}*x))+(1*\\sin(2*\\pi*${hertz3}*x)))*e^{-2*\\pi*\\sqrt(-1)*${f}*x}`})
}

function display(){


    let freq1 = parseInt(document.getElementById('freq1').value)
    let freq2 = parseInt(document.getElementById('freq2').value)
    let freq3 = parseInt(document.getElementById('freq3').value)
    let freq4 = parseInt(document.getElementById('freq4').value)

    freq1_y = generateWave(freq1)
    freq2_y = generateWave(freq2)
    freq3_y = generateWave(freq3)
    newFreq_y = combineWave(freq1_y, freq2_y, freq3_y)
    wrap(calculator, freq4, freq1, freq2, freq3)
   


    let xlist = new Array
        for (let i = 0; i<5000; i++){
            xlist.push(i)
        }

  

    Plotly.newPlot( output1, [{
            x: xlist,
            y: newFreq_y }], {
            margin: { t: 0 } } );

    Plotly.newPlot( output2, [{
        x: xlist.slice(0,1001),
        y: freq1_y.slice(0,1001) }], {
        margin: { t: 0 } } );

    Plotly.newPlot( output3, [{
        x: xlist.slice(0,1001),
        y: freq2_y.slice(0,1001) }], {
        margin: { t: 0 } } );
    
    Plotly.newPlot( output4, [{
        x: xlist.slice(0,1001),
        y: freq3_y.slice(0,1001) }], {
        margin: { t: 0 } } );

    
}


clear.addEventListener('click', (event)=>{
    location.reload()

})
