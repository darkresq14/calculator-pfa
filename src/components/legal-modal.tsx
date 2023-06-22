import { MouseEvent, useState } from 'react';

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
      <button
        className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        onClick={openModal}>
        Open Modal
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm"
          onClick={handleOverlayClick}>
          <div className="modal-size mx-4 overflow-auto  rounded-lg bg-white p-8 dark:bg-gray-800 dark:text-white">
            <h2 className="mb-2 text-lg">
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
              sociale de sănătate estimată pentru anul 2023 se evidențiază în
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
