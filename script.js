// JavaScript for handling form submission
document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Fetch form data
        var firstName = document.getElementById('first-name').value;
        var lastName = document.getElementById('last-name').value;
        var email = document.getElementById('email').value;

        // You can perform form validation here if needed
        // For example, check if fields are not empty

        // Example validation (basic check if fields are filled)
        if (firstName === '' || lastName === '' || email === '') {
            alert('Please fill in all fields.');
            return; // Exit function if fields are not filled
        }

        // If validation passes, you can proceed with further actions like AJAX submission
        // Here, we can log the data to console for demonstration
        console.log('First Name:', firstName);
        console.log('Last Name:', lastName);
        console.log('Email:', email);

        // Optionally, clear the form after submission
        form.reset();
    });
});

// JavaScript for handling image modal
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("image-modal");
    const modalImg = document.getElementById("modal-image");
    const closeModal = document.getElementsByClassName("close")[0];

    document.querySelectorAll(".clickable-image").forEach(img => {
        img.onclick = function() {
            modal.style.display = "block";
            modalImg.src = this.src;
        }
    });

    closeModal.onclick = function() {
        modal.style.display = "none";
    }

    modal.onclick = function(event) {
        if (event.target !== modalImg) {
            modal.style.display = "none";
        }
    }
});
