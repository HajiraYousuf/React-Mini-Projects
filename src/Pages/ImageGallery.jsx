import { useState } from "react";
import { Search, X, Image as ImageIcon } from "lucide-react";

const ImageGallery = () => {
  const images = [
    {
      id: 1,
      title: "Mountain",
      category: "Nature",
      url: "https://images.unsplash.com/photo-1500534623283-312aade485b7",
    },
    {
      id: 2,
      title: "Ocean",
      category: "Nature",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    {
      id: 3,
      title: "City",
      category: "City",
      url: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df",
    },
    {
      id: 4,
      title: "Forest",
      category: "Nature",
      url: "https://images.unsplash.com/photo-1448375240586-882707db888b",
    },
    {
      id: 5,
      title: "Architecture",
      category: "Architecture",
      url: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    },
    {
      id: 6,
      title: "Beach",
      category: "Travel",
      url: "https://images.unsplash.com/photo-1505881502353-a1986add3762",
    },
    {
      id: 7,
      title: "Desert",
      category: "Nature",
      url: "https://images.unsplash.com/photo-1509316785289-025f5b846b35",
    },
    {
      id: 8,
      title: "Road Trip",
      category: "Travel",
      url: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800",
    },
  ];

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = ["All", "Nature", "City", "Architecture", "Travel"];

  const filteredImages = images.filter((image) => {
    const matchesSearch = image.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || image.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <ImageIcon size={30} className="text-green-600" />
            <h1 className="text-3xl font-bold text-gray-800">
              Image Gallery
            </h1>
          </div>

          <p className="text-gray-500">
            Explore beautiful images
          </p>
        </div>

        {/* Search */}
        <div className="relative max-w-md mx-auto mb-6">
          <Search
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search images..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white border border-gray-200 rounded-xl py-3 pl-11 pr-4 outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`px-5 py-2 rounded-full font-medium transition ${
                category === item
                  ? "bg-green-600 text-white"
                  : "bg-white text-gray-600 hover:bg-green-50"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Gallery */}
        {filteredImages.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                onClick={() => setSelectedImage(image)}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition cursor-pointer group"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                <div className="p-4">
                  <h2 className="font-semibold text-gray-800">
                    {image.title}
                  </h2>

                  <p className="text-sm text-gray-500 mt-1">
                    {image.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <ImageIcon
              size={50}
              className="mx-auto text-gray-300 mb-3"
            />

            <h2 className="text-xl font-semibold text-gray-600">
              No images found
            </h2>

            <p className="text-gray-400 mt-1">
              Try another search or category
            </p>
          </div>
        )}

        {/* Image Modal */}
        {selectedImage && (
          <div
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/80 flex items-center justify-center p-5 z-50"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full"
            >
              {/* Close */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300"
              >
                <X size={32} />
              </button>

              {/* Large Image */}
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full max-h-[80vh] object-contain rounded-xl"
              />

              {/* Image Info */}
              <div className="text-white text-center mt-4">
                <h2 className="text-xl font-semibold">
                  {selectedImage.title}
                </h2>

                <p className="text-gray-300">
                  {selectedImage.category}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageGallery;
