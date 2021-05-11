import { Notification } from './Notification';
import axios from 'axios'
import {rooturl} from './ip'
export class AllNotifications {
    constructor(
        Email:String,
        ListOfNotifications:Notification[]    
        ){}
    

    async AddNotification(NotificationObject: AllNotifications) {// fill ClientObject with all information of the client
        var num = 0;
    
        try {
          console.log("add Notifications")

          console.log(NotificationObject)
          const response = await axios.post(rooturl+"Notification/Add",{ NotificationObject });//the object to send must be *PostObject*
          console.log("respuestaaa")

          return response;
        } catch (error) {
          console.log("error del tipo" + error);
          console.log("error del tipo" + error.response.status);          
          return this;
        }
      }


      async GetNotification(Email: string) {// fill ClientObject with all information of the client
        var num = 0;
    
        try {
          const response = await axios.post(rooturl+"Chat/GetNotifications",{Email});//the object to send must be *PostObject*
          console.log(response)
          return response;
        } catch (error) {
          console.log("error del tipo" + error);
          console.log("error del tipo" + error.response.status);          
          return this;
        }
      }

}