import FeatureedProduct from "./Sub-Main-Section/FeturedProducts/FeacturedProduct";
// import Filter from "./Sub-Main-Section/Filter";
import SearchBar from "./Sub-Main-Section/SearchBar";
import ShopByCategory from "./Sub-Main-Section/ShopByCategory";
import TrendingProduct from "./Sub-Main-Section/TrendingProducts/TrendingProduct";

export default function MainContent(){
    return(
        <>
        <SearchBar />
        <ShopByCategory/>
        <TrendingProduct/>
        <FeatureedProduct/>
        </>
    )
}