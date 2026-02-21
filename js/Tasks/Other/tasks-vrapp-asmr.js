document.addEventListener('DOMContentLoaded', () => {
    initVRAppASMRTasks();
});

function initVRAppASMRTasks() {
    
    const container = document.getElementById('vrapp-asmr-tasks'); 
    
    if (!container) return; 

    const contentArea = container.querySelector('.task-content-area');
    
    const prevBtn = container.querySelector('.prev-btn');
    const nextBtn = container.querySelector('.next-btn');
    
    const basePath = "Content/Project/Other/VR App ASMR/Img/";

    const tasksData = [
        {
            type: 'overview',
            list: [
                "Immersive VR Environment", 
                "Core Logic Systems",            
                "Advanced Audio Integration (Wwise)",
                "Level Streaming & Performance Optimization"
            ]
        },
        {
            type: 'detail',
            title: 'Immersive VR Environment',
            description: `Designed the application architecture specifically for the LZWP BIG CAVE system, utilizing a distributed cluster of synchronized workstations. Configured specialized rendering plugins (e.g., nDisplay) to ensure seamless frame synchronization and correct stereoscopic projection across multiple display walls.`,
            image: `${basePath}ScrenShot-1.jpg`
        },
		{
            type: 'detail',
            title: 'Core Logic Systems',
            description: `Developed comprehensive application logic using Blueprints, creating systems for world state management, player teleportation, and environment interaction. Designed modular script structures to handle the complete research procedure flow, extending beyond simple NPC behaviors.`,
            image: `${basePath}ScrenShot-2.jpg`
        },
		{
            type: 'detail',
            title: 'Advanced Audio Integration (Wwise)',
            description: `Integration of Audiokinetic Wwise middleware to establish a dynamic acoustic environment, utilizing spatial audio, custom attenuation curves, and real-time sound parameter control for enhanced realism.`,
            image: `${basePath}ScrenShot-3.jpg`
        },
		{
            type: 'detail',
            title: 'Level Streaming & Performance Optimization',
            description: `Implemented a single-scene level streaming strategy to eliminate application instability during map transitions common in CAVE environments. Configured scalability settings (targeting Medium profile) and optimized assets to maintain high performance without sacrificing the visual quality required for ASMR triggers.`,
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