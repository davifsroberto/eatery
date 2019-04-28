import { resolve } from "path";

const users = [
	{ id: '1', name: 'Rafael do Gueto', email: 'fresh-prince-of-bel@air.com' },
	{ id: '2', name: 'Michael Richard Kyle', email: 'my-wife-and@kids.com' }
]


export class User {
	
	static findAll(): Promise<any[]> {
		return Promise.resolve(users)
	}
	

	static findByid(id: string): Promise<any[]> {

		return  new Promise(resolve => {
			const filtered = users.filter(user => user.id === id)
			let user = undefined

			if (filtered.length > 0) {
				user = filtered[0]
			}
			
			resolve(user)			
		})
	}

}