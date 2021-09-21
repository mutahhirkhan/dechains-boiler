import Cookies from 'universal-cookie';
import history from "./../History/history"
const cookies = new Cookies();

export function setCurrentUser() {
    // return new Promise(function(resolve, reject) {
    //     UserService.getUser()
    //         .then(function(response) {
    //             setCookie('USER', response.data);
    //             resolve();
    //         })
    //         .catch(function(err) {
    //             reject();
    //         });
    // });
}

export function getCurrentUser() {
    return cookies.get('USER');
}

export function isLoggedIn() {
    return cookies.get('USER').hasOwnProperty('role');
}

export function getCookie(name) {
    cookies.get(name);
}

export function setCookie(name, data, expire) {
    let options = {};
    expire && (options.expires = expire);
    cookies.set(name, data, options);
}

export function setToken(token) {
    console.log("COOKIES TOKEN",token)
    return cookies.set('TOKEN', token);
}

export function getToken() {
    return cookies.get('TOKEN');
}

export function logout() {
    cookies.remove('TOKEN');
    cookies.remove('USER');
    window.location.assign("/signIn");
}
