import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card"; //
import Image from "next/image";
import { FaCrown } from "react-icons/fa";
import { Button } from "@/components/ui/button"; // Import the Button component

const Products = [
  {
    id: 1,
    image: "/mostsaller-1.png",
    brand: "Nike Air Force",
    price: "$120",
  },
  {
    id: 2,
    image: "/mostsaller-2.png",
    brand: "Adidas Ultraboost",
    price: "$100",
  },
  {
    id: 3,
    image: "/mostsaller-3.png",
    brand: "Puma Suede Classic",
    price: "$90",
  },
  {
    id: 4,
    image: "/mostsaller-4.png",
    brand: "Reebok Club C 85",
    price: "$110",
  },
  {
    id: 5,
    image: "/mostsaller-5.png",
    brand: "New Balance 574",
    price: "$130",
  },
];

function DiscountProduct() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-15">
      {Products.map((product) => (
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
            <p className="text-gray-600 text-center">{product.price}</p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Satın Al
            </Button>
            <Button className="bg-blue-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 ml-2">
              İncele
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export default DiscountProduct;
