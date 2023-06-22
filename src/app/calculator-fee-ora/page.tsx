'use client';

import Modal from '@/components/legal-modal';
import TabelPlafon from '@/components/tabel-plafon';
import {
  CONCEDIU_ODIHNA_MINIM,
  SALARIU_MINIM_BRUT_PE_AN,
} from '@/utils/constants';
import { getEurRateEcb } from '@/utils/currency';
import { ChangeEvent, useEffect, useState } from 'react';

const CalculatorFeeOra = () => {
  const [formData, setFormData] = useState({
    netDoritLunaRon: 0,
    netDoritLunaEur: 0,
    zileConcediu: CONCEDIU_ODIHNA_MINIM,
    oreZi: 8,
    procentAcoperire: 100,
    value4: 0,
  });

  const [exchangeRate, setExchangeRate] = useState(5.0);
  const [salariuMinim, setSalariuMinim] = useState(3000);

  useEffect(() => {
    getEurRateEcb().then((rate) => {
      setExchangeRate(rate);
    });

    const currentYear = new Date().getFullYear();
    const salariuMinimValue = SALARIU_MINIM_BRUT_PE_AN.get(currentYear);

    if (salariuMinimValue) {
      setSalariuMinim(salariuMinimValue);
    }
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    switch (fieldName) {
      case 'netDoritLunaRon':
        setFormData((prevState) => ({
          ...prevState,
          netDoritLunaRon: Number(fieldValue),
          netDoritLunaEur: Number(
            (Number(fieldValue) / exchangeRate).toFixed(2)
          ),
        }));
        break;
      case 'netDoritLunaEur':
        setFormData((prevState) => ({
          ...prevState,
          netDoritLunaRon: Number(
            (Number(fieldValue) * exchangeRate).toFixed(2)
          ),
          netDoritLunaEur: Number(fieldValue),
        }));
      default:
        setFormData((prevState) => ({
          ...prevState,
          [fieldName]: fieldValue,
        }));
        break;
    }
  };

  return (
    <div className="mx-auto max-w-3xl p-2">
      <h1 className="mb-4 text-center text-2xl font-bold">
        Calculator pentru PFA cu impozitare reala
      </h1>
      <div className="flex justify-between">
        <p className="text-base">Curs EUR: {exchangeRate}</p>
        <p className="text-base">Salariu minim: {salariuMinim}</p>
      </div>
      <Modal />
      <TabelPlafon salariuMinim={salariuMinim} />
      <p>Dari la stat: Impozit pe venit (10%), CAS (25%), CASS (10%)</p>
      {/* Instructiuni de folosire */}
      <div className="mb-4">
        <h2 className="mb-2 text-xl font-semibold">
          Instructiuni de folosire:
        </h2>
        <p className="mb-4 text-lg">
          Completeaza campurile de mai jos cu datele dorite si rezultatul va fi
          calculat dinamic in timp real.
        </p>
      </div>
      {/* Formular */}
      <form>
        <div className="mb-4 flex">
          <div className="mr-2 w-1/2">
            <label className="mb-2 block" htmlFor="netDoritLunaRon">
              Net dorit pe luna (RON):
            </label>
            <input
              className="w-full rounded-md border px-3 py-2 text-gray-800"
              type="number"
              name="netDoritLunaRon"
              value={formData.netDoritLunaRon}
              onChange={handleChange}
              required
            />
          </div>
          <div className="ml-2 w-1/2">
            <label className="mb-2 block" htmlFor="netDoritLunaEur">
              Net dorit pe luna (EUR):
            </label>
            <input
              className="w-full rounded-md border px-3 py-2 text-gray-800"
              type="number"
              name="netDoritLunaEur"
              value={formData.netDoritLunaEur}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="mb-4 flex">
          <div className="mr-2 w-1/2">
            <label className="mb-2 block" htmlFor="oreZi">
              Ore lucrate pe zi:
            </label>
            <input
              className="w-full rounded-md border px-3 py-2 text-gray-800"
              type="number"
              name="oreZi"
              value={formData.oreZi}
              onChange={handleChange}
            />
          </div>
          <div className="ml-2 w-1/2">
            <label className="mb-2 block" htmlFor="zileConcediu">
              Concediu (zile):
            </label>
            <input
              className="w-full rounded-md border px-3 py-2 text-gray-800"
              type="number"
              name="zileConcediu"
              value={formData.zileConcediu}
              onChange={handleChange}
              readOnly
            />
          </div>
        </div>
        {/* Checkboxes and labels */}
        <div className="mb-4 flex">
          <div className="mr-2 w-1/2">
            <label className="mr-2 ">
              Doresc sa platesc CAS chiar daca sunt sub plafonul de 12 salarii:
            </label>
            <input
              className="h-4 w-4 rounded border-gray-300 text-blue-600 shadow-sm"
              type="checkbox"
              name="checkbox1"
            />
          </div>
          <div className="ml-2 w-1/2">
            <label className="mr-2 ">
              Nu platesc CAS (ex. pensionari, avocati, notari, personal
              clerical, etc.)
            </label>
            <input
              className="h-4 w-4 rounded border-gray-300 text-blue-600 shadow-sm"
              type="checkbox"
              name="checkbox2"
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="procentAcoperire">
            In ce procent doresti ca acest tarif sa acopere taxele si impozitele
            anuale?
          </label>
          <div className="flex flex-row items-center">
            <input
              className="h-2 w-5/6 cursor-pointer rounded-full bg-gray-200 dark:bg-gray-700"
              type="range"
              name="procentAcoperire"
              value={formData.procentAcoperire}
              onChange={handleChange}
              min="0"
              max="100"
              step="1"
            />
            <span className="w-1/6 text-center text-gray-800 dark:text-gray-200">
              {formData.procentAcoperire}%
            </span>
          </div>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default CalculatorFeeOra;
