function MostrarAlerta(){
    alert("Hizo Clixck!");
}

function HacerClick(){
    document.getElementById('box-input-submit')[0].onclick = MostrarAlerta();
}
