document.getElementById('button').addEventListener('click', function(e) {
  e.preventDefault();
  fetchData();
});

function fetchData() {
  const inputValue = document.getElementById('search').value;
  console.log('input:', inputValue);
  fetch('/search?city=' + inputValue)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
       console.log(data);
       var pargraph = document.createElement("p");
       var newNode = document.createTextNode('The temperature now is : ' + data);
       pargraph.appendChild(newNode);

       var newElement = document.getElementById("temp");
       newElement.appendChild(pargraph);
    })
    .catch((err) => {
      console.log(err);
    });
}
