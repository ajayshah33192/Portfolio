$(document).ready(function() {
    // Toggle the visibility of nav links when the hamburger icon is clicked
    $(".hamburger").click(function() {
        // Toggle the 'active' class on the nav-links to show or hide the menu
        $(".nav-links").toggleClass("active");

        // Optionally, change the hamburger icon to "X" or "bars" when clicked
        $(this).toggleClass("toggle");
    });
});
