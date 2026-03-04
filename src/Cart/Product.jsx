import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { ProductContext } from "../context/ProductProvider";

function ProductDetails() {
  const { id } = useParams();
  const { products, addToCart } = useContext(ProductContext);

  const product = products.find((item) => item.id === Number(id));

  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [reviews, setReviews] = useState([]);
  const [showForm, setShowForm] = useState(false);

  // Load product reviews when product changes
  useEffect(() => {
    if (product && product.reviews) {
      setReviews(product.reviews);
    } else {
      setReviews([]);
    }
  }, [product]);

  if (!product) {
    return (
      <h2 className="text-center mt-20 text-xl font-semibold">
        Loading Product...
      </h2>
    );
  }

  // Calculate average rating
  const averageRating =
    reviews.length > 0
      ? (
          reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length
        ).toFixed(1)
      : 0;

  // Submit review
  const handleSubmitReview = () => {
    if (!comment.trim()) return;

    const newReview = {
      rating,
      comment,
      reviewerName: "Customer",
      date: new Date().toISOString(),
    };

    setReviews([newReview, ...reviews]);
    setComment("");
    setRating(5);
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* ================= PRODUCT SECTION ================= */}
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-8 grid md:grid-cols-2 gap-10">
        {/* Image */}
        <div>
          <img
            src={product.images?.[0]}
            alt={product.title}
            className="h-96 object-contain mx-auto"
          />
        </div>

        {/* Info */}
        <div>
          <h1 className="text-3xl font-bold text-blue-900">{product.title}</h1>

          <p className="text-gray-500 mt-1">
            Brand: <span className="font-medium">{product.brand}</span>
          </p>

          <p className="text-gray-500">Category: {product.category}</p>

          <p className="text-yellow-500 mt-2 text-lg">
            ⭐ {averageRating} / 5 ({reviews.length} reviews)
          </p>

          <p className="text-gray-600 mt-4">{product.description}</p>

          <div className="mt-4 space-y-1 text-sm text-gray-700">
            <p>SKU: {product.sku}</p>
            <p>Weight: {product.weight}g</p>
            <p>
              Dimensions: {product.dimensions?.width} ×{" "}
              {product.dimensions?.height} × {product.dimensions?.depth}
            </p>
            <p>Warranty: {product.warrantyInformation}</p>
            <p>Shipping: {product.shippingInformation}</p>
            <p>Return Policy: {product.returnPolicy}</p>
            <p>
              Availability:
              <span className="text-green-600 font-semibold ml-1">
                {product.availabilityStatus}
              </span>
            </p>
            <p>Minimum Order: {product.minimumOrderQuantity}</p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-3">
            {product.tags?.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-200 px-2 py-1 text-xs rounded"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Price */}
          <div className="mt-5">
            <p className="text-2xl font-bold text-orange-500">
              ${product.price}
            </p>
            <p className="text-green-600">{product.discountPercentage}% OFF</p>
            <p className="text-sm text-gray-600">
              Stock Available: {product.stock}
            </p>
          </div>

          {/* Add To Cart */}
          <button
            onClick={() => addToCart(product)}
            disabled={product.stock === 0}
            className={`mt-6 px-6 py-3 rounded-lg text-white transition ${
              product.stock === 0
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-orange-500 hover:bg-orange-600"
            }`}
          >
            {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
          </button>
        </div>
      </div>

      {/* ================= REVIEW SECTION ================= */}
      <div className="max-w-6xl mx-auto mt-10 bg-white rounded-xl shadow-md p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Customer Reviews</h2>

          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-blue-600 text-white px-4 py-2 rounded-md"
          >
            Write Review
          </button>
        </div>

        {/* Review Form */}
        {showForm && (
          <div className="mb-6 bg-gray-100 p-4 rounded-lg">
            <div className="flex gap-2 mb-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setRating(star)}
                  className={`text-2xl ${
                    star <= rating ? "text-yellow-500" : "text-gray-400"
                  }`}
                >
                  ★
                </button>
              ))}
            </div>

            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Write your feedback..."
              className="w-full p-3 rounded border"
            />

            <button
              onClick={handleSubmitReview}
              className="mt-3 bg-green-600 text-white px-5 py-2 rounded"
            >
              Submit Review
            </button>
          </div>
        )}

        {/* Review List */}
        {reviews.length === 0 ? (
          <p className="text-gray-500">No reviews yet.</p>
        ) : (
          reviews.map((review, index) => (
            <div key={index} className="border-b pb-4 mb-4">
              <p className="text-yellow-500 text-lg">
                {"★".repeat(review.rating)}
              </p>
              <p className="text-gray-700 mt-1">{review.comment}</p>
              <p className="text-sm text-gray-500 mt-1">
                - {review.reviewerName}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ProductDetails;
