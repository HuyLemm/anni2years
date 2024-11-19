"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // Tạo HTML giao diện trò chơi và thêm vào body
  function initializeGame() {
    var gameHTML = "\n        <div id=\"help\">\n            <p>Controls: Right, Left, Up & Down arrow keys.</p>\n        </div>\n        <div id=\"score_div\">\n            Score: <span id=\"score\">0</span>\n        </div>\n        <div id=\"container\">\n            <div id=\"line_1\" class=\"line\"></div>\n            <div id=\"line_2\" class=\"line\"></div>\n            <div id=\"line_3\" class=\"line\"></div>\n            <div id=\"car\" class=\"car\">\n                <div class=\"f_glass\"></div>\n                <div class=\"b_glass\"></div>\n                <div class=\"f_light_l\"></div>\n                <div class=\"f_light_r\"></div>\n                <div class=\"f_tyre_l\"></div>\n                <div class=\"f_tyre_r\"></div>\n                <div class=\"b_tyre_l\"></div>\n                <div class=\"b_tyre_r\"></div>\n            </div>\n            <div id=\"car_1\" class=\"car\"></div>\n            <div id=\"car_2\" class=\"car\"></div>\n            <div id=\"car_3\" class=\"car\"></div>\n            <div id=\"restart_div\">\n                <button id=\"restart\">\n                    Restart<br>\n                    <small class=\"small_text\">(press Enter)</small>\n                </button>\n            </div>\n        </div>\n      ";
    document.body.innerHTML = gameHTML;
  } // Gọi hàm để khởi tạo giao diện


  initializeGame(); // Game logic

  $(document).ready(function () {
    var anim_id;
    var container = $('#container');
    var car = $('#car');
    var car_1 = $('#car_1');
    var car_2 = $('#car_2');
    var car_3 = $('#car_3');
    var score = $('#score');
    var restart_div = $('#restart_div');
    var restart_btn = $('#restart');
    var game_over = false;
    var score_counter = 1;
    var speed = 2;

    function moveCars() {
      if (!game_over) {
        score_counter++;

        if (score_counter % 20 == 0) {
          score.text(parseInt(score.text()) + 1);
        }

        carMove(car_1);
        carMove(car_2);
        carMove(car_3);
        anim_id = requestAnimationFrame(moveCars);
      }
    }

    function carMove(car) {
      var carTop = parseInt(car.css('top'));

      if (carTop > container.height()) {
        car.css('top', -200);
        car.css('left', Math.random() * 100 + '%');
      } else {
        car.css('top', carTop + speed);
      }
    }

    $(document).keydown(function (e) {
      if (!game_over) {
        var key = e.which;
        if (key == 37) car.css('left', '-=10');
        if (key == 39) car.css('left', '+=10');
      }
    });
    restart_btn.click(function () {
      location.reload();
    });
    moveCars();
  });
});