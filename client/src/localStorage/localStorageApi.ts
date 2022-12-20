// @ts-nocheck

export const setUserInLocalStorage = (userData) => {
    localStorage.setItem("user", userData)
}

export const getUserInLocalStorage = () => {
    return localStorage.getItem("user")
}