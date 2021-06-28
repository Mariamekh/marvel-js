import {
    API_KEY,
    API_URL,
    URL_CHARACTERS,
    URL_COMICS
} from "../../constants/api"
import getDataApi from "../../utils/getDataApi"
import {
    ROOT_INDEX
} from "../../constants/root"
import {
    IMG_STANDARD_XLARGE,
    IMG_NOT_AVAILABLE
} from '../../constants/api'
import "./Comics.css"

class Comics {
    async render() {
        const data = await getDataApi.getData(API_URL + URL_COMICS);
        console.log(data);

        let htmlContent = '';

        data.forEach(({
            id,
            name,
            thumbnail: {
                path,
                extension
            }
        }) => {

            if (path.lastIndexOf(IMG_NOT_AVAILABLE) === -1) {
                const imgSrc = path + '/' + IMG_STANDARD_XLARGE + '.' + extension;

                htmlContent += `
               <li class="comics__item">
               <span class="comics__name">${name}</span>
               <img class="comics__img" src=${imgSrc} />
               </li>
               `
            }

        });

        const htmlWrapper = `
        <ul class="comics__container">
           ${htmlContent}
        </ul>
        `

        ROOT_INDEX.innerHTML = htmlWrapper
    }
}

export default new Comics();