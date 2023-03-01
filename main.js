(()=>{"use strict";(()=>{const n=document.querySelector("#content"),s=document.createElement("header");s.innerHTML='\n    <nav>\n    <h2>Ocean Basket</h2>\n    <a href="#" class="hamburger">\n      <span class="line line1"></span>\n      <span class="line line2"></span>\n      <span class="line line3"></span>\n    </a>\n    <ul class="links">\n      <li data-tab-target="#home"  class="tab red">Home</li>\n      <li data-tab-target="#menu" class="tab">Menu</li>\n      <li data-tab-target="#contact" class="tab">Contact us</li>\n    </ul>\n  </nav>',n.appendChild(s)})(),(()=>{const n=document.querySelector("#content"),s=document.createElement("div");s.classList.add("tab-content"),s.innerHTML='<div id="home" class="active" data-tab-content>\n    <div class="search-container">\n    <h2>Find a restaurant\n    </h2>\n    <div class="form-inner">\n        <input type="search" id="restaurant-term" placeholder="Search for city, area or restaurant..." autocomplete="off">\n        <button class="search">\n            <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <path d="M22.8607 22.8607L31.7243 31.7243" stroke="#2B2B2D" stroke-width="1.58621" stroke-linecap="round"></path>\n            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.862 25.3792C21.1182 25.3792 25.3792 21.1182 25.3792 15.862C25.3792 10.6057 21.1182 6.34473 15.862 6.34473C10.6057 6.34473 6.34473 10.6057 6.34473 15.862C6.34473 21.1182 10.6057 25.3792 15.862 25.3792Z" stroke="#2B2B2D" stroke-width="1.58621"></path>\n            </svg>\n            </button>\n            <div class="users_location" onclick="getLocation()"><svg enable-background="new 0 0 48 48" height="33px" version="1.1" viewBox="0 0 48 48" width="48px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Expanded"><g><g><path d="M24,47.759l-0.823-1.191C22.558,45.671,8,24.499,8,16C8,7.178,15.178,0,24,0s16,7.178,16,16     c0,8.499-14.558,29.671-15.177,30.568L24,47.759z M24,2c-7.72,0-14,6.28-14,14c0,6.787,10.885,23.555,14,28.214     C27.115,39.555,38,22.787,38,16C38,8.28,31.72,2,24,2z"></path></g><g><path d="M24,23c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,23,24,23z M24,11c-2.757,0-5,2.243-5,5s2.243,5,5,5     s5-2.243,5-5S26.757,11,24,11z"></path></g></g></g></svg></div>\n    </div>\n</div>\n<div class="location">\n<div class="text-right">\n    <h3>XXXXXXX</h3>\n    <span>2 Restaurants</span>\n</div>\n\n<div class="ob">\n    <div class="ob-swakop">\n    <img src="/dist/location-pics/OCean-Basket-Swakopmund-2-7c9gb0gkfh5yh7a6y3h2kxz2c.png" alt="">\n        <h3>Ocean Basket Swakop</h3><hr>\n              <span>The Swakop Mall, 123 Forest Drive, Forestville, Maine\n              </span>\n             <div class="time">\n              <span>Phone</span>\n              <span>+XXXXXXXXXX</span>\n              <span>Opening Times</span>\n              <span>11:30 - 21:00 (mon - sun)</span>\n          </div>\n    </div>\n    <div class="ob-windhoek">\n    <img src="/dist/location-pics/ocean-basket-windhoek-7c9gazx6dmdtrhh4i9ed8vfes.png" alt="">\n              <h3>Ocean Basket The Grove</h3><hr>\n              <span>The Grove Mall, 456 Hills Boulevard, Hillsville, Saint\n              </span>\n             <div class="time">\n              <span>Phone</span>\n              <span>+XXXXXXXXXX</span>\n              <span>Opening Times</span>\n              <span>11:00 - 20:00 (mon - sun)</span>\n          </div>\n          </div>\n  </div>\n  </div>\n  <footer>\n  <div class="footer1">\n  <div class="company">\n    <h3>More about company</h3>\n    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint distinctio dolores voluptate culpa eaque obcaecati, voluptatem sunt vitae consequuntur laborum.</p>\n    <p>-Emma Patricia, CEO</p>\n  </div>\n  <div class="connected">\n    <h3>Keep Connected</h3>\n      <div class="socials">\n        <i class="fa-brands fa-facebook" style="font-size: 2em;"></i>\n        <p>Like us on Facebook</p>\n      </div>\n      <div class="socials">\n        <i class="fa-brands fa-twitter" style="font-size: 2em;"></i>\n        <p>Follow us on Twitter</p>\n      </div>\n      <div class="socials">\n        <i class="fa-brands fa-google-plus" style="font-size: 2em;"></i>\n        <p>Add us on Google Plus</p>\n      </div>\n      <div class="socials">\n        <i class="fa-brands fa-pinterest" style="font-size: 2em;"></i>\n        <p>Follow us on Pinterest</p>\n      </div>\n  </div>\n\n  <div class="info">\n    <h3>Contact Information</h3>\n    <div class="email">\n      <i class="fa-solid fa-envelope" style="font-size: 1.5em;"></i>\n      <p>contact@example.com</p>\n    </div>\n  </div>\n</div>\n<div class="footer2">\n  <p>© Copyright 2023</p>\n    <div class="others">\n      <div class="other1">\n        <p>Company Information</p>\n      </div>\n      <div class="other1">\n        <p>Privacy Policy</p>\n      </div>\n      <div class="other1">\n        <p>Terms & Conditions </p>\n      </div>\n    </div>\n</div>\n</footer>\n</div>',n.appendChild(s)})(),(()=>{const n=document.querySelector("#content"),s=document.createElement("div");s.setAttribute("id","menu"),s.setAttribute("data-tab-content",""),s.innerHTML='\n    <div class="hero">\n    <div class="menu-header">\n        <h3>Menu</h3>\n        <p>our special meals</p>\n    </div>\n    <div class="list">\n    <div class="list-1">\n    <img src="/dist/meals/fishandchips_413x549-7bk06tn9p4g69tt8fe4wvkjcc.jpeg" alt="">\n        <div class="prices">\n        <p>Fish & amp; Chips</p>\n        <p>$8</p>\n    </div>\n    </div>\n    <div class="list-2">\n    <img src="/dist/meals/platter-for-2-7c2g6imsfvj2lw03nem43qqy4.png" alt="">\n        <div class="prices">\n        <p>Platter for 2</p>\n        <p>$35</p>\n    </div>\n    </div>\n    <div class="list-3">\n    <img src="/dist/meals/prawn_mussel_413x549-7bk06twyq1u8moprnb69jlt64.jpeg" alt="">\n        <div class="prices">\n        <p>Prawn & Mussel combo</p>\n        <p>$13</p>\n    </div>\n    </div>\n    <div class="list-4">\n    <img src="/dist/meals/fusion-crunch-v2-7c2g85m1303etvx0tdu6bhj3g.png" alt="">\n        <div class="prices">\n        <p>Fusion Crunch Platter</p>\n        <p>$10</p>\n    </div>\n    </div>\n    <div class="list-5">\n    <img src="/dist/meals/Futomaki-7c2g85vq3xhh6qtk1avizisx8.png" alt="">\n        <div class="prices">\n        <p>Futomaki</p>\n        <p>$3</p>\n    </div>\n    </div>\n    <div class="list-6">\n    <img src="/dist/meals/sushi-for-2-7c2g85cc22pch10hlgstng99o.png" alt="">\n        <div class="prices">\n        <p>Sushi for 2</p>\n        <p>$15</p>\n    </div>\n    </div>\n</div>\n  </div>',n.appendChild(s)})();const n=document.querySelectorAll("[data-tab-target]"),s=document.querySelectorAll("[data-tab-content]"),e=document.querySelector(".hamburger");e.addEventListener("click",(()=>{document.querySelector("ul").classList.toggle("active"),e.classList.toggle("toggle")})),n.forEach((e=>e.addEventListener("click",(()=>{const t=document.querySelector(e.dataset.tabTarget);s.forEach((n=>{n.classList.remove("active")})),n.forEach((n=>{n.classList.remove("red")})),e.classList.add("red"),t.classList.add("active")})))),document.querySelector(".order-now").addEventListener("click",(()=>{document.querySelector('[data-tab-target="#menu"]').classList.add("red")})),document.querySelector('[type="submit"]').addEventListener("click",(()=>{document.querySelector("form").reset()})),console.log(`Today is ${(new Date).toUTCString()}. Very nice.`)})();