window.addEventListener('DOMContentLoaded', () => {
    let res = getCookie();
    let id = getCurrent();
    let user = res[id]
    if (Object.keys(user).length > 2) {
        showInfo(user)
        return
    }
    document.querySelector('input[type="button"]').addEventListener('click', () => {
        addInfo(res[id])
        let date = new Date()
        date.setHours(new Date().getHours() + 5)
        document.cookie = `users=${JSON.stringify(res)}; expires=${date.toUTCString()}`

    })
})

function getCookie() {
    let res = document.cookie.split('; ')
    for (let i = 0; i < res.length; i++) {
        let s = res[i].split('=')
        if (s[0] == 'users') {
            return JSON.parse(s[1])
        }
    }
    return null
}
function getCurrent() {
    let res = document.cookie.split('; ')
    for (let i = 0; i < res.length; i++) {
        let s = res[i].split('=')
        if (s[0] == 'current') {
            return +s[1]
        }
    }
}

function addInfo(obj) {
    obj.firstName = document.forms[0].name.value
    obj.lastName = document.forms[0].lastname.value
}
function showInfo(obj) {
    document.forms[0].name.value = obj.firstName
    document.forms[0].lastname.value = obj.lastName
}