let token = '8720762e7add6f792d62bb2346a89e3cbcabe3959d4ce06e'

export const serverCalls = {
    get: async () => {
        const response = await fetch(`http://127.0.0.1:5000/`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        })
    }
}