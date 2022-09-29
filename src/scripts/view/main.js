import logo from '../../assets/icon.png';

import '../component/nav-bar.js';
import '../component/search-bar.js';

import $ from 'jquery';

import '../component/movie-list.js';
import '../component/modal-item.js'

import '../component/pagination-bar.js';

import DataSource from '../data/data-source.js';

const main = () => {
    const logoElement = document.getElementById('logo');
    logoElement.src = logo;

    const searchElement = document.querySelector('search-bar');
    const movieListElement = document.querySelector('movie-list');
    const searchLabel = document.getElementById('searchLabel');

    const modalDetail = document.querySelector('modal-detail');
    const paginationElement = document.querySelector('pagination-bar');
    
    const onButtonSearchClick = async () => {
        try {
            const results = await DataSource.searchClub(searchElement.value);
            searchLabel.innerText = `${searchElement.value}`;
            renderResult(results);
            renderPage(results.Search, 1, results.totalResults);
        } catch (error) {
            fallbackResult(error);
        }
    }

    const onButtonDetailClick = async (imdbID) => {
        try {
            const detail = await DataSource.movieDetail(imdbID);
            renderDetailResult(detail);
        } catch (error) {
            fallbackErrorDetail(error);
        }
    }

    const renderResult = results => {
        movieListElement.movies = results.Search;
    }
    
    const fallbackResult = message => {
        movieListElement.renderError(message);
    }

    const renderDetailResult = result => {
        modalDetail.detail = result;
    }

    const fallbackErrorDetail = message => {
        modalDetail.renderError(message);
    }

    const renderPage = (results, page, totalPage) => {
        paginationElement.getData(results, page, totalPage);
    }

    searchElement.ClickEvent = onButtonSearchClick;

    $(movieListElement).on('click', '.showMore', function() {
        onButtonDetailClick(this.dataset.id);
    });

    $(paginationElement).on('click', '.numPage', async function() {
        const results = await DataSource.searchClub(searchLabel.textContent, this.dataset.numpage);
        renderPage(results.Search, this.dataset.numpage, results.totalResults);
        renderResult(results);
    })
}

export default main;