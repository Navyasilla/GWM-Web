const form=document.querySelector('form');
const taskLists = document.querySelector('#task-list')
//const tas =document.querySelector('#labe');
function addTask(task){
    
    const listItem=document.createElement('li')
    listItem .innerHTML= `<label><input type="checkbox" class="chkbx"><span>${task}</span></label><button>Delete</button>`
    taskLists.appendChild(listItem)
    
    //tas.appendChild(listItem)
}   

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    const input=document.querySelector('#task-input')
    const task=input.value;
    addTask(task);
    input.value=''
})

taskLists.addEventListener('click' , (event)=>{
    if(event.target.tagName == 'BUTTON'){
        const listItem=event.target.parentElement
        taskLists.removeChild(listItem)
    }
})

