import { Chat } from './Chat';
import axios from 'axios'
import {rooturl} from './ip'
export class AllChats {
    constructor(
        Email?:String,
        ListOfChats?:Chat[]     
        ){}
    

    async AddChat(ChatObject: AllChats) {// fill ClientObject with all information of the client
        var num = 0;
    
        try {
          console.log("add Multimedia")

          console.log(ChatObject)
          const response = await axios.post(rooturl+"Chat/Add",{ ChatObject });//the object to send must be *PostObject*
          console.log("respuestaaa")

          return response;
        } catch (error) {
          console.log("error del tipo" + error);
          console.log("error del tipo" + error.response.status);          
          return this;
        }
      }


      async GetChats(Email: string) {// fill ClientObject with all information of the client
        let ArrChat : AllChats[];
        try {
          const response = await axios.post(rooturl+"Chat/Get",{Email});//the object to send must be *PostObject*
          ArrChat= response.data
          return ArrChat;
        } catch (error) {
          console.log("error del tipo" + error);
          console.log("error del tipo" + error.response.status);          
          return this;
        }
      }

      async GetChatWith(Email: string,EmailWith: string) {// fill ClientObject with all information of the client
        let Chat = new AllChats();
        try {
          const response = await axios.post(rooturl+"Chat/Get",{Email,EmailWith});//the object to send must be *PostObject*
          Chat=response.data
          return Chat;
        } catch (error) {
          console.log("error del tipo" + error);
          console.log("error del tipo" + error.response.status);          
          return this;
        }
      }

}