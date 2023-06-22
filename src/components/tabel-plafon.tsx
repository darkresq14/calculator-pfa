import { PROCENT_CAS } from '@/utils/constants';
import React from 'react';

interface TabelPlafonProps {
  salariuMinim: number;
}

const TabelPlafon = ({ salariuMinim }: TabelPlafonProps) => {
  return (
    <div className="my-6 rounded bg-white shadow-md dark:bg-gray-800">
      <p className="text-red-600">FA HIGHLIGHT PE PLAFONUL IN CARE NE AFLAM</p>
      <div className="flex flex-row items-center justify-between ">
        <p className="text-xs">
          Plafon 1 = (6 salarii minime = {6 * salariuMinim})
        </p>

        <p className="text-xs">
          Plafon 2 = (12 salarii minime = {12 * salariuMinim})
        </p>

        <p className="text-xs">
          Plafon 3 = (24 salarii minime = {24 * salariuMinim})
        </p>
      </div>
      <div className="my-6 w-full overflow-y-auto">
        <table className="w-full">
          <thead>
            <tr className="bm-0 border-t p-0 even:bg-muted">
              <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right"></th>
              <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                CAS
              </th>
              <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                CASS
              </th>
              <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                FNUASS
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                Plafon 1<br />
              </th>
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                0
              </td>
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                2
              </td>
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                3
              </td>
            </tr>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                Plafon 2<br />
              </th>
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                {(PROCENT_CAS * 12 * salariuMinim) / 100}
              </td>
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                2
              </td>
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                3
              </td>
            </tr>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                Plafon 3<br />
              </th>
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                {(PROCENT_CAS * 24 * salariuMinim) / 100}
              </td>
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                2
              </td>
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                3
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TabelPlafon;
