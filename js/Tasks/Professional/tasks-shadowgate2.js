document.addEventListener('DOMContentLoaded', () => {
    initShadowgateTasks();
});

function initShadowgateTasks() {
    
    const container = document.getElementById('shadowgate-2-tasks'); 
    
    if (!container) return; 

    const contentArea = container.querySelector('.task-content-area');
    
    const prevBtn = container.querySelector('.prev-btn');
    const nextBtn = container.querySelector('.next-btn');
    
    const basePath = "Content/Project/Professional/Shadowgate 2/Img/";

    const tasksData = [
        {
            type: 'overview',
            list: [
                "AI Logic & Boss Systems", 
                "Gameplay Mechanics & Interactions",            
                "Rendering & Performance Optimization",
                "Level Geometry & Collisions"
            ]
        },
        {
            type: 'detail',
            title: 'AI Logic & Boss Systems',
            description: `Debugging and developing existing enemy AI logic
(state machines), including fixing bugs in multi
stage boss transformations.`,
            image: `${basePath}ScrenShot-1.jpg`
        },
		{
            type: 'detail',
            title: 'Gameplay Mechanics & Interactions',
            description: `Programming gameplay mechanics and
interactions (ladders, logic puzzles) and fixing bugs
in game control scripts.`,
            image: `${basePath}ScrenShot-2.jpg`
        },
		{
            type: 'detail',
            title: 'Rendering & Performance Optimization',
            description: `Optimizing rendering performance by configuring
LOD (Level of Detail) groups and eliminating
lighting and fog artifacts.`,
            image: `${basePath}ScrenShot-3.jpg`
        },
		{
            type: 'detail',
            title: 'Level Geometry & Collisions',
            description: `Correcting level geometry and object placement to
eliminate collision errors and improve overall
gameplay fluidity.`,
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