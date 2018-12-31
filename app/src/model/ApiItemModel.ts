import { BaseModel } from './BaseModel'
import { JsonObject, JsonProperty } from "json2typescript"

@JsonObject("ApiItemModel")
export class ApiItemModel extends BaseModel {
    @JsonProperty("title", String)
    title: string = undefined

    @JsonProperty("content", String)
    content: string = undefined

    @JsonProperty("addr", String)
    addr: string = undefined
}