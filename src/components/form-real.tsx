'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { Input } from './ui/input';
import { ChangeEvent, useEffect, useState } from 'react';
import { getEurRateEcb } from '@/utils/currency';
import {
  CONCEDIU_ODIHNA_MINIM,
  SALARIU_MINIM_BRUT_PE_AN,
  ZILE_LUCRATOARE_AN,
} from '@/utils/constants';
import { Checkbox } from './ui/checkbox';
import { CheckedState } from '@radix-ui/react-checkbox';
import { getTaxCategory } from '@/utils/tax-category';
import { SliderAcoperire } from './sliderAcoperire';
import { Label } from './ui/label';

interface Props {
  exchangeRate: number;
  salariuMinim: number;
  onVenitTotalAnualChanged: (venitTotalAnual: number) => void;
}

const FormReal = ({
  onVenitTotalAnualChanged,
  exchangeRate,
  salariuMinim,
}: Props) => {
  const [venitTotal, setVenitTotal] = useState(0);
  const [lastModified, setLastModified] = useState<'ron' | 'eur'>('ron');

  const formSchema = z.object({
    netDoritLunaRon: z.coerce.number().min(0),
    netDoritLunaEur: z.coerce.number().min(0),
    venitSuplimentar: z.coerce.boolean(),
    venitSuplimentarValue: z.coerce.number().min(0),
    oreZi: z.coerce.number().min(1).max(24),
    zileConcediu: z.coerce.number().min(0).max(30),
    neplatitorCas: z.coerce.boolean(),
    procentAcoperire: z.array(z.coerce.number().min(0).max(100)),
    plataVoluntaraCas: z.coerce.boolean(),
    plataVoluntaraCasValue: z.coerce.number().min(0),
    plataVoluntaraCass: z.coerce.boolean(),
    plataVoluntaraCassValue: z.coerce.number().min(0),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      netDoritLunaRon: 0,
      netDoritLunaEur: 0,
      venitSuplimentar: false,
      venitSuplimentarValue: 0,
      oreZi: 8,
      zileConcediu: CONCEDIU_ODIHNA_MINIM,
      neplatitorCas: false,
      procentAcoperire: [100],
      plataVoluntaraCas: false,
      plataVoluntaraCasValue: 0,
      plataVoluntaraCass: false,
      plataVoluntaraCassValue: 0,
    },
    mode: 'all',
  });

  const { watch, setValue } = form;

  const netDoritLunaRon = watch('netDoritLunaRon');
  const netDoritLunaEur = watch('netDoritLunaEur');
  const venitSuplimentar = watch('venitSuplimentar');
  const venitSuplimentarValue = watch('venitSuplimentarValue');
  const oreZi = watch('oreZi');
  const zileConcediu = watch('zileConcediu');
  const neplatitorCas = watch('neplatitorCas');
  const procentAcoperire = watch('procentAcoperire');
  const plataVoluntaraCas = watch('plataVoluntaraCas');
  const plataVoluntaraCasValue = watch('plataVoluntaraCasValue');
  const plataVoluntaraCass = watch('plataVoluntaraCass');
  const plataVoluntaraCassValue = watch('plataVoluntaraCassValue');

  const calculateBrut = () => {
    const netPeAn = netDoritLunaRon * 12;
    // Impozit = 10% din brut = 9% din net = 0.1 * net / 0.9
    const taxCategory = getTaxCategory(venitTotal);
    // TODO: Impozitul aparrent se calculeaza din brut la PFA-uri (nu se sacade CAS si CASS)
    const impozit = (netPeAn / 0.9) * 0.1;
    // CAS obligatoriu
    const CasObligatoriu = taxCategory.CAS;
    const CasCompus = neplatitorCas
      ? 0
      : CasObligatoriu + plataVoluntaraCasValue;
    // CASS obligatoriu
    const CassObligatoriu = taxCategory.CASS;
    const CassCompus = CassObligatoriu + plataVoluntaraCassValue;
    // TODO: FNUASS
    const FNUASS = 0;
    // Brut pe an
    const brutPeAn =
      netPeAn +
      impozit +
      (CasCompus + CassCompus) * (procentAcoperire[0] / 100) +
      FNUASS;
    const zilePlatite = ZILE_LUCRATOARE_AN - zileConcediu;
    const orePlatite = zilePlatite * oreZi;
    const brutPeOra = brutPeAn / orePlatite;

    return { brutPeAn, brutPeOra, impozit, CasCompus, CassCompus, FNUASS };
  };

  const brut = calculateBrut();

  // Calc net dorit EUR <-> RON
  useEffect(() => {
    if (lastModified === 'ron') {
      setValue('netDoritLunaEur', +(netDoritLunaRon / exchangeRate).toFixed(2));
    }
  }, [netDoritLunaRon, setValue, exchangeRate, lastModified]);

  useEffect(() => {
    if (lastModified === 'eur') {
      setValue('netDoritLunaRon', +(netDoritLunaEur * exchangeRate).toFixed(2));
    }
  }, [netDoritLunaEur, setValue, exchangeRate, lastModified]);

  // Calc venit total
  useEffect(() => {
    if (venitSuplimentar) {
      setVenitTotal(netDoritLunaRon * 12 + venitSuplimentarValue);
    } else {
      setValue('venitSuplimentarValue', 0);
      setVenitTotal(netDoritLunaRon * 12);
    }

    onVenitTotalAnualChanged(venitTotal);
  }, [
    venitSuplimentar,
    setValue,
    netDoritLunaRon,
    venitSuplimentarValue,
    onVenitTotalAnualChanged,
    venitTotal,
  ]);

  // Reset CAS optional
  useEffect(() => {
    if (neplatitorCas || !plataVoluntaraCas) {
      setValue('plataVoluntaraCasValue', 0);
    }
  }, [neplatitorCas, plataVoluntaraCas, setValue]);

  // Reset CASS optional
  useEffect(() => {
    if (!plataVoluntaraCass) {
      setValue('plataVoluntaraCassValue', 0);
    }
  }, [plataVoluntaraCass, setValue]);

  const handleCheckedChange = (
    checked: CheckedState,
    name: string,
    onChange: (event: boolean | ChangeEvent<Element>) => void
  ) => {
    const event = {
      target: {
        name,
        value: checked === 'indeterminate' ? 'indeterminate' : checked,
      },
    } as React.ChangeEvent<HTMLInputElement>;

    onChange(event);
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Suma dorita */}
          <div className="auto-grid">
            <FormField
              control={form.control}
              name="netDoritLunaRon"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>Net dorit pe luna (RON):</FormLabel>
                  <FormControl>
                    <Input
                      type={'number'}
                      {...field}
                      onChange={(e) => {
                        setValue(field.name, +e.target.value);
                        setLastModified('ron');
                      }}
                    />
                  </FormControl>
                  <FormDescription>
                    Suma pe care o doresti sa o castigi pe luna.
                  </FormDescription>
                  {fieldState.error && (
                    <FormMessage>{fieldState.error.message}</FormMessage>
                  )}
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="netDoritLunaEur"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>Net dorit pe luna (EUR):</FormLabel>
                  <FormControl>
                    <Input
                      type={'number'}
                      {...field}
                      onChange={(e) => {
                        setValue(field.name, +e.target.value);
                        setLastModified('eur');
                      }}
                    />
                  </FormControl>
                  <FormDescription>
                    Suma pe care o doresti sa o castigi pe luna.
                  </FormDescription>
                  {fieldState.error && (
                    <FormMessage>{fieldState.error.message}</FormMessage>
                  )}
                </FormItem>
              )}
            />
          </div>
          {/* Ore / zi & Concediu dorit */}
          <div className="auto-grid">
            <FormField
              control={form.control}
              name="oreZi"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>Ore lucrate pe zi:</FormLabel>
                  <FormControl>
                    <Input type={'number'} {...field} />
                  </FormControl>
                  <FormDescription>
                    Orele pe care foresti sa le lucrezi pe zi.
                  </FormDescription>
                  {fieldState.error && (
                    <FormMessage>{fieldState.error.message}</FormMessage>
                  )}
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="zileConcediu"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>Concediu (zile):</FormLabel>
                  <FormControl>
                    <Input type={'number'} {...field} />
                  </FormControl>
                  <FormDescription>
                    Numarul de zile de concediu pe care le doresti.
                  </FormDescription>
                  {fieldState.error && (
                    <FormMessage>{fieldState.error.message}</FormMessage>
                  )}
                </FormItem>
              )}
            />
          </div>
          {/* Venit suplimentar */}
          <div className="auto-grid">
            <FormField
              control={form.control}
              name="venitSuplimentar"
              render={({ field }) => (
                <FormItem className="flex flex-row flex-wrap items-start space-x-3 space-y-0 rounded-md border p-4">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={(checked) =>
                        handleCheckedChange(checked, field.name, field.onChange)
                      }
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Obtin venituri suplimentare pe PFA</FormLabel>
                  </div>
                  {field.value && (
                    <FormDescription className="pt-1">
                      Suma celorlalte venituri
                    </FormDescription>
                  )}
                </FormItem>
              )}
            />
            {venitSuplimentar && (
              <FormField
                control={form.control}
                name="venitSuplimentarValue"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>Valoare venit suplimentar (RON):</FormLabel>
                    <FormControl>
                      <Input type={'number'} {...field} />
                    </FormControl>
                    {fieldState.error && (
                      <FormMessage>{fieldState.error.message}</FormMessage>
                    )}
                  </FormItem>
                )}
              />
            )}
          </div>
          {/* Procent acoperire taxe */}
          {venitSuplimentar && (
            <FormField
              control={form.control}
              name="procentAcoperire"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>
                    In ce procent doresti ca acest tarif sa acopere taxele(CAS &
                    CASS) anuale?
                  </FormLabel>
                  <div className="flex flex-row items-center">
                    <FormControl>
                      <SliderAcoperire
                        name={field.name}
                        value={field.value}
                        onBlur={field.onBlur}
                        ref={field.ref}
                        onValueChange={field.onChange}
                      />
                    </FormControl>
                    <span className="w-1/6 text-center text-gray-800 dark:text-gray-200">
                      {procentAcoperire}%
                    </span>
                  </div>
                  {fieldState.error && (
                    <FormMessage>{fieldState.error.message}</FormMessage>
                  )}
                </FormItem>
              )}
            />
          )}
          {/* CAS */}
          {/* Neplatitor CAS */}
          <FormField
            control={form.control}
            name="neplatitorCas"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={(checked) =>
                      handleCheckedChange(checked, field.name, field.onChange)
                    }
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>
                    Nu platesc CAS (ex. pensionari, avocati, notari, personal
                    clerical, etc.)
                  </FormLabel>
                </div>
              </FormItem>
            )}
          />
          {/* CAS optional daca sub plafon */}
          NUMARUL DE LUNI INTRE 12 si inifinit ? (nu neaparat pe luna 25% din
          venitul ales ?) CAS trebuie sa fie 25% din venitul ales, minim
          categoria
          {venitTotal < salariuMinim * 12 && !neplatitorCas && (
            <div className="auto-grid">
              <FormField
                control={form.control}
                name="plataVoluntaraCas"
                render={({ field }) => (
                  <FormItem className="flex flex-col items-start space-x-3 space-y-0 rounded-md border p-4">
                    <div className="flex flex-row space-x-3">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={(checked) =>
                            handleCheckedChange(
                              checked,
                              field.name,
                              field.onChange
                            )
                          }
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>
                          Doresc sa platesc CAS chiar daca sunt sub plafonul de
                          12 salarii minime
                        </FormLabel>
                      </div>
                    </div>
                    {field.value && (
                      <FormDescription className="pt-1">
                        Selecteaza suma pe care doresti sa o platesti
                      </FormDescription>
                    )}
                  </FormItem>
                )}
              />
              {plataVoluntaraCas && (
                <FormField
                  control={form.control}
                  name="plataVoluntaraCasValue"
                  render={({ field, fieldState }) => (
                    <FormItem>
                      <FormLabel>Suma CAS dorita (RON):</FormLabel>
                      <FormControl>
                        <Input type={'number'} {...field} />
                      </FormControl>
                      {fieldState.error && (
                        <FormMessage>{fieldState.error.message}</FormMessage>
                      )}
                    </FormItem>
                  )}
                />
              )}
            </div>
          )}
          {/* CASS */}
          {/* CASS optional daca sub plafon */}
          NUMARUL DE LUNI INTRE 1 si 12 si nu se poate alege sa platesti mai
          mult
          {venitTotal < salariuMinim * 6 && (
            <div className="auto-grid">
              <FormField
                control={form.control}
                name="plataVoluntaraCass"
                render={({ field }) => (
                  <FormItem className="flex flex-col items-start space-x-3 space-y-0 rounded-md border p-4">
                    <div className="flex flex-row space-x-3">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={(checked) =>
                            handleCheckedChange(
                              checked,
                              field.name,
                              field.onChange
                            )
                          }
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>
                          Doresc sa platesc CASS chiar daca sunt sub plafonul de
                          6 salarii minime
                        </FormLabel>
                      </div>
                    </div>
                    {field.value && (
                      <FormDescription className="pt-1">
                        Selecteaza suma pe care doresti sa o platesti
                      </FormDescription>
                    )}
                  </FormItem>
                )}
              />
              {plataVoluntaraCas && (
                <FormField
                  control={form.control}
                  name="plataVoluntaraCassValue"
                  render={({ field, fieldState }) => (
                    <FormItem>
                      <FormLabel>Suma CASS dorita (RON):</FormLabel>
                      <FormControl>
                        <Input type={'number'} {...field} />
                      </FormControl>
                      {fieldState.error && (
                        <FormMessage>{fieldState.error.message}</FormMessage>
                      )}
                    </FormItem>
                  )}
                />
              )}
            </div>
          )}
          {/* TODO: FNUASS */}
          {/* TODO: Alte cheltuieli care doresc sa fie acoperite */}
        </form>
      </Form>

      {/* Rezultat */}
      <div className="my-4">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Rezultat:
        </h2>
        <p className="mb-4 text-lg">
          Pentru a castiga <strong>{netDoritLunaRon} RON</strong> net pe luna,
          tariful orar este de{' '}
          <strong>{venitTotal > 0 ? brut.brutPeOra.toFixed(2) : 0} RON</strong>{' '}
          sau{' '}
          <strong>
            {venitTotal > 0 ? (brut.brutPeOra / exchangeRate).toFixed(2) : 0}{' '}
            EUR
          </strong>{' '}
          brut pe ora.
        </p>
        {/* Brut anual */}
        <div className="auto-grid my-4">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label className="font-semibold">Venit brut anual (RON): </Label>
            <Input
              readOnly
              value={new Intl.NumberFormat('ro-RO', {
                style: 'currency',
                currency: 'RON',
              }).format(brut.brutPeAn)}
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label className="font-semibold">Venit brut anual (EUR): </Label>
            <Input
              readOnly
              value={new Intl.NumberFormat('ro-RO', {
                style: 'currency',
                currency: 'EUR',
              }).format(brut.brutPeAn / exchangeRate)}
            />
          </div>
        </div>
        {/* CAS & CASS */}
        <div className="auto-grid my-4">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label className="font-semibold">Valoare CAS anual: </Label>
            <Input
              readOnly
              value={new Intl.NumberFormat('ro-RO', {
                style: 'currency',
                currency: 'RON',
              }).format(brut.CasCompus)}
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label className="font-semibold">Valoare CASS anual: </Label>
            <Input
              readOnly
              value={new Intl.NumberFormat('ro-RO', {
                style: 'currency',
                currency: 'RON',
              }).format(brut.CassCompus)}
            />
          </div>
        </div>
        {/* Impozit & FNUASS */}
        <div className="auto-grid my-4">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label className="font-semibold">Valoare Impozit anual: </Label>
            <Input
              readOnly
              value={new Intl.NumberFormat('ro-RO', {
                style: 'currency',
                currency: 'RON',
              }).format(brut.impozit)}
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label className="font-semibold">Valoare FNUASS anual: </Label>
            <Input
              readOnly
              value={new Intl.NumberFormat('ro-RO', {
                style: 'currency',
                currency: 'RON',
              }).format(brut.FNUASS)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FormReal;
