/**
 * ==========================================================================
 * GESTION DES MODALES DE DÉMONSTRATION & FILTRAGE DES PROJETS
 * ==========================================================================
 */

// Ouvrir une modale spécifique
function openDemo(modalId) {
    closeAllDemos();
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Bloquer le défilement de fond
    }
}

// Fermer une modale spécifique
function closeDemo(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Rétablir le défilement
    }
}

// Fermer toutes les modales
function closeAllDemos() {
    const activeModals = document.querySelectorAll('.modal-dialog.active');
    activeModals.forEach(modal => {
        modal.classList.remove('active');
    });
    document.body.style.overflow = '';
}

// Écouteurs globaux pour la fermeture (clic extérieur & touche Échap)
document.addEventListener('DOMContentLoaded', () => {
    // Fermeture en cliquant sur l'arrière-plan flouté
    const allModals = document.querySelectorAll('.modal-dialog');
    allModals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeDemo(modal.id);
            }
        });
    });

    // Fermeture avec la touche Échap (Escape)
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' || e.key === 'Esc') {
            closeAllDemos();
        }
    });

    // ----------------------------------------------------------------------
    // FILTRAGE DES PROJETS PAR ONGLETS
    // ----------------------------------------------------------------------
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Mettre à jour l'onglet actif
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');

                if (filterValue === 'all' || cardCategory === filterValue) {
                    card.style.display = 'flex';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(15px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 250);
                }
            });
        });
    });
});

/* --------------------------------------------------------------------------
   Fonctions de compatibilité ascendante pour les anciens appels
   -------------------------------------------------------------------------- */
function openGaudi() { openDemo('demo-Gaodi'); }
function openFoll() { openDemo('demo-leFoll'); }
function openJP() { openDemo('JP-Demo'); }
function openSiteDyn() { openDemo('demo-siteDynamique'); }
function openEco() { openDemo('Eco-Demo'); }
function openMuse() { openDemo('demoMuse'); }
function openCLdeco() { openDemo('CLdeco-Demo'); }
function openASB() { window.open('https://association-boxing-club-brignais.fr/', '_blank'); }