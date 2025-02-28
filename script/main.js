// card btn one
document.getElementById('btn-one').addEventListener('click', ()=>{
     alert('click thin btn')
     const taskNumber=document.getElementById('task-num').innerText;
     const convertTaskNum=parseInt(taskNumber);
     document.getElementById('task-num').innerText=convertTaskNum-1;
     
})