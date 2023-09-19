class UI {
    constructor() {
        this.search = document.getElementById('input-direct');
        this.searchBtn = document.getElementById('search-btn');
        this.form = document.getElementById('form');
        this.results = document.getElementById('output');
        this.loader = document.getElementById('loader');
    }

    populateData(info) {
        let html = '';
        info.forEach(item => {

            html += `
            <div class="result-item">
                <img src="${item.thumbnail}"
                    alt="${item.title}">
                <div class="info">
                    <div class="title">${item.title}</div>
                    <p class="duration">${item.duration}</p>
                    <div class="buttons">
                        <a href="${item.link}" target="_blank" class="download-btn">Watch</a>
                        <a href="https://mpthree.onrender.com/mpthree?download=${item.link}" title="Download" class="db"><i class="fas fa-download"></i></a>
                    </div>
                </div>
            </div>
            `

        })
        this.results.innerHTML = html;
    }

    displayLoader() {
        this.loader.style.display = 'flex';
    }

    hideloader() {
        this.loader.style.display = 'none';
    }

    clearInput() {
        this.search.value = '';
    }
}



export const ui = new UI()
