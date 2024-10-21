// Expand/Collapse functionality for expandable sections
document.querySelectorAll('.toggle-button').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.previousElementSibling;
        content.classList.toggle('expanded');

        if (content.classList.contains('expanded')) {
            content.style.display = 'block'; // Show full content
            button.textContent = 'Read Less'; // Change button text
        } else {
            content.style.display = '-webkit-box'; // Show only 4 lines
            button.textContent = 'Read More'; // Change button text back
        }
    });
});

// Modal functionality (if you want to implement it in the future)
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeModal = document.getElementsByClassName("close")[0];

// Function to open modal (if needed)
function openModal(imgSrc) {
    modal.style.display = "block";
    modalImg.src = imgSrc; // Set image source
}

// Close modal when clicking on the close button or outside the modal
closeModal.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
