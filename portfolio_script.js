document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});




//Dark Mode 
let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch')

const enableDarkmode = () => {
  document.body.classList.add('darkmode')
  localStorage.setItem('darkmode', 'active')
}

const disableDarkmode = () => {
  document.body.classList.remove('darkmode')
  localStorage.setItem('darkmode', null)
}

if(darkmode === "active") enableDarkmode()

themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem('darkmode')
  darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})

document.getElementById("downloadCv").addEventListener("click", function () {
  // Remplace 'cv.pdf' par le chemin réel de ton fichier CV
  const cvUrl = "./images/CV_Enzo_Bordet.pdf";
  
  const a = document.createElement("a");
  a.href = cvUrl;
  a.download = "./images/CV_Enzo_Bordet.pdf"; // Nom du fichier téléchargé
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
});


// Initialize EmailJS with your Public Key
document.addEventListener("DOMContentLoaded", function() {
  emailjs.init("p5F_pwle3gtRoqG3j"); // Replace with your actual EmailJS Public Key

  // Add event listener to the form
  document.getElementById("contact-form").addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent page refresh

      // Send email using EmailJS
      emailjs.send("service_xssoblt", "template_m1ufs56", {
          from_name: document.getElementById("name").value,
          email: document.getElementById("email").value,
          message: document.getElementById("message").value
      }).then(
          function(response) {
              alert("Email sent successfully!");
              document.getElementById("contact-form").reset(); // Clear the form after submission
          },
          function(error) {
              alert("Failed to send email. Error: " + JSON.stringify(error));
          }
      );
  });
});
