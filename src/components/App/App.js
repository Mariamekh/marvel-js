import "regenerator-runtime/runtime";
import {API_KEY, API_URL,URL_CHARACTERS,URL_COMICS } from "../../constants/api" 
import getDataApi from "../../utils/getDataApi"
import "./App.css"
import Comics from "../Comics"

class App {
 async render(){ 
     await Comics.render();
    await Comics.getEventlistener();
    } 
 }  

export default new App;