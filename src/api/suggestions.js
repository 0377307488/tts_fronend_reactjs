import Products from "../data/Products";

// Hàm API giả lập gợi ý dựa trên category
export function getSuggestions(userId) {
  return new Promise((resolve) => {
    // Đọc từ localStorage
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    const viewedIds = JSON.parse(
      localStorage.getItem("viewedProducts") || "[]"
    );

    // Lấy ID đã quan tâm
    const relatedIds = [
      ...new Set([...favorites.map((p) => p.id), ...viewedIds]),
    ];

    // Lấy category của sản phẩm đã quan tâm
    const relatedCategories = [
      ...new Set([
        ...favorites.map((p) => p.category),
        ...Products.filter((p) => viewedIds.includes(p.id)).map(
          (p) => p.category
        ),
      ]),
    ];

    // Lọc ra sản phẩm cùng category, không trùng ID đã xem/thích
    const suggestions = Products.filter(
      (p) =>
        relatedCategories.includes(p.category) && !relatedIds.includes(p.id)
    );

    setTimeout(() => resolve(suggestions), 500);
  });
}
