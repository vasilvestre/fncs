import UserLogin from '../models/UserLogin'
import { useHistory } from 'react-router-dom'

export const AuthService = {
    login,
    logout,
}

export function login(user: UserLogin) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
    }

    return fetch(`https://reqres.in/api/login`, requestOptions)
        .then(handleResponse)
        .then((token: string) => {
            if (token) {
                localStorage.setItem('auth', 'true')
                localStorage.setItem('user', JSON.stringify(user))
                localStorage.setItem('token', token)
            }

            return user
        })
}

export function logout() {
    localStorage.removeItem('auth')
    localStorage.removeItem('user')
    localStorage.removeItem('token')
}

function handleResponse(response: any) {
    return response.text().then((text: any) => {
        const data = text && JSON.parse(text)
        if (!response.ok) {
            if (response.status === 401) {
                logout()
                let history = useHistory()
                history.push('/')
            }

            const error = (data && data.message) || response.statusText
            return Promise.reject(error)
        }

        return data
    })
}
