(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Vendor carousel
    $('.vendor-carousel').owlCarousel({
        loop: true,
        margin: 45,
        dots: false,
        loop: true,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0:{
                items:2
            },
            576:{
                items:4
            },
            768:{
                items:6
            },
            992:{
                items:8
            }
        }
    });
    
})(jQuery);


// plog js
// Custom JavaScript for Air Conditioning Section

document.addEventListener("DOMContentLoaded", function() {
    // Initialize all animations and interactions
    initScrollAnimations();
    initCardInteractions();
    initSmoothScrolling();
    initParallaxEffects();
    initCounterAnimations();
    initTypingEffect();
});

// Scroll-triggered animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.dataset.delay || 0;
                setTimeout(() => {
                    entry.target.classList.add("animate");
                }, delay);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all fade-in cards
    document.querySelectorAll(".fade-in-card").forEach(card => {
        observer.observe(card);
    });

    // Observe section title
    const sectionTitle = document.querySelector(".section-title");
    if (sectionTitle) {
        observer.observe(sectionTitle);
    }
}

// Enhanced card interactions
function initCardInteractions() {
    const cards = document.querySelectorAll(".ac-card");
    
    cards.forEach((card, index) => {
        // Add mouse enter effect
        card.addEventListener("mouseenter", function() {
            this.style.transform = "translateY(-15px) scale(1.02)";
            this.style.transition = "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
            
            // Add glow effect
            this.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.2), 0 0 20px rgba(102, 126, 234, 0.3)";
            
            // Animate icon
            const icon = this.querySelector(".card-icon");
            if (icon) {
                icon.style.transform = "scale(1.2) rotate(5deg)";
                icon.style.transition = "all 0.3s ease";
            }
        });

        // Add mouse leave effect
        card.addEventListener("mouseleave", function() {
            this.style.transform = "translateY(0) scale(1)";
            this.style.boxShadow = "0 5px 20px rgba(0, 0, 0, 0.15)";
            
            // Reset icon
            const icon = this.querySelector(".card-icon");
            if (icon) {
                icon.style.transform = "scale(1) rotate(0deg)";
            }
        });

        // Add click ripple effect
        card.addEventListener("click", function(e) {
            const ripple = document.createElement("div");
            ripple.classList.add("ripple");
            
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + "px";
            ripple.style.left = x + "px";
            ripple.style.top = y + "px";
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });

        // Add staggered animation delay
        card.style.animationDelay = (index * 0.2) + "s";
    });
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
    document.querySelectorAll("a[href^=\"#\"]").forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });
}

// Parallax effects
function initParallaxEffects() {
    window.addEventListener("scroll", () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll(".ac-section::before");
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// Counter animations
function initCounterAnimations() {
    const counters = document.querySelectorAll(".counter");
    
    counters.forEach(counter => {
        const target = parseInt(counter.dataset.target);
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        
        // Start counter when element is visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCounter();
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(counter);
    });
}

// Typing effect for titles
function initTypingEffect() {
    const typingElements = document.querySelectorAll(".typing-effect");
    
    typingElements.forEach(element => {
        const text = element.textContent;
        element.textContent = "";
        element.style.borderRight = "2px solid #007bff";
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            } else {
                // Remove cursor after typing is complete
                setTimeout(() => {
                    element.style.borderRight = "none";
                }, 1000);
            }
        };
        
        // Start typing when element is visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(typeWriter, 500);
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(element);
    });
}

// Button loading effect
function addLoadingEffect(button) {
    const originalText = button.innerHTML;
    button.innerHTML = "<span class=\"loading-spinner\"></span> جاري التحميل...";
    button.disabled = true;
    
    // Simulate loading time
    setTimeout(() => {
        button.innerHTML = originalText;
        button.disabled = false;
    }, 2000);
}

// Add loading effect to all buttons
document.querySelectorAll(".btn-card").forEach(button => {
    button.addEventListener("click", function(e) {
        e.preventDefault();
        addLoadingEffect(this);
        
        // Simulate navigation after loading
        setTimeout(() => {
            // Here you would normally navigate to the actual page
            console.log("Navigating to:", this.getAttribute("href"));
        }, 2000);
    });
});

// Floating animation for icons
function initFloatingAnimation() {
    const icons = document.querySelectorAll(".card-icon");
    
    icons.forEach((icon, index) => {
        // Add floating animation with different delays
        icon.style.animation = `float 3s ease-in-out infinite ${index * 0.5}s`;
    });
}

// Add floating keyframes to CSS dynamically
const floatingKeyframes = `
    @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-10px) rotate(2deg); }
    }
    
    @keyframes ripple {
        0% {
            transform: scale(0);
            opacity: 1;
        }
        100% {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
    }
`;

// Inject keyframes into the page
const style = document.createElement("style");
style.textContent = floatingKeyframes;
document.head.appendChild(style);

// Initialize floating animation
initFloatingAnimation();

// Scroll progress indicator
function initScrollProgress() {
    const progressBar = document.createElement("div");
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #667eea, #764ba2);
        z-index: 9999;
        transition: width 0.3s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener("scroll", () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.offsetHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + "%";
    });
}

// Initialize scroll progress
initScrollProgress();

// Lazy loading for images
function initLazyLoading() {
    const images = document.querySelectorAll("img[data-src]");
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove("lazy");
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
initLazyLoading();

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(() => {
    // Handle scroll events here
}, 16); // ~60fps

window.addEventListener("scroll", debouncedScrollHandler);

// Add accessibility improvements
function initAccessibility() {
    // Add keyboard navigation
    document.querySelectorAll(".ac-card").forEach(card => {
        card.setAttribute("tabindex", "0");
        card.setAttribute("role", "button");
        
        card.addEventListener("keydown", function(e) {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                this.click();
            }
        });
    });
    
    // Add ARIA labels
    document.querySelectorAll(".btn-card").forEach(button => {
        const cardTitle = button.closest(".ac-card").querySelector(".card-title").textContent;
        button.setAttribute("aria-label", `اعرف المزيد عن ${cardTitle}`);
    });
}

// Initialize accessibility features
initAccessibility();

// Console log for debugging
console.log("Air Conditioning Section JavaScript loaded successfully!");
console.log("All animations and interactions initialized.");

// Export functions for external use
window.AirConditioningSection = {
    initScrollAnimations,
    initCardInteractions,
    addLoadingEffect
};
