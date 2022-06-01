function loadingweather (){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function (){
        console.log("change state:"+this.readyState);
        if(this.readyState==4 && this.status==200){//da gui len hoan thanh va nhan duoc ket qua
            console.log(xhttp.responseText);
            var currentWeather= JSON.parse(xhttp.responseText);
            console.log(currentWeather);


            var ulObj = document.getElementById("list");

            var thoiTiet = "";

            for (var i=0;i<currentWeather.list.length;i++){
                var ngay = "<div><li> "+ currentWeather.list[i].dt_txt +"</li>";
                var temp = "<li><h1> "+ currentWeather.list[i].main.temp +"<sup>o</sup>C</h1></li>";
                var x = currentWeather.list[i].weather[0].icon;
                console.log(x);
                var x1="10d";
                var x2="04d";
                var x3="10n";
                var x4="04n";
                var icon="";
                if (x==x1){
                    icon = "<li><span class=\""+ "fa-solid fa-cloud-sun-rain fa-3x\"" +"></span></li><br>";
                }
                if (x==x2){
                    icon = "<li>"+ "<span class=\""+"fa-solid fa-cloud-sun fa-3x\""+ "></span>" +"</li><br>";
                }
                if (x==x3){
                    icon = "<li>"+ "<i class=\""+"fa-solid fa-cloud-sun-rain fa-3x\""+"></i>" +"</li><br>";
                }
                if (x==x4){
                    icon = "<li>"+ "<i class=\""+"fa-solid fa-cloud-sun fa-3x\""+"></i>" +"</li>";
                }
                console.log(icon);
                var state = "<li><p>"+ currentWeather.list[i].weather[0].description +"</p></li></div>";

                thoiTiet += ngay + temp + icon + state;
                console.log(" i la:"+i);
            }
            ulObj.innerHTML = thoiTiet;


        }
    };
    xhttp.open("GET", "https://api.openweathermap.org/data/2.5/forecast?q=Hanoi,vietnam&appid=09a71427c59d38d6a34f89b47d75975c&units=metric", true);
    xhttp.send();

}
loadingweather();