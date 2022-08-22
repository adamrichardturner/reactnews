import { createContext, useContext, ReactNode, useState } from "react";

type ArticlesContextType = {
    topic: string;
    articles: object;
    updateArticles: (articles: object) => object;
};

const ArticlesContextDefaultValues: ArticlesContextType = {
    topic: 'Any',
    articles: [],
    updateArticles: () => []
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
    const [articles, setArticles] = useState<object>({});

    const changeTopic = (topic: string) => {
        setTopic(topic);
    }

    const updateArticles = async (articles: object) => {
        setArticles(articles);
    }

    const value = {
        articles,
        topic,
        changeTopic,
        updateArticles
    };

    return (
        <>
            <ArticlesContext.Provider value={value}>
                {children}
            </ArticlesContext.Provider>
        </>
    );
}