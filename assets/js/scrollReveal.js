export function initScrollReveal() {
  const sr = ScrollReveal({
    origin: "top",
    distance: "10px",
    duration: 1000,
  });

  sr.reveal(".delaySmallReveal", { delay: 200 });
  sr.reveal(".delayMediumReveal", { delay: 200 });
  sr.reveal(".delayLargeReveal", { delay: 200 });
  sr.reveal(".delayExtraBigReveal", { delay: 200 });
  sr.reveal(".intervalCardReveal", { interval: 200 });
}
