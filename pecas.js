var listaDepecas = ["volante,retrovisor,painel"]

if(listaDepecas.length < 10) {
    //é possível cadastrar
    console.log("é possível cadastrar mais peças")
}else {
    console.log("não tem mais espaço na lista")
}


let peso = 50;
if(peso<100){
    console.log("a peça deve pesar no minímo 100g")
}else{
    console.log("a peça possui peso adequado")
}


let nomeDapeca = "filtro de ar"
if (nomeDapeca.length>3){
    console.log("nome da peça esta adequado para cadastro")
}else{
    console.log("o nome deve ter mais de 3 caracteres, digite um nome adequado")
}