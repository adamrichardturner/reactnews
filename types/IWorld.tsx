// export interface IArticle {
//     article: {
//         title: string;
//         description: string;
//         image: string;
//         source: {
//             url: string;
//             name: string;
//         }
//     }
// }

export interface IWorld {
        articles: {
            articles: {
                [key: string]: any;
            }
        }
}