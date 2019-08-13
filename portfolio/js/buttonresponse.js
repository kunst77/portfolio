
//an attempt to create one event listener and function because perf matters
//*note, the nodeName property returns a string in all caps, therefore 'button'
//must be checked as 'BUTTON'
//a performance.now() test proved this to be the fastest method



document.querySelector('.projects-boxes').addEventListener('click', function(evt){
  if(evt.target.nodeName === 'BUTTON'){
    alert(evt.target.textContent + ' is not completed yet.  Please come back soon.')
  }
})



//these commented out event listeners require individual id's for each button

// document.getElementById("button1").addEventListener("click", function(){
//   alert("Project 1 is not yet completed.  Please come back soon.")
// });
//
// document.getElementById("button2").addEventListener("click", function(){
//   alert("Project 2 is not yet completed.  Please come back soon.")
// });
//
// document.getElementById("button3").addEventListener("click", function(){
//   alert("Project 3 is not yet completed.  Please come back soon.")
// });


// // create a variable to store any buttons that might need responses
// const startingTime = performance.now();
// let buttons = document.getElementsByClassName('button');
//
// //function that responds to user's button click
// function respondToTheClick(event){
//   alert(event.target.textContent + ' is not completed yet.  Please come back soon.');
// }
//
// //create an event listener for each button click
// for (let i = 0; i < buttons.length; i++){
//   buttons[i].addEventListener('click', respondToTheClick, false);
// }
// const endingTime = performance.now();
//
// alert('This code took ' + (endingTime-startingTime) + ' milliseconds to complete.')
