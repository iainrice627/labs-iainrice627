
// let promiseToCleanTheRoom = new Promise(function(resolve, reject){

//     let isClean = true;

//     if (isClean){
//         resolve('Clean');
//     } else {
//         reject('not Clean');

//     }



// });


// promise can be resolved or rejected.

// created promsie and created outcomes in that promise. 


// promiseToCleanTheRoom.then(function(result){
//     console.log('the room is '+ result)
// }).catch(function(result){
//     console.log('the room is' + result);
// })

// we then run the promise now. we put the result of either way tin the console. 


//------------------------------------------------------------------------------------

// we can nest promoses otghether. primises need to happen in set order. 


// let cleanRoom = function(){
//     return new Promise(function(resolve,reject) {
//         resolve('I cleaned the room');
//     });
// }

// let removeRubbish = function(){
// return new Promise(function(resolve,reject){
//     resolve(message + "' + " + 'I threw out the rubbish')

// });

// }

// let winIcecream = function(){
//     return new Promise(function(resolve,reject){
//         resolve(message + "' + " + 'so I got some icecream')
    
//     });
    
//}    

// if we use word then move onto next thing if the previous have been complete. 


// cleanRoom().then(function(result){
//     return removeRubbish(result);}).then(function(result){
//         return winIcecream(result);}).then(function(result){
//             console.log(result + " " " so now i can sleep");
//         });

// you may want to do one call to get information and then do another call once have the information.

// asychronompous communcication can be hard.  need the nesting 

//cant know something sometimes unless you knwo something, so then will help ensure you have what need to move on. 
//we can then get on with other takss whiel waiting, thanks to priomises and then.

//------------------

// JSON

////-------------



//fetch


//fetch(url).then(function() {}).catch(function() {});


// fetch (the location i want information from)

// .then (here is what i want to happen when i get that information)

// .catch (if i dont get it back do what is in here and catch function)


//example


//create a webpage that takes information forom api using random user generatotr api.

/// inside of browers download a json viewer, eg suse windows store and donwload.// it will show code you will find easie to look at.

//we want to take this clientInformation, parse it and then style it.


//first set whaer this is going to be put.

//const ul = //we set a unordered list. 
// const url = 'https://randomuser.me/api/?results=10':  we then set the url, to get 10 random users.

const ul = document.getElementById('authors');  // 

const url = 'https://randomuser.me/api/?results=10';

// now start nesting the orders

fetch (url)  // go get the url we have set earlier.
    .then((resp) => resp.json())  //tyake the response and turn into JSON. 
    .then(function(data){      // this then lets us do stuff - ie create and append the lists to the unordered list.


    })

    // it will only send information by text so we need to convert it into JSON.


    //write the code for the function(data)

// will create helper fucntions to help us. - to create elements and append information to elements


// afunction to 'create node.' to cretae an element eg list item .

function createNode(element) {                    // this function called createNode.
    return document.createElement(element);

}

// a function to appened - this the item i wantt to append, this the element i wante dto appened it to,

function append(parent, el) {        // this is being used to append the bits form JSON into the website called 'append.'
    return parent.appendChild(el);

}

// in order to take the json information and use it in webpage

//w e want to know whot he authors are - in json there is a bit called authors.

then(function(data) {
    let authors = data.results;  //data.reuslts is whoel data file
    return authors.map(function(author) { // we need way to work through all the results and put aithors into our list. map through the results
        let li = createNode('li'),  // this is assigning object call ed li and the value is created by the function called createNode, which will create a new list item ie the function above does this; it cretate the dot!
            img = createNode('img'), //same for image - it creates the box for the image to go into.
            span = createNode('span'); //and span (whats this?) - it creates the element box that text will go into
        img.src = author.picture.medium;  // we add the source fo the image.  inside JSON we have access to images and use this ocde to acces part of the json.
        span.innerHTML = ${author.name.first} ${author.name.last} ;  // this is getting the name: and he first aspect 
        append(li,img);  // this is using the fucntion called append. its calling in the variable li - which we made with create node, and calling in img element whcih we also created earlier. li is now parent and img is el.  parent is access append.child(el), which is img.
        append(li,span);
        append(ul,li);

})  // these brackets a re closing the brackets for the fucntion called author, which being used by authors.map command.

}// this curly brackets is closing the code within the fucntino data    
)  // htis last bracket is closing the orginal function (data)


.catch(function(error) {console.log(error);});  // what doe this do>? create error message on log? if .catch used.

// end 

//------------------------------------------------------------------------------------------------------


// how use fetch to get styleing 

// using users api random person gnerator and using bootstrap with it.

// using a card in bootsttrap so decide presentation
// card
// name = title
// card text - email address 






