import { Image } from './Image';
import { MultimediaItems } from './MultimediaItems';
import axios from 'axios'
import {rooturl} from './ip'
export class Multimedia {
  EmailPremiumWorker:string
    ListOfMultimediaItems: MultimediaItems[]
    _id:String

    constructor(EmailPremiumWorker:string,Item:MultimediaItems,_id?:string){
     
      this.EmailPremiumWorker=EmailPremiumWorker
      this.ListOfMultimediaItems = new Array();
      this.ListOfMultimediaItems.push(Item)
  }


    async AddMultimedia(MultimediaObject: Multimedia) {// fill ClientObject with all information of the client
        var num = 0;
    
        try {
          console.log("add Multimedia")

          console.log(MultimediaObject)
          const response = await axios.post(rooturl+"Multimedia/Add",{ MultimediaObject });//the object to send must be *PostObject*
          console.log("respuestaaa")

          return response;
        } catch (error) {
          console.log("error del tipo" + error);
          console.log("error del tipo" + error.response.status);          
          return this;
        }
      }


      async GetMultimedia(EmailPremiumWorker: string) {// fill ClientObject with all information of the client
        var num = 0;
    
        try {
          const response = await axios.post(rooturl+"Multimedia/GetMultimedia",{EmailPremiumWorker});//the object to send must be *PostObject*
          return response;
        } catch (error) {
          console.log("error del tipo" + error);
          console.log("error del tipo" + error.response.status);          
          return this;
        }
      }

      async DeleteMultimedia(EmailPremiumWorker: String,IdAgenda:String) {// fill ClientObject with all information of the client
        var num = 0;
    
        try {
  
          const response = await axios.post(rooturl+"Multimedia/Delete",{ EmailPremiumWorker, IdAgenda});//the object to send must be *PostObject*
          return response;
        } catch (error) {
          console.log("error del tipo" + error);
          console.log("error del tipo" + error.response.status);          
          return this;
        }
      }
}