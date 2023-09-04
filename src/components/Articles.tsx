import { useFetcher, useLoaderData } from "react-router-dom";
import Article from "./Article";

const Articles = () => {
	const articles: any = useLoaderData();
	const fetcher = useFetcher();
	return (
	  <>
		<h1>Liste des articles</h1>
		<fetcher.Form action="/add/article" method="POST">
		  <input type="text" name="article_name" placeholder="nom de l'article"/>
		  <input type="submit" value="Ajouter un article" />
		</fetcher.Form>
		{articles.map((article: any) => <Article article={article} />)}
	  </>
	);
  }

export default Articles;