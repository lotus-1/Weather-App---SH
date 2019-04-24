const inputValue = document.getElementById('search').value;

const getInputValue = (event) => {
  event.preventDefault();
};

document.getElementById('button').addEventListener('click', getInputValue);

function fetchData(inputValue) {
  fetch('/search' + inputValue)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
       console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
}
