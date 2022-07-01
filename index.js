// request from an api using fetch and then display the data in the console

function getData() {
  fetch("https://api.github.com/users/joshuacodes")
    .then(response => response.json())
    .then(data => console.log(data));
}
