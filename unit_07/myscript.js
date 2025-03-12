
function goAgain() {
    document.getElementById('id1').style.color = 'yellow';
}


document.getElementById("orangeButton").addEventListener("click", orangeButton);

// function orangeButton() {
//   document.getElementById('id1').style.color = 'orange';
// }

let headerText = document.getElementByID('id1');

function orangeButton() {
  headerText.style.color = 'orange';
}
// this does not work for orange. either methods. everything copyed correctly//


