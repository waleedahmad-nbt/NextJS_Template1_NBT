import { products } from '@/app/data';
import { useRouter } from 'next/router';

const ProductDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const product = products.find((p) => p.id === parseInt(id, 10));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.imageSrc} alt={product.title} />
      <p>Original Price: ${product.originalPrice}</p>
      <p>Category: {product.category}</p>
    </div>
  );
};

export default ProductDetails;
