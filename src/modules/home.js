const renderHomePage = (() => {
    //container
    const contentContainer = document.querySelector("#content");
  
    const home = document.createElement("div");
    home.classList.add("tab-content")
    home.innerHTML = `<div id="home" class="active" data-tab-content>
    <div class="search-container">
    <h2>Find a restaurant
    </h2>
    <div class="form-inner">
        <input type="search" id="restaurant-term" placeholder="Search for city, area or restaurant..." autocomplete="off">
        <button class="search">
            <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.8607 22.8607L31.7243 31.7243" stroke="#2B2B2D" stroke-width="1.58621" stroke-linecap="round"></path>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.862 25.3792C21.1182 25.3792 25.3792 21.1182 25.3792 15.862C25.3792 10.6057 21.1182 6.34473 15.862 6.34473C10.6057 6.34473 6.34473 10.6057 6.34473 15.862C6.34473 21.1182 10.6057 25.3792 15.862 25.3792Z" stroke="#2B2B2D" stroke-width="1.58621"></path>
            </svg>
            </button>
            <div class="users_location" onclick="getLocation()"><svg enable-background="new 0 0 48 48" height="33px" version="1.1" viewBox="0 0 48 48" width="48px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Expanded"><g><g><path d="M24,47.759l-0.823-1.191C22.558,45.671,8,24.499,8,16C8,7.178,15.178,0,24,0s16,7.178,16,16     c0,8.499-14.558,29.671-15.177,30.568L24,47.759z M24,2c-7.72,0-14,6.28-14,14c0,6.787,10.885,23.555,14,28.214     C27.115,39.555,38,22.787,38,16C38,8.28,31.72,2,24,2z"></path></g><g><path d="M24,23c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,23,24,23z M24,11c-2.757,0-5,2.243-5,5s2.243,5,5,5     s5-2.243,5-5S26.757,11,24,11z"></path></g></g></g></svg></div>
    </div>
</div>
<div class="location">
<div class="text-right">
    <h3>XXXXXXX</h3>
    <span>2 Restaurants</span>
</div>

<div class="ob">
    <div class="ob-swakop">
    <img src="/dist/location-pics/OCean-Basket-Swakopmund-2-7c9gb0gkfh5yh7a6y3h2kxz2c.png" alt="">
        <h3>Ocean Basket Swakop</h3><hr>
              <span>The Swakop Mall, 123 Forest Drive, Forestville, Maine
              </span>
             <div class="time">
              <span>Phone</span>
              <span>+XXXXXXXXXX</span>
              <span>Opening Times</span>
              <span>11:30 - 21:00 (mon - sun)</span>
          </div>
    </div>
    <div class="ob-windhoek">
    <img src="/dist/location-pics/ocean-basket-windhoek-7c9gazx6dmdtrhh4i9ed8vfes.png" alt="">
              <h3>Ocean Basket The Grove</h3><hr>
              <span>The Grove Mall, 456 Hills Boulevard, Hillsville, Saint
              </span>
             <div class="time">
              <span>Phone</span>
              <span>+XXXXXXXXXX</span>
              <span>Opening Times</span>
              <span>11:00 - 20:00 (mon - sun)</span>
          </div>
          </div>
  </div>
  </div>
</div>`;
  
    contentContainer.appendChild(home);
  })();
  
  export { renderHomePage };