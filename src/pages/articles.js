import { useEffect, useState } from "react";

function Articles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("/data/articles.json");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error("Error fetching articles:", error);
        // Handle errors gracefully, e.g., display an error message to the user
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Artikel</h2>
      {articles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <div
              key={index}
              className="p-4 border rounded-lg shadow hover:shadow-lg transition-shadow duration-200"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover rounded-t-lg mb-2"
              />
              <h3 className="font-bold text-lg mb-2">{article.title}</h3>
              <p className="text-gray-700 mb-4">{article.description}</p>
              <p className="text-sm text-gray-500">{article.date}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">Loading articles...</p>
      )}
    </div>
  );
}

export default Articles;
