import './movie-item.js';

class MovieList extends HTMLElement {
    set movies(items) {
        this._movies = items;
        this.render();
    }

    render() {
        this.innerHTML = ``;
        if(this._movies) {
            this._movies.forEach(movie => {
                const movieItemElement = document.createElement('movie-item');
                movieItemElement.movie = movie;
                this.appendChild(movieItemElement);
            });
        } else {
            this.innerHTML = `<h4 class="text-center text-danger">Movie Not Found!</h4>`;
        }
    }

    renderError(error) {
        this.innerHTML = `<h4 class="text-center text-danger">${error}</h4>`;
    }
}

customElements.define('movie-list', MovieList);