document.addEventListener("DOMContentLoaded", function () {
    function beardedBoo() {
        var body = document.body;
        var image = document.getElementById("image");

        // Remove all previous classes
        body.classList.remove("no", "maybe", "yes");
        image.classList.remove("benefits", "certificate");

        // Ask the question
        var answer = prompt("Will you be my valentine? Yes, No, Maybe?");
        
        // Check if the user pressed "Cancel"
        if (answer === null) {
            alert("Aww, you didn't answer! 😢");
            return;
        }

        answer = answer.toLowerCase().trim(); // Normalize input

        if (answer === "yes" || answer === 'y') {
            body.classList.add("yes");
            image.classList.add("certificate");
        } else if (answer === "maybe" || answer === 'm') {
            body.classList.add("maybe");

            setTimeout(function () {
                alert("Perhaps you are not aware of the many benefits.");
                image.classList.add("benefits");
            }, 200);

            setTimeout(beardedBoo, 6000);
        } else {
            body.classList.add("no");

            setTimeout(function () {
                alert("Say it isn't so! Please try again.");
                beardedBoo();
            }, 200);
        }
    }

    // Run the function after 300ms
    setTimeout(beardedBoo, 300);
});
