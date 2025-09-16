const buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickPattern = [];
let level = 0;
let started = false;

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}

function checkAnswer(currentLevel) {
  if (userClickPattern[currentLevel] === gamePattern[currentLevel]) {
    console.log("SUCCESS");
    if (userClickPattern.length === gamePattern.length) {
      // ini artinya jika user berhasil tebak jawaban yang terbaru, cek lagi apakah
      // user sudah menyelesaikan seluruh urutan dengan bandingkan lengthnya
      setTimeout(() => {
        nextSequence();
      }, 1000);
    }
  } else {
    wrongSound = "wrong";
    $("body").addClass("game-over");
    playsound(wrongSound);
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    $("h1").text("Game Over, Tekan Tombol Apa Saja Untuk Restart");
    startOver();
  }
}

function playsound(name) {
  let audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColour) {
  let button = $("#" + currentColour);
  button.addClass("pressed");
  setTimeout(function () {
    button.removeClass("pressed");
  }, 100);
}

function nextSequence() {
  userClickPattern = [];
  level++;
  $("#level-title").text("Level " + level);

  const randomNumber = Math.floor(Math.random() * buttonColours.length);
  let randomChosenColor = buttonColours[randomNumber];
  gamePattern.push(randomChosenColor);

  $("#" + randomChosenColor)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  playsound(randomChosenColor);
  animatePress(randomChosenColor);
}

$(document).on("keydown", function () {
  if (!started) {
    // intinya ini dia ubah status strated jadi true, bacanya not false, makanya jalan
    started = true; // saat sudah diubah jadi true pertama kali, seterusnya nanti jadi not true, artinya setiap di pencet keyboard tidak akan bertambah angkanya
    nextSequence();
  }
});

$(".btn").on("click", function () {
  let userChosenColour = this.id; // ini akan menyimpan nama id yang di definisikan pada index.html
  userClickPattern.push(userChosenColour);
  console.log(userClickPattern);
  playsound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickPattern.length - 1); // length ini berarti kita mau ambil indexnya saja pada userCliclPattern, dikurang 1 karena elemen awal itu mulai dari 0 agar tidak kelebihan saat dicek
});

// Set initial h1 text
$("h1").text("Tekan Tombol Untuk Mulai");
