'use strict';

import * as net from 'net';

import {HttpRequsetHandler} from './HttpRequsetHandler'
import {RequestData} from './RequestData';
import {HttpClientMsg}from './HttpClientMsg';

const server = net.createServer(function(socket) {
    
    console.log('클라이언트 접속');


    socket.on('data', function(chunk) {

        let requestData = new RequestData(chunk.toString());
       
        let httpClientMsg = new HttpClientMsg(requestData.splitGetUrl(), requestData.splitGetMethod(), requestData.splitGetHttpVersion(),requestData.splitGetEntityBody());

        HttpRequsetHandler.getRequestBuild(httpClientMsg.msgMethod,httpClientMsg.url, socket, httpClientMsg.httpGetQueryValue());

        HttpRequsetHandler.postRequestBuild(httpClientMsg.url, socket, httpClientMsg.httpGetEntityValue());
    
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