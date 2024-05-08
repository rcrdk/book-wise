import BackgroundImage from '@/assets/signin-left.png'
import { Text } from '@/components/text'
import { styled } from '@/styles'

export const Brand = styled('div', {
	display: 'flex',
	placeContent: 'center',
	backgroundColor: '$purple200',
	backgroundSize: 'cover',
	backgroundPosition: 'bottom center',
	backgroundImage: `url(${BackgroundImage.src})`,
	borderRadius: '$md',

	'@media(max-width:1024px)': {
		aspectRatio: '23/9',
	},

	'@media(max-width:767px)': {
		aspectRatio: '3/1',
	},

	'@media(max-width:575px)': {
		aspectRatio: '2/1',
	},

	img: {
		width: '50%',
		margin: 'auto',

		'@media(max-width:1024px)': {
			width: 320,
			maxWidth: '50%',
		},
	},
})

export const Container = styled('main', {
	display: 'flex',
	justifyContent: 'center',
	alignContent: 'center',
	padding: '$5 0',

	'@media(max-width:1024px)': {
		padding: 'calc($10 * 2) 0',
	},

	'@media(max-width:575px)': {
		padding: 'calc($10 * 1.5) 0',
	},
})

export const Box = styled('div', {
	maxWidth: '375px',
	width: '100%',
	margin: 'auto',

	[`> ${Text}`]: {
		marginBottom: '$10',
	},
})
