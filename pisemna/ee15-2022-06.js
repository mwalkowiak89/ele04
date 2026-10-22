/* Część pisemna – arkusz EE.15-SG-22.06 (czerwiec 2022). Dane: pytania CKE + opracowanie rozwiązań. */
(window.ELE04_BANK = window.ELE04_BANK || {})["ee15-2022-06"] = {
 "id": "ee15-2022-06",
 "kwalifikacja": "EE.15",
 "kod": "EE.15-SG-22.06",
 "sesja": "czerwiec 2022",
 "pytania": [
  {
   "n": 1,
   "tytul": "Zawory serwisowe jednostki zewnętrznej",
   "dzial": "Elementy i automatyka obiegu",
   "tresc": "Na ilustracji przedstawiono zawory",
   "img": "img/ee15-2022-06/z01.png",
   "img_alt": "Fotografia dwóch mosiężnych zaworów serwisowych z kapturkami na obudowie jednostki zewnętrznej klimatyzatora split.",
   "odp": {
    "A": "bezpieczeństwa: gazowy i cieczowy.",
    "B": "serwisowe: gazowy i cieczowy.",
    "C": "termostatyczne rozprężne.",
    "D": "automatyczne rozprężne."
   },
   "klucz": "B",
   "rozw": {
    "lead": "Na ilustracji widać dwa mosiężne zawory odcinające z kapturkami na przyłączach jednostki zewnętrznej klimatyzatora split: grubszy na przewodzie gazowym (ssawnym) i cieńszy na cieczowym. Są to zawory serwisowe – po zamknięciu odcinają jednostkę od instalacji, a przez króciec serwisowy podłącza się manometry, pompę próżniową i butlę z czynnikiem.",
    "kroki": [],
    "bledne": {
     "A": "Zawór bezpieczeństwa jest sprężynowym zaworem upustowym montowanym na zbiorniku lub rurociągu; nie ma kapturków ani trzpieni do otwierania kluczem imbusowym.",
     "C": "Termostatyczny zawór rozprężny ma głowicę membranową z kapilarą i czujnikiem na rurze ssawnej, a nie dwa kapturki na przyłączach rur.",
     "D": "Automatyczny zawór rozprężny ma membranę i śrubę nastawy ciśnienia parowania; nie występuje jako para zaworów na przyłączach jednostki."
    },
    "pulapka": "Zawory w jednostce zewnętrznej split pracują jako para: gazowy i cieczowy. Przed uruchomieniem układu trzeba je otworzyć (trzpień po zdjęciu kapturka), a kapturki po zakończeniu prac dokręcić, bo uszczelniają trzpień."
   }
  },
  {
   "n": 2,
   "tytul": "Wirnik sprężarki wielołopatkowej",
   "dzial": "Elementy i automatyka obiegu",
   "tresc": "Na rysunku przedstawiono wirnik sprężarki",
   "img": "img/ee15-2022-06/z02.png",
   "img_alt": "Fotografia walcowego wirnika z wzdłużnymi szczelinami i łopatkami widocznymi na tarczy czołowej.",
   "odp": {
    "A": "spiralnej.",
    "B": "śrubowej.",
    "C": "wielołopatkowej.",
    "D": "wielotłoczkowej."
   },
   "klucz": "C",
   "rozw": {
    "lead": "Pokazany wirnik to walec z wzdłużnymi szczelinami, w których przesuwają się łopatki dociskane do ścianki cylindra – to cecha sprężarki rotacyjnej wielołopatkowej (łopatkowej). Objętość między łopatkami zmniejsza się podczas obrotu, co spręża parę czynnika.",
    "kroki": [],
    "bledne": {
     "A": "Sprężarka spiralna ma dwie spiralne ewolwenty (jedna nieruchoma, druga krąży po orbicie), a nie walcowy wirnik z łopatkami.",
     "B": "Sprężarka śrubowa ma dwa współpracujące wirniki ze śrubowymi zębami i wybraniami, bez ruchomych łopatek.",
     "D": "Sprężarka wielotłoczkowa ma wał korbowy i tłoki w cylindrach, a nie wirnik z łopatkami w szczelinach."
    },
    "pulapka": "Nie mylić wirnika łopatkowego (szczeliny z wysuwanymi łopatkami) ze śrubowym (skośne zęby): w zadaniach CKE rozróżnia się je właśnie po wyglądzie wirnika."
   }
  },
  {
   "n": 3,
   "tytul": "Bilans cieplny skraplacza chłodzonego wodą",
   "dzial": "Obliczenia",
   "tresc": "Ile wynosi moc <span class=\"term\" data-key=\"skraplacz\">skraplacza</span>, jeżeli natężenie przepływu wody przez skraplacz agregatu wody lodowej jest równe 1 l/s (równe 1 kg/s), temperatura wody dopływającej do skraplacza wynosi 25 °C, temperatura wody odpływającej ze skraplacza 35 °C, a ciepło właściwe wody wynosi 4,19 kJ/(kg·K)?",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "41,9 kW",
    "B": "58,7 kW",
    "C": "419 kW",
    "D": "587 kW"
   },
   "klucz": "A",
   "rozw": {
    "lead": "Moc skraplacza to strumień ciepła oddany wodzie chłodzącej. Z bilansu cieplnego po stronie wody (I zasada termodynamiki dla przepływu ustalonego, bez zmiany fazy wody) \\( \\dot Q_k = \\dot m_w \\cdot c_w \\cdot \\Delta t \\).",
    "kroki": [
     [
      "Dane",
      "\\( \\dot m_w = 1\\ \\mathrm{kg/s},\\ t_{w1}=25\\ ^\\circ\\mathrm{C},\\ t_{w2}=35\\ ^\\circ\\mathrm{C},\\ c_w = 4{,}19\\ \\mathrm{kJ/(kg\\cdot K)} \\)"
     ],
     [
      "Szukane",
      "\\( \\dot Q_k \\) [kW]"
     ],
     [
      "Wzór",
      "\\[ \\dot Q_k = \\dot m_w \\cdot c_w \\cdot (t_{w2}-t_{w1}) \\]"
     ],
     [
      "Podstawienie",
      "\\( \\dot Q_k = 1\\ \\tfrac{\\mathrm{kg}}{\\mathrm{s}} \\cdot 4{,}19\\ \\tfrac{\\mathrm{kJ}}{\\mathrm{kg\\cdot K}} \\cdot (35-25)\\ \\mathrm{K} = 41{,}9\\ \\tfrac{\\mathrm{kJ}}{\\mathrm{s}} \\)"
     ],
     [
      "Wynik",
      "\\( \\dot Q_k = 41{,}9\\ \\mathrm{kW} \\) (bo 1 kJ/s = 1 kW)"
     ]
    ],
    "bledne": {
     "B": "58,7 kW – wynik przy pomyłce różnicy temperatur: 4,19 · 14 K ≈ 58,7 kW.",
     "C": "419 kW – błąd rzędu wielkości: pomnożenie przez Δt = 100 K zamiast 10 K.",
     "D": "587 kW – to 4,19 · 140; wynik o rząd wielkości za duży, typowy błąd przecinka."
    },
    "pulapka": "Różnica temperatur w kelwinach jest liczbowo równa różnicy w °C – nie przeliczaj temperatur na K przed odjęciem. W rzeczywistym obiegu moc skraplacza \\( \\dot Q_k = \\dot Q_0 + P_{spr} \\) jest <b>większa</b> od mocy chłodniczej \\( \\dot Q_0 \\) o pracę sprężarki."
   }
  },
  {
   "n": 4,
   "tytul": "Symbol TZR na schemacie agregatu",
   "dzial": "Materiały i rysunek techniczny",
   "tresc": "Element oznaczony literą A na zamieszczonym schemacie dołączanym do dokumentacji technicznej agregatu chłodniczego to",
   "img": "img/ee15-2022-06/z04.png",
   "img_alt": "Schemat dwuobiegowego agregatu chłodniczego ze sprężarkami, wymiennikami i zaworami; litera A wskazuje jeden z zaworów w prawej części schematu.",
   "odp": {
    "A": "zawór wody.",
    "B": "filtr osuszacz.",
    "C": "kurek trójdrogowy z przelotem.",
    "D": "termostatyczny zawór rozprężny."
   },
   "klucz": "D",
   "rozw": {
    "lead": "Litera A wskazuje na schemacie symbol zaworu rozprężnego sterowanego głowicą membranową z czujnikiem temperatury (cienka linia sterująca) – czyli termostatyczny zawór rozprężny. Na schematach chłodniczych taki zawór stoi na przewodzie cieczowym przed parownikiem i dławi ciecz do ciśnienia parowania.",
    "kroki": [],
    "bledne": {
     "A": "Zawór wody ma na schemacie symbol zaworu na przewodzie wody, bez układu czujnika temperatury związanego z parownikiem.",
     "B": "Filtr osuszacz oznacza się romb lub prostokątem z przekątną na przewodzie cieczowym, a nie symbolem zaworu z głowicą.",
     "C": "Kurek trójdrogowy rysuje się z trzema przyłączami; wskazany element ma dwa przyłącza przelotowe i głowicę sterującą."
    },
    "pulapka": "Przy odczycie schematu szukaj charakterystycznych znaków: czujnik z linią sterującą przy zaworze to znak TZR, a romb z przekątną to filtr osuszacz."
   }
  },
  {
   "n": 5,
   "tytul": "Kosztorys montażu klimatyzatora split",
   "dzial": "Kosztorys",
   "tresc": "Na podstawie zamieszczonego cennika oblicz łączny koszt usługi sprzedaży, montażu i uruchomienia agregatu chłodniczego typu split, jeżeli wykonano 8 m rurociągu łączącego jednostki, 2 m instalacji odprowadzania skroplin i 12 m instalacji elektrycznej. Uwzględnij 23% podatek VAT.",
   "img": "img/ee15-2022-06/z05.png",
   "img_alt": "Cennik: agregat chłodniczy 2100 zł/szt., montaż jednostki zewnętrznej 90, wewnętrznej 90, rurociągi 80 zł/m.b., skropliny 30 zł/m.b., instalacja elektryczna 40 zł/m.b., uruchomienie 100 zł/szt.",
   "odp": {
    "A": "4378,80 zł",
    "B": "3560,00 zł",
    "C": "1795,80 zł",
    "D": "1460,00 zł"
   },
   "klucz": "A",
   "rozw": {
    "lead": "Kosztorys sumuje pozycje jednostkowe (szt.) i pozycje metrażowe (m.b. × ilość), a dopiero na końcu doliczamy VAT.",
    "kroki": [
     [
      "Netto",
      "\\( K_n = 2100 + 90 + 90 + 8\\cdot 80 + 2\\cdot 30 + 12\\cdot 40 + 100 \\)"
     ],
     [
      "Obliczenie",
      "\\( K_n = 2100 + 90 + 90 + 640 + 60 + 480 + 100 = 3560{,}00\\ \\mathrm{zł} \\)"
     ],
     [
      "Brutto",
      "\\[ K_b = K_n \\cdot (1 + 0{,}23) = 3560 \\cdot 1{,}23 = 4378{,}80\\ \\mathrm{zł} \\]"
     ]
    ],
    "bledne": {
     "B": "3560,00 zł – to kwota <b>netto</b>; zapomniano o VAT (najczęstszy błąd).",
     "C": "1795,80 zł – koszt samej robocizny z VAT (1460 · 1,23) bez agregatu.",
     "D": "1460,00 zł – robocizna netto bez agregatu i bez VAT."
    },
    "pulapka": "Czytaj treść do końca – polecenie „uwzględnij 23% VAT” bywa na końcu akapitu. Pozycje „m.b.” mnożysz przez podany metraż, pozycje „szt.” liczysz raz."
   }
  },
  {
   "n": 6,
   "tytul": "BHP przy lutowaniu palnikiem gazowym",
   "dzial": "BHP i przepisy",
   "tresc": "Podczas prac montażowych urządzeń chłodniczych z wykorzystaniem palników gazowych konieczne jest zapewnienie",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "dostępu do wody ciepłej.",
    "B": "dostępu do wody zimnej.",
    "C": "wentylacji pomieszczenia.",
    "D": "wentylacji maski tlenowej."
   },
   "klucz": "C",
   "rozw": {
    "lead": "Lutowanie twarde palnikiem (propan-butan, acetylen-tlen) zużywa tlen i wytwarza spaliny (CO, CO₂, NO<sub>x</sub>) oraz opary topnika. Resztki czynnika HFC w kontakcie z płomieniem rozkładają się dodatkowo do toksycznego fluorowodoru HF. Dlatego stanowisko musi być wentylowane, a układ przed <span class=\"term\" data-key=\"lut\">lutowaniem</span> opróżniony.",
    "kroki": [],
    "bledne": {
     "A": "Woda ciepła nie ma związku z bezpieczeństwem lutowania.",
     "B": "Woda zimna bywa przydatna (np. mokra szmata chroniąca zawór), lecz nie jest wymogiem „koniecznym” – wentylacja i gaśnica są.",
     "D": "„Wentylacja maski tlenowej” nie ma sensu technicznego – to dystraktor językowy."
    },
    "pulapka": "Skojarzenie „palnik → tlen → maska tlenowa” jest fałszywe. Zestaw BHP lutowania: okulary, rękawice, gaśnica, wentylacja, usunięcie materiałów łatwopalnych, osłona azotem OFN wewnątrz rury (przeciw zgorzelinie), a przy czynnikach A2L/A3 – detektor gazu i brak źródeł zapłonu."
   }
  },
  {
   "n": 7,
   "tytul": "Narzędzie do wykonywania kielicha",
   "dzial": "Montaż i rurociągi",
   "tresc": "Na której ilustracji przedstawiono narzędzie używane do wykonywania kielicha w rurze miedzianej?",
   "img": "img/ee15-2022-06/z07.png",
   "img_alt": "Cztery narzędzia: 1 – niebieska akumulatorowa kielichownica z głowicą, 2 – obcinak rolkowy do rur, 3 – szczypce samoblokujące, 4 – wkrętarka akumulatorowa.",
   "odp": {
    "A": "Na ilustracji 1.",
    "B": "Na ilustracji 2.",
    "C": "Na ilustracji 3.",
    "D": "Na ilustracji 4."
   },
   "klucz": "A",
   "rozw": {
    "lead": "Na ilustracji 1 jest akumulatorowa kielichownica: głowica z matrycą o otworach na różne średnice rur i rozwijakiem (stożkiem) do wytłaczania kielicha na końcu rury miedzianej.",
    "kroki": [],
    "bledne": {
     "B": "Ilustracja 2 to obcinak rolkowy do rur, który tylko przecina rurę.",
     "C": "Ilustracja 3 to szczypce samoblokujące (typu Morse’a), służące do przytrzymywania elementów.",
     "D": "Ilustracja 4 to wkrętarka akumulatorowa; bez głowicy i matrycy nie wykona kielicha."
    },
    "pulapka": "Kielich wykonuje się po obcięciu rury i zdjęciu zadziorów; obcinak i kielichownica to dwa różne narzędzia."
   }
  },
  {
   "n": 8,
   "tytul": "Pułapki olejowe (syfony) na rurociągu",
   "dzial": "Montaż i rurociągi",
   "tresc": "Podstawowym celem stosowania tzw. „pułapek olejowych” jest",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "prawidłowy powrót oleju do sprężarki.",
    "B": "prawidłowy powrót oleju do skraplacza.",
    "C": "zatrzymanie oleju i odprowadzenie go do parownika.",
    "D": "zatrzymania oleju i odprowadzenie go do kanalizacji."
   },
   "klucz": "A",
   "rozw": {
    "lead": "Olej opuszcza sprężarkę razem z parą czynnika i musi do niej wrócić, bo inaczej grozi zatarcie. Na <b>pionowych odcinkach wznośnych</b> rurociągu ssawnego (i tłocznego) wykonuje się syfony u podstawy pionu i co kilka metrów wysokości: w syfonie gromadzi się olej, zmniejsza się przekrój przepływu, rośnie prędkość pary i porywa ona olej w górę do sprężarki. Uzupełnieniem jest spadek rury ssawnej w kierunku sprężarki (ok. 0,5–1%).",
    "kroki": [],
    "bledne": {
     "B": "Olej w skraplaczu to problem (pogarsza wymianę ciepła), a nie cel.",
     "C": "Olej w parowniku również pogarsza wymianę ciepła; „zatrzymanie oleju” to zadanie <span class=\"term\" data-key=\"odolejacz\">odolejacza</span>, nie pułapki.",
     "D": "Odprowadzanie oleju do kanalizacji jest niezgodne z przepisami ochrony środowiska."
    },
    "pulapka": "Nie myl <b>pułapki olejowej</b> (syfon na rurze, pomaga olejowi wrócić) z <b>odolejaczem</b> (separator na tłoczeniu, zawraca olej do karteru) i z <b>odsysaczem cieczy</b> (chroni sprężarkę przed ciekłym czynnikiem)."
   }
  },
  {
   "n": 9,
   "tytul": "Połączenie rur miedzianych systemem Lokring",
   "dzial": "Montaż i rurociągi",
   "tresc": "Na ilustracji przedstawiono łączenie rur miedzianych z wykorzystaniem",
   "img": "img/ee15-2022-06/z09.png",
   "img_alt": "Fotografia dłoni zaciskających szczypcami (zaciskarką) złączkę na rurze miedzianej przy izolowanym przewodzie.",
   "odp": {
    "A": "lutowania elektrycznego.",
    "B": "lutowania twardego.",
    "C": "zgrzewania złączy.",
    "D": "systemu Lokring."
   },
   "klucz": "D",
   "rozw": {
    "lead": "Na zdjęciu rury łączy się mechanicznie: specjalne szczypce (zaciskarka) obejmują złączkę i zaciskają ją na rurach. Nie ma płomienia, spoiwa ani elektrod – to bezlutowe połączenie systemem Lokring (złączka z pierścieniem uszczelniającym zaciskana narzędziem).",
    "kroki": [],
    "bledne": {
     "A": "Lutowanie elektryczne wymaga źródła prądu, elektrod lub oporowych szczypiec grzejnych i spoiwa; na zdjęciu zaciskarka jest narzędziem mechanicznym.",
     "B": "Lutowanie twarde wykonuje się palnikiem gazowym i spoiwem; brak palnika i spoiny na zdjęciu.",
     "C": "Zgrzewanie złączy dotyczy rur z tworzyw sztucznych i nie stosuje się go do rur miedzianych w chłodnictwie."
    },
    "pulapka": "Zaletą połączeń zaciskowych jest brak ognia, więc można je stosować tam, gdzie lutowanie jest niebezpieczne (zagrożenie pożarowe); trzeba jednak użyć narzędzi i złączek zgodnych z danym systemem."
   }
  },
  {
   "n": 10,
   "tytul": "Ochrona zaworu wodnego filtrem",
   "dzial": "Elementy i automatyka obiegu",
   "tresc": "W celu zapewnienia niezawodności działania zaworu wodnego w układzie chłodniczym należy zamontować",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "zawór zwrotny.",
    "B": "filtr chemiczny.",
    "C": "filtr mechaniczny.",
    "D": "zawór bezpieczeństwa."
   },
   "klucz": "C",
   "rozw": {
    "lead": "Zawór wodny (regulator ciśnienia skraplania na wodzie chłodzącej) ma wąskie gniazdo i ruchomy grzybek. Zanieczyszczenia z sieci wodnej (piasek, rdza, kamień) mogą go zablokować lub rozszczelnić, dlatego przed nim montuje się filtr mechaniczny (siatkowy).",
    "kroki": [],
    "bledne": {
     "A": "Zawór zwrotny zapobiega cofaniu się wody, ale nie chroni gniazda zaworu przed zanieczyszczeniami.",
     "B": "Filtr chemiczny (np. zmiękczający) zmienia skład wody, a nie zatrzymuje cząstek stałych blokujących gniazdo zaworu.",
     "D": "Zawór bezpieczeństwa chroni przed nadciśnieniem i nie poprawia niezawodności działania zaworu wodnego."
    },
    "pulapka": "Wodę o dużej twardości dodatkowo uzdatnia się, ale zabezpieczeniem samego zaworu przed osadami i cząstkami jest filtr siatkowy."
   }
  },
  {
   "n": 11,
   "tytul": "Gaz do próby szczelności",
   "dzial": "Serwis, napełnianie, szczelność",
   "tresc": "Którego gazu używa się do wykonania <span class=\"term\" data-key=\"proba\">próby szczelności</span> instalacji chłodniczej?",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "Azotu.",
    "B": "Tlenu.",
    "C": "Fluoru.",
    "D": "Chloru."
   },
   "klucz": "A",
   "rozw": {
    "lead": "Do próby ciśnieniowej stosuje się <span class=\"term\" data-key=\"ofn\">azot beztlenowy (OFN)</span>, suchy, z butli przez reduktor. Jest obojętny chemicznie, nie reaguje z olejem, nie wprowadza wilgoci, jest niepalny i tani; przy zmianach temperatury zachowuje się jak gaz doskonały, więc spadek ciśnienia można skorygować: \\( p_2 = p_1 \\cdot \\frac{T_2}{T_1} \\) (T w kelwinach). Przepisy F-gazowe i norma PN-EN 378 zabraniają używania czynnika chłodniczego jako gazu próbnego.",
    "kroki": [],
    "bledne": {
     "B": "Tlen pod ciśnieniem w kontakcie z olejem sprężarkowym grozi samozapłonem i <b>wybuchem</b> – bezwzględny zakaz.",
     "C": "Fluor jest silnie toksycznym, agresywnym gazem i nie ma zastosowania serwisowego.",
     "D": "Chlor jest toksyczny i korozyjny; niszczyłby miedź i olej."
    },
    "pulapka": "„Sprężone powietrze” też jest błędne – zawiera tlen i wilgoć. Procedura: OFN → ciśnienie próbne wg dokumentacji (zwykle 1,1 × p<sub>max</sub>) → kontrola spadku ciśnienia w czasie → pianka/detektor przy złączach."
   }
  },
  {
   "n": 12,
   "tytul": "Ilość czynnika przy napełnianiu",
   "dzial": "Serwis, napełnianie, szczelność",
   "tresc": "Którego przyrządu należy użyć w celu określenia ilości czynnika wprowadzonego do układu chłodniczego podczas jego napełniania?",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "Wagi elektronicznej.",
    "B": "Manometru różnicowego.",
    "C": "Tachometru indukcyjnego.",
    "D": "Manometru membranowego."
   },
   "klucz": "A",
   "rozw": {
    "lead": "Ilość czynnika określa się <b>masowo</b>: butlę stawia się na wadze chłodniczej, taruje i napełnia do masy z tabliczki znamionowej (plus dodatek na długość instalacji). Masa jest wielkością rejestrowaną w Karcie Urządzenia (ilość dodana w kg i w t CO₂eq: \\( m_{CO_2eq} = \\frac{m\\,[\\mathrm{kg}]\\cdot GWP}{1000} \\)).",
    "kroki": [],
    "bledne": {
     "B": "Manometr różnicowy mierzy różnicę ciśnień (np. spadek na filtrze, presostat oleju), a nie masę.",
     "C": "Tachometr mierzy prędkość obrotową i nie ma związku z napełnianiem.",
     "D": "Manometr membranowy mierzy ciśnienie, które zależy od temperatury nasycenia i nie wskazuje wprost masy czynnika."
    },
    "pulapka": "Manometr służy do <b>weryfikacji</b> po napełnieniu (przegrzanie/dochłodzenie), nie do dozowania. Mieszaniny zeotropowe (R410A, R407C, R404A) napełnia się <b>fazą ciekłą</b>, aby nie zmienić składu – patrz <span class=\"term\" data-key=\"glide\">poślizg temperaturowy</span>."
   }
  },
  {
   "n": 13,
   "tytul": "Odprowadzenie skroplin z klimatyzatora",
   "dzial": "Montaż i rurociągi",
   "tresc": "Na której ilustracji przestawiono prawidłowe wykonanie odprowadzenia skroplin z jednostki wewnętrznej klimatyzatora?",
   "img": "img/ee15-2022-06/z13.png",
   "img_alt": "Cztery rysunki przekroju ściany z jednostką wewnętrzną: 1 – wąż do kanalizacji, 2 – koniec zanurzony w naczyniu z cieczą, 3 – wąż opadający swobodnie nad podłożem, 4 – wąż wznoszący się w górę na zewnątrz.",
   "odp": {
    "A": "Na ilustracji 1.",
    "B": "Na ilustracji 2.",
    "C": "Na ilustracji 3.",
    "D": "Na ilustracji 4."
   },
   "klucz": "C",
   "rozw": {
    "lead": "Skropliny odpływają grawitacyjnie, więc wąż musi mieć stały spadek w dół, a jego koniec powinien kończyć się swobodnie, bez zanurzenia i bez szczelnego połączenia z kanalizacją. Tak jest na ilustracji 3: rura opada pionowo i kończy się nad podłożem z otwartym wylotem.",
    "kroki": [],
    "bledne": {
     "A": "Ilustracja 1 – wylot wprowadzony bezpośrednio do kanalizacji bez przerwy powietrznej; przez wąż mogą wracać zapachy z kanalizacji.",
     "B": "Ilustracja 2 – koniec węża jest zanurzony w cieczy w naczyniu; zamknięcie wodne i podciśnienie utrudniają odpływ skroplin.",
     "D": "Ilustracja 4 – wąż po wyjściu z budynku biegnie w górę (przeciwspadek), więc skropliny nie spłyną grawitacyjnie."
    },
    "pulapka": "Wąż skroplin powinien mieć stały spadek (zwykle co najmniej ok. 1%), bez „worków wodnych”; zimą wylot na zewnątrz może zamarzać."
   }
  },
  {
   "n": 14,
   "tytul": "Przetwornica częstotliwości sprężarki",
   "dzial": "Elektrotechnika",
   "tresc": "Poprzez zastosowanie przetwornicy częstotliwości do regulacji prędkości obrotowej sprężarki uzyskuje się",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "obniżenie napięcia zasilania silnika elektrycznego sprężarki.",
    "B": "zwiększenie napięcia zasilania silnika elektrycznego sprężarki.",
    "C": "zwiększenie prądu rozruchowego pobieranego przez silnik elektryczny sprężarki.",
    "D": "zmniejszenie prądu rozruchowego pobieranego przez silnik elektryczny sprężarki."
   },
   "klucz": "D",
   "rozw": {
    "lead": "Falownik rozpędza silnik łagodnie („soft start”) – od niskiej częstotliwości w górę, utrzymując stały stosunek \\( U/f \\). Prąd rozruchowy nie przekracza zwykle 1,0–1,5 \\( I_n \\), podczas gdy rozruch bezpośredni silnika indukcyjnego pobiera 5–8 \\( I_n \\). Efekty dodatkowe: płynna regulacja wydajności (\\( \\dot Q_0 \\propto n \\)), wyższy SEER/SCOP, mniej cykli start-stop.",
    "kroki": [],
    "bledne": {
     "A": "Napięcie zmienia się wraz z częstotliwością (U/f = const), ale to nie jest cel ani stały efekt – przy 50 Hz napięcie jest nominalne.",
     "B": "Falownik nie podnosi napięcia powyżej napięcia zasilania w normalnej pracy.",
     "C": "Odwrotnie – to rozruch bezpośredni zwiększa prąd rozruchowy."
    },
    "pulapka": "W klimatyzatorze inwerterowym sprężarka jest zwykle silnikiem <b>BLDC/PMSM</b> zasilanym z płyty inwertera, stąd brak kondensatora i przekaźnika rozruchowego, typowych dla układów on/off."
   }
  },
  {
   "n": 15,
   "tytul": "Gdzie mierzymy ciśnienie parowania",
   "dzial": "Pomiary i diagnostyka",
   "tresc": "Pomiary ciśnienia parowania wykonuje się",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "między skraplaczem a termostatycznym zaworem rozprężnym.",
    "B": "między sprężarką a skraplaczem chłodzonym powietrzem.",
    "C": "po stronie wysokiego ciśnienia układu chłodniczego.",
    "D": "po stronie niskiego ciśnienia układu chłodniczego."
   },
   "klucz": "D",
   "rozw": {
    "lead": "Obieg ma dwa poziomy ciśnienia rozdzielone sprężarką i zaworem rozprężnym. <b>Strona niskiego ciśnienia</b> to odcinek od wylotu <span class=\"term\" data-key=\"tzr\">TZR</span> przez parownik do ssania sprężarki – panuje tam ciśnienie parowania \\( p_0 \\). Manometr niskiego ciśnienia podłącza się do zaworu serwisowego ssawnego; odczyt \\( p_0 \\) → \\( t_0 \\), razem z temperaturą rury za parownikiem daje <span class=\"term\" data-key=\"sh\">przegrzanie</span>: \\( \\Delta T_{sh} = t_{ss} - t_0(p_0) \\).",
    "kroki": [],
    "bledne": {
     "A": "Odcinek skraplacz → TZR to przewód cieczowy wysokiego ciśnienia (mierzymy tam dochłodzenie, nie parowanie).",
     "B": "Odcinek sprężarka → skraplacz to tłoczenie, gdzie jest ciśnienie skraplania \\( p_k \\).",
     "C": "Strona wysokiego ciśnienia to ciśnienie skraplania, nie parowania."
    },
    "pulapka": "Odpowiedzi A i D bywają mylone przez skojarzenie „zawór rozprężny ↔ parowanie”. Rozprężanie kończy się <b>za</b> zaworem – tam zaczyna się strona niskiego ciśnienia."
   }
  },
  {
   "n": 16,
   "tytul": "Kolejność czynności przed czyszczeniem filtra",
   "dzial": "BHP i przepisy",
   "tresc": "Która kolejność czynności wykonywanych przed czyszczeniem filtra klimatyzatora jest prawidłowa?",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "Odłączyć bezpiecznik zasilania, wyłączyć pilotem klimatyzator, odchylić pokrywę zabezpieczającą filtr, wyjąć filtr zgodnie z instrukcją obsługi.",
    "B": "Wyłączyć pilotem klimatyzator, odłączyć bezpiecznik zasilania, odchylić pokrywę zabezpieczającą filtr, wyjąć filtr zgodnie z instrukcją obsługi.",
    "C": "Odchylić pokrywę zabezpieczającą filtr, wyłączyć pilotem klimatyzator, odłączyć bezpiecznik zasilania, wyjąć filtr zgodnie z instrukcją obsługi.",
    "D": "Odchylić pokrywę zabezpieczającą filtr, odłączyć bezpiecznik zasilania, wyłączyć pilotem klimatyzator, wyjąć filtr zgodnie z instrukcją obsługi."
   },
   "klucz": "B",
   "rozw": {
    "lead": "Najpierw urządzenie wyłącza się w normalny sposób pilotem (kontrolowane zatrzymanie sprężarki i wentylatora), potem odcina się zasilanie bezpiecznikiem, a dopiero po odłączeniu napięcia otwiera się pokrywę i wyjmuje filtr. Dostęp do wnętrza przy zasilonym urządzeniu nie jest dopuszczalny ze względów BHP.",
    "kroki": [],
    "bledne": {
     "A": "Odłączenie bezpiecznika przed wyłączeniem pilotem przerywa pracę urządzenia w sposób niekontrolowany, bez zakończenia cyklu pracy.",
     "C": "Otwarcie pokrywy przed odłączeniem zasilania naraża na ruchome wentylatory i elementy pod napięciem.",
     "D": "Pokrywę otwiera się jako pierwszą czynność, przy pracującym i zasilonym urządzeniu – to zła kolejność; zasilanie trzeba odciąć przed dostępem do filtra."
    },
    "pulapka": "Schemat do zapamiętania: wyłącz → odetnij zasilanie → dopiero wtedy otwieraj i czyść. Regularne czyszczenie filtra utrzymuje przepływ powietrza i wydajność."
   }
  },
  {
   "n": 17,
   "tytul": "Wyciek R744 (CO₂) w pomieszczeniu",
   "dzial": "Czynniki i F-gazy",
   "tresc": "W przypadku rozszczelnienia układu zawierającego czynnik chłodniczy oznaczony symbolem R744 w pomieszczeniu, w którym miał miejsce wyciek, wystąpi",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "zapłon lub pożar.",
    "B": "wzrost temperatury.",
    "C": "spadek stężenia tlenu.",
    "D": "wzrost stężenia amoniaku."
   },
   "klucz": "C",
   "rozw": {
    "lead": "R744 to <b>dwutlenek węgla</b> (seria R7xx = czynniki nieorganiczne, liczba = masa molowa: CO₂ = 44). Klasa bezpieczeństwa <span class=\"term\" data-key=\"klasa\">A1</span> (niepalny, nietoksyczny w małych stężeniach), GWP = 1. Jest cięższy od powietrza – gromadzi się przy podłodze i <b>wypiera tlen</b>; przy stężeniu powyżej kilku % działa dusząco i toksycznie. Dlatego maszynownie CO₂ wymagają detektorów stężenia i wentylacji awaryjnej (PN-EN 378).",
    "kroki": [],
    "bledne": {
     "A": "CO₂ jest niepalny – wręcz gaśniczy. Zapłon dotyczyłby klas A2L (R32, R1234yf) i A3 (R290, R600a).",
     "B": "Rozprężający się CO₂ silnie się <b>ochładza</b> (możliwe powstanie suchego lodu, –78,5 °C), więc temperatura raczej spada.",
     "D": "Amoniak to R717 – inny czynnik."
    },
    "pulapka": "Kod czynnika: R717 (NH₃, masa 17) vs R744 (CO₂, masa 44) vs R718 (woda). CO₂ pracuje przy bardzo wysokich ciśnieniach (praca transkrytyczna powyżej 73,8 bar) – stąd wymagania wytrzymałościowe instalacji."
   }
  },
  {
   "n": 18,
   "tytul": "Zawór pływakowy w układzie chłodniczym",
   "dzial": "Elementy i automatyka obiegu",
   "tresc": "W układzie chłodniczym w celu regulacji dopływu czynnika chłodniczego należy zastosować zawór pływakowy do",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "parownika.",
    "B": "skraplacza.",
    "C": "dochładzacza.",
    "D": "zbiornika cieczy."
   },
   "klucz": "A",
   "rozw": {
    "lead": "Zawór pływakowy utrzymuje stały poziom cieczy i dozuje czynnik do parownika zalanego (lub do oddzielacza cieczy) – tym samym reguluje dopływ czynnika do parownika. Pływak otwiera zawór, gdy poziom cieczy spada, i zamyka, gdy rośnie.",
    "kroki": [],
    "bledne": {
     "B": "Skraplacz nie ma regulowanego „dopływu” czynnika zaworem pływakowym; do skraplacza tłoczy sprężarka.",
     "C": "Dochładzacz jest wymiennikiem ciepła na przewodzie cieczowym, a dopływ czynnika do parownika dławi TZR lub inny element rozprężny.",
     "D": "Zbiornik cieczy jest magazynem czynnika i nie wymaga regulacji dopływu tym zaworem; regulacji służy element rozprężny przed parownikiem."
    },
    "pulapka": "W dużych instalacjach amoniakalnych stosuje się też zawory pływakowe wysokiego ciśnienia na wylocie ze skraplacza, ale w pytaniu o „regulację dopływu czynnika” chodzi o zasilanie parownika."
   }
  },
  {
   "n": 19,
   "tytul": "Element dławiący w chłodziarce domowej",
   "dzial": "Elementy i automatyka obiegu",
   "tresc": "Który z wymienionych elementów stosuje się w małej chłodziarce domowej do regulacji dopływu czynnika chłodniczego do parownika?",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "Termostat.",
    "B": "Rurkę kapilarną.",
    "C": "Elektroniczny zawór rozprężny.",
    "D": "Zawór pływakowy niskiego ciśnienia."
   },
   "klucz": "B",
   "rozw": {
    "lead": "W małych urządzeniach hermetycznych (chłodziarki, zamrażarki, małe klimatyzatory on/off) element dławiący to <b>rurka kapilarna</b> – miedziana rurka o średnicy wewnętrznej 0,6–2 mm i długości 1–4 m. Spadek ciśnienia wynika z oporu tarcia i przyspieszania mieszaniny dwufazowej. Zalety: brak części ruchomych, niski koszt, wyrównywanie ciśnień po zatrzymaniu. Wada: brak regulacji, więc napełnienie jest krytyczne (dokładność do gramów).",
    "kroki": [],
    "bledne": {
     "A": "Termostat załącza i wyłącza sprężarkę według temperatury komory, ale nie dławi czynnika.",
     "C": "<span class=\"term\" data-key=\"eev\">EEV</span> stosuje się w inwerterowych klimatyzatorach, pompach ciepła i chłodnictwie komercyjnym; w lodówce domowej jest zbyt drogi i zbędny.",
     "D": "Zawór pływakowy niskiego ciśnienia steruje poziomem cieczy w parownikach zalanych (chłodnictwo przemysłowe, NH₃)."
    },
    "pulapka": "W tym teście „TZR” może pojawić się jako dystraktor – w lodówce domowej nie ma TZR, bo nie ma zbiornika cieczy, a układ musi wyrównywać ciśnienia na postoju."
   }
  },
  {
   "n": 20,
   "tytul": "Zasilanie kontrolera chłodniczego",
   "dzial": "Elektrotechnika",
   "tresc": "Do których zacisków kontrolera chłodniczego należy zgodnie z rysunkiem instruktażowym podłączyć przewody zasilania elektrycznego?",
   "img": "img/ee15-2022-06/z20.png",
   "img_alt": "Schemat podłączeń kontrolera chłodniczego: zasilanie 230 V AC (N i L) doprowadzone do zacisków 1 i 5, wyjścia 6, 7, 8 do sprężarki, grzałki i wentylatora oraz wejścia czujników T1, T2 i DI.",
   "odp": {
    "A": "Ochronny do zacisku 1, fazowy prądu przemiennego o napięciu 230 V do zacisku 5.",
    "B": "Neutralny do zacisku 1, fazowy prądu przemiennego o napięciu 230 V do zacisku 5.",
    "C": "Neutralny do zacisku 1, dodatni prądu stałego o napięciu 230 V do zacisku 5.",
    "D": "Ujemny do zacisku 1, dodatni prądu stałego o napięciu 230 V do zacisku 5."
   },
   "klucz": "B",
   "rozw": {
    "lead": "Na rysunku zasilanie opisano jako „Power Supply 230V AC” z przewodami N i L. Przewód N (neutralny) jest poprowadzony do zacisku 1, a przewód L (fazowy) do zacisku 5. Napięcie 230 V jest przemienne.",
    "kroki": [],
    "bledne": {
     "A": "Przewód ochronny (PE) nie jest przewodem zasilającym i na rysunku nie jest podłączany do zacisku 1; do zacisku 1 prowadzi przewód N.",
     "C": "Napięcie zasilania jest przemienne (230 V AC), nie stałe, więc „dodatni prądu stałego” jest błędne.",
     "D": "Zasilanie jest przemienne, więc nie ma przewodów „ujemny” i „dodatni”; do zacisku 1 podłącza się N."
    },
    "pulapka": "Czytaj opisy na rysunku: „N”, „L” i „230V AC” rozstrzygają o rodzaju przewodów; zaciski 6–8 to wyjścia przekaźników obciążeń (sprężarka, grzałka, wentylator), a nie zasilanie."
   }
  },
  {
   "n": 21,
   "tytul": "Ciśnienie próby szczelności i dopuszczalny spadek",
   "dzial": "Obliczenia",
   "tresc": "<i>Fragment instrukcji obsługi agregatu chłodniczego:</i> „Podczas próby szczelności wymagane jest napełnienie instalacji azotem i sprawdzenie utrzymywania się stałego ciśnienia. Ciśnienie podczas próby szczelności powinno wynosić 110% maksymalnego ciśnienia pracy i po 24 godzinach spadek tego ciśnienia nie powinien być większy niż 1 % w tej samej temperaturze.”<br>Maksymalne ciśnienie pracy dla badanej instalacji wynosi 24 bary. Na podstawie podanej instrukcji wskaż prawidłowe wartości ciśnienia <i>p</i> w instalacji podczas próby szczelności oraz dopuszczalnego ciśnienia <i>p</i><sub>24h</sub> dla 1% spadku ciśnienia po 1 dobie.",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "p = 24,00, p<sub>24h</sub> &lt; 26,40",
    "B": "p = 24,00, p<sub>24h</sub> &lt; 0,26",
    "C": "p = 26,40, p<sub>24h</sub> &lt; 0,26",
    "D": "p = 26,40, p<sub>24h</sub> &lt; 2,61"
   },
   "klucz": "C",
   "rozw": {
    "lead": "Ciśnienie próbne to 110% ciśnienia maksymalnego, czyli \\( 1{,}10 \\cdot 24 = 26{,}40\\ \\mathrm{bar} \\). Dopuszczalny spadek po 24 h wynosi 1% tej wartości, czyli ok. 0,26 bar.",
    "kroki": [
     [
      "Dane",
      "\\( p_{max} = 24\\ \\mathrm{bar} \\); ciśnienie próbne = 110% \\( p_{max} \\); dopuszczalny spadek = 1% ciśnienia próbnego po 24 h"
     ],
     [
      "Szukane",
      "\\( p_{pr} \\), dopuszczalny spadek \\( \\Delta p_{24h} \\)"
     ],
     [
      "Wzór",
      "\\[ p_{pr} = 1{,}10 \\cdot p_{max} \\qquad \\Delta p_{24h} = 0{,}01 \\cdot p_{pr} \\]"
     ],
     [
      "Podstawienie",
      "\\( p_{pr} = 1{,}10 \\cdot 24 = 26{,}40\\ \\mathrm{bar} \\); \\( \\Delta p_{24h} = 0{,}01 \\cdot 26{,}4 = 0{,}264\\ \\mathrm{bar} \\approx 0{,}26\\ \\mathrm{bar} \\)"
     ],
     [
      "Wynik",
      "\\( p = 26{,}40\\ \\mathrm{bar} \\), spadek \\( &lt; 0{,}26\\ \\mathrm{bar} \\) (ciśnienie po dobie nie niższe niż ok. 26,14 bar)"
     ]
    ],
    "bledne": {
     "A": "Ciśnienie próbne pomylono z roboczym (24 bar, bez 110%), a „&lt; 26,40” to nie jest wartość spadku ciśnienia, tylko samo ciśnienie próbne.",
     "B": "Spadek 0,26 bar jest policzony poprawnie, ale ciśnienie próbne jest błędne (24 bar zamiast 26,40 bar – pominięto 110%).",
     "D": "2,61 bar to ok. 10%, nie 1% ciśnienia próbnego (10% z 26,4 to 2,64) – błąd o rząd wielkości."
    },
    "pulapka": "W realnej próbie odczyt koryguje się o temperaturę: \\( p_{2,kor} = p_1 \\cdot \\frac{T_2}{T_1} \\) [K]. Zmiana o 3 K przy 26 bar daje ok. 0,27 bar – <b>tyle, ile cały dopuszczalny spadek</b>. Ciśnienie próbne nie może przekroczyć PS najsłabszego elementu instalacji."
   }
  },
  {
   "n": 22,
   "tytul": "Wziernik z indykatorem wilgoci",
   "dzial": "Elementy i automatyka obiegu",
   "tresc": "Element przedstawiony na ilustracji służy do",
   "img": "img/ee15-2022-06/z22.png",
   "img_alt": "Fotografia mosiężnego wziernika z indykatorem wilgoci między dwiema końcówkami z rury miedzianej.",
   "odp": {
    "A": "pomiaru temperatury czynnika w instalacji chłodniczej.",
    "B": "oceny napowietrzenia czynnika w instalacji chłodniczej.",
    "C": "pomiaru ciśnienia po stronie tłocznej instalacji chłodniczej.",
    "D": "oceny stanu zawilgocenia czynnika w instalacji chłodniczej."
   },
   "klucz": "D",
   "rozw": {
    "lead": "Na ilustracji jest <span class=\"term\" data-key=\"wziernik\">wziernik z indykatorem wilgoci</span>: mosiężny korpus z lutowanymi końcówkami z rury miedzianej i szkiełkiem. Barwa indykatora w środku (zielona – sucho, żółta – zawilgocony czynnik) pozwala ocenić zawartość wilgoci, a przez szkiełko widać też, czy w przewodzie cieczowym nie ma pęcherzyków pary.",
    "kroki": [],
    "bledne": {
     "A": "Temperaturę mierzy się czujnikiem lub termometrem przylgowym, a wziernik nie ma elementu pomiarowego temperatury.",
     "B": "Wziernik pokazuje przepływ i ewentualne pęcherzyki pary (niedobór czynnika), ale zadaniem pokazanego elementu jest ocena wilgoci przez indykator; „napowietrzenie” nie jest jego funkcją.",
     "C": "Ciśnienie mierzy manometr podłączony do króćca serwisowego; wziernik nie ma skali ani tarczy."
    },
    "pulapka": "Wziernik montuje się na przewodzie cieczowym za filtrem odwadniaczem; po zmianie koloru indykatora na żółty należy wymienić filtr odwadniacz i olej (oraz przeprowadzić próżnię)."
   }
  },
  {
   "n": 23,
   "tytul": "Regulator upustowy wydajności (hot gas bypass)",
   "dzial": "Elementy i automatyka obiegu",
   "tresc": "Sygnałem sterującym dla upustowego regulatora wydajności chłodniczej w instalacji jest",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "zmniejszenie ciśnienia ssania czynnika chłodniczego.",
    "B": "wzrost temperatury skraplania czynnika chłodniczego.",
    "C": "zmniejszenie ciśnienia skraplania czynnika chłodniczego.",
    "D": "wzrost temperatury dochłodzenia czynnika chłodniczego."
   },
   "klucz": "A",
   "rozw": {
    "lead": "Regulator upustowy (zawór obejściowy gorących par) łączy tłoczenie sprężarki z przewodem ssawnym lub wejściem parownika. Gdy obciążenie cieplne spada, parownik odparowuje mniej czynnika i <b>ciśnienie ssania \\( p_0 \\) maleje</b>. Regulator otwiera się przy spadku \\( p_0 \\) poniżej nastawy i wpuszcza gorący gaz – podnosi \\( p_0 \\), chroni przed oblodzeniem i pozwala sprężarce pracować ciągle, bez taktowania.",
    "kroki": [],
    "bledne": {
     "B": "Temperatura skraplania steruje regulacją wentylatorów skraplacza, a nie upustem gorącego gazu.",
     "C": "Spadek ciśnienia skraplania jest sygnałem dla regulatora ciśnienia skraplania (zalewanie skraplacza zimą), nie dla upustu.",
     "D": "Dochłodzenie nie jest sygnałem regulacyjnym typowego zaworu upustowego."
    },
    "pulapka": "Rodzinę regulatorów ciśnienia łatwo pomylić: KVP – regulator ciśnienia parowania, KVL – ogranicznik ciśnienia ssania, KVC – regulator wydajności (upust gorącego gazu), KVR – regulator ciśnienia skraplania. Wpuszczanie gorącego gazu wymaga kontroli temperatury tłoczenia (ryzyko przegrzania sprężarki)."
   }
  },
  {
   "n": 24,
   "tytul": "Rozpoznanie układu na rysunku",
   "dzial": "Obieg i termodynamika",
   "tresc": "Na rysunku przedstawiono",
   "img": "img/ee15-2022-06/z24.png",
   "img_alt": "Kolorowy schemat układu chłodniczego: sprężarka z manometrami, skraplacz, zbiornik cieczy, filtr, wziernik, zawór rozprężny i parownik w komorze -15 stopni C, z panelem monitoringu.",
   "odp": {
    "A": "rewersyjną pompę ciepła.",
    "B": "sprężarkową pompę ciepła.",
    "C": "absorpcyjny układ chłodniczy.",
    "D": "sprężarkowy układ chłodniczy."
   },
   "klucz": "D",
   "rozw": {
    "lead": "Rysunek pokazuje klasyczny jednostopniowy układ ze sprężarką: sprężarka z blokiem manometrów, skraplacz chłodzony powietrzem na zewnątrz, zbiornik cieczy, filtr, wziernik, zawór rozprężny i parownik w komorze o temperaturze –15 °C, z nadzorem (panel, PC, SMS, e-mail). Układ odbiera ciepło z komory chłodniczej, więc jest to sprężarkowy układ chłodniczy.",
    "kroki": [],
    "bledne": {
     "A": "Pompa rewersyjna ma zawór czterodrogowy zmieniający kierunek obiegu (grzanie/chłodzenie); na rysunku go nie ma, a komora jest chłodzona.",
     "B": "Sprężarkowa pompa ciepła służy do ogrzewania (użyteczne jest ciepło skraplacza), a tu użytecznym efektem jest chłodzenie komory.",
     "C": "Układ absorpcyjny nie ma sprężarki mechanicznej, tylko generator, absorber i pompę roztworu."
    },
    "pulapka": "Ten sam obieg parowy może pracować jako chłodziarka albo pompa ciepła – o nazwie decyduje użyteczny efekt (chłodzenie komory vs ogrzewanie)."
   }
  },
  {
   "n": 25,
   "tytul": "Obowiązki operatora – CRO i Karta Urządzenia",
   "dzial": "BHP i przepisy",
   "tresc": "W przypadku instalacji chłodniczych i klimatyzacyjnych oraz pomp ciepła, które zawierają co najmniej 3 kg substancji kontrolowanej lub co najmniej 5 ton <span class=\"term\" data-key=\"co2eq\">ekwiwalentu CO<sub>2</sub></span> fluorowanych gazów cieplarnianych, wymagane jest",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "prowadzenie dokumentacji oraz rejestracja w Krajowym Forum Chłodnictwa.",
    "B": "prowadzenie dokumentacji oraz rejestracja w Centralnym Rejestrze Operatorów.",
    "C": "stworzenie instrukcji serwisowej oraz rejestracja w Krajowym Rejestrze Sądowym.",
    "D": "stworzenie instrukcji obsługi oraz rejestracja w Centralnym Rejestrze Ubezpieczonych."
   },
   "klucz": "B",
   "rozw": {
    "lead": "Ustawa z 15 maja 2015 r. o substancjach zubożających warstwę ozonową oraz o niektórych fluorowanych gazach cieplarnianych nakłada na <b>operatora</b> obowiązek założenia <b>Karty Urządzenia</b> i rejestracji w <b>Centralnym Rejestrze Operatorów (CRO)</b> dla urządzeń zawierających ≥ 3 kg substancji kontrolowanych (np. R22) lub ≥ 5 t ekwiwalentu CO₂ F-gazów. W karcie rejestruje się kontrole szczelności, ilości czynnika dodane i odzyskane oraz dane serwisanta z certyfikatem.<br><div class=\"tblwrap\"><table><thead><tr><th>Ładunek F-gazu (wg rozp. 517/2014)</th><th>Bez systemu wykrywania wycieków</th><th>Z systemem wykrywania</th></tr></thead><tbody><tr><td>5 – 50 t CO₂eq</td><td>co 12 miesięcy</td><td>co 24 miesiące</td></tr><tr><td>50 – 500 t CO₂eq</td><td>co 6 miesięcy</td><td>co 12 miesięcy</td></tr><tr><td>≥ 500 t CO₂eq</td><td>co 3 miesiące</td><td>co 6 miesięcy</td></tr></tbody></table></div>Przykład: 10 kg R410A (GWP 2088) to 10 · 2088 / 1000 ≈ 20,9 t CO₂eq – karta urządzenia i kontrola co 12 miesięcy.",
    "kroki": [],
    "bledne": {
     "A": "Krajowe Forum Chłodnictwa to stowarzyszenie branżowe, nie rejestr ustawowy.",
     "C": "Krajowy Rejestr Sądowy rejestruje podmioty (spółki), nie urządzenia chłodnicze.",
     "D": "Centralny Rejestr Ubezpieczonych nie istnieje w tym kontekście – to dystraktor językowy."
    },
    "pulapka": "Próg 3 kg dotyczy substancji kontrolowanych (masa), próg 5 t CO₂eq – F-gazów (masa × GWP). Arkusz z 2022 r. odwołuje się do rozporządzenia 517/2014; od 2024 r. obowiązuje rozporządzenie (UE) 2024/573, które zmieniło progi i częstotliwości kontroli, a krajowy system rejestracji także się zmienia – sprawdzaj aktualne przepisy."
   }
  },
  {
   "n": 26,
   "tytul": "Zamrażanie immersyjne żywności",
   "dzial": "Obieg i termodynamika",
   "tresc": "Podczas zamrażania immersyjnego żywności produkt podlega",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "szybkiemu schłodzeniu powierzchni podczas kontaktu z cieczą chłodzącą.",
    "B": "powolnemu ochładzaniu powierzchni podczas kontaktu z cieczą chłodzącą.",
    "C": "szybkiemu schłodzeniu powierzchni podczas kontaktu z chłodnym powietrzem.",
    "D": "powolnemu ochładzaniu powierzchni podczas kontaktu z chłodnym powietrzem."
   },
   "klucz": "A",
   "rozw": {
    "lead": "Zamrażanie immersyjne polega na zanurzeniu produktu (lub polaniu go) w ciekłym czynniku chłodzącym o niskiej temperaturze (np. solanka, roztwór glikolu). Współczynnik przejmowania ciepła przy kontakcie cieczy z powierzchnią jest wielokrotnie większy niż dla powietrza, dlatego powierzchnia produktu jest schładzana szybko.",
    "kroki": [],
    "bledne": {
     "B": "Ciecz o dobrej przewodności i dużym współczynniku przejmowania ciepła chłodzi szybko, a nie powoli.",
     "C": "Chłodzenie powietrzem to zamrażanie nawiewowe (tunelowe), a nie immersyjne.",
     "D": "Zamrażanie w powietrzu jest wolniejsze, ale to nie jest metoda immersyjna – immersja oznacza kontakt z cieczą."
    },
    "pulapka": "Nazwa „immersyjne” pochodzi od łacińskiego immersio – zanurzenie; zamrażanie nawiewowe, płytowe i immersyjne to trzy różne metody, rozróżniane ośrodkiem odbierającym ciepło."
   }
  },
  {
   "n": 27,
   "tytul": "Skutki wypływu oleju do obiegu",
   "dzial": "Pomiary i diagnostyka",
   "tresc": "Wypływ oleju ze sprężarki do obiegu chłodniczego może spowodować",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "nadmierne dochłodzenie czynnika chłodniczego.",
    "B": "wzrost ciśnienia skraplania czynnika chłodniczego.",
    "C": "spadek ciśnienia parowania czynnika chłodniczego.",
    "D": "obniżenie temperatury skraplania czynnika chłodniczego."
   },
   "klucz": "B",
   "rozw": {
    "lead": "Olej unoszony z czynnikiem osadza się cienką warstwą na ściankach wymienników. Warstwa oleju działa jak dodatkowy opór cieplny, więc w skraplaczu pogarsza oddawanie ciepła – żeby oddać tę samą moc, musi wzrosnąć różnica temperatur, a więc temperatura i ciśnienie skraplania.",
    "kroki": [],
    "bledne": {
     "A": "Pogorszenie wymiany ciepła w skraplaczu zmniejsza dochłodzenie cieczy, a nie powoduje jego nadmiaru.",
     "C": "Olej w parowniku także pogarsza wymianę ciepła, lecz arkusz oczekuje skutku „wzrost ciśnienia skraplania”, a spadek p<sub>0</sub> wynikałby wtedy ze słabszego odparowania i wymaga innych warunków.",
     "D": "Skutek jest odwrotny – temperatura skraplania rośnie, a nie spada."
    },
    "pulapka": "Fizycznie olej w parowniku obniża też wydajność i ciśnienie parowania, więc zadanie jest do pewnego stopnia dwuznaczne; klucz CKE wskazuje wzrost ciśnienia skraplania. Dlatego na rurociągach montuje się pułapki olejowe i odolejacz."
   }
  },
  {
   "n": 28,
   "tytul": "Kosztorys naprawy ekspresowej lodówki",
   "dzial": "Kosztorys",
   "tresc": "Na podstawie podanego cennika w tabeli oblicz całkowity koszt ekspresowej naprawy (z wymianą sprężarki) lodówki wolnostojącej, jeżeli odległość do miejsca wykonania usługi wynosiła 3 km, ilość czynnika zużyta podczas napełniania lodówki jest równa 0,15 kg, a po wykonaniu naprawy dokonano gruntownego czyszczenia lodówki. Uwzględnij 23% podatek VAT.",
   "img": "img/ee15-2022-06/z28.png",
   "img_alt": "Cennik usług: naprawa zwykła 60 zł, ekspresowa 90 zł, dojazd 2 zł/km, lodówka w zabudowie 50 zł, wolnostojąca 0 zł, czyszczenie 15 zł; materiały: sprężarka 220 zł, czynnik 120 zł/kg, filtr odwadniacz 60 zł.",
   "odp": {
    "A": "503,07 zł",
    "B": "571,00 zł",
    "C": "702,33 zł",
    "D": "712,17 zł"
   },
   "klucz": "A",
   "rozw": {
    "lead": "Przy każdej wymianie sprężarki (i każdym otwarciu układu) wymienia się też <span class=\"term\" data-key=\"filtr\">filtr odwadniacz</span>. Polecenie nie mówi o nim wprost, ale cennik zawiera tę pozycję, a CKE oczekuje jej uwzględnienia.",
    "kroki": [
     [
      "Usługi",
      "\\( 90\\ (\\text{ekspres}) + 3\\cdot 2\\ (\\text{dojazd}) + 0\\ (\\text{wolnostojąca}) + 15\\ (\\text{czyszczenie}) = 111\\ \\mathrm{zł} \\)"
     ],
     [
      "Materiały",
      "\\( 220\\ (\\text{sprężarka}) + 0{,}15\\cdot 120\\ (\\text{czynnik}) + 60\\ (\\text{filtr}) = 220 + 18 + 60 = 298\\ \\mathrm{zł} \\)"
     ],
     [
      "Netto",
      "\\( K_n = 111 + 298 = 409{,}00\\ \\mathrm{zł} \\)"
     ],
     [
      "Brutto",
      "\\[ K_b = 409 \\cdot 1{,}23 = 503{,}07\\ \\mathrm{zł} \\]"
     ]
    ],
    "bledne": {
     "B": "571,00 zł – to kwota netto z błędnym zestawem pozycji: naprawa zwykła i ekspresowa naraz (60 + 90), cały 1 kg czynnika (120 zł) zamiast 0,15 kg, a do tego bez VAT.",
     "C": "702,33 zł = 571 · 1,23 – ten sam błędny zestaw pozycji co w B, tym razem z VAT.",
     "D": "712,17 zł to 579 · 1,23; netto 579 zł nie wynika z poprawnego zestawu pozycji (m.in. doliczono 50 zł za lodówkę w zabudowie, choć jest wolnostojąca)."
    },
    "pulapka": "Bez filtra odwadniacza: 349 · 1,23 = 429,27 zł – takiej odpowiedzi nie ma wśród opcji, co sygnalizuje, że filtr trzeba było uwzględnić. Zasada serwisowa: sprężarka + filtr odwadniacz + próżnia + nowy ładunek czynnika to komplet."
   }
  },
  {
   "n": 29,
   "tytul": "Ściągacz do łożysk",
   "dzial": "Materiały i rysunek techniczny",
   "tresc": "Na której ilustracji umieszczono narzędzie do ściągania łożysk z silnika elektrycznego sprężarki chłodniczej?",
   "img": "img/ee15-2022-06/z29.png",
   "img_alt": "Cztery narzędzia: 1 – szczypce do zdejmowania izolacji z przewodów, 2 – przecinak, 3 – trójramienny ściągacz do łożysk, 4 – klucz do rur.",
   "odp": {
    "A": "Na ilustracji 1.",
    "B": "Na ilustracji 2.",
    "C": "Na ilustracji 3.",
    "D": "Na ilustracji 4."
   },
   "klucz": "C",
   "rozw": {
    "lead": "Na ilustracji 3 jest ściągacz trójramienny z wrzecionem: haki obejmują łożysko lub koło, a śruba centralna zdejmuje je z wału bez uszkadzania silnika.",
    "kroki": [],
    "bledne": {
     "A": "Ilustracja 1 to ściągacz izolacji (szczypce do zdejmowania izolacji z przewodów), nie narzędzie do łożysk.",
     "B": "Ilustracja 2 to przecinak (dłuto) z osłoną dłoni, przeznaczony do skuwania, a nie do ściągania łożysk.",
     "D": "Ilustracja 4 to klucz do rur (stillson), używany do skręcania rur, nie do zdejmowania łożysk."
    },
    "pulapka": "Łożysko ściąga się, przykładając siłę do pierścienia wewnętrznego; uderzanie młotkiem lub dłutem uszkadza wał i łożysko."
   }
  },
  {
   "n": 30,
   "tytul": "Zbyt wysoka temperatura skraplacza lodówki",
   "dzial": "Pomiary i diagnostyka",
   "tresc": "Podczas pracy chłodziarko-zamrażarki domowej ze skraplaczem rurowo-żaluzjowym stwierdzono zbyt wysoką temperaturę pracy skraplacza. Które czynności należy wykonać w celu usunięcia tej awarii?",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "Czyszczenie parownika i odsunięcie chłodziarko-zamrażarki od ściany w celu polepszenia wymiany ciepła pomiędzy skraplaczem a otoczeniem.",
    "B": "Czyszczenie skraplacza i odsunięcie chłodziarko-zamrażarki od ściany w celu polepszenia wymiany ciepła pomiędzy skraplaczem a otoczeniem.",
    "C": "Czyszczenie parownika i dosunięcie chłodziarko-zamrażarki do ściany w celu zmniejszenia wymiany ciepła pomiędzy skraplaczem a otoczeniem.",
    "D": "Czyszczenie skraplacza i dosunięcie chłodziarko-zamrażarki do ściany w celu zmniejszenia wymiany ciepła pomiędzy skraplaczem a otoczeniem."
   },
   "klucz": "B",
   "rozw": {
    "lead": "Zbyt wysoka temperatura skraplacza oznacza złe oddawanie ciepła do otoczenia: skraplacz jest zabrudzony (kurz, tłuszcz) albo urządzenie stoi zbyt blisko ściany i brakuje cyrkulacji powietrza. Trzeba więc wyczyścić <b>skraplacz</b> i <b>odsunąć</b> urządzenie od ściany, aby poprawić wymianę ciepła.",
    "kroki": [],
    "bledne": {
     "A": "Czyszczenie parownika nie obniża temperatury skraplacza – dotyczy odbioru ciepła z komory.",
     "C": "Czyszczenie parownika i dosunięcie do ściany pogarszają odprowadzanie ciepła ze skraplacza.",
     "D": "Dosunięcie do ściany ogranicza cyrkulację powietrza i pogarsza wymianę ciepła – skraplacz grzałby się jeszcze bardziej."
    },
    "pulapka": "Nie należy dążyć do „zmniejszenia wymiany ciepła” ze skraplaczem – im lepiej oddaje ciepło, tym niższe ciśnienie skraplania i mniejszy pobór energii."
   }
  },
  {
   "n": 31,
   "tytul": "Pierwsza czynność po wymianie kapilary",
   "dzial": "Serwis, napełnianie, szczelność",
   "tresc": "Po wymianie w urządzeniu chłodniczym rurki kapilarnej należy w pierwszej kolejności sprawdzić",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "szczelność układu.",
    "B": "średnicę rurki kapilarnej.",
    "C": "napięcie w sieci zasilającej.",
    "D": "zawartość czynnika w układzie."
   },
   "klucz": "A",
   "rozw": {
    "lead": "Po każdej ingerencji w obwód czynnika (przecięcie i wlutowanie kapilary) układ musi być sprawdzony pod kątem szczelności – zanim nastąpią próżniowanie i napełnienie czynnikiem. Dopiero szczelny układ można próżniować i napełniać.",
    "kroki": [],
    "bledne": {
     "B": "Średnicę kapilary dobiera się przed montażem (zgodnie z danymi producenta), a nie sprawdza po wymianie jako pierwszą czynność.",
     "C": "Napięcie sieci nie ma związku z wymianą kapilary i nie jest pierwszą czynnością kontrolną.",
     "D": "Zawartość czynnika sprawdza się po próbie szczelności, próżniowaniu i napełnieniu, a nie przed nimi."
    },
    "pulapka": "Kolejność prac przy otwarciu układu: wymiana elementu → próba szczelności azotem → próżniowanie → napełnienie czynnikiem (waga) → kontrola parametrów pracy."
   }
  },
  {
   "n": 32,
   "tytul": "Kontrola agregatu wody lodowej przed startem",
   "dzial": "Serwis, napełnianie, szczelność",
   "tresc": "Po naprawie agregatu wody lodowej ze skraplaczem chłodzonym wodą należy przed jego uruchomieniem sprawdzić",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "poziom wody chłodzącej skraplacz, poziom wody lodowej w zbiorniku, stan i nastawy zabezpieczeń agregatu, poziom i temperaturę oleju sprężarkowego.",
    "B": "poziom wody podgrzewającej skraplacz, poziom wody lodowej w zbiorniku, stan i nastawy zabezpieczeń agregatu, poziom i temperaturę oleju sprężarkowego.",
    "C": "poziom wody chłodzącej skraplacz, poziom wody lodowej w wentylatorowej wieży wyparnej, stan i nastawy zabezpieczeń agregatu, poziom i temperaturę oleju sprężarkowego.",
    "D": "poziom wody chłodzącej skraplacz, poziom wody lodowej w zbiorniku, stan i nastawy zabezpieczeń chłodnic powietrza, poziom i temperaturę oleju smarującego wentylatory."
   },
   "klucz": "A",
   "rozw": {
    "lead": "Przed startem sprawdza się wszystkie obiegi agregatu: wodę chłodzącą skraplacz (jej brak podniósłby ciśnienie skraplania), wodę lodową w zbiorniku (ochrona parownika przed zamarznięciem), stan i nastawy zabezpieczeń agregatu (presostaty, termostat przeciwzamrożeniowy) oraz poziom i temperaturę oleju w sprężarce (podgrzany olej, bez rozcieńczenia czynnikiem).",
    "kroki": [],
    "bledne": {
     "B": "Skraplacz się chłodzi, a nie „podgrzewa” – woda podgrzewająca skraplacz nie ma sensu.",
     "C": "Wieża wyparna chłodzi wodę skraplacza, a w niej nie ma „wody lodowej”.",
     "D": "Chłodnice powietrza są odbiornikami, a agregat nie ma oleju „smarującego wentylatory” w tym zakresie; kontrola dotyczy zabezpieczeń agregatu i oleju sprężarki."
    },
    "pulapka": "Pamiętaj o podgrzewaczu oleju (karter): przed pierwszym startem po postoju powinien pracować kilka godzin, aby olej nie rozpuszczał nadmiernie czynnika."
   }
  },
  {
   "n": 33,
   "tytul": "Olej POE na etykiecie pojemnika",
   "dzial": "Czynniki i F-gazy",
   "tresc": "Co zawiera przedstawiony na rysunku pojemnik?",
   "img": "img/ee15-2022-06/z33.png",
   "img_alt": "Fotografia blaszanej puszki z etykietą Polyolester Lubricant 160 PZ i listą czynników R134a, R507A, R404A, R407C.",
   "odp": {
    "A": "Czynnik chłodniczy do instalacji zawierającej czynniki chłodnicze r134a, R507A, R404A, R407C.",
    "B": "Czynnik chłodniczy do instalacji zawierającej inne czynniki chłodnicze niż r134a, R507A, R404A, R407C.",
    "C": "Olej do sprężarki chłodniczej instalacji zawierającej czynniki chłodnicze r134a, R507A, R404A, R407C.",
    "D": "Olej do chłodniczej instalacji absorpcyjnej zawierającej czynniki chłodnicze r134a, R507A, R404A, R407C."
   },
   "klucz": "C",
   "rozw": {
    "lead": "Na etykiecie widnieje „Polyolester lubricant 160 PZ” oraz lista czynników: R134a, R507A, R404A, R407C. To olej poliolestrowy (POE) do sprężarek chłodniczych pracujących z czynnikami HFC.",
    "kroki": [],
    "bledne": {
     "A": "To nie czynnik chłodniczy – napis „lubricant” oznacza smar/olej, a lista R134a, R507A, R404A, R407C wskazuje, z jakimi czynnikami olej jest zgodny.",
     "B": "To nie czynnik, a olej; lista na etykiecie to czynniki, z którymi olej współpracuje, a nie „inne niż”.",
     "D": "Instalacje absorpcyjne pracują na roztworach (np. NH₃–woda, LiBr–woda) i nie używa się w nich oleju sprężarkowego z listą czynników HFC."
    },
    "pulapka": "Olej POE jest bardzo higroskopijny – pojemnik trzeba szybko zamykać; nie wolno mieszać go z olejem mineralnym w układach, które tego nie dopuszczają."
   }
  },
  {
   "n": 34,
   "tytul": "Izolacja instalacji a próba szczelności",
   "dzial": "Montaż i rurociągi",
   "tresc": "Izolacje termiczne instalacji chłodniczych narażone na wykraplanie wilgoci powinny być wykonane",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "po wykonaniu próby szczelności oraz po wykonaniu powłoki parochronnej.",
    "B": "przed wykonaniem próby szczelności, ale po wykonaniu powłoki parochronnej.",
    "C": "po wykonaniu próby szczelności, lecz przed wykonaniem powłoki parochronnej.",
    "D": "przed wykonaniem próby szczelności i przed wykonaniem powłoki parochronnej."
   },
   "klucz": "A",
   "rozw": {
    "lead": "Izolacji nie wolno zakładać przed próbą szczelności, bo zakrywałaby połączenia i uniemożliwiała wykrycie nieszczelności. Zgodnie z kluczem CKE izolację na elementach narażonych na wykraplanie wilgoci wykonuje się dopiero po próbie szczelności i po wykonaniu powłoki parochronnej, aby para wodna nie dostawała się do izolacji.",
    "kroki": [],
    "bledne": {
     "B": "Wykonanie izolacji przed próbą szczelności zasłania połączenia i uniemożliwia ich kontrolę.",
     "C": "Izolacja przed powłoką parochronną nie jest zgodna z kluczem CKE; powłoka ma chronić izolację przed wilgocią.",
     "D": "Izolacja przed próbą szczelności i przed powłoką parochronną jest błędna co do obu kroków."
    },
    "pulapka": "Pytanie jest sformułowane nieprecyzyjnie: w praktyce paroizolacja bywa warstwą zewnętrzną izolacji (lub izolacja z zamkniętą strukturą jest sama paroszczelna). Trzymaj się klucza CKE, ale zapamiętaj nadrzędną zasadę: najpierw próba szczelności, dopiero potem izolacja."
   }
  },
  {
   "n": 35,
   "tytul": "Zasady przy demontażu agregatu",
   "dzial": "BHP i przepisy",
   "tresc": "Podczas demontażu sprężarkowego, hermetycznego agregatu chłodniczego, z którego odessano czynnik chłodniczy R22 oraz olej sprężarkowy, bezwzględnie należy",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "zastosować acetylenowo-tlenowy palnik gazowy.",
    "B": "wykonać najpierw demontaż rurociągów, a następnie sprężarki.",
    "C": "przestrzegać przepisów bhp i ppoż. oraz ochrony przeciwporażeniowej.",
    "D": "pozostawić dalsze czynności firmie serwisowej posiadającej odpowiedni certyfikat."
   },
   "klucz": "C",
   "rozw": {
    "lead": "Słowo „bezwzględnie” oznacza obowiązek obowiązujący zawsze: przy każdej pracy, także przy demontażu opróżnionego agregatu, trzeba przestrzegać przepisów bhp, ppoż. oraz zasad ochrony przeciwporażeniowej (odłączone zasilanie, zabezpieczenie przed ponownym włączeniem).",
    "kroki": [],
    "bledne": {
     "A": "Palnik acetylenowo-tlenowy bywa używany, ale nie jest obowiązkowy – demontaż można wykonać innymi metodami (np. obcinakiem).",
     "B": "Kolejność demontażu nie jest sztywno narzucona – zależy od konstrukcji i procedury.",
     "D": "Certyfikat wymagany jest do odzysku czynnika; czynność odzysku już wykonano, więc dalsze prace mechaniczne nie muszą być zlecane firmie certyfikowanej."
    },
    "pulapka": "R22 to substancja kontrolowana (HCFC): odzysk i likwidację czynnika wykonuje się z certyfikatem, a czynnik oddaje się do regeneracji lub zniszczenia; sam demontaż opróżnionego agregatu tego nie wymaga."
   }
  },
  {
   "n": 36,
   "tytul": "Zawór elektromagnetyczny",
   "dzial": "Elementy i automatyka obiegu",
   "tresc": "Na ilustracji przedstawiono zawór",
   "img": "img/ee15-2022-06/z36.png",
   "img_alt": "Fotografia zaworu elektromagnetycznego z niebieską cewką i wtyczką, z miedzianymi końcówkami do wlutowania.",
   "odp": {
    "A": "kulowy z przyłączami z rury miedzianej do zaciskania.",
    "B": "zwrotny z przyłączami z rury miedzianej do wlutowania.",
    "C": "bezpieczeństwa z przyłączami z rury miedzianej do zaciskania.",
    "D": "elektromagnetyczny z przyłączami z rury miedzianej do wlutowania."
   },
   "klucz": "D",
   "rozw": {
    "lead": "Zawór ma niebieską cewkę elektromagnesu z wtyczką zasilającą na górze oraz mosiężny korpus z końcówkami z rury miedzianej do wlutowania. To zawór elektromagnetyczny (solenoidowy) – otwiera się lub zamyka po podaniu napięcia na cewkę.",
    "kroki": [],
    "bledne": {
     "A": "Zawór kulowy ma ręczne pokrętło lub trzpień i korpus z kulą; nie ma cewki elektromagnesu.",
     "B": "Zawór zwrotny działa samoczynnie, bez cewki i zasilania elektrycznego.",
     "C": "Zawór bezpieczeństwa ma sprężynę i kołnierz lub gwint, a nie cewkę elektryczną; przyłącza miedziane ma tu lutowane, nie zaciskane."
    },
    "pulapka": "Zawór elektromagnetyczny montuje się cewką do góry, z zachowaniem kierunku przepływu oznaczonego strzałką na korpusie; podczas lutowania cewkę zdejmuje się, aby jej nie uszkodzić."
   }
  },
  {
   "n": 37,
   "tytul": "Rozpoznanie lady chłodniczej",
   "dzial": "Materiały i rysunek techniczny",
   "tresc": "Ladę chłodniczą przedstawiono",
   "img": "img/ee15-2022-06/z37.png",
   "img_alt": "Cztery urządzenia: 1 – kontener chłodniczy, 2 – szafa chłodnicza z drzwiami, 3 – przeszklona lada chłodnicza, 4 – pionowa witryna chłodnicza.",
   "odp": {
    "A": "na ilustracji 1.",
    "B": "na ilustracji 2.",
    "C": "na ilustracji 3.",
    "D": "na ilustracji 4."
   },
   "klucz": "C",
   "rozw": {
    "lead": "Lada chłodnicza to niska, pozioma witryna sklepowa z przeszkloną ekspozycją towaru, przy której stoi sprzedawca – widać ją na ilustracji 3.",
    "kroki": [],
    "bledne": {
     "A": "Ilustracja 1 przedstawia kontener chłodniczy (do transportu).",
     "B": "Ilustracja 2 przedstawia szafę chłodniczą z pełnymi drzwiami (gastronomia, przechowywanie).",
     "D": "Ilustracja 4 przedstawia szafę chłodniczą przeszkloną (pionową), a nie ladę."
    },
    "pulapka": "Typy urządzeń chłodniczych w handlu: lada (pozioma, obsługa przez sprzedawcę), witryna (pionowa przeszklona), szafa (drzwi pełne), regał (otwarty), kontener (transport)."
   }
  },
  {
   "n": 38,
   "tytul": "Materiały w instalacjach amoniakalnych",
   "dzial": "Czynniki i F-gazy",
   "tresc": "Podstawowym materiałem konstrukcyjnym w instalacjach chłodniczych zawierających amoniak jest",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "stal.",
    "B": "brąz.",
    "C": "miedź.",
    "D": "mosiądz."
   },
   "klucz": "A",
   "rozw": {
    "lead": "Amoniak R717 w obecności wilgoci tworzy roztwór o odczynie zasadowym, który <b>koroduje miedź i jej stopy</b> (tworzenie kompleksów amoniakalnych Cu). Instalacje NH₃ wykonuje się ze <b>stali węglowej</b> (rury bez szwu, spawane) lub stali nierdzewnej, a uszczelnienia z PTFE i grafitu; elementów z Cu, Zn i Ag w armaturze nie stosuje się.",
    "kroki": [],
    "bledne": {
     "B": "Brąz (Cu-Sn) jest stopem miedzi i ulega korozji amoniakalnej.",
     "C": "Miedź jest standardem dla HFC/HFO i CO₂, ale w instalacjach z NH₃ jest zakazana.",
     "D": "Mosiądz (Cu-Zn) – jak wyżej; zawory z mosiądzu są niedopuszczalne w układach amoniakalnych."
    },
    "pulapka": "Dla wykrywania nieszczelności: NH₃ wykrywa się papierkiem lakmusowym lub zapachem (próg ok. 5 ppm), a HFC – detektorem elektronicznym lub pianką. Amoniak to R717 (B2L), nie R744."
   }
  },
  {
   "n": 39,
   "tytul": "Rozruch silnika gwiazda – trójkąt",
   "dzial": "Elektrotechnika",
   "tresc": "Na schemacie przedstawiono zasilanie i sterowanie silnikiem indukcyjnym trójfazowym w układzie połączeń",
   "img": "img/ee15-2022-06/z39.png",
   "img_alt": "Schemat obwodu głównego z bezpiecznikami F1, stycznikami Q11, Q13, Q15, przekaźnikiem F2 i silnikiem M1 oraz schemat sterowania z przekaźnikiem czasowym K1.",
   "odp": {
    "A": "Dahlandera.",
    "B": "gwiazda – trójkąt.",
    "C": "trójkąt – gwiazda.",
    "D": "gwiazda – podwójna gwiazda."
   },
   "klucz": "B",
   "rozw": {
    "lead": "W obwodzie głównym są trzy styczniki: Q11 (zasilanie), Q13 (zwiera końce uzwojeń – połączenie w gwiazdę) i Q15 (łączy uzwojenia w trójkąt), a w sterowaniu przekaźnik czasowy K1 z blokadą wzajemną Q13/Q15. Silnik rusza w gwiazdę (prąd rozruchowy ok. trzykrotnie mniejszy), a po upływie czasu przełącza się na trójkąt.",
    "kroki": [],
    "bledne": {
     "A": "Układ Dahlandera służy do zmiany liczby par biegunów (dwie prędkości) i wymaga silnika z odczepami uzwojeń; tu przełączenie dotyczy rozruchu i nie zmienia liczby biegunów.",
     "C": "Rozruch zawsze zaczyna się w gwiazdę (mniejszy prąd) i kończy w trójkącie – kolejność odwrotna nie jest stosowana.",
     "D": "Gwiazda – podwójna gwiazda to odmiana przełączania w silniku wielobiegowym (Dahlander), a nie układ rozruchowy."
    },
    "pulapka": "Warunek stosowania: silnik pracujący docelowo w trójkącie (np. 400 V/230 V wg tabliczki, uzwojenia wyprowadzone na 6 zacisków). Rozruch Y–Δ daje także trzykrotnie mniejszy moment rozruchowy, więc nie nadaje się do dużego obciążenia na starcie."
   }
  },
  {
   "n": 40,
   "tytul": "Miejsce montażu czujnika TZR",
   "dzial": "Elementy i automatyka obiegu",
   "tresc": "Właściwe miejsce montażu w instalacji czujnika termostatycznego zaworu rozprężnego oznaczono na ilustracji",
   "img": "img/ee15-2022-06/z40.png",
   "img_alt": "Rysunek parownika z zaworem rozprężnym; litery A, B, C, D wskazują możliwe miejsca montażu czujnika na wężownicy, pionowym i poziomym odcinku rury ssawnej.",
   "odp": {
    "A": "literą A.",
    "B": "literą B.",
    "C": "literą C.",
    "D": "literą D."
   },
   "klucz": "D",
   "rozw": {
    "lead": "Czujnik <span class=\"term\" data-key=\"tzr\">termostatycznego zaworu rozprężnego</span> mierzy temperaturę pary na wylocie z parownika (do wyznaczenia przegrzania), więc montuje się go tuż za parownikiem, na poziomym odcinku rury ssawnej, przed miejscem połączenia przewodu wyrównawczego, w dobrym kontakcie cieplnym z czystą rurą. Taki jest punkt D – na poziomym odcinku bezpośrednio za wylotem z parownika.",
    "kroki": [],
    "bledne": {
     "A": "Punkt A leży na samym parowniku (wężownicy), gdzie czynnik jest jeszcze mieszaniną cieczy i pary, więc czujnik nie zmierzy przegrzania.",
     "B": "Punkt B jest wysoko na pionowym odcinku, za przyłączem przewodu wyrównawczego i daleko od wylotu z parownika – zła lokalizacja.",
     "C": "Punkt C leży na pionowym odcinku rury, gdzie spływający olej i ciecz zniekształcają pomiar; czujnik umieszcza się na poziomym odcinku."
    },
    "pulapka": "Czujnik mocuje się opaską, na rurze oczyszczonej z brudu i izolowanej; na poziomej rurze o małej średnicy montuje się go na górze, a przy większej – ok. godziny 4 lub 8 (nie na dole, gdzie zbiera się olej)."
   }
  }
 ]
};
