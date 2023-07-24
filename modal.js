let modal;
let closeButton;

// Fetch the modal content once when the page loads
fetch('modal.html')
  .then(response => response.text())
  .then(data => {
    // Create a div, set its innerHTML to the fetched data, and append it to the body
    const div = document.createElement('div');
    div.innerHTML = data;
    document.body.appendChild(div);

    // Get a reference to the modal and the close button
    modal = document.querySelector('#modal');
    closeButton = document.querySelector('.close-button');

    // Add an event listener to the close button
    closeButton.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  });

// Add an event listener to all buttons that should open the modal
document.querySelectorAll('.cta-btn').forEach(button => {
  button.addEventListener('click', () => {
    modal.style.display = 'block';
  });
});
