const hamburger = document.getElementById('humburger');
const closeBtn = document.getElementById('close');
const navbar = document.querySelector('#menu-Elements');
const menuItems = document.querySelectorAll('.menu-item');
const appearModel = document.getElementById('modal');
const deskModal = document.querySelector(".desk-modal");
const deskOverlay = document.querySelector("#Deskoverlay");

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

closeBtn.addEventListener('click', close);
menuItems.forEach((menuItem) => { menuItem.addEventListener('click', close); });

let projectsContainer = document.querySelector('.card-holder');

function generatProject ({ name, image, technologies },index) {
  return `
  <div class="card-holder-item">
    <div class="holder-image"></div>
      <div class="holder-title">
          <h3>${name}</h3>
      </div>
      
      <div class="holder-discription">
        <ul class="tag">
          ${
            technologies.map(technology =>{
              return `<li class="tag-item">${technology}</li>`
            }).join('')
          }
        </ul>
      </div>
      <button class="btn" id="modal-btn-${index}" >See Project</button>
  </div>
</div>
  `
}

const projects = [
    {
        name: 'Project One',
        description: 'Test',
        image: './images/bg.jpg',
        technologies: ["Ruby on rails", "css", "JavaScript"],
        liveVersion: 'https://mr-abdellah.github.io/my-portfolio/',
        source: 'https://google.com',
    },
    {   name: 'Project Two',
        description: 'Test',
        image: './images/bg.jpg',
        technologies: ["Ruby on rails", "css", "JavaScript"],
        liveVersion: 'https://mr-abdellah.github.io/my-portfolio/',
        source: 'https://google.com',
    },
    {   
        name: 'Project Three',
        description: 'Test',
        image: './images/bg.jpg',
        technologies: ["Ruby on rails", "css", "JavaScript"],
        liveVersion: 'https://mr-abdellah.github.io/my-portfolio/',
        source: 'https://google.com',
    },
    {
        name: 'Project four',
        description: 'Test',
        image: './images/bg.jpg',
        technologies: ["Ruby on rails", "css", "JavaScript"],
        liveVersion: 'https://mr-abdellah.github.io/my-portfolio/',
        source: 'https://google.com',
    },
    {
        name: 'Project Five',
        description: 'Test',
        image: './images/bg.jpg',
        technologies: ["Ruby on rails", "css", "JavaScript"],
        liveVersion: 'https://mr-abdellah.github.io/my-portfolio/',
        source: 'https://google.com',
    },
    {
        name: 'Project Six',
        description: 'Test',
        image: './images/bg.jpg',
        technologies: ["Ruby on rails", "css", "JavaScript"],
        liveVersion: 'https://mr-abdellah.github.io/my-portfolio/',
        source: 'https://google.com',
    }
]

let htmlProjects = projects.map((project,index) => generatProject(project,index)).join('');

projectsContainer.innerHTML = htmlProjects;

projects.forEach((project,index) => {
  document.getElementById(`modal-btn-${index}`).addEventListener('click', () => 
  {
      appearModel.style.display = "flex";
      deskModal.classList.add('active')
      deskOverlay.classList.add('active')
  })    
});