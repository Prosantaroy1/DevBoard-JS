
//task function
function taskFuction(id){
    const taskNumber=document.getElementById(id).innerText;
     const convertTaskNum=parseInt(taskNumber);
     document.getElementById(id).innerText=convertTaskNum-1;
     // task o then alert
     if(convertTaskNum == 1){
          alert('Conngrates !! You have completed all current task.')
     }
}

//nav-mark fuction
function navNumbers(id){
   const navMark=document.getElementById(id).innerText;
   const convertNavMark=parseInt(navMark);
   document.getElementById(id).innerText=convertNavMark+1;
}

//add to title fuc
function addTitle(id1, id2){
       // ----cart -title----
       const cartTitle= document.getElementById(id1).innerText;  //title get
       const list=document.createElement('li')    //create element li
       list.setAttribute('id', 'list-all')
       list.className='bg-[#F4F7FF] p-3 text-base rounded'   //style history title
       let time= new Date() //date
       list.innerText= `You have Complete ${cartTitle} at ${time.toLocaleTimeString()}`;  //add to title newElement
       const historyUl=document.getElementById(id2)  //ul element get id
       historyUl.appendChild(list)
}

//history clear btn
document.getElementById('history-deleted').addEventListener('click', ()=>{
    const listed=document.getElementsByTagName('li')
    listed.removeAll();

})