
import {HttpResponceHandler} from './HttpResponceHandler';

import * as net from 'net';

class  HttpRequsetHandler {
    
    
    constructor() {    

    }

    static getRequestBuild(method: string ,url: string , socket: net.Socket, queryValue : string){
       if(method === 'GET') {
            switch(url) {

                case "/":
                    HttpResponceHandler.httpMainResponce(socket);
                    break;  
                
                case "/Profile":
                    HttpResponceHandler.httpProfileresponce(socket,queryValue);
                    break;

            }
       }
       
 
    }

    static postRequestBuild(url: string , socket: net.Socket, entityValue : string){
       
        switch(url) {
            
            case "/calculator":
                HttpResponceHandler.httpCalculatorresponce(socket,entityValue);
                break;  
        
         }
    }
}

export {HttpRequsetHandler};
