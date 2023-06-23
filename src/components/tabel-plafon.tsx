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

const TabelCategoria = () => {
  return (
    <div className="my-6 rounded bg-white shadow-md dark:bg-gray-800">
      <p className="text-red-600">
        FA HIGHLIGHT PE CategoriaUL IN CARE NE AFLAM
      </p>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead></TableHead>
            <TableHead>CAS</TableHead>
            <TableHead>CASS</TableHead>
            <TableHead>FNUASS</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableHead>{taxCategories[0].name}</TableHead>
            <TableCell>{taxCategories[0].CAS}</TableCell>
            <TableCell>{taxCategories[0].CASS}</TableCell>
            <TableCell>x</TableCell>
          </TableRow>
          <TableRow>
            <TableHead>{taxCategories[1].name}</TableHead>
            <TableCell>{taxCategories[1].CAS}</TableCell>
            <TableCell>{taxCategories[1].CASS}</TableCell>
            <TableCell>x</TableCell>
          </TableRow>
          <TableRow>
            <TableHead>{taxCategories[2].name}</TableHead>
            <TableCell>{taxCategories[2].CAS}</TableCell>
            <TableCell>{taxCategories[2].CASS}</TableCell>
            <TableCell>x</TableCell>
          </TableRow>
          <TableRow>
            <TableHead>{taxCategories[3].name}</TableHead>
            <TableCell>{taxCategories[3].CAS}</TableCell>
            <TableCell>{taxCategories[3].CASS}</TableCell>
            <TableCell>x</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default TabelCategoria;
