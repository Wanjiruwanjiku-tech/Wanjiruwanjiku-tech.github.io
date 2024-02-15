document.addEventListener("DOMContentLoaded", function() {
    const targetElement = document.getElementById("targetElement");
  
    // Add a click event listener to trigger the animation
    targetElement.addEventListener("click", function() {
      // Toggle the opacity to create a fading effect
      if (targetElement.style.opacity === "1") {
        targetElement.style.opacity = "0";
      } else {
        targetElement.style.opacity = "1";
      }
    });
  });