export const setValueInLocalStorage = (key: string, userData: any) => {
    localStorage.setItem(key, userData)
}

export const getValueInLocalStorage = (key: string) => {
    return localStorage.getItem(key)
}
