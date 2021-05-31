import { AddressClass } from './AddressClass';

import axios from 'axios'
import PremiumWorker from './PremiumWorker';
import {rooturl} from './ip'
import User from './User';
export class Hiring {

    constructor(
    EmailWorker:String,
    Email:String,
    Subject: String,
    Date:Date,
    HiringDate:Date, 
    indications:String,
    Addresses:AddressClass[],
    Status:String,
    IDcreated:String,
    _id?:String,
    userWorker?: User,
    userClient?: User
    ){}



  

}