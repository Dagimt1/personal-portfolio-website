
  window.addEventListener('DOMContentLoaded', (event) => {
    const element = document.getElementById('typed-text');
    const text = 'Hey there!';
    let i = 0;
    function typeWriter() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 150); 
      }
    }
    typeWriter();
  });


function scrollToTop() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}