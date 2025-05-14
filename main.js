const image = document.getElementById('clickableImage');
image.addEventListener('click'),({
});
ssList.add("active");
      const links = document.querySelectorAll('.navbar a');
      const sections = document.querySelectorAll('.content');
  
      links.forEach(link => {
          link.addEventListener('click', (e) => {
              e.preventDefault(); // Prevent default anchor behavior
              
              // Remove 'active' class from all sections
              sections.forEach(section => section.classList.remove('active'));
  
              // Find and activate the clicked section
              const targetSection = document.querySelector(link.getAttribute('href'));
              targetSection.classList.add('active');
          });
      });
      const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let index = 0;

function showSlide() {
  const width = images[0].clientWidth;
  slides.style.transform = `translateX(${-index * width}px)`;
}

next.addEventListener('click', () => {
  index = (index + 1) % images.length;
  showSlide();
});

prev.addEventListener('click', () => {
  index = (index - 1 + images.length) % images.length;
  showSlide();
});
const options = [
  { value: '1', text: 'event shoot' },
  { value: '2', text: 'street shoot' },
  { value: '3', text: 'private shoot' }
];

// Populate the select box dynamically
const selectBox = document.getElementById('dynamicSelect');
options.forEach(option => {
  const newOption = document.createElement('option');
  newOption.value = option.value;
  newOption.textContent = option.text;
  selectBox.appendChild(newOption);
});

// Add an event listener for interactivity
selectBox.addEventListener('change', (event) => {
  alert(`You selected: ${event.target.value}`);

  
  function showSlide(direction) {
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;
  
    index = (index + direction + totalSlides) % totalSlides;
    slides.style.transform = `translateX(-${index * 100}%)`;
  }
  
  document.querySelector('.next').addEventListener('click', () => showSlide(1));
  document.querySelector('.prev').addEventListener('click', () => showSlide(-1));
  
  let nameInput = document.getElementById("name");
  let gmailTextarea = document.getElementById("gmail");
  let feedback = document.getElementById("feedback");

  // Make the input fields interactive
  nameInput.addEventListener("focus", function () {
      nameInput.classList.add("highlight");
  });

  nameInput.addEventListener("blur", function () {
      nameInput.classList.remove("highlight");
  });

  gmailTextarea.addEventListener("input", function () {
      feedback.innerText = `Characters typed: ${gmailTextarea.value.length}`;
      if (gmailTextarea.value.length > 200) {
          gmailTextarea.classList.add("error");
      } else {
          gmailTextarea.classList.remove("error");
      }
  });
  
  fetch('navbar.html')
    .then(response => response.text())
    .thendata .getElementById('navbar').innerHTML = data});
    const galleryImages = document.querySelectorAll('.gallery img');
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modalImg');

    // Add click event to each image
    galleryImages.forEach(image => {
        image.addEventListener('click', () => {
            modal.classList.add('active'); // Show modal
            modalImg.src = image.src;     // Set modal image source
            modalImg.alt = image.alt;     // Set modal image alt text
        });
    });

    // Close modal when clicking outside the image
    modal.addEventListener, () => 
        modal.classList.remove('active');

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !subject || !message) {
        alert("Please fill in all fields.");
        return;
    }

    // Simulate submission
    alert("Message sent successfully!");
    this.reset();
});
let currentIndex = 0;
con

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) slide.classList.add('active');
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}
setInterval(() => {
  index = (index + 1) % totalSlides;
  slides.style.transform = `translateX(-${index * 100}%)`;
}, 3000); // Change slide every 3 seconds
 const slider = document.getElementById('slider');
    const slides = document.querySelectorAll('.slide');
    let index = 0;

    function showSlide(i) {
      index = (i + slides.length) % slides.length;
      slider.style.transform = `translateX(-${index * 100}%)`;
    }

    function nextSlide() {
      showSlide(index + 1);
    }

    function prevSlide() {
      showSlide(index - 1);
    }