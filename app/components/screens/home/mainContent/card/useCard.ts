import { useQuery } from 'react-query'

import { CardService } from '@/services/card.service'

import { ICardMenu } from './card.interface'

export const useCardTitle = () => {
	const queryData = useQuery('card title', () => CardService.getCardTitle(), {
		select: ({ data }) => data,
		// .map(
		// 	(card) =>
		// 		({
		// 			title: card.title,
		// 			// description: card.description,
		// 			// parameters: card.parameters,
		// 			// price: card.price,
		// 		}) as ICardMenu
		// ),
		// .splice(0, 2),
	})

	return queryData
}
