# 🚍 FLO & LEXI - COMPLETE PROJECT - COPY & PASTE GUIDE

## This file contains ALL the code for your website
## Simply copy each section and create the files manually on your computer

---
---

## FILE 1: index.html
## Copy everything between the ==== lines

====START index.html====
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flo & Lexi's London Adventures | Best Friends Explore London</title>
    <meta name="description" content="Follow the heartwarming adventures of Flo the terrier and Lexi the brave three-legged calico cat as they explore the magical city of London together!">
    <link rel="stylesheet" href="css/style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300;400;500;600;700&family=Patrick+Hand&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css">
</head>
<body>
    <!-- Navigation -->
    <nav class="navbar">
        <div class="container">
            <div class="nav-brand">
                <i class="fas fa-paw"></i>
                <span>Flo & Lexi's Adventures</span>
            </div>
            <ul class="nav-menu">
                <li><a href="index.html" class="active">Home</a></li>
                <li><a href="about.html">About Us</a></li>
                <li><a href="blog.html">Adventures</a></li>
            </ul>
            <button class="mobile-menu-toggle" aria-label="Toggle menu">
                <i class="fas fa-bars"></i>
            </button>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero">
        <div class="hero-background">
            <img src="https://www.genspark.ai/api/files/s/Es8ACOej" alt="Flo and Lexi in front of London landmarks">
        </div>
        <div class="hero-content">
            <div class="container">
                <div class="hero-text">
                    <img src="https://www.genspark.ai/api/files/s/Zbm2YnFN" alt="Flo & Lexi's Big Adventure" class="title-image">
                    <h1 class="hero-title">Welcome to Our London Adventures!</h1>
                    <p class="hero-subtitle">Join Flo the terrier and Lexi the brave three-legged cat as they explore the magical city of London together!</p>
                    <div class="hero-buttons">
                        <a href="about.html" class="btn btn-primary">Meet Flo & Lexi</a>
                        <a href="blog.html" class="btn btn-secondary">Read Our Adventures</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Introduction Section -->
    <section class="introduction">
        <div class="container">
            <div class="intro-grid">
                <div class="intro-image">
                    <img src="https://www.genspark.ai/api/files/s/i2cy7lRV" alt="Meet Flo and Lexi">
                    <div class="paw-prints">
                        <i class="fas fa-paw"></i>
                        <i class="fas fa-paw"></i>
                        <i class="fas fa-paw"></i>
                    </div>
                </div>
                <div class="intro-text">
                    <h2>Hello from London! 🐾</h2>
                    <p class="narrator-voice">"Woof! I'm Flo, and this is my best friend Lexi!"</p>
                    <p>We're the best of friends on the most amazing adventure through London! I'm a small terrier with very big ears (the better to hear all the exciting sounds of the city!), and Lexi is the bravest, most feisty calico cat you'll ever meet.</p>
                    <p>Lexi might have three legs instead of four after a brave battle with an accident, but that doesn't slow her down one bit! She's still the most adventurous cat in all of London, and she carries all our treasures in her special green backpack.</p>
                    <p class="highlight-text">Together, we're exploring every magical corner of this incredible city, from Big Ben to Buckingham Palace, and we can't wait to share our adventures with you!</p>
                    <a href="about.html" class="btn btn-accent">Learn More About Us</a>
                </div>
            </div>
        </div>
    </section>

    <!-- Featured Adventures Preview -->
    <section class="featured-adventures">
        <div class="container">
            <h2 class="section-title">Our London Adventures</h2>
            <p class="section-subtitle">Follow along as we discover the most amazing places in London!</p>
            
            <div class="adventures-grid">
                <div class="adventure-card">
                    <div class="adventure-icon">
                        <i class="fas fa-landmark"></i>
                    </div>
                    <h3>Big Ben & Parliament</h3>
                    <p>The giant clock tower that goes BONG! We learned all about British history here.</p>
                    <span class="coming-soon">Adventure Coming Soon!</span>
                </div>
                
                <div class="adventure-card">
                    <div class="adventure-icon">
                        <i class="fas fa-crown"></i>
                    </div>
                    <h3>Buckingham Palace</h3>
                    <p>Where the King lives! We watched the guards with their tall fuzzy hats.</p>
                    <span class="coming-soon">Adventure Coming Soon!</span>
                </div>
                
                <div class="adventure-card">
                    <div class="adventure-icon">
                        <i class="fas fa-chess-rook"></i>
                    </div>
                    <h3>Tower of London</h3>
                    <p>An ancient castle with ravens and crown jewels. Even Lexi was impressed!</p>
                    <span class="coming-soon">Adventure Coming Soon!</span>
                </div>
                
                <div class="adventure-card">
                    <div class="adventure-icon">
                        <i class="fas fa-ferris-wheel"></i>
                    </div>
                    <h3>London Eye</h3>
                    <p>The giant wheel that touches the sky! The views were pawsitively amazing.</p>
                    <span class="coming-soon">Adventure Coming Soon!</span>
                </div>
                
                <div class="adventure-card">
                    <div class="adventure-icon">
                        <i class="fas fa-theater-masks"></i>
                    </div>
                    <h3>Leicester Square</h3>
                    <p>Bright lights, street performers, and so much excitement in the heart of London!</p>
                    <span class="coming-soon">Adventure Coming Soon!</span>
                </div>
                
                <div class="adventure-card">
                    <div class="adventure-icon">
                        <i class="fas fa-map-marked-alt"></i>
                    </div>
                    <h3>More Adventures</h3>
                    <p>So many more places to explore! Check back often for new stories.</p>
                    <span class="coming-soon">Stay Tuned!</span>
                </div>
            </div>
            
            <div class="cta-section">
                <a href="blog.html" class="btn btn-primary btn-large">Start Reading Our Adventures</a>
            </div>
        </div>
    </section>

    <!-- Friendship Section -->
    <section class="friendship-section">
        <div class="container">
            <div class="friendship-grid">
                <div class="friendship-text">
                    <h2>A Special Friendship 💕</h2>
                    <p class="narrator-voice">"Lexi is my hero and my best friend!"</p>
                    <p>When Lexi had her accident and lost her leg, I was worried. But she showed me what true bravery means! Within days, she was hopping around, ready for new adventures.</p>
                    <p>Now we explore London together, proving that nothing can stop true friends when they're side by side. Lexi might hop on three legs, but she can climb higher, jump further, and explore deeper than any four-legged cat I know!</p>
                    <p class="inspiration-text">✨ Our adventures teach us that being different makes you special, being brave means trying even when you're scared, and having a best friend by your side makes everything better! ✨</p>
                </div>
                <div class="friendship-image">
                    <img src="https://www.genspark.ai/api/files/s/LzdXE0Ir" alt="Flo and Lexi cuddling together">
                    <div class="heart-decoration">
                        <i class="fas fa-heart"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3><i class="fas fa-paw"></i> Flo & Lexi's Adventures</h3>
                    <p>Following two best friends as they explore the magical city of London, one paw print at a time!</p>
                </div>
                <div class="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="blog.html">Adventures</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>Follow Our Journey</h3>
                    <p>New adventures posted every 1-2 days!</p>
                    <p class="stay-tuned">🌟 Stay tuned for more amazing stories! 🌟</p>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2024 Flo & Lexi's London Adventures. Made with <i class="fas fa-heart"></i> and lots of tail wags!</p>
            </div>
        </div>
    </footer>

    <script src="js/main.js"></script>
</body>
</html>
====END index.html====

---
---

## Continue to DOWNLOAD-GUIDE-PART-2.md for more files...
## This is too large for one file, creating parts!

