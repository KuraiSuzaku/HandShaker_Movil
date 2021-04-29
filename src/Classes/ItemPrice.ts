import { Image } from './Image';
import axios from 'axios'

export class ItemPrice {
   // _id?:String
    Name?:String
    Description?:String
    Price?:Number
    PictureImage?:Image




    constructor(Name?:string,Description?:string,Price?:Number,PictureImage?:Image,_id?:string){
    //    this._id=_id
        this.Name=Name
        this.Description=Description
        this.Price=Price
        this.PictureImage=PictureImage        
    }

}