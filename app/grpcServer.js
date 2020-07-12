var PROTO_FILE_PATH = 'E:\\WebstormProjects\\grpc_demo\\proto\\Student.proto';
var grpc = require('grpc');
var grpcService = grpc.load(PROTO_FILE_PATH).com.gao.proto;

var server = new grpc.Server();
server.addService(grpcService.StudentService.service,{
    getRealNameByUsername: getRealNameByUsername,
    GetStudentByAge: GetStudentByAge,
    GetStudentsWrapperByAges: GetStudentsWrapperByAges,
    BiTalk: BiTalk
});

server.bind('localhost:8899',grpc.ServerCredentials.createInsecure());
server.start();

function getRealNameByUsername(call,callback){
    console.log('username:'+call.request.username);
    callback(null,{realname: 'zs'});
}

function GetStudentByAge() {

}
function GetStudentsWrapperByAges() {

}
function BiTalk() {

}














