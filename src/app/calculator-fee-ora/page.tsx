'use client';

import { SliderAcoperire } from '@/components/sliderAcoperire';
import TabelPlafon from '@/components/tabel-plafon';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
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
    procentAcoperire: [100],
    value4: 0,
    plataVoluntaraCassCheckbox: false,
    plataVoluntaraCass: 0,
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

  const sliderValueChange = (value: number[]): void => {
    const event = {
      target: { name: 'procentAcoperire', value },
    } as unknown as ChangeEvent<HTMLInputElement>;
    handleChange(event);
  };

  // const handleCheckboxChange = (e) => {
  //   console.log(e.target);
  // };

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
        break;
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
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Calculator tarif orar PFA cu impozitare reală
      </h1>
      <div className="mt-4 flex justify-between">
        <p className="leading-7">Curs EUR: {exchangeRate}</p>
        <p className="leading-7">Salariu minim: {salariuMinim}</p>
      </div>
      <TabelPlafon />
      <p className="leading-7">
        Dari la stat: Impozit pe venit (10%), CAS (25%), CASS (10%)
      </p>
      {/* Instructiuni de folosire */}
      <div className="mb-4">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Instructiuni de folosire:
        </h2>
        <p className="mb-4 text-lg">
          Completeaza campurile de mai jos cu datele dorite si rezultatul va fi
          calculat dinamic in timp real.
        </p>
      </div>
      {/* Formular */}
      <form>
        <div className="auto-grid mb-4">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="netDoritLunaRon">Net dorit pe luna (RON):</Label>
            <Input
              type="number"
              name="netDoritLunaRon"
              value={formData.netDoritLunaRon}
              onChange={handleChange}
              required
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="netDoritLunaEur">Net dorit pe luna (EUR):</Label>
            <Input
              type="number"
              name="netDoritLunaEur"
              value={formData.netDoritLunaEur}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <p>
          MAI AI SI ALTE VENITURI ? DA, ATUNCI CAT ? TREBE CUMULATE PENTRU A
          VEDEA CATEGOIRIE DE CAS CASS
        </p>
        <div className="auto-grid mb-4">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="oreZi">Ore lucrate pe zi:</Label>
            <Input
              type="number"
              name="oreZi"
              value={formData.oreZi}
              onChange={handleChange}
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="zileConcediu">Concediu (zile):</Label>
            <Input
              type="number"
              name="zileConcediu"
              value={formData.zileConcediu}
              onChange={handleChange}
              readOnly
            />
          </div>
        </div>
        {/* Checkboxes */}
        <div className="mb-4 flex">
          <div className="mr-2 flex w-1/2 items-center space-x-2">
            <Checkbox name="checkbox1" />
            <Label>
              Doresc sa platesc CAS chiar daca sunt sub plafonul de 12 salarii
            </Label>
          </div>
          <div className="ml-2 flex w-1/2 items-center space-x-2">
            <Checkbox name="checkbox2" />
            <Label>
              Nu platesc CAS (ex. pensionari, avocati, notari, personal
              clerical, etc.)
            </Label>
          </div>
        </div>
        <div className="mb-4 flex">
          <div className="mr-2 flex w-1/2 items-center space-x-2">
            <Checkbox
              name="checkbox1"
              // checked={formData.plataVoluntaraCassCheckbox}
              // onCheckedChange={handleCheckboxChange}
            />
            <Label className="mr-2 ">
              Doresc sa platesc CASS chiar daca sunt sub plafonul de 6 salarii
              minime
            </Label>
          </div>
          {formData.plataVoluntaraCass ? (
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="plataVoluntaraCass">
                Suma plata voluntara CASS:
              </Label>
              <Input
                type="number"
                name="plataVoluntaraCass"
                value={formData.plataVoluntaraCass}
                onChange={handleChange}
              />
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="procentAcoperire">
            In ce procent doresti ca acest tarif sa acopere taxele(CAS & CASS)
            anuale?
          </label>
          <div className="flex flex-row items-center">
            <SliderAcoperire
              name="procentAcoperire"
              value={formData.procentAcoperire}
              onValueChange={sliderValueChange}
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
