console.log("Let's get this party started!");

async function getMeme(search) {
  const url = `http://api.giphy.com/v1/gifs/search?q=${search}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`;
  const res = await axios.get(url);
  const img = document.querySelector(".meme");
  img.src = res.data.data[0].images.downsized.url;
}

const form = document.querySelector("#memes");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const input = document.querySelector("#search-meme");

  const image = document.createElement("img");
  image.classList.add("meme");
  getMeme(input.value);
  input.value = "";

  const container = document.querySelector("#meme-container");
  container.append(image);
});
