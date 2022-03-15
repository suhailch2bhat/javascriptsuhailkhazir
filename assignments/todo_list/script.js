const compBtn = document.querySelector('button#comp');
const pendBtn = document.querySelector('button#pend');
async function fetchtodo(){
    let res=await fetch('https://jsonplaceholder.typicode.com/todos');    
    let data=await res.json();
    console.log(data)
    
    compBtn.onclick = function(){  
        let output=''; 
    data.forEach(function(todo,index) {
        if (todo.completed == true){ output+=`
       <p style="color:blue;border: 2px solid powderblue;"key=${todo.id}>
                "user-id":  ${todo.userId},<br>
                "id": ${todo.id},<br>
                "title": ${todo.title},<br> "completed":  ${todo.completed},<br>
                </p>
                     `       
               
    }})
    document.querySelector('.todos').innerHTML=output;
    }
    pendBtn.onclick = function(){
        let output='';
        data.forEach(function(todo,index) {
            if (todo.completed == false){
            output+=`<p  style="color:blue;border: 2px solid powderblue;" key=${todo.id}>
                  "userId":  ${todo.userId},<br>
                   "id": ${todo.id},<br>
                   "title": ${todo.title},<br>
                  "completed":  ${todo.completed},<br>
                 </p>`
    }})
        
        document.querySelector('.todos').innerHTML=output;
        }
}
    fetchtodo();