let token = '8720762e7add6f792d62bb2346a89e3cbcabe3959d4ce06e'

export const serverCalls = {
    get: async () => {
        const response = await fetch(`http://127.0.0.1:5000/api/coins`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },

    create: async(data: any = {}) => {
        const response = await fetch(`http://127.0.0.1:5000/api/coins`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if(!response.ok){
            throw new Error('Failed to Create new data on server')
        }

        return await response.json()
    },

    update: async (id:string, data:any = {}) => {
        const response = await fetch(`http://127.0.0.1:5000/api/coins/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
    },

    delete: async(id:string) => {
        const response = await fetch(`http://127.0.0.1:5000/api/coins/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        })
    }
}
