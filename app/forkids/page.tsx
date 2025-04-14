import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { kidsProducts } from "@/data/products"; // Correctly import kidsProducts

function Page() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-blue-500 mb-8">
        Çocuk Ayakkabıları
      </h1>
      <div className="neon-line mb-3 bg-gradient-to-r from-pink-400 via-blue-500 to-blue-600 h-1"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {kidsProducts.map((product) => (
          <Card
            key={product.id}
            className="shadow-lg border border-blue-300 hover:shadow-xl transition"
          >
            <CardHeader>
              <CardTitle className="text-blue-500 text-center text-lg">
                {product.brand}
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
              <p className="mt-4 text-center text-gray-600">{product.price}</p>
            </CardContent>
            <CardFooter className="flex justify-center space-x-4">
              <Button className="bg-gradient-to-r from-blue-400 to-blue-600 text-white px-4 py-2 rounded hover:from-blue-500 hover:to-blue-700 transition">
                Satın Al
              </Button>
              <Button className="bg-gradient-to-r from-blue-300 to-blue-500 text-white px-4 py-2 rounded hover:from-blue-400 hover:to-blue-600 transition">
                İncele
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Page;
