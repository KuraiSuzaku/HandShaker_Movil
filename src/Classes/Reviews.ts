
import { Review } from './Review';
import {rooturl} from './ip'
import axios from 'axios'
export class Reviews {
    
    
    constructor(
    _id:String,
    EmailPremiumWorker:string,
    ListOfReview: Review[],
    Id:String
    ){}


    async AddReview(ReviewObject: Reviews) {// fill ClientObject with all information of the client
        var num = 0;
    
        try {
          //console.log("add Review")
          const response = await axios.post(rooturl+"Review/Add",{ ReviewObject });//the object to send must be *PostObject*
        
          return response.status;
        } catch (error) {
          //console.log("error del tipo" + error);
          //console.log("error del tipo" + error.response.status);          
          return this;
        }
      }


      async GetReview(EmailPremiumWorker: String) {// fill ClientObject with all information of the client
        let ReviewsOfWorker : Reviews;
        try {
          //console.log("Get Review")
          const response = await axios.post(rooturl+"Review/GetPosts",{ EmailPremiumWorker });//the object to send must be *PostObject*
          ReviewsOfWorker=response.data
          return ReviewsOfWorker;
        } catch (error) {
          //console.log("error del tipo" + error);
          //console.log("error del tipo" + error.response.status);          
          return this;
        }
      }

      async DeleteReview(EmailPremiumWorker: String,IdReview:String) {
        var num = 0;
    
        try {
  
          const response = await axios.post(rooturl+"Review/Delete",{ EmailPremiumWorker, IdReview});//the object to send must be *PostObject*
          return response.status;
        } catch (error) {
          //console.log("error del tipo" + error);
          //console.log("error del tipo" + error.response.status);          
          return this;
        }
      }

}