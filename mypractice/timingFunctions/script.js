let start = () => {
    console.log("kushal")
}

let print = () => {
    let num = 1;
    n = setInterval(() => {
        console.log(num++);
    },1000)

    setTimeout(() => {
        clearInterval(n);
    },10000)
}

function startCountdown(seconds) {
  let remaining = seconds;

  let timerId = setInterval(() => {
    console.log("Time left:", remaining, "seconds");
    remaining--;

    if (remaining < 0) {
      clearInterval(timerId);
      console.log("⏰ Time's up!");
    }
  }, 1000);
}

// Start a 10-second countdown
// startCountdown(10);
