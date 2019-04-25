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
      document.getElementById("temp").textContent = ('The temperature now in fahrenheit : ' + data);

    })
    .catch((err) => {
      console.log(err);
    });
}
