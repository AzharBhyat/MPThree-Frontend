class Model {
    constructor() {
        this.api = 'https://mpthree.onrender.com/mpthree?search=michaelJackson&limit=2'
    }

    async getVideos(search, limit) {
        const req = await fetch(`https://mpthree.onrender.com/mpthree?search=${search}&limit=${limit}`);
        const res = await req.json();
        return res;
    }

}

export const m = new Model();
