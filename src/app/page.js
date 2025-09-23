
import Footer from "@/components/footer/footer";
import FeaturedProducts from "@/components/home/featured-products";
import SearchBar from "@/components/home/search-bar";
import ShopByCategory from "@/components/home/shop-by-category";
import TrendingProducts from "@/components/home/trending-products";

export default function HomePage() {
  return (
    <div className="    ">
      <SearchBar />
      <ShopByCategory/>
      <TrendingProducts/>
      <FeaturedProducts/>
      <Footer />
    </div>
  );
}
