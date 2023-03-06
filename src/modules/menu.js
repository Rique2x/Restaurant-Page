const renderMenuPage = (() => {
    //container
    const contentContainer = document.querySelector("#content");
    const menu = document.createElement("div");
    menu.setAttribute("id", "menu");
    menu.setAttribute("data-tab-content", "");
    menu.innerHTML = `
    <div class="hero">
    <div class="menu-header">
        
        <p>our special meals</p>
    </div>
    <div class="list">
    <div class="list-1">
    <img src="./meals/fishandchips_413x549-7bk06tn9p4g69tt8fe4wvkjcc.jpeg" alt="">
        <div class="prices">
        <p>Fish & amp; Chips</p>
        <p>$8</p>
    </div>
    </div>
    <div class="list-2">
    <img src="./meals/platter-for-2-7c2g6imsfvj2lw03nem43qqy4.png" alt="">
        <div class="prices">
        <p>Platter for 2</p>
        <p>$35</p>
    </div>
    </div>
    <div class="list-3">
    <img src="./meals/prawn_mussel_413x549-7bk06twyq1u8moprnb69jlt64.jpeg" alt="">
        <div class="prices">
        <p>Prawn & Mussel combo</p>
        <p>$13</p>
    </div>
    </div>
    <div class="list-4">
    <img src="./meals/fusion-crunch-v2-7c2g85m1303etvx0tdu6bhj3g.png" alt="">
        <div class="prices">
        <p>Fusion Crunch Platter</p>
        <p>$10</p>
    </div>
    </div>
    <div class="list-5">
    <img src="./meals/Futomaki-7c2g85vq3xhh6qtk1avizisx8.png" alt="">
        <div class="prices">
        <p>Futomaki</p>
        <p>$3</p>
    </div>
    </div>
    <div class="list-6">
    <img src="./meals/sushi-for-2-7c2g85cc22pch10hlgstng99o.png" alt="">
        <div class="prices">
        <p>Sushi for 2</p>
        <p>$15</p>
    </div>
    </div>
</div>
  </div>`;
  
    contentContainer.appendChild(menu);
  })();
  
  export { renderMenuPage };