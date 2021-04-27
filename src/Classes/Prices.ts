import { Image } from './Image';
import { ItemPrice } from './ItemPrice';
import axios from 'axios'

export class Price {
    _id?:String
    IdPremiumWorker?:string
    ListOfPrices?: ItemPrice[]
    Id?:String

    constructor(IdPremiumWorker:string,Item:ItemPrice,_id?:string){
        this._id=_id
        this.IdPremiumWorker=IdPremiumWorker
        this.ListOfPrices = new Array();
        this.ListOfPrices.push(Item)
    }

    async AddPrice(PriceObject: Price) {// fill ClientObject with all information of the client
        var num = 0;
    
        try {
          console.log("add POST")
          const response = await axios.post("http://192.168.1.72:3001/api/Prices/Add",{ PriceObject });//the object to send must be *PostObject*
          return this;
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
          const response = await axios.post("http://192.168.1.72:3001/api/Prices/Get",{ IdPremiumWorker });//the object to send must be *PostObject*
          return this;
        } catch (error) {
          console.log("error del tipo" + error);
          console.log("error del tipo" + error.response.status);          
          return this;
        }
      }



}