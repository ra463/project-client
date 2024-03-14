import { HiPlus } from "react-icons/hi";

const Home = () => {
  return (
    <div className="w-full bg-primary mt-2 rounded mr-3 max-w-full md:m-auto md:w-11/12">
      <div className="flex justify-between m-4">
        <span className="bg-input p-2 px-4 rounded">Product's</span>
        <button className="bg-green flex gap-1 p-2 px-4 rounded items-center">
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
                  Total
                </th>
                <th scope="col" className="px-6 py-4">
                  Name
                </th>
                <th scope="col" className="px-6 py-4">
                  Total(+18% GST)
                </th>
                <th scope="col" className="px-6 py-4">
                  Added By
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-neutral-200 dark:border-white/10">
                <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                <td className="whitespace-nowrap px-6 py-4">Mark</td>
                <td className="whitespace-nowrap px-6 py-4">Otto</td>
                <td className="whitespace-nowrap px-6 py-4">@mdo</td>
              </tr>
              <tr className="border-b border-neutral-200 dark:border-white/10">
                <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
                <td className="whitespace-nowrap px-6 py-4">Jacob</td>
                <td className="whitespace-nowrap px-6 py-4">Thornton</td>
                <td className="whitespace-nowrap px-6 py-4">@fat</td>
              </tr>
              <tr className="border-b border-neutral-200 dark:border-white/10">
                <td className="whitespace-nowrap px-6 py-4 font-medium">3</td>
                <td className="whitespace-nowrap px-6 py-4">Larry</td>
                <td className="whitespace-nowrap px-6 py-4">Wild</td>
                <td className="whitespace-nowrap px-6 py-4">@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
