document.addEventListener('DOMContentLoaded', () => {
    initVOIDRPGTasks();
});

function initVOIDRPGTasks() {
    
    const container = document.getElementById('void-rpg-tasks'); 
    
    if (!container) return; 

    const contentArea = container.querySelector('.task-content-area');
    
    const prevBtn = container.querySelector('.prev-btn');
    const nextBtn = container.querySelector('.next-btn');
    
    const basePath = "Content/Project/Other/Void RPG/Img/";

    const tasksData = [
        {
            type: 'overview',
            list: [
                "UI Toolkit Inventory System", 
                "Hybrid Turn-Based Combat",            
                "Data-Driven Item Architecture",
                "AI Behavior Trees"
            ]
        },
        {
            type: 'detail',
            title: 'UI Toolkit Inventory System',
            description: `Implementation of complex interaction logic for a grid-based inventory (UI Toolkit), including drag-and-drop, context menus, and slot validation for specific item types (e.g., handling two-handed weapon restrictions).`,
            image: `${basePath}ScrenShot-1.jpg`
        },
		{
            type: 'detail',
            title: 'Hybrid Turn-Based Combat',
            description: `Engineered an asynchronous action layer on top of the traditional turn-based loop, allowing for out-of-sequence events. Refined the input manager to resolve execution order conflicts and ensure strict action validation before execution.`,
            image: `${basePath}ScrenShot-2.jpg`
        },
		{
            type: 'detail',
            title: 'Modular Item Architecture',
            description: `Implemented a dynamic item requirement system extending the existing Data/State architecture. Programmed logic for weapon handling, including parameter validation for specific grip types (e.g., Two-Handed restrictions).`,
            image: `${basePath}ScrenShot-3.jpg`
        },
		{
            type: 'detail',
            title: 'AI Behavior Trees',
            description: `Designed enemy AI using Behavior Trees, creating distinct archetypes like Warrior, Ranger, and Assassin. Implemented unique tactical behaviors for each class to ensure varied gameplay challenges.`,
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