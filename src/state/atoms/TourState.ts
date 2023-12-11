import {atom} from "recoil";
import {Tours} from "@/types";

export const tourState = atom<Array<Tours>>({
    key: 'tourState',
    default: [],
})