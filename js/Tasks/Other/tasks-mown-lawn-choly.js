document.addEventListener('DOMContentLoaded', () => {
    initMlcTasks();
});

function initMlcTasks() {
    
    const container = document.getElementById('mown-lawn-choly-tasks'); 
    
    if (!container) return; 

    const contentArea = container.querySelector('.task-content-area');
    
    const prevBtn = container.querySelector('.prev-btn');
    const nextBtn = container.querySelector('.next-btn');
    
    const basePath = "Content/Project/Other/Mown-lawn-choly/Img/";

    const tasksData = [
        {
            type: 'overview',
            list: [
                "Custom Vehicle Kinematics", 
                "Environment Interaction & VFX",            
                "Core Game Loop & Progression"
            ]
        },
        {
            type: 'detail',
            title: 'Custom Vehicle Kinematics',
            description: `Programmed a realistic lawnmower driving controller using custom vehicle kinematics. Implemented front-wheel steering logic to simulate authentic driving mechanics, requiring forward momentum to turn.`,
            image: `${basePath}ScrenShot-1.jpg`
        },
		{
            type: 'detail',
            title: 'Environment Interaction & VFX',
            description: `Developed the core grass-cutting mechanic with real-time terrain state updates. Integrated Particle Systems to provide satisfying visual feedback (VFX) upon cutting grass or flowers, significantly enhancing the overall game feel.`,
            image: `${basePath}ScrenShot-2.jpg`
        },
		{
            type: 'detail',
            title: 'Core Game Loop & Progression',
            description: `Designed a centralized GameManager to track real-time gameplay metrics. Implemented progression logic based on the percentage of lawn cleared, alongside a strict penalty system that triggers a "Game Over" if too many flowers are destroyed.`,
            image: `${basePath}ScrenShot-3.jpg`
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