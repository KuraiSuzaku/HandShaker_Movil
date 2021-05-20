import {rooturl} from './ip'
import axios from 'axios'

export  class Agenda {
    EmailUserTo?:string  
    EventType?:string
    Title:string
    Date:Date
    Description:string
   
    constructor(Title:string,Date:Date,Description:string,EmailUserTo?:string,EventType?:string){
       
        this.EmailUserTo=EmailUserTo
        this.EventType=EventType
        this.Title=Title
        this.Date=Date
        this.Description=Description
    }

  
}

