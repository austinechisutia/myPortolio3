

function randomizeHobbies() {
            let container = document.getElementById('hobbies-container');
            let hobbies = Array.from(container.children);
            let containerWidth = container.clientWidth;
            let containerHeight = container.clientHeight;

            hobbies.forEach(hobby => {
                let randomX = Math.random() * (containerWidth - 100); // Avoid overflow
                let randomY = Math.random() * (containerHeight - 30);
                let randomRotation = Math.random() * 60 - 30; // -30 to 30 degrees
                let randomScale = 0.9 + Math.random() * 0.3; // 0.9 to 1.2 scale

                hobby.style.left = `${randomX}px`;
                hobby.style.top = `${randomY}px`;
                hobby.style.transform = `rotate(${randomRotation}deg) scale(${randomScale})`;
            });
        }

        // Run on page load
        randomizeHobbies();


        document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const sectionId = this.getAttribute('href');
                const section = document.querySelector(sectionId);
                const offset = 60; // Adjust based on navbar height
                const sectionPosition = section.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({
                    top: sectionPosition,
                    behavior: 'smooth'
                });
            });
        });

        

        const projects = [
            {
              title: "KLINIC . 2025",
              subtitle: "A Modern Web Application for Patients",
              achievements: [
                "Enhanced user experience by 40%",
                "Improved site speed by 50%",
                "Increased mobile traffic by 35%"
              ],
              image: "images/web1.png",
              link: "https://austinechisutia.github.io/Klinic/"
            },
            {
              title: "Amazon Revamp . 2025",
              subtitle: "Modern UI/UX redesign for seamless shopping experience.",
              achievements: [
                "Boosted sales by 40%",
                "Expanded customer reach by 35%",
                "Increased brand awareness by 15%"
              ],
              image: "images/web/amazon.png",
              link: "https://austinechisutia.github.io/shopping-web/"
            },
            {
              title: "Restaurant App . 2025",
              subtitle: "Elegant UI for effortless reservations and menu browsing.",
              achievements: [
                "Enhanced user experience by 40%",
                "Improved site speed by 50%",
                "Increased mobile traffic by 35%"
              ],
              image: "images/web/butger.png",
              link: "https://austinechisutia.github.io/Burger/"
            },
            {
              title: "Movies . 2025",
              subtitle: "Your Ultimate Guide to Movies and Webseries",
              achievements: [
                "Enhanced user experience by 40%",
                "Improved site speed by 50%",
                "Increased mobile traffic by 35%"
              ],
              image: "images/web/screenshot4.png",
              link: "https://austinechisutia.github.io/MovieApp/"
            }
          ];

const container = document.getElementById("projects");


 projects.forEach(project => {
            const projectHTML = `
              <div class="klinic">
                <div class="klinic-top">
                    <h5 class="results klinic-title">${project.title}</h5>
                    <p class="klinic-title">${project.subtitle}</p>
                    <div class="line"></div>
                    <div class="klinic-functions profile-description">
                        <div class="klinic-function1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 24" style="fill: #6c757d;transform: ;msFilter:;"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="M9.999 13.587 7.7 11.292l-1.412 1.416 3.713 3.705 6.706-6.706-1.414-1.414z"></path></svg>${project.achievements[0]}</div>
                        <div class="klinic-function1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 24" style="fill: #6c757d;transform: ;msFilter:;"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="M9.999 13.587 7.7 11.292l-1.412 1.416 3.713 3.705 6.706-6.706-1.414-1.414z"></path></svg>${project.achievements[1]}</div>
                        <div class="klinic-function1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 24" style="fill: #6c757d;transform: ;msFilter:;"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="M9.999 13.587 7.7 11.292l-1.412 1.416 3.713 3.705 6.706-6.706-1.414-1.414z"></path></svg>${project.achievements[2]}</div>
                    </div>
                    <div class="connect">
                    <a href="${project.link}" class="btn btn-primary" target="_blank" rel="noopener noreferrer">
                            Visit Site <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: #6c757d;transform: ;msFilter:;"><path d="M11 8.414V18h2V8.414l4.293 4.293 1.414-1.414L12 4.586l-6.707 6.707 1.414 1.414z"></path></svg>
                        </a>
                    </div>
                    
                </div>
                <div class="web-profile">
                    <a href="${project.link}" target="_blank" rel="noopener noreferrer">
                        <img src=${project.image} alt="">
                    </a>
                </div>
            </div>
            `;
            container.innerHTML += projectHTML;
});


const qualities = [
    "ACCESSIBLE", "INTERACTIVE", "RESPONSIVE", "SCALABLE",
    "USABLE", "SECURE", "SEARCH OPTIMIZED", "USER FRIENDLY",
    "ACCESSIBLE", "INTERACTIVE", "RESPONSIVE", "SCALABLE"
  ];

  const scrollingTextHTML = qualities.map(text => `
    <h5>${text}</h5><div class="star"></div>
  `).join("");

    document.querySelector(".qualities").innerHTML = scrollingTextHTML;



    const testimonials = [
        {
          name: "Lavigne Lucy",
          role: "CEO @ InnovateCo",
          image: "images/profile/profile2.jpg",
          feedback: "Austine was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!"
        },
        {
          name: "Farleen Burudi",
          role: "Head of Design @TechStartups",
          image: "images/profile/profile3.jpg",
          feedback: "Austine is a true frontend wizard. He took our complex product and transformed it into an intuitive and engaging user interface. We're already seeing positive feedback from our customers."
        },
        {
          name: "Theo Macharia",
          role: "Director of IT @ MegaCorp",
          image: "images/profile/profile4.jpg",
          feedback: "Working with Austine was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations."
        },
        {
          name: "Sunday Priest",
          role: "FullStack Developer @Global Tech",
          image: "images/profile/profile5.jpg",
          feedback: "Austine's ability to create seamless user experiences is unmatched. Our website has seen a significant increase in conversions since launching the new design. We couldn't be happier."
        },
        {
          name: "Lavigne Lucy",
          role: "CEO @ InnovateCo",
          image: "images/profile/profile2.jpg",
          feedback: "Austine was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!"
        },
        {
          name: "Farleen Burudi",
          role: "Head of Design @TechStartups",
          image: "images/profile/profile3.jpg",
          feedback: "Austine is a true frontend wizard. He took our complex product and transformed it into an intuitive and engaging user interface. We're already seeing positive feedback from our customers."
        },
        {
          name: "Theo Macharia",
          role: "Director of IT @ MegaCorp",
          image: "images/profile/profile4.jpg",
          feedback: "Working with Austine was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations."
        },
        {
          name: "Sunday Priest",
          role: "FullStack Developer @Global Tech",
          image: "images/profile/profile5.jpg",
          feedback: "Austine's ability to create seamless user experiences is unmatched. Our website has seen a significant increase in conversions since launching the new design. We couldn't be happier."
        }
      ];
      

      
      const testimonialsHTML = testimonials.map(t => `
        <div class="klinic klinic-fourth">
          <div class="profile-top">
            <div class="profile-picture">
              <img src="${t.image}" alt="${t.name}">
            </div>
            <div class="profile-description">
              <h5 class="profile-name">${t.name}</h5>
              <p class="profile-description">${t.role}</p>
            </div>
          </div>
          <div class="profile-bottom">
            <p>${t.feedback}</p>
          </div>
        </div>
      `).join("");

      
      document.getElementById("testimonialsWrapper").innerHTML = testimonialsHTML;


      const technologies = [
        {
          name: "HTML",
          icon: `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(8, 166, 247, 1);">
              <path d="M4.136 3.012h15.729l-1.431 16.15-6.451 1.826-6.414-1.826-1.433-16.15zm5.266 7.302-.173-2.035 7.533.002.173-1.963-9.87-.002.522 5.998h6.835l-.243 2.566-2.179.602-2.214-.605-.141-1.58H7.691l.247 3.123L12 17.506l4.028-1.08.558-6.111H9.402v-.001z"></path>
            </svg>`,
          color: "#f16623"
        },
        {
          name: "CSS",
          icon: `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(8, 166, 247, 1);">
              <path d="M4.192 3.143h15.615l-1.42 16.034-6.404 1.812-6.369-1.813L4.192 3.143zM16.9 6.424l-9.8-.002.158 1.949 7.529.002-.189 2.02H9.66l.179 1.913h4.597l-.272 2.62-2.164.598-2.197-.603-.141-1.569h-1.94l.216 2.867L12 17.484l3.995-1.137.905-9.923z"></path>
            </svg>`,
          color: "#1572b6"
        },
        {
          name: "JavaScript",
          icon: `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(8, 166, 247, 1);">
              <path d="M12 21.985c-.275 0-.532-.074-.772-.202l-2.439-1.448c-.365-.203-.182-.277-.072-.314.496-.165.588-.201 1.101-.493.056-.037.129-.02.185.017l1.87 1.12c.074.036.166.036.221 0l7.319-4.237c.074-.036.11-.11.11-.202V7.768c0-.091-.036-.165-.11-.201l-7.319-4.219c-.073-.037-.165-.037-.221 0L4.552 7.566c-.073.036-.11.129-.11.201v8.457c0 .073.037.166.11.202l2 1.157c1.082.548 1.762-.095 1.762-.735V8.502c0-.11.091-.221.22-.221h.936c.108 0 .22.092.22.221v8.347c0 1.449-.788 2.294-2.164 2.294-.422 0-.752 0-1.688-.46l-1.925-1.099a1.55 1.55 0 0 1-.771-1.34V7.786c0-.55.293-1.064.771-1.339l7.316-4.237a1.637 1.637 0 0 1 1.544 0l7.317 4.237c.479.274.771.789.771 1.339v8.458c0 .549-.293 1.063-.771 1.34l-7.317 4.236c-.241.11-.516.165-.773.165zm2.256-5.816c-3.21 0-3.87-1.468-3.87-2.714 0-.11.092-.221.22-.221h.954c.11 0 .201.073.201.184.147.971.568 1.449 2.514 1.449 1.54 0 2.202-.35 2.202-1.175 0-.477-.185-.825-2.587-1.063-1.999-.2-3.246-.643-3.246-2.238 0-1.485 1.247-2.366 3.339-2.366 2.347 0 3.503.809 3.649 2.568a.297.297 0 0 1-.056.165c-.037.036-.091.073-.146.073h-.953a.212.212 0 0 1-.202-.164c-.221-1.012-.789-1.34-2.292-1.34-1.689 0-1.891.587-1.891 1.027 0 .531.237.696 2.514.99 2.256.293 3.32.715 3.32 2.294-.02 1.615-1.339 2.531-3.67 2.531z"></path>
            </svg>`,
          color: "#f7df1e"
        }
      ];

      const containerMove = document.getElementById('icon-container');

// Loop through technologies and create HTML structure for each
technologies.forEach(tech => {
  const iconDiv = document.createElement('div');
  iconDiv.classList.add('anime-icon');
  iconDiv.innerHTML = `
    <div onclick="handleClick('${tech.name}')">
      ${tech.icon}
      <span style="color: ${tech.color};">${tech.name}</span>
    </div>
  `;
  containerMove.appendChild(iconDiv);
});

// Update the text of containerMove with technology names
containerMove.innerText = technologies.map(tech => tech.name).join(" | ");


const bot = document.querySelector(".ifr-js");

  bot.addEventListener("onclick", ()=>{
    bot.style.display = "none";
  })