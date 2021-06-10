import {PhoneNumber} from './PhoneNumber';
import Image from './Image';
import {rooturl} from './ip'
import axios from 'axios'
export  class User {
  Email?: string;
  Password?: string;
  IdUser?: string;
  Name?: string;
  LastName?: string;
  ProfilePicture?: Image;
  HeaderPicture?:Image;
  Phones?: PhoneNumber[];
  UserType?: String;
  Birthday?: Date;
  Response?: String;
  _id?:String
  RatingStar?:number
  NReviews?:number

  constructor(
    Email: string,
    Password?: string,
    IdUser?: string,
    Name?: string,
    LastName?: string,
    ProfilePicture?: Image,
    Phones?: PhoneNumber[],
    UserType?: String,
    Birthday?: Date,
    Response?: String,
    HeaderPicture?:Image,
    RatingStar?:number,
    NReviews?:number
  ) {
    this.Email = Email;
    this.Password = Password;
    this.IdUser = IdUser;
    this.Name = Name;
    this.LastName = LastName;
    this.ProfilePicture = ProfilePicture;
    this.Phones = new Array();
    this.Email = Email;
    this.UserType = UserType;
    this.Birthday = Birthday;
    this.Response = Response;
    this.HeaderPicture = HeaderPicture;
    this.RatingStar = RatingStar;
    this.NReviews = NReviews;
    
  }

  async Login(userObject: User) {
    var num = 0;
    //console.log("start")
   try {
        //console.log("login")
      const response = await axios.post(rooturl+"user/Login",{ userObject });
      this.Email = response.data.Email;
      this.UserType = response.data.UserType;
      this.Response = "1";
      return this;
    } catch (error) {
      if( error.response.status==404||error.response.status==401){
        //console.log("aqui tipo error" );
        //console.log("error del tipo" + error);
      //console.log("error del tipo" + error.response.status);
      this.Response = error.response.status;
      return this;}
    }
  }
    
    async GetUserInformation(Email: String) {// fill workerObject with all information of the worker
      var num = 0;
      let UserObject : User; 
      try {
        //console.log("email   "+Email)
        const response = await axios.post(rooturl+"user/GetInfo",{ Email });//the object to send must be *WorkerObject*  
        UserObject=response.data;
        //console.log("respuesta   "+UserObject)
     //   //console.log("aqui...")
     //   //console.log(JSON.stringify(UserObject));
    
        return UserObject;
      } catch (error) {
        //console.log("error del tipo" + error);
        //console.log("error del tipo" + error.response.status);
        this.Response = error.response.status;
        return this;
      }
    }

  

    async UpdateUser(UserObject: User) {// Get All workers, even the premium workers
     
      try {
        const response = await axios.post(rooturl+"user/UpdateUser",{ UserObject });//the object to send must be *WorkerObject*
        return response; //returns an array of premiumWorker

      } catch (error) {
        //console.log("error del tipo" + error);
        //console.log("error del tipo" + error.response.status);
        this.Response = error.response.status;
        return this;
      }

    }


/*
   await axios.post("http://192.168.1.72:3001/api/user/Login", {userObject})
    .then(function (response) {
      try{ // your own try...catch block to catch the error before axios ..catch
      //console.log(response);
    
      }
      catch(e) {} // your catch block
    })
    .catch(function (error) {
      //console.log(error);
    });*/

/*//console.log("email "+userObject.Email);
axios.post("http://192.168.1.72:3001/api/user/Login",{ userObject })
    .then(res => {
      //console.log(res.status)
        //console.log(res.data)
        this.Email = res.data.Email;
        this.UserType = res.data.UserType;
        this.Response = "1";
        return this;
    })
    .catch();
*/


  AddPhone(PhoneDescription: String = "", Phone: String = ""): void {
    this.Phones?.push(new PhoneNumber(PhoneDescription, Phone));
  }






  
}
export default User