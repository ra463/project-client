/* eslint-disable @typescript-eslint/no-explicit-any */
import { HiPlus } from "react-icons/hi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const { products } = useSelector((state: any) => state.products);
  return (
    <div className="w-full bg-primary mt-2 rounded mr-3 max-w-full md:m-auto md:w-11/12">
      <div className="flex justify-between m-4">
        <span className="bg-input p-2 px-4 rounded">All Product's</span>
        <button
          onClick={() => navigate("/add/add-product")}
          className="bg-green flex gap-1 p-2 px-4 rounded items-center"
        >
          <HiPlus />
          Add Product
        </button>
      </div>
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm font-light text-surface dark:text-white">
            <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
              <tr>
                <th scope="col" className="px-6 py-4">
                  #
                </th>
                <th scope="col" className="px-6 py-4">
                  Name
                </th>
                <th scope="col" className="px-6 py-4">
                  Quantity
                </th>
                <th scope="col" className="px-6 py-4">
                  Rate
                </th>
                <th scope="col" className="px-6 py-4">
                  Total
                </th>
                <th scope="col" className="px-6 py-4">
                  Added By
                </th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 ? (
                products.map((product: any, index: number) => (
                  <tr className="border-b border-neutral-200 dark:border-white/10">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      {index + 1}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {product.name}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {product.qty}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {product.rate}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {product.total}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {product.user.name}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={6}
                    className="whitespace-nowrap px-6 py-4 font-medium text-center"
                  >
                    No Product's Found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
