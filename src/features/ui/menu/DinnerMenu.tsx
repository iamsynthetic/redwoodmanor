import dinnerarr from "../../../data/dining/dinner.json";

interface DinnerItem {
  name: string;
  details: string;
  price: number;
}

interface DinnerCategory {
  id: number;
  category: string;
  items: DinnerItem[];
}

const DinnerMenu = () => {
  return (
    <div className="min-h-screen">
      <h1 className="text-2xl montserratlight text-base-content mb-6 text-center ">
        Dinner
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-28 gap-y-5 mx-auto">
        {dinnerarr.map((category: DinnerCategory) => (
          <div key={category.id} className="p-4">
            <div className="mb-4 pb-2 border-b border-gray-200">
              <h3 className="text-2xl cardoregular text-base-content">
                {category.category}
              </h3>
            </div>

            <div className="space-y-6">
              {category.items.map((item: DinnerItem, index: number) => (
                <div key={index} className="grid grid-cols-12 gap-4">
                  <div className="col-span-10">
                    <span className="cardoregular text-xl text-primary">
                      {item.name}
                      <br />
                      <span className="text-base-content">{item.details}</span>
                    </span>
                  </div>
                  <div className="col-span-2 text-right">
                    <span className="cardoregular text-md text-primary">
                      ${item.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DinnerMenu;
