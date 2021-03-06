customElements.define('component-description', class extends HTMLElement {

  constructor () {
    super();
    this._ = this.attachShadow({mode:'open'});
    this._.innerHTML = /*html*/`
      <style>@import url("milligram.min.css");</style>
      <style>
        dialog {
          width: 75vw;
          height: 75vh;
          overflow: auto;
          top: 15%;
        }
        #closeButton {
          position: sticky;
          top: 2rem;
          left: 100%;
        }
      </style>
      <dialog>
      </dialog>
    `;
    this.modal = this._.querySelector('dialog');
  }

  setContent (markdown) {
    this.modal.innerHTML = `
    <button id="closeButton" tabindex="-1" class="btn btn-small">Close</button>
    ${marked(markdown)}`;
    this._.querySelector('#closeButton').onclick = () => {
      this.modal.close();
    };
    this.modal.showModal();
  }

});