var speech = document.querySelector("#speech")

console.log(speech);

var difSpeech = [
    "...what?",
    "Please?",
    "I will be so sad...",
    "Just think about it PLEASE???",
    "Say yes pretty please.."
    
]



var i = 0;
var size = 30;
no.addEventListener("click", function() {
    yes.style.fontSize = size + "px";
    size += size;



    function replaceText() {
    
        if (size < 900) {
            speech.textContent = difSpeech[i];
            i = i + 1;
        }
        if (size > 1000) {
            document.getElementById("no").style.display = "none";
        }
       
    }

 
    
    replaceText();

} )



