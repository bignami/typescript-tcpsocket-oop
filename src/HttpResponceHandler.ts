
import {HttpServerMsg} from './HttpServerMsg';

import * as net from 'net';
class HttpResponceHandler {

    
    constructor() {
       
    }
    
    static httpMainResponce (socket: net.Socket){

        let seccuseMain = new HttpServerMsg('HTTP/1.1','200 OK', 'text/html',"Helloworld");
        return socket.write(seccuseMain.responceMessage());

    }
    static httpProfileresponce (socket: net.Socket, body: string){
        
        let seccuseProfile = new HttpServerMsg('HTTP/1.1','200 OK', 'text/html', body);
        return socket.write(seccuseProfile.responceMessage());

    }
    
    static httpCalculatorresponce (socket: net.Socket, body: string){
        
        let seccuseProfile = new HttpServerMsg('HTTP/1.1','200 OK', 'text/html', body);
        return socket.write(seccuseProfile.responceMessage());

    }

}


export {HttpResponceHandler};