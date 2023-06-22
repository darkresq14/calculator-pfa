import { PROCENT_CAS } from '@/utils/constants';
import React from 'react';

interface TabelPlafonProps {
  salariuMinim: number;
}

const TabelPlafon = ({ salariuMinim }: TabelPlafonProps) => {
  return (
    <div className="my-6 rounded bg-white shadow-md dark:bg-gray-800">
      <p>FA HIGHLIGHT PE PLAFONUL IN CARE NE AFLAM</p>
      <div className="flex flex-row items-center justify-between border-b border-gray-200 px-6 py-4 dark:border-gray-700">
        <p className="text-xs  text-gray-800 dark:text-white">
          Plafon 1 = (6 salarii minime = {6 * salariuMinim})
        </p>

        <p className="text-xs text-gray-800 dark:text-white">
          Plafon 2 = (12 salarii minime = {12 * salariuMinim})
        </p>

        <p className="text-xs text-gray-800 dark:text-white">
          Plafon 3 = (24 salarii minime = {24 * salariuMinim})
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-max table-auto dark:text-white">
          <thead>
            <tr className="bg-gray-200 text-sm uppercase leading-normal text-gray-600 dark:bg-gray-700 dark:text-gray-300">
              <th className="px-6 py-3 text-left"></th>
              <th className="px-6 py-3 text-left">CAS</th>
              <th className="px-6 py-3 text-left">CASS</th>
              <th className="px-6 py-3 text-left">FNUASS</th>
            </tr>
          </thead>
          <tbody className="text-sm font-light text-gray-600 dark:text-gray-400">
            <tr className="border-b border-gray-200 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-900">
              <th className="whitespace-nowrap px-6 py-3 text-left">
                Plafon 1<br />
              </th>
              <td className="whitespace-nowrap px-6 py-3 text-left">0</td>
              <td className="whitespace-nowrap px-6 py-3 text-left">2</td>
              <td className="whitespace-nowrap px-6 py-3 text-left">3</td>
            </tr>
            <tr className="border-b border-gray-200 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-900">
              <th className="whitespace-nowrap px-6 py-3 text-left">
                Plafon 2<br />
              </th>
              <td className="whitespace-nowrap px-6 py-3 text-left">
                {(PROCENT_CAS * 12 * salariuMinim) / 100}
              </td>
              <td className="whitespace-nowrap px-6 py-3 text-left">2</td>
              <td className="whitespace-nowrap px-6 py-3 text-left">3</td>
            </tr>
            <tr className="border-b border-gray-200 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-900">
              <th className="whitespace-nowrap px-6 py-3 text-left">
                Plafon 3<br />
              </th>
              <td className="whitespace-nowrap px-6 py-3 text-left">
                {(PROCENT_CAS * 24 * salariuMinim) / 100}
              </td>
              <td className="whitespace-nowrap px-6 py-3 text-left">2</td>
              <td className="whitespace-nowrap px-6 py-3 text-left">3</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TabelPlafon;
