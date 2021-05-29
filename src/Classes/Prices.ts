import { Image } from './Image';
import { ItemPrice } from './ItemPrice';
import axios from 'axios'
import {rooturl} from './ip'

export class Prices {
    //_id?:String
    EmailPremiumWorker?:string
    ListOfPrices?: ItemPrice[]
    Id?:String

    constructor(EmailPremiumWorker:string,Item:ItemPrice,_id?:string){
     
        this.EmailPremiumWorker=EmailPremiumWorker
        this.ListOfPrices = new Array();
        this.ListOfPrices.push(Item)
    }

    async AddPrice(PriceObject: Prices) {// fill ClientObject with all information of the client
        var num = 0;
    
        try {
          console.log("add POST")
      
          const response = await axios.post(rooturl+"Prices/Add",{ PriceObject });//the object to send must be *PostObject*

          return response.status;
        } catch (error) {
          console.log("error del tipo" + error);
          console.log("error del tipo" + error.response.status);          
          return this;
        }
      }


      async GetPrice(EmailPremiumWorker: String) {// fill ClientObject with all information of the client
        var num = 0;
        let EmailPrice : Prices;
        try {
          console.log("Get Price")
          const response = await axios.post(rooturl+"Prices/Get",{ EmailPremiumWorker });//the object to send must be *PostObject*
          EmailPrice=response.data
          return EmailPrice;
        } catch (error) {
          console.log("error del tipo" + error);
          console.log("error del tipo" + error.response.status);          
          return this;
        }
      }



}