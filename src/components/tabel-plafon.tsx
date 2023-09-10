import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';
import { taxCategories } from '@/utils/tax-category';
import { cn, shortenNumber } from '@/lib/utils';

interface Props {
  venitTotalAnual: number;
}

const TabelCategoria = ({ venitTotalAnual }: Props) => {
  //  TODO: scos hover pe tabel

  return (
    <div className="my-6 rounded bg-white shadow-md dark:bg-gray-800">
      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Tabel cotizatii minime in functie de venit:
      </h2>
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-inherit">
            <TableHead>Venit (RON)</TableHead>
            <TableHead>CAS</TableHead>
            <TableHead>CASS</TableHead>
            <TableHead>FNUASS</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {taxCategories.map((category, index) => {
            const isHighlighted =
              venitTotalAnual >= category.min &&
              venitTotalAnual <= category.max;
            return (
              <TableRow
                key={index}
                className={cn('hover:bg-inherit', {
                  'bg-muted hover:bg-muted': isHighlighted,
                })}>
                <TableHead>
                  {category.name} <br />{' '}
                  <span className="text-xs font-light">
                    {' '}
                    {category.min} -{' '}
                    {category.max > 1e10 ? 'inf' : category.max}
                  </span>
                </TableHead>
                <TableCell>{category.CAS}</TableCell>
                <TableCell>{category.CASS}</TableCell>
                <TableCell>x</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default TabelCategoria;
