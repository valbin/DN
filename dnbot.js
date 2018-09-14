
//Made by v9#3252

const Discord = require('discord.js');
const client = new Discord.Client();
const delay = require('delay');
const Canvas = require('canvas');
const fs = require('fs');



client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


client.on("message", (message) => {
	if (message.content.startsWith("kill")) {
		if (message.mentions.users.first()) {
        	// Easy way to get member object though mentions.
        	var member= message.mentions.members.first();
        	serve = message.guild
        	user = message.mentions.users.first().username;
        	usetag = message.mentions.users.first().tag;

	        var time = new Date

       		let died = 'From ' + serve + ' User ' + usetag + ' id: ' + member + ' ' + 'died ' + time;

	        let Image = Canvas.Image,
    			canvas = new Canvas(350, 200),
    			ctx = canvas.getContext('2d');
  			fs.readFile('./paper.jpeg', (err, image) => {
    		  if (err) return console.log(err);
     		 	let img = new Image
      			img.src = image;
      			ctx.drawImage(img, 0, 0, 350, 200);
      			ctx.font = "28px Trattatello";
      			textWidth = ctx.measureText(user ).width;
      			ctx.fillText(user, (canvas.width/2) - (textWidth / 2), 100)
      			canvas.toBuffer((err, buff) => {
        		  if (err) return console.log(err);
        		  message.channel.sendFile(buff)

            	})
        	})

        	message.channel.send(member.displayName + " will die in forty seconds.");

        	setTimeout(myFunction, 40000)

        	function myFunction() {
    		        // Kick
    	    member.kick().then((member) => {
            	// Successmessage
            	var rand = Math.floor((Math.random() * 100000000000000) + 1);

            	fs.writeFile('./dead/' + user + '[' + rand + ']' + '.txt', died, (err) => {  
           		// throws an error, you could also catch it here
            		if (err) throw err;

            	// success case, the file was saved
    				console.log('Death saved.');
				});

           		message.channel.send(member.displayName + " is dead.");
        	}).catch(() => {
            	// Failmessage
            

            	message.channel.send(member.displayName + " is immortal.");
        	});
			}



    	} else {
    	message.channel.send("You must write a name.");
    }
    
    }
});

client.login('urmom');