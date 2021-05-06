import { Image } from './Image';
import axios from 'axios'

export class Post {
    _id:String
    DateOfPost:Date
    TextOfPost:String
    PicturesOfPost:Image[]



    constructor(DateOfPost:Date,TextOfPost:string,PicturesOfPost:Image[],_id?:string){
        this._id=_id
        this.DateOfPost=DateOfPost
        this.TextOfPost=TextOfPost
        this.PicturesOfPost=PicturesOfPost
    }

}