
import {HttpResponceHandler} from './HttpResponceHandler';
import {HttpServerMsg} from './HttpServerMsg';
import {HttpClientMsg} from './HttpClientMsg'
import * as net from 'net';

class  HttpRequsetHandler {
    
    
    constructor() {    

    }

    
    static GetrequestBuild(url: any , socket: net.Socket){
       
        switch(url){
            case "/":
                HttpResponceHandler.httpMainResponce(socket);
                break;  
            
            case "/Profile":
                HttpResponceHandler.httpProfileresponce(socket,"denam");
                break;
                
            /*
            default :
                socket.write(err);
                break;
            */
        }

 
    }
}

export {HttpRequsetHandler};

/*
if(method == 'POST'){
    switch(path){
        case "/calculator":
        socket.write(res);
    }
}*/
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

