import { BaseModel } from './BaseModel'
import { JsonObject, JsonProperty } from "json2typescript"

@JsonObject("UserModel")
export class UserModel extends BaseModel {
    @JsonProperty("id", String)
    id: string = undefined

    @JsonProperty("password", String)
    pw: string = undefined

    @JsonProperty("email", String)
    email: string = undefined

    @JsonProperty("message", String)
    message: string = undefined

    constructor() {
        super()
    }

    toString() {
        return `My id is ${this.id}, pw is ${this.pw}`
    }
}