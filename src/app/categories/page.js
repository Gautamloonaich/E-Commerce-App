import AboutFooter from "../aboutSection/aboutfooter";
import CategorieCard from "./categorieCard";
import Filtercategorie, { Pagination, Paginationbar } from "./filter";

export default function  Categories()  {
    const Categories = [
    {
      image:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/66a2a08b7c-17eb51abc028f0e44277.png",
       categorie:"Electronics",
      totalProduct:"1,234",
      StartingPrice:"$9.99 ",
    },
    {
      image:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/0fba4acc66-b63ceec5a71ccede873d.png",
     categorie:"Electronics",
      totalProduct:"1,234",
      StartingPrice:"$9.99 ",
    },
    {
      image:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/f2dd659aa5-992e833d440c125c47b8.png",
     categorie:"Electronics",
      totalProduct:"1,234",
      StartingPrice:"$9.99 ",
    },
    {
      image:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/7a68a69ffd-77a0a7fcfaa20c5fccbf.png",
       categorie:"Electronics",
      totalProduct:"1,234",
      StartingPrice:"$9.99 ",
    },
    {
      image:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/adc0aa9424-cb36cb38bcb1b56c953d.png",
       categorie:"Electronics",
      totalProduct:"1,234",
      StartingPrice:"$9.99 ",
    },
{
      image:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/f2dd659aa5-992e833d440c125c47b8.png",
     categorie:"Electronics",
      totalProduct:"1,234",
      StartingPrice:"$9.99 ",
    },
    {
      image:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/7a68a69ffd-77a0a7fcfaa20c5fccbf.png",
       categorie:"Electronics",
      totalProduct:"1,234",
      StartingPrice:"$9.99 ",
    },
    {
      image:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/adc0aa9424-cb36cb38bcb1b56c953d.png",
       categorie:"Electronics",
      totalProduct:"1,234",
      StartingPrice:"$9.99 ",
    }]
    return  (<>
      
        <div className="mt-[80px] w-full">
                <div className=" pt-2 pb-30 sm:pb-20 px-2  sm:px-6 md:px-16 lg:px-18 xl:px-27 space-y-3 sm:space-y-4 md:spce-y-5 lg:space-y-6 xl:space-y-8">
                  <h1 className=" font-bold text-2xl lg:text-3xl sm:text-start text-center text-neutral-900 mb-2 ">
                   Browse Categories
                  </h1>
                  <p className="text-neutral-600 text-lg sm:text-start text-center">Discover products organized by category</p>
                  <div className="flex items-center justify-between gap-2 mt-5 mb-3">
                    <p className="text-sm md:text-lg pl-3 font-light">Showing 24 categories</p>
                    <div><Filtercategorie/></div>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4  sm:gap-8 w-full m-0 mt-5 h-full ">
                    {
                    Categories.map((item, key) => {
                      return (
                        <div key={key}>
                          <CategorieCard
                            image={item.image}
                            categories={item.categorie}
                            totalProduct={item.totalProduct}
                            StartingPrice={item.StartingPrice}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center mb-14 mt-4"><Paginationbar/></div>
              <AboutFooter/>
              </>
    )
}