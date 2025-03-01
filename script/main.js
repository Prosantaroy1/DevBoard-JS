
// btn click part- card btn one
document.getElementById('btn-one').addEventListener('click', ()=>{
     alert('Board Updated Successfully')
     //task
     const taskNumber=document.getElementById('task-num').innerText;
     const convertTaskNum=parseInt(taskNumber);
     document.getElementById('task-num').innerText=convertTaskNum-1;
     // task o then alert
     if(convertTaskNum == 1){
          alert('Conngrates !! You have completed all current task.')
     }
     //nav mark
     const navMark=document.getElementById('nav-mark').innerText;
     const convertNavMark=parseInt(navMark);
     document.getElementById('nav-mark').innerText=convertNavMark+1;
     // cart -title
     const cartTitle= document.getElementById('cart-title').innerText;
     console.log(cartTitle);
     const list=document.createElement('li')    //create element li
     list.className='bg-red-300 p-3 text-base'
     list.innerText=cartTitle;  //add to title newElement
     const historyUl=document.getElementById('history-add')  //ul element get id
     historyUl.appendChild(list)
     //btn disable
     document.getElementById('btn-one').setAttribute('disabled', '');
})