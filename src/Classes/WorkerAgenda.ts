
import { Agenda } from './Agenda';
import {rooturl} from './ip'
import axios from 'axios'
export class WorkerAgenda {
    _id:String
    EmailPremiumWorker:string
    ListOfAgendas: Agenda[]


    constructor(EmailPremiumWorker?:string,Post?:Agenda,_id?:string){
        this._id=_id
        this.EmailPremiumWorker=EmailPremiumWorker 
        this.ListOfAgendas = new Array();
        this.ListOfAgendas.push(Post)
    }

    async AddAgenda(AgendaObject: WorkerAgenda) {// fill ClientObject with all information of the client
        var num = 0;
    
        try {
          console.log("add Agenda")
          const response = await axios.post(rooturl+"Agenda/Add",{ AgendaObject });//the object to send must be *PostObject*
        
          return response.status;
        } catch (error) {
          console.log("error del tipo" + error);
          console.log("error del tipo" + error.response.status);          
          return this;
        }
      }


      async GetAgenda(EmailPremiumWorker: String) {// fill ClientObject with all information of the client
       
        let Agenda : WorkerAgenda;
        try {
          console.log("Get Agenda")
          const response = await axios.post(rooturl+"Agenda/GetAgenda",{ EmailPremiumWorker });//the object to send must be *PostObject*
          Agenda=response.data
          return Agenda;
        } catch (error) {
          console.log("error del tipo" + error);
          console.log("error del tipo" + error.response.status);          
          return this;
        }
      }


      async DeleteAgenda(EmailPremiumWorker: String,IdAgenda:String) {// fill ClientObject with all information of the client
        var num = 0;
    
        try {
          console.log("Get POST")
          const response = await axios.post(rooturl+"Agenda/Delete",{ EmailPremiumWorker, IdAgenda});//the object to send must be *PostObject*
          return response.status;
        } catch (error) {
          console.log("error del tipo" + error);
          console.log("error del tipo" + error.response.status);          
          return this;
        }
      }

}