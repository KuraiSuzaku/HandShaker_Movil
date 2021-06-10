import { Notification } from './Notification';
import axios from 'axios'
import {rooturl} from './ip'
export class AllNotifications {
    constructor(
        Email?:String,
        ListOfNotifications?:Notification[]    
        ){}
    

    async AddNotification(NotificationObject: AllNotifications) {// fill ClientObject with all information of the client
     
        try {
          //console.log("add Notifications")

          //console.log(NotificationObject)
          const response = await axios.post(rooturl+"Notification/Add",{ NotificationObject });//the object to send must be *PostObject*
          //console.log("respuestaaa")

          return response.status;
        } catch (error) {
          //console.log("error del tipo" + error);
          //console.log("error del tipo" + error.response.status);          
          return  error.response.status;
        }
      }


      async GetNotification(Email: string) {// fill ClientObject with all information of the client
        console.log("aqui")
        var num = 0;
        let Notification = new AllNotifications();
        try {
          console.log("enviado")
          const response = await axios.post(rooturl+"Notification/GetNotifications",{Email});//the object to send must be *PostObject*
          console.log("---"+response.status)
          Notification=response.data
          //console.log(Notification)
          return response;
        } catch (error) {
          //console.log("error del tipo" + error);
          //console.log("error del tipo" + error.response.status);          
          return  error.response.status;
        }
      }

}