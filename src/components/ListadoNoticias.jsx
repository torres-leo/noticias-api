import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import useNoticias from '../hooks/useNoticias';
import Noticia from './Noticia';

const ListadoNoticias = () => {
	const { noticias, totalNoticias, pagina, handleChangePage } = useNoticias();

	// Realizando el paginador
	const totalPaginas = Math.ceil(totalNoticias / 20);

	return (
		<>
			<Typography textAlign='center' marginY={5} variant='h4' component='h2' fontWeight={600}>
				Últimas Noticias
			</Typography>
			<Grid container spacing={3}>
				{noticias.map((noticia) => (
					<Noticia key={noticia.url} noticia={noticia} />
				))}
			</Grid>

			<Stack sx={{ marginY: 5 }} spacing={2} direction={'row'} justifyContent='center' alignItems='center'>
				<Pagination count={totalPaginas} color='primary' onChange={handleChangePage} page={pagina} />
			</Stack>
		</>
	);
};

export default ListadoNoticias;
