import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

type FormatDate = 'full' | 'relative'

export function formatDate(date: string, format: FormatDate = 'full') {
	if (format === 'full')
		return dayjs(date).format('DD[ de ]MMMM[ de ]YYYY[ às ]HH:mm[h]')

	if (format === 'relative') return dayjs(date).fromNow()
}
