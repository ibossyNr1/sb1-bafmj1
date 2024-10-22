document.addEventListener('DOMContentLoaded', function() {
    const mainContent = document.getElementById('mainContent');
    const navLinks = document.querySelectorAll('.nav-link');
    const currentProjectSpan = document.getElementById('currentProject');

    // Function to load page content
    function loadPage(page) {
        fetch(`${page}.html`)
            .then(response => response.text())
            .then(html => {
                mainContent.innerHTML = html;
                initPageFunctionality(page);
                updateActiveNavLink(page);
            })
            .catch(error => {
                console.error('Error loading page:', error);
                mainContent.innerHTML = '<p>Error loading page content.</p>';
            });
    }

    // Add click event listeners to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.getAttribute('href').substring(1);
            loadPage(page);
        });
    });

    // Update active nav link
    function updateActiveNavLink(page) {
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${page}`) {
                link.classList.add('active');
            }
        });
    }

    // Initialize page-specific functionality
    function initPageFunctionality(page) {
        switch(page) {
            case 'behavior':
                initBehaviorPage();
                break;
            case 'contextual':
                initContextualPage();
                break;
            case 'specialists':
                initSpecialistsPage();
                break;
            case 'collaborate':
                initCollaboratePage();
                break;
            case 'fundament':
                initFundamentPage();
                break;
            case 'diversify':
                initDiversifyPage();
                break;
            case 'integrate':
                initIntegratePage();
                break;
            case 'automate':
                initAutomatePage();
                break;
            case 'build':
                initBuildPage();
                break;
            case 'publishing':
                initPublishingPage();
                break;
        }
    }

    // Page-specific initialization functions
    function initBehaviorPage() {
        console.log('Behavior page initialized');
        // Behavior page specific functionality
        const humorSlider = document.getElementById('humorSlider');
        const humorExample = document.getElementById('humorExample');
        
        humorSlider.addEventListener('input', function() {
            updateHumorExample(this.value);
        });

        function updateHumorExample(value) {
            if (value < 33) {
                humorExample.textContent = "The AI will respond with a serious tone, avoiding jokes or humorous remarks.";
            } else if (value < 66) {
                humorExample.textContent = "The AI will occasionally use light humor and witty remarks in its responses.";
            } else {
                humorExample.textContent = "The AI will frequently incorporate jokes and humorous content in its communication.";
            }
        }
    }

    function initContextualPage() {
        console.log('Contextual page initialized');
        // Contextual page specific functionality
    }

    function initSpecialistsPage() {
        console.log('Specialists page initialized');
        // Specialists page specific functionality
    }

    function initCollaboratePage() {
        console.log('Collaborate page initialized');
        // Collaborate page specific functionality
    }

    function initFundamentPage() {
        console.log('Fundament page initialized');
        // Fundament page specific functionality
    }

    function initDiversifyPage() {
        console.log('Diversify page initialized');
        // Diversify page specific functionality
    }

    function initIntegratePage() {
        console.log('Integrate page initialized');
        // Integrate page specific functionality
    }

    function initAutomatePage() {
        console.log('Automate page initialized');
        // Automate page specific functionality
    }

    function initBuildPage() {
        console.log('Build page initialized');
        // Build page specific functionality
    }

    function initPublishingPage() {
        console.log('Publishing page initialized');
        // Publishing page specific functionality
    }

    // Project selection functionality
    const projectsDropdown = document.getElementById('projectsDropdown');
    const projectsList = projectsDropdown.nextElementSibling;

    // Sample projects (replace with actual data in a real application)
    const projects = [
        { id: 1, name: "Project Alpha" },
        { id: 2, name: "Project Beta" },
        { id: 3, name: "Project Gamma" }
    ];

    // Populate projects dropdown
    projects.forEach(project => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.classList.add('dropdown-item');
        a.href = '#';
        a.textContent = project.name;
        a.addEventListener('click', (e) => {
            e.preventDefault();
            selectProject(project);
        });
        li.appendChild(a);
        projectsList.appendChild(li);
    });

    function selectProject(project) {
        currentProjectSpan.textContent = project.name;
        // Here you would typically update the application state and reload relevant data
        console.log(`Selected project: ${project.name}`);
    }

    // Load the initial page (behavior)
    loadPage('behavior');
});