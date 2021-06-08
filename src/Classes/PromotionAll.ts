import { Hiring } from './Hiring';
import axios from 'axios'
import {rooturl} from './ip'
import User from './User';
import { Promotion } from './Promotion';
export class PromotionAll {
    constructor(
        EmailPremiumWorker?:string,
        ListOfPromotions?: Promotion[],
        userWorker?: User,
        Id?:String
        ){}
    

    async AddPromotion(PromotionObject: PromotionAll) {// fill ClientObject with all information of the client
        var num = 0;
        console.log("add promotion");
        try {
          //console.log("add Notifications")

          //console.log(HiringObject)
          const response = await axios.post(rooturl+"Promotions/Add",{ PromotionObject });//the object to send must be *PostObject*
          //console.log("respuestaaa")

          return response.status;
        } catch (error) {
          //console.log("error del tipo" + error);
          //console.log("error del tipo" + error.response.status);          
          return error.response.status;
        }
      }

      async GetPromotion() {// fill ClientObject with all information of the client
        var num = 0;
    console.log("get promos")
        try {
          //console.log("add Notifications")

          //console.log(HiringObject)
          const response = await axios.post(rooturl+"Promotions/GetPromotions",{ });//the object to send must be *PostObject*
        //  console.log("respuestaaa *"+ JSON.stringify(response.data[0]))
        console.log("prem")
        console.log("leng "+ response.data.length)
        console.log("respuestaaa 1**"+ response.data[0].EmailPremiumWorker)
       
          return response.data;
        } catch (error) {
          //console.log("error del tipo" + error);
          //console.log("error del tipo" + error.response.status);          
          return error.response.status;
        }
      }
     

}