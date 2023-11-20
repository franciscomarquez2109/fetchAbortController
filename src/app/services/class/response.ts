export class ResponseMod {
    success :boolean;
    msg     :string;
    payload :any;

    constructor(success:boolean,msg:string,payload:any) {
        this.success = success;
        this.msg     = msg;
        this.payload = payload;
    }
    
}