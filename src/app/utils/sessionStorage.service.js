const CURRENT_USER = "currentUser";

export function authUser(userData) {
    return sessionStorage.setItem(CURRENT_USER, JSON.stringify(userData));
}

export function getUser() {
    const obj = sessionStorage.getItem(CURRENT_USER);
    return JSON.parse(obj);
}

export function removeUser() {
    return sessionStorage.removeItem(CURRENT_USER);
}

const sessionStorageService = {
    authUser,
    getUser,
    removeUser
};

export default sessionStorageService;
