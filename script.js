let container = document.getElementById("container");
container.innerHTML = "";
let user_name;
let user_id;

do {
  user_name = prompt("Enter Your Name");  
} while (user_name == null)

do {
 user_id = prompt("Please Enter Your Instagram Id");
} while (user_id == null)


const HackerMan = async () => {

  let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Initializing The Hacking Process......!!!!!!!!!!");
      container.innerHTML = `<h1>Initializing The Hacking Process......!!!!!!!!!!<h1>`;
    }, 2000);
  });

  let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      let timer_id = setInterval(set_name, 1000);
      function set_name() {
        container.innerHTML += `<h1>Hacking ${user_name} Instagram Account........!!!!!!!!!<h1>`;
      }
      resolve(`Hacking ${user_name} Instagram Account........!!!!!!!!!`);
      setTimeout(stop_timer, 6000)
      function stop_timer() {
        clearInterval(timer_id)
      }
    }, 3000);
  });

  let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Username founded: ${user_id}........!!!!!!!`);
      container.innerHTML += `<h1>Username founded: ${user_id}........!!!!!!!<h1>`;

    }, 10000);
  });

  let p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
      let timer_id = setInterval(set_name, 1000);
      function set_name() {
        container.innerHTML += `<h1>Connecting to Instagram Account........!!!!!!!!!!!<h1>`;
      }
      resolve("Connecting to Instagram Account........!!!!!!!!!!!");
      setTimeout(stop_timer, 6000)
      function stop_timer() {
        clearInterval(timer_id)
      }

    }, 13000);
  });

  let p5 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Instagram Account Connected........!!!!!!!!!!!");
      container.innerHTML += `<h1>Instagram Account Connected........!!!!!!!!!!!<h1>`;

    }, 22000);
  });

  let p6 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hacking Completed...........!!!!!!!!!!");
      container.innerHTML += `<h1>Hacking Completed...........!!!!!!!!!!<h1>`;

    }, 25000);
  });

  let p7 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Your Account is Hacked........!!!!!!!!!!!");
      container.innerHTML += `<h1>Your Account is Hacked........!!!!!!!!!!!<h1>`;

    }, 27000);
  });

  let a = await p1;
  // console.log(a);

  let b = await p2;
  // console.log(b);

  let c = await p3;
  // console.log(c);

  let d = await p4;
  // console.log(d);

  let e = await p5;
  // console.log(e);

  let f = await p6;
  // console.log(f);

  let g = await p7;
  // console.log(g);


  // return [a, b, c, d, e, f, g];
}

let x = HackerMan();
// console.log(x);
