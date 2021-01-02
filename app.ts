'use strict';

import * as net from 'net';

import {HttpRequsetHandler} from './HttpRequsetHandler'
import {RequestData} from './RequestData';
import {HttpClientMsg}from './HttpClientMsg';

const res = "HTTP/1.1 200 OK\r\n"+
"Content-Type: text/html\r\n"+
"Content-Length: 11\r\n"+
"\r\n"
+"Hello,world";

const err = "HTTP/1.1 404 Not Found\r\n"+
"Content-Type: text/html\r\n"+
"Content-Length: 11\r\n"+
"\r\n"
+"404Not Found";





const server = net.createServer(function(socket) {
    
    console.log('클라이언트 접속');


    socket.on('data', function(chunk) {

        let requestData = new RequestData(chunk.toString());

        requestData.printMsg();
       
         let httpClientMsg = new HttpClientMsg(requestData.splitGetUrl(), requestData.splitGetMethod(), requestData.splitGetHttpVersion(),requestData.splitGetEntityBody());

        console.log(httpClientMsg.query);
        
        HttpRequsetHandler.GetrequestBuild(httpClientMsg.url, socket);

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

            path = resource;

            entityBodyLeft = data.substring(data.indexOf("a=1"), data.indexOf("&"));
            entityBodyRight = data.substring(data.indexOf("&") + 1);

            leftKey = entityBodyLeft.substring(0, entityBodyLeft.indexOf("="));
            leftValue = entityBodyLeft.substring(entityBodyLeft.indexOf("=") + 1);
            rightKey = entityBodyRight.substring(0, entityBodyRight.indexOf("="));
            rightValue = entityBodyRight.substring(entityBodyRight.indexOf("=") + 1);

            entityBobyLeftObj.leftKey = leftValue;
            entityBobyRightObj.rightKey = rightValue;

            muitlyBobyRes = entityBobyLeftObj.leftKey * entityBobyRightObj.rightKey;
            contentLength = muitlyBobyRes.toString().length;
        else {
            path = resource;
        }
        */
        
       /*  
        console.log(data);
   
        console.log(methodAndResource);
        
*/ 
        
    });

     
    socket.on('end', function() {
        console.log('클라이언트 접속 종료');
    });

    
});

server.listen({
    host: 'localhost',
    port: 8043
},function() {
    const address = server.address();
    console.log(address);
})

/*server.on('close', function() {
    console.log('Server closed');
});
*/