
import axios from 'axios'
import {rooturl} from './ip'
import {Profession} from './Profession'
export class Category {
    constructor(
        Name:String,
        Categories:Profession
        ){}
    

    async AddCategory(Category: Category) {// fill ClientObject with all information of the client
        var num = 0;
    
        try {
          console.log("add Notifications")

          console.log(Category)
          const response = await axios.post(rooturl+"Category/Add",{ Category });//the object to send must be *PostObject*
          console.log("respuestaaa")

          return response;
        } catch (error) {
          console.log("error del tipo" + error);
          console.log("error del tipo" + error.response.status);          
          return this;
        }
      }


      async GetAll() {// fill ClientObject with all information of the client
        var num = 0;
    
        try {
          const response = await axios.post(rooturl+"Category/Get",{});//the object to send must be *PostObject*
          console.log(response)
          return response;
        } catch (error) {
          console.log("error del tipo" + error);
          console.log("error del tipo" + error.response.status);          
          return this;
        }
      }

      async GetProfessionsFromCategory(NameProfession: string) {// fill ClientObject with all information of the client
        var num = 0;
    
        try {
          const response = await axios.post(rooturl+"Category/GetProfession",{NameProfession});//the object to send must be *PostObject*
          console.log(response)
          return response;
        } catch (error) {
          console.log("error del tipo" + error);
          console.log("error del tipo" + error.response.status);          
          return this;
        }
      }

}