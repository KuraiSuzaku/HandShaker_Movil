import axios from 'axios'
import {rooturl} from './ip'
import { MultimediaItems } from './MultimediaItems';
export class Multimedia {
  EmailPremiumWorker:string
    ListOfMultimediaItems: MultimediaItems[]
    _id:String

    constructor(EmailPremiumWorker:string,Item?:MultimediaItems,_id?:string){
      this.EmailPremiumWorker=EmailPremiumWorker
      this.ListOfMultimediaItems = new Array();
      if(Item != null)
        this.ListOfMultimediaItems.push(Item)
  }


    async AddMultimedia(MultimediaObject: Multimedia) {// fill ClientObject with all information of the client
        var num = 0;
    
        try {
          const response = await axios.post(rooturl+"Multimedia/Add",{ MultimediaObject });//the object to send must be *PostObject*

          //console.log("respuestaaa")

          return response.status;

        } catch (error) {
          //console.log("error del tipo" + error);
          //console.log("error del tipo" + error.response.status);          
          return this;
        }
      }


      async GetMultimedia(EmailPremiumWorker: string) {// fill ClientObject with all information of the client
        var num = 0;
        let multimediaObj = new Multimedia(EmailPremiumWorker);
        
        try {
          const response = await axios.post(rooturl+"Multimedia/Get",{EmailPremiumWorker});//the object to send must be *PostObject*
          multimediaObj = response.data;
          return multimediaObj;
        } catch (error) {
          //console.log("error del tipo" + error);
          //console.log("error del tipo" + error.response.status);          
          return this;
        }
      }

      async DeleteMultimedia(EmailPremiumWorker: String,IdAgenda:String) {// fill ClientObject with all information of the client
        var num = 0;
    
        try {
  
          const response = await axios.post(rooturl+"Multimedia/Delete",{ EmailPremiumWorker, IdAgenda});//the object to send must be *PostObject*
          return response;
        } catch (error) {
          //console.log("error del tipo" + error);
          //console.log("error del tipo" + error.response.status);          
          return this;
        }
      }
}