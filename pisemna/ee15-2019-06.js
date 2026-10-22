/* Część pisemna – arkusz EE.15-X-19.06 (czerwiec 2019). Dane: pytania CKE + opracowanie rozwiązań. */
(window.ELE04_BANK = window.ELE04_BANK || {})["ee15-2019-06"] = {
 "id": "ee15-2019-06",
 "kwalifikacja": "EE.15",
 "kod": "EE.15-X-19.06",
 "sesja": "czerwiec 2019",
 "pytania": [
  {
   "n": 1,
   "tytul": "Narzędzie do przecinania rur miedzianych",
   "dzial": "Montaż i rurociągi",
   "tresc": "Do przecinania rur miedzianych należy zastosować narzędzie przedstawione na rysunku",
   "img": "img/ee15-2019-06/z01.png",
   "img_alt": "Cztery narzędzia ręczne oznaczone A–D: A – szczypce do ściągania izolacji, B – obcinak rolkowy do rur, C – szczypce tnące boczne, D – giętarka do rur.",
   "odp": {
    "A": "Rysunek A",
    "B": "Rysunek B",
    "C": "Rysunek C",
    "D": "Rysunek D"
   },
   "klucz": "B",
   "rozw": {
    "lead": "Rury miedziane przecina się <b>obcinakiem rolkowym</b> (przecinakiem do rur): rolka tnąca i rolki prowadzące obracane wokół rury, z posuwem śrubowym, dają prostopadłe cięcie bez zgniatania ścianki. Taki przyrząd pokazano na rysunku B.",
    "kroki": [],
    "bledne": {
     "A": "Rysunek A to szczypce do ściągania izolacji z przewodów elektrycznych – nie służą do cięcia rur.",
     "C": "Rysunek C to szczypce tnące boczne do przewodów i drutu – zgniotłyby rurę zamiast ją przeciąć.",
     "D": "Rysunek D to przyrząd do gięcia rur (giętarka z rolkami), a nie do cięcia."
    },
    "pulapka": "Nie używaj piły do metalu ani szlifierki do rur chłodniczych – wióry i opiłki zostają w instalacji. Po cięciu obcinakiem trzeba jeszcze usunąć wewnętrzny zadzior (rozwiertak) przed lutowaniem lub kielichowaniem."
   }
  },
  {
   "n": 2,
   "tytul": "Jednostki ciśnienia",
   "dzial": "Obliczenia",
   "tresc": "Który zbiór jednostek miar zawiera jednostki ciśnienia?",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "{m<sup>3</sup>/kg, kg/m<sup>3</sup>, N∙m}",
    "B": "{rad/s, kg∙m<sup>2</sup>, N/m}",
    "C": "{bar, Pa, N/m<sup>2</sup>}",
    "D": "{lx, lm, cd/m<sup>2</sup>}"
   },
   "klucz": "C",
   "rozw": {
    "lead": "Ciśnienie to siła na jednostkę powierzchni: \\( p = F/A \\), stąd \\( 1\\ \\mathrm{Pa} = 1\\ \\mathrm{N/m^2} \\), a \\( 1\\ \\mathrm{bar} = 10^5\\ \\mathrm{Pa} \\). Tylko zbiór C zawiera wyłącznie jednostki ciśnienia.",
    "kroki": [],
    "bledne": {
     "A": "m³/kg to objętość właściwa, kg/m³ – gęstość, N∙m – praca (energia) lub moment siły.",
     "B": "rad/s to prędkość kątowa, kg∙m² – moment bezwładności, N/m – napięcie powierzchniowe lub sztywność.",
     "D": "lx (luks) to natężenie oświetlenia, lm (lumen) – strumień świetlny, cd/m² – luminancja; to wielkości fotometryczne."
    },
    "pulapka": "Zapamiętaj: 1 bar = 100 kPa = 10<sup>5</sup> Pa. Na manometrach chłodniczych spotkasz też psi, ale w układzie SI ciśnienie zawsze wyrażamy w paskalach (lub bar)."
   }
  },
  {
   "n": 3,
   "tytul": "Zeolity w instalacji chłodniczej",
   "dzial": "Materiały i rysunek techniczny",
   "tresc": "Zeolity to",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "środki nawadniające.",
    "B": "środki odwadniające.",
    "C": "uszczelniacze.",
    "D": "katalizatory."
   },
   "klucz": "B",
   "rozw": {
    "lead": "Zeolity to porowate glinokrzemiany o ogromnej powierzchni wewnętrznej, które pochłaniają wilgoć (adsorbują cząsteczki wody). Są wypełnieniem <span class=\"term\" data-key=\"filtr\">filtrów odwadniaczy</span> w instalacjach chłodniczych, chroniąc układ przed zamarzaniem wody w zaworze rozprężnym i korozją.",
    "kroki": [],
    "bledne": {
     "A": "Zeolity wodę wiążą, a nie dostarczają – jako „środki nawadniające” działałyby odwrotnie do swojej roli w filtrze.",
     "C": "Uszczelniaczami są np. taśmy, pasty, o-ringi i uszczelki; zeolit jest granulatem sorbentu.",
     "D": "Katalizatory przyspieszają reakcje chemiczne, a zeolit w filtrze odwadniaczu działa jako sorbent, nie katalizator."
    },
    "pulapka": "Nasycony wilgocią filtr odwadniacz traci zdolność pochłaniania – po otwarciu układu lub awarii sprężarki trzeba go wymienić na nowy."
   }
  },
  {
   "n": 4,
   "tytul": "Inhibitory w chłodziwach",
   "dzial": "Czynniki i F-gazy",
   "tresc": "Inhibitorami nazywa się substancje dodawane do chłodziw w celu",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "ochrony przed korozją.",
    "B": "ochrony przed przegrzaniem.",
    "C": "zmiany temperatury skraplania.",
    "D": "obniżenia temperatury parowania."
   },
   "klucz": "A",
   "rozw": {
    "lead": "Inhibitory to dodatki spowalniające procesy chemiczne – w chłodziwach (np. wodnych roztworach glikolu w obiegach pośrednich) hamują korozję rur, wymienników i pomp.",
    "kroki": [],
    "bledne": {
     "B": "Przed przegrzaniem chroni odpowiedni dobór układu i zabezpieczenia (np. presostat), a nie inhibitor chemiczny.",
     "C": "Temperaturę skraplania wyznacza ciśnienie w skraplaczu i warunki odbioru ciepła; dodatek inhibitora jej nie zmienia.",
     "D": "Temperaturę krzepnięcia obniża sam glikol; inhibitor służy wyłącznie ochronie przed korozją."
    },
    "pulapka": "Nie myl inhibitorów (hamują korozję) z antyfryzem (glikol – obniża temperaturę krzepnięcia). Zbyt rozcieńczony glikol traci właściwości inhibitujące."
   }
  },
  {
   "n": 5,
   "tytul": "Objętość właściwa gazu",
   "dzial": "Obliczenia",
   "tresc": "Ile wynosi objętość właściwa gazu, jeżeli 5 kg gazu znajduje się w zbiorniku o pojemności 20 l?",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "0,004 kg/m<sup>3</sup>",
    "B": "0,004 m<sup>3</sup>/kg",
    "C": "0,4 m<sup>3</sup>/kg",
    "D": "4 m<sup>3</sup>/kg"
   },
   "klucz": "B",
   "rozw": {
    "lead": "Objętość właściwa to objętość przypadająca na jednostkę masy: \\( v = V/m \\), jednostka m³/kg. Pojemność 20 l trzeba zamienić na m³ (1 l = 0,001 m³).",
    "kroki": [
     [
      "Dane",
      "\\( m = 5\\ \\mathrm{kg},\\ V = 20\\ \\mathrm{l} = 0{,}02\\ \\mathrm{m^3} \\)"
     ],
     [
      "Szukane",
      "\\( v \\) [m³/kg]"
     ],
     [
      "Wzór",
      "\\[ v = \\frac{V}{m} \\]"
     ],
     [
      "Podstawienie",
      "\\( v = \\dfrac{0{,}02\\ \\mathrm{m^3}}{5\\ \\mathrm{kg}} \\)"
     ],
     [
      "Wynik",
      "\\( v = 0{,}004\\ \\mathrm{m^3/kg} \\)"
     ]
    ],
    "bledne": {
     "A": "0,004 kg/m³ ma jednostkę gęstości, a nie objętości właściwej; gęstość tego gazu wynosi \\( 5/0{,}02 = 250\\ \\mathrm{kg/m^3} \\).",
     "C": "0,4 m³/kg to błąd przeliczenia litrów – wynik o rząd wielkości za duży.",
     "D": "4 m³/kg powstaje przy podzieleniu 20 przez 5 bez zamiany litrów na m³ (20 l = 0,02 m³, nie 20 m³) – pomyłka o trzy rzędy wielkości."
    },
    "pulapka": "Zawsze zamień litry na m³ przed podstawieniem: 1 m³ = 1000 l. Objętość właściwa to odwrotność gęstości: \\( v = 1/\\rho \\)."
   }
  },
  {
   "n": 6,
   "tytul": "Sprężanie na wykresie lg p–h",
   "dzial": "Obieg i termodynamika",
   "tresc": "Który odcinek na wykresie obiegu czynnika chłodniczego w układzie chłodniczym odpowiada przebiegowi sprężania?",
   "img": "img/ee15-2019-06/z06.png",
   "img_alt": "Wykres lg p–h z krzywą nasycenia i obiegiem prostokątnym o punktach 1–4: 1 – wylot z parownika, 2 – tłoczenie sprężarki, 3 – wylot ze skraplacza, 4 – za zaworem rozprężnym.",
   "odp": {
    "A": "1-2",
    "B": "2-3",
    "C": "3-4",
    "D": "4-1"
   },
   "klucz": "A",
   "rozw": {
    "lead": "Na <span class=\"term\" data-key=\"logph\">wykresie lg p–h</span> sprężanie w sprężarce to przemiana od niskiego do wysokiego ciśnienia ze wzrostem entalpii, czyli odcinek 1–2: z pary nasyconej suchej (1, wylot z parownika) do pary przegrzanej (2, tłoczenie).",
    "kroki": [],
    "bledne": {
     "B": "Odcinek 2–3 (poziomy, wysokie ciśnienie) to odprowadzanie ciepła w skraplaczu: oziębianie pary przegrzanej i skraplanie.",
     "C": "Odcinek 3–4 (pionowy) to dławienie w zaworze rozprężnym: spadek ciśnienia przy stałej entalpii.",
     "D": "Odcinek 4–1 (poziomy, niskie ciśnienie) to odparowanie czynnika w parowniku, czyli pobieranie ciepła."
    },
    "pulapka": "Zapamiętaj kierunek obiegu: sprężanie (w górę i w prawo), skraplanie (w lewo, górna linia), dławienie (w dół, pionowo), parowanie (w prawo, dolna linia)."
   }
  },
  {
   "n": 7,
   "tytul": "Pobieranie ciepła przez czynnik",
   "dzial": "Obieg i termodynamika",
   "tresc": "Czynnik chłodniczy w sprężarkowym układzie chłodniczym pobiera ciepło podczas",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "sprężania.",
    "B": "skraplania.",
    "C": "kondensacji.",
    "D": "odparowania."
   },
   "klucz": "D",
   "rozw": {
    "lead": "Czynnik pobiera ciepło z chłodzonego otoczenia tylko w <span class=\"term\" data-key=\"parownik\">parowniku</span>, gdzie wrze (odparowuje) w niskiej temperaturze – ciepło parowania pochodzi z chłodzonego medium. W pozostałych fazach obiegu ciepło jest oddawane lub (przy sprężaniu) dostarczana jest praca.",
    "kroki": [],
    "bledne": {
     "A": "Podczas sprężania do czynnika doprowadzana jest praca mechaniczna sprężarki, a nie ciepło z chłodzonego otoczenia.",
     "B": "Podczas skraplania czynnik oddaje ciepło (ciepło skraplania) do wody lub powietrza.",
     "C": "Kondensacja to inna nazwa skraplania – czynnik oddaje ciepło, tak jak w odpowiedzi B."
    },
    "pulapka": "Odpowiedzi B i C opisują to samo zjawisko (skraplanie = kondensacja) – obie są błędne z tego samego powodu."
   }
  },
  {
   "n": 8,
   "tytul": "Czujnik termostatycznego zaworu wodnego",
   "dzial": "Elementy i automatyka obiegu",
   "tresc": "W przedstawionym na rysunku termostatycznym zaworze wodnym czujnik temperatury montuje się na",
   "img": "img/ee15-2019-06/z08.png",
   "img_alt": "Termostatyczny zawór wodny z czujnikiem w postaci miedzianej ampułki połączonej z zaworem długą kapilarą zwiniętą w spiralę.",
   "odp": {
    "A": "wypływie wody ze skraplacza.",
    "B": "wypływie czynnika ze sprężarki.",
    "C": "dopływie czynnika do sprężarki.",
    "D": "dopływie wody do dochładzacza."
   },
   "klucz": "A",
   "rozw": {
    "lead": "Termostatyczny zawór wodny reguluje przepływ wody chłodzącej tak, aby utrzymać stałą temperaturę (a pośrednio ciśnienie skraplania). Jego czujnik umieszcza się na <b>wypływie wody ze skraplacza</b>: gdy woda odpływa zbyt ciepła, zawór otwiera się szerzej i zwiększa przepływ.",
    "kroki": [],
    "bledne": {
     "B": "Czujnik na tłoczeniu sprężarki dotyczyłby temperatury czynnika, a zawór wodny ma regulować temperaturę wody wypływającej.",
     "C": "Na dopływie (ssaniu) sprężarki mierzy się przegrzanie – tam montuje się czujnik zaworu rozprężnego, nie wodnego.",
     "D": "Temperatura wody dopływającej nie informuje o obciążeniu skraplacza i nie jest wielkością regulowaną."
    },
    "pulapka": "Nie myl czujnika zaworu wodnego (woda wypływająca ze <span class=\"term\" data-key=\"skraplacz\">skraplacza</span>) z czujnikiem zaworu rozprężnego (czynnik za parownikiem)."
   }
  },
  {
   "n": 9,
   "tytul": "Demontaż urządzenia a czynnik chłodniczy",
   "dzial": "BHP i przepisy",
   "tresc": "Zgodnie z ustawą o substancjach zubożających warstwę ozonową przy demontażu części urządzenia chłodniczego należy",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "usunąć olej chłodniczy z układu i napełnić układ azotem.",
    "B": "zdemontować również skraplacz i napełnić układ azotem.",
    "C": "uniemożliwić ucieczkę czynnika chłodniczego z układu do atmosfery.",
    "D": "umożliwić odparowanie czynnika chłodniczego z układu do atmosfery."
   },
   "klucz": "C",
   "rozw": {
    "lead": "Czynniki chłodnicze (<span class=\"term\" data-key=\"fgaz\">F-gazy</span>, substancje kontrolowane) nie mogą być wypuszczane do atmosfery. Przed demontażem czynnik odzyskuje się do butli odzyskowej, a podczas prac należy uniemożliwić jego ucieczkę.",
    "kroki": [],
    "bledne": {
     "A": "Samo usunięcie oleju i napełnienie azotem nie zastępuje odzysku czynnika – azot z resztkami czynnika też trafiłby do atmosfery.",
     "B": "Demontaż skraplacza nie jest wymogiem ustawy; wymagane jest zapobieganie emisji, a nie rozbieranie układu.",
     "D": "Celowe wypuszczenie czynnika do atmosfery jest zabronione i zagrożone karą."
    },
    "pulapka": "Arkusz z 2019 r. opiera się na dawnej ustawie o substancjach zubożających warstwę ozonową i rozporządzeniu 517/2014. Obecnie obowiązuje rozporządzenie (UE) 2024/573 oraz krajowa ustawa o substancjach kontrolowanych i F-gazach – zakaz celowej emisji i obowiązek odzysku pozostały."
   }
  },
  {
   "n": 10,
   "tytul": "Po napełnieniu układu chłodzenia wodnego",
   "dzial": "Serwis, napełnianie, szczelność",
   "tresc": "Po napełnieniu układu chłodzenia wodnego skraplacza należy",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "wymienić filtr siatkowy.",
    "B": "odpowietrzyć układ chłodzenia.",
    "C": "uzupełnić olej w układzie chłodzenia.",
    "D": "uzupełnić czynnik chłodniczy w układzie chłodzenia."
   },
   "klucz": "B",
   "rozw": {
    "lead": "Po napełnieniu wodą w obiegu zostają pęcherze powietrza. Zapowietrzenie obniża przepływ i pogarsza wymianę ciepła w <span class=\"term\" data-key=\"skraplacz\">skraplaczu</span>, może też spowodować pracę pompy na sucho. Dlatego układ chłodzenia należy odpowietrzyć (zawory odpowietrzające w najwyższych punktach).",
    "kroki": [],
    "bledne": {
     "A": "Filtr siatkowy wymienia się, gdy jest zanieczyszczony – nie jest to czynność związana z samym napełnieniem.",
     "C": "Olej nie występuje w obiegu wody chłodzącej; olej jest tylko w obiegu czynnika (sprężarka).",
     "D": "Obieg wody chłodzącej jest oddzielony od obiegu czynnika; czynnika chłodniczego się tam nie uzupełnia."
    },
    "pulapka": "Obieg wodny i obieg czynnika chłodniczego to dwa różne układy – nie mieszaj prac serwisowych jednego z drugim."
   }
  },
  {
   "n": 11,
   "tytul": "Połączenie silnika w gwiazdę",
   "dzial": "Elektrotechnika",
   "tresc": "Na którym rysunku przedstawiono połączenie w gwiazdę trójfazowego, klatkowego silnika elektrycznego?",
   "img": "img/ee15-2019-06/z11.png",
   "img_alt": "Cztery schematy tabliczki zaciskowej silnika trójfazowego z zaciskami U1, V1, W1 oraz W2, U2, V2: A – zwora pozioma łącząca dolny rząd zacisków, B – zwory skośne, C – zwora łącząca górny rząd, D – zwory pionowe.",
   "odp": {
    "A": "Rysunek A",
    "B": "Rysunek B",
    "C": "Rysunek C",
    "D": "Rysunek D"
   },
   "klucz": "A",
   "rozw": {
    "lead": "W połączeniu w gwiazdę (Y) końce uzwojeń U2, V2, W2 łączy się ze sobą wspólną zworą (punkt gwiazdowy), a przewody sieci L1, L2, L3 doprowadza się do początków uzwojeń U1, V1, W1. Taki układ pokazano na rysunku A.",
    "kroki": [],
    "bledne": {
     "B": "Zwory skośne łączą U1–V2, V1–W2, W1–U2, co daje inny układ (nie wspólny punkt gwiazdowy) – nie jest to gwiazda.",
     "C": "Zwora łączy ze sobą początki U1, V1, W1, czyli zwiera zaciski fazowe; końce uzwojeń pozostają niepołączone.",
     "D": "Zwory pionowe łączą U1–W2, V1–U2, W1–V2 (każde uzwojenie między dwiema fazami) – to połączenie w trójkąt."
    },
    "pulapka": "Gwiazda: zwora pozioma łącząca końce U2, V2, W2; trójkąt: zwory łączące początek jednego uzwojenia z końcem innego. W gwieździe napięcie na uzwojeniu jest \\( \\sqrt{3} \\) razy mniejsze niż w trójkącie."
   }
  },
  {
   "n": 12,
   "tytul": "Czynnik w urządzeniu absorpcyjnym",
   "dzial": "Czynniki i F-gazy",
   "tresc": "Który czynnik jest stosowany w absorpcyjnym urządzeniu chłodniczym?",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "Nadtlenek wodoru.",
    "B": "Podtlenek azotu.",
    "C": "Propan-butan.",
    "D": "Amoniak."
   },
   "klucz": "D",
   "rozw": {
    "lead": "W absorpcyjnych urządzeniach chłodniczych stosuje się pary robocze: amoniak jako czynnik chłodniczy i wodę jako absorbent (lub wodę i bromek litu, gdzie czynnikiem jest woda). Spośród podanych odpowiedzi tylko amoniak jest czynnikiem tego typu.",
    "kroki": [],
    "bledne": {
     "A": "Nadtlenek wodoru (H₂O₂) to silny utleniacz, nie jest czynnikiem chłodniczym.",
     "B": "Podtlenek azotu (N₂O) to gaz stosowany m.in. w medycynie, a nie czynnik układów absorpcyjnych.",
     "C": "Propan-butan to paliwo gazowe; w układach sprężarkowych stosuje się czysty propan (R290) lub izobutan (R600a), ale nie w absorpcji."
    },
    "pulapka": "Absorpcja: para amoniak–woda (NH₃/H₂O, chłodzenie poniżej 0 °C) oraz woda–bromek litu (H₂O/LiBr, klimatyzacja powyżej 0 °C). W lodówkach absorpcyjnych występuje dodatkowo wodór jako gaz wyrównujący ciśnienia."
   }
  },
  {
   "n": 13,
   "tytul": "Układ sieci TN-S",
   "dzial": "Elektrotechnika",
   "tresc": "Który schemat odpowiada układowi sieci TN-S?",
   "img": "img/ee15-2019-06/z13.png",
   "img_alt": "Cztery schematy sieci trójfazowej: A – z przewodem PEN (TN-C), B – z osobnymi przewodami N i PE (TN-S), C – z uziemieniem odbiornika niezależnym od źródła (TT), D – z impedancją Z w uziemieniu źródła (IT).",
   "odp": {
    "A": "Rysunek A",
    "B": "Rysunek B",
    "C": "Rysunek C",
    "D": "Rysunek D"
   },
   "klucz": "B",
   "rozw": {
    "lead": "W układzie TN-S przewód neutralny N i ochronny PE są prowadzone oddzielnie na całej długości, a PE łączy części przewodzące dostępne z uziemionym punktem neutralnym źródła. Taki układ (przewody L1, L2, L3, N i osobny PE) pokazano na rysunku B.",
    "kroki": [],
    "bledne": {
     "A": "Rysunek A ma jeden wspólny przewód PEN (funkcje N i PE) – to układ TN-C.",
     "C": "Rysunek C ma osobne uziemienie odbiornika, niezależne od uziemienia źródła – to układ TT.",
     "D": "Rysunek D ma punkt neutralny źródła uziemiony przez impedancję Z, a odbiornik z własnym uziemieniem – to układ IT."
    },
    "pulapka": "Zapamiętaj: pierwsza litera – uziemienie źródła (T – uziemione, I – izolowane lub przez impedancję), druga – odbiornik (T – własne uziemienie, N – połączony z punktem zerowym źródła). W TN-C-S przewód PEN rozdziela się na N i PE."
   }
  },
  {
   "n": 14,
   "tytul": "Gazowa metoda opróżniania instalacji",
   "dzial": "Serwis, napełnianie, szczelność",
   "tresc": "Gazowa metoda opróżniania instalacji chłodniczej polega na zasysaniu przez sprężarkę czynnika z instalacji w postaci",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "pary i przetłaczaniu go do butli poprzez skraplacz.",
    "B": "cieczy i przetłaczaniu go do butli poprzez skraplacz.",
    "C": "pary i przetłaczaniu go do butli poprzez parownik (parowacz).",
    "D": "cieczy i przetłaczaniu go do butli poprzez parownik (parowacz)."
   },
   "klucz": "A",
   "rozw": {
    "lead": "W metodzie gazowej (parowej) sprężarka lub stacja odzysku zasysa czynnik w postaci pary, spręża go i kieruje przez <span class=\"term\" data-key=\"skraplacz\">skraplacz</span>, gdzie się skrapla i trafia do butli odzyskowej. Metoda ciekła natomiast polega na wytłaczaniu cieczy.",
    "kroki": [],
    "bledne": {
     "B": "Zasysanie cieczy przez sprężarkę prowadziłoby do uderzenia hydraulicznego – to sprzeczne z definicją metody gazowej.",
     "C": "Przetłaczanie przez parownik nie ma sensu – parę skrapla się w skraplaczu (parownik pracuje przy niskim ciśnieniu).",
     "D": "Obie części są błędne: ciecz nie jest zasysana sprężarką, a parownik nie służy do skraplania."
    },
    "pulapka": "Metoda gazowa jest wolniejsza od ciekłej, ale bezpieczniejsza dla sprężarki; często stosuje się obie kolejno – najpierw ciecz, potem resztki pary."
   }
  },
  {
   "n": 15,
   "tytul": "Wyłącznik różnicowo-prądowy",
   "dzial": "Elektrotechnika",
   "tresc": "Na rysunku przedstawiono",
   "img": "img/ee15-2019-06/z15.png",
   "img_alt": "Dwubiegunowy wyłącznik różnicowoprądowy w obudowie modułowej z żółtym przyciskiem TEST, dźwignią i oznaczeniem CFI6-25/2/003, I_Δn = 0,03 A.",
   "odp": {
    "A": "przekaźnik czasowy.",
    "B": "wyłącznik silnikowy.",
    "C": "stycznik jednofazowy.",
    "D": "wyłącznik różnicowo-prądowy."
   },
   "klucz": "D",
   "rozw": {
    "lead": "Na rysunku widać dwubiegunowy aparat modułowy z żółtym przyciskiem TEST, dźwignią i opisem I<sub>Δn</sub> = 0,03 A, czyli prądem różnicowym 30 mA – to <b>wyłącznik różnicowoprądowy</b>. Przycisk TEST służy do sprawdzenia działania wyzwalacza.",
    "kroki": [],
    "bledne": {
     "A": "Przekaźnik czasowy ma pokrętło nastawy czasu i styki przekaźnika; nie ma przycisku TEST ani oznaczenia prądu różnicowego.",
     "B": "Wyłącznik silnikowy ma pokrętło nastawy prądu zadziałania, a nie przycisk TEST z oznaczeniem I<sub>Δn</sub>.",
     "C": "Stycznik ma cewkę sterującą i styki główne, a nie dźwignię z przyciskiem TEST i prądem różnicowym."
    },
    "pulapka": "Przycisk TEST i oznaczenie I<sub>Δn</sub> (np. 30 mA) to cechy charakterystyczne RCD. Wyłącznik różnicowoprądowy chroni przed porażeniem, ale sam nie chroni przed zwarciem ani przeciążeniem."
   }
  },
  {
   "n": 16,
   "tytul": "Odbiór ciepła od produktów w komorze",
   "dzial": "Obieg i termodynamika",
   "tresc": "W sprężarkowym układzie chłodniczym ciepło oddawane przez produkty zgromadzone w komorze chłodniczej pochłaniane jest przez",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "mieszaninę wody i amoniaku przepływającą przez skraplacz.",
    "B": "czynnik chłodniczy przepływający przez parownik.",
    "C": "powietrze schładzające skraplacz.",
    "D": "wodę schładzającą parownik."
   },
   "klucz": "B",
   "rozw": {
    "lead": "Ciepło z komory przejmuje powietrze, które oddaje je czynnikowi chłodniczemu wrzącemu w <span class=\"term\" data-key=\"parownik\">parowniku</span>. Czynnik odparowuje, pochłaniając ciepło parowania, a następnie transportuje je do skraplacza.",
    "kroki": [],
    "bledne": {
     "A": "Mieszanina wody i amoniaku dotyczy układów absorpcyjnych, nie sprężarkowych; poza tym przepływ przez skraplacz oznacza oddawanie ciepła.",
     "C": "Powietrze chłodzące skraplacz odbiera ciepło od czynnika w skraplaczu, a nie od produktów w komorze.",
     "D": "W typowym układzie sprężarkowym parownik jest chłodzony wrzącym czynnikiem, a nie wodą."
    },
    "pulapka": "Ciepło z komory odbiera parownik, a oddaje skraplacz – to dwie różne funkcje; skraplacz oddaje przy tym także ciepło odpowiadające pracy sprężania."
   }
  },
  {
   "n": 17,
   "tytul": "Ciepło do schłodzenia wody",
   "dzial": "Obliczenia",
   "tresc": "Ile ciepła należy odprowadzić z 1 tony wody w celu obniżenia jej temperatury z 25°C do 5°C, jeżeli ciepło właściwe wynosi c = 4,2 kJ/kgK?",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "84 kJ",
    "B": "840 kJ",
    "C": "84 MJ",
    "D": "8,4 MJ"
   },
   "klucz": "C",
   "rozw": {
    "lead": "Ciepło odprowadzone z ochładzanej cieczy (bez zmiany stanu skupienia) wynosi \\( Q = m\\,c\\,\\Delta t \\). Masa 1 t to 1000 kg, a spadek temperatury to 20 K.",
    "kroki": [
     [
      "Dane",
      "\\( m = 1\\ \\mathrm{t} = 1000\\ \\mathrm{kg},\\ c = 4{,}2\\ \\mathrm{kJ/(kg\\cdot K)},\\ t_1 = 25\\ ^\\circ\\mathrm{C},\\ t_2 = 5\\ ^\\circ\\mathrm{C} \\)"
     ],
     [
      "Szukane",
      "\\( Q \\)"
     ],
     [
      "Wzór",
      "\\[ Q = m\\cdot c\\cdot (t_1 - t_2) \\]"
     ],
     [
      "Podstawienie",
      "\\( Q = 1000\\ \\mathrm{kg}\\cdot 4{,}2\\ \\tfrac{\\mathrm{kJ}}{\\mathrm{kg\\cdot K}}\\cdot (25-5)\\ \\mathrm{K} \\)"
     ],
     [
      "Wynik",
      "\\( Q = 84\\,000\\ \\mathrm{kJ} = 84\\ \\mathrm{MJ} \\)"
     ]
    ],
    "bledne": {
     "A": "84 kJ to wynik dla masy 1 kg (4,2·20 = 84 kJ) – pominięto, że woda ma 1000 kg.",
     "B": "840 kJ wynika z błędu o rząd wielkości, np. masa 10 kg zamiast 1000 kg.",
     "D": "8,4 MJ to błąd o rząd wielkości – masa 100 kg zamiast 1000 kg lub różnica temperatur 2 K zamiast 20 K."
    },
    "pulapka": "Przelicz jednostki: 84 000 kJ = 84 MJ (1 MJ = 1000 kJ). Różnica temperatur w °C jest równa różnicy w K."
   }
  },
  {
   "n": 18,
   "tytul": "Substancja lżejsza od powietrza i toksyczna",
   "dzial": "Czynniki i F-gazy",
   "tresc": "Która substancja w stanie pary jest lżejsza od powietrza, ma charakterystyczny drażniący zapach i jest toksyczna?",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "Butan.",
    "B": "Propan.",
    "C": "Amoniak.",
    "D": "Dwutlenek węgla."
   },
   "klucz": "C",
   "rozw": {
    "lead": "Amoniak (NH₃, R717) ma masę molową 17 g/mol, mniejszą niż powietrze (ok. 29 g/mol), więc jego pary są lżejsze od powietrza. Ma ostry, duszący zapach i jest toksyczny (klasa bezpieczeństwa B2L).",
    "kroki": [],
    "bledne": {
     "A": "Butan jest cięższy od powietrza (58 g/mol), prawie bezwonny i palny, a nie toksyczny.",
     "B": "Propan jest cięższy od powietrza (44 g/mol) i palny; gromadzi się przy podłodze.",
     "D": "Dwutlenek węgla (44 g/mol) jest cięższy od powietrza, bezwonny i niepalny; dusi przez wypieranie tlenu."
    },
    "pulapka": "Zapamiętaj: amoniak jest lżejszy od powietrza (ulatnia się ku górze), a propan, butan i CO₂ gromadzą się nisko – to wpływa na rozmieszczenie czujników gazu."
   }
  },
  {
   "n": 19,
   "tytul": "Właściwości izolacji chłodniczej",
   "dzial": "Materiały i rysunek techniczny",
   "tresc": "Wskaż wymagane właściwości materiałów izolacyjnych stosowanych w chłodnictwie.",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "Nasiąkliwość, odporność na działanie czynników zewnętrznych, mały współczynnik przewodzenia ciepła",
    "B": "Nienasiąkliwość, odporność na działanie czynników zewnętrznych, mały współczynnik przewodzenia ciepła",
    "C": "Nasiąkliwość, odporność na działanie czynników zewnętrznych, duży współczynnik przewodzenia ciepła",
    "D": "Nienasiąkliwość, odporność na działanie czynników zewnętrznych, duży współczynnik przewodzenia ciepła"
   },
   "klucz": "B",
   "rozw": {
    "lead": "Dobra izolacja chłodnicza musi mieć <b>mały współczynnik przewodzenia ciepła</b> \\( \\lambda \\) (żeby ograniczać dopływ ciepła) oraz być <b>nienasiąkliwa</b> (wilgoć znacznie zwiększa \\( \\lambda \\) i niszczy izolację) i odporna na czynniki zewnętrzne.",
    "kroki": [],
    "bledne": {
     "A": "Nasiąkliwość jest wadą izolacji – zawilgocona izolacja traci właściwości.",
     "C": "Obie cechy są niekorzystne: nasiąkliwość i duży współczynnik przewodzenia ciepła.",
     "D": "Duży współczynnik przewodzenia ciepła oznacza słabą izolację – wymagany jest współczynnik mały."
    },
    "pulapka": "Zawilgocenie izolacji to najczęstsza przyczyna jej degradacji; dlatego stosuje się paroizolację od strony ciepłej."
   }
  },
  {
   "n": 20,
   "tytul": "Połączenia rozłączne w instalacji",
   "dzial": "Montaż i rurociągi",
   "tresc": "Połączenia rozłączne w układach chłodniczych powinny być stosowane",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "dla wszystkich połączeń elementów.",
    "B": "w miejscach uzasadnionych technologicznie.",
    "C": "w miejscach występowania zwiększonych drgań.",
    "D": "w przypadkach wrażliwych na nieszczelność układu."
   },
   "klucz": "B",
   "rozw": {
    "lead": "Połączenia rozłączne (kołnierzowe, gwintowe, kielichowe) są najbardziej narażone na nieszczelność, dlatego stosuje się je tylko tam, gdzie jest to technologicznie uzasadnione: przy armaturze, aparatach wymagających demontażu, przyrządach pomiarowych. Wszędzie indziej powinny być połączenia nierozłączne (lutowane, spawane).",
    "kroki": [],
    "bledne": {
     "A": "Połączenia rozłączne wszędzie zwiększałyby ryzyko wycieków i emisji czynnika.",
     "C": "Przy drganiach luzują się połączenia gwintowe – tam stosuje się elastyczne kompensatory z połączeniami lutowanymi.",
     "D": "W miejscach wrażliwych na nieszczelność należy unikać połączeń rozłącznych, a nie je stosować."
    },
    "pulapka": "Zasada: jak najmniej połączeń rozłącznych. Przepisy o F-gazach wymagają kontroli szczelności, a każde połączenie rozłączne zwiększa ryzyko wycieku."
   }
  },
  {
   "n": 21,
   "tytul": "Funkcja pompy ciepła",
   "dzial": "Obieg i termodynamika",
   "tresc": "Pompa ciepła umożliwia",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "transportowanie ciepłej wody na niższe kondygnacje budynku.",
    "B": "pompowanie ciepłej wody na wyższe kondygnacje budynku.",
    "C": "doprowadzanie ciepła do dolnego źródła ciepła.",
    "D": "przekazywanie ciepła do górnego źródła ciepła."
   },
   "klucz": "D",
   "rozw": {
    "lead": "Pompa ciepła, pracując jak urządzenie chłodnicze, pobiera ciepło z dolnego źródła (np. gruntu, powietrza, wody) o niskiej temperaturze i dzięki pracy sprężarki przekazuje je do górnego źródła o wyższej temperaturze (instalacja grzewcza budynku).",
    "kroki": [],
    "bledne": {
     "A": "Pompa ciepła nie jest urządzeniem do transportu wody w pionie.",
     "B": "Pompowanie wody na wyższe kondygnacje to zadanie pompy hydraulicznej (obiegowej), a nie pompy ciepła.",
     "C": "Ciepło jest pobierane z dolnego źródła, a nie do niego doprowadzane."
    },
    "pulapka": "Nazwa „pompa” oznacza podnoszenie ciepła na wyższy poziom temperatury, a nie pompowanie cieczy. Efektywność opisuje <span class=\"term\" data-key=\"cop\">COP</span> – stosunek ciepła użytecznego do pracy sprężarki."
   }
  },
  {
   "n": 22,
   "tytul": "Wykluczona przyczyna wysokiego ciśnienia skraplania",
   "dzial": "Pomiary i diagnostyka",
   "tresc": "Którą z podanych nieprawidłowości eksploatacyjnych należy wykluczyć jako przyczynę występowania zbyt wysokiego ciśnienia czynnika chłodniczego w skraplaczu chłodzonym wodą?",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "Zanieczyszczenie powierzchni skraplacza.",
    "B": "Niedobór czynnika chłodniczego w instalacji.",
    "C": "Zapowietrzenie czynnika chłodniczego w instalacji.",
    "D": "Zapowietrzenie pompy w obiegu chłodzenia skraplacza."
   },
   "klucz": "B",
   "rozw": {
    "lead": "Zbyt wysokie ciśnienie w <span class=\"term\" data-key=\"skraplacz\">skraplaczu</span> powstaje, gdy ciepło nie jest dostatecznie odbierane (zanieczyszczenie, mały przepływ wody) lub gdy w układzie są gazy niekondensujące (powietrze). <b>Niedobór czynnika</b> daje skutek przeciwny: niskie ciśnienie ssania i skraplania, więc tę przyczynę należy wykluczyć.",
    "kroki": [],
    "bledne": {
     "A": "Osad i kamień pogarszają wymianę ciepła, więc rośnie temperatura i ciśnienie skraplania – to możliwa przyczyna.",
     "C": "Powietrze w czynniku (gaz niekondensujący) zwiększa ciśnienie całkowite w skraplaczu – to możliwa przyczyna.",
     "D": "Zapowietrzona pompa daje zmniejszony przepływ wody, a więc gorsze chłodzenie i wzrost ciśnienia – to możliwa przyczyna."
    },
    "pulapka": "W pytaniach „wykluczyć” szukaj odpowiedzi o skutku przeciwnym: niedobór czynnika daje ciśnienia zbyt niskie, nie wysokie."
   }
  },
  {
   "n": 23,
   "tytul": "Szron na skrzyni korbowej sprężarki",
   "dzial": "Pomiary i diagnostyka",
   "tresc": "Przyczyną pokrywania się szronem skrzyni korbowej sprężarki jest",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "tłoczenie wody.",
    "B": "zasysanie wody.",
    "C": "zasysanie ciekłego czynnika.",
    "D": "tłoczenie czynnika gazowego."
   },
   "klucz": "C",
   "rozw": {
    "lead": "Ciekły czynnik zassany do sprężarki (np. przy zbyt małym przegrzaniu lub nadmiernym zasilaniu parownika) odparowuje w karterze, odbiera ciepło i schładza obudowę poniżej 0 °C, wskutek czego skrzynia korbowa pokrywa się szronem. Zjawisko grozi uderzeniem hydraulicznym i rozcieńczeniem oleju.",
    "kroki": [],
    "bledne": {
     "A": "Sprężarka chłodnicza nie tłoczy wody – to nie jest zjawisko występujące w układzie czynnika.",
     "B": "W obiegu czynnika nie ma wody w ilościach powodujących szron; wilgoć objawia się raczej zamarzaniem zaworu rozprężnego.",
     "D": "Tłoczenie gazowego czynnika (gorącego) nagrzewa głowicę, a nie wychładza karter."
    },
    "pulapka": "Szron na karterze to sygnał „mokrego” zasysania – sprawdź przegrzanie na ssaniu i nastawę zaworu rozprężnego (<span class=\"term\" data-key=\"sh\">przegrzanie</span>)."
   }
  },
  {
   "n": 24,
   "tytul": "Zadanie presostatu różnicowego",
   "dzial": "Elementy i automatyka obiegu",
   "tresc": "Zadaniem presostatu różnicowego jest ochrona przed",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "przepełnieniem zbiornika.",
    "B": "przegrzaniem skraplacza.",
    "C": "przeciążeniem sprężarki.",
    "D": "zalaniem parownika."
   },
   "klucz": "C",
   "rozw": {
    "lead": "<span class=\"term\" data-key=\"presostat\">Presostat różnicowy</span> mierzy różnicę ciśnień – w sprężarkach chłodniczych kontroluje różnicę ciśnienia oleju (tłoczenie pompy oleju minus ciśnienie w karterze). Gdy różnica spadnie, wyłącza sprężarkę, chroniąc ją przed uszkodzeniem; według klucza CKE – przed przeciążeniem sprężarki.",
    "kroki": [],
    "bledne": {
     "A": "Przed przepełnieniem zbiornika chronią czujniki poziomu lub zawory bezpieczeństwa.",
     "B": "Przed przegrzaniem skraplacza (zbyt wysokim ciśnieniem) chroni presostat wysokiego ciśnienia HP.",
     "D": "Zalaniu parownika zapobiega zawór rozprężny lub układ regulacji poziomu cieczy, a nie presostat różnicowy."
    },
    "pulapka": "Klucz CKE mówi o ochronie sprężarki, choć ściślej presostat różnicowy oleju chroni przed awarią smarowania (zbyt niskie ciśnienie oleju). Nie myl go z presostatem LP/HP."
   }
  },
  {
   "n": 25,
   "tytul": "Mocowanie czujnika zaworu rozprężnego",
   "dzial": "Elementy i automatyka obiegu",
   "tresc": "Który rysunek przedstawia prawidłowy sposób zamocowania czujnika termostatycznego zaworu rozprężnego?",
   "img": "img/ee15-2019-06/z25.png",
   "img_alt": "Cztery rysunki sposobów mocowania czujnika zaworu rozprężnego na rurze: A – na rurze pionowej z przepływem w dół, B – na rurze poziomej od góry, C – ukośnie na rurze pionowej, D – na rurze pionowej z przepływem w górę.",
   "odp": {
    "A": "Rysunek A",
    "B": "Rysunek B",
    "C": "Rysunek C",
    "D": "Rysunek D"
   },
   "klucz": "B",
   "rozw": {
    "lead": "Czujnik <span class=\"term\" data-key=\"tzr\">termostatycznego zaworu rozprężnego</span> mocuje się na poziomym odcinku rury ssawnej, tuż za parownikiem, od góry (dla małych średnic), opaską zapewniającą dobry styk cieplny z rurą. Tylko na rysunku B czujnik leży na poziomej rurze, a kapilara jest odprowadzona w bok.",
    "kroki": [],
    "bledne": {
     "A": "Czujnik zamocowany na pionowym odcinku rury (przepływ w dół) – nieprawidłowe miejsce, zaburzony pomiar temperatury.",
     "C": "Czujnik zamocowany ukośnie na pionowym fragmencie rury – zły styk cieplny i nieprawidłowe położenie.",
     "D": "Czujnik na pionowym odcinku z przepływem w górę – niewłaściwe miejsce montażu, pomiar przegrzania nie jest wiarygodny."
    },
    "pulapka": "Zasada praktyczna: czujnik na poziomym odcinku ssawnym za parownikiem, na czystej rurze i zaizolowany. Przy rurach o średnicy powyżej ok. 22 mm montuje się go z boku (godz. 4 lub 8), a nie na samym spodzie."
   }
  },
  {
   "n": 26,
   "tytul": "Obliczenie przegrzania czynnika",
   "dzial": "Obliczenia",
   "tresc": "Ile wynosi wartość przegrzania czynnika chłodniczego, jeżeli temperatura w parowniku jest równa –3°C, a w miejscu zamocowania czujnika +2°C.",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "–1,5 K",
    "B": "–2,0 K",
    "C": "3,0 K",
    "D": "5,0 K"
   },
   "klucz": "D",
   "rozw": {
    "lead": "<span class=\"term\" data-key=\"sh\">Przegrzanie</span> to różnica między temperaturą pary w miejscu czujnika a temperaturą parowania (nasycenia): \\( \\Delta T_{sh} = t_{cz} - t_0 \\).",
    "kroki": [
     [
      "Dane",
      "\\( t_0 = -3\\ ^\\circ\\mathrm{C},\\ t_{cz} = +2\\ ^\\circ\\mathrm{C} \\)"
     ],
     [
      "Szukane",
      "\\( \\Delta T_{sh} \\) [K]"
     ],
     [
      "Wzór",
      "\\[ \\Delta T_{sh} = t_{cz} - t_0 \\]"
     ],
     [
      "Podstawienie",
      "\\( \\Delta T_{sh} = 2 - (-3) \\)"
     ],
     [
      "Wynik",
      "\\( \\Delta T_{sh} = 5{,}0\\ \\mathrm{K} \\)"
     ]
    ],
    "bledne": {
     "A": "–1,5 K nie wynika z żadnego poprawnego podstawienia; przegrzanie nie może być ujemne, gdy czujnik jest cieplejszy od temperatury parowania.",
     "B": "–2,0 K to temperatura czujnika ze zmienionym znakiem, a nie różnica temperatur.",
     "C": "3,0 K to wartość bezwzględna temperatury parowania – uwzględniono tylko jedną temperaturę zamiast różnicy 2 − (−3)."
    },
    "pulapka": "Uważaj na znaki: odejmowanie liczby ujemnej to dodawanie: 2 − (−3) = 5 K. Typowe przegrzanie robocze to ok. 5–8 K."
   }
  },
  {
   "n": 27,
   "tytul": "Postępowanie po zadziałaniu presostatu HP",
   "dzial": "Serwis, napełnianie, szczelność",
   "tresc": "Wskaż prawidłową kolejność czynności wykonywanych po wystąpieniu awarii agregatu chłodniczego, jeżeli na skutek awarii nastąpiło zadziałanie presostatu wysokiego ciśnienia i jego zablokowanie.",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "Odblokowanie presostatu → uruchomienie urządzenia → zmniejszenie natężenia przepływu wody chłodzącej skraplacz → kontrolowanie działania urządzenia.",
    "B": "Zwiększenie nastawy wyzwalania presostatu → odblokowanie presostatu → uruchomienie urządzenia → kontrolowanie działania urządzenia.",
    "C": "Odblokowanie presostatu → uruchomienie urządzenia → usunięcie przyczyny awarii → kontrolowanie działania urządzenia.",
    "D": "Usunięcie przyczyny awarii → odblokowanie presostatu → uruchomienie urządzenia → kontrolowanie działania urządzenia."
   },
   "klucz": "D",
   "rozw": {
    "lead": "<span class=\"term\" data-key=\"presostat\">Presostat wysokiego ciśnienia</span> zadziałał, bo ciśnienie skraplania było niebezpiecznie wysokie. Najpierw trzeba <b>usunąć przyczynę</b> (np. brak wody, zabrudzony skraplacz), dopiero potem odblokować presostat, uruchomić urządzenie i skontrolować pracę.",
    "kroki": [],
    "bledne": {
     "A": "Odblokowanie i uruchomienie bez usunięcia przyczyny spowoduje ponowne zadziałanie; zmniejszenie przepływu wody chłodzącej dodatkowo pogorszyłoby chłodzenie skraplacza.",
     "B": "Zwiększanie nastawy presostatu to obchodzenie zabezpieczenia – grozi wzrostem ciśnienia ponad dopuszczalne; jest niedopuszczalne.",
     "C": "Usunięcie przyczyny po uruchomieniu to zła kolejność – urządzenie pracowałoby z usterką, która spowodowała awarię."
    },
    "pulapka": "Zabezpieczeń (HP, LP) nigdy nie wolno przestawiać ani mostkować, żeby „zmusić” urządzenie do pracy. Zawsze: diagnoza i usunięcie przyczyny, potem reset."
   }
  },
  {
   "n": 28,
   "tytul": "Równomierny szron na parowniku",
   "dzial": "Pomiary i diagnostyka",
   "tresc": "Równomierne pokrywanie się parownika (parowacza) warstwą szronu świadczy",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "o awarii sprężarki chłodniczej.",
    "B": "o prawidłowej pracy parownika.",
    "C": "o uszkodzeniu zaworu termostatycznego.",
    "D": "o prawidłowej pracy presostatu różnicowego."
   },
   "klucz": "B",
   "rozw": {
    "lead": "Równomierna warstwa szronu na całej powierzchni <span class=\"term\" data-key=\"parownik\">parownika</span> oznacza, że czynnik odparowuje w całym wymienniku, a powierzchnia ma temperaturę poniżej 0 °C – parownik pracuje prawidłowo. Szron trzeba okresowo usuwać przez odszranianie.",
    "kroki": [],
    "bledne": {
     "A": "Awaria sprężarki objawia się brakiem lub zmniejszoną wydajnością, a nie równomiernym szronieniem.",
     "C": "Uszkodzony zawór termostatyczny dawałby nierównomierne pokrycie (np. szron tylko na początku parownika) lub zalanie.",
     "D": "Presostat różnicowy dotyczy ciśnienia oleju i nie ma związku z wyglądem szronu na parowniku."
    },
    "pulapka": "Nierównomierny szron (tylko część parownika) świadczy o niedoborze czynnika lub złym działaniu zaworu rozprężnego; zbyt gruba warstwa – o konieczności odszraniania."
   }
  },
  {
   "n": 29,
   "tytul": "Kolejność lutowania twardego",
   "dzial": "Montaż i rurociągi",
   "tresc": "Czynności podczas lutowania twardego elementów miedzianych należy wykonywać w kolejności:",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "wygładzenie powierzchni łączonych elementów → wybranie odpowiedniego spoiwa → podgrzanie miejsc łączenia do temperatury około 300°C → ustawienie spoiwa w szczelinie między łączonymi elementami.",
    "B": "oczyszczenie powierzchni łączonych elementów → wybranie odpowiedniej elektrody → podgrzanie miejsc łączenia do temperatury około 750°C → chłodzenie spoiwa w szczelinie między łączonymi elementami.",
    "C": "wygładzenie powierzchni łączonych elementów → wybranie odpowiedniej elektrody → podgrzanie miejsc łączenia do temperatury około 232°C → chłodzenie spoiwa w szczelinie między łączonymi elementami.",
    "D": "oczyszczenie powierzchni łączonych elementów → wybranie odpowiedniego spoiwa → podgrzanie miejsc łączenia do temperatury około 750°C → ustawienie spoiwa w szczelinie między łączonymi elementami."
   },
   "klucz": "D",
   "rozw": {
    "lead": "<span class=\"term\" data-key=\"lut\">Lutowanie twarde</span> miedzi: oczyszczenie powierzchni, dobór spoiwa (lutu), nagrzanie miejsca łączenia do ok. 750 °C (powyżej 450 °C – umownej granicy lutowania twardego), a następnie wprowadzenie spoiwa w szczelinę, w którą wpływa kapilarnie.",
    "kroki": [],
    "bledne": {
     "A": "Temperatura 300 °C jest za niska na lutowanie twarde (to zakres lutowania miękkiego); poza tym wygładzanie powierzchni nie zastępuje ich oczyszczenia.",
     "B": "Elektroda dotyczy spawania łukowego, a nie lutowania; „chłodzenie spoiwa” nie jest etapem przed wprowadzeniem spoiwa.",
     "C": "Elektroda i temperatura 232 °C (topnienie cyny, lutowanie miękkie) są właściwe dla innej metody, nie dla lutowania twardego."
    },
    "pulapka": "Granica między lutowaniem miękkim a twardym to 450 °C. W instalacjach chłodniczych stosuje się lutowanie twarde, najlepiej z przepływem azotu przez rurę (przeciw zgorzelinie)."
   }
  },
  {
   "n": 30,
   "tytul": "Cel stosowania topnika",
   "dzial": "Montaż i rurociągi",
   "tresc": "Jaki jest cel stosowania topnika podczas lutowania twardego elementów instalacji chłodniczej?",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "Ochrona powierzchni przed działaniem powietrza, usunięcie istniejących tlenków i zapobieganie ich tworzeniu się.",
    "B": "Doprowadzenie powietrza do łączonych powierzchni, nadanie tym powierzchniom gładkości i ich natłuszczenie.",
    "C": "Ochrona powierzchni elementów przed zanieczyszczeniami i utworzenie cienkiej warstwy tlenków na powierzchni.",
    "D": "Doprowadzenie powietrza do łączonych powierzchni, ich natlenienie oraz wytworzenie tlenków na tych powierzchniach."
   },
   "klucz": "A",
   "rozw": {
    "lead": "Topnik rozpuszcza istniejące tlenki, osłania nagrzewane powierzchnie przed dostępem powietrza i zapobiega tworzeniu się nowych tlenków, dzięki czemu lut dobrze zwilża metal i wnika w szczelinę. (Przy łączeniu miedzi z miedzią lutem fosforowym topnik zwykle nie jest potrzebny.)",
    "kroki": [],
    "bledne": {
     "B": "Topnik nie doprowadza powietrza ani nie natłuszcza powierzchni – tłuszcz utrudniałby lutowanie.",
     "C": "Tworzenie warstwy tlenków jest zjawiskiem niepożądanym, bo tlenki uniemożliwiają zwilżanie powierzchni lutem.",
     "D": "Natlenianie powierzchni i wytwarzanie tlenków to dokładne przeciwieństwo roli topnika."
    },
    "pulapka": "Resztki topnika wewnątrz rury zanieczyszczają układ i mogą powodować korozję – nanoś go oszczędnie i po lutowaniu usuń z zewnątrz. Luty miedź–miedź z fosforem (np. CuP) są samotopnikowe."
   }
  },
  {
   "n": 31,
   "tytul": "Skrót EER",
   "dzial": "Elementy i automatyka obiegu",
   "tresc": "W dokumentacji technicznej urządzenia chłodniczego skrót EER oznacza współczynnik efektywności energetycznej",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "wymiennika ciepła.",
    "B": "zaworu rozprężnego.",
    "C": "grzewczej całego urządzenia.",
    "D": "chłodniczej całego urządzenia."
   },
   "klucz": "D",
   "rozw": {
    "lead": "<span class=\"term\" data-key=\"eer\">EER</span> (Energy Efficiency Ratio) to stosunek mocy chłodniczej urządzenia do pobranej mocy elektrycznej: \\( EER = \\dfrac{\\dot Q_0}{P_{el}} \\). Opisuje efektywność energetyczną całego urządzenia w trybie chłodzenia.",
    "kroki": [],
    "bledne": {
     "A": "EER odnosi się do całego urządzenia, nie do pojedynczego wymiennika ciepła.",
     "B": "Zawór rozprężny jest elementem regulacji, a nie maszyną pobierającą energię – nie ma współczynnika EER.",
     "C": "Efektywność grzewczą całego urządzenia opisuje współczynnik <span class=\"term\" data-key=\"cop\">COP</span>, a nie EER."
    },
    "pulapka": "EER = chłodzenie, COP = grzanie. Dla całego sezonu używa się SEER i SCOP."
   }
  },
  {
   "n": 32,
   "tytul": "Przegląd dochładzacza cieczy",
   "dzial": "Serwis, napełnianie, szczelność",
   "tresc": "Podczas przeglądu dochładzacza cieczy czynnika chłodniczego zawsze należy sprawdzić",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "temperaturę parowania czynnika chłodniczego i przepływ wody chłodzącej.",
    "B": "temperaturę parowania i przegrzanie par czynnika chłodniczego.",
    "C": "szczelność połączeń i przegrzanie par czynnika chłodniczego.",
    "D": "szczelności połączeń i przepływ wody chłodzącej."
   },
   "klucz": "D",
   "rozw": {
    "lead": "Dochładzacz cieczy to wymiennik (zwykle chłodzony wodą), w którym ciekły czynnik jest dochładzany poniżej temperatury skraplania (<span class=\"term\" data-key=\"sc\">dochłodzenie</span>). Podczas przeglądu zawsze sprawdza się szczelność połączeń oraz przepływ wody chłodzącej, bo od niego zależy skuteczność dochłodzenia.",
    "kroki": [],
    "bledne": {
     "A": "Temperatura parowania dotyczy parownika, a nie dochładzacza cieczy po stronie wysokiego ciśnienia.",
     "B": "Parowanie i przegrzanie dotyczą strony niskiego ciśnienia (parownika), nie dochładzacza.",
     "C": "Przegrzanie par jest parametrem parownika i ssania; w dochładzaczu czynnik jest ciekły."
    },
    "pulapka": "Dochładzacz pracuje po stronie cieczy (wysokie ciśnienie): liczy się szczelność i odbiór ciepła (woda), a nie parametry parownika."
   }
  },
  {
   "n": 33,
   "tytul": "Przyrząd do nadciśnienia i podciśnienia",
   "dzial": "Pomiary i diagnostyka",
   "tresc": "Do pomiaru nadciśnienia i podciśnienia czynnika w instalacji chłodniczej stosuje się",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "higrometr.",
    "B": "termometr.",
    "C": "anemometr.",
    "D": "manowakuometr."
   },
   "klucz": "D",
   "rozw": {
    "lead": "Manowakuometr to manometr z podwójną skalą: mierzy zarówno nadciśnienie, jak i podciśnienie (próżnię). W instalacjach chłodniczych jest to typowy przyrząd na stronie ssawnej, wchodzący w skład <span class=\"term\" data-key=\"manometry\">bloku manometrycznego</span>.",
    "kroki": [],
    "bledne": {
     "A": "Higrometr mierzy wilgotność powietrza.",
     "B": "Termometr mierzy temperaturę.",
     "C": "Anemometr mierzy prędkość przepływu powietrza."
    },
    "pulapka": "Strona ssawna wymaga manowakuometru (zakres od próżni), strona tłoczna – zwykłego manometru. Do głębokiej próżni stosuje się <span class=\"term\" data-key=\"wakuometr\">wakuometr elektroniczny</span>."
   }
  },
  {
   "n": 34,
   "tytul": "Rozpoznanie zaworu zwrotnego",
   "dzial": "Elementy i automatyka obiegu",
   "tresc": "Na którym rysunku przedstawiono zawór zwrotny?",
   "img": "img/ee15-2019-06/z34.png",
   "img_alt": "Cztery zawory: A – ręczny zawór odcinający z pokrętłem, B – zawór zwrotny z przyłączami lutowanymi i strzałką, C – zawór butlowy z dwiema głowicami (niebieską i czerwoną), D – zawór kulowy z dźwignią.",
   "odp": {
    "A": "Rysunek A",
    "B": "Rysunek B",
    "C": "Rysunek C",
    "D": "Rysunek D"
   },
   "klucz": "B",
   "rozw": {
    "lead": "Zawór zwrotny przepuszcza czynnik tylko w jednym kierunku i ma oznaczony strzałką kierunek przepływu na korpusie. Na rysunku B widać cylindryczny korpus z przyłączami do lutowania i strzałką.",
    "kroki": [],
    "bledne": {
     "A": "Rysunek A przedstawia ręczny zawór odcinający z pokrętłem (zawór membranowy).",
     "C": "Rysunek C to zawór butlowy z dwiema głowicami – służy do butli z czynnikiem.",
     "D": "Rysunek D to zawór kulowy z dźwignią – zawór odcinający, nie zwrotny."
    },
    "pulapka": "Rozpoznanie: zawór zwrotny ma strzałkę kierunku i nie ma elementu obsługi (pokrętła, dźwigni). Montuje się go zgodnie ze strzałką przepływu."
   }
  },
  {
   "n": 35,
   "tytul": "Parametry doboru zaworu termostatycznego",
   "dzial": "Elementy i automatyka obiegu",
   "tresc": "Który zestaw parametrów determinuje dobór zaworu termostatycznego?",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "Maksymalne obciążenie skraplacza, ilość wody chłodzącej skraplacz, przegrzanie oleju.",
    "B": "Minimalne obciążenie parownika, temperatura otoczenia, wielkość sprężarki i zbiornika czynnika.",
    "C": "Maksymalne obciążenie parownika, temperatura parowania i skraplania, dochłodzenie ciekłego czynnika.",
    "D": "Minimalne obciążenie skraplacza, temperatura powietrza, ciśnienie różnicowe i wielkość zbiornika oleju."
   },
   "klucz": "C",
   "rozw": {
    "lead": "<span class=\"term\" data-key=\"tzr\">Zawór termostatyczny</span> dobiera się do wydajności parownika: maksymalne obciążenie parownika (moc chłodnicza), temperatura parowania i skraplania (spadek ciśnienia na zaworze) oraz <span class=\"term\" data-key=\"sc\">dochłodzenie</span> cieczy przed zaworem.",
    "kroki": [],
    "bledne": {
     "A": "Obciążenie skraplacza, woda chłodząca i „przegrzanie oleju” nie wpływają na dobór zaworu rozprężnego.",
     "B": "Minimalne obciążenie parownika, temperatura otoczenia oraz wielkość sprężarki i zbiornika nie są parametrami doboru zaworu.",
     "D": "Parametry skraplacza i zbiornika oleju nie decydują o doborze zaworu, który zasila parownik."
    },
    "pulapka": "Zawór dobiera się do mocy parownika, a nie sprężarki; przewymiarowany zawór „pompuje” (niestabilne przegrzanie), a niedowymiarowany – zasila parownik zbyt słabo."
   }
  },
  {
   "n": 36,
   "tytul": "Napełnianie instalacji czynnikiem",
   "dzial": "Serwis, napełnianie, szczelność",
   "tresc": "Napełnianie instalacji czynnikiem chłodniczym należy przeprowadzać, doprowadzając",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "parę czynnika na stronę tłoczną lub ciekły czynnik na stronę ssawną.",
    "B": "parę czynnika na stronę ssawną lub ciekły czynnik na stronę tłoczną.",
    "C": "ciekły czynnik wraz z parą czynnika na stronę ssawną sprężarki.",
    "D": "ciekły czynnik wraz z olejem na stronę ssawną sprężarki."
   },
   "klucz": "B",
   "rozw": {
    "lead": "Parę czynnika doprowadza się na stronę ssawną, a ciecz – na stronę tłoczną (wysokiego ciśnienia, np. przy zbiorniku cieczy, przy wyłączonej sprężarce). Dzięki temu do pracującej sprężarki nie trafia ciecz, która groziłaby uderzeniem hydraulicznym.",
    "kroki": [],
    "bledne": {
     "A": "Para na tłoczenie i ciecz na ssanie to odwrócenie zasady – ciecz na ssaniu grozi uderzeniem hydraulicznym.",
     "C": "Mieszanina cieczy i pary na ssaniu także grozi zassaniem cieczy przez sprężarkę.",
     "D": "Ciecz z olejem na ssaniu jest nieprawidłowa i niebezpieczna dla sprężarki; olej uzupełnia się osobno."
    },
    "pulapka": "Ciecz na stronie ssawnej działającej sprężarki to częsta przyczyna uszkodzenia zaworów i tłoków. Mieszaniny zeotropowe (seria R4xx) napełnia się wyłącznie w fazie ciekłej."
   }
  },
  {
   "n": 37,
   "tytul": "Stan elementów dostarczanych do montażu",
   "dzial": "Montaż i rurociągi",
   "tresc": "Wszystkie zespoły i części niezbędne do montażu agregatu powinny być dostarczone czyste, zaślepione oraz",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "wysuszone.",
    "B": "zalane olejem maszynowym.",
    "C": "wypełnione wodą destylowaną.",
    "D": "wypełnione czynnikiem chłodniczym."
   },
   "klucz": "A",
   "rozw": {
    "lead": "Elementy układu muszą być czyste, suche i zaślepione, aby do wnętrza nie dostały się zanieczyszczenia i wilgoć. Wilgoć w obiegu powoduje korozję, zamarzanie zaworu rozprężnego i powstawanie kwasów w oleju.",
    "kroki": [],
    "bledne": {
     "B": "Olej maszynowy jest niezgodny z czynnikiem i olejem sprężarkowym i zanieczyściłby układ.",
     "C": "Woda w układzie to jedno z najgorszych zanieczyszczeń – prowadzi do korozji i zamarzania.",
     "D": "Elementy nie są dostarczane napełnione czynnikiem; zwykle są napełnione suchym azotem lub tylko zaślepione."
    },
    "pulapka": "Zaślepki zdejmuj dopiero tuż przed lutowaniem. Wnętrze układu musi być suche – po montażu i tak konieczne jest <span class=\"term\" data-key=\"prozn\">próżniowanie</span>."
   }
  },
  {
   "n": 38,
   "tytul": "Mieszaniny azeotropowe",
   "dzial": "Czynniki i F-gazy",
   "tresc": "Mieszaniny azeotropowe są",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "mieszaninami czynnika chłodniczego z olejami, które podczas wrzenia i skraplania zachowują się jak czynniki jednoskładnikowe.",
    "B": "mieszaninami kilku substancji, które podczas wrzenia i skraplania zachowują się jak czynniki niejednorodne.",
    "C": "mieszaninami kilku substancji, które podczas wrzenia i skraplania zachowują się jak czynniki jednorodne.",
    "D": "substancjami, które podczas wrzenia i skraplania zachowują się jak czynniki wieloskładnikowe."
   },
   "klucz": "C",
   "rozw": {
    "lead": "Mieszanina azeotropowa (np. R502, R507A) składa się z kilku substancji, ale wrze i skrapla się w stałej temperaturze przy danym ciśnieniu, jak czynnik jednorodny (jednoskładnikowy); skład fazy ciekłej i parowej jest taki sam, więc nie występuje <span class=\"term\" data-key=\"glide\">poślizg temperaturowy</span>.",
    "kroki": [],
    "bledne": {
     "A": "Azeotrop to mieszanina czynników chłodniczych, a nie czynnika z olejem.",
     "B": "Zachowanie jak czynniki niejednorodne dotyczy mieszanin zeotropowych (z poślizgiem temperatury), nie azeotropowych.",
     "D": "Azeotrop to mieszanina kilku substancji, a nie „substancja”, i nie zachowuje się jak czynnik wieloskładnikowy (zeotropowy)."
    },
    "pulapka": "Azeotrop: bez poślizgu (R507A, R502). Zeotrop (seria R4xx, np. R407C): poślizg temperatury i napełnianie w fazie ciekłej. Quasi-azeotropy (R410A) mają poślizg pomijalnie mały."
   }
  },
  {
   "n": 39,
   "tytul": "Skraplacz w agregacie chłodniczym",
   "dzial": "Elementy i automatyka obiegu",
   "tresc": "Na rysunku agregatu chłodniczego strzałką wskazano",
   "img": "img/ee15-2019-06/z39.png",
   "img_alt": "Agregat chłodniczy z niebieską sprężarką, wentylatorem i lamelowym wymiennikiem za nim; strzałka wskazuje lamelowy blok po lewej stronie.",
   "odp": {
    "A": "skraplacz.",
    "B": "sprężarkę.",
    "C": "zbiornik oleju.",
    "D": "parownik (parowacz)."
   },
   "klucz": "A",
   "rozw": {
    "lead": "Agregat skraplający składa się ze sprężarki, <span class=\"term\" data-key=\"skraplacz\">skraplacza</span> chłodzonego powietrzem (lamelowy wymiennik z wentylatorem) i zbiornika cieczy. Strzałka wskazuje lamelowy blok z rurkami za wentylatorem, czyli skraplacz.",
    "kroki": [],
    "bledne": {
     "B": "Sprężarka to duży, okrągły, niebieski korpus na środku agregatu, a nie lamelowy blok.",
     "C": "Zbiornik (cieczy lub oleju) to cylinder z boku agregatu, a nie wymiennik lamelowy.",
     "D": "Parownik nie wchodzi w skład agregatu skraplającego – znajduje się w komorze lub chłodnicy powietrza."
    },
    "pulapka": "Agregat skraplający nie zawiera parownika; parownik jest po drugiej stronie instalacji, połączony rurociągami."
   }
  },
  {
   "n": 40,
   "tytul": "Naprawa zaworu z nieszczelną kapilarą",
   "dzial": "Serwis, napełnianie, szczelność",
   "tresc": "Na rysunku przedstawiono zawór rozprężny, w którym rozszczelniony został układ kapilary. Dla usunięcia uszkodzenia należy",
   "img": "img/ee15-2019-06/z40.png",
   "img_alt": "Termostatyczny zawór rozprężny z czujnikiem w postaci ampułki i zwiniętej kapilary oraz mosiężnym korpusem z przyłączami.",
   "odp": {
    "A": "wymienić dyszę zaworu.",
    "B": "wymienić cały zawór na nowy.",
    "C": "zalutować miejsce nieszczelności.",
    "D": "wymienić element zaworu z czujką i kapilarą."
   },
   "klucz": "B",
   "rozw": {
    "lead": "Układ czujnika (ampułka, kapilara, membrana) jest zamkniętym, fabrycznie napełnionym systemem i nie nadaje się do naprawy. Według klucza CKE przy nieszczelnej kapilarze należy wymienić cały <span class=\"term\" data-key=\"tzr\">zawór rozprężny</span> na nowy.",
    "kroki": [],
    "bledne": {
     "A": "Wymiana dyszy nie usuwa nieszczelności kapilary – dysza nie jest częścią układu czujnika.",
     "C": "Kapilara jest cienka i wypełniona ładunkiem; lutowanie nie przywróci ładunku, a ogrzanie by ją zniszczyło.",
     "D": "W praktyce niektóre zawory mają wymienną część napędową, ale CKE wskazuje wymianę całego zaworu na nowy."
    },
    "pulapka": "Odpowiedź D bywa technicznie możliwa w zaworach z wymiennym elementem termostatycznym, jednak klucz CKE to B. Uszkodzonej kapilary nie lutuje się ani nie naprawia."
   }
  }
 ]
};
