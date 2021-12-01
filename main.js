let im = document.querySelector(`.main-im`),
  left = document.querySelector(`.left`),
  right = document.querySelector(`.right`),
  title = document.querySelector(`.text h1.main`),
  text = document.querySelector(`.text p.main`),
  menuIcon = document.querySelector(`.menu`),
  menu = document.querySelector(`ul`),
  closeIcon = document.querySelector(`.close`);
(x = window.matchMedia("(max-width: 768px)")),
  (counter = 1),
  (titles = [
    `Discover innovative ways to decorate`,
    ` We are available all across the globe`,
    `Manufactured with the best materials`,
  ]),
  (texts = [
    `We provide unmatched quality, comfort, and style for property owners
  across the country. Our experts combine form and function in bringing
  your vision to life. Create a room in your own style with our
  collection and make your property a reflection of you and what you
  love.`,
    `With stores all over the
  world, it's easy for you to find furniture for your home or place of
  business. Locally, we’re in most major cities throughout the country. Find
  the branch nearest you using our store locator. Any questions? Don't
  hesitate to contact us today.`,
    `Our modern furniture store provide a high level of quality. Our company has
  invested in advanced technology to ensure that every product is made as
  perfect and as consistent as possible. With three decades of experience in
  this industry, we understand what customers want for their home and office.`,
  ]);

left.addEventListener(`click`, () => {
  if (counter === 1) {
    counter = 3;
  } else counter--;
  if (x.matches) {
    im.style.backgroundImage = `url(./images/mobile-image-hero-${counter}.jpg)`;
  } else
    im.style.backgroundImage = `url(./images/desktop-image-hero-${counter}.jpg)`;
  title.innerHTML = titles[counter - 1];
  text.innerHTML = texts[counter - 1];
});
right.addEventListener(`click`, () => {
  if (counter === 3) {
    counter = 1;
  } else counter++;
  if (x.matches) {
    im.style.backgroundImage = `url(./images/mobile-image-hero-${counter}.jpg)`;
  } else
    im.style.backgroundImage = `url(./images/desktop-image-hero-${counter}.jpg)`;
  title.innerHTML = titles[counter - 1];
  text.innerHTML = texts[counter - 1];
});

menuIcon.addEventListener(`click`, () => {
  menu.style.display = `flex`;
  closeIcon.style.display = `block`;
});

closeIcon.addEventListener(`click`, () => {
  menu.style.display = `none`;
  closeIcon.style.display = `none`;
});
