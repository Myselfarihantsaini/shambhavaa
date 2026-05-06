const image = time => `images/WhatsApp Image 2026-05-04 at ${time}.jpeg`;

const braceletTimes = [
  "5.21.19 PM", "5.21.31 PM", "5.21.48 PM", "5.22.26 PM", "5.23.56 PM",
  "5.24.51 PM", "5.25.12 PM", "5.26.00 PM", "5.26.15 PM", "5.26.30 PM",
  "5.26.50 PM", "5.27.41 PM", "5.28.06 PM", "5.28.24 PM", "5.28.44 PM",
  "5.29.13 PM", "5.30.34 PM", "5.31.04 PM", "5.31.22 PM", "5.31.40 PM",
  "5.31.53 PM", "5.32.06 PM", "5.32.33 PM", "5.32.48 PM", "5.33.15 PM",
  "5.36.36 PM", "5.36.54 PM", "5.37.19 PM", "5.37.40 PM", "5.37.59 PM",
  "5.38.16 PM", "5.38.39 PM", "5.38.56 PM", "5.39.25 PM", "5.39.44 PM",
  "5.39.58 PM", "5.43.33 PM", "5.43.44 PM", "5.44.00 PM", "5.44.13 PM",
  "5.46.13 PM", "5.46.20 PM", "5.47.17 PM", "5.47.29 PM", "5.47.42 PM",
  "5.47.54 PM", "5.56.48 PM", "5.57.37 PM", "5.58.34 PM", "5.58.52 PM",
  "6.07.54 PM", "6.08.08 PM", "6.08.25 PM", "6.08.41 PM", "6.09.03 PM",
  "6.09.26 PM", "6.09.43 PM", "6.10.18 PM", "6.10.32 PM", "6.10.48 PM",
  "6.11.01 PM", "6.11.15 PM", "6.11.35 PM", "6.11.59 PM", "6.12.20 PM",
  "6.12.33 PM", "6.12.43 PM", "6.12.57 PM", "6.13.13 PM"
];

const rudrakshaTimes = [
  "6.13.58 PM", "6.14.15 PM", "6.14.40 PM", "6.14.54 PM", "6.15.23 PM",
  "6.15.40 PM", "6.15.49 PM", "6.16.17 PM", "6.16.35 PM", "6.16.55 PM",
  "6.17.50 PM", "6.17.58 PM", "6.18.07 PM", "6.18.16 PM", "6.18.32 PM",
  "6.18.39 PM", "6.18.53 PM", "6.19.08 PM", "6.19.18 PM", "6.19.24 PM",
  "6.19.39 PM", "6.21.16 PM", "6.21.28 PM", "6.21.43 PM", "6.22.01 PM"
];

const gemstoneCatalog = [
  ["6.24.01 PM", "African Hessonite / Gomed Stone", 1799],
  ["6.24.23 PM", "Natural Gomed Cabochon Stone", 1699],
  ["6.24.46 PM", "Cat's Eye / Lehsunia Stone", 999],
  ["6.25.03 PM", "White Zircon / Jarkan Stone", 799],
  ["6.25.24 PM", "Turquoise / Firoza Stone", 999],
  ["6.25.45 PM", "Amethyst Gemstone", 699],
  ["6.26.11 PM", "Blue Sapphire / Neelam Stone", 5799],
  ["6.26.38 PM", "Bangkok Blue Sapphire / Neelam", 5799],
  ["6.26.54 PM", "Black Onyx Gemstone", 599],
  ["6.27.07 PM", "Moonstone Cabochon", 899],
  ["6.27.18 PM", "London Blue Topaz Gemstone", 1499],
  ["6.27.38 PM", "Red Coral / Moonga Stick", 1299],
  ["6.27.58 PM", "Red Coral / Moonga Stone", 1299],
  ["6.28.16 PM", "Natural Pearl / Moti Stone", 899],
  ["6.28.30 PM", "Natural Pearl / Moti Stone", 899],
  ["6.28.52 PM", "Cat's Eye / Lehsunia Stone", 999],
  ["6.29.11 PM", "White Zircon / Jarkan Stone", 799],
  ["6.29.42 PM", "Ceylon Blue Sapphire Stone", 5799],
  ["6.30.06 PM", "Hessonite / Gomed Stone", 1799],
  ["6.30.31 PM", "Yellow Sapphire / Pukhraj Stone", 4799],
  ["6.30.54 PM", "Opal Gemstone", 1499],
  ["6.31.23 PM", "Citrine / Sunela Stone", 799],
  ["6.31.47 PM", "Emerald / Panna Stone", 2299],
  ["6.32.10 PM", "Emerald / Panna Stone", 2299],
  ["6.32.42 PM", "Opal Gemstone", 1499],
  ["6.33.50 PM", "Opal Cabochon Gemstone", 1499],
  ["6.34.13 PM", "Blue Sapphire / Neelam Stone", 5799],
  ["6.34.36 PM", "Turquoise / Firoza Stone", 999],
  ["6.35.29 PM", "Blue Sunstone Gemstone", 899],
  ["6.35.47 PM", "White Zircon / Jarkan Stone", 799],
  ["6.36.11 PM", "Peridot Gemstone", 1499],
  ["6.36.39 PM", "Natural Ruby / Manik Stone", 2799],
  ["6.36.57 PM", "Natural Pearl / Moti Stone", 899],
  ["6.37.23 PM", "Red Coral / Moonga Triangle", 1299],
  ["6.37.59 PM", "White Opal Triangle Stone", 1499],
  ["6.38.30 PM", "White Sapphire Stone", 2499],
  ["6.38.45 PM", "White Sapphire Stone", 2499],
  ["6.39.06 PM", "Yellow Sapphire / Pukhraj Stone", 4799],
  ["6.39.24 PM", "Blue Zircon / Jarkan Stone", 799]
];

const yantraCatalog = [
  ["6.40.46 PM", "Green Orgonite Energy Pyramid", 999],
  ["6.41.04 PM", "Seven Chakra Energy Pyramid", 1199],
  ["6.41.21 PM", "Multi Crystal Energy Pyramid", 1199],
  ["6.41.35 PM", "Rose Quartz Orgonite Pyramid", 999],
  ["6.41.53 PM", "Lapis Orgonite Energy Pyramid", 1199],
  ["6.42.17 PM", "Pyrite Prosperity Pyramid", 1299],
  ["6.42.41 PM", "Black Tourmaline Protection Pyramid", 1299]
];

const braceletNames = [
  "Green Aventurine Crystal Bracelet", "Amethyst Crystal Bracelet", "Labradorite Crystal Bracelet",
  "Money Magnet Bracelet", "Rose Quartz Crystal Bracelet", "Lapis Lazuli Bracelet",
  "Seven Chakra Bracelet", "Hematite Bracelet", "Tiger Eye Bracelet", "Navratna Crystal Bracelet",
  "Clear Quartz Bracelet", "Black Onyx Bracelet", "Pearl Bracelet", "Aquamarine Bracelet",
  "Tourmalinated Quartz Bracelet", "Yellow Citrine Bracelet", "Garnet Bracelet",
  "Pyrite Bracelet", "Howlite Bracelet", "Lava Stone Bracelet"
];

const braceletSubtitles = [
  "Natural beads for daily energy balancing",
  "Handpicked crystal bracelet with polished beads",
  "Ready-to-wear bracelet for intention and protection",
  "A gift-ready spiritual bracelet for everyday use"
];

const rudrakshaNames = [
  "Rudraksha Mala", "5 Mukhi Nepali Rudraksha", "Collector Rudraksha Bead",
  "Natural Rudraksha Bead", "Energized Rudraksha Bead", "Rudraksha Bracelet"
];

let cart = [];

const formatPrice = value => `Rs. ${value.toLocaleString("en-IN")}`;
const comparePrice = price => Math.ceil((price * 1.09) / 10) * 10;
const styleNumber = index => String(index + 1).padStart(2, "0");

const products = {
  bracelets: braceletTimes.map((time, index) => {
    const price = 349 + (index % 9) * 50;
    return {
      id: `bracelet-${styleNumber(index)}`,
      name: `${braceletNames[index % braceletNames.length]} - Style ${styleNumber(index)}`,
      subtitle: braceletSubtitles[index % braceletSubtitles.length],
      category: "Crystal bracelet",
      price,
      compareAt: comparePrice(price),
      image: image(time)
    };
  }),
  rudraksha: rudrakshaTimes.map((time, index) => {
    const isMala = index === 0 || index === rudrakshaTimes.length - 1;
    const price = isMala ? 549 : 349 + (index % 6) * 250;
    return {
      id: `rudraksha-${styleNumber(index)}`,
      name: `${rudrakshaNames[index % rudrakshaNames.length]} - Style ${styleNumber(index)}`,
      subtitle: isMala ? "Traditional mala for mantra jaap and daily sadhana" : "Natural Rudraksha selected for daily spiritual wear",
      category: isMala ? "Rudraksha mala" : "Nepali Rudraksha",
      price,
      compareAt: comparePrice(price),
      image: image(time)
    };
  }),
  gemstones: gemstoneCatalog.map(([time, name, price], index) => ({
    id: `gemstone-${styleNumber(index)}`,
    name,
    subtitle: "Certified loose gemstone for astrological recommendation",
    category: "Certified gemstone",
    price,
    compareAt: comparePrice(price),
    image: image(time)
  })),
  yantras: yantraCatalog.map(([time, name, price], index) => ({
    id: `yantra-${styleNumber(index)}`,
    name,
    subtitle: "Spiritual remedy tool for home, desk or puja space",
    category: "Energy pyramid",
    price,
    compareAt: comparePrice(price),
    image: image(time)
  }))
};

function icon(name) {
  return `<i data-lucide="${name}"></i>`;
}

function refreshIcons() {
  if (window.lucide) window.lucide.createIcons();
}

function productCard(product) {
  const card = document.createElement("article");
  card.className = "product-card";
  card.innerHTML = `
    <div class="product-media">
      <img src="${product.image}" alt="${product.name}" loading="lazy">
      <span class="sale-badge">Sale</span>
    </div>
    <div class="product-info">
      <small>${product.category}</small>
      <h3>${product.name}</h3>
      <p>${product.subtitle}</p>
      <div class="price-row">
        <strong>From ${formatPrice(product.price)}</strong>
        <s>${formatPrice(product.compareAt)}</s>
      </div>
      <button class="add-button" type="button">Add to cart</button>
    </div>
  `;
  card.querySelector(".add-button").addEventListener("click", () => addToCart(product));
  return card;
}

function renderProducts() {
  document.getElementById("gemstoneGrid")?.replaceChildren(...products.gemstones.map(productCard));
  document.getElementById("rudrakshaGrid")?.replaceChildren(...products.rudraksha.map(productCard));
  document.getElementById("braceletGrid")?.replaceChildren(...products.bracelets.map(productCard));
  document.getElementById("yantraGrid")?.replaceChildren(...products.yantras.map(productCard));
}

const navLinks = document.getElementById("navLinks");
const menuButton = document.getElementById("menuButton");

menuButton?.addEventListener("click", () => {
  navLinks?.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => navLinks?.classList.remove("open"));
});

const cartDrawer = document.getElementById("cartDrawer");
const cartBackdrop = document.getElementById("cartBackdrop");
const cartItems = document.getElementById("cartItems");
const cartEmpty = document.getElementById("cartEmpty");

function openCart() {
  document.body.classList.add("cart-open");
  cartDrawer?.classList.add("open");
  cartDrawer?.setAttribute("aria-hidden", "false");
  cartBackdrop?.classList.add("visible");
}

function closeCart() {
  document.body.classList.remove("cart-open");
  cartDrawer?.classList.remove("open");
  cartDrawer?.setAttribute("aria-hidden", "true");
  cartBackdrop?.classList.remove("visible");
}

document.getElementById("cartButton")?.addEventListener("click", openCart);
document.getElementById("closeCart")?.addEventListener("click", closeCart);
cartBackdrop?.addEventListener("click", closeCart);

function addToCart(product) {
  const item = cart.find(entry => entry.id === product.id);
  if (item) item.qty += 1;
  else cart.push({ ...product, qty: 1 });
  renderCart();
  openCart();
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  renderCart();
}

function renderCart() {
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  const total = cart.reduce((sum, item) => sum + item.qty * item.price, 0);
  document.getElementById("cartCount").textContent = String(count);
  document.getElementById("cartTotal").textContent = formatPrice(total);
  cartEmpty?.classList.toggle("visible", cart.length === 0);

  cartItems?.replaceChildren(...cart.map(item => {
    const row = document.createElement("div");
    row.className = "cart-row";
    row.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div>
        <h3>${item.name}</h3>
        <p>${item.qty} x ${formatPrice(item.price)}</p>
      </div>
      <div>
        <strong>${formatPrice(item.qty * item.price)}</strong>
        <button class="remove-button" type="button" aria-label="Remove ${item.name}">${icon("x")}</button>
      </div>
    `;
    row.querySelector(".remove-button").addEventListener("click", () => removeFromCart(item.id));
    return row;
  }));

  const checkoutLink = document.getElementById("checkoutLink");
  if (checkoutLink) {
    const message = cart.length
      ? `Namaste Shambhavaa, I want to checkout:\n${cart.map(item => `${item.qty} x ${item.name} - ${formatPrice(item.qty * item.price)}`).join("\n")}\nEstimated total: ${formatPrice(total)}`
      : "Namaste Shambhavaa, I need help choosing the right product.";
    checkoutLink.href = `https://wa.me/919999999999?text=${encodeURIComponent(message)}`;
  }

  refreshIcons();
}

document.getElementById("finderForm")?.addEventListener("submit", event => {
  event.preventDefault();
  document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
});

renderProducts();
renderCart();
refreshIcons();
