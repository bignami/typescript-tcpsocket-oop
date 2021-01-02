class HttpServerMsg {
    
    private _httpVersion : string;
    private _stateCode : string;
    private _contentType: string;
    private _contentLenght: number;
    private _body : string;

    constructor(httpVersions :string, stateCodes: string, contentTypes: string, contentLeghts: number, bodys: string  ){
      this._httpVersion =  httpVersions;
      this._stateCode = stateCodes;
      this._contentType = contentTypes;
      this._contentLenght = bodys.length;
      this._body = bodys;
    }

    get httpVersion() {
        return this._httpVersion;
    }

    get stateCode() {
        return this._stateCode;
    }

    get contentType() {
        return this._contentType;
    }

    get contentLenght() {
        return this._contentLenght;
    }

    get body() {
        return this._body;
    }
    set contentLenght( contentLeght: number){
       contentLeght = this.body.length
       this.contentLenght = contentLeght
    }
    responceMessage() {
       return this._httpVersion + this._stateCode +"\r\n"+
       "Content-type: " + this._contentType + "\r\n" +
       "Conetent-Length: " + this._contentLenght +"\r\n" +
       "\r\n"
       +this._body +"";
    }
}

export {HttpServerMsg};