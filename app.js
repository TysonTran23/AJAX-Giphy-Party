console.log("Let's get this party started!");

async function getMeme(search) {
  const url = `http://api.giphy.com/v1/gifs/search?q=${search}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`;
  const res = await axios.get(url);
  const randomIndex = Math.floor(Math.random() * res.data.data.length);
  const gifUrl = res.data.data[randomIndex].images.downsized.url;

  const container = document.querySelector("#meme-container");
  const newImg = document.createElement("img");
  newImg.setAttribute("src", gifUrl);
  container.append(newImg);
}

const form = document.querySelector("#memes");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const input = document.querySelector("#search-meme");

  getMeme(input.value);

  input.value = "";
});

const removeButton = document.querySelector('#remove');
removeButton.addEventListener('click', function () {
    const container = document.querySelector("#meme-container");
    container.innerHTML = ''
})