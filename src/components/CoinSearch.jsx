import React, { useState } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { Sparklines, SparklinesLine } from "react-sparklines";
import CoinItem from "./CoinITem";

const CoinSearch = ({ coins }) => {
  const [searchText, setSearchText] = useState("");
  // console.log(coins)
  return (
    <div className="rounded-div my-4">
      <div className="flex flex-col md:flex-row justify-between pt-4 pb-6 text-center md:text-right">
        <h1 className='text-2xl font-bold my-2'>Search Crypto</h1>
        <form>
          <input
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full bg-primary border border-input px-4 py-2 rounded-2xl shadow-xl"
            type="text"
            placeholder="search a coin"
          />
        </form>
      </div>

      <table  className='w-full border-collapse text-center'>
        <thead>
          <tr className='border-b'>
            <th></th>
            <th className='px-4'>#</th>
            <th className='px-4'>coin</th>
            <th></th>
            <th>price</th>
            <th>24</th>
            <th className='hidden md:table-cell'>24 volume</th>
            <th className='hidden sm:table-cell'>Mkt</th>
            <th>Last 7 Days</th>
          </tr>
        </thead>

        <tbody>
          {coins
            .filter((value) => {
              if (searchText === "") {
                return value;
              } else if (
                value.name.toLowerCase().includes(searchText.toLowerCase())
              ) {
                return value;
              }
            })
            .map((coin) => (
              <CoinItem key={coin.id} coin={coin} />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoinSearch;
