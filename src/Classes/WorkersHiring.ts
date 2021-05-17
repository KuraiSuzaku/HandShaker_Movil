import { Hiring } from './Hiring';
import axios from 'axios'
import {rooturl} from './ip'
export class WorkersHiring {
    constructor(
        EmailPremiumWorker?:String,
        ListOfHirings?:Hiring[]    
        ){}
    

    async AddHiring(HiringObject: WorkersHiring) {// fill ClientObject with all information of the client
        var num = 0;
    
        try {
          console.log("add Notifications")

          console.log(HiringObject)
          const response = await axios.post(rooturl+"Hiring/Add",{ HiringObject });//the object to send must be *PostObject*
          console.log("respuestaaa")

          return response.status;
        } catch (error) {
          console.log("error del tipo" + error);
          console.log("error del tipo" + error.response.status);          
          return error.response.status;
        }
      }


      async GetHiring(EmailPremiumWorker: string) {// fill ClientObject with all information of the client
     
        let HiringWorker = new WorkersHiring();
        try {
          const response = await axios.post(rooturl+"Hiring/GetHiring",{EmailPremiumWorker});//the object to send must be *PostObject*
          HiringWorker=response.data
          console.log(HiringWorker)
          return HiringWorker;
        } catch (error) {
          console.log("error del tipo" + error);
          console.log("error del tipo" + error.response.status);          
          return this;
        }
      }


      async DeleteHiring(EmailPremiumWorker: string,IdHiring: string) {// fill ClientObject with all information of the client
          try {
          const response = await axios.post(rooturl+"Hiring/Delete",{EmailPremiumWorker,IdHiring});//the object to send must be *PostObject*
          console.log(response)
          return response.status;
        } catch (error) {
          console.log("error del tipo" + error);
          console.log("error del tipo" + error.response.status);          
          return this;
        }
      }

}