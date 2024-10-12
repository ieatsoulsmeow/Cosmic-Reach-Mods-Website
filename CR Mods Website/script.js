// Select all dropdown buttons
const dropdownButtons = document.querySelectorAll('.dropdown-button');

dropdownButtons.forEach(button => {
    button.addEventListener('click', function() {
        const dropdownContent = this.nextElementSibling;
        const parent = this.parentElement;

        // Toggle active class
        parent.classList.toggle('active');

        // If active, expand the dropdown; otherwise, collapse it
        if (parent.classList.contains('active')) {
            dropdownContent.style.maxHeight = 200 + "px";
            dropdownContent.style.padding = "10px";
        } else {
            dropdownContent.style.maxHeight = 0;
            dropdownContent.style.padding = "0";
        }
    });
});