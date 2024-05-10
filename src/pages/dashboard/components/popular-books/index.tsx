import Box from '@/components/box'

export default function PopularBooks() {
	return (
		<Box
			title="Livros populares"
			link={{ label: 'Ver todos', href: '/explore' }}
		/>
	)
}
