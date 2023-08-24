class Model {
    constructor() {
        this.api = 'http://azhar.ddns.net:5000/mpthree?search=michaelJackson&limit=2'
    }

    async getVideos(search, limit) {
        const req = await fetch(`http://azhar.ddns.net:5000/mpthree?search=${search}&limit=${limit}`);
        const res = await req.json();
        return res;
    }

}

export const m = new Model();