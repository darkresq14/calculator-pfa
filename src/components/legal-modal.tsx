import { MouseEvent, useState } from 'react';
import { Button } from './ui/button';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const handleOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <>
      <Button variant={'ghost'} onClick={openModal}>
        Informații ANAF
      </Button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-20 backdrop-blur-sm"
          onClick={handleOverlayClick}>
          <div className="modal-size mx-4 overflow-auto  rounded-lg bg-white p-8 dark:bg-gray-800 dark:text-white">
            <h1 className="mb-2 text-xl font-bold">
              DIRECȚIA GENERALĂ REGIONALĂ A FINANȚELOR PUBLICE PLOIEȘTI
            </h1>
            <h1 className="mb-2 text-xl font-bold">
              PREVEDERI LEGISLATIVE APLICABILE ÎNCEPAND CU 01.01.2023 PRIVIND
              CONTRIBUŢIILE SOCIALE OBLIGATORII PENTRU PERSOANELE FIZICE CARE
              DESFĂŞOARĂ ACTIVITĂŢI INDEPENDENTE
            </h1>
            <h2 className="mb-2 text-lg font-semibold">Baza legală:</h2>
            <p className="mb-2">
              -Legea nr. 227/2015 privind Codul fiscal, cu modificările și
              completările ulterioare, Titlul IV ”Impozitul pe venit„ Capitolul
              II”Venituri din activități independente”,Titlul V”Contribuții
              sociale obligatorii„, Capilolul II(art.135, art.137 li.b), art.138
              lit.a), art.148, art.150, art.151), Capilolul III(art.153,
              art.154, art.155, alin.(1) lit.b)-h), art.156, art.170, art.174,
              art.180);
            </p>
            <p className="mb-2">
              -H.G. nr.1/2016 pentru aprobarea Normelor metodologice de aplicare
              a Legii nr. 227/2015 privind Codul fiscal, cu modificările și
              completările ulterioare;
            </p>
            <p className="mb-2">
              -Ordinul președintelui ANAF nr. 2.541 din 19 decembrie 2022 pentru
              aprobarea modelului, conţinutului, modalităţii de depunere şi de
              gestionare a formularului 212 &quot;Declaraţie unică privind
              impozitul pe venit şi contribuţiile sociale datorate de persoanele
              fizice&quot;
            </p>
            <h2 className="mb-2 text-lg font-semibold">
              Definirea veniturilor din activități independente
            </h2>
            <p className="mb-2">
              <span className="text-red-500 dark:text-red-400">
                Veniturile din activități independente
              </span>{' '}
              <strong>cuprind</strong>{' '}
              <span className="text-blue-500 dark:text-blue-400">
                veniturile din activități de producție, comerț, prestări de
                servicii și veniturile din profesii liberale
              </span>
              , realizate în mod individual și/sau într-o formă de asociere,
              inclusiv din activități adiacente.
            </p>
            <p className="mb-2">
              Constituie venituri din profesii liberale veniturile obținute din
              prestarea de servicii cu caracter profesional, potrivit actelor
              normative speciale care reglementează organizarea și exercitarea
              profesiei respective.
            </p>
            <h2 className="mb-2 text-lg font-semibold">
              Contributii sociale obligatorii
            </h2>
            <p className="mb-2">
              <span className="text-blue-500 dark:text-blue-400">
                Persoanele fizice care realizează venituri din
              </span>{' '}
              <span className="text-red-500 dark:text-red-400">
                activități independente
              </span>{' '}
              atât din România cât și din afara României, cu respectarea
              legislatiei europene aplicabile în domeniul securității sociale,
              precum și a acordurilor privind sistemul de securitate socială la
              care România este parte,{' '}
              <span className="text-blue-500 dark:text-blue-400">
                datorează contribuțiile de asigurări sociale și contribuțiile de
                asigurări sociale de sănătate.
              </span>
            </p>
            <h2 className="text-lg font-semibold">
              1.Contribuția de asigurări sociale datorată în anul 2023 de
              persoanele fizice care realizeză venituri din activități
              independente(CAS)
            </h2>
            <p className="mb-2 indent-6">
              Persoanele fizice care realizează venituri din activităţi
              independente realizate din România și din afara României, cu
              respectarea legislației europene aplicabile în domeniul
              securității sociale, precum și a acordurilor privind sistemele de
              securitate socială la care România este parte, pentru care există
              obligația declarării în România, cu excepţia celor din vânzarea
              energiei electrice de către prosumatorii, persoane fizice, altele
              decât cele organizate conform Ordonanţei de urgenţă a Guvernului
              nr. 44/2008, aprobată cu modificări şi completări prin Legea nr.
              182/2016, la furnizorii de energie electrică cu care respectivii
              prosumatori au încheiate contracte de furnizare a energiei
              electrice, dacă centralele electrice de producere a energiei
              electrice din surse regenerabile pe care le deţin au puterea
              electrică instalată de cel mult 27 kW pe loc de consum, datorează,
              după caz, contribuția de asigurări sociale.
            </p>
            <p className="mb-2 indent-6">
              Persoanele fizice care realizează venituri din{' '}
              <span className="text-red-500 dark:text-red-400">
                activităţi independente,
              </span>{' '}
              din una sau mai multe surse şi/sau categorii de venituri,
              datorează contribuţia de asigurări sociale,{' '}
              <span className="text-blue-500 dark:text-blue-400">
                dacă estimează
              </span>{' '}
              pentru anul curent{' '}
              <span className="text-red-500 dark:text-red-400">
                venituri nete
              </span>{' '}
              a căror valoare cumulată este cel puţin egală cu{' '}
              <span className="text-blue-500 dark:text-blue-400">
                12 salarii minime brute pe ţară*,
              </span>{' '}
              în vigoare la termenul de depunere a declaraţiei unice.
            </p>
            <p className="mb-2 indent-6">
              Încadrarea în plafonul anual de cel puţin 12 salarii minime brute
              pe ţară sau de cel puţin 24 de salarii minime brute pe ţară, după
              caz, în vigoare la termenul de depunere a declaraţiei unice, se
              efectuează prin cumularea veniturilor nete şi/sau a normelor
              anuale de venit din activităţi independente, a venitului brut
              realizat în baza contractelor de activitate sportivă, precum şi a
              veniturilor nete din drepturi de proprietate intelectuală, care se
              estimează a se realiza în anul curent.
            </p>
            <p className="mb-4">
              *Începand cu data de{' '}
              <span className="text-red-500 dark:text-red-400">
                1 ianuarie 2023, salariul minim
              </span>{' '}
              brut pe țară garantat în plată este stabilit prin H.G.
              nr.1447/2022,{' '}
              <span className="text-red-500 dark:text-red-400">
                la suma de 3.000 de lei.
              </span>
            </p>
            <p className="mb-2 indent-6">
              Persoanele fizice care nu se încadrează în plafonul de cel puţin
              12 salarii{' '}
              <span className="text-red-500 dark:text-red-400">pot opta</span>{' '}
              pentru plata contribuţiei de asigurări sociale pentru anul curent
              în condiţiile prevăzute pentru persoanele care estimează că
              realizează venituri anuale peste nivelul a 12 salarii minime brute
              pe ţară(SMB).
            </p>
            <p className="mb-2 indent-6">
              <span className="text-red-500 dark:text-red-400">
                Baza anuală de calcul al contribuţiei de asigurări sociale
              </span>
              , în cazul persoanelor care realizează venituri din activități
              independente din una sau mai multe surse și/sau categorii de
              venituri, o reprezintă venitul ales de contribuabil, care nu poate
              fi mai mic decât:
            </p>
            <p className="mb-2">
              a){' '}
              <span className="text-red-500 dark:text-red-400">
                nivelul de 12 salarii minime brute
              </span>{' '}
              pe ţară, în vigoare la termenul de depunere a declaraţiei unice,
              în cazul veniturilor realizate cuprinse între 12 salarii minime
              brute pe ţară inclusiv şi 24 de salarii minime brute pe ţară,
              respectiv{' '}
              <span className="text-red-500 dark:text-red-400">36.000 lei</span>
              (3000 lei*12SMB);
            </p>
            <p className="mb-4">
              b)
              <span className="text-red-500 dark:text-red-400">
                {' '}
                nivelul de 24 de salarii minime brute pe ţară{' '}
              </span>
              , în vigoare la termenul de depunere a declaraţiei unice, în cazul
              veniturilor realizate cel puţin egale cu 24 de salarii minime
              brute pe ţară,respectiv{' '}
              <span className="text-red-500 dark:text-red-400">72.000 lei</span>
              (3000 lei*24 SMB);
            </p>
            <p className="mb-2 text-red-500 dark:text-red-400">
              <strong>EXCEPȚII:</strong>
            </p>
            <p className="mb-4 indent-6">
              Persoanele fizice asigurate în sisteme proprii de asigurări
              sociale ( ex. Avocați, notari, personal clerical, etc), care nu au
              obligația asigurării în sistemul public de pensii potrivit legii,
              precum și persoanele care au calitatea de pensionari nu datorează
              contribuția de asigurări sociale pentru veniturile din activități
              independente.
            </p>
            <p className="mb-2">
              <span className="text-red-500 dark:text-red-400">
                Contribuția de asigurări sociale
              </span>{' '}
              se calculează de către contribuabili prin aplicarea{' '}
              <span className="text-red-500 dark:text-red-400">cotei</span> de
              contribuție de{' '}
              <span className="text-red-500 dark:text-red-400">
                25% asupra bazei anuale de calcul.
              </span>
            </p>
            <p className="mb-2">
              Contribuția datorată se evidențiază în{' '}
              <strong>
                Declarația unică privind impozitul pe venit și contribuțiile
                datorate de persoanele fizice
              </strong>
              , Formular 212.
            </p>
            <p className="mb-4">
              Declarația unică privind impozitul pe venit și contribuțiile
              sociale datorate de persoanele fizice constituie titlu de creanță
              fiscală în sensul Legii nr. 207/2015, cu modificările și
              completările ulterioare.
            </p>
            <p className="mb-4 indent-6">
              Persoanele fizice care realizează venituri din activități
              independente pentru care datorează contribuția și care în cursul
              anului fiscal se încadrează în categoria persoanelor exceptate de
              la plata contribuției, depun la organul fiscal competent
              declarația unică privind impozitul pe venit și contribuții sociale
              datorate de persoanele fizice, în termen de 30 de zile de la data
              producerii evenimentului, își recalculează contribuția datorată și
              declarată pentru anul în curs și datorează, după caz, contribuția
              corespunzător plafonului recalculat.( ex: de la data de 01
              septembrie o persoana fizica care desfasoara activitati
              independente devine, în baza unei decizii de pensionare emisă de
              Casa de pensii, pensionar ).
            </p>
            <p className="mb-2 indent-6">
              Persoanele fizice al căror venit estimat se modifică în cursul
              anului în care se realizează veniturile și nu se mai încadrează în
              plafonul de 12 salarii minime brute pe ţară își pot modifica
              contribuția datorată prin rectificarea venitului estimat, prin
              depunerea declarației prevazuta la art.148 alin.(3), oricând până
              la împlinirea termenului legal de depunere a acesteia prevazuta la
              art.122 .
            </p>
            <p className="mb-2 indent-6">
              În situația în care persoanele fizice au estimat pentru anul
              curent un venit net anual cumulat din veniturile din activități
              independente din una sau mai multe surse şi/sau categorii de
              venituri, mai mic decât nivelul a 12 salarii minime brute pe ţară,
              iar venitul net anual cumulat realizat este cel puţin egal cu
              nivelul a 12 salarii minime brute pe ţară, în vigoare la data
              depunerii declaraţiei acestea datorează contribuţia de asigurări
              sociale şi au obligaţia depunerii Declaraţiei unice până la data
              de 25 mai inclusiv a anului următor celui de realizare a
              veniturilor în vederea definitivării contribuţiei de asigurări
              sociale.{' '}
            </p>
            <p className="mb-2 indent-6">
              În declaraţie se completează venitul ales, care trebuie să fie cel
              puţin egal cu{' '}
              <span className="text-red-500 dark:text-red-400">
                nivelul a 12 sau 24
              </span>{' '}
              de salarii minime brute pe ţară, după caz.
            </p>
            <p className="intent-6 mb-4">
              În situația în care persoanele fizice au estimat pentru anul
              curent un venit net anual cumulat din veniturile din activități
              independente din una sau mai multe surse și/sau categorii de
              venituri, cel puțin egal cu nivelul a 12 salarii minime brute pe
              țară, iar venitul net anual cumulat realizat este sub nivelul a 12
              salarii minime brute pe țară, nu datorează contribuția de
              asigurări sociale, cu excepția celor care au optat pentru plata
              contribuției. În acest caz{' '}
              <span className="text-red-500 dark:text-red-400">
                contribuția plătită nu se restituie
              </span>
              , aceasta fiind valorificată la stabilirea elementelor necesare
              determinării pensiei, potrivit legii. În situaţia în care venitul
              realizat se încadrează în acelaşi plafon cu venitul estimat,
              contribuabilii nu au obligaţia depunerii declaraţiei unice privind
              impozitul pe venit şi contribuţiile sociale datorate de persoanele
              fizice, prevăzută la art. 122(declararea venitului realizat), în
              vederea stabilirii contribuției de asigurări sociale.
            </p>
            <p className="mb-2 indent-6">
              Așadar,{' '}
              <span className="text-blue-500 dark:text-blue-400">
                pentru veniturile realizate în anul 2023
              </span>{' '}
              de persoanele fizice din{' '}
              <span className="text-red-500 dark:text-red-400">
                activități independente
              </span>{' '}
              din una sau mai multe surse şi/sau categorii de venituri, în
              declarația unică se va evidenția pentru un venit estimativ ales,
              care trebuie să fie cel puțin egal cu nivelul a 12 sau 24 de
              salarii minime brute pe țară, după caz, CAS în suma de:
            </p>
            <p className="mb-2">
              A.{' '}
              <span className="text-red-500 dark:text-red-400">9.000 lei</span>{' '}
              (3000 lei*12SMB *25%)pentru un venit curpins între 36.000lei și
              71.999lei,{' '}
            </p>
            <p className="mb-2">Ori</p>
            <p className="mb-2">
              B.{' '}
              <span className="text-red-500 dark:text-red-400">18.000lei</span>
              (3000lei*24SMB*25%)pentru un venit ales mai mare sau egal cu
              72.000lei,
            </p>
            <p className="mb-2 indent-6">
              <span className="text-red-500 dark:text-red-400">
                Termenul de depunere
              </span>{' '}
              al Declarației unice pentru stabilirea CAS estimată pentru anul
              2023 este{' '}
              <span className="text-red-500 dark:text-red-400">
                25 mai 2023.
              </span>
            </p>
            <p className="mb-4 indent-6">
              <span className="text-red-500 dark:text-red-400">
                Termenul de plată
              </span>{' '}
              al contribuției de asigurări sociale evidențiată în declarația
              unică pentru anul 2023 este{' '}
              <span className="text-red-500 dark:text-red-400">
                25 mai 2024.
              </span>
            </p>

            <h2 className="mb-2 text-lg font-semibold">
              2.Contribuția de asigurări sociale de sănătate datorată în anul
              2023 de persoanele fizice care realizeză venituri din activități
              independente(CASS)
            </h2>
            <p className="mb-2 indent-6">
              Persoanele fizice care realizează venituri din activităţi
              independente din România și din afara României datorează, după
              caz, contribuția de asigurări sociale de sănătate pentru
              veniturile din România și din afara României, cu respectarea
              legislației europene aplicabile în domeniul securității sociale,
              precum și a acordurilor privind sistemele de securitate socială la
              care România este parte, pentru care există obligația declarării
              în România, dacă estimează pentru anul curent venituri a căror
              valoare cumulată este cel puţin egală cu
              <strong> 6 salarii minime brute pe ţară</strong>, în vigoare la
              termenul de depunere a declaraţiei unice.
            </p>
            <p className="mb-2 indent-6">
              Baza anuală de calcul al contribuţiei de asigurări sociale de
              sănătate în cazul persoanelor care realizează venituri din cele
              prevăzute la art. 155 alin. (1) lit. b) - h) o reprezintă:
            </p>
            <ul className="mb-2 list-inside list-none">
              <li className="mb-2 list-item">
                a)
                <span className="text-red-500 dark:text-red-400">
                  {' '}
                  nivelul a 6 salarii minime{' '}
                </span>
                brute pe ţară, în vigoare la termenul de depunere a declaraţiei
                prevăzute la art. 120, în cazul veniturilor realizate cuprinse
                între 6 salarii minime brute pe ţară inclusiv şi 12 salarii
                minime brute pe ţară, respectiv{' '}
                <span className="text-red-500 dark:text-red-400">
                  {' '}
                  18.000 lei{' '}
                </span>
                (3000 lei*6 SMB);
              </li>
              <li className="mb-2 list-item">
                b)
                <span className="text-red-500 dark:text-red-400">
                  {' '}
                  nivelul de 12 salarii minime{' '}
                </span>
                brute pe ţară, în vigoare la termenul de depunere a declaraţiei
                prevăzute la art. 120, în cazul veniturilor realizate cuprinse
                între 12 salarii minime brute pe ţară inclusiv şi 24 de salarii
                minime brute pe ţară,respectiv{' '}
                <span className="text-red-500 dark:text-red-400">
                  {' '}
                  36.000 lei{' '}
                </span>
                (3000 lei*12 SMB);
              </li>
              <li className="mb-2 list-item">
                c)
                <span className="text-red-500 dark:text-red-400">
                  {' '}
                  nivelul de 24 de salarii minime{' '}
                </span>
                brute pe ţară, în vigoare la termenul de depunere a declaraţiei
                prevăzute la art. 120, în cazul veniturilor realizate cel puţin
                egale cu 24 de salarii minime brute pe ţară,respectiv{' '}
                <span className="text-red-500 dark:text-red-400">
                  {' '}
                  72.000 lei{' '}
                </span>
                (3000 lei*24 SMB).
              </li>
            </ul>
            <p className="mb-2 indent-6">
              Încadrarea în plafonul anual de cel puţin
              <span className="text-red-500 dark:text-red-400">
                {' '}
                6, 12 sau 24 de salarii minime brute pe ţară,{' '}
              </span>
              după caz, în vigoare la termenul de depunere a declaraţiei unice
              se efectuează prin <strong>cumularea veniturilor</strong>{' '}
              prevăzute la art. 155 alin. (1) lit. b) - h), după cum urmează:
            </p>
            <ul className="mb-2 list-inside list-none">
              <li className="mb-2 list-item">
                a) venitul net/brut sau norma de venit din activităţi
                independente,
              </li>
              <li className="mb-2 list-item">
                b) venitul net din drepturi de proprietate intelectuală,
                stabilit după acordarea cotei de cheltuieli forfetare, precum şi
                venitul net din drepturi de proprietate intelectuală determinat
                în sistem real pe baza datelor din contabilitate;
              </li>
              <li className="mb-2 list-item">
                c) venitul net distribuit din asocieri cu persoane juridice,
                contribuabili potrivit prevederilor titlului II sau titlului
                III, determinat potrivit prevederilor art. 125 alin. (8) şi (9);
              </li>
              <li className="mb-2 list-item">
                d) venitul brut, venitul net sau norma de venit, după caz,
                pentru veniturile din cedarea folosinţei bunurilor;
              </li>
              <li className="mb-2 list-item">
                e) venitul şi/sau câştigul net din investiţii . În cazul
                veniturilor din dobânzi se iau în calcul sumele încasate, iar în
                cazul veniturilor din dividende se iau în calcul dividendele
                încasate, distribuite începând cu anul 2018;
              </li>
              <li className="mb-2 list-item">
                f) venitul net sau norma de venit, după caz, pentru veniturile
                din activităţi agricole, silvicultură şi piscicultură,
              </li>
              <li className="mb-2 list-item">
                g) venitul brut şi/sau venitul impozabil din alte surse,
                stabilit potrivit art. 114 - 116.
              </li>
            </ul>
            <p className="mb-2 indent-6">
              Persoanele fizice care estimeză pentru anul curent venituri anuale
              cumulate sub nivelul a 6 salarii minime brute pe ţară, în vigoare
              la termenul de depunere a Declaraţiei unice, nu datorează
              contribuția, <strong>dar pot opta</strong> pentru plata acesteia.{' '}
            </p>
            <p className="mb-2 indent-6">
              <span className="text-red-500 dark:text-red-400">
                {' '}
                Contribuția de asigurări soaciale{' '}
              </span>
              se calculează de către contribuabili prin aplicarea
              <span className="text-red-500 dark:text-red-400"> cotei </span>
              de contribuție de{' '}
              <span className="text-red-500 dark:text-red-400">
                {' '}
                10% asupra bazei anuale de calcul.{' '}
              </span>
            </p>
            <p className="mb-2 indent-6">
              Contribuția datorată se evidențiază în{' '}
              <strong>
                Declarația unică privind impozitul pe venit și contribuțiile
                datorate de persoanele fizice
              </strong>
            </p>
            <p className="mb-2 indent-6">
              În situaţia în care persoanele fizice au estimat pentru anul
              curent un venit net anual cumulat din una sau mai multe surse
              şi/sau categorii de venituri mai mic decât nivelul a 6 salarii
              minime brute pe ţară, iar venitul net anual cumulat realizat este
              cel puţin egal cu nivelul a
              <span className="text-red-500 dark:text-red-400">
                {' '}
                6 salarii minime pe ţară{' '}
              </span>
              , în vigoare în anul pentru care se datorează contribuţia, acestea
              datorează contribuţia de asigurări sociale de sănătate la nivelul
              a 6 salarii minime brute pe ţară şi au obligaţia depunerii
              declaraţiei unice, până la data de 25 mai inclusiv a anului
              următor celui de realizare a veniturilor, în vederea definitivării
              contribuţiei de asigurări sociale de sănătate.
            </p>
            <p className="mb-2 indent-6">
              În cazul în care persoanele fizice realizează un venit net anual
              cumulat sub nivelul a 6 salarii minime brute pe ţară, iar în anul
              fiscal precedent nu au avut calitatea de salariat şi nu s-au
              încadrat în categoriile de persoane exceptate de la plata
              contribuţiei de asigurări sociale de sănătate, acestea datorează
              contribuţia de asigurări sociale de sănătate la o bază de calcul
              echivalentă cu 6 salarii minime brute pe ţară şi depun declaraţia
              unică, până la data de 25 mai inclusiv a anului următor celui de
              realizare a veniturilor, în vederea definitivării contribuţiei de
              asigurări sociale de sănătate.
            </p>
            <p className="mb-2 indent-6">
              Așadar,{' '}
              <span className="text-blue-500 dark:text-blue-400">
                {' '}
                pentru veniturile realizate în anul 2023{' '}
              </span>
              de persoanele fizice{' '}
              <span className="text-red-500 dark:text-red-400">
                {' '}
                din activități independente{' '}
              </span>
              prin cumularea veniturilor prevăzute la art. 155 alin. (1) lit. b)
              – h) în declarația unică se va evidenția în functie de plafoanele
              atinse,după caz,{' '}
              <span className="text-red-500 dark:text-red-400"> CASS în </span>
              suma de:
            </p>
            <ul className="mb-4 list-inside list-none">
              <li className="mb-2 list-item">
                A.{' '}
                <span className="text-red-500 dark:text-red-400">
                  {' '}
                  1.800 lei{' '}
                </span>
                (3000 lei*6 SMB *10%)pentru un venit cuprins între 18.000 și
                35.999lei, sau
              </li>
              <li className="mb-2 list-item">
                B.{' '}
                <span className="text-red-500 dark:text-red-400">
                  {' '}
                  3.600lei{' '}
                </span>
                (3000lei*24 SMB*10%)pentru un venit cuprins între 36.000 lei și
                71.999 lei, sau
              </li>
              <li className="mb-2 list-item">
                C.
                <span className="text-red-500 dark:text-red-400">
                  {' '}
                  7.200lei{' '}
                </span>
                (3000lei*24 SMB*10 %)pentru un venit mai mare de 72.000lei,
              </li>
            </ul>
            <p className="mb-4 indent-6">
              <span className="text-red-500 dark:text-red-400">
                {' '}
                Termenul de depunere{' '}
              </span>
              al declarației unice pentru stabilirea CASS estimată pentru anul
              2023 este{' '}
              <span className="text-red-500 dark:text-red-400">
                {' '}
                25 mai 2023.{' '}
              </span>
            </p>
            <p className="mb-4 indent-6">
              <span className="text-red-500 dark:text-red-400">
                Termenul de plată{' '}
              </span>
              al contribuției de asigurări sociale sănătate evidențiată în
              Declarația unică pentru anul 2023 este{' '}
              <span className="text-red-500 dark:text-red-400">
                25 mai 2024.{' '}
              </span>
            </p>
            <h2 className="mb-2 text-lg">UNDE SE EVIDENȚIAZĂ CAS ȘI CASS</h2>
            <p className="mb-2 indent-6">
              Contribuția de asigurări sociale și contribuția de asigurări
              sociale de sănătate estimată pentru anul 2023 se evidențiază în{' '}
              <strong>
                Declarația unică privind impozitul pe venit și contribuțiile
                datorate de persoanele fizice
              </strong>
              , Formular 212, în
            </p>
            <p className="mb-2">
              <span className="text-red-500 dark:text-red-400">
                Capitolul II{' '}
              </span>
              &quot;Date privind impozitul pe veniturile estimate/norma de venit
              a se realiza în România şi contribuţiile sociale datorate pentru
              anul 2023&quot;
            </p>
            <p className="mb-2">
              <span className="text-red-500 dark:text-red-400">
                SECȚIUNEA II.2{' '}
              </span>
              , Date privind contribuția de asigurări sociale și contribuția de
              asigurări sociale de sănătate estimate,
            </p>
            <p className="mb-2">
              <span className="text-red-500 dark:text-red-400">
                SUBSECȚIUNEA II.2.1{' '}
              </span>
              Date privind contribuția de asigurări sociale(CAS) estimată.{' '}
            </p>
            <p className="mb-4">
              <span className="text-red-500 dark:text-red-400">
                SUBSECȚIUNEA II.2.2{' '}
              </span>
              Date privind contribuția de asigurări sociale de sănătate(CASS)
              estimată
            </p>
            <p className="mb-2">
              Declaraţia va putea fi descărcată de pe site-ul www.anaf.ro,
              accesând Secţiunea Servicii online/ Descărcare declaraţii
              electronice/DescărcareDeclarții/Declaraţia unică (212)/ soft A,
              sau accesând link-ul:
            </p>
            <a
              href="https://static.anaf.ro/static/10/Anaf/Declaratii_R/declaratie_unica.html"
              className="mb-4 block text-green-500 dark:text-green-400">
              https://static.anaf.ro/static/10/Anaf/Declaratii_R/declaratie_unica.html
            </a>
            <h2 className="mb-2 text-lg">
              CARE ESTE TERMENUL DE DEPUNERE AL DECLARAȚIEI UNICE
            </h2>
            <p className="mb-2 font-bold">Declaraţia unică se depune:</p>
            <p className="mb-2">
              - în termen de 30 de zile de la data începerii activității în
              cazul contribuabililor care încep o activitate în cursul anului
              fiscal{' '}
            </p>
            <p className="mb-2">
              - până la data de 25 mai inclusiv a anului următor celui de
              realizare a veniturilor în vederea declarării venitului realizat
              şi stabilirii/definitivării impozitului anual pe venit şi a
              contribuţiilor sociale;
            </p>
            <p className="mb-2">
              - până la data de 25 mai inclusiv a fiecărui an, pentru stabilirea
              şi declararea impozitului pe venitul estimat/norma de venit a se
              realiza în fiecare an fiscal, precum şi pentru declararea şi
              stabilirea contribuţiilor sociale datorate;
            </p>
            <p className="mb-4">
              - contribuabilii care realizează venituri din activități
              independente pentru care impozitul se determină în sistem real şi
              care în cursul anului fiscal îşi încetează activitatea, precum şi
              cei care intră în suspendare temporară a activității, potrivit
              legislaţiei în materie, au obligaţia de a depune la organul fiscal
              competent declaraţia, în termen de 30 de zile de la data
              producerii evenimentului.
            </p>
            <p className="mb-2 indent-6">
              -Contribuabilii care în cursul anului fiscal încep să desfășoare o
              activitate independentă iar venitul net, anual, cumulat, din una
              sau mai multe surse de venituri, estimat a se realiza în anul în
              curs este curpins în plafoanele corespunzatoare nivelului minim al
              CAS sau CASS, sunt obligați să depună declarația unică în termen
              de 30 de zile de la data producerii evenimentului și să declare
              venitul ales pentru care datorează contribuția.
            </p>
            <p className="mb-4 indent-6">
              -Contribuabilii care încep o activitate în luna decembrie depun
              Declarația unică privind impozitul pe venit și contribuțiile
              sociale datorate de persoanele fizice până la data de 25 mai,
              inclusiv a anului următor celui de realizare a venitului.
            </p>
            <p className="mb-2 font-semibold">Cum se depune Declarația unică</p>
            <p className="mb-2 indent-6">
              Persoanele fizice care desfășoară activități independente depun
              declaraţia, prin mijloace electronice de transmitere la distanţă,
              în conformitate cu prevederile legale în vigoare, respectiv:
            </p>
            <p className="mb-2">
              - prin intermediul serviciului &quot;Spaţiul privat virtual&quot;,
              disponibil pe portalul www.anaf.ro;
            </p>
            <p className="mb-4">
              - prin intermediul serviciului &quot;Depunere declaraţii&quot;,
              disponibil pe portalul www.e-guvernare.ro pe baza certificatului
              digital calificat;
            </p>
            <p className="mb-2 indent-6">
              Informaţii suplimentare privind înregistrarea în Spaţiul Privat
              Virtual se găsesc la următorul link{' '}
              <a href="https://www.anaf.ro/anaf/internet/ANAF/servicii_online/inreg_inrol_pf_pj_spv">
                https://www.anaf.ro/anaf/internet/ANAF/servicii_online/inreg_inrol_pf_pj_spv
              </a>
            </p>
            <p className="mb-2 indent-6">
              Contribuabilii care nu deţin un calculator personal sau nu dispun
              de o conexiune la Internet, pot utiliza calculatoarele destinate
              auto-servirii din cadrul unităţilor fiscale, cu ajutorul cărora
              pot efectua următoarele operaţiuni:
            </p>
            <p className="mb-2">
              - înregistrarea în cadrul serviciului Spaţiul Privat Virtual;
            </p>
            <p className="mb-2">- completarea Declaraţiei Unice;</p>
            <p className="mb-2">- depunerea Declaraţiei Unice.</p>
            <p className="mb-2 indent-6">
              Lista sediilor unităţilor fiscale în care sunt puse la dispoziţia
              contribuabililor calculatoare destinate auto-servirii se regăseşte
              pe portalul www.anaf.ro, secţiunea Asistenţă contribuabili –
              Servicii oferite contribuabililor.
            </p>
            <p className="mb-4 indent-6">
              De asemenea, contribuabilii pot solicita sprijin şi funcţionarilor
              din cadrul organelor fiscale locale, în cadrul cărora există
              personal special instruit pentru a acorda îndrumare şi asistenţă
              pentru depunerea Declaraţiei unice.
            </p>
            <h2 className="mb-2 text-lg font-bold">
              Surse de informare și materiale informative puse la dispoziția
              contribuabililor de către A.N.A.F.
            </h2>
            <p className="mb-2 indent-6">
              -pentru informare{' '}
              <strong>
                site-ul <a href="http://www.anaf.ro">www.anaf.ro</a>
              </strong>{' '}
              secțiunea Asistență Contribuabili
            </p>
            <p className="mb-2 indent-6">
              -pentru a beneficia de îndrumare și asistență cu caracter general
              în domeniul fiscal, contribuabilii pot apela{' '}
              <strong>Call-center-ul A.N.A.F.</strong> la numărul de telefon :
              <strong>031.403.91.60</strong>
            </p>
            <p className="mb-2 indent-6">
              -pentru a solicita informații personalizate privind situația
              fiscală, contribuabilii pot utiliza serviciul{' '}
              <strong>Spațiul Privat Virtual</strong>
            </p>
            <p className="mb-4 indent-6">
              -pentru înregistrarea în <strong>Spațiul Privat Virtual</strong>
              contribuabilii pot accesa{' '}
              <strong>
                site-ul <a href="http://www.anaf.ro">www.anaf.ro</a>
              </strong>
              secțiunea{' '}
              <strong>
                Servicii Online/Înregistrare/Înrolare persoane fizice și
                juridice
              </strong>
            </p>
            <p className="mb-4 indent-6">
              - Ghiduri fiscale pentru contribuabilii persoane fizice și
              juridice se regăsesc accesând{' '}
              <strong>
                site-ul <a href="http://www.anaf.ro">www.anaf.ro</a>
              </strong>{' '}
              secțiunea Asistență Contribuabili / Servicii oferite
              contribuabililor / Ghiduri curente și alte materiale informative
            </p>
            <p className="mb-4 indent-6">
              Totodată, facem precizarea că la sediile unităților fiscale sunt
              puse la dispoziția contribuabililor persoane fizice{' '}
              <strong>calculatoare destinate auto-servirii</strong>, pe care
              aceștia le pot utiliza în vederea înregistrării în{' '}
              <strong>Spațiul Privat Virtual</strong> și depunerii{' '}
              <strong>Declarației unice</strong> sub îndrumarea directă a
              funcționarilor A.N.A.F.
            </p>

            <button
              className="float-right mt-8 rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
              onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
