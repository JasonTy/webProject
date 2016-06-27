/**
 * Created by tangyitangyi on 16/6/23.
 */
var http=require('http');
var app=require('../app.js')
http.createServer(app).listen(8100).on('listening',function(){
    console.log('Listening on port 8100');
});
