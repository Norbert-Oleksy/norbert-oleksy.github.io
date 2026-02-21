document.addEventListener('DOMContentLoaded', () => {
    initBombermanTasks();
});

function initBombermanTasks() {
    
    const container = document.getElementById('bomberman-tasks'); 
    
    if (!container) return; 

    const contentArea = container.querySelector('.task-content-area');
    
    const prevBtn = container.querySelector('.prev-btn');
    const nextBtn = container.querySelector('.next-btn');
    
    const basePath = "Content/Project/Other/Bomberman/Img/";

    const tasksData = [
        {
            type: 'overview',
            list: [
                "Top-Down 2D Movement & Interaction", 
                "Procedural Endless Mode & Progression",            
                "Modular Power-up Architecture",
                "Shared-Screen Local Multiplayer"
            ]
        },
        {
            type: 'detail',
            title: 'Top-Down 2D Movement & Interaction',
            description: `Implemented responsive top-down 2D movement mechanics allowing fluid player navigation across the map. Developed dynamic bomb logic, enabling players not only to place explosives but also to interact with them physically (e.g., pushing or sliding) for tactical advantages.`,
            image: `${basePath}ScrenShot-1.jpg`
        },
		{
            type: 'detail',
            title: 'Procedural Endless Mode & Progression',
            description: `Developed an endless single-player mode featuring procedurally generated arenas and a dynamic difficulty scaling system. Integrated time-limit mechanics, progressive enemy spawning, and a persistent high-score tracking system.`,
            image: `${basePath}ScrenShot-2.jpg`
        },
		{
            type: 'detail',
            title: 'Modular Power-up Architecture',
            description: `Designed a scalable power-up system featuring both passive stat modifiers (e.g., movement speed, bomb capacity) and active, single-use special bombs. Programmed unique explosion patterns and custom behaviors for each item type.`,
            image: `${basePath}ScrenShot-3.jpg`
        },
		{
            type: 'detail',
            title: 'Shared-Screen Local Multiplayer',
            description: `Engineered a classic 1v1 local multiplayer mode supporting simultaneous inputs on a single keyboard. Handled input routing and state management to ensure a seamless and competitive shared-screen experience.`,
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