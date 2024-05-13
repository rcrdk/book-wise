import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

type FormatDate = 'full' | 'fullDate' | 'relative' | 'custom'

export function formatDate(
	date: string | Date,
	format: FormatDate = 'full',
	formatString?: string,
) {
	if (format === 'full')
		return dayjs(date).format('DD[ de ]MMMM[ de ]YYYY[ às ]HH:mm[h]')

	if (format === 'fullDate') return dayjs(date).format('DD[ de ]MMMM[ de ]YYYY')

	if (format === 'relative') return dayjs(date).fromNow()

	if (format === 'custom') return dayjs(date).format(formatString)
}
