function jackport(){
    var randomNumbers = [];
    var ticketNumbers = [];
    var thep = document.getElementById("tagp");
    var giai = document.getElementById("giai");


    var valnum = [];
    var trung = 0;

    for (var i=0;i<6;i++){
        valnum[i] = document.getElementById("num"+i);
        if(!ticketNumbers.includes(valnum[i].value)){
            ticketNumbers[i]= parseInt(valnum[i].value);
            console.log(ticketNumbers[i]);
        }else{
            trung++;
        }
    }
    console.log(trung);
    if (trung >0){
        thep.style.display = "block";
    }else {
        while (randomNumbers.length < 6) {
            var r = Math.random();
            r = r * 46;
            r = parseInt(r);
            if (!randomNumbers.includes(r)) {
                randomNumbers.push(r);
            }
        }
        console.log(randomNumbers);
        var dem = 0;
        for (var i = 0; i < 6; i++) {
            for (var j = 0; j < 6; j++) {
                if (ticketNumbers[i] == randomNumbers[j]) {
                    dem++;
                }
            }

        }
        console.log(dem);
            setTimeout(function () {
                switch (dem) {
                    case 6:

                        giai.innerText ="Chúc mừng bạn trúng giải đặc biệt";
                        break;
                    case 5:

                        giai.innerText ="Chúc mừng bạn trúng giải nhất";
                        break;
                    case 4:

                        giai.innerText ="Chúc mừng bạn trúng giải hai";
                        break;
                    case 3:

                        giai.innerText ="Chúc mừng bạn trúng giải ba";
                        break;
                    default:

                        giai.innerText ="Chúc bạn may mắn lần sau";

                }
            }, 100);
        }
}

function clearp(){
    var thep = document.getElementById("tagp");
    thep.style.display = "none";

    giai.innerText ="Cơ hội đổi đời";
    console.log( giai);
}