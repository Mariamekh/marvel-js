import {
    async
} from "fast-glob";
import "regenerator-runtime/runtime";
import {API_KEY, API_URL,URL_CHARACTERS,URL_COMICS } from "./constants/api" 
import getDataApi from "./utils/getDataApi"

(async () => {
    const data = await getDataApi.getData(API_URL+URL_COMICS);
    console.log(data)
})();