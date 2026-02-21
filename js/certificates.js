document.addEventListener('DOMContentLoaded', () => {
    initCertificates();
});

function initCertificates() {
    const certsData = [
        {
            title: "Unity for Multiplayer Games",
            desc: "Designing client-server architecture, game state synchronization, traffic replication, and latency handling.",
            icon: "fa-solid fa-network-wired"
        },
        {
            title: "Optimization of Unity Game",
            desc: "Advanced CPU/GPU profiling techniques, draw call reduction, memory management (garbage collection), and physics optimization.",
            icon: "fa-brands fa-unity"
        },
        {
            title: "Deep Dive: C#",
            desc: "Advanced object patterns (composition, inheritance), asynchronous and multithreaded programming, and support for streams and delegates.",
            icon: "fa-solid fa-code"
        },
        {
            title: "Unreal Engine 5: FPS Development",
            desc: "Implementation of modular game logic in the Blueprints system. Use of interfaces for communication between actors and configuration of the state machine.",
            icon: "fa-solid fa-gun"
        }
    ];

    const slots = [
        document.getElementById('slot-0'),
        document.getElementById('slot-1'),
        document.getElementById('slot-2'),
        document.getElementById('slot-3'),
        document.getElementById('slot-4')
    ];

    const btnPrev = document.querySelector('.prev-cert');
    const btnNext = document.querySelector('.next-cert');

    let centerDataIndex = 0;

    function getModIndex(i, length) {
        return ((i % length) + length) % length;
    }
    
    let slotPositions = [0, 1, 2, 3, 4];

    function draw() {
        slots.forEach((slot, i) => {
            slot.classList.remove('pos-0', 'pos-1', 'pos-2', 'pos-3', 'pos-4');
            
            const pos = slotPositions[i];
            slot.classList.add(`pos-${pos}`);
            
            let dataOffset = pos - 2;
            let dataIndex = getModIndex(centerDataIndex + dataOffset, certsData.length);
            
            const data = certsData[dataIndex];
            
            slot.innerHTML = `
                <div class="cert-content-icon">
                    <i class="${data.icon}"></i>
                </div>
                <div class="cert-content-text">
                    <h3>${data.title}</h3>
                    <p>${data.desc}</p>
                </div>
            `;
        });
    }

    function moveRight() {
        centerDataIndex = getModIndex(centerDataIndex + 1, certsData.length);
        
        slotPositions = slotPositions.map(pos => {
            if (pos === 0) return 4;
            return pos - 1;
        });

        draw();
    }

    function moveLeft() {
        centerDataIndex = getModIndex(centerDataIndex - 1, certsData.length);
        
        slotPositions = slotPositions.map(pos => {
            if (pos === 4) return 0;
            return pos + 1;
        });

        draw();
    }

    draw();

    btnNext.addEventListener('click', moveRight);
    btnPrev.addEventListener('click', moveLeft);
    
    slots.forEach((slot, index) => {
        slot.addEventListener('click', () => {
            const currentPos = slotPositions[index];
            if (currentPos === 1) moveLeft();
            if (currentPos === 3) moveRight();
        });
    });
}