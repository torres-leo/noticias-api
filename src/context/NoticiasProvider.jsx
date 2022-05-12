import { useState, useEffect, createContext } from 'react';
import axios from 'axios';

const NoticiasContext = createContext();

const NoticiasProvider = ({ children }) => {
	const [categoria, setCategoria] = useState('general');
	const [noticias, setNoticias] = useState([]);
	const [pagina, setPagina] = useState(1);
	const [totalNoticias, setTotalNoticias] = useState(0);

	useEffect(() => {
		const consultarAPI = async () => {
			const urlAPI = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=${
				import.meta.env.VITE_API_KEY_NEWSAPI
			}`;
			const { data } = await axios(urlAPI);
			console.log(data);
			setNoticias(data.articles);
			setTotalNoticias(data.totalResults);
			setPagina(1);
		};
		consultarAPI();
	}, [categoria]);

	useEffect(() => {
		const consultarAPI = async () => {
			const urlAPI = `https://newsapi.org/v2/top-headlines?country=mx&page=${pagina}&category=${categoria}&apiKey=${
				import.meta.env.VITE_API_KEY_NEWSAPI
			}`;
			const { data } = await axios(urlAPI);
			console.log(data);
			setNoticias(data.articles);
			setTotalNoticias(data.totalResults);
		};
		consultarAPI();
	}, [pagina]);

	// Funcion para que escuche cuando se selecciona otra categoria
	const handleChangeCategoria = (e) => {
		setCategoria(e.target.value);
	};

	const handleChangePage = (e, currentlyPage) => {
		setPagina(currentlyPage);
	};

	return (
		<NoticiasContext.Provider
			value={{ categoria, handleChangeCategoria, noticias, pagina, totalNoticias, handleChangePage }}>
			{children}
		</NoticiasContext.Provider>
	);
};

export { NoticiasProvider };
export default NoticiasContext;
