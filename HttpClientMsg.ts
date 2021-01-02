class HttpClientMsg{
    private _url : string;
    private _msgMethod : string;
    private _httpVersion: string;
    private _entityBody: string;
    private _query: Object = {};




    constructor(urls: string, methods: string, httpVersions: string, entityBody: string,) {
        
        if (urls.indexOf("?")>0) {
            
            this._url = urls.substring(0,urls.indexOf("?"));
            this._query = urls.substring(urls.indexOf("?") + 1).split("&").map(it => it.split("=")).reduce((acc : any, it) => {
                acc[it[0]] = it[1];
                return acc;
              }, {});;
            
            

        } else { 
            this._url = urls;
            
        } 
        
        this._msgMethod = methods;
        this._httpVersion = httpVersions;
        this._entityBody = entityBody;
    }
    
    get url() {
        return this._url;
    }

    get msgMethod() {
        return this._msgMethod;
    }

    get httpVersion() {
        return this._httpVersion;
    }

    get entityBody() {
        return this._entityBody;
    }

    get query() {
        return this._query;
    }

    

  /*  httpGetValue() {
        let param :string = this.httpGetQuery();
        return param.substring(param.indexOf("=")+1);
    }
*/

}
/*
if(resource.indexOf("?")>0){
    path = resource.substring(0,resource.indexOf("?"));
    param = resource.substring(resource.indexOf("?")+ 1);
    console.log(path, param,"PATH랑 Param");
    key = param.substring(0,param.indexOf("="));
    value = param.substring(param.indexOf("=")+1);

    paramObj.key = value;
    
    contentLength = paramObj.key.length + welcome.length;
}else if(data.indexOf("&")>0) {

    entityBodyLeft = data.substring(data.indexOf("a=1"),data.indexOf("&"));
    console.log(entityBodyLeft,"엔터티 바디 왼쪽입니당.");
}
else {
    path = resource;
}
*/
export {HttpClientMsg};