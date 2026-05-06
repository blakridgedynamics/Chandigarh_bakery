import cookies from "@/assets/cat-cookies.jpg";
import teacakes from "@/assets/cat-teacakes.jpg";
import cheesecake from "@/assets/cat-cheesecake.jpg";
import savory from "@/assets/cat-savory.jpg";
import granola from "@/assets/cat-granola.jpg";
import munchies from "@/assets/cat-munchies.jpg";

export type Variant = { label: string; price: number };
export type Product = {
  id: string;
  name: string;
  category: CategoryId;
  image: string;
  description: string;
  shortDescription?: string;
  weight?: string;
  price: number;          // default/starting price
  variants?: Variant[];
  tag?: string;
  badge?: string;
};

export type CategoryId = "cookies" | "savory" | "tea-cakes" | "munchies" | "cheesecakes" | "granola";

export const categories: { id: CategoryId; name: string; image: string; blurb: string }[] = [
  { id: "cookies", name: "Cookies", image: cookies, blurb: "Wholesome, hand-rolled, baked daily" },
  { id: "tea-cakes", name: "Tea Cakes", image: teacakes, blurb: "Moist loaves for slow afternoons" },
  { id: "cheesecakes", name: "Cheesecakes", image: cheesecake, blurb: "Creamy, indulgent, unforgettable" },
  { id: "savory", name: "Savory", image: savory, blurb: "Focaccia, pasta & sandwiches" },
  { id: "granola", name: "Granola", image: granola, blurb: "Crunchy, nutty, naturally sweet" },
  { id: "munchies", name: "Munchies", image: munchies, blurb: "Traditional treats, lovingly made" },
];

export const products: Product[] = [
  // Cookies
  { id: "ck-1", name: "Whole-Wheat Jaggery Oats & Almond Cookies", category: "cookies", image: cookies, price: 999, weight: "Half kg", description: "Crisp-edged, chewy-centred cookies sweetened with jaggery, packed with rolled oats and California almonds.", variants: [ { label: "Half kg", price: 999 }, { label: "1 kg", price: 1950 } ], badge: "Bestseller" },
  { id: "ck-2", name: "Ragi Almond Cookies (Dates Sweetened)", category: "cookies", image: cookies, price: 999, weight: "Half kg", description: "Nutty ragi flour, slow-baked with chopped dates and almonds. Refined-sugar free.", variants: [ { label: "Half kg", price: 999 }, { label: "1 kg", price: 1950 } ], tag: "Sugar-free" },
  { id: "ck-3", name: "Almond Cranberry White Chocolate", category: "cookies", image: cookies, price: 1100, weight: "Half kg", description: "Buttery cookies studded with cranberries, almonds and creamy white chocolate chunks.", variants: [ { label: "Half kg", price: 1100 }, { label: "1 kg", price: 1999 } ] },
  { id: "ck-4", name: "Chocolate Chunk Cookies", category: "cookies", image: cookies, price: 1100, weight: "Half kg", description: "Classic, gooey chocolate chunk cookies with a soft, fudgy centre.", variants: [ { label: "Half kg", price: 1100 }, { label: "1 kg", price: 1999 } ], tag: "Gluten-free option +₹200" },
  { id: "ck-5", name: "Double Chocolate Cookies", category: "cookies", image: cookies, price: 1200, weight: "Half kg", description: "Decadent cocoa cookies loaded with dark chocolate chunks. A chocolate lover's dream.", variants: [ { label: "Half kg", price: 1200 }, { label: "1 kg", price: 2100 } ], tag: "Gluten-free option +₹200", badge: "New" },

  // Savory
  { id: "sv-1", name: "Alfredo Spicy Fettuccine", category: "savory", image: savory, price: 950, description: "Creamy alfredo with a chilli kick, tossed with hand-cut fettuccine." },
  { id: "sv-2", name: "Arrabiata Spaghetti", category: "savory", image: savory, price: 750, description: "Slow-cooked tomato arrabiata with garlic, chilli flakes and fresh basil." },
  { id: "sv-3", name: "Focaccia Sandwich", category: "savory", image: savory, price: 550, description: "House-baked focaccia layered with seasonal veggies, pesto and cheese." },
  { id: "sv-4", name: "Focaccia Bread — Sea Salt & Rosemary", category: "savory", image: savory, price: 690, description: "Pillowy focaccia, finished with flaky sea salt and fresh rosemary." },
  { id: "sv-5", name: "Focaccia Bread — Olive & Cheddar", category: "savory", image: savory, price: 750, description: "Loaded with kalamata olives and sharp aged cheddar." },
  { id: "sv-6", name: "Cinnamon Roll", category: "savory", image: savory, price: 750, description: "Soft swirls of cinnamon-sugar dough finished with cream-cheese glaze." },

  // Tea Cakes
  { id: "tc-1", name: "Dates & Walnut Tea Cake", category: "tea-cakes", image: teacakes, price: 1600, description: "Moist, lightly spiced loaf with chopped dates and toasted walnuts." },
  { id: "tc-2", name: "Dates Walnut Dark Chocolate", category: "tea-cakes", image: teacakes, price: 1900, description: "A richer take with dark chocolate chunks folded through.", badge: "Bestseller" },
  { id: "tc-3", name: "Carrot Dates Walnut", category: "tea-cakes", image: teacakes, price: 1700, description: "Old-fashioned carrot cake with dates and walnuts. Comfort in every bite." },
  { id: "tc-4", name: "Vegan Jaggery Chocolate", category: "tea-cakes", image: teacakes, price: 1500, description: "100% vegan loaf, sweetened with jaggery and rich cocoa.", tag: "Vegan" },

  // Munchies
  { id: "mn-1", name: "Desi Ghee Panjeeri", category: "munchies", image: munchies, price: 1600, weight: "1 kg", description: "Traditional panjeeri made with pure desi ghee, whole-wheat flour and dry fruits." },
  { id: "mn-2", name: "Khajoor Ladoos", category: "munchies", image: munchies, price: 1700, weight: "1 kg", description: "Date and nut ladoos — naturally sweet, no added sugar." },
  { id: "mn-3", name: "Cocktail Nuts", category: "munchies", image: munchies, price: 1700, weight: "1 kg", description: "Spiced and roasted cashews, almonds and peanuts. Perfect snack." },
  { id: "mn-4", name: "Jaipur Namkeen Mix", category: "munchies", image: munchies, price: 1500, weight: "1 kg", description: "A regal blend of crunchy savouries inspired by Jaipur's classic mixes." },
  { id: "mn-5", name: "Royal Choorna", category: "munchies", image: munchies, price: 1600, weight: "1 kg", description: "An aromatic digestive churan — tangy, sweet and spicy." },

  // Cheesecakes
  { id: "cc-1", name: "Biscoff Cheesecake", category: "cheesecakes", image: cheesecake, price: 2100, weight: "1 kg", description: "Velvety cheesecake topped with a luscious Biscoff caramel glaze.", badge: "Bestseller" },
  { id: "cc-2", name: "Berry Blast Cheesecake", category: "cheesecakes", image: cheesecake, price: 2100, weight: "1 kg", description: "Fresh mixed-berry compote over a creamy classic cheesecake." },
  { id: "cc-3", name: "Blueberry Orange Cheesecake", category: "cheesecakes", image: cheesecake, price: 2200, weight: "1 kg", description: "Bright orange-zest cheesecake crowned with blueberry compote." },
  { id: "cc-4", name: "Chocolate Nutella Ferrero", category: "cheesecakes", image: cheesecake, price: 2500, weight: "1 kg", description: "Decadent chocolate cheesecake with Nutella swirls and Ferrero crown.", badge: "Premium" },

  // Granola
  { id: "gr-1", name: "Nutty Granola Bars", category: "granola", image: granola, price: 1400, weight: "Pack", description: "Wholesome, chewy bars made with oats, honey and assorted nuts." },
  { id: "gr-2", name: "Dates & Prunes Bars", category: "granola", image: granola, price: 1400, weight: "Pack", description: "Naturally sweet energy bars with dates, prunes and seeds." },
  { id: "gr-3", name: "Almond Cranberry Granola", category: "granola", image: granola, price: 1600, weight: "1 kg", description: "Crunchy clusters of oats baked with almonds and tart cranberries." },
  { id: "gr-4", name: "Dark Chocolate Granola", category: "granola", image: granola, price: 1900, weight: "1 kg", description: "Indulgent yet wholesome granola with dark chocolate shavings.", badge: "New" },
];

// Auto-generate short one-liner descriptions for product cards
products.forEach(p => {
  if (!p.shortDescription) {
    const first = p.description.split(/[.!]/)[0].trim();
    p.shortDescription = first.length > 90 ? first.slice(0, 87) + "…" : first;
  }
});

export const findProduct = (id: string) => products.find(p => p.id === id);
export const productsByCategory = (cat: CategoryId) => products.filter(p => p.category === cat);
