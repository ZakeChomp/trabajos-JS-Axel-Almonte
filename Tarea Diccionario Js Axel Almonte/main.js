const search = document.getElementById('search');
var url = `https://api.dictionaryapi.dev/api/v2/entries/en/`;

function wordSearch() {
    var word = document.getElementById('wordInput').value;
    var dictionary = document.getElementById('dictionary');
    var url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        dictionary.innerHTML = `
        <h1 id="wordResult">${word}</h1>
        <p id="phonetic">${data[0].phonetic || ""}</p>
        <p id="definition1">${data[0].meanings[0].definitions[0].definition}</p>
        <p id="partOfSpeech>${data[0].meanings[0].partOfSpeech}</p>
        <p id="example"><i>${data[0].meanings[0].definitions[0].example || ""}</i></p>`
        dictionary.style.display = "block";
    })
    .catch(() => {
        dictionary.innerHTML = "<h1>That word doesn't exist</h1>";
    });
};