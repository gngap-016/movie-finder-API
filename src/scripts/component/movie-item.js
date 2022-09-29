import DataSource from "../data/data-source";

class MovieItem extends HTMLElement {
    set movie(item) {
        this._movie = item;
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="card border border-0 m-2" style="width: 14rem;">
                <img src="${this._movie.Poster}" class="card-img-top" alt="${this._movie.Title}">
                <div class="card-body">
                <h5 class="card-title">${this._movie.Title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${this._movie.Year}</h6>
                <button type="button" class="btn btn-sm btn-dark float-end showMore"
                data-bs-toggle="modal" 
                data-bs-target="#exampleModal"
                data-id="${this._movie.imdbID}">
                    Show More
                </button>
                </div>
            </div>
        `;
    }
}

customElements.define('movie-item', MovieItem);