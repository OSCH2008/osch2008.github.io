var phase1 = document.getElementById("p1");
var phase2 = document.getElementById("p2");

var state = 0;
function replace() {
    if (state === 0) {
        phase1.innerHTML = "I will cut you down. Break you apart, splay the gore of your profane form across the stars! I will grind you down until the very SPARKS cry for mercy! MY HANDS SHALL RELISH, ENDING YOU. HERE. AND. NOW!";
        phase2.innerHTML = "IS THAT ALL YOU GOT??";
        state = 1;
    } else if (state === 1) {
        phase1.innerHTML = "BEHOLD! THE POWER OF AN ANGEL";
        phase2.innerHTML = "ENOUGH";
        state = 0;
    }
}