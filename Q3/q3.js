/*
 Name: #
 Email: #
 */

// DO NOT EDIT: START
const jokeTable = document.getElementById("joke-table");
const jokeTableTbody = jokeTable.getElementsByTagName("tbody")[0];
const jokeText = document.getElementById("jokeText");
// DO NOT EDIT: END

function getSampleJokes() {
  // DO NOT EDIT: START
  while (jokeTableTbody.lastChild) {
    jokeTableTbody.lastChild.remove();
  }

  var sampleJokesdata = sampleJokes;

  var str = "";
  var q = 1;
  for (i of sampleJokesdata) {
    if (i.type == "twopart") {
      str += "<tr>";
      str += `<td>${q}</td>`;
      str += `<td>${i.category}</td>`;
      str += `<td>${i.setup}</td>`;
      str += `<td>${i.delivery}</td>`;
      str += "</tr>";
      q++;
    }
  }
  jokeTableTbody.innerHTML = str;

  let serial = 1;
  // DO NOT EDIT: END

  // To be completed...
}

function getJoke() {
  // To be completed...

  para = { query: document.getElementById("categoriesDD").value };
  axios
    .get("q3_getJoke.php", { params: para })
    .then((response) => {
      // process response.data object
      // console.log(response.data);
      jokeText.innerHTML = response.data;
    })
    .catch((error) => {
      // process error object
      console.log(error.message);
    });
}
