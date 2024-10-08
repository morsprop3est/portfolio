import {createDomain} from "effector";
import {AllowedLangs} from "@/constans/lang";

const lang = createDomain();

export const setLang = lang.createEvent<AllowedLangs>();

export const $lang = lang.createStore<AllowedLangs>(AllowedLangs.EN)
    .on(setLang, (_, newLang) => newLang);