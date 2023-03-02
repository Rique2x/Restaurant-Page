const renderContactPage = (() => {
    //container
    const contentContainer = document.querySelector("#content");
    const contact = document.createElement("div");
    contact.setAttribute("id", "contact");
    contact.setAttribute("data-tab-content", "");
    contact.innerHTML = `
      <div class="hero">
      <div class="help">
      <h3>How can we help you?</h3>
    </div>
    <div class="feedback-area">
      <div class="feedback-para">
        <p>You look gorgeous today. Okay, now your turn! Let us know what you think of us</p>
      </div>
      <div class="feedback-btn">
        <a href="">
          <i class="fa-solid fa-location-dot"></i> Restaurant feedback <i id="arrow" class="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    </div>
    </div>`;
  
    contentContainer.appendChild(contact);
  })();
  
  export { renderContactPage };