
import {AddressClass } from './AddressClass'
import {rooturl} from './ip'
import User  from './User'
import axios from 'axios'

export  class PremiumWorker extends User {
    _id?:string 
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
        console.log("premium  ...")
        try {
          const response = await axios.post(rooturl+"PremiumWorker/GetPremiumWorkerInformation",{ PremiumWorkerObject });//the object to send must be *PremiumWorkerObject*
          PremiumWorkerObject=response.data;
          console.log("****** "+PremiumWorkerObject._id);
        
          return PremiumWorkerObject;
        } catch (error) {
          console.log("error del tipo" + error);
          console.log("error del tipo" + error.response.status);
          this.Response = error.response.status;
          return this;
        }
      }

      async ChangeToPremium(WorkerObject: Worker) {// Needs Password, Needs Email, needs SuscriptionDate,
        var num = 0;
         let PremiumWorkerObject:PremiumWorker
        try {
          console.log("New Premium "+ WorkerObject);
          const response = await axios.post(rooturl+"Worker/ChangeToPremium",{ WorkerObject });//the object to send must be *WorkerObject*  
          PremiumWorkerObject=response.data;
          return PremiumWorkerObject;
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
          const response = await axios.post(rooturl+"PremiumWorker/GetAllPremiumWorkers",{ });//the object to send must be *WorkerObject*           
          console.log("Premium Worker")
          console.log(JSON.stringify(response.data)); 
          let PremiumWorkerArray:PremiumWorker[]

          PremiumWorkerArray= response.data;
          console.log("Aquiiii");
           console.log(JSON.stringify(PremiumWorkerArray)); 
      
         
        
          return PremiumWorkerArray; //returns an array of premiumWorker
        } catch (error) {
          console.log("error del tipo" + error);
          console.log("error del tipo" + error.response.status);
          this.Response = error.response.status;
          return this;
        }
      }
      async ChangeToWorker(ChangeToWorker: Worker) {// Needs Password, Needs Email.
       
        try {
  
          const response = await axios.post(rooturl+"PremiumWorker/ChangeToPremium",{ ChangeToWorker });//the object to send must be *WorkerObject*  
        
          return 1;
        } catch (error) {
          console.log("error del tipo" + error);
          console.log("error del tipo" + error.response.status);
          this.Response = error.response.status;
          return this;
        }
      }

      
      async GetPremiumWorkersWithCategory(Category: string) {// Get All workers, even the premium workers
       
        try {
          const response = await axios.post(rooturl+"PremiumWorker/GetPremiumWorkersCategory",{ Category });//the object to send must be *WorkerObject*
          return response; //returns an array of premiumWorker

        } catch (error) {
          console.log("error del tipo" + error);
          console.log("error del tipo" + error.response.status);
          this.Response = error.response.status;
          return this;
        }

      }

      
      async GetPremiumWorkersWithProfession(Profession: string) {// Get 
       console.log("profession  ************"+Profession)
        try {
          let ArrPremiumWorkers: PremiumWorker[];
          const response = await axios.post(rooturl+"PremiumWorker/GetPremiumWorkersProfession",{ Profession });//the object to send must be *WorkerObject*
          ArrPremiumWorkers=response.data
          console.log("respuesta ´de "+Profession +"  "+ArrPremiumWorkers)
          return ArrPremiumWorkers; //returns an array of premiumWorker

        } catch (error) {
          console.log("error del tipo" + error);
          console.log("error del tipo" + error.response.status);
          this.Response = error.response.status;
          return this;
        }

      }
   
}
export default PremiumWorker