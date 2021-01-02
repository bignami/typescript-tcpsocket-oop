
import {HttopResponceHandler} from './HttpResponceHandler';


class  HttpRequsetHandler {
    
    

    constructor() {    

    }

    static methodGetPathParsing(url : string){

        if(url.indexOf('?')){

        }

        return HttopResponceHandler.httpResponce()

        



    }



        /*
            switch(url){
                case "/":
                    return socket.write(res);
                    break;  
                
                case "/Profile":
                    socket.write("HTTP/1.1 200 OK\r\n"+
                    "Content-Type: text/html\r\n"+
                    "\r\n");
                    break;
                    
        
                default :
                    socket.write(err);
                    break;
        
            }
        }*/
   
    
    
}


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

export {HttpRequsetHandler}