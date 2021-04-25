import {AddressClass } from './AddressClass'
import User  from './User'
import axios from 'axios'

export  class PremiumWorker extends User {
    IdPremiumWorker?:string
    Category?:string
    Profession?:string
    JobDescription?:string
    EmailContact?:string
    isPremium?:boolean
    Addresses?:AddressClass[]
    SuscriptionDate?: Date
    PremiumType?:boolean

    constructor(UserEmail:string,UserPassword:string,IdPremiumWorker?:string,Category?:string,Profession?:string,JobDescription?:string,EmailContact?:string,isPremium?:boolean,Addressess?:AddressClass[],SuscriptionDate?:Date,PremiumType?:boolean){
        super(UserEmail,UserPassword)
        this.IdPremiumWorker=IdPremiumWorker
        this.Category=Category
        this.Profession=Profession
        this.JobDescription=JobDescription
        this.EmailContact=EmailContact
        this.isPremium=isPremium 
        this.Addresses=Addressess
        this.SuscriptionDate=SuscriptionDate
        this.PremiumType=PremiumType      
    }

    async GetPremiumWorkerInformation(PremiumWorkerObject: PremiumWorker) {// fill PremiumWorkerObject with all information of the premium worker
        var num = 0;
    
        try {
          const response = await axios.post("http://192.168.1.72:3001/api/PremiumWorker/GetPremiumWorkerInformation",{ PremiumWorkerObject });//the object to send must be *PremiumWorkerObject*
          PremiumWorkerObject=response.data;
          this.Response = "1";
          return this;
        } catch (error) {
          console.log("error del tipo" + error);
          console.log("error del tipo" + error.response.status);
          this.Response = error.response.status;
          return this;
        }
      }

      async GetPremiumWorkers() {// Get All workers, even the premium workers
        var num = 0;    
        try {
          const response = await axios.post("http://192.168.1.72:3001/api/PremiumWorker/GetAllPremiumWorkers",{ });//the object to send must be *WorkerObject*           
          console.log("Premium Worker")
          console.log(JSON.stringify(response.data)); 
          let PremiumWorkerArray:PremiumWorker[]

          PremiumWorkerArray= response.data;
          console.log("Aquiiii");
           console.log(JSON.stringify(PremiumWorkerArray)); 
           console.log("element");
          PremiumWorkerArray.forEach(element => {
            console.log(element.Name);
          });
        
          return PremiumWorkerArray; //returns an array of premiumWorker
        } catch (error) {
          console.log("error del tipo" + error);
          console.log("error del tipo" + error.response.status);
          this.Response = error.response.status;
          return this;
        }
      }

   
}
export default PremiumWorker