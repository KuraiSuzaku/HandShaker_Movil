import {AddressClass } from './AddressClass'
import User  from './User'
import {rooturl} from './ip'
import axios from 'axios'

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

    constructor(UserEmail:string,UserPassword:string,IdWorker?:string,Category?:string,Profession?:string,JobDescription?:string,EmailContact?:string,isPremium?:boolean,Addressess?:AddressClass[],WorkerType?:boolean){
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


    async GetWorkerInformation(WorkerObject: Worker) {// fill workerObject with all information of the worker
        var num = 0;
    
        try {
          const response = await axios.post(rooturl+"Worker/GetWorkerInformation",{ WorkerObject });//the object to send must be *WorkerObject*  
          WorkerObject=response.data;
          console.log("aqui...")
          console.log(JSON.stringify(WorkerObject));
          console.log("profesion   "+WorkerObject.Profession);
          console.log("ID...   "+WorkerObject._id);
          return WorkerObject;
        } catch (error) {
          console.log("error del tipo" + error);
          console.log("error del tipo" + error.response.status);
          this.Response = error.response.status;
          return this;
        }
      }

      async GetAllWorkers() {// Get All workers, even the premium workers
        var num = 0;
    
        try {
          const response = await axios.post(rooturl+"/Worker/GetAllWorkers",{ });//the object to send must be *WorkerObject*           
          console.log("All Worker")
          console.log(JSON.stringify(response.data)); 
          let AllWorkerArray:Worker[]

          AllWorkerArray= response.data;
          console.log("Aquiiii");
           console.log(JSON.stringify(AllWorkerArray)); 
           console.log("element");
           AllWorkerArray.forEach(element => {
            console.log(element.Name);
          });
        
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
          console.log("Only Worker")
          console.log(JSON.stringify(response.data)); 
          let OnlyWorkerArray:Worker[]

          OnlyWorkerArray= response.data;
          console.log("Aquiiii");
           console.log(JSON.stringify(OnlyWorkerArray)); 
           console.log("element");
           OnlyWorkerArray.forEach(element => {
            console.log(element.Name);
          });
        
          return OnlyWorkerArray; //returns an array of premiumWorker
        } catch (error) {
          console.log("error del tipo" + error);
          console.log("error del tipo" + error.response.status);
          this.Response = error.response.status;
          return this;
        }
      }
   
}
export default Worker