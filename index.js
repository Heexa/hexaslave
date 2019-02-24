//--------------Global Variables

var Discord = require('discord.io');
var x = false;
var y = false;
var z = false;
var newmemberid="";
var newmemberguild="";
var msgtodelete=[];

require('events').EventEmitter.defaultMaxListeners = 20;

//---------------- Token (hidden)


var bot = new Discord.Client({
  token: process.env.token,
  autorun: true
});


//--------------------------------------- Lah ybarek f 3mer sidi hello_world


bot.on('message', function(user, userID, channelID, message, event) {
  if (message === "*test" && user==="Hexadecimal") {

    bot.sendMessage({
      to: channelID,
      message: "Lah ybarek f 3mer sidi Hexa <3"
    });
  }
  //-------------------------- 3ayat lia 3la ZeroL lklab

  if (message === "*ZeroL") {
    nero = '<@196020109993705473>'
    bot.sendMessage({
      to: channelID,
      message: "lklab <@196020109993705473> <@424235196431335425> tkelmo l sidi Hexa <3 "
    });
  }
  //-------------------------------- Wewe amine raghib funcntion
  if (message === "*wow") {


    bot.uploadFile({
      to: channelID,
      file: "https://media.discordapp.net/attachments/544157828810539011/549348151237279745/wewe.jpg"
    });
  }
  //-----------------------------------------------Attack souza function
  if (message === "*attack souza") {

    x = true;
    bot.sendMessage({
      to: channelID,
      message: "N3am sidi"
    });

  }
  if (user === "SouzaBOI") {

    if (x){
      bot.sendMessage({
        to: channelID,
        message: "3arif lia l chti9a9 bzerba "
      });
      bot.uploadFile({ to: channelID, file: "./teacher.jpg" });
    }
  }
  if (message === "*zga 3la souza" && user != "SouzaBOI") {

    x = false;
    bot.sendMessage({
      to: channelID,
      message: "Hia lewla sidi"
    });


  }
  //----------------- Attack nero function

  if (message === "*attack nero") {

    y = true;
    bot.sendMessage({
      to: channelID,
      message: "N3am sidi"
    });

  }
  if (user === "ne r0") {

    if (y){
      bot.sendMessage({
        to: channelID,
        message: "askot lmok "
      });
      bot.uploadFile({ to: channelID, file: "./tata.jpg" });
    }
  }
  if (message === "*zga 3la nero" && user!="ne r0") {

    y = false;
    bot.sendMessage({
      to: channelID,
      message: "Hia lewla sidi"
    });

  }
  //----------------------------- Attack escanore function :
  if (message === "*attack escanore") {

    z = true;
    bot.sendMessage({
      to: channelID,
      message: "N3am sidi"
    });

  }
  if (user === "Escanore") {

    if (z){
      bot.sendMessage({
        to: channelID,
        message: "tcha raya7 "
      });
      bot.uploadFile({ to: channelID, file: "./tcha.png" });
    }
  }
  if (message === "*zga 3la escanore" && user!="Escanore") {

    z = false;
    bot.sendMessage({
      to: channelID,
      message: "Hia lewla sidi"
    });

  }
  // --------------------- Tcha
  if (message === "*tcha") {


    bot.uploadFile({
      to: channelID,
      file: "./tcha.jpg"
    });
  }

});

//---new member

bot.on('guildMemberAdd', function(member) {
  newmemberid=member.id;
  newmemberguild=member.guild_id;
  bot.sendMessage({
    to: member.id,
    message: "Hey, mar7ba bik f serveur. t3tak wa7ed rôle unknown o mata9der dir had sa3a walo f serveur, bach t7aydo sir l textual channel rules o 9ra ach khassek dir ;)"
  });
  bot.addToRole({
    serverID:member.guild_id,
    userID:member.id,
    roleID:"548461390944534529",


  });
  bot.sendMessage({
    to: "547573577520644116",
    message:"<@"+ member.id+"> Hillaw, wach nta ça va ? 9ra rules vite fait o meli tsali kteb answer b agreed"


  });
  bot.on('message', function(user, userID, channelID, message, event) {
    if (message === "agreed" && userID===newmemberid && channelID==="547573577520644116" ) {

      bot.removeFromRole({
        serverID:newmemberguild,
        userID:newmemberid,
        roleID:"548461390944534529",});
        bot.addToRole({
          serverID:newmemberguild,
          userID:newmemberid,
          roleID:"544216408582520856",});
          bot.sendMessage({
            to:newmemberid,
            message:"you're now a full member"
          });
/*
          bot.deleteMessages({
            channelID:"547573577520644116",
            messageIDs:bot.getMessages({channelID:"547573577520644116",after:"547760146617729048",}),
//
          });
          */
        }
      });
    });
