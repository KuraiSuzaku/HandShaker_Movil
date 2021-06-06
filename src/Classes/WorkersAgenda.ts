import { Agenda } from './Agenda';
import axios from 'axios'
import {rooturl} from './ip'
export class WorkersAgenda {
    constructor(
        EmailPremiumWorker:String,
        ListOfAgendas:Agenda[]    
        ){}
    

    async AddAgenda(AgendaObject: WorkersAgenda) {// fill ClientObject with all information of the client
        var num = 0;
    
        try {
          //console.log("add Agenda")

          //console.log(AgendaObject)
          const response = await axios.post(rooturl+"Agenda/Add",{ AgendaObject });//the object to send must be *PostObject*
          //console.log("respuestaaa")

          return response;
        } catch (error) {
          //console.log("error del tipo" + error);
          //console.log("error del tipo" + error.response.status);          
          return this;
        }
      }


      async GetAgenda(EmailPremiumWorker: string) {// fill ClientObject with all information of the client
        var num = 0;
    
        try {
          const response = await axios.post(rooturl+"Agenda/GetAgenda",{EmailPremiumWorker});//the object to send must be *PostObject*
          //console.log(response)
          return response;
        } catch (error) {
          //console.log("error del tipo" + error);
          //console.log("error del tipo" + error.response.status);          
          return this;
        }
      }


      async DeleteAgenda(EmailPremiumWorker: string,IdAgenda: string) {// fill ClientObject with all information of the client
        var num = 0;
    
        try {
          const response = await axios.post(rooturl+"Agenda/Delete",{EmailPremiumWorker,IdAgenda});//the object to send must be *PostObject*
          //console.log(response)
          return response;
        } catch (error) {
          //console.log("error del tipo" + error);
          //console.log("error del tipo" + error.response.status);          
          return this;
        }
      }

}