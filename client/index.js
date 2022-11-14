const form = document.getElementById('todo_form');
const get_btn = document.getElementById('get_btn');

form.addEventListener("submit", (event)=> {
    
    event.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const name = form.elements['activity'];

var raw = JSON.stringify({
  "activity": name.value,
  "finished": false
});
 console.log(raw)
var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
};

fetch("http://localhost:9000/todos", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

window.location.replace("http://127.0.0.1:5500/client/todos.html")

}, 

);


