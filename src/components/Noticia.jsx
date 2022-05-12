import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Noticia = ({ noticia }) => {
	const { urlToImage, url, title, description, source } = noticia;
	return (
		<Grid item xs={12} sm={6} lg={4}>
			<Card>
				{urlToImage && <CardMedia component='img' alt={`Noticia: ${title}`} image={urlToImage} height={250} />}
				<CardContent>
					<Typography variant='body2' color='orange'>
						Publicado por: {source.name}
					</Typography>
					<Typography variant='h5' component='div'>
						<Link href={url} target='_blank' sx={{ textDecoration: 'none', marginTop: '15px' }}>
							{title}
						</Link>
					</Typography>
					<Typography variant='body2' sx={{ marginTop: 2 }}>
						{description}
					</Typography>
					<CardActions>
						<Link
							href={url}
							target='_blank'
							variant='button'
							width={'100%'}
							textAlign='center'
							sx={{ textDecoration: 'none', marginTop: 2 }}>
							Leer Noticia
						</Link>
					</CardActions>
				</CardContent>
			</Card>
		</Grid>
	);
};

export default Noticia;
