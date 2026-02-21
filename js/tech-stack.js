document.addEventListener('DOMContentLoaded', () => {
    const techGrid = document.getElementById('tech-grid');
    const basePath = "Content/Icons/Icons_Tech_Stack/";

    const techData = [
        { name: "Unity",           icon: "unity-game-engine-icon.svg" },
        { name: "C#",              icon: "c-sharp-programming-language-icon.svg" },
        { name: "Unreal Engine",   icon: "unreal-engine-white-icon.svg" },
        { name: "C++",             icon: "c-plus-plus-programming-language-icon.svg" },
        { name: "Python",          icon: "python-programming-language-icon.svg" },
        { name: "Visual Studio",   icon: "visualstudio-icon.svg" },
        { name: "Git",             icon: "git.svg" },
        { name: "GitHub",          icon: "github.png" },
        { name: "Wwise",           icon: "wwise_logo_rgb.png" },
        { name: "Audacity",        icon: "audacity-icon.svg" },
        { name: "Gimp",            icon: "The_GIMP_icon_-_gnome.svg" },
        { name: "Blender 3D",      icon: "blender-icon.svg" },
        { name: "DaVinci Resolve", icon: "DaVinci_Resolve_Studio.png" },
        { name: "PC",     		   icon: "pc-icon.svg" },
        { name: "Console",     	   icon: "video-game-gamepad-icon.svg" },
        { name: "WebGL",           icon: "WebGL_Logo.svg" },
        { name: "VR",          	   icon: "icon-vr-glasses.png" }
    ];

    if (techGrid) {
        let htmlContent = "";
        techData.forEach(tech => {
            htmlContent += `
                <div class="tech-item">
                    <img src="${basePath}${tech.icon}" alt="${tech.name}" class="tech-icon">
                    <span class="tech-name">${tech.name}</span>
                </div>
            `;
        });
        techGrid.innerHTML = htmlContent;
    } else {
        console.error("Nie znaleziono elementu o id 'tech-grid'");
    }
});