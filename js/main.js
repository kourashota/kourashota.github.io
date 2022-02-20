`use strict`;

{
  const open = document.querySelector("#open");
  const mask = document.querySelector(".mask");
  const close = document.querySelector("#close");
  const calendar = document.querySelector("#calendar");
  const open2 = document.querySelector("#open2");

  open.addEventListener("click", () => {
    mask.classList.add('show');
    open.classList.add('hide');
    calendar.classList.add('hide');
  })

  open2.addEventListener("click", () => {
    mask.classList.add('show');
    open.classList.add('hide');
    calendar.classList.add('hide');
  })

  close.addEventListener("click", () => {
  mask.classList.remove('show');
  open.classList.remove('hide');
    calendar.classList.remove('hide');
  })





  function inviewcallback(entries, obs) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("appear");
      obs.unobserve(entry.target);
    });
  }

  function onscrollcallback(entries) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        float.classList.add("scrolled");
      } else {
        float.classList.remove("scrolled");
      }
    });
  }

  const options = {
    threshold: 0.3,
  };

  const float = document.querySelector(".float");

  const targets = document.querySelectorAll(".animate");
  const inviewobserver = new IntersectionObserver(inviewcallback, options);


  targets.forEach(target => {
    inviewobserver.observe(target);
  });



  const onscrollobserver = new IntersectionObserver(onscrollcallback);
  onscrollobserver.observe(document.getElementById("target"));
}
