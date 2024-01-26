const searchInput = document.getElementById('search-input'); //Joga para a constante a representação do elemente que tem a Id search_input
const resultArtists = document.getElementById('result-artist');
const resultPlaylist = document.getElementById('result-playlists');

function requestApi(searchTerm) { //searchTerm é o que a gente digitou no input
    const url = `http://localhost:3000/artists?name_like=${searchTerm}` //url da api. Pede para a api com um nome parecido com o que esta sendo digitado (searchTerm)
    fetch(url) //fetch é para consumir, fazer requisição
        .then((response) => response.json())//Fica escutando até quando resolver essa promisses. Ai ele escuta a resposta pega ela e converte em .json para a gente poder trabalhar
        .then((result) => displayResults(result));
}

function displayResults(result) {
    resultPlaylist.classList.add('hidden')
    const artistImage = document.getElementById("artist-img");
    const artistName = document.getElementById("artist-name");
  
    result.forEach(element => {
        artistName.innerText = element.name;
        artistImage.src = element.urlImg;
    });
    resultArtists.classList.remove('hidden');
}


// Manipulação de evento(interação com o usuário)
document.addEventListener("input", function() {
    const searchTerm = searchInput.value.toLowerCase(); //essa nova constante recebe o valor da searchImput com txt td em minúsculo
    if (searchTerm === ""){
        resultPlaylist.classList.add("hidden");
        resultArtists.classList.remove("hidden");
        return;
    }

    requestApi(searchTerm);
}); //to escutando o evento('input'), assim que acontecer esse evento vai acontecer o seguinte na tela