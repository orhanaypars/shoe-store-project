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
import { menProducts } from "@/data/products"; // Correctly import kidsProducts

function Page() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
        Erkek Ayakkabıları
      </h1>
      <div className="neon-line mb-3 bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 h-1"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {menProducts.map((product) => (
          <Card
            key={product.id}
            className="shadow-lg border border-blue-400 hover:shadow-xl transition"
          >
            <CardHeader>
              <CardTitle className="text-blue-600 text-center text-lg font-semibold">
                {product.brand}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src={product.image}
                alt={product.brand}
                width={200}
                height={200}
                className="object-contain w-full h-40"
              />
              <p className="mt-4 text-center text-gray-700 font-medium">
                {product.price}
              </p>
            </CardContent>
            <CardFooter className="flex justify-center space-x-4">
              <Button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-4 py-2 rounded hover:from-blue-500 hover:to-blue-700 transition font-bold">
                Satın Al
              </Button>
              <Button className="bg-gradient-to-r from-gray-600 to-gray-800 text-white px-4 py-2 rounded hover:from-gray-500 hover:to-gray-700 transition font-bold">
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
