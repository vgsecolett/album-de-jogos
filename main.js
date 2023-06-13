
var images = ["https://th.bing.com/th/id/OIP.uWmQh8YZIU46O27TuiGLoAHaFA?pid=ImgDet&rs=1","https://images.nintendolife.com/09c615c4bd601/hollow-knight.original.jpg","https://hdqwalls.com/wallpapers/mortal-kombat-x-xl-edition.jpg"];

var jogos = ["little nightmares","hollow knight","mortal kombat"];

console.log(jogos)

var i = 0;
function update(){

    i++;
    var numero_de_jogos_no_lista = 2;
    if(i > numero_de_jogos_no_lista) // se o número atual da imagem mostra for maior que ultima posição da lista, precisamos voltar para a primeira imagem
    {
        i = 0;
    }

    var updateImage = images[i];
    var updateJogos = jogos[i];
    document.getElementById("jogo_image").src = updateImage;
    document.getElementById("mostra_nome_do_jogo").innerHTML = updateJogos;

}
