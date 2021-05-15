import { Image } from './Image';
export class MultimediaItems {
    MultimediaImage:Image[]
    MultimediaText:String
    MultimediaDate:Date
    _id:String


    constructor(MultimediaDate:Date,MultimediaText:string,MultimediaImage:Image[],_id?:string){
        this._id=_id
        this.MultimediaDate=MultimediaDate
        this.MultimediaText=MultimediaText
        this.MultimediaImage=MultimediaImage
    }




}