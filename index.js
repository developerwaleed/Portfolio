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
      console.log('yes');
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
      <button class="btn" id="modal-btn-${index}" onclick="handleSeeProject(this)">See Project</button>
  </div>
</div>
  `;
}

// Object to Pass For generating Projects in DOM
const projects = [
  {
    name: 'SpaceX Travellers Hub',
    description:
      'SpaceX Travellers Hub is a web application that fetches a package from an api, a missions and Rockets. a traveller can reserve a rocket and join a mission, incase of unsatisfactory you can cancel the rocket and re-reserve. joined mission status is showed as well as the rocket status. all reserved rockets and joined missions are displayed on the profile.',
    image: './assets/Projects/mock1.png',
    technologies: ['TailwindCSS', 'React', 'Redux'],
    liveVersion: 'https://spacex-travellers-hub.herokuapp.com/',
    source: 'https://github.com/developerwaleed/SpaceX-Traveller-Hub',
  },
  {
    name: 'To-do List',
    description:
      'To-do List is a web application that allows its users to organize their day. The users can mark their tasks as done and can also filter the task according to the criteria they want. It comes with integrated LIGHT/DARK Mode',
    image: './assets/Projects/mock2.png',
    technologies: ['Html', 'CSS', 'JavaScript'],
    liveVersion: 'https://developerwaleed.github.io/Interactive-TODOLIST/',
    source: 'https://github.com/developerwaleed/Interactive-TODOLIST',
  },
  {
    name: 'Bookstore',
    description:
      'This is a simple website representing a store that sells book. It is purely developed in HTML and CSS.',
    image: './assets/Projects/mock3.png',
    technologies: ['Html', 'CSS', 'JavaScript'],
    liveVersion: 'https://developerwaleed.github.io/Book-Store_Website-V2/',
    source: 'https://github.com/developerwaleed/Book-Store_Website-V2',
  },
];

function closeModalMobile() {
  appearMobileModel.style.display = 'none';
  MobileModal.classList.remove('active');
  MobOverlay.classList.remove('active');
}

function closeModalDesktop() {
  appearDeskModel.style.display = 'none';
  deskModal.classList.remove('active');
  Deskoverlay.classList.remove('active');
}

function handleSeeProject(e) {
  const name = e.parentElement.children[1].children[0].innerText;
  projects.forEach((elem) => {
    if (elem.name === name) {
      if (mediaQuery.matches) {
        const modal = `
            <div class="deskmodal-header">
                <button type="button" class="deskclosebtn" id="closebtnDSK" onclick="closeModalDesktop()">
                   &times;
                </button>
              <div class="imageDetails">
                <img
                  src=${elem.image}
                  alt="DeskModalImage"
                  width="450"
                />
              </div>
            </div>

              <div class="Desk-modal-title">
                <h3>${elem.name}</h3>
                <div class="Desk-modal-btn-div">
                <a href="${elem.liveVersion}" target="_blank">
                  <button type="button" class="Deskmodal-btn"">
                    <span>See Live</span>
                    <img src="./assets/icons/model-btn-icon1.svg" alt="social icon" />
                  </button> 
                  </a>
                  <a href="${elem.source}" target="_blank">
                  <button type="button" class="Deskmodal-btn"">
                    <span>See Source</span>
                    <img src="./assets/icons/model-btn-icon2.svg" alt="social icon2" />
                  </button>
                  </a>
                </div>
              </div>
              <div class="Desk-modal-body">
                <ul class="tag">
                ${elem.technologies
                  .map(
                    (technology) => `<li class="tag-item">${technology}</li>`
                  )
                  .join('')}
                </ul>
                <div class="Desk-modal-discription">
                  <p>
                      ${elem.description}
                  </p>
                </div>
              </div>
                      `;
        deskModal.innerHTML = modal;
      }
    else {
      const modal = `<div class="modal-header">
      <img src=${elem.image} alt="image" width = "250"/>
      <button type="button" class="closebtn" id="close-mobile-btn" onclick="closeModalMobile()">
        &times;
      </button>
    </div>

    <div class="modal-title">
      <h3>${elem.name}</h3>
    </div>
    <div class="modal-body">
      <ul class="tag">
      ${elem.technologies
        .map((technology) => `<li class="tag-item">${technology}</li>`)
        .join('')}
      </ul>
      <div class="modal-discription">
        <p>
        ${elem.description}
        </p>
      </div>
    </div>
    <div class="modal-btn-div">
      <button type="button" class="modal-btn">
        <span>See Live</span>
        <img src="./assets/icons/model-btn-icon1.svg" alt="social icon" />
      </button>
      <button type="button" class="modal-btn">
        <span>See Source</span>
        <img src="./assets/icons/model-btn-icon2.svg" alt="social icon2" />
      </button>
    </div>`;
      appearMobileModel.innerHTML = modal;
    }
  }
  });
}

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
        body.style.overflow = 'hidden';
      } else {
        appearMobileModel.style.display = 'flex';
        MobileModal.classList.add('active');
        MobOverlay.classList.add('active');
      }
    });
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
