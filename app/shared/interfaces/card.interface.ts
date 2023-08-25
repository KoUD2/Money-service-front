// interface ICardParam {
// 	what: []
// 	where: []
// 	when: string
// }

export interface ICard {
	_id: string
	title: string
	description: string
	feedback: string[]
	rating: number
	userId: string //sevevesr
	parameters: object //vsveve
	price: number
}
