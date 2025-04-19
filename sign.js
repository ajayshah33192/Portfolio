 document.addEventListener('DOMContentLoaded', function () {
        const form = document.querySelector('form');
        const emailInput = form.querySelector('input[type="email"]');
        const passwordInput = form.querySelectorAll('input[type="password"]')[0];
        const confirmPasswordInput = form.querySelectorAll('input[type="password"]')[1];

        form.addEventListener('submit', function (e) {
            e.preventDefault(); // Prevent actual form submission

            const email = emailInput.value.trim();
            const password = passwordInput.value;
            const confirmPassword = confirmPasswordInput.value;

            if (!email || !password || !confirmPassword) {
                alert('Please fill in all fields.');
                return;
            }

            if (password !== confirmPassword) {
                alert('Passwords do not match.');
                return;
            }

            // You can replace this with actual login logic
            console.log('Email:', email);
            console.log('Password:', password);
            alert('Form submitted successfully!');
        });

        // Optional: Reset feedback on reset button click
        const resetBtn = form.querySelector('input[type="reset"]');
        resetBtn.addEventListener('click', function () {
            console.clear();
        });
    });
