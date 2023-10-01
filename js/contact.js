function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
  
    const serviceID = "service_ccbef0w";
    const templateID = "template_yhfmybr";
  
    // Show the loading circle
    document.getElementById("loading").style.display = "flex";
  
    if (params.email === "" || params.message === "" || params.name === "") {
      showToast("Some fields are empty");
      // Hide the loading circle
      document.getElementById("loading").style.display = "none";
    } else if (!isValidEmail(params.email)) {
      showToast("Invalid email address");
      // Hide the loading circle
      document.getElementById("loading").style.display = "none";
    } else {
      //emailjs
      //  .send(serviceID, templateID, params)
      //  .then((res) => {
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
        //  console.log(res);
          showToast("Your message sent successfully");
        //})
       // .catch((err) => console.log(err))
        //.finally(() => {
          // Hide the loading circle after sending is complete (whether success or failure)
          document.getElementById("loading").style.display = "none";
       // });
    }
  }
  
  function showToast(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.style.display = "block";
  
    // Automatically hide the toast message after 2 seconds (2000 milliseconds)
    setTimeout(() => {
      toast.style.display = "none";
    }, 2000);
  }
  
  function isValidEmail(email) {
    // Regular expression for basic email validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  }
  