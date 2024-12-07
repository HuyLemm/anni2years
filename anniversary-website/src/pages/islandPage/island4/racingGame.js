import $ from "jquery";
import "./racingGame.css"; // Import file CSS
import { useEffect } from "react";

const RacingGame = ({ gameStarted, onGameOver, gameComplete }) => {
  useEffect(() => {
    // HTML structure for the game
    const gameHTML = `
      <div id="container">
          <div id="line_1" class="line"></div>
          <div id="line_2" class="line"></div>
          <div id="line_3" class="line"></div>
          <div id="car" class="car">
              <div class="f_glass"></div>
              <div class="b_glass"></div>
              <div class="f_light_l"></div>
              <div class="f_light_r"></div>
              <div class="f_tyre_l"></div>
              <div class="f_tyre_r"></div>
              <div class="b_tyre_l"></div>
              <div class="b_tyre_r"></div>
          </div>
          <div id="car_1" class="car">
              <div class="f_glass"></div>
              <div class="b_glass"></div>
              <div class="f_light_l"></div>
              <div class="f_light_r"></div>
              <div class="f_tyre_l"></div>
              <div class="f_tyre_r"></div>
              <div class="b_tyre_l"></div>
              <div class="b_tyre_r"></div>
          </div>
          <div id="car_2" class="car">
              <div class="f_glass"></div>
              <div class="b_glass"></div>
              <div class="f_light_l"></div>
              <div class="f_light_r"></div>
              <div class="f_tyre_l"></div>
              <div class="f_tyre_r"></div>
              <div class="b_tyre_l"></div>
              <div class="b_tyre_r"></div>
          </div>
          <div id="car_3" class="car">
              <div class="f_glass"></div>
              <div class="b_glass"></div>
              <div class="f_light_l"></div>
              <div class="f_light_r"></div>
              <div class="f_tyre_l"></div>
              <div class="f_tyre_r"></div>
              <div class="b_tyre_l"></div>
              <div class="b_tyre_r"></div>
          </div>
      </div>
    `;

    // Append the game HTML to the container
    $("#game-container").html(gameHTML);

    if (!gameStarted) return; // Chỉ chạy game khi trạng thái gameStarted là true

    // Variables
    let anim_id;
    const container = $("#container");
    const car = $("#car");
    const car_1 = $("#car_1");
    const car_2 = $("#car_2");
    const car_3 = $("#car_3");
    const line_1 = $("#line_1");
    const line_2 = $("#line_2");
    const line_3 = $("#line_3");

    const container_width = parseInt(container.width());
    const container_height = parseInt(container.height());
    const car_width = parseInt(car.width());
    const car_height = parseInt(car.height());

    let game_over = false;
    let speed = 2;
    let line_speed = 3;

    // Movement variables
    let move_right = false;
    let move_left = false;
    let move_up = false;
    let move_down = false;

    // Keydown event to handle movement
    $(document).on("keydown", function (e) {
      if (!game_over && !gameComplete) {
        const key = e.keyCode;
        if ((key === 37 || key === 65) && !move_left) {
          move_left = requestAnimationFrame(left);
        } else if ((key === 39 || key === 68) && !move_right) {
          move_right = requestAnimationFrame(right);
        } else if ((key === 38 || key === 87) && !move_up) {
          move_up = requestAnimationFrame(up);
        } else if ((key === 40 || key === 83) && !move_down) {
          move_down = requestAnimationFrame(down);
        }
      }
    });

    // Keyup event to stop movement
    $(document).on("keyup", function (e) {
      const key = e.keyCode;
      if (key === 37 || key === 65) {
        cancelAnimationFrame(move_left);
        move_left = false;
      } else if (key === 39 || key === 68) {
        cancelAnimationFrame(move_right);
        move_right = false;
      } else if (key === 38 || key === 87) {
        cancelAnimationFrame(move_up);
        move_up = false;
      } else if (key === 40 || key === 83) {
        cancelAnimationFrame(move_down);
        move_down = false;
      }
    });

    // Movement functions
    function left() {
      if (!game_over && !gameComplete && parseInt(car.css("left")) > 0) {
        car.css("left", parseInt(car.css("left")) - 5);
        move_left = requestAnimationFrame(left);
      }
    }

    function right() {
      if (
        !game_over &&
        !gameComplete &&
        parseInt(car.css("left")) < container_width - car_width
      ) {
        car.css("left", parseInt(car.css("left")) + 5);
        move_right = requestAnimationFrame(right);
      }
    }

    function up() {
      if (!game_over && !gameComplete && parseInt(car.css("top")) > 0) {
        car.css("top", parseInt(car.css("top")) - 5);
        move_up = requestAnimationFrame(up);
      }
    }

    function down() {
      if (
        !game_over &&
        !gameComplete &&
        parseInt(car.css("top")) < container_height - car_height
      ) {
        car.css("top", parseInt(car.css("top")) + 5);
        move_down = requestAnimationFrame(down);
      }
    }

    // Game loop
    anim_id = requestAnimationFrame(repeat);

    function repeat() {
      if (game_over || gameComplete) return; // Stop animation if game over or complete

      if (
        collision(car, car_1) ||
        collision(car, car_2) ||
        collision(car, car_3)
      ) {
        stop_the_game();
        onGameOver && onGameOver();
        return;
      }

      car_down(car_1);
      car_down(car_2);
      car_down(car_3);

      line_down(line_1);
      line_down(line_2);
      line_down(line_3);

      anim_id = requestAnimationFrame(repeat);
    }

    function car_down(car) {
      let car_current_top = parseInt(car.css("top"));
      if (car_current_top > container_height) {
        car_current_top = -200;
        const car_left = parseInt(
          Math.random() * (container_width - car_width)
        );
        car.css("left", car_left);
      }
      car.css("top", car_current_top + speed);
    }

    function line_down(line) {
      let line_current_top = parseInt(line.css("top"));
      if (line_current_top > container_height) {
        line_current_top = -300;
      }
      line.css("top", line_current_top + line_speed);
    }

    function stop_the_game() {
      game_over = true;
      cancelAnimationFrame(anim_id);
      cancelAnimationFrame(move_right);
      cancelAnimationFrame(move_left);
      cancelAnimationFrame(move_up);
      cancelAnimationFrame(move_down);
      if (onGameOver) onGameOver();
    }

    function collision($div1, $div2) {
      const x1 = $div1.offset().left;
      const y1 = $div1.offset().top;
      const h1 = $div1.outerHeight(true);
      const w1 = $div1.outerWidth(true);
      const b1 = y1 + h1;
      const r1 = x1 + w1;
      const x2 = $div2.offset().left;
      const y2 = $div2.offset().top;
      const h2 = $div2.outerHeight(true);
      const w2 = $div2.outerWidth(true);
      const b2 = y2 + h2;
      const r2 = x2 + w2;

      return !(b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2);
    }

    return () => cancelAnimationFrame(anim_id); // Cleanup animation
  }, [gameStarted, gameComplete]);

  return <div id="game-container" style={{ marginTop: "20px" }}></div>;
};

export default RacingGame;
