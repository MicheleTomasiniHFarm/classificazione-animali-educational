
//Al caricamento iniziale
document.addEventListener("DOMContentLoaded", function() {
    //al caricameno del DOM attiva gli event listener

    document.getElementById('start_button')
                .addEventListener('click', function(){
                    document.getElementById('start_message_div').
                        style.display='none';
                })

    document.getElementById('card')
                .addEventListener('drag', function(){
                    drag_handler(event);
                });

    document.getElementById('card')
                .addEventListener('dragstart', function(){
                    dragstart_handler(event);
                });

    document.getElementById('carnivori_box')
                .addEventListener('drop', function(){
                    drop_handler(event);
                });

    document.getElementById('carnivori_box')
                .addEventListener('dragover', function(){
                    dragover_handler(event);
                });
});


//Gestione del drag and drop
function drag_handler(ev) {
    console.log("Drag");
   }
   
function dragstart_handler(ev) {
    console.log("dragStart");
    ev.dataTransfer.setData("newtext", ev.target.id);
    console.log(ev, '+', ev.target.id)
   }
   
function drop_handler(ev) {
    console.log("Drop");
    ev.currentTarget.style.background = "darkblue";
   
    ev.preventDefault();
    var data = ev.dataTransfer.getData("newtext");
    ev.target.appendChild(document.getElementById(data));
}
   
function dragover_handler(ev) {
    console.log("dragOver");
    ev.preventDefault();
}

//Logica del gioco

/*

var schedeDisponibili = []

funzione creaSchedeDisponibili(): popola schedeDisponibili 
    di numeri da 0 a database.length-1
            @chiamata all'avvio

funzione creaScheda(): 
    sceglie un numero da schedeDisponibili 
    in maniera casuale > rNum

    legge database[rNum] e inserisce 
    i valori corrispondenti in card
    il valore categoria è nascosto
    poi 'card'.style.display= block;

            @chiamata alla chiusura di start_div
            @chiamata alla chiusura di validazione

funzione validazione(): if categoria == target.text
    rimuove rNum da schedeDisponibili    
    alert messaggioGiusto
        blocca esecuzione fino a click [Come si fa????]
    
    else
    alert messaggioErrato
        blocca esecuzione fino a click [Come si fa????]

    poi 
    rimette a posto 'card' [Come si fa????]
    nasconde 'card' con display 'none'

    poi
    if (schedeDisponibili.length == 0){
        document.getElementById('end_message_div').
            style.display = 'block'
    } else {creaScheda()}

*/



/* **********************************************
************Database degli animali***************
********************************************** */
var database = [
    {
        nome: '',
        immagine: '',
        categoria:'',
        testo:'',
    },//{...}
]

