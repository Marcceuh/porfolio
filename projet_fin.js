// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio JavaScript chargé !');
    
    // S'assurer que le body est visible
    document.body.style.opacity = '1';
    document.body.classList.add('charge');
    
    // Animation des statistiques
    function animerStatistiques() {
        const statistiques = document.querySelectorAll('.nombre-stat');
        
        statistiques.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target'));
            const duration = 2000; // 2 secondes
            const increment = target / (duration / 16); // 60 FPS
            let current = 0;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                stat.textContent = Math.floor(current);
            }, 16);
        });
    }
    
    // Menu mobile
    const boutonMenu = document.querySelector('.bouton-menu');
    const liensMenu = document.querySelector('.liens-menu');
    
    if (boutonMenu && liensMenu) {
        boutonMenu.addEventListener('click', function() {
            liensMenu.classList.toggle('menu-actif');
        });
        
        // Fermer le menu quand on clique sur un lien
        const liens = liensMenu.querySelectorAll('a');
        liens.forEach(lien => {
            lien.addEventListener('click', function() {
                liensMenu.classList.remove('menu-actif');
            });
        });
    }
    
    // Navigation fluide
    const liensNavigation = document.querySelectorAll('a[href^="#"]');
    liensNavigation.forEach(lien => {
        lien.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Animation au scroll pour les statistiques
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animerStatistiques();
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    const sectionStatistiques = document.querySelector('.statistiques');
    if (sectionStatistiques) {
        observer.observe(sectionStatistiques);
    }
    
    // Formulaire de contact
    const formulaire = document.querySelector('.formulaire-contact');
    if (formulaire) {
        formulaire.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Récupérer les valeurs du formulaire
            const nom = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('textarea').value;
            
            // Simulation d'envoi (remplacer par votre logique d'envoi)
            alert(`Merci ${nom} ! Votre message a été reçu. Je vous répondrai à ${email} dans les plus brefs délais.`);
            
            // Réinitialiser le formulaire
            this.reset();
        });
    }
    
    // Animation des cartes de projets au hover
    const cartesProjets = document.querySelectorAll('.carte-projet');
    cartesProjets.forEach(carte => {
        carte.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 25px rgba(0,0,0,0.2)';
        });
        
        carte.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        });
    });
    
    // Animation des icônes de contact
    const iconesContact = document.querySelectorAll('.icone-contact');
    iconesContact.forEach(icone => {
        icone.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) rotate(5deg)';
        });
        
        icone.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });
    
    // Gestion des erreurs de chargement d'images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            console.log('Erreur de chargement image:', this.src);
            this.style.display = 'none';
        });
    });
    
    console.log('Toutes les fonctionnalités JavaScript sont initialisées !');
}); 