import { Socket } from 'dgram';
import {HttpRequsetHandler} from './HttpRequsetHandler';
import {HttpServerMsg} from './HttpServerMsg';
import {HttpClientMsg} from './HttpClientMsg'
import * as net from 'net';
class HttpResponceHandler {

    
    constructor() {
       
    }
    
    static httpMainResponce (socket: net.Socket){
        let seccuseMain = new HttpServerMsg('HTTP/1.1 ','200 OK', 'text/html',0,"Helloworld");
       
        return socket.write(seccuseMain.responceMessage());
    }
    static httpProfileresponce (socket: net.Socket, body: string){
        
        let seccuseProfile = new HttpServerMsg('HTTP/1.1 ','200 OK', 'text/html',0, body);
        return socket.write(seccuseProfile.responceMessage());
    }
    

}


export {HttpResponceHandler};