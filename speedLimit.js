//speed limit = 70
//5 --> 1 point
//12 points --> suspended
//Math.floor()

function checkSpeed(speed){
     const speedLimit = 70;
     const kmPerHour = 5;
     const sus = 12;
     if(speed === speedLimit)
     console.log("OK");
     else{
        const point = Math.floor((speed - speedLimit) / kmPerHour);
     }
     if(point >= sus)
     console.log("license Suspended");
     else
     console.log("point ", point);

}
checkSpeed()
