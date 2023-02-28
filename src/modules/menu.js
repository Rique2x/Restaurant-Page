const renderMenuPage = (() => {
    //container
    const contentContainer = document.querySelector("#content");
    const menu = document.createElement("div");
    menu.setAttribute("id", "menu");
    menu.setAttribute("data-tab-content", "");
    menu.innerHTML = `
    <div class="hero">
    <div class="menu-header">
        <h3>Menu</h3>
        <p>our special meals</p>
    </div>
    <div class="list">
    <div class="list-1">
    <img src="/dist/meals/fishandchips_413x549-7bk06tn9p4g69tt8fe4wvkjcc.jpeg" alt="">
        <div class="prices">
        <p>Fish & amp; Chips</p>
        <p>N$80</p>
    </div>
    </div>
    <div class="list-2">
    <img src="/dist/meals/platter-for-2-7c2g6imsfvj2lw03nem43qqy4.png" alt="">
        <div class="prices">
        <p>Platter for 2</p>
        <p>N$359</p>
    </div>
    </div>
    <div class="list-3">
    <img src="/dist/meals/prawn_mussel_413x549-7bk06twyq1u8moprnb69jlt64.jpeg" alt="">
        <div class="prices">
        <p>Prawn & Mussel combo</p>
        <p>N$134</p>
    </div>
    </div>
</div>
  </div>`;
  
    contentContainer.appendChild(menu);
  })();
  
  export { renderMenuPage };