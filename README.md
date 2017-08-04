This is a starter template for [socket.io with nodejs](https://socket.io/) projects.

## How to use this template

	*1.* rename package.json
	*2.* npm init (fill in the details accordingly) -- Like - name, version, description, main, scripts, author, license.
	*3.* npm install socket.io --save
	*4.* Now create a new file index.js in the project directory and enter the below code.
	var io = require('socket.io'),
		http = require('http'),
		server = http.createServer(),
		io = io.listen(server);

	io.on('connection', function(socket) {
		console.log('User Connected');
		socket.on('message', function(msg){
			io.emit('message', msg);
		});
	});

	server.listen(3000, function(){
		console.log('Server started');
	})
	*5.* node index.js -- Our back-end is ready.
	
	## OR
	
	**1.** git clone https://github.com/info-ankit/multi-chat-server.git
	*2.* cd multi-chat-server
	*3.* npm install
	*4.* node index.js -- Our back-end is ready.