import { useState } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';
import { NoticiasProvider } from './context/NoticiasProvider';

function App() {
	return (
		<NoticiasProvider>
			<Container>
				<header>
					<Typography align='center' marginY={5} component='h1' variant='h3' fontWeight={600}>
						Buscador de Noticias
					</Typography>
				</header>

				<Grid container direction='row' justifyContent='center' alignItems='center'>
					<Grid item md={6} sm={8} xs={12} lg={5}>
						<Formulario />
					</Grid>
				</Grid>

				<ListadoNoticias />
			</Container>
		</NoticiasProvider>
	);
}

export default App;
