document.addEventListener('DOMContentLoaded', () => {
    initRiseEternaTasks();
});

function initRiseEternaTasks() {
    
    const container = document.getElementById('rise-eterna-2-tasks'); 
    
    if (!container) return; 

    const contentArea = container.querySelector('.task-content-area');
    
    const prevBtn = container.querySelector('.prev-btn');
    const nextBtn = container.querySelector('.next-btn');
    
    const basePath = "Content/Project/Professional/Rise Eterna 2/Img/";

    const tasksData = [
        {
            type: 'overview',
            list: [
                "Tactical Systems Development", 
                "AI & Advanced Navigation",            
                "Grid Combat Algorithms",
                "Visuals & Pipeline Optimization"
            ]
        },
        {
            type: 'detail',
            title: 'Tactical Systems Development',
            description: `Programming key tactical gameplay systems from the
prototype phase, strictly following the external client's
design documentation.`,
            image: `${basePath}ScrenShot-1.jpg`
        },
		{
            type: 'detail',
            title: 'AI & Advanced Navigation',
            description: `Implementation of artificial intelligence (AI) and unit
navigation, including avoidance of terrain traps and
specific objectives (e.g., “hit-and-run” logic for a thief).`,
            image: `${basePath}ScrenShot-2.jpg`
        },
		{
            type: 'detail',
            title: 'Grid Combat Algorithms',
            description: `Development of grid-based combat system algorithms
that calculate movement range and strategic value of
fields in order to award positional bonuses.`,
            image: `${basePath}ScrenShot-3.jpg`
        },
		{
            type: 'detail',
            title: 'Visuals & Pipeline Optimization',
            description: `Integration of the visual layer and 2D animations with
the game code and optimization of the asset
implementation pipeline in collaboration with the art
team.`,
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