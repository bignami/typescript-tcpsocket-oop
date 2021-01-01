class HttpClientMsg{
    private _url : string;
    private _msgMethod : string;
    private _httpVersion: string;

    constructor(urls: string, methods: string, httpVersions: string) {
        this._url = urls;
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
        return this._httpVersion
    }

}

export {HttpClientMsg};