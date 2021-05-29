
export  class AddressClass {
    Address:string
    BAddress1:string
    BAddress2:string
    neighborhood:string
    Number:string
    Reference:string
    LinkMaps:string
  

    constructor(Address:string,Number:string,_id:string="",Reference:string="",LinkMaps:string=""){
     
        this.Address=Address
        this.Number=Number
        this.Reference=Reference
     
        this.LinkMaps=LinkMaps 
    }

   
}
 