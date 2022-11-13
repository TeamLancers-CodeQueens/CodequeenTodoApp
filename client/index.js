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
}, );


get_btn.addEventListener('click', () =>{
  var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");


var requestOptions = {
  method: 'GET',
  headers: myHeaders,
};

fetch("http://localhost:9000/todos", requestOptions)
  .then(response => response.text())
  .then(result => createTable(result))
  .catch(error => console.log('error', error));
})

 function createTable(data){

  const row = document.getElementById("result");
  console.log(data);
  const myObj = JSON.parse(data);
  for (i in myObj.todos){
    const bigdiv = document.createElement("row");
    const div = document.createElement("div");
    const activity = document.createElement("h1");
    activity.innerHTML = myObj.todos[i]["activity"];
    div.appendChild(activity);  
    var checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = myObj.todos[i]["finished"];
      bigdiv.appendChild(checkbox);
      bigdiv.appendChild(activity);
     row.appendChild(bigdiv);
    }
  
   



 }