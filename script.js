// Function to check if the middle of an element is in the viewport
function isMiddleInViewport(element) {
    var rect = element.getBoundingClientRect();
    var viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    return rect.top < viewportHeight / 2 && rect.bottom > viewportHeight / 2;
  }
  
  // Function to handle scroll event
  function handleScroll() {
    var aboutMeSection = document.querySelector('.aboutMe');
    if (isMiddleInViewport(aboutMeSection)) {
      aboutMeSection.classList.remove('hidden');
    } else {
      aboutMeSection.classList.add('hidden');
    }
  }
  
  // Add scroll event listener
  window.addEventListener('scroll', handleScroll);
  