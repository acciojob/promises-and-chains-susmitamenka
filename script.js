//your JS code here. If required.
document.getElementById("voteForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    const name = document.getElementById("name").value.trim();
    const age = document.getElementById("age").value.trim();

    // Validation: Check if both fields are filled
    if (!name || !age) {
        alert("Please enter valid details.");
        return;
    }

    // Convert age to a number
    const ageValue = parseInt(age, 10);

    // Create a promise that resolves or rejects based on age
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (ageValue > 18) {
                resolve(Welcome, ${name}. You can vote.);
            } else {
                reject(Oh sorry ${name}. You aren't old enough.);
            }
        }, 4000); // 4-second delay
    })
    .then((message) => alert(message))
    .catch((error) => alert(error));
});

