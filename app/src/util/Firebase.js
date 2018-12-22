import { default as firebase } from 'firebase'

let firebaseApp
let db
let config = {
    apiKey: "AIzaSyBTYlRqiEizHgZYYtp533Exzc_W9CNNRSU",
    authDomain: "realnoti-2be36.firebaseapp.com",
    databaseURL: "https://realnoti-2be36.firebaseio.com",
    projectId: "realnoti-2be36",
    storageBucket: "realnoti-2be36.appspot.com",
    messagingSenderId: "101374968258"
}

const settings = {timestampsInSnapshots : true}

export const fire = {
    init : () => {
        const dd = 1;
        if (!firebase.apps.length){
            firebaseApp = firebase.initializeApp(config)
            db = firebaseApp.firestore()
            db.settings(settings)
        }
        // db = firebase.database()
    },
    reg : (id, pw, email, message) => {
        db.collection('users').doc(id).set({
            'id' : id,
            'password' : pw,
            'email' : email,
            'message' : message
        })
    },
    login : async (id, pw) => {
        const user = await db.collection('users').doc(id).get()
        if(user && user.data().password == pw){
            console.log(user.data())
            return true
        }
        else{
            console.log(`데이터 없음`)
            return false
        }
        // if(user == null && user.data())
    }
}