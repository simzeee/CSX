// Add code here
function limitedInterval(callback, wait, limit) {
  let elapsedTime = 0;
  const intervalId = setInterval(() => {
    elapsedTime += wait;

    // If elapsed time exceeds or equals the limit, stop the interval
    if (elapsedTime >= limit) {
      clearInterval(intervalId);
    }
    // Run the callback
    else {
      callback();
    }

    // Update elapsed time
  }, wait);
}

// /* Uncomment the following line and click 'run' to test your work */
limitedInterval(() => console.log("repeating"), 100, 550); // should log 'repeating' once per 100 ms, five times.
