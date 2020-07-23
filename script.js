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