'use client';

import FormReal from '@/components/form-real';
import TabelPlafon from '@/components/tabel-plafon';
import { SALARIU_MINIM_BRUT_PE_AN } from '@/utils/constants';
import { getEurRateEcb } from '@/utils/currency';
import { useEffect, useState } from 'react';

const CalculatorFeeOra = () => {
  const [exchangeRate, setExchangeRate] = useState(5.0);
  const [salariuMinim, setSalariuMinim] = useState(3000);
  const [venitTotalAnual, setVenitTotalAnual] = useState(0);

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

  const handleVenitTotalAnualChanged = (venitTotalAnualChild: number) => {
    setVenitTotalAnual(venitTotalAnualChild);
  };

  return (
    <div className="mx-auto max-w-3xl p-2">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Calculator tarif orar PFA cu impozitare reală
      </h1>
      <div className="mt-4 flex justify-between">
        <p className="leading-7">Curs EUR: {exchangeRate}</p>
        <p className="leading-7">Salariu minim: {salariuMinim}</p>
      </div>
      <TabelPlafon venitTotalAnual={venitTotalAnual} />
      <p className="leading-7">
        Dari la stat: Impozit pe venit (10%), CAS (25%), CASS (10%)
      </p>

      {/* Instructiuni de folosire */}
      <div className="my-4">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Instructiuni de folosire:
        </h2>
        <p className="mb-4 text-lg">
          Completeaza campurile de mai jos cu datele dorite si rezultatul va fi
          calculat dinamic in timp real in sectiunea <strong>Rezultat</strong>.
        </p>
      </div>

      {/* Formular */}
      <FormReal
        exchangeRate={exchangeRate}
        salariuMinim={salariuMinim}
        onVenitTotalAnualChanged={handleVenitTotalAnualChanged}
      />
    </div>
  );
};

export default CalculatorFeeOra;
