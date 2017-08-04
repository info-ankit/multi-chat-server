var io = require('socket.io'),
    http = require('http'),
    server = http.createServer(),
    io = io.listen(server);

io.on('connection', function (socket) {
    console.log('User Connected');
	// socket.join("group-1");
    // console.log('Rooms:', socket.rooms);
	
    socket.on('group-1', function (msg) {
		var gname = msg.gname;
		console.log("Server 1 -", gname);
        io.emit(gname, msg);
    });
	socket.on('group-2', function (msg) {
		var gname = msg.gname;
		console.log("Server 2 -", gname);
        io.emit(gname, msg);
    });
	socket.on('group-3', function (msg) {
		var gname = msg.gname;
		console.log("Server 3 -", gname);
        io.emit(gname, msg);
    });
	socket.on('group-4', function (msg) {
		var gname = msg.gname;
		console.log("Server 4 -", gname);
        io.emit(gname, msg);
    });
	
	
	// when the client emits 'typing', we broadcast it to others
	socket.on('typing', function () {
		socket.broadcast.emit('typing', {
			username: 'Ankit'
		});
	});
	
	// when the client emits 'stop typing', we broadcast it to others
	socket.on('stop typing', function () {
		socket.broadcast.emit('stop typing', {
			username: 'Ankit'
		});
	});
	
});

server.listen(3000, function () {
    console.log('Server started');
})