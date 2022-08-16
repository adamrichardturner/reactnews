import { createContext, useContext, ReactNode, useState } from "react";
import NewsAPI  from '../utils/NewsAPI';

type ArticlesContextType = {
    topic: string;
    articles: object;
};

const ArticlesContextDefaultValues: ArticlesContextType = {
    topic: 'Any',
    articles: []
};

const ArticlesContext = createContext<ArticlesContextType>(ArticlesContextDefaultValues);

export function useArticles() {
    return useContext(ArticlesContext);
}

type Props = {
    children: ReactNode;
};

export function ArticlesProvider({ children }: Props) {
    const [topic, setTopic] = useState<string>('Any');
    const [articles, setArticles] = useState<object>([]);

    const changeTopic = (topic:string) => {
        setTopic(topic);
    }

    const getArticles = async (topic: string, country: string = 'any') => {
        if(topic === 'Any' && country === 'Any') {
            const articles = await NewsAPI.getWorldNews(); 
            setArticles(articles);
        } else if (topic !== 'Any' && country === 'Any') {
            const articles = await NewsAPI.getTopicNews(topic);
            setArticles(articles);
        } else {
            const articles = await NewsAPI.getUKNews();
            setArticles(articles);
        }
    }

    const value = {
        articles,
        topic,
        changeTopic,
        getArticles
    };

    return (
        <>
            <ArticlesContext.Provider value={value}>
                {children}
            </ArticlesContext.Provider>
        </>
    );
}