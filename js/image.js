const imgs = [
  "cristina-glebova-FbNoihuPJNs-unsplash.jpg",
  "darren-nunis-cxE7SXKnzv0-unsplash.jpg",
  "kamran-ch-tV9_AmaruBA-unsplash.jpg",
  "keith-misner-h0Vxgz5tyXA-unsplash.jpg",
  "nordwood-themes-wvUs06Rtu5E-unsplash.jpg",
];

const randNumber = Math.floor(Math.random() * 5);

document.body.style.backgroundImage = `url(img/${imgs[randNumber]}`;
