try {
  const itemsForAnimation = document.querySelectorAll(
    ".statistics__itemNumber"
  );

  itemsForAnimation.forEach((itemForAnimation) => {
    itemForAnimation.addEventListener(
      "animationStarted",
      () => {
        animateNumbers(itemForAnimation);
      },
      {
        once: true,
      }
    );
  });

  window.addEventListener("scroll", () => {
    const animationStarted = new Event("animationStarted");

    const itemsForAnimation = document.querySelectorAll(
      ".statistics__itemNumber.animated"
    );

    if (itemsForAnimation) {
      itemsForAnimation.forEach((itemForAnimation) => {
        itemForAnimation.dispatchEvent(animationStarted);
      });
    }
  });

  function animateNumbers(itemForAnimation) {
    const animeationDuration = 4;
    let counter = 1;
    // if dataset present
    if (itemForAnimation.dataset.neededAmount) {
      // how many numbers need to change
      const neededAmount = itemForAnimation.dataset.neededAmount;
      // step of time for interval
      const timeStep = (1000 * animeationDuration) / neededAmount;
      // change numbers
      const animate = setInterval(() => {
        if (counter <= neededAmount) {
          // continue
          if (itemForAnimation.dataset.withSign === undefined) {
            itemForAnimation.textContent = counter;
          } else {
            itemForAnimation.textContent = `${
              counter + itemForAnimation.dataset.withSign
            }`;
          }
        } else {
          // stop
          clearInterval(animate);
        }

        counter++;
      }, timeStep);
    }
  }

  function offset(el) {
    const rect = el.getBoundingClientRect();

    const scrollLeft =
      window.pageXOffset || document.documentElement.scrollLeft;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    return {
      top: rect.top + scrollTop,
      left: rect.left + scrollLeft,
    };
  }
} catch (error) {}
