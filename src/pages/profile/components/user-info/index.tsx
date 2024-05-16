import {
	BookmarkSimple,
	BookOpen,
	Books,
	UserList,
} from '@phosphor-icons/react'
import { useQuery } from '@tanstack/react-query'
import { toast } from 'react-toastify'

import Avatar from '@/components/avatar'
import { Heading } from '@/components/heading'
import { Text } from '@/components/text'
import { GetProfileResponse } from '@/interfaces/get-profile'
import { api } from '@/lib/axios'
import { formatDate } from '@/utils/formatDate'

import { Container, Divider, Stat, Stats } from './styles'

interface ProfileUserInfoProps {
	user?: string | string[]
}

export default function ProfileUserInfo({ user }: ProfileUserInfoProps) {
	const {
		data: profile,
		isLoading,
		error,
	} = useQuery<GetProfileResponse>({
		queryKey: ['profile', user],
		queryFn: async () => {
			try {
				const response = await api.get('/get-profile', {
					params: {
						user,
					},
				})
				return response.data
			} catch (error) {
				toast.error('Erro ao tentar carregar as informações do perfil.')
				console.error('ERROR:: UserInfo', error)
			}
		},
		enabled: !!user,
	})

	const hasProfile = !isLoading && profile

	if (error || isLoading) {
		return (
			<Container>
				<Avatar skeleton />
				<Heading size="md" skeleton>
					Carregando perfil...
				</Heading>
				<Text size="sm" skeleton>
					Carregando...
				</Text>

				<Divider />

				<Stats>
					<Stat skeleton>
						<Avatar skeleton />
						<Heading size="md" skeleton>
							Carregando...
						</Heading>
						<Text skeleton>Carregando...</Text>
					</Stat>

					<Stat skeleton>
						<Avatar skeleton />
						<Heading size="md" skeleton>
							Carregando...
						</Heading>
						<Text skeleton>Carregando...</Text>
					</Stat>

					<Stat skeleton>
						<Avatar skeleton />
						<Heading size="md" skeleton>
							Carregando...
						</Heading>
						<Text skeleton>Carregando...</Text>
					</Stat>

					<Stat skeleton>
						<Avatar skeleton />
						<Heading size="md" skeleton>
							Carregando...
						</Heading>
						<Text skeleton>Carregando...</Text>
					</Stat>
				</Stats>
			</Container>
		)
	}

	if (hasProfile) {
		return (
			<Container>
				<Avatar src={profile.user.avatar_url} size="medium" />
				<Heading size="md">{profile.user.name}</Heading>
				<Text size="sm" title={formatDate(profile.user.created_at, 'fullDate')}>
					Membro desde{' '}
					{formatDate(profile.user.created_at, 'custom', 'MMMM[ de ]YYYY')}
				</Text>

				<Divider />

				<Stats>
					<Stat>
						<BookOpen weight="bold" />
						<Heading size="md">{profile.stats.pagesReaded}</Heading>
						<Text>Páginas lidas</Text>
					</Stat>

					<Stat>
						<Books weight="bold" />
						<Heading size="md">{profile.stats.rated}</Heading>
						<Text>Livros avaliados</Text>
					</Stat>

					<Stat>
						<UserList weight="bold" />
						<Heading size="md">{profile.stats.authors}</Heading>
						<Text>Autores lidos</Text>
					</Stat>

					<Stat>
						<BookmarkSimple weight="bold" />
						<Heading size="md">
							{profile.stats.mostReadedCategory ?? '-'}
						</Heading>
						<Text>Categoria mais lida</Text>
					</Stat>
				</Stats>
			</Container>
		)
	}
}
