import axios from "axios"

const NewsAPI: { getWorldNews: Function, getUKNews: Function, getTopicNews: Function } = {
    async getWorldNews() {
        try {
            const response = await axios.get('/api/serverArticles');
            if(response) {
                console.log(response.data)
                return response.data;
            }
        } catch(error) {
            console.log(error);
        }
    },
    async getUKNews() {
        try {
            const response = await axios.get('/api/serverArticles', {
                params: {
                    country: 'gb'
                }
            });
            if(response) {
                return response.data;
            }
        } catch (error) {
            console.log(error);
        }
    },
    async getTopicNews(topic: string) {
        try {
            const response = await axios.get('/api/serverArticles', {
                params: {
                    topic: topic
                }
            });
            if(response) {
                return response.data;
            }
        } catch (error) {
            console.log(error);
        }
    }
}

export default NewsAPI;