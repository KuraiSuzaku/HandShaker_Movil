
import { Post } from './Post';
import axios from 'axios'
export class Posts {
    _id:String
    IdPremiumWorker:string
    ListOfPosts: Post[]


    constructor(IdPremiumWorker?:string,Post?:Post,_id?:string){
        this._id=_id
        this.IdPremiumWorker=IdPremiumWorker 
        this.ListOfPosts = new Array();
        this.ListOfPosts.push(Post)
    }

    async AddPost(PostObject: Posts) {// fill ClientObject with all information of the client
        var num = 0;
    
        try {
          console.log("add POST")
          const response = await axios.post("http://192.168.1.72:3001/api/Posts/Add",{ PostObject });//the object to send must be *PostObject*
          console.log("respuestaaa")
          
          return response;
        } catch (error) {
          console.log("error del tipo" + error);
          console.log("error del tipo" + error.response.status);          
          return this;
        }
      }


      async GetPosts(IdPremiumWorker: String) {// fill ClientObject with all information of the client
        var num = 0;
    
        try {
          console.log("Get POST")
          const response = await axios.post("http://192.168.1.72:3001/api/Posts/GetPosts",{ IdPremiumWorker });//the object to send must be *PostObject*
          return this;
        } catch (error) {
          console.log("error del tipo" + error);
          console.log("error del tipo" + error.response.status);          
          return this;
        }
      }

}