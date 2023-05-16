let filmy = [];
function vypisFilmy(){
    console.log("----------Aktualizovany zoznam filmov-----------");
    console.log(filmy);
}

function novyFilm(){
    let filmname = document.getElementById("nazov");
    let rokvydania = document.getElementById("rok");
    let herec = document.getElementById("herec");
    var film = {
     "nazov": filmname.value,
     "rok": rokvydania.value,
     "herec": herec.value
    };

    filmy.push(film);
    filmname.value = "";
    rokvydania.value = "";
    herec.value ="";

    vypisFilmy();
}

function odstranPosledny(){

    filmy.pop();
    vypisFilmy();
    

}
function novePole(){
    filmy = [];
    vypisFilmy();

}


