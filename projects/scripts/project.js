
const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      
      // Change icon text
      if (navLinks.classList.contains('active')) {
        hamburger.textContent = '⛌'; // X symbol
      } else {
        hamburger.textContent = '☰'; // Hamburger symbol
      }
    });

   // 1. Create and append CSS styles
const style = document.createElement('style');
style.textContent = `
html, body {
    margin: 0;
    padding: 0;
}
    *, *::before, *::after {
    box-sizing: border-box;
}


.callout {
    color: #023859;
    background-color: #F2DC6B;
    padding: 1rem 0.5rem;
   width: 100%;
    margin:0;
}
.callout h1 {
    font-size: 3rem;
    margin: 0 auto;
}
.whyus {
    padding: 2rem;
    color: #F2DC6B;
}
.whyus p {
    margin: -0.2rem;
    color: #DAF2C2;
}
.whyus h2 {
    font-size: 1.5rem;
}
.work {
    width: 100%;
    object-fit: cover;
}
.clientreviews {
    color: #DAF2C2;
    padding: 50px;
}
.clientreviews h1 {
    display: block;
    width: 100%;
    color: #F2DC6B;
}
.clientreviews p {
    display: block;
    flex: 1;
    font-size: 1.5rem;
}
@media (min-width: 768px) {
    .callout {
        padding: 5rem;
    }
    .callout h1 {
        font-size: 6rem;
    }
    .callout h1, .whyus {
        width: 950px;
        margin: 0 auto;
        padding: 70px 0;
    }
    .whyus {
        display: flex;
        flex-wrap: wrap;
    }
    .whyus p {
        text-align: left;
        line-height: 1.3;
        padding-bottom: 20px;
    }
    .whyus h2 {
        font-size: 2rem;
    }
    #whychoose {
        width: 50%;
    }
    .clientreviews {
        display: flex;
        flex-wrap: wrap;
    }
}
`;
document.head.appendChild(style);

 // Home page content
 const homeContent = `
 <section class="callout">
     <h1>Struggling to Stand <br>Out Online?</h1>
     <h3>Lack of clarity. Weak branding. Poor UX. Confusing layouts. Inconsistent visuals. Outdated design.</h3>
     <p>We help elevate your digital presence through strong branding and sleek, intuitive web experiences tailored to your audience.</p>
 </section>

 <section class="whyus">
     <div><h1>Why Choose Us</h1>
         <p>With a strong foundation in graphic design and evolving web development expertise, we craft visuals that speak and websites that convert. Our work is clean, consistent, and client-focused—from moodboard to final build.</p>
     </div>
     <div id="whychoose">
         <h2>How We Help: Branding</h2>
         <p>We create logos, identity systems, and visual language that resonate. Our branding builds recognition, strengthens trust, and communicates your value — whether you're starting fresh or rebranding.</p>
     </div>
     <div id="whychoose">
         <h2>How We Help: Web Design</h2>
         <p>We design responsive, user-friendly websites that blend form and function. From wireframe to launch, we ensure every page reflects your brand and meets your goals.</p>
     </div>
 </section>

 <section class="work">
     <picture>
         <source media="(min-width: 850px)" srcset="images/large01.webp">
         <source media="(min-width: 650px)" srcset="images/medium01.webp">
         <img src="images/small01.webp" alt="Work" loading="lazy">
     </picture>
     <picture>
         <source media="(min-width: 850px)" srcset="images/large02.webp">
         <source media="(min-width: 650px)" srcset="images/medium02.webp">
         <img src="images/small02.webp" alt="Work" loading="lazy">
     </picture>
     <picture>
         <source media="(min-width: 850px)" srcset="images/large03.webp">
         <source media="(min-width: 650px)" srcset="images/medium03.webp">
         <img src="images/small03.webp" alt="Work" loading="lazy">
     </picture>
     <picture>
         <source media="(min-width: 850px)" srcset="images/large04.webp">
         <source media="(min-width: 650px)" srcset="images/medium04.webp">
         <img src="images/small01.webp" alt="Work" loading="lazy">
     </picture>
 </section>

 <section class="clientreviews">
     <h1>What Clients Say</h1>
     <p>"Fast, creative, and easy to work with. Nailed the look on the first try!"</p>
     <p>"Understood our brand instantly. The new site looks and works amazing!"</p>
     <p>"Professional and responsive throughout. Great design instincts and attention to detail."</p>
     <p>"Transformed our brand with bold visuals and a polished web presence."</p>
 </section>
`;

// Stand Out page content
const standoutContent = `
 <section class="callout01">
     <h1>Attention wins trust, <br>drives decisions, sells.</h1>
     <h3>We cut through the noise with impactful branding and design that makes your business instantly recognizable and memorable—online and off.</h3>
 </section>

 <section class="whyus">
     <div class="third">
         <div>
             <picture>
                 <source media="(min-width:100%)" srcset="images/large11.webp">
                 <source media="(min-width:100%)" srcset="images/medium11.webp">
                 <img src="images/small11.webp" alt="Work" loading="lazy">
             </picture>
         </div>
         <div class="text-copy">
             <h2>Presence: Bold. Clear. Consistent. Cohesive. Recognizable. Confident.</h2>
             <p>We create identity systems that unify your messaging across all platforms, keeping you instantly familiar in the eyes of your audience.</p>
         </div>
     </div>

     <div class="third">
         <div class="text-copy">
             <h2>Point of Difference: Unique. Strategic. Memorable. Distinct. Relevant. Focused.</h2>
             <p>Your brand deserves more than a logo. We craft brand assets with personality and purpose to stand out in any market.</p>
         </div>
         <picture>
             <source media="(min-width:100%)" srcset="images/large12.webp">
             <source media="(min-width:100%)" srcset="images/medium12.webp">
             <img src="images/small12.webp" alt="Work" loading="lazy">
         </picture>
     </div>

     <div class="third">
         <picture>
             <source media="(min-width:100%)" srcset="images/large13.webp">
             <source media="(min-width:100%)" srcset="images/medium13.webp">
             <img src="images/small13.webp" alt="Work" loading="lazy">
         </picture>
         <div class="text-copy">
             <h2>Image is Everything: Visual. First. Lasting. Emotional. Perceptive. Powerful.</h2>
             <p>People buy with their eyes. We design brand visuals that communicate value before a single word is spoken.</p>
         </div>
     </div>
 </section>

 <section class="clientreviews">
     <h1>Client Testimonials</h1>
     <p>“Got our vision quickly—brought it to life better than we imagined!”</p>
     <p>“The rebrand got immediate praise from clients and boosted our confidence.”</p>
     <p>“Clean, sharp work. Totally transformed how people see our business.”</p>
     <p>“Creative, reliable, and detail-driven. That’s why we keep coming back.”</p>
 </section>
`;
// Load Home section by default when the page loads
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("main-content").innerHTML = homeContent;
  });

  // Event handlers
document.getElementById("home").addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById("main-content").innerHTML = homeContent;
  });
  
  document.getElementById("standout").addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById("main-content").innerHTML = standoutContent;
  });
  
  // Load Home section by default
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("main-content").innerHTML = homeContent;
  });
  
  



document.getElementById("standout").addEventListener("click", function (e) {
    e.preventDefault(); 

    // Get the <main> element
    const main = document.getElementById("main-content");

   
    main.innerHTML = `
      <section class="callout01">
          <h1>Attention wins trust, <br>drives decisions, sells.</h1>
          <h3>We cut through the noise with impactful branding and design that makes your business instantly recognizable and memorable—online and off.</h3>
      </section>

      <section class="whyus">
          <div class="third">
              <div>
                  <picture>
                      <source media="(min-width:100%)" srcset="images/large11.webp">
                      <source media="(min-width:100%)" srcset="images/medium11.webp">
                      <img src="images/small11.webp" alt="Work" loading="lazy">
                  </picture>
              </div>
              <div class="text-copy">
                  <h2>Presence: Bold. Clear. Consistent. Cohesive. Recognizable. Confident.</h2>
                  <p>We create identity systems that unify your messaging across all platforms, keeping you instantly familiar in the eyes of your audience.</p>
              </div>
          </div>

          <div class="third">
              <div class="text-copy">
                  <h2>Point of Difference: Unique. Strategic. Memorable. Distinct. Relevant. Focused.</h2>
                  <p>Your brand deserves more than a logo. We craft brand assets with personality and purpose to stand out in any market.</p>
              </div>
              <picture>
                  <source media="(min-width:100%)" srcset="images/large12.webp">
                  <source media="(min-width:100%)" srcset="images/medium12.webp">
                  <img src="images/small12.webp" alt="Work" loading="lazy">
              </picture>
          </div>

          <div class="third">
              <picture>
                  <source media="(min-width:100%)" srcset="images/large13.webp">
                  <source media="(min-width:100%)" srcset="images/medium13.webp">
                  <img src="images/small13.webp" alt="Work" loading="lazy">
              </picture>
              <div class="text-copy">
                  <h2>Image is Everything: Visual. First. Lasting. Emotional. Perceptive. Powerful.</h2>
                  <p>People buy with their eyes. We design brand visuals that communicate value before a single word is spoken.</p>
              </div>
          </div>
      </section>

      <section class="clientreviews">
          <h1>Client Testimonials</h1>
          <p>“Got our vision quickly—brought it to life better than we imagined!”</p>
          <p>“The rebrand got immediate praise from clients and boosted our confidence.”</p>
          <p>“Clean, sharp work. Totally transformed how people see our business.”</p>
          <p>“Creative, reliable, and detail-driven. That’s why we keep coming back.”</p>
      </section>
    `;
});