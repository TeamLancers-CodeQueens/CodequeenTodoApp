window.onload = function yourfunction() { 
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
      
      console.log()
       function createTable(data){
        console.log(data)
        //get reference to result div
        const row = document.getElementById("result");
        row.removeChild(row.firstChild);
        console.log(data);
        const myObj = JSON.parse(data);
        for (i in myObj.todos){
            //create a big div
          const bigdiv = document.createElement("div");
          bigdiv.className = "row"

           // create a bootstrap col
           const divNo = document.createElement("div");
           divNo.className ="col-sm-1"
           const number = document.createElement("h1");
           number.innerHTML= i
           divNo.appendChild(number)

           // create a bootstrap col
          const div = document.createElement("div");
           div.className ="col-sm-3"

          // create an h1 element
          const activity = document.createElement("h1");
          //add text to h1
          activity.innerHTML = myObj.todos[i]["activity"];
          //add h1 to div
          div.appendChild(activity); 
           
           // create a bootstrap col
           const div2 = document.createElement("div");
          div2.className ="col-sm-3"
          var checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            //set value of checkbox
            checkbox.checked = myObj.todos[i]["finished"];
            //add checkbox to big div
            div2.appendChild(checkbox);

            //addd number activity and checkbox  to big div
            bigdiv.appendChild(divNo);
            bigdiv.appendChild(div);
            bigdiv.appendChild(div2);

            //add bigdiv to row
           row.appendChild(bigdiv);
          }
        
         
      
      
      
       }
}

