var btnTranslate =  document.querySelector("#btn-translate");

var txtInput = document.querySelector("#txt-input");

var outputDiv =  document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/pirate.json";

function getTranslationURL(text){
    return serverURL +"?"+"text=" + text;
}

function errorHandler(error){
    console.log(error);
}
function clickEventHandler(){
    var inputText = txtInput.value;
    
    fetch(getTranslationURL(inputText))
    .then(res=>res.json())
    .then(data=>{
        outputDiv.innerText = data.contents.translated;
        })
    .catch(errorHandler)

    }

btnTranslate.addEventListener("click",clickEventHandler )