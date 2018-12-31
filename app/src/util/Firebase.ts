import * as firebase from 'firebase'
import * as Model from '../model/index'
import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from 'constants'
import { JsonConvert } from 'json2typescript'

let firebaseApp: firebase.app.App
let db: firebase.firestore.Firestore
let config = {
    apiKey: "AIzaSyBTYlRqiEizHgZYYtp533Exzc_W9CNNRSU",
    authDomain: "realnoti-2be36.firebaseapp.com",
    databaseURL: "https://realnoti-2be36.firebaseio.com",
    projectId: "realnoti-2be36",
    storageBucket: "realnoti-2be36.appspot.com",
    messagingSenderId: "101374968258"
}

const settings = { timestampsInSnapshots: true }
const jsonConvert: JsonConvert = new JsonConvert()
let User: Model.UserModel = undefined

export const fire = {
    init: () => {
        if (!firebase.apps.length) {
            firebaseApp = firebase.initializeApp(config)
            db = firebaseApp.firestore()
            db.settings(settings)
        }
        // db = firebase.database()
    },
    reg: (user: Model.UserModel) => {
        db.collection('users').doc(user.id).set(jsonConvert.serializeObject(user))
    },
    login: async (id: string, pw: string) => {
        const user = await db.collection('users').doc(id).get()
        if (user && user.data().password == pw) {
            console.log(user.data())
            User = jsonConvert.deserializeObject(user.data(), Model.UserModel)
            return true
        }
        else {
            console.log(`데이터 없음`)
            return false
        }
        // if(user == null && user.data())
    },
    //title: string, content: string, addr: string
    insert_RestApi_Item: async (item: Model.ApiItemModel) => {
        if (User) {
            await db.collection('restapi').doc(User.id).collection(User.id).doc().set(jsonConvert.serializeObject(item))
            return true
        } else {
            return false
        }
    },
    get_ApiItemModel: async () => {
        let list = await db.collection('restapi').doc(localStorage.getItem('id')).collection(localStorage.getItem('id')).get()
        if(list){
            let array = new Array<Model.ApiItemModel>()
            list.docs.forEach(item=>{
                array.push(jsonConvert.deserializeObject(item.data(), Model.ApiItemModel))
                console.log(item.data())
            })
            return array
        }
        return null
    }
}

const test = () => {
    
}

class Fire implements Api{
    private static instance: Fire

    private constructor() {
        if (!firebase.apps.length) {
            firebaseApp = firebase.initializeApp(config)
            db = firebaseApp.firestore()
            db.settings(settings)
        }
    }

    public static get Instance(): Fire {
        return this.instance || (this.instance = new Fire())
    }

    reg(user: Model.UserModel): boolean {
        db.collection('users').doc(user.id).set(jsonConvert.serializeObject(user))
        return true
    }

    login(id: string, pw: string): boolean{
        return true
    }

    insert_RestApi_Item(title: string, content: string, addr: string): boolean {
        return true
    }

    get_ApiItemModel(): Array<Model.ApiItemModel> {
        return null
    }
}

interface Api {
    reg(user: Model.UserModel): boolean
    login(id: string, pw: string): boolean
    insert_RestApi_Item(title: string, content: string, addr: string): boolean
    get_ApiItemModel(): Array<Model.ApiItemModel>
}