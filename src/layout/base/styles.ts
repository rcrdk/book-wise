import { styled } from '@/styles'

export const BaseContainer = styled('div', {
	display: 'grid',
	gap: '$5',
	minHeight: '100dvh',
	padding: '$5',

	variants: {
		mode: {
			default: {
				gridTemplateColumns: '240px 1fr',
			},

			auth: {
				gridTemplateColumns: '41% 1fr',

				'@media(max-width:1024px)': {
					gap: 0,
					gridTemplateColumns: '1fr',
					gridTemplateRows: 'auto 1fr',
				},
			},
		},
	},
})
