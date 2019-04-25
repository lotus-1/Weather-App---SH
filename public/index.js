document.getElementById('button').addEventListener('click', function(e) {
  e.preventDefault();
  fetchData();
});

function fetchData() {
  const inputValue = document.getElementById('search').value;
  fetch('/search?city=' + inputValue)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
       var addPargraph = document.createElement("p");
       var addNewNode = document.createTextNode('The temperature now in fahrenheit : ' + data);
       addPargraph.appendChild(addNewNode);

       var newElement = document.getElementById("temp");
       newElement.appendChild(addPargraph);
    })
    .catch((err) => {
      console.log(err);
    });
}
