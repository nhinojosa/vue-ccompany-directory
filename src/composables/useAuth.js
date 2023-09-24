import { ref } from 'vue'

const dbUsers = [
    {
        username: 'admin',
        password: 'admin',
        name: 'Admin',
        role: 'admin',
        email: 'admin@coolcomapny.com',
        
    },
    {
        username: 'user',
        password: 'user',
        name: 'User',
        role: 'User',
        email: 'user@coolcomapny.com',
    },
]
const isAuthenticated = ref(false)
const user = ref({})

const getUser = (username, password) => {}

export const userAuth = () => {
    const login = (username, password) => {
        const user = dbUser.find((u) => u.username === username && u.password === password)
        if (user)
        {
            const {name, role, email, username} = user
            isAuthenticated.value = true
            user.value = { name, role, email }
        }
    }
    return { isAuthenticated, user, login}
}