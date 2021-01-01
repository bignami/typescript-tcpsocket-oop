
class  HttpRequsetHandler {
    
    constructor() {    

    }

    static httpGet(method : string, url : string){
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
        }
    }
    
}



if(method == 'POST'){
    switch(path){
        case "/calculator":
        socket.write(res);
    }
}