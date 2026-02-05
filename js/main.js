// ===================================
// Flo & Lexi's London Adventures
// Main JavaScript File
// ===================================

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            const icon = this.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.navbar')) {
            navMenu.classList.remove('active');
            const icon = mobileMenuToggle?.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                const target = document.querySelector(href);
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add scroll effect to navbar
    let lastScroll = 0;
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
        }
        
        lastScroll = currentScroll;
    });
    
    // Load blog posts if on blog page
    if (document.getElementById('blog-container')) {
        loadBlogPosts();
    }
});

// ===================================
// Blog Posts Management
// ===================================

// Array to store blog post adventures
// Add new adventures here as they happen!
const adventures = [
    // FIFTH adventure - Buckingham Palace
    {
        id: 5,
        title: "Our Fifth Adventure: Buckingham Palace! 👑",
        location: "Buckingham Palace, Westminster, London",
        image: "https://www.genspark.ai/api/files/s/EiJQ74L1",
        excerpt: "The KING?! Can I meet him? Can I? Can I?! We walked to Buckingham Palace where the King lives! With 775 rooms, 40,000 light bulbs, and the amazing Changing of the Guard ceremony, this was our most ROYAL adventure yet! 👑✨",
        url: "adventure-5-buckingham-palace.html"
    },
    
    // FOURTH adventure - Leicester Square
    {
        id: 4,
        title: "Our Fourth Adventure: Leicester Square! 🎬",
        location: "Leicester Square, West End, London",
        image: "images/leicester-square-cinema.jpg",
        excerpt: "Can we watch a film? Can we? Can we?! We discovered London's cinema capital with red carpets, movie premieres, and the amazing Charlie Chaplin statue! Lights, camera, adventure! 🎬✨",
        url: "adventure-4-leicester-square.html"
    },
    
    // THIRD adventure - Big Ben and Houses of Parliament
    {
        id: 3,
        title: "Our Third Adventure: Big Ben and The Houses of Parliament! 🕐",
        location: "Westminster, London",
        image: "images/big-ben-flo-lexi-scene1.jpg",
        excerpt: "BONG! BONG! BONG! The giant clock tower goes BONG so loud, my big ears were ringing! But Lexi wasn't scared at all - she's so brave! Come see what we discovered about this famous London landmark! 🕐✨",
        url: "adventure-2-big-ben.html"
    },
    
    // SECOND adventure - Tower of London
    {
        id: 2,
        title: "Our Second Adventure: The Tower of London! 🏰",
        location: "Historic Fortress on the Thames",
        image: "images/tower-of-london.jpg",
        excerpt: "An ancient fortress with sparkling Crown Jewels, legendary ravens, and brave Beefeaters! We can't wait to share this adventure with you! 👑🐦‍⬛",
        url: "adventure-3-tower-of-london.html"
    },
    
    // FIRST adventure - The Red Bus! (Arriving in London)
    {
        id: 1,
        title: "Our First Adventure: The Amazing Red Bus! 🚍",
        location: "Arriving in London!",
        image: "images/red-bus-adventure.jpg",
        excerpt: "LEXI! LEXI! IT'S RED! IT'S TALL! IT HAS TWO FLOORS!!! We just arrived in London and I discovered the most AMAZING thing - double-decker buses! Lexi tried to get me to act cool, but how can you act cool when you're seeing a TWO-STORY BUS for the first time?! One sees adventure. One reads the route number. Our London journey begins! 💚🐕",
        url: "adventure-1-red-bus.html"
    }
    
    // Add more adventures here as Flo and Lexi continue exploring!
];

function loadBlogPosts() {
    const blogContainer = document.getElementById('blog-container');
    
    if (!blogContainer) return;
    
    // If there are adventures to display
    if (adventures.length > 0) {
        // Clear the "coming soon" message
        blogContainer.innerHTML = '';
        
        // Create a grid for blog posts
        const blogGrid = document.createElement('div');
        blogGrid.className = 'blog-grid';
        
        // Sort adventures by ID (newest/highest ID first)
        const sortedAdventures = [...adventures].sort((a, b) => {
            return b.id - a.id;
        });
        
        // Create blog post cards
        sortedAdventures.forEach(adventure => {
            const card = createBlogPostCard(adventure);
            blogGrid.appendChild(card);
        });
        
        blogContainer.appendChild(blogGrid);
    }
    // If no adventures yet, the "coming soon" message from HTML will display
}

function createBlogPostCard(adventure) {
    const card = document.createElement('article');
    card.className = 'blog-post-card';
    
    // Use the url field if provided, otherwise construct from id
    const adventureUrl = adventure.url || `adventure-${adventure.id}.html`;
    
    card.innerHTML = `
        <img class="blog-post-image" src="${adventure.image}" alt="${adventure.title}">
        <div class="blog-post-content">
            <h2 class="blog-post-title">${adventure.title}</h2>
            <p class="blog-post-excerpt">${adventure.excerpt}</p>
            <a href="${adventureUrl}" class="read-more">
                Read Full Adventure <i class="fas fa-arrow-right"></i>
            </a>
        </div>
    `;
    
    return card;
}

// ===================================
// Animation Effects
// ===================================

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.adventure-card, .blog-post-card, .intro-grid, .friendship-grid');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// ===================================
// Utility Functions for Adding Adventures
// ===================================

/**
 * Add a new adventure to the blog
 * Call this function to programmatically add new adventures
 * 
 * @param {Object} adventure - The adventure object with all details
 * @returns {boolean} - Success status
 */
function addAdventure(adventure) {
    // Validate required fields
    if (!adventure.title || !adventure.date || !adventure.excerpt) {
        console.error('Adventure must include title, date, and excerpt');
        return false;
    }
    
    // Assign ID if not provided
    if (!adventure.id) {
        adventure.id = adventures.length + 1;
    }
    
    // Add to adventures array
    adventures.push(adventure);
    
    // Reload blog posts if on blog page
    if (document.getElementById('blog-container')) {
        loadBlogPosts();
    }
    
    console.log('Adventure added successfully!', adventure.title);
    return true;
}

/**
 * Example: How to add a new adventure programmatically
 * Uncomment and modify this example when you're ready to add your first adventure!
 */
/*
addAdventure({
    title: "Our Amazing Day at Big Ben! 🕐",
    date: "January 20, 2024",
    location: "Big Ben & Houses of Parliament",
    image: "https://example.com/big-ben-photo.jpg",
    excerpt: "Woof! Today was AMAZING! Lexi and I went to see the famous Big Ben. The giant clock tower goes BONG so loud, my big ears were ringing! But Lexi wasn't scared at all - she's so brave!",
    content: `
        <div class="adventure-full-story">
            <p class="narrator-voice">"Woof woof! Let me tell you about our incredible day at Big Ben!"</p>
            
            <p>Today started with so much excitement! Lexi had her green backpack all ready, packed with our map, some treats, and a little notebook to write down all the interesting things we learned.</p>
            
            <h3>First Impressions</h3>
            <p>When we first saw Big Ben, my jaw dropped! It's SO TALL - much taller than I imagined! Lexi hopped up on a wall (she can jump so high on her three legs!) to get a better view. She said, "Flo, that clock is amazing!" And she was right!</p>
            
            <h3>The Big BONG!</h3>
            <p>When the clock struck the hour, it was SO LOUD! BONG! BONG! BONG! My big ears were ringing! But you know what? Lexi didn't even flinch. She just sat there on her three legs, looking up at the tower with the biggest smile. That's my brave friend!</p>
            
            <h3>What We Learned</h3>
            <p>A friendly tour guide told us so many cool facts! Did you know Big Ben is actually the name of the bell inside the tower, not the tower itself? The tower is called the Elizabeth Tower! I felt so smart learning that.</p>
            
            <h3>The Best Part</h3>
            <p>The best part wasn't even the big clock. It was when Lexi and I sat by the River Thames, sharing our treats and watching the tower in the sunshine. Lexi said, "This is what friendship is about, Flo - sharing adventures together." I couldn't agree more!</p>
            
            <p class="highlight-text">Today reminded me that the best adventures aren't just about the places you visit, but about the friend you visit them with! 💕</p>
        </div>
    `,
    funFacts: [
        "Big Ben is actually the name of the bell inside, not the tower!",
        "The tower is officially called the Elizabeth Tower",
        "Big Ben weighs 13.5 tons - that's as heavy as 2 elephants!",
        "The clock tower is 316 feet (96 meters) tall",
        "The clock faces are 23 feet in diameter",
        "Big Ben has been keeping time since 1859 - over 160 years!"
    ]
});
*/

// ===================================
// Console Welcome Message
// ===================================
console.log('%c🐾 Welcome to Flo & Lexi\'s London Adventures! 🐾', 'color: #FF6B6B; font-size: 20px; font-weight: bold;');
console.log('%cFollow two best friends as they explore London!', 'color: #4ECDC4; font-size: 14px;');
console.log('%cTo add new adventures, edit the adventures array in js/main.js', 'color: #FFE66D; font-size: 12px;');
