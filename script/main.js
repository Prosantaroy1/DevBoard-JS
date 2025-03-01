// backgroud chage

document.getElementById('color-btn').addEventListener('click',()=>{
     let colorNum=Math.floor(Math.random() * 10000);
     document.getElementById('colorChnage').style.backgroundColor=`#34${colorNum}`
})

// location new html
document.getElementById('blog').addEventListener('click', ()=>{
     window.location.href='blog.html'
})

// date
const date = new Date("2025-03-1");
const day =date.getDay();
const dayNames = ["Sun", "Mon", "Tue","Wed","Thu","Fri", "Sat"];
document.getElementById('dayName').innerText=dayNames[day];  //day add
//month, date, year
const dated=date.getDate();
const year=date.getFullYear();
const month=date.getMonth();
const monthAllName=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const monthName=monthAllName[month]

document.getElementById('dates').innerText=`${monthName} ${dated} ${year}`

// btn click part- card btn one
document.getElementById('btn-one').addEventListener('click', ()=>{
     alert('Board Updated Successfully')
    
     const tasked=taskFuction('task-num')  //taskNumber function
     const navNum=navNumbers('nav-mark')   //nav number add fuc
     const titleAdd=addTitle('cart-title','history-add') 
     //btn disable
     document.getElementById('btn-one').setAttribute('disabled', '');
})

//btn two
document.getElementById('btn-two').addEventListener('click', ()=>{
     alert('Board Updated Successfully')
    
     const tasked=taskFuction('task-num')  //taskNumber function
     const navNum=navNumbers('nav-mark')   //nav number add fuc
     const titleAdd=addTitle('cart-title-2','history-add') 
     //btn disable
     document.getElementById('btn-two').setAttribute('disabled', '');
})
//btn three
document.getElementById('btn-three').addEventListener('click', ()=>{
     alert('Board Updated Successfully')
    
     const tasked=taskFuction('task-num')  //taskNumber function
     const navNum=navNumbers('nav-mark')   //nav number add fuc
     const titleAdd=addTitle('cart-title-3','history-add') 
     //btn disable
     document.getElementById('btn-three').setAttribute('disabled', '');
})
//btn four
document.getElementById('btn-four').addEventListener('click', ()=>{
     alert('Board Updated Successfully')
    
     const tasked=taskFuction('task-num')  //taskNumber function
     const navNum=navNumbers('nav-mark')   //nav number add fuc
     const titleAdd=addTitle('cart-title-4','history-add') 
     //btn disable
     document.getElementById('btn-four').setAttribute('disabled', '');
})
//btn five
document.getElementById('btn-five').addEventListener('click', ()=>{
     alert('Board Updated Successfully')
    
     const tasked=taskFuction('task-num')  //taskNumber function
     const navNum=navNumbers('nav-mark')   //nav number add fuc
     const titleAdd=addTitle('cart-title-5','history-add') 
     //btn disable
     document.getElementById('btn-five').setAttribute('disabled', '');
})
//btn two
document.getElementById('btn-six').addEventListener('click', ()=>{
     alert('Board Updated Successfully')
    
     const tasked=taskFuction('task-num')  //taskNumber function
     const navNum=navNumbers('nav-mark')   //nav number add fuc
     const titleAdd=addTitle('cart-title-6','history-add') 
     //btn disable
     document.getElementById('btn-six').setAttribute('disabled', '');
})