import { axiosClassic } from 'api/interceptors'
import { getServicesUrl } from 'config/api.config'

import { ICard } from '@/shared/interfaces/card.interface'

export const CardService = {
	async getCardTitle() {
		return axiosClassic.get<ICard[]>(getServicesUrl())
	},
}
