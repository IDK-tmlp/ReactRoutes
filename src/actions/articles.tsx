import { ActionFunctionArgs } from "react-router-dom";
import Data from "../services/Data";
export const actionAdd = async ({ request }: ActionFunctionArgs) => {
	console.log(`Dans action de article`);
	const formData = await request.formData();
	const article_name = formData.get("article_name") as string;
	console.log(`article_name`, article_name);
	const mg = Data.getInstance();
	await mg.addArticle(article_name);
	return null;
};
export const actionValidate = async ({ request }: ActionFunctionArgs) => {
	const formData = await request.formData();
	const validated:boolean = !!formData.get("validated");
	const article_id:string = formData.get("article_id") as string;
	const mg = Data.getInstance();
	await mg.validateArticle(article_id, validated);
	return null;
};