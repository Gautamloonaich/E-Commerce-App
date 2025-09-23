import Footer from "@/components/footer/footer";
import ProductDetailCard from "@/components/product-detail/product-detail-card";
import ProductSummary from "@/components/product-detail/product-summary";
import Relatedproducts from "@/components/product-detail/related-products";
export default function ProductDetail() {

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-[72px] overflow-hidden">
        <div>
          <ul className=" flex gap-0.5 sm:gap-3 [&>*]:text-xs [&>*]:sm:text-sm [&>*]:text-neutral-500 [&>*]:cursor-pointer [&>*]:hover:text-neutral-900 [&>*]:hover:transition-transform [&>*]:hover:scale-105 [&>*]:hover:duration-200 ">
            <li className="   ">Home</li>
            <li>{`>`}</li>
            <li className="">Electronices</li>
            <li>{`>`}</li>
            <li className="">Smartphone</li>
            <li>{`>`}</li>
            <li className="">iphone 15 pro</li>
          </ul>
        </div>
        <div className="mt-6">
          <ProductDetailCard />
        </div>
        <div className="mt-10 ">
          <ProductSummary />
        </div>
        <div className="my-10 sm:my-15">
          <Relatedproducts />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
