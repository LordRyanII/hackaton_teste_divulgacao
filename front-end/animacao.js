//Start_of_my_code
function carregar(){
    let hack = window.document.querySelector('#hack')
    let data = new Date()
    let minutes = data.getMinutes()
    console.log('teste' + minutes)  
    if(minutes % 2 ){
        hack.setAttribute('id', 'load_1')
        console.log('par')
    } else if(minutes % 3){
        hack.setAttribute('id', 'load_2')
        console.log('ímpar')
    }
}