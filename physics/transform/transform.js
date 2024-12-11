const inputForm = document.getElementById('inputForm')
const clear = document.getElementById('clear')
const random = document.getElementById('random')
const info = document.getElementById('info')
const desmos = document.getElementById('output5')
const desmos2 = document.getElementById('output6')
const amp = .5
let count = 1
let circle
let tranform

let xlist = new Array
for (let i = 0; i<5000; i++){
    xlist.push(i)
}


function generateDesmos(){
        circle = Desmos.GraphingCalculator(desmos, 
        object = {
        "allowComplex": true,
        "polarMode": false,
        "expressions": false, 
        "keypad": false,
        "settingsMenu": true,
        "lockViewport": true,
        "zoomFit": true})

        tranform = Desmos.GraphingCalculator(desmos2, 
            object = {
            "allowComplex": true,
            "expressions": false, 
            "keypad": false,
            "settingsMenu": true,
            "lockViewport": false,
            "zoomFit": true})
}






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

    graph.setExpression({id: 'circle', latex: `((\\sin(2\\pi${hertz1}t))+(\\sin(2\\pi${hertz2}t))+(\\sin(2\\pi${hertz3}t)))
        (e^{-2\\pi(\\sqrt{-1})${f}t})`})
}

function interpret(graph, hertz1, hertz2, hertz3){
    graph.setExpression({id: 'transform', type: 'table', columns: [
        {
        latex: 'x',
        
        values: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
              '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40',
              '41', '42', '43', '44', '45', '46', '47', '48', '49', '50']
        },
        {
            latex: `-\\imag(\\int_0^{5}((\\sin(2\\pi${hertz1}t))+(1\\sin(2\\pi${hertz2}t))+(\\sin(2\\pi${hertz3}t)))
            e^{-2\\pi(\\sqrt{-1})xt}dt)`,
            lines: 'true',
            color: `#2d70b3`
        },
    ]})
}


function display(){
    if (count == 1){
        generateDesmos()
        count++
    }

    let freq1 = parseInt(document.getElementById('freq1').value)
    let freq2 = parseInt(document.getElementById('freq2').value)
    let freq3 = parseInt(document.getElementById('freq3').value)
    let freq4 = parseInt(document.getElementById('freq4').value)


    freq1_y = generateWave(freq1)
    freq2_y = generateWave(freq2)
    freq3_y = generateWave(freq3)
    newFreq_y = combineWave(freq1_y, freq2_y, freq3_y)
    wrap(circle, freq4, freq1, freq2, freq3)
    interpret(tranform, freq1, freq2, freq3)
   


  
  

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

random.addEventListener('click', (event)=>{
    
    let freq1 = document.getElementById('freq1')
    let freq2 = document.getElementById('freq2')
    let freq3 = document.getElementById('freq3')

    let ranNum1 = parseInt((((Math.random()/2).toFixed(2))*100))
    while (ranNum1 == 0){
        ranNum1 = parseInt((((Math.random()/2).toFixed(2))*100))
    }

    let ranNum2 = parseInt((((Math.random()/2).toFixed(2))*100))
    while (ranNum2 == 0){
        ranNum2 = parseInt((((Math.random()/2).toFixed(2))*100))
    }

    let ranNum3 = parseInt((((Math.random()/2).toFixed(2))*100))
    while (ranNum3 == 0){
        ranNum3 = parseInt((((Math.random()/2).toFixed(2))*100))
    }

    freq1.value = ranNum1
    freq2.value = ranNum2
    freq3.value = ranNum3

    hzUpdate(freq1.value, 1)
    hzUpdate(freq2.value, 2)
    hzUpdate(freq3.value, 3)
    display()

})



info.innerHTML = `NOTE FOR DESMOS PLOTS:<br>-Go into settings (Button with the wrench icon)<br>-Scroll down and turn on complex mode<br>
- You will need to zoom out and slide over on the bottom graph<br><br>FOR ALL NON-Desmos plot:<br>- X-Axis = Time(ms)`

