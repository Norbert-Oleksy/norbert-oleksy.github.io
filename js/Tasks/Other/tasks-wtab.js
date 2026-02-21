document.addEventListener('DOMContentLoaded', () => {
    initWTABTasks();
});

function initWTABTasks() {
    
    const container = document.getElementById('wtab-tasks'); 
    
    if (!container) return; 

    const contentArea = container.querySelector('.task-content-area');
    
    const prevBtn = container.querySelector('.prev-btn');
    const nextBtn = container.querySelector('.next-btn');
    
    const basePath = "Content/Project/Other/Well thats a bomb/Img/";

    const tasksData = [
        {
            type: 'overview',
            list: [
                "Core Gameplay Flow & Difficulty", 
                "Polymorphic Puzzle System",            
                "Diegetic Hint System (Smartphone)",
                "Localization System"
            ]
        },
        {
            type: 'detail',
            title: 'Core Gameplay Flow & Difficulty',
            description: `Implemented the central game loop managing Win/Lose states and three distinct difficulty settings. Developed the bomb logic responsible for the countdown timer and procedural module generation to ensure varied gameplay in every session.`,
            image: `${basePath}ScrenShot-1.jpg`
        },
		{
            type: 'detail',
            title: 'Polymorphic Puzzle System',
            description: `Designed a scalable puzzle architecture based on a generic Module base class. Utilized inheritance and polymorphism to create distinct puzzle types that override common logic while maintaining a unified interface.`,
            image: `${basePath}ScrenShot-2.jpg`
        },
		{
            type: 'detail',
            title: 'Diegetic Hint System (Smartphone)',
            description: `Created an immersive 2D smartphone interface acting as an in-game helper. Implemented a "scanning" mechanic to provide players with contextual hints and delivered narrative lore through a simulated messaging app.`,
            image: `${basePath}ScrenShot-3.jpg`
        },
		{
            type: 'detail',
            title: 'Localization System',
            description: `Integrated the official Unity Localization package to support dynamic language switching between English and Polish. Configured the UI to update text and assets in real-time based on player preference.`,
            image: `${basePath}ScrenShot-4.jpg`
        },
    ];

    let currentIndex = 0; 

    function renderTask(index) {
        contentArea.style.animation = 'none';
        contentArea.offsetHeight;
        contentArea.style.animation = 'fadeInTask 0.5s forwards';

        const data = tasksData[index];
        let html = '';

        if (data.type === 'overview') {
            const listItems = data.list.map((item, i) => 
                `<li class="clickable-task" data-target-index="${i + 1}">${item}</li>`
            ).join('');
            
            html = `
                <div class="task-overview-list">
                    <ul class="task-list-items">
                        ${listItems}
                    </ul>
                </div>
            `;
        } else {
            html = `
                <div class="task-detail-split">
                    <div class="task-image-container">
                        <img src="${data.image}" alt="${data.title}">
                    </div>
                    <div class="task-text-container">
                        <h3>${data.title}</h3>
                        <p>${data.description}</p>
                    </div>
                </div>
            `;
        }

        contentArea.innerHTML = html;
        attachClickEvents(); 
    }

    function attachClickEvents() {
        const listItems = contentArea.querySelectorAll('.clickable-task');
        listItems.forEach(item => {
            item.addEventListener('click', function() {
                const targetIndex = parseInt(this.getAttribute('data-target-index'));
                currentIndex = targetIndex;
                renderTask(currentIndex);
            });
        });
    }

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) currentIndex--;
        else currentIndex = tasksData.length - 1; 
        renderTask(currentIndex);
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < tasksData.length - 1) currentIndex++;
        else currentIndex = 0; 
        renderTask(currentIndex);
    });

    renderTask(currentIndex);
}