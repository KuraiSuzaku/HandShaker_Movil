import {PhoneNumber} from './PhoneNumber';
import {Image} from './Image';
import axios from 'axios'
export  class User {
  Email: string;
  Password?: string;
  IdUser?: string;
  Name?: string;
  LastName?: string;
  ProfilePicture?: Image;
  Phones?: PhoneNumber[];
  UserType?: String;
  Birthday?: Date;
  Response?: String;
  _id?:String

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
    Response?: String
  ) {
    this.Email = Email;
    this.Password = Password;
    this.IdUser = IdUser;
    this.Name = Name;
    this.LastName = LastName;
    this.ProfilePicture = ProfilePicture;
    this.Phones = Phones;
    this.Email = Email;
    this.UserType = UserType;
    this.Birthday = Birthday;
    this.Response = Response;
  }

  async Login(userObject: User) {
    var num = 0;
    console.log("start")
   try {
        console.log("login")
      const response = await axios.post("http://192.168.100.9:3001/api/user/Login",{ userObject });
      console.log(response.status)
      console.log(response.data)
      this.Email = response.data.Email;
      this.UserType = response.data.UserType;
      this.Response = "1";
      return this;
    } catch (error) {
      if( error.response.status==404||error.response.status==401){
        console.log("aqui tipo error" );
        console.log("error del tipo" + error);
      console.log("error del tipo" + error.response.status);
      this.Response = error.response.status;
      return this;}
    }
  
/*
   await axios.post("http://192.168.1.72:3001/api/user/Login", {userObject})
    .then(function (response) {
      try{ // your own try...catch block to catch the error before axios ..catch
      console.log(response);
    
      }
      catch(e) {} // your catch block
    })
    .catch(function (error) {
      console.log(error);
    });*/

/*console.log("email "+userObject.Email);
axios.post("http://192.168.1.72:3001/api/user/Login",{ userObject })
    .then(res => {
      console.log(res.status)
        console.log(res.data)
        this.Email = res.data.Email;
        this.UserType = res.data.UserType;
        this.Response = "1";
        return this;
    })
    .catch();
*/
}

  AddPhone(PhoneDescription: String = "", Phone: String = ""): void {
    this.Phones?.push(new PhoneNumber(PhoneDescription, Phone));
  }






  
}
export default User