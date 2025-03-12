


// i want a loop where a function is called 8 times and will affect 8 different html elements with 8 uinique ids


// i previously copy and pasted the set of code and funtion that would impact one element.]
// then inserted the unique id and uniqur background colour.  
    // so this means the code is not the same each time. its needs to be different in terms of the values used.

// let i = 0 - i is gthe counter variable, we start with i = 0.  then the conditional is we want i to count 8 times but no more. the next i==1 is how much we want i to increase by which is 1 each iteration.

    for(let i =0; i<=8; i++){

        //console.log()   // what does this do. if we insert something in brakets this will be acted on 8 times by the loop
                        // this prints on the website browser console acheived by insprecting her browser.

            const idmain = document.getElementById("idmain");idmain.addEventListener("mouseover", onmouseovermain);   

            function onmouseovermain() {
                document.getElementById('idmain').style.backgroundColor = 'orange';   //getElementsByClassName returns a live HTMLCollection of all elements that have the specified class name. This collection is similar to an array, and you need to apply the style to each individual element within this collection.
            }
        
        
             document.getElementById("idmain");idmain.addEventListener("mouseout", outmouseovermain);
        
            function outmouseovermain(){
                document.getElementById('idmain').style.backgroundColor = 'aqua';
                              
                        }         



    }


    // i have just copied in the code that works for one container.  i need to run this and then on the second run the id and background colour chnage.

        // can i add a character to the end of id each time to make it id1 or id2 ir id3.  eg {} and .format (count+1)
        // how do we chnage the back ground colour. it shoudl equal the orginal colour. 
            // when the id2 is referenced it is accessing style sheet? can we just say eqal id2 background colour? rather than aqua?  NO using id1 in the above does not work to chnage styel.