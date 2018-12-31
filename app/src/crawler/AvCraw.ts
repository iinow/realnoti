import { Api } from "../util/ApiService";

const parse5 = require('parse5')
const url = 'https://www.amazon.co.jp/s/ref=nb_sb_noss?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&url=search-alias%3Ddvd&field-keywords=abp-565'

export class AvCraw {
    private static _instance: AvCraw = null

    private constructor(){}

    public static get instance(): AvCraw {
        return this._instance || (this._instance = new AvCraw())
    }

    public get path(): string {
        return ""
    }

    public name(one:string, two?:string): string {
        return ""
    }

    public async content (){
        const con = await Api.get(url)
        const document = parse5.parse(con.data)
        return document
    }
}