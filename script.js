

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