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
       var para = document.createElement("p");
       var node = document.createTextNode('The temperature now is : ' + data);
       para.appendChild(node);

       var element = document.getElementById("temp");
       element.appendChild(para);
    })
    .catch((err) => {
      console.log(err);
    });
}
