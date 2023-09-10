import {
  PROCENT_CAS,
  PROCENT_CASS,
  SALARIU_MINIM_BRUT_PE_AN,
} from './constants';

export interface TaxCategory {
  id: number;
  name: string;
  min: number;
  max: number;
  CAS: number;
  CASS: number;
}

const currentYear = new Date().getFullYear();
const salariuMinim = SALARIU_MINIM_BRUT_PE_AN.get(currentYear) ?? 3000;

const Categoria0: TaxCategory = {
  id: 0,
  name: 'Categoria 0',
  min: 0,
  max: 6 * salariuMinim - 1,
  CAS: 0,
  CASS: 0,
};

const Categoria1: TaxCategory = {
  id: 1,
  name: 'Categoria 1',
  min: 6 * salariuMinim,
  max: 12 * salariuMinim - 1,
  CAS: 0,
  CASS: (PROCENT_CASS * 6 * salariuMinim) / 100,
};

const Categoria2: TaxCategory = {
  id: 2,
  name: 'Categoria 2',
  min: 12 * salariuMinim,
  max: 24 * salariuMinim - 1,
  CAS: (PROCENT_CAS * 12 * salariuMinim) / 100,
  CASS: (PROCENT_CASS * 12 * salariuMinim) / 100,
};

const Categoria3: TaxCategory = {
  id: 3,
  name: 'Categoria 3',
  min: 24 * salariuMinim,
  max: Number.MAX_VALUE,
  CAS: (PROCENT_CAS * 24 * salariuMinim) / 100,
  CASS: (PROCENT_CASS * 24 * salariuMinim) / 100,
};

export const taxCategories: TaxCategory[] = [
  Categoria0,
  Categoria1,
  Categoria2,
  Categoria3,
];

export function getTaxCategory(salariuNet: number): TaxCategory {
  return taxCategories.find(
    (category) => salariuNet >= category.min && salariuNet <= category.max
  )!;
}
