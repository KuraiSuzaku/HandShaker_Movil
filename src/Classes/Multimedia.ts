import { Image } from './Image';
import { MultimediaItems } from './MultimediaItems';
import axios from 'axios'

export class Multimedia {
    IdPremiumWorker:string
    ListOfMultimediaItems: MultimediaItems[]
    _id:String

    constructor(IdPremiumWorker:string,Item:MultimediaItems,_id?:string){
     
      this.IdPremiumWorker=IdPremiumWorker
      this.ListOfMultimediaItems = new Array();
      this.ListOfMultimediaItems.push(Item)
  }


    async AddMultimedia(MultimediaObject: Multimedia) {// fill ClientObject with all information of the client
        var num = 0;
    
        try {
          console.log("add Multimedia")

          console.log(MultimediaObject)
          const response = await axios.post("http://192.168.1.72:3001/api/Multimedia/Add",{ MultimediaObject });//the object to send must be *PostObject*
          console.log("respuestaaa")

          return response;
        } catch (error) {
          console.log("error del tipo" + error);
          console.log("error del tipo" + error.response.status);          
          return this;
        }
      }


      async GetMultimedia(MultimediaObject: Multimedia) {// fill ClientObject with all information of the client
        var num = 0;
    
        try {
        

          const response = await axios.post("http://192.168.1.72:3001/api/Multimedia/GetMultimedia",{ MultimediaObject });//the object to send must be *PostObject*
          return this;
        } catch (error) {
          console.log("error del tipo" + error);
          console.log("error del tipo" + error.response.status);          
          return this;
        }
      }
}