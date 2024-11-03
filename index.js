// console.log('hello dom');


// select the element 
let main = document.getElementById('main');

// create element
let heading = document.createElement('h1');
heading.innerText = 'Welcome to Dom Related Practices Project 2';

// create div
let div = document.createElement('div');
div.setAttribute('class' , 'div');

// create paragraph
let p = document.createElement('p');
p.setAttribute('class' , 'p');

// create input
let input = document.createElement('input');
input.setAttribute('id', 'input');
let inputField = document.getElementById('input');



// create button
let button = document.createElement('button');
button.setAttribute('id', 'btn');
button.addEventListener('click', addToText);
button.innerText = 'Add Text';

// document.getElementById('btn').addEventListener('click', function(){

//     console.log(button);
// });


// add text function
function addToText() {
    // Get input value
    let inputValue = document.getElementById('input').value;

    // Check if input is not empty
    if (inputValue.trim() !== "") {

        // Show alert after text is added
        alert("Text has been added successfully!");

        // Create a new <p> element
        let newP = document.createElement('p');
        newP.setAttribute('class', 'p');
        newP.innerHTML = inputValue;

        // Append the new <p> element to the div
        div.appendChild(newP);
        

        // Clear the input box after adding the text
        document.getElementById('input').value = "";

        
        
    }
    
    
}



// append all the children 
main.appendChild(heading);
main.appendChild(input);
main.appendChild(button);
main.appendChild(div);



// div.appendChild(p)
