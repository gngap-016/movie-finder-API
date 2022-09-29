class SearchBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    set ClickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.querySelector('#inputTitle').value;
    }

    render() {
        this.innerHTML = `
            <div class="container">
                <div class="input-group my-3">
                    <input id="inputTitle" type="text" class="form-control" placeholder="Movie Title" aria-describedby="searchButton">
                    <button class="btn btn-outline-dark" type="submit" id="searchButton">Search</button>
                </div>
                <hr>
            </div>
        `;

        this.querySelector('#searchButton').addEventListener('click', this._clickEvent);
        this.querySelector('#inputTitle').addEventListener('keypress', event => {
            if(event.key == "Enter") {
                this.querySelector('#searchButton').click();
            }
        });
    }
}

customElements.define('search-bar', SearchBar);