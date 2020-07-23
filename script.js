function adicionarItem() {
    var texto = document.getElementById("inputItemLista").value;
    if (texto !== '') {
        var item = document.createElement("LI");
        item.classList.add("list-group-item");
        item.innerText = texto;
        document.getElementById("lista").appendChild(item);
        document.getElementById("inputItemLista").value = '';
    }
}

function mudaTitulo() {
    var titulo = document.getElementById("inputTitulo").value;
    document.getElementById("titulo").innerHTML = titulo;
}

function mudaUrlImg() {
    document.getElementById("imagem").src = "https://pbs.twimg.com/media/Edkr8_IWAAYDTN1?format=jpg&name=medium";
    document.getElementById("imagem").style.height = "300px";
}

function removeClasse() {
    var elemento = document.getElementsByClassName("list-group-item");
    var i;
    for (i = 0; i < elemento.length; i + 1) {
        elemento[0].classList.remove("list-group-item");
        console.log(elemento)
    }
}