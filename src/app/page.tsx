'use client';

import { getEurRateEcb } from '@/utils/currency';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <p>FA SECTIUNE CU DATE IMPORTANTE SI REMINDER PE EMAIL EVENTUAL ?</p>
      <div className="container mx-auto px-4 py-8">
        <h1 className="mb-4 text-4xl font-bold">Calculator PFA</h1>
        <p className="mb-8 text-lg">
          Calculator de rata orara pentru PFA in sistem real sau norma de venit.
        </p>
        <div className="mx-auto max-w-md">
          <h2 className="mb-4 text-2xl font-semibold">Question:</h2>
          <p className="mb-4 text-lg">What is your favorite color?</p>
          <div className="flex justify-between">
            <Link
              href="/calculator-fee-ora"
              className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
              Option 1
            </Link>
            <button className="rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700">
              Option 2
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
