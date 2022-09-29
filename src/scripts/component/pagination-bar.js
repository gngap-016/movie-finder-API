import DataSource from '../data/data-source.js';

class PaginationBar extends HTMLElement {
    getData(results, page, totalPages) {
        this._results = results;
        this._page = parseInt(page);
        this._totalPages = totalPages;

        this.pagination();
    }

    pagination() {
        if(this._results) {
            const totalPages = Math.ceil(this._totalPages / 10);
            this.renderElement(totalPages);
        } else {
            this.innerHTML = ``;
        }
    }

    renderElement(totalPages) {
        this.innerHTML = `<div class="btn-group"></div>`;

        const wrapper = this.querySelector('.btn-group');
        wrapper.innerHTML = ``;

        let maxLeft = this._page - 2;
        let maxRight = this._page + 2;

        if(maxLeft < 1) {
            maxLeft = 1;
            maxRight = 5;
        }

        if(maxRight > totalPages) {
            maxLeft = totalPages - (5-1);
            if(maxLeft < 1) {
                maxLeft = 1;
            }
            maxRight = totalPages;
        }

        for (let page = maxLeft; page <= maxRight; page++) {
            wrapper.innerHTML += `<button type="button" class="numPage btn btn-sm ${ (this._page == page) ? 'btn-dark' : 'btn-outline-dark' }" data-numpage=${page}>${page}</button>`;
        }

        if(this._page != 1) {
            wrapper.innerHTML = `<button type="button" class="numPage btn btn-sm btn-outline-dark" data-numpage=${this._page - 1}>Previous</button>` + wrapper.innerHTML;
        }

        if(this._page != totalPages) {
            wrapper.innerHTML += `<button type="button" class="numPage btn btn-sm btn-outline-dark" data-numpage=${this._page + 1}>Next</button>`;
        }
    }
}

customElements.define('pagination-bar', PaginationBar);