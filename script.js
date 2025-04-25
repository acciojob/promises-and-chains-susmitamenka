//your JS code here. If required.
document.getElementById('votingForm').addEventListener('submit', function (e) {
      e.preventDefault(); // prevent default form submission

      const name = document.getElementById('name').value.trim();
      const age = document.getElementById('age').value.trim();

      // 🛑 Validation: Ensure fields aren't empty
      if (!name || !age) {
        alert("Please enter valid details.");
        return;
      }

      // ✅ Promise for age check
      const checkEligibility = new Promise((resolve, reject) => {
        setTimeout(() => {
          if (parseInt(age) > 18) {
            resolve();
          } else {
            reject();
          }
        }, 4000); // ⏳ 4-second delay
      });

      // 📣 Handling Promise outcome
      checkEligibility
        .then(() => {
          alert(`Welcome, ${name}. You can vote.`);
        })
        .catch(() => {
          alert(`Oh sorry ${name}. You aren't old enough.`);
        });
    });
