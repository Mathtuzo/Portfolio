document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("scales-canvas");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let width, height;
    
    // Paramètres des écailles
    const scaleRadius = 35;
    const xStep = scaleRadius * 1.732; // sqrt(3) for perfect hexagon/scale interlocking
    const yStep = scaleRadius * 1.5;
    let scales = [];

    // Paramètres de la souris
    const mouse = { x: -1000, y: -1000 };

    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
        initScales();
    }

    function initScales() {
        scales = [];
        const cols = Math.ceil(width / xStep) + 2;
        const rows = Math.ceil(height / yStep) + 2;

        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                // Décalage pour l'emboîtement
                const offsetX = (row % 2 === 0) ? 0 : xStep / 2;
                const x = col * xStep + offsetX - xStep;
                const y = row * yStep - yStep;
                
                scales.push({
                    x: x,
                    y: y,
                    baseAlpha: 0, // Invisible par défaut
                    currentAlpha: 0,
                    shiftX: 0,
                    shiftY: 0
                });
            }
        }
    }

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    window.addEventListener("touchmove", (e) => {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
    });
    
    window.addEventListener("mouseout", () => {
        mouse.x = -1000;
        mouse.y = -1000;
    });

    function drawScale(scale) {
        const dx = mouse.x - scale.x;
        const dy = mouse.y - scale.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        const maxDist = 166; // Réduit d'un tiers par rapport à 250
        
        let targetAlpha = scale.baseAlpha;
        let targetShiftX = 0;
        let targetShiftY = 0;

        if (distance < maxDist) {
            const intensity = 1 - (distance / maxDist);
            const easeIntensity = Math.pow(intensity, 2);
            targetAlpha = scale.baseAlpha + easeIntensity * 0.8; // Luminosité max au survol
            
            // Effet tactile : les écailles s'écartent légèrement du curseur
            const angle = Math.atan2(dy, dx);
            const pushStrength = easeIntensity * 12;
            targetShiftX = -Math.cos(angle) * pushStrength;
            targetShiftY = -Math.sin(angle) * pushStrength;
        }

        // Interpolation pour un mouvement et une transition de couleur fluides
        scale.currentAlpha += (targetAlpha - scale.currentAlpha) * 0.1;
        scale.shiftX += (targetShiftX - scale.shiftX) * 0.1;
        scale.shiftY += (targetShiftY - scale.shiftY) * 0.1;

        ctx.beginPath();
        // Rayon légèrement plus grand pour que les hexagones s'empilent comme des maillons
        const drawRadius = scaleRadius * 1.25; 
        for (let i = 0; i < 6; i++) {
            // Dessiner un hexagone (pointe vers le haut)
            const angle = i * Math.PI / 3 - Math.PI / 6;
            const px = scale.x + scale.shiftX + drawRadius * Math.cos(angle);
            const py = scale.y + scale.shiftY + drawRadius * Math.sin(angle);
            if (i === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
        }
        ctx.closePath();
        
        // Couleur de fond pour cacher les écailles en dessous
        ctx.fillStyle = `#0a0d14`; 
        ctx.fill();

        // Contour lumineux avec dégradé simulé par l'alpha
        ctx.lineWidth = 1.5;
        ctx.strokeStyle = `rgba(56, 189, 248, ${scale.currentAlpha})`; // Couleur primaire (bleu cyan)
        ctx.stroke();
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);

        // Dessiner de la dernière à la première pour l'effet "tuile / écaille de poisson"
        for (let i = scales.length - 1; i >= 0; i--) {
            drawScale(scales[i]);
        }

        requestAnimationFrame(animate);
    }

    resize();
    animate();
});
