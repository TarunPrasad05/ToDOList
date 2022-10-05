 // Model Section
 let todo;

 const saved = JSON.parse(localStorage.getItem('todo'));

 if(Array.isArray(saved))
 {
     todo = saved;
 }
 else
     todo=[];

 
 //Create To Do
 function createtodo(textval,dateval)
 {
     const id = '' + new Date().getTime();

     todo.push({
     title: textval,
     due: dateval,
     id: id
     });

     savedtodo();
 }

 //Remove To Do
 function removetodo(idtodelete)
 {
     todo = todo.filter(function (b)
     {

     if( b.id === idtodelete)
     {
         return false;
     }

     else
     {
         return true;
     }

     });

     savedtodo();

 }

 function savedtodo()
 {
     localStorage.setItem('todo', JSON.stringify(todo));
 }

 //View Section
 function render()
 {

     document.getElementById('main').innerHTML="";

     todo.forEach(function(a)
     {
         const dee= document.createElement('div');
         dee.innerText=a.title +' ' + a.due;


         const deletebutton = document.createElement('button');
         
         deletebutton.innerText="Delete";
         deletebutton.onclick= deletetodo;
         deletebutton.id= a.id;
         deletebutton.style = 'margin-left: 12px;';
         dee.appendChild(deletebutton);

         
         const todomain=document.getElementById('main');
         todomain.appendChild(dee);

     });
 }


 //Control Section
 //Controller 1
 function add ()
 {

     const textbox = document.getElementById('todo-title');
     const textval = textbox.value;

     const datepick = document.getElementById('todo-date');
     const dateval = datepick.value;

     createtodo(textval,dateval);

     render();
 }
 
 //Controller 2
 function deletetodo(event)
 {
     const eventvalue = event.target;
     const idtodelete = eventvalue.id;

     removetodo(idtodelete);

     render();

 }

 render();
