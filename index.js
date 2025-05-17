document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
<<<<<<< HEAD
  
=======
       
>>>>>>> ca7edf0fffc8f9eeede267cd36aa2041fdd3fe7b
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const formMessage = document.getElementById("formMessage");
  
    if (!name || !email || !message) {
      formMessage.style.color = "red";
      formMessage.textContent = "Please fill out all fields.";
      return;
    }
  
    formMessage.style.color = "green";
    formMessage.textContent = "Message sent successfully!";
    this.reset();
  });
<<<<<<< HEAD
  
=======
  
>>>>>>> ca7edf0fffc8f9eeede267cd36aa2041fdd3fe7b
