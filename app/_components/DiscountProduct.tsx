"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import { FaCrown } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { useCart } from "../_context/CartContext";
import { useRouter } from "next/navigation";

// Tüm ürünleri içe aktarıyoruz
import { discountedProducts as products } from "@/data/products";

function DiscountProduct() {
  // İndirimli ürünleri filtreliyoruz
  const discountedProducts = products.filter((product) => product.discounted);

  const { addToCart } = useCart();
  const router = useRouter();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-15">
      {discountedProducts.map((product) => (
        <Card key={product.id} className="shadow-md">
          <CardHeader>
            <CardTitle className="text-yellow-500 text-sm">
              İndirimli Ürün <FaCrown className="inline" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Image
              src={product.image}
              alt={product.brand}
              width={200}
              height={200}
              className="object-cover w-full h-40"
            />
            <p className="mt-5 font-semibold text-center">{product.brand}</p>
            <p className="text-gray-600 text-center">
              {product.price.toFixed(2)}₺
            </p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button
              onClick={() => {
                addToCart({
                  id: product.id,
                  name: product.name,
                  brand: product.brand,
                  image: product.image,
                  price: product.price,
                  quantity: 1,
                });
                router.push("/cart"); // Sepet sayfasına yönlendirme
              }}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Sepete Ekle
            </Button>
            <Button
              onClick={() => router.push(`/product/${product.id}`)} // Ürün detayına yönlendirme
              className="bg-blue-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 ml-2"
            >
              İncele
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export default DiscountProduct;
