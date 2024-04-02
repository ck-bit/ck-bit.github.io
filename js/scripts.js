/*!
* Start Bootstrap - The Big Picture v5.0.6 (https://startbootstrap.com/template/the-big-picture)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-the-big-picture/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

document.getElementById("AboutMeButton").onclick = function() {
  document.getElementById("about-me").scrollIntoView({
    behavior: "smooth"
  });
};

document.getElementById("ProjectsButton").onclick = function() {
    document.getElementById("projects").scrollIntoView({
        behavior: "smooth"
    });
}


document.getElementById("ContactButton").onclick = function() {
  document.getElementById("contact").scrollIntoView({
      behavior: "smooth"
  });
}
document.getElementById('copyButton').addEventListener('click', function() {
  // Copying logic here (you can replace this with your own logic)
  const textToCopy = "ckbit@proton.me";
  navigator.clipboard.writeText(textToCopy)
      .then(() => {
          // Show success message
          document.getElementById('successMessage').style.display = 'block';
          // Hide success message after 2 seconds
          setTimeout(function() {
              document.getElementById('successMessage').style.display = 'none';
          }, 2000);
      })
      .catch(err => {
          console.error('Failed to copy: ', err);
      });
});