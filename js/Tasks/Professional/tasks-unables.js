document.addEventListener('DOMContentLoaded', () => {
    initUnablesTasks();
});

function initUnablesTasks() {
    
    const container = document.getElementById('unables-tasks'); 
    
    if (!container) return; 

    const contentArea = container.querySelector('.task-content-area');
    
    const prevBtn = container.querySelector('.prev-btn');
    const nextBtn = container.querySelector('.next-btn');
    
    const basePath = "Content/Project/Professional/UNABLES/Img/"; //

    const tasksData = [
        {
            type: 'overview',
            list: [
                "360° Gyroscopic Controls", 
                "Physics & Animation Optimization",            
                "Graphics & Memory Adaptation",
                "Technical Mentoring"
            ]
        },
        {
            type: 'detail',
            title: '360° Gyroscopic Controls',
            description: `Implementation of precise 360° gyroscopic control using Nintendo's native API, with proprietary motion smoothing algorithms.`,
            image: `${basePath}ScrenShot-1.jpg`
        },
		{
            type: 'detail',
            title: 'Physics & Animation Optimization',
            description: `Deep optimization of physics and animation system performance, eliminating frame drops in complex scenes with a large number of interactive objects.`,
            image: `${basePath}ScrenShot-2.jpg`
        },
		{
            type: 'detail',
            title: 'Graphics & Memory Adaptation',
            description: `Adaptation of graphic resources and rendering settings to the console's memory limitations, while maintaining visual fidelity to the original.`,
            image: `${basePath}ScrenShot-3.jpg`
        },
		{
            type: 'detail',
            title: 'Technical Mentoring',
            description: `Technical mentoring for 2 interns: ongoing consultation on programming solutions and implementation of clean code standards.`,
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