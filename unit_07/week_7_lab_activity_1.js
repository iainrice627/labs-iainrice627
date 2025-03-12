



//mouseover is am event type
// onmouseover  this is an attribute or the evemt. it fires when mopuse goes over.  all the stuff below makes this happen


//----------------------------------------------------------------

// document.getElementById('id1') - "finds" an HTML element (with id1"),

// .style.backgroundColor = 'orange';  - 'changes the element content - it represents the inner Html of the element. so if you go style you are changuing the style of the element within the inner html.(although inner.html is its own thing. so need to type inner.html to change inner html.) The innerHTML property sets or returns the HTML content (inner HTML) of an element.

// the above is what you want to happen to element. i want element with id tage id1 to have background chnage colour.

//we need a function to do this. 


//--------------------------------------------------------------------


//  function changecolour()   - this is like defining a function in python. you write function and then its name with brackets. under this include the code. ie the above


//---------------------------------


//function changecolour()
 // {document.getElementById('id1').style.backgroundColor = 'orange';}


//-----------------------------------------


// we now have a function called changecolour and it will get an element with id1 and chnage background to orange.


//----------------------------------------------------------------------

//The addEventListener() method attaches an event handler to a document.  in the list of DOM event handles, mouseover is the correct term. so need to use this.

// event: event can be any valid JavaScript event. Events are used without “on” prefixes like using “click” instead of “onclick” or “mousedown” instead of “onmousedown”. 
// listener(handler function): It can be a JavaScript function that responds to the event occurring.
//useCapture: It is an optional parameter used to control event propagation. A boolean value is passed where “true” denotes the capturing phase and “false” denotes the bubbling phase.




//------------------------------------------------------------------------


//element.addEventListener(event, function, useCapture)

// the first part in the thing we are doing. attaching an event handler to document. but we write element so its specific to an element. in brakets we need the event, which is 'mouseover'.


// wihtin the function need the get elementby id with the lable for the id which is above. but you need document.

//document.addEventListener("mouseover", onmouseover);     // this is causing the div 1 box to change to orange when the mouse touches any part of the webpage.

//function onmouseover() {
  //document.getElementById('id1').style.backgroundColor = 'orange';   // this part remains as document. if chnaged to element nothing happens.  if both documents words changes to element nothing happens. 


//}

// the above woeks for whole page but cant get it to work just for element.
//-------------------------------------------------------------------------------------------------------------


//document.getElementById('id1').addEventListener("mouseover", onmouseover); {style.backgroundColor = 'orange';};



//document.addEventListener("mouseout", outmouseover);

//function outmouseover(){
 // document.getElementById("id1").style.backgroundColor = '';

 //}

 // using the mouseout word in the "" add event listner lets this code work. using the wrong one does not. 

 // still only impacting whole page but is directly chnaging the element. but how to make the mouseover event only impact the element and not whole page.
// it affect the thing with the correct tag.

//----------------------------


document.addEventListener("mouseover", onmouseover);     // this is causing the div 1 box to change to orange when the mouse touches any part of the webpage.

function onmouseover() {
  document.getElementById('id1').style.backgroundColor = 'orange';   // this part remains as document. if chnaged to element nothing happens.  if both documents words changes to element nothing happens. 
  document.getElementByClassName('grid-container2').style.backgroundColor = 'orange'; 

}


document.addEventListener("mouseout", outmouseover);

function outmouseover(){
  document.getElementById("id1").style.backgroundColor = 'blue';
  document.getElementByClassName('grid-container2').style.backgroundColor = 'blue';


}


//----------------------


//YOU DO NOT KNOW HOW TO MAKE THIS APPLY TO EACH BOX ON THEIR OWN. YOU DO KNOW HOW TO MAKE A CHANGE TO A SPECIFIC BOX WHEN THE MOUSE MOVES INTO WHILE AND OUT OF WHOLE PAGE



// are you trying to do this in a nested html?


