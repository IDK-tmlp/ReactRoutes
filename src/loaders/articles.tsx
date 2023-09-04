import Data from "../services/Data";

export const loader= async () => {
    const hd = Data.getInstance();
    return hd.loadArticles();
    // Le loader gere le async donc no need await
}