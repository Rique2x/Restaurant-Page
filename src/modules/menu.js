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
  </div>`;
  
    contentContainer.appendChild(menu);
  })();
  
  export { renderMenuPage };