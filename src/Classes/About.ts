
import axios from 'axios'
import {rooturl} from './ip'
export class About {
    constructor(
        EmailWorker?:string,
        Description?:string 
        ){}
    

    async AddAbout(AboutObject: About) {// fill ClientObject with all information of the client
        var num = 0;
    
        try {
          //console.log("add About")

          //console.log(AboutObject)
          const response = await axios.post(rooturl+"About/Add",{ AboutObject });//the object to send must be *PostObject*
          //console.log("respuestaaa")

          return response.status;
        } catch (error) {
          //console.log("error del tipo" + error);
          //console.log("error del tipo" + error.response.status);          
          return this;
        }
      }


      async GetAbout(EmailWorker: string) {// fill ClientObject with all information of the client       
        let multimediaObj = new About();
        try {
          const response = await axios.post(rooturl+"About/Get",{EmailWorker});//the object to send must be *PostObject*
          multimediaObj= response.data
          //console.log(multimediaObj)
          return multimediaObj;
        } catch (error) {
          //console.log("error del tipo" + error);
          //console.log("error del tipo" + error.response.status);          
          return this;
        }
      }

      async DeleteHiring(EmailWorker: string) {// fill ClientObject with all information of the client
        var num = 0;
    
        try {
          const response = await axios.post(rooturl+"About/Delete",{EmailWorker});//the object to send must be *PostObject*
          //console.log(response)
          return response.status;//404 no encontro 202 se elimino
        } catch (error) {
          //console.log("error del tipo" + error);
          //console.log("error del tipo" + error.response.status);          
          return this;
        }
      }

}