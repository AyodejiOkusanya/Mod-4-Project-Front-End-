export default class API{
    static signin(user){
        return fetch("http://localhost:3000/api/v1/signin",{
            method: 'POST',
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(user)
        }).then(resp => resp.json())
    }

    static createUser(user){
        return fetch("http://localhost:3000/api/v1/register",{
            method: 'POST',
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(user)
        }).then(resp => resp.json())
    }

    static validate(){
        return this.get("http://localhost:3000/api/v1/validate")
    }

    static getCollection(){
        return this.get("http://localhost:3000/api/v1/collection")
    }

    static get(url){
        return fetch(url, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }).then(resp => resp.json())
    }
}

window.API = API
