const tl = gsap.timeline();

function page1Gsap() {
  tl.from(
    ".line",
    0.5,
    {
      opacity: 0,
      width: 0,
    },
    0.5,
  );

  tl.from(
    ".top-left",
    0.5,
    {
      opacity: 0,
    },
    1,
  );

  tl.from(
    ".bottom-right",
    0.5,
    {
      opacity: 0,
    },
    1,
  );

  tl.to(
    ".line",
    0.7,
    {
      width: "100%",
    },
    1.5,
  )
    .to(
      ".top-left",
      0.7,
      {
        top: "-2%",
        left: "2%",
        fontSize: "6vw",
      },
      1.5,
    )
    .to(
      ".bottom-right",
      0.7,
      {
        top: "82%",
        left: "80%",
        fontSize: "6vw",
      },
      1.5,
    )
    .to(
      ".page1-overlay",
      0.7,
      {
        opacity: 0,
      },
      1.5,
    );

  tl.from(".stagger,.stagger>h1", {
    opacity: 0,
    stagger: 0.1,
    y: 50,
  });
}

page1Gsap();
