const robot = require('@jitsi/robotjs')

var size = robot.getScreenSize()
setInterval(() => {
    var x = Math.floor(Math.random() * size.width);
    var y = Math.floor(Math.random() * size.height);
    robot.moveMouse(527,528)
    robot.moveMouse(528,527)
    /*robot.keyToggle('alt','down')       
    robot.keyTap('tab')
    robot.keyToggle('alt','up')   
    setTimeout(() => {    
        robot.keyToggle('alt','down')       
        robot.keyTap('tab')
        robot.keyToggle('alt','up') 
        // robot.typeString("Hello");
        // robot.keyTap('enter');        
    },Math.random() * 50000);*/
},Math.random() * 50000); 