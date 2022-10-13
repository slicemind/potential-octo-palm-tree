let time1 = 2
let time2 = 1
let toCatalog = gsap.timeline({paused: true});
let toClassify = gsap.timeline({paused: true});
let toCluster = gsap.timeline({paused: true});
let toCorrelate = gsap.timeline({paused: true});

// prep shape paths for morphing
MorphSVGPlugin.convertToPath("circle, polygon");

// set some defaults
gsap.defaults({ease: "none", autoAlpha: 1, duration: time1})

// initially hide nodes
gsap.set("#default4", {autoAlpha: 0});

toCatalog
  .set("#default4", {autoAlpha: 1})
  .to("#default1", { morphSVG: '#catalog1'}, 0)
  .to("#default2", { morphSVG: '#catalog2'}, 0)
  .to("#default3", { morphSVG: '#catalog3'}, 0)
  .to("#default4", { morphSVG: '#catalog4'}, 0);

toClassify
  .to("#default1", { morphSVG: '#classify1'}, 0)
  .to("#default2", { morphSVG: '#classify2'}, 0)
  .to("#default3", { morphSVG: '#classify3'}, 0)
  .to("#default4", { duration: time2, autoAlpha: 0}, 0);

toCluster
  .to("#default1", { morphSVG: '#cluster1'}, 0)
  .to("#default2", { morphSVG: '#cluster2'}, 0)
  .to("#default3", { morphSVG: '#cluster3'}, 0)
  .to("#default4", time2, { autoAlpha: 0}, 0);

toCorrelate
  .to("#default1", { morphSVG: '#correlate1'}, 0)
  .to("#default2", { duration: time2, autoAlpha: 0}, 0)
  .to("#default3", { morphSVG: '#correlate3'}, 0)
  .to("#default4", { duration: time2, autoAlpha: 0}, 0);

$(".catalog").click(function() {
  console.log("catalog clicked.");
  toCatalog.invalidate().play(0);
});

$(".classify").click(function() {
  console.log("classify clicked.");
  toClassify.invalidate().play(0);
});

$(".cluster").click(function() {
  console.log("cluster clicked.");
  toCluster.invalidate().play(0);
});

$(".correlate").click(function() {
  console.log("correlate clicked.");
  toCorrelate.invalidate().play(0);
});