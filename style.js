document.getElementById("btnA").addEventListener("click", function(){ 
  const bnA = document.getElementById("btnA");
    if (bnA.innerText === "Comedy") {
        bnA.innerText = "Dumb and Dumber";
    } else {
        bnA.innerText = "Comedy";
    }
})

document.getElementById("btnB").addEventListener("click", function(){ 
  const bnB = document.getElementById("btnB");
    if (bnB.innerText === "Horror") {
        bnB.innerText = "Wrong Turn";
    } else {
        bnB.innerText = "Horror";
    }
})

document.getElementById("btnC").addEventListener("click", function(){ 
  const bnC = document.getElementById("btnC");
    if (bnC.innerText === "RomCom") {
        bnC.innerText = "The Proposal";
    } else {
        bnC.innerText = "RomCom";
    }
})

document.getElementById("btnD").addEventListener("click", function(){ 
  const bnD = document.getElementById("btnD");
    if (bnD.innerText === "Thriller") {
        bnD.innerText = "Taken";
    } else {
        bnD.innerText = "Thriller";
    }
})
