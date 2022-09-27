function clock(){
    const d=new Date();
    var h=d.getHours();
    var m=d.getMinutes();
    var s=d.getSeconds();
    var session=document.getElementById("session")
    if (h>=12){
        h=h-12
         }
    if(h<=12){
        session.innerHTML='PM'
    }
    else{
        session.innerHTML='AM'
    }
    document.getElementById("hour").innerHTML=h
    document.getElementById("minute").innerHTML=m
    document.getElementById("second").innerHTML=s
}
setInterval(clock,10);