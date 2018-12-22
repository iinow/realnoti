import { BaseModel } from './BaseModel'

export class UserModel extends BaseModel{
    id: string
    pw: string

    constructor(id, pw){
        super()
        this.id = id
        this.pw = pw
    }

    toString() {
        return "My id is "+this.id+", pw is "+this.pw
    }
}