import { ref } from 'vue'

const dbUsers = []

const isAuthenticated = ref(false)
const user = ref({})

export const userAuth = () => {
    const login = (username, password) => {
        const user = dbUser.find((u) => u.username === username && u.password === password)
        if (user)
        {
            const {name, role, email, username} = user
            isAuthenticated.value = true
            user.value = { name, role, email }
            return true
        }
        return false
    }
    return { isAuthenticated, user, login}
}