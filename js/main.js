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
    // TWENTIETH adventure - PICCADILLY CIRCUS!!! 🎭
    {
        id: 28,
        title: "Our Twentieth Adventure: Piccadilly Circus! 🎭",
        location: "Piccadilly Circus, West End, London",
        image: "https://www.genspark.ai/api/files/s/Ki2PZMEI",
        excerpt: "Lights, action, London! We visit the dazzling Piccadilly Circus with its famous LED screens, the Eros statue, and amazing street performers! Discovering that life is about embracing the moment! 🎭✨",
        url: "adventure-20-piccadilly-circus.html"
    },
    
    // NINETEENTH adventure - THAMES RIVER CRUISE!!! 🚢
    {
        id: 27,
        title: "Our Nineteenth Adventure: Thames River Cruise! 🚢",
        location: "River Thames, London",
        image: "https://www.genspark.ai/api/files/s/LtfVUpfi",
        excerpt: "All aboard! We sail down the historic River Thames, seeing London's famous landmarks from the water! A peaceful journey teaching us that going with the flow brings its own magic! 🚢✨",
        url: "adventure-19-thames-cruise.html"
    },
    
    // EIGHTEENTH adventure - PORTOBELLO ROAD MARKET!!! 🎨
    {
        id: 26,
        title: "Our Eighteenth Adventure: Portobello Road Market! 🎨",
        location: "Portobello Road, Notting Hill, London",
        image: "https://www.genspark.ai/api/files/s/HNOVzu6k",
        excerpt: "Treasure hunting time! We explore the colorful, world-famous Portobello Road Market—discovering antiques, vintage finds, amazing street food, and learning that the best treasures are the memories we make! 🎨✨",
        url: "adventure-18-portobello-road.html"
    },
    
    // SEVENTEENTH adventure - ST PAUL'S CATHEDRAL!!! ⛪
    {
        id: 25,
        title: "Our Seventeenth Adventure: St Paul's Cathedral! ⛪",
        location: "St Paul's Cathedral, City of London",
        image: "https://www.genspark.ai/api/files/s/ZlV1psWX",
        excerpt: "528 steps to the top! We climb St Paul's magnificent dome, discover the Whispering Gallery, and learn that every challenge is easier when tackled together! Worth every single step! ⛪✨",
        url: "adventure-17-st-pauls-cathedral.html"
    },
    
    // SIXTEENTH adventure - MEETING THE KING!!! 👑
    {
        id: 24,
        title: "Our Sixteenth Adventure: Meeting The King! 👑",
        location: "Buckingham Palace, London",
        image: "https://www.genspark.ai/api/files/s/ntp2tGEZ",
        excerpt: "THE ULTIMATE ADVENTURE! After all our London journeys, we finally meet King Charles for royal tea at Buckingham Palace! A magical day filled with kindness, inspiration, and life lessons we'll treasure forever! 👑✨",
        url: "adventure-16-meeting-the-king.html"
    },
    
    // FIFTEENTH adventure - Shopping Spree Overview!
    {
        id: 23,
        title: "Our Fifteenth Adventure: Shopping Spree! 🛍️",
        location: "Hamleys, Disney Store, Harrods & Oxford Street",
        image: "https://www.genspark.ai/api/files/s/XjRKAkuw",
        excerpt: "After our royal invitation, we need OUTFITS! Join us as we visit London's most famous stores: Hamleys, Disney Store, Harrods, and Oxford Street! The ultimate shopping adventure! 🛍️👗",
        url: "adventure-15-shopping-spree.html"
    },
    
    // FIFTEENTH adventure - Shopping Spree Part 1 - Hamleys!
    {
        id: 22,
        title: "Shopping Spree Part 1: Hamleys - Toy Wonderland! 🎪",
        location: "Hamleys Toy Store, Regent Street, London",
        image: "https://www.genspark.ai/api/files/s/fPwmLafx",
        excerpt: "SEVEN FLOORS OF TOYS! We explored the world's most famous toy store (since 1760!), watched magic shows, tried EVERYTHING, and learned that joy never gets old! 🎪✨",
        url: "adventure-15-shopping-spree-part-1-hamleys.html"
    },
    
    // FIFTEENTH adventure - Shopping Spree Part 2 - Disney Store!
    {
        id: 21,
        title: "Shopping Spree Part 2: Disney Store - Movie Magic! 🏰",
        location: "Disney Store, 350-352 Oxford Street, London",
        image: "https://www.genspark.ai/api/files/s/Byx4MilD",
        excerpt: "Step into a world of Disney magic! Giant character displays, princess dress-up, and ELSA AND ANNA singing! Dreams really do come true in this magical store! ✨👑",
        url: "adventure-15-shopping-spree-part-2-disney-store.html"
    },
    
    // FIFTEENTH adventure - Shopping Spree Part 3 - Harrods!
    {
        id: 20,
        title: "Shopping Spree Part 3: Harrods - Luxury & Lunch! 👑",
        location: "Harrods, Knightsbridge, London",
        image: "https://www.genspark.ai/api/files/s/Gz8rsncZ",
        excerpt: "IS THIS A PALACE?! 330 departments! Egyptian escalators! We had ROYAL LUNCH in the Food Hall and learned that you can window shop anywhere - even at the fanciest store in London! 👑✨",
        url: "adventure-15-shopping-spree-part-3-harrods.html"
    },
    
    // FIFTEENTH adventure - Shopping Spree Part 4 - Oxford Street!
    {
        id: 19,
        title: "Shopping Spree Part 4: Oxford Street - Royal Outfits! 👗✨",
        location: "Oxford Street, London",
        image: "https://www.genspark.ai/api/files/s/0lhS6Ep4",
        excerpt: "We found them! The PERFECT royal outfits! Flo's elegant blue jacket with her signature red bandana, and Lexi's sophisticated emerald green ensemble! We're palace-ready and still totally US! 👑✨",
        url: "adventure-15-shopping-spree-part-4-oxford-street.html"
    },
    
    // FOURTEENTH adventure - Hyde Park - A Royal Day!
    {
        id: 14,
        title: "Our Fourteenth Adventure: Hyde Park - A Royal Day! 👑",
        location: "Hyde Park, Central London",
        image: "https://www.genspark.ai/api/files/s/3U3UMDX5",
        excerpt: "Lexi saved me from a scary big dog! Then a ROYAL GUARD delivered an invitation from KING CHARLES inviting us to tea at the Palace! We need outfits! We need etiquette lessons! WE'RE HAVING TEA WITH THE KING! 👑🫖",
        url: "adventure-14-hyde-park.html"
    },
    
    // THIRTEENTH adventure - Natural History Museum
    {
        id: 13,
        title: "Our Thirteenth Adventure: Natural History Museum! 🦕",
        location: "Natural History Museum, South Kensington, London",
        image: "https://www.genspark.ai/api/files/s/q1CbiwFj",
        excerpt: "LEXI! IS THAT A REAL DINOSAUR?! We discovered 80 MILLION specimens, met Hope the blue whale (25 meters long!), saw Dippy the Diplodocus, watched a volcano erupt, found space rocks, and learned we're all part of Earth's magnificent story! 🦕✨",
        url: "adventure-13-natural-history-museum.html"
    },
    
    // TWELFTH adventure - Camden Market
    {
        id: 12,
        title: "Our Twelfth Adventure: Camden Market! 🎸",
        location: "Camden Market, Camden Town, London",
        image: "https://www.genspark.ai/api/files/s/7XxDuvyp",
        excerpt: "This place is SO cool, Lexi! Look at all the colors and music! We explored vintage fashion, punk culture, street food from around the world, and learned that being different is something to CELEBRATE! 🎸✨",
        url: "adventure-12-camden-market.html"
    },
    
    // ELEVENTH adventure - Borough Market
    {
        id: 11,
        title: "Our Eleventh Adventure: Borough Market! 🧀",
        location: "Borough Market, Southwark, London",
        image: "https://www.genspark.ai/api/files/s/E7sOmhMK",
        excerpt: "Who cares, Lexi! Let's just get ALL the cheese! We explored London's oldest market (over 1000 years old!), discovered mountains of artisan cheese, tried gourmet street food, and learned that the 'one stomach' rule applies to cheese too! 🧀✨",
        url: "adventure-11-borough-market.html"
    },
    
    // TENTH adventure - Chinatown
    {
        id: 10,
        title: "Our Tenth Adventure: Chinatown! 🥟",
        location: "Chinatown, West End, London",
        image: "https://www.genspark.ai/api/files/s/pu3EpRBr",
        excerpt: "These fluffy buns are calling my name! We discovered 80+ restaurants (but only ONE stomach!), tried century eggs (time-machine eggs!), walked through beautiful red gates, and learned that quality beats quantity! 🥟✨",
        url: "adventure-10-chinatown.html"
    },
    
    // NINTH adventure - Trafalgar Square
    {
        id: 9,
        title: "Our Ninth Adventure: Trafalgar Square! 🦁",
        location: "Trafalgar Square, City of Westminster",
        image: "https://www.genspark.ai/api/files/s/ag8CxKSG",
        excerpt: "But Lexi, the pigeons LOVE playing chase with me! We discovered Nelson's Column (the world's tallest scratching post!), met the magnificent lion guardians, and learned that best friends balance each other perfectly! 🦁✨",
        url: "adventure-9-trafalgar-square.html"
    },
    
    // EIGHTH adventure - London Eye
    {
        id: 8,
        title: "Our Eighth Adventure: The London Eye! 🎡",
        location: "South Bank, River Thames",
        image: "https://www.genspark.ai/api/files/s/a3aaiDfd",
        excerpt: "LEXI! It's a GIANT WHEEL in the sky! We soared 135 meters high in a glass pod and saw ALL of London from above! Big Ben, Buckingham Palace, the Tower - we could see every adventure we've had together! 🎡✨",
        url: "adventure-8-london-eye.html"
    },
    
    // SEVENTH adventure - Hop-On Hop-Off Bus Tour
    {
        id: 7,
        title: "Our Seventh Adventure: Hop-On Hop-Off Bus Tour! 🚌",
        location: "All Around London - The Best Sightseeing Tour!",
        image: "https://www.genspark.ai/api/files/s/kolSxNjt",
        excerpt: "Why walk when we can go by bus! We discovered the BEST way to see London - from the top deck of a Hop-On Hop-Off tour bus! We could hop off whenever we wanted and learn amazing facts along the way! 🚌✨",
        url: "adventure-7-hop-on-hop-off.html"
    },
    
    // SIXTH adventure - Buckingham Palace
    {
        id: 6,
        title: "Our Sixth Adventure: Buckingham Palace! 👑",
        location: "Buckingham Palace, Westminster, London",
        image: "https://www.genspark.ai/api/files/s/EiJQ74L1",
        excerpt: "The KING?! Can I meet him? Can I? Can I?! We walked to Buckingham Palace where the King lives! With 775 rooms, 40,000 light bulbs, and the amazing Changing of the Guard ceremony, this was our most ROYAL adventure yet! 👑✨",
        url: "adventure-6-buckingham-palace.html"
    },
    
    // FIFTH adventure - Leicester Square
    {
        id: 5,
        title: "Our Fifth Adventure: Leicester Square! 🎬",
        location: "Leicester Square, West End, London",
        image: "images/leicester-square-cinema.jpg",
        excerpt: "Can we watch a film? Can we? Can we?! We discovered London's cinema capital with red carpets, movie premieres, and the amazing Charlie Chaplin statue! Lights, camera, adventure! 🎬✨",
        url: "adventure-5-leicester-square.html"
    },
    
    // FOURTH adventure - The Houses of Parliament
    {
        id: 4,
        title: "Our Fourth Adventure: The Houses of Parliament! 🏛️",
        location: "Palace of Westminster, London",
        image: "https://www.genspark.ai/api/files/s/aUM9VdIS",
        excerpt: "After Big Ben, we walked to the magnificent Palace of Westminster where laws are made! With over 1,000 rooms and MPs making important decisions, we learned how democracy works! 🏛️✨",
        url: "adventure-4-houses-of-parliament.html"
    },
    
    // THIRD adventure - Big Ben & Elizabeth Tower
    {
        id: 3,
        title: "Our Third Adventure: Big Ben & Elizabeth Tower! 🕐",
        location: "Westminster, London",
        image: "images/big-ben-flo-lexi-scene1.jpg",
        excerpt: "BONG! BONG! BONG! The giant clock tower goes BONG so loud, my big ears were ringing! But Lexi wasn't scared at all - she's so brave! Come see what we discovered about this famous London landmark! 🕐✨",
        url: "adventure-3-big-ben.html"
    },
    
    // SECOND adventure - Tower of London
    {
        id: 2,
        title: "Our Second Adventure: The Tower of London! 🏰",
        location: "Historic Fortress on the Thames",
        image: "images/tower-of-london.jpg",
        excerpt: "An ancient fortress with sparkling Crown Jewels, legendary ravens, and brave Beefeaters! We can't wait to share this adventure with you! 👑🐦‍⬛",
        url: "adventure-2-tower-of-london.html"
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
