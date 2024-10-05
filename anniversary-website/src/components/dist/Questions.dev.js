"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loves = exports.questions = void 0;

var _teddy = _interopRequireDefault(require("../assets/images/components/teddy.png"));

var _rose = _interopRequireDefault(require("../assets/images/components/rose.png"));

var _present = _interopRequireDefault(require("../assets/images/components/present.png"));

var _bottle = _interopRequireDefault(require("../assets/images/components/bottle.png"));

var _ring = _interopRequireDefault(require("../assets/images/components/ring.png"));

var _letter = _interopRequireDefault(require("../assets/images/components/letter.png"));

var _love = _interopRequireDefault(require("../assets/images/components/love.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var questions = [{
  question: "Ngày đầu tiên chúng mình yêu nhau là ngày nào ó?",
  options: ["A. 1/1/2022", "B. 17/12/2022", "C. 25/12/2021", "D. 14/2/2022"],
  correct: "B. 17/12/2022"
}, {
  question: "Alvin thích món ăn nào nhất ó? ♥‿♥",
  options: ["A. Cá kèo", "B. Sushi", "C. Bún đậu", "D. Bánh Pao"],
  correct: "D. Bánh Pao"
}, {
  question: "Chỗ nào là chỗ đầu tiên chúng mình tiếp xúc nhau ó?",
  options: ["A. Quán net", "B. Công viên", "C. Quán cà phê", "D. Nhà sách"],
  correct: "A. Quán net"
}];
exports.questions = questions;
var loves = [{
  image: _love["default"],
  value: 7,
  concept: "love (o ^ ▽ ^ o)",
  sent: ["Anh yêu em bé của anh hơn tất cả mọi thứ trên đời này ó! 💖", "Anh yêu em bé hơn bất cứ thứ gì trên thế giới này luôn ó! 😘", "Em bé là lý do mỗi ngày của anh đều đáng giá ớ! 🥰", "Tình yêu của anh dành cho em bé lớn hơn cả vũ trụ lun á! 🌌💫", "Em bé là người anh yêu nhất, sẽ mãi như vậy heng! 💘", "Tình yêu của anh dành cho em bé là nguồn năng lượng vô tận, yêu ơi là yêu! ⚡💓", "Anh luôn ở đây, yêu em bé mỗi ngày mà không cần lý do luôn ó! 💕"]
}, {
  image: _teddy["default"],
  value: 5,
  concept: "teddy \ (^ ヮ ^) /",
  sent: ["Anh muốn ôm em bé như ôm chú Teddy này mỗi ngày lun ó! 🧸💑", "Teddy là món quà nhắc nhớ rằng anh luôn bên cạnh em bé á! 🎁💞", "Chú gấu này giống như tình yêu của anh, luôn ấm áp cho em bé! 🧸💖", "Mỗi lần nhìn Teddy, nhớ đến cái ôm ấm áp từ anh nha bé! 🥰🤗", "Teddy nhỏ xinh mà chứa bao yêu thương anh dành cho em bé á! 🧸💌", "Anh muốn Teddy này là người bạn của em bé khi anh không có ở đó ó! 🐻💓", "Ôm Teddy này như anh đang ôm em bé trong vòng tay vậy đó! 💞🤗"]
}, {
  image: _rose["default"],
  value: 2,
  concept: "rose (❤ω❤)",
  sent: ["Anh tặng em bé bông hồng này như một lời yêu thương không lời nè! 🌹💕", "Hoa hồng này là biểu tượng cho tình yêu của anh dành cho em bé mãi mãi lun á! 🌹💘", "Bông hồng này đẹp như em bé trong mắt anh ớ! 🌹😍", "Nhìn hoa hồng, anh lại nghĩ đến vẻ đẹp dịu dàng của em bé á! 🌹🥰", "Hoa hồng phai tàn, nhưng tình yêu của anh dành cho em bé thì mãi mãi heng! 🌹💖", "Anh tặng em bé bông hồng này, mong rằng nó sẽ luôn làm em cười! 🌹😊", "Cánh hồng mỏng manh, nhưng tình yêu của anh thì sâu sắc và vững chắc lắm ó! 🌹💘"]
}, {
  image: _letter["default"],
  value: 3,
  concept: "letter (´ ,, • ω • ,,) ♡",
  sent: ["Lá thư này chứa tất cả những gì anh không nói được thành lời mỗi khi bên em bé ó! 💌💓", "Anh viết thư này để gửi đến em bé tất cả những yêu thương từ trái tim anh nè! 💌💖", "Từng dòng thư này là những suy nghĩ chân thành từ anh đến em bé ó! ✍️💞", "Lá thư này chứa đầy tình yêu anh muốn gửi đến em bé, mãi mãi yêu thương ớ! 💌💕", "Hy vọng mỗi khi đọc thư này, em bé sẽ cảm nhận được tình yêu của anh ớ! 💌🥰", "Từng chữ trong thư này đều là trái tim và linh hồn của anh dành cho em bé ó! 💖📜", "Lá thư này là lời nhắn từ trái tim anh đến em bé, yêu mãi mãi! 💌💞"]
}, {
  image: _ring["default"],
  value: 6,
  concept: "ring (/ ^ - ^ (^ ^ *) / ♡",
  sent: ["Chiếc nhẫn này là lời hứa từ anh, rằng anh sẽ yêu em bé mãi mãi lun ó! 💍💖", "Nhẫn trên tay, như lời cam kết chúng mình sẽ luôn bên nhau, em bé à! 💍💏", "Chiếc nhẫn này là biểu tượng của tình yêu vĩnh cửu của anh dành cho em bé á! 💍💞", "Mỗi lần em bé đeo nhẫn này, nhớ về tình yêu chúng mình heng! 💍💕", "Chiếc nhẫn này nhỏ bé mà chứa đựng tình yêu to lớn từ anh dành cho em bé ó! 💍💓", "Nhẫn này là lời hứa anh dành riêng cho em bé, em là duy nhất trong tim anh ó! 💍💖", "Chiếc nhẫn này là sự khẳng định, chúng ta sẽ bên nhau mãi mãi nè! 💍💞"]
}, {
  image: _bottle["default"],
  value: 1,
  concept: "bottle (｡ ・ // ε // ・｡)	",
  sent: ["Anh gửi chai nhỏ này để chứa đựng kỷ niệm của chúng ta, em bé nhớ giữ gìn nghen! 🍼💖", "Chai này là lời nhắn rằng tình yêu của chúng ta sẽ không bao giờ phai đâu á! 🍼💕", "Chai nhỏ nhưng chứa cả bầu trời kỷ niệm của chúng mình, nhớ mãi nha bé! 🍼💞", "Anh hy vọng chai này sẽ lưu giữ những khoảnh khắc đẹp nhất giữa hai đứa mình! 🍼💘", "Chai nhỏ mà đầy yêu thương từ anh dành cho em bé, yêu nhiều lắm! 🍼💓", "Mỗi lần nhìn chai này, hãy nhớ đến những kỷ niệm đẹp chúng mình đã chia sẻ nha! 🍼💑", "Chai nhỏ nhưng đầy tình yêu anh dành cho em bé, không thể đo đếm hết được đâu á! 🍼"]
}, {
  image: _present["default"],
  value: 4,
  concept: "present (っ˘з(˘⌣˘ ) ♡	",
  sent: ["Món quà này là lời nhắn từ trái tim anh, yêu em bé rất nhiều luôn! 🎁💘", "Dù nhỏ thôi nhưng món quà này chứa đựng bao tình cảm anh dành cho em bé ớ! 🎁💓", "Hy vọng món quà này sẽ làm em bé vui như cách em khiến anh hạnh phúc ó! 🎁😊", "Món quà này là một phần nhỏ trong tất cả những gì anh muốn trao cho em bé! 🎁💞", "Mỗi món quà anh tặng đều có một phần tình yêu anh dành cho em bé á! 🎁💖", "Món quà nhỏ này là cách anh nói 'Anh yêu em bé thật nhiều ó!' 🎁💓", "Anh muốn món quà này sẽ luôn nhắc nhở em bé về tình yêu của chúng mình! 🎁💘"]
}];
exports.loves = loves;