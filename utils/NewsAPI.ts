import axios from "axios"

const NewsAPI: { getWorldNews: Function, getUKNews: Function, getTopicNews: Function } = {
    async getWorldNews() {
        const response = await axios.get('http://localhost:3000/api/serverArticles');
        return response.data;
    },
    async getUKNews() {
        const response = await axios.get('http://localhost:3000/api/serverArticles', {
            params: {
                country: 'gb'
            }
        });
        return response.data;
    },
    async getTopicNews(topic: string) {
        const response = await axios.get('http://localhost:3000/api/serverArticles', {
            params: {
                topic: topic
            }
        });
        return response.data;
    }
}

export default NewsAPI;