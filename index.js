/* eslint-disable linebreak-style */
const hamburger = document.getElementById('humburger');
const closeBtn = document.getElementById('close');
const navbar = document.querySelector('#menu-Elements');
const menuItems = document.querySelectorAll('.menu-item');

// Adding Projects Dynamically
const projectsContainer = document.querySelector('.card-holder');

// Adding Modal JavaScript
const appearMobileModel = document.getElementById('modal'); // Target using ID
const appearDeskModel = document.getElementById('desk-modal'); // Target using ID
const MobileModal = document.querySelector('.modal'); // Target using Class
const deskModal = document.querySelector('.desk-modal'); // Target using ID
const closeModal = document.querySelector('#close-mobile-btn'); // Target using ID
const closeModalDSK = document.querySelector('#closebtnDSK'); // Target using ID
const MobOverlay = document.querySelector('#overlay');
const Deskoverlay = document.querySelector('#Deskoverlay');
const mediaQuery = window.matchMedia('(min-width: 768px)');

// Form Validation
const form = document.getElementById('form');
const email = document.getElementById('email');
const error = document.getElementById('errors');

// Passing Data to LocalStorage
let formObj = {};

function openMenu() {
  navbar.style.display = 'flex';
  hamburger.style.display = 'none';
  closeBtn.style.display = 'flex';
}

hamburger.addEventListener('click', openMenu);

function close() {
  navbar.style.display = 'none';
  hamburger.style.display = 'flex';
  closeBtn.style.display = 'none';
}

// Close the Mobile Menu
closeBtn.addEventListener('click', close);
menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', () => {
    if (!mediaQuery.matches) {
      navbar.style.display = 'none';
      hamburger.style.display = 'flex';
      closeBtn.style.display = 'none';
    }
  });
});

// Generates the Projects in DOM
function generatProject({ name, image, technologies }, index) {
  return `
  <div class="card-holder-item">
    <div class="holder-image projectImg">
    <img
                src=${image}
                alt='Project img'
                height="150"
    />
    </div>
      <div class="holder-title">
          <h3>${name}</h3>
      </div>
      
      <div class="holder-discription">
        <ul class="tag">
          ${technologies
            .map((technology) => `<li class="tag-item">${technology}</li>`)
            .join('')}
        </ul>
      </div>
      <button class="btn" id="modal-btn-${index}" >See Project</button>
  </div>
</div>
  `;
}

// Object to Pass For generating Projects in DOM
const projects = [
  {
    name: 'SpaceX Travellers Hub',
    description: 'Test',
    image: './assets/Projects/mock1.png',
    technologies: ['TailwindCSS', 'React', 'Redux'],
    liveVersion: 'https://spacex-travellers-hub.herokuapp.com/',
    source: 'https://github.com/developerwaleed/SpaceX-Traveller-Hub',
  },
  {
    name: 'To-do List',
    description: 'Test',
    image: './assets/Projects/mock2.png',
    technologies: ['Html','CSS', 'JavaScript'],
    liveVersion: 'https://developerwaleed.github.io/Interactive-TODOLIST/',
    source: 'https://github.com/developerwaleed/Interactive-TODOLIST',
  },
  {
    name: 'Bookstore',
    description: 'Test',
    image: './assets/Projects/mock3.png',
    technologies: ['Html','CSS', 'JavaScript'],
    liveVersion: 'https://developerwaleed.github.io/Book-Store_Website-V2/',
    source: 'https://github.com/developerwaleed/Book-Store_Website-V2',
  },
];

const htmlProjects = projects
  .map((project, index) => generatProject(project, index))
  .join('');

projectsContainer.innerHTML = htmlProjects;

// Iterates to input all the projects
projects.forEach((project, index) => {
  document
    .getElementById(`modal-btn-${index}`)
    .addEventListener('click', () => {
      if (mediaQuery.matches) {
        appearDeskModel.style.display = 'flex';
        deskModal.classList.add('active');
        Deskoverlay.classList.add('active');
      } else {
        appearMobileModel.style.display = 'flex';
        MobileModal.classList.add('active');
        MobOverlay.classList.add('active');
      }
    });
});

closeModal.addEventListener('click', () => {
  appearMobileModel.style.display = 'none';
  MobileModal.classList.remove('active');
  MobOverlay.classList.remove('active');
});

closeModalDSK.addEventListener('click', () => {
  appearDeskModel.style.display = 'none';
  deskModal.classList.remove('active');
  Deskoverlay.classList.remove('active');
});

// Code to Validate Form
form.addEventListener('submit', (event) => {
  let validation = false;
  if (email.value === email.value.toLowerCase()) {
    validation = true;
  }
  if (validation === false) {
    event.preventDefault();
    error.innerText = 'Email must be in Lower Case!';
  }
});

// Populate LocalStrorage
function populateStorage() {
  formObj = {
    Name: form.user.value,
    Email: form.email.value,
    Message: form.message.value,
  };
  const convertObj = JSON.stringify(formObj);
  localStorage.setItem('FormData', convertObj);
}

// Populate FormFields
function getDataFromLocalStorage() {
  let data = null;
  data = localStorage.getItem('FormData');
  data = JSON.parse(data);
  form.user.value = data.Name;
  form.email.value = data.Email;
  form.message.value = data.Message;
}

window.onload = () => {
  form.user.addEventListener('input', populateStorage);
  form.email.addEventListener('input', populateStorage);
  form.message.addEventListener('input', populateStorage);
  if (localStorage.getItem('FormData') !== null) {
    getDataFromLocalStorage();
  }
};
