const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 1200;
canvas.height = 500;

// 한번에 그림을 그리는 방법
// ctx.fillRect(300, 50, 100, 100);

// 두번으로 나누는 방법으로 그림을 그리는 방법
// ctx.rect(50, 50, 100, 100);
// ctx.rect(150, 150, 100, 100);
// ctx.rect(250, 250, 100, 100);
// ctx.fill();
// 그림을 그린 후 끝났다고 알려준다
// ctx.beginPath();

// ctx.rect(350, 350, 100, 100);
// ctx.fillStyle = "red";
// ctx.fill();

// 선으로 그림을 그리는 방법
// ctx.moveTo(50, 50);
// ctx.lineTo(150, 50);
// ctx.lineTo(150, 150);
// ctx.lineTo(50, 150);
// ctx.lineTo(50, 50);

// 선
// ctx.stroke();

// 채우기
// ctx.fill();

// 집만들기

// 옆 기둥
ctx.fillRect(200, 200, 50, 200);
ctx.fillRect(400, 200, 50, 200);

// 문
ctx.lineWidth = 2;
ctx.strokeRect(300, 325, 50, 75);

// 윗 기둥
ctx.fillRect(200, 200, 200, 25);

// 지붕
ctx.moveTo(175, 200);
ctx.lineTo(325, 100);
ctx.lineTo(475, 200);
ctx.lineTo(175, 200);
ctx.fill();
ctx.beginPath();

// 창문
ctx.strokeRect(275, 250, 100, 50);

ctx.moveTo(275, 275);
ctx.lineTo(375, 275);
ctx.stroke();
ctx.beginPath();

ctx.moveTo(325, 250);
ctx.lineTo(325, 300);
ctx.stroke();
ctx.beginPath();

// 바닥
ctx.moveTo(200, 400);
ctx.lineTo(450, 400);
ctx.stroke();
ctx.beginPath();

// 사람
//사람 팔
ctx.strokeRect(700, 300, 20, 60);
ctx.strokeRect(780, 300, 20, 60);

// 사람 상체
ctx.rect(720, 300, 60, 50);
ctx.fillStyle = "grey";
ctx.fill();
ctx.beginPath();

// 사람 머리
ctx.arc(750, 270, 30, 0, 2 * Math.PI);
ctx.fillStyle = "black";
ctx.fill();
ctx.beginPath();

// 사람 다리
ctx.strokeRect(720, 350, 30, 70);
ctx.strokeRect(750, 350, 30, 70);
