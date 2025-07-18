export const defaultBlogs = [
  { id: 1, title: "Alstroemeria", image: "/image1.jpg" },
  { id: 2, title: "Calla Lily", image: "/image2.jpg" },
  { id: 3, title: "Daisy", image: "/image3.jpg" },
  { id: 4, title: "Gardenia", image: "/image4.jpg" },
  { id: 5, title: "Carnation", image: "/image5.jpg" },
  { id: 6, title: "Gerbera Daisy", image: "/image6.jpg" },
  { id: 7, title: "Orchid", image: "/image7.jpg" },
  { id: 8, title: "Tulip", image: "/image8.jpg" },
  { id: 9, title: "Peony", image: "/image9.jpg" },
  { id: 10, title: "Dahlia", image: "/image10.jpg" },
];

export function getBlogs() {
  if (typeof window === "undefined") return [];

  const stored = localStorage.getItem("blogs");
  if (stored) {
    const parsed = JSON.parse(stored);
    const merged = [
      ...defaultBlogs.filter(d => !parsed.find(p => p.title === d.title)),
      ...parsed
    ];
    localStorage.setItem("blogs", JSON.stringify(merged));
    return merged;
  }

  localStorage.setItem("blogs", JSON.stringify(defaultBlogs));
  return defaultBlogs;
}

export function saveBlogs(blogs) {
  if (typeof window === "undefined") return;
  localStorage.setItem("blogs", JSON.stringify(blogs));
}
