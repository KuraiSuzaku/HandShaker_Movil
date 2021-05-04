import { Image } from './Image';
import { ItemPrice } from './ItemPrice';
import axios from 'axios'
import {rooturl} from './ip'

export class Prices {
    //_id?:String
    IdPremiumWorker?:string
    ListOfPrices?: ItemPrice[]
    Id?:String

    constructor(IdPremiumWorker:string,Item:ItemPrice,_id?:string){
     
        this.IdPremiumWorker=IdPremiumWorker
        this.ListOfPrices = new Array();
        this.ListOfPrices.push(Item)
    }

    async AddPrice(PriceObject: Prices) {// fill ClientObject with all information of the client
        var num = 0;
    
        try {
          console.log("add POST")
          console.log(PriceObject)
          const response = await axios.post(rooturl+"Prices/Add",{ PriceObject });//the object to send must be *PostObject*

          return response;
        } catch (error) {
          console.log("error del tipo" + error);
          console.log("error del tipo" + error.response.status);          
          return this;
        }
      }


      async GetPrice(IdPremiumWorker: String) {// fill ClientObject with all information of the client
        var num = 0;
    
        try {
          console.log("Get Price")
          const response = await axios.post(rooturl+"Prices/Get",{ IdPremiumWorker });//the object to send must be *PostObject*
          return this;
        } catch (error) {
          console.log("error del tipo" + error);
          console.log("error del tipo" + error.response.status);          
          return this;
        }
      }



}