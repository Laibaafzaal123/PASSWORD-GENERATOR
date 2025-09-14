// Function to generate a random password
function generate() {
    let length = parseInt(document.getElementById("length").value) || 12;
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    let pass = "";
    for (let i = 0; i < length; i++) {
      let randomIndex = Math.floor(Math.random() * chars.length);
      pass += chars.charAt(randomIndex);
    }
    document.getElementById("password").value = pass;
  }
  
  // Function to copy the password
  function copyPass() {
    let pass = document.getElementById("password").value;
  
    if (!pass) {
      alert("⚠️ Please generate a password first!");
      return;
    }
    navigator.clipboard.writeText(pass)
      .then(() => {
        alert("✅ Password copied: " + pass);
      })
      .catch(err => {
        alert("❌ Failed to copy password: " + err);
      });
  }