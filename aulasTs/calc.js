function adicionar(valor){
    let _resultado = document.getElementById("resultado");
    _resultado.value = valor;
}

function calcular(){
    let _resultado = document.getElementById("resultado");
    _resultado.value = eval (_resultado.value);
}

function limpar(){
    let _resultado = document.getElementById("resultado");
    _resultado.value = "";
}