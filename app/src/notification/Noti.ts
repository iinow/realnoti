const electron = require('electron')
const notifier = electron.remote.require('node-notifier')

export class Noti {
    private static _instance: Noti

    private constructor() {}
    
    public static get instance(): Noti {
        return this._instance || (this._instance = new Noti())
    }

    public noti() {
        notifier.notify({
            title: "Title!!",
            message: "Hello, There!!"
        })
    }
}