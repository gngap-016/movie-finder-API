class NavBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <nav class="navbar bg-dark navbar-dark">
                <div class="container">
                <a class="navbar-brand mx-auto py-3" href="#">
                    <img id="logo" src="" alt="Logo" height="30" class="d-inline-block align-text-top">
                    Movies Finder
                </a>
                </div>
            </nav>
        `;
    }
}

customElements.define('nav-bar', NavBar);