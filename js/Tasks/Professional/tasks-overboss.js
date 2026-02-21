document.addEventListener('DOMContentLoaded', () => {
    initOverbossTasks();
});

function initOverbossTasks() {
    
    const container = document.getElementById('overboss-tasks'); 
    
    if (!container) return; 

    const contentArea = container.querySelector('.task-content-area');
    
    const prevBtn = container.querySelector('.prev-btn');
    const nextBtn = container.querySelector('.next-btn');
    
    const basePath = "Content/Project/Professional/Overboss/Img/";

    const tasksData = [
        {
            type: 'overview',
            list: [
                "Local Multiplayer Implementation", 
                "Hybrid Control System",            
                "UI Refactoring & Console Adaptation",
                "Dynamic Localization System"
            ]
        },
        {
            type: 'detail',
            title: 'Local Multiplayer Implementation',
            description: `Implementation of local multiplayer mode, ensuring stable performance and support for multiple controllers in the Nintendo Switch architecture.`,
            image: `${basePath}ScrenShot-1.jpg`
        },
        {
            type: 'detail',
            title: 'Hybrid Control System',
            description: `Development of a hybrid control system combining gamepad and touchscreen support with focus management logic enabling simultaneous and conflict free interaction with both touch and controller.`,
            image: `${basePath}ScrenShot-2.jpg`
        },
		{
            type: 'detail',
            title: 'UI Refactoring & Console Adaptation',
            description: `Complete refactoring of the entire game's UI and redesign of the tutorial to adapt navigation to console standards while maintaining readability on a small screen.`,
            image: `${basePath}ScrenShot-3.jpg`
        },
		{
            type: 'detail',
            title: 'Dynamic Localization System',
            description: `Implementation of a dynamic text and graphics localization system for multiple language regions.`,
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