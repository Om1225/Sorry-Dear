var i = 0;
var txt1 =
  "Hi Love.....!  <<               Now I want to say something special to you. <<<                So , Please read carefully...!                                                                           > When I saw you for the first time < You seemed to be something Special to me.  <<                  As days passed < I got closer to you....! <<                           I don't know the reason why your thoughts always resonates inside my mind...!                                                     > Everything about you is always intresting for me...!                                                                                 >I Lob U <SweetHeart.....!                   <<<< Give me One chance more chance and forgive me ...!";
var speed = 55;
typeWriter();
function typeWriter() {
  if (i < txt1.length) {
    if (txt1.charAt(i) == "<")
      document.getElementById("text1").innerHTML += "</br>";
    else if (txt1.charAt(i) == ">")
      document.getElementById("text1").innerHTML = "";
    else if (txt1.charAt(i) == "|") {
      $(".bg_heart").css("background-image", "')");
    } else document.getElementById("text1").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
