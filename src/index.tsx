import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Articles from './components/Articles';
import Home from './components/Home';
import { loader as articleLoader } from './loaders/articles';
import { actionAdd as addArticle, actionValidate as validateArticle} from './actions/articles';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route path='/' element={<App/>}>
				<Route path='' element={<Home/>}/>
				<Route path='articles' element={<Articles/>} loader={articleLoader}/>
				<Route path='*' element={<Home/>}/>
			</Route>
			<Route path="/add/article" action={addArticle} />
			<Route path="/validate/article" action={validateArticle} />
		</>
	)
);
root.render(
  <React.StrictMode>
	<RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
