import {AddressClass } from './AddressClass'
import User  from './User'
import {rooturl} from './ip'
import axios from 'axios'
import PremiumWorker from './PremiumWorker'

export  class Worker extends User {
    _id?:string
    IdWorker?:string
    Category?:string
    Profession?:string
    JobDescription?:string
    EmailContact?:string
    isPremium?:boolean
    Addresses?:AddressClass[]
    WorkerType?:boolean

    constructor(UserEmail:string,UserPassword?:string,IdWorker?:string,Category?:string,Profession?:string,JobDescription?:string,EmailContact?:string,isPremium?:boolean,Addressess?:AddressClass[],WorkerType?:boolean){
        super(UserEmail,UserPassword)
        this.IdWorker=IdWorker
        this.Category=Category
        this.Profession=Profession
        this.JobDescription=JobDescription
        this.EmailContact=EmailContact
        this.isPremium=isPremium 
        this.Addresses=Addressess
        this.WorkerType=WorkerType      
    }

    
    async Register(WorkerObject: Worker) {// Needs Password, Needs Email, needs SuscriptionDate,
      var num = 0;
      console.log("trabajador Add");
      try {

        const response = await axios.post(rooturl+"Worker/Register",{ WorkerObject });//the object to send must be *WorkerObject*  
     
     
        console.log(" Respuesta "+response)
        if (response.status==409){
          console.log("mal")
        return "0";
      }else
        {
          console.log("BIEN")
          return "1"
        }

      } catch (error) {
        console.log("error del tipo" + error);
        console.log("error del tipo" + error.response.status);
   
        return "0";
      }


    }

    async ChangeToPremium(WorkerObject: PremiumWorker) {// Needs Password, Needs Email, needs SuscriptionDate,
      var num = 0;
      console.log("change to premium...");
      try {

        const response = await axios.post(rooturl+"Worker/ChangeToPremium",{ WorkerObject });//the object to send must be *WorkerObject*  
        console.log(response);
        WorkerObject=response.data;
        console.log(WorkerObject);
        return WorkerObject;
      } catch (error) {
        console.log("error del tipo" + error);
        console.log("error del tipo" + error.response.status);
        this.Response = error.response.status;
        return this;
      }
    }

    async GetWorkerInformation(WorkerObject: Worker) {// fill workerObject with all information of the worker
        var num = 0;
    
        try {
          const response = await axios.post(rooturl+"Worker/GetWorkerInformation",{ WorkerObject });//the object to send must be *WorkerObject*  
          WorkerObject=response.data;
        
          return WorkerObject;
        } catch (error) {
       
          this.Response = error.response.status;
          return this;
        }
      }

      async GetAllWorkers() {// Get All workers, even the premium workers
        var num = 0;
    
        try {
          const response = await axios.post(rooturl+"/Worker/GetAllWorkers",{ });//the object to send must be *WorkerObject* 
       
          let AllWorkerArray:Worker[]

          AllWorkerArray= response.data;
       
         
    
          return AllWorkerArray; //returns an array of premiumWorker
        } catch (error) {
          console.log("error del tipo" + error);
          console.log("error del tipo" + error.response.status);
          this.Response = error.response.status;
          return this;
        }
      }

      
      async GetOnlyWorkers() {// Get All workers, even the premium workers
        var num = 0;
    
        try {
          const response = await axios.post(rooturl+"Worker/GetOnlyWorkers",{ });//the object to send must be *WorkerObject*           
       
          let OnlyWorkerArray:Worker[]

          OnlyWorkerArray= response.data;
      
        
        
          return OnlyWorkerArray; //returns an array of premiumWorker
        } catch (error) {
          console.log("error del tipo" + error);
          console.log("error del tipo" + error.response.status);
          this.Response = error.response.status;
          return this;
        }
      }

      async UpdateWorkers(WorkerObject: Worker) {// Get All workers, even the premium workers
     
        try {
          const response = await axios.post(rooturl+"Worker/UpdateWorker",{ WorkerObject });//the object to send must be *WorkerObject*
          return response; //returns an array of premiumWorker

        } catch (error) {
          console.log("error del tipo" + error);
          console.log("error del tipo" + error.response.status);
          this.Response = error.response.status;
          return this;
        }

      }

      async GetWorkersWithCategory(Category: string) {// Get All workers, even the premium workers
        let ArrWorker : Worker[];
        try {
          const response = await axios.post(rooturl+"Worker/GetWorkersCategory",{ Category });//the object to send must be *WorkerObject*
          ArrWorker=response.data
          return ArrWorker; //returns an array of premiumWorker

        } catch (error) {
          console.log("error del tipo" + error);
          console.log("error del tipo" + error.response.status);
          this.Response = error.response.status;
          return this;
        }

      }

      
      async GetWorkersWithProfession(Profession: string) {// Get 
        let ArrWorker : Worker[];
        try {
          const response = await axios.post(rooturl+"Worker/GetWorkersProfession",{ Profession });//the object to send must be *WorkerObject*
          ArrWorker=response.data
          return ArrWorker; //returns an array of premiumWorker

        } catch (error) {
          console.log("error del tipo" + error);
          console.log("error del tipo" + error.response.status);
          this.Response = error.response.status;
          return this;
        }

      }

}
export default Worker