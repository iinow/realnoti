import { Person } from "../renderer/Test";

export const URL_REG = '/register'
export const URL_HOME = '/home'
export const URL_LOGIN = '/'
export const URL_HOME_RESTAPI = '/restapi'
export const URL_HOME_AVVIEW = '/avview'
export const URL_HOME_CHAT = '/chat'
export const URL_HOME_SET = '/setting'

export const URL = {
    find: (num) => {
        switch (num) {
            case URL.RESTAPI: return URL_HOME_RESTAPI
            case URL.AVVIEW: return URL_HOME_AVVIEW
            case URL.LOGIN: return URL_LOGIN
            case URL.REG: return URL_REG
            case URL.HOME: return URL_HOME
            case URL.CHAT: return URL_HOME_CHAT
        }
    },
    LOGIN: 1,
    REG: 2,
    HOME: 3,
    RESTAPI: 4,
    AVVIEW: 5,
    CHAT: 6,
    SETTING: 7
}