class ModalDetail extends HTMLElement {
    set detail(movie) {
        this._detail = movie;
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-4">
                        <img src="${this._detail.Poster}" class="img-fluid" alt="${this._detail.Title}">
                    </div>
                    <div class="col-sm-8">
                        <table class="table">
                            <tr>
                                <th>Title</th>
                                <th>:</th>
                                <th>${this._detail.Title}</th>
                            </tr>
                            <tr>
                                <th>Released</th>
                                <th>:</th>
                                <td>${this._detail.Released}</td>
                            </tr>
                            <tr>
                                <th>Rated</th>
                                <th>:</th>
                                <td>${this._detail.Rated}</td>
                            </tr>
                            <tr>
                                <th>Genre</th>
                                <th>:</th>
                                <td>${this._detail.Genre}</td>
                            </tr>
                            <tr>
                                <th>Director</th>
                                <th>:</th>
                                <td>${this._detail.Director}</td>
                            </tr>
                            <tr>
                                <th>Rating</th>
                                <th>:</th>
                                <td>${this._detail.imdbRating}</td>
                            </tr>
                        </table>
                        <h5>Plot</h5>
                        <p>${this._detail.Plot}</p>
                    </div>
                </div>
            </div>
        `;
    }

    renderError(error) {
        this.innerHTML = `<h4 class="text-center text-danger">${error}</h4>`;
    }
}

customElements.define('modal-detail', ModalDetail);