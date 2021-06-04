const API_KEY = process.env.API_KEY // API key is in .env.local gitignored file

export default {
    fetchTrending: {
        title: 'Trending',
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`
    }
}