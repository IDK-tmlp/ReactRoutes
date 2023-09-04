import { useFetcher } from "react-router-dom";

const Article = (props:any) => {
	const fetcher = useFetcher();
	const handleValidate = ()=>{
		fetcher.submit(
			{ validated: !props.article.validated, article_id:props.article.id },
			{ method: "post", action: "/validate/article" }
		  );
	}
	return (
		<section>
			<h2>{props.article.name}</h2><button onClick={handleValidate}>{props.article.validated? "Validated" : "Not validated"}</button>
		</section>
	);
}

export default Article;