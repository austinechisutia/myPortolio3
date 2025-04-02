

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

        