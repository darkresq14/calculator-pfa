import { PROCENT_CAS, PROCENT_CASS } from '@/utils/constants';
import React from 'react';

interface TabelPlafonProps {
  salariuMinim: number;
}

const TabelPlafon = ({ salariuMinim }: TabelPlafonProps) => {
  return (
    <div className="my-6 rounded bg-white shadow-md dark:bg-gray-800">
      <p className="text-red-600">FA HIGHLIGHT PE PLAFONUL IN CARE NE AFLAM</p>
      <div className="auto-grid">
        <p className="text-xs">
          {'0 RON <= '}Plafon 0{' < ' + (6 * salariuMinim - 1) + ' RON'}
        </p>
        <p className="text-xs">
          {6 * salariuMinim + ' RON' + ' <= '}Plafon 1
          {' < ' + (12 * salariuMinim - 1) + ' RON'}
        </p>
        <p className="text-xs">
          {12 * salariuMinim + ' RON' + ' <= '}Plafon 2
          {' < ' + (24 * salariuMinim - 1) + ' RON'}
        </p>
        <p className="text-xs">{24 * salariuMinim + ' RON' + ' <= '}Plafon 3</p>
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
                Plafon 0
                <br />
              </th>
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                0
              </td>
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                0
              </td>
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                x
              </td>
            </tr>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                Plafon 1<br />
              </th>
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                0
              </td>
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                {(PROCENT_CASS * 6 * salariuMinim) / 100}
              </td>
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                x
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
                {(PROCENT_CASS * 12 * salariuMinim) / 100}
              </td>
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                x
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
                {(PROCENT_CASS * 24 * salariuMinim) / 100}
              </td>
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                x
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TabelPlafon;
