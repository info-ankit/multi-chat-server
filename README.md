This is a starter template for [socket.io with nodejs](https://socket.io/) projects.

## How to use this template -

*This template does not work on its own*. To use this template, either create a new node project using the npm init node.js utility, or copy the files from this repository into the [Starter App Base](https://github.com/info-ankit/multi-chat-server.git).

### With the NodeJs:

```bash
$ rename package.json
$ npm init (fill in the details accordingly) -- Like - name, version, description, main, scripts, author, license.
$ npm install socket.io --save
$ Now create a new file index.js in the project directory and enter the below code.
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
$ node index.js -- Our back-end is ready.
```

## Or use this -

```bash
$ git clone https://github.com/info-ankit/multi-chat-server.git
$ cd multi-chat-server
$ npm install
$ node index.js -- Our back-end is ready.
```