document.getElementById("push").addEventListener("click", Task);

// Função responsavel por indentificar se a tarefa foi nomeada 
function Task(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Kindly Enter Task Name!!!!")
    }
    else{
        Creation();       
    }
}
// Função responsavel por criar as tarefas 
function Creation(){
    document.querySelector('#tasks').innerHTML += `
    <div class="task">
        <span id="taskname">
            ${document.querySelector('#newtask input').value}
        </span>
        <div class="buttons">
            <button class="check"><img src="check.png"></button>
            <button class="nocheck"><img src="nocheck.png"></button>
            <button class="delete"><img src="delete.png"></button>
        </div>
       
    </div>
    `;
    document.querySelector('#newtask input').value = "";
    check();
    nocheck();
    del();
}
// Função responsavel por muda a cor da tarefa se ela foi cumprida 
function check(){ 
    var current_tasks = document.querySelectorAll(".check");
    for(var i=0; i<current_tasks.length; i++){
        current_tasks[i].onclick = function(){
                this.parentNode.parentNode.style.backgroundColor = "#4be639";
            }
        }
}
// Função responsavel por mudar a cr da tarefas se não ela foi  cumprida 
function nocheck(){ 
    var current_tasks = document.querySelectorAll(".nocheck");
    for(var i=0; i<current_tasks.length; i++){
        current_tasks[i].onclick = function(){
                this.parentNode.parentNode.style.backgroundColor = "#e63939";
            }
        }
}
// Função responsavel por apagar as tarefas, 
function del(){ 
    var current_tasks = document.querySelectorAll(".delete");
    for(var i=0; i<current_tasks.length; i++){
        current_tasks[i].onclick = function(){
                this.parentNode.parentNode.remove();
            }
        }
}

