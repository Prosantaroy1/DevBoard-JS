// backgroud chage

document.getElementById('color-btn').addEventListener('click', () => {
     let colorNum = Math.floor(Math.random() * 10000);
     document.getElementById('colorChnage').style.backgroundColor = `#34${colorNum}`
})

// location new html
document.getElementById('blog').addEventListener('click', () => {
     window.location.href = 'blog.html'
})


//dated add
function updateDate() {
     // Get the current date
     const date = new Date();
 
     // day
     const day = date.getDay();
     const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
     document.getElementById('dayName').innerText = dayNames[day]; 
 
     // month, date, and year
     const dated = date.getDate(); // Day 
     const year = date.getFullYear();
     const month = date.getMonth();
     const monthAllName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
     const monthName = monthAllName[month];
 
     // Update the HTML with the correct date
     document.getElementById('dates').innerText = `${monthName} ${dated}, ${year}`;
 }
 
 updateDate();  //fuc call
 
 setInterval(updateDate, 86400000);  //update date
 

// btn click part- card btn one
document.getElementById('btn-one').addEventListener('click', () => {
     alert('Board Updated Successfully')

     const tasked = taskFuction('task-num')  //taskNumber function
     const navNum = navNumbers('nav-mark')   //nav number add fuc
     const titleAdd = addTitle('cart-title', 'history-add')
     //btn disable
     document.getElementById('btn-one').setAttribute('disabled', '');
})

//btn two
document.getElementById('btn-two').addEventListener('click', () => {
     alert('Board Updated Successfully')

     const tasked = taskFuction('task-num')  //taskNumber function
     const navNum = navNumbers('nav-mark')   //nav number add fuc
     const titleAdd = addTitle('cart-title-2', 'history-add')
     //btn disable
     document.getElementById('btn-two').setAttribute('disabled', '');
})
//btn three
document.getElementById('btn-three').addEventListener('click', () => {
     alert('Board Updated Successfully')

     const tasked = taskFuction('task-num')  //taskNumber function
     const navNum = navNumbers('nav-mark')   //nav number add fuc
     const titleAdd = addTitle('cart-title-3', 'history-add')
     //btn disable
     document.getElementById('btn-three').setAttribute('disabled', '');
})
//btn four
document.getElementById('btn-four').addEventListener('click', () => {
     alert('Board Updated Successfully')

     const tasked = taskFuction('task-num')  //taskNumber function
     const navNum = navNumbers('nav-mark')   //nav number add fuc
     const titleAdd = addTitle('cart-title-4', 'history-add')
     //btn disable
     document.getElementById('btn-four').setAttribute('disabled', '');
})
//btn five
document.getElementById('btn-five').addEventListener('click', () => {
     alert('Board Updated Successfully')

     const tasked = taskFuction('task-num')  //taskNumber function
     const navNum = navNumbers('nav-mark')   //nav number add fuc
     const titleAdd = addTitle('cart-title-5', 'history-add')
     //btn disable
     document.getElementById('btn-five').setAttribute('disabled', '');
})
//btn two
document.getElementById('btn-six').addEventListener('click', () => {
     alert('Board Updated Successfully')

     const tasked = taskFuction('task-num')  //taskNumber function
     const navNum = navNumbers('nav-mark')   //nav number add fuc
     const titleAdd = addTitle('cart-title-6', 'history-add')
     //btn disable
     document.getElementById('btn-six').setAttribute('disabled', '');
})