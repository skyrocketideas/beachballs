"use strict";

// gsap.from(".ball", { duration: 2, x: 300, rotate: 200, ease: "bounce" });

// var myObject = { rotation: 0 };
// gsap.to(myObject, {
// 	duration: 2,
// 	rotate: 300,
// 	onComplete: function() {
// 		console.log("hello" + myObject.rotation);
// 	}
// });

gsap.to(".ball", { duration: 2, y: -400, stagger: 0.2 });

// gsap.to(".ball", { duration: 2, x: 400, rotate: 200, ease: "bounce", delay: 3, onStart: beginAnim, onUpdate: inProgress, onComplete: animCompleted });

// function beginAnim() {
// 	console.log("animation started");
// }

// function inProgress() {
// 	console.log("in progress");
// }

// function animCompleted() {
// 	console.log("done!");
// 	gsap.to(".ball", { duration: 4, scale: 0.1 });
// }
