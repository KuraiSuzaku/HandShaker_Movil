import {AddressClass } from './AddressClass'
import User  from './User'
import {rooturl} from './ip'
import axios from 'axios'

export  class Client extends User {
    _id?:string  
    IdClient?:string
    ClientType?:boolean
    Addresses?:AddressClass[]
   
    constructor(UserEmail:string,UserPassword:string,IdClient?:string,Addressess?:AddressClass[],ClientType?:boolean){
        super(UserEmail,UserPassword)
        this.IdClient=IdClient
        this.Addresses=Addressess
        this.ClientType=ClientType      
    }

    async GetClientInformation(ClientObject: Client) {// fill ClientObject with all information of the client
        var num = 0;
    
        try {
          const response = await axios.post(rooturl+"Client/GetClientInformation",{ ClientObject });//the object to send must be *ClientObject*
          ClientObject=response.data;
          console.log("ID...   "+ClientObject._id);      
         
          return ClientObject;
        } catch (error) {
          console.log("error del tipo" + error);
          console.log("error del tipo" + error.response.status);
           let response = error.response.status;
          return response;
        }
      }

      async Register(ClientObject: Client) {// Needs Password, Needs Email, needs SuscriptionDate,
        var num = 0;
      
        try {
      
          const response = await axios.post(rooturl+"Client/Register",{ ClientObject });//the object to send must be *WorkerObject*  
        
          return 1;
        } catch (error) {
          console.log("error del tipo" + error);
          console.log("error del tipo" + error.response.status);
          let response = error.response.status;
          return response;
        }
      }
   
}

export default Client