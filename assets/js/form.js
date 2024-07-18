// Grab modal buttons by class and id
const submitButton = document.getElementById('submit-form');
const modal = document.getElementById('modal-element');
const closeModal = document.querySelector('.modal .delete');
const cancelModal = document.querySelector('#cancel-button');
const openModal = document.getElementById('modal-button');

// Functions to open and close modal
openModal.addEventListener('click', function(){
    modal.classList.add('is-active')
    console.log('open modal click')
})

closeModal.addEventListener('click', function(){
    modal.classList.remove('is-active')
    console.log('close modal click')
})

cancelModal.addEventListener('click', function () {
    modal.classList.remove('is-active')
    console.log('close modal click')
})

submitButton.addEventListener('click', function(event) {
    event.preventDefault ()
    console.log('submit Button Clicked')
 // grab form values
 const destination = document.getElementById('destination-answer').value
 const activities = document.getElementById('activities-answer').value
 const thoughts = document.getElementById('thoughts-answer').value
 const reason = document.getElementById('reason-answer').value
 const visit = document.getElementById('visit-answer').value

 // creating new div to hold form info
 const newDiv = document.createElement('div')
 newDiv.classList.add('box')
 newDiv.innerHTML = `
    <p> Destination: ${destination} </p>
    <p> Activities: ${activities} </p>
    <p> Thoughts: ${thoughts} </p>
    <p> Reason: ${reason} </p>
    <p> Visit: ${visit} </p>
 `;

document.getElementById('modal-output').appendChild(newDiv)
console.log('new Entry Added')

modal.classList.remove('is-active')
console.log('modal closed after submit')
})
