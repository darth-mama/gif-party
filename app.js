console.log("Let's get this party started!");

//use the term in the search field for gipphy
//adeventlistener when search button is clicked
//giphy search api key: Vx3yujrKvJ7FLObBNUSJrIYTd1Gdbv7k
const gifArea = document.querySelector("#gif-area");
let keyword = "";
const giphySearch = document.querySelector("#giphySearch");
giphySearch.addEventListener("click", async function (e) {
  e.preventDefault();
  keyword = document.querySelector("#keyword").value;
  await getGif(keyword);

  console.log(keyword);
});

// function addGiph =
const apiKey = "Vx3yujrKvJ7FLObBNUSJrIYTd1Gdbv7k";

async function getGif(searchTerm) {
  const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: {
      q: searchTerm,
      api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym",
    },
  });
  console.log(response);
  addGif(response.data);
}

//remove gifs
const removeGifs = document.querySelector("#remove-gifs");
removeGifs.addEventListener("click", handleRemove);

function handleRemove() {
  gifArea = "";
}

function addGif(res) {
  let dataLen = res.data.length;
  console.log(dataLen);
  //math random number
  if (dataLen) {
    const randomIdx = Math.floor(Math.random() * dataLen);
    console.log(randomIdx);
    const imgDiv = document.createElement("div");
    imgDiv.setAttribute("id", "#img");
    const newGif = document.createElement("img");
    const gifArea = document.querySelector("#gif-area");
    newGif.src = res.data[randomIdx].images.original.url;
    imgDiv.appendChild(newGif);
    gifArea.append(imgDiv);

    //apply random number to the length of the array
    // create div to add gif
    // add gif
    //in the adeventlistener, call the addGif()
  }
}
