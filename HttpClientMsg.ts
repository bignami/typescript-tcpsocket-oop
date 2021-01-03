class HttpClientMsg{
    private _url : string;
    private _msgMethod : string;
    private _httpVersion: string;
    private _entityBody: Object = {};
    private _query: Object = {};




    constructor(urls: string, methods: string, httpVersions: string, entityBody: Object) {
        
        if (urls.indexOf("?")>0) {
            
            this._url = urls.substring(0,urls.indexOf("?"));
            this._query = urls.substring(urls.indexOf("?") + 1).split("&").map(it => it.split("=")).reduce((acc: any , it) => {
                acc[it[0]] = it[1];
                return acc;
              }, {});;
            
        } else { 
            this._url = urls;
            
        }
        
        if (entityBody.valueOf() !== "") {

            this._entityBody = entityBody.toString().split("&").map(it => it.split("=")).reduce((acc: any , it ) => {
                acc[it[0]] = Number(it[1]);
                return acc;
            }, {});
        } else {
            this._entityBody = entityBody;
        }
        
        this._msgMethod = methods;
        this._httpVersion = httpVersions;
     
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

    httpGetQueryValue() : string {

        return Object.values(this._query).toString();
        
    }

    httpGetEntityValue() : string {
       let addValue : number = 1;
        for(const [key, value] of Object.entries(this._entityBody)) {
            
            addValue *= value;

        }
        return addValue.toString();
       
    }
}

export {HttpClientMsg};