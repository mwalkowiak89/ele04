/* Część pisemna – arkusz EE.15-SG-21.06 (czerwiec 2021). Dane: pytania CKE + opracowanie rozwiązań. */
(window.ELE04_BANK = window.ELE04_BANK || {})["ee15-2021-06"] = {
 "id": "ee15-2021-06",
 "kwalifikacja": "EE.15",
 "kod": "EE.15-SG-21.06",
 "sesja": "czerwiec 2021",
 "pytania": [
  {
   "n": 1,
   "tytul": "Element instalacji na schemacie",
   "dzial": "Elementy i automatyka obiegu",
   "tresc": "Który element instalacji chłodniczej oznaczono na schemacie cyfrą 4?",
   "img": "img/ee15-2021-06/z01.png",
   "img_alt": "Schemat instalacji chłodniczej z dwiema komorami (−15 °C i −10 °C): skraplacz (1), sprężarka (2), zbiornik cieczy (3) i parownik w komorze (4).",
   "odp": {
    "A": "Skraplacz.",
    "B": "Sprężarkę.",
    "C": "Termostat.",
    "D": "Parownik."
   },
   "klucz": "D",
   "rozw": {
    "lead": "Cyfrą 4 oznaczono wymiennik z wentylatorami znajdujący się wewnątrz komory chłodniczej (−15 °C). Odbiera on ciepło z komory i odparowuje czynnik, czyli jest to <span class=\"term\" data-key=\"parownik\">parownik</span>.",
    "kroki": [],
    "bledne": {
     "A": "Skraplacz (cyfra 1) stoi na zewnątrz, nad agregatem, i oddaje ciepło do otoczenia – nie znajduje się w komorze.",
     "B": "Sprężarka to zielony agregat u dołu schematu (cyfra 2).",
     "C": "Termostat jest czujnikiem sterującym pracą układu, a nie wymiennikiem ciepła; cyfrą 4 oznaczono żebrowaną chłodnicę w komorze."
    },
    "pulapka": "Cyfra 3 to zbiornik cieczy, a cyfra 1 – skraplacz; wymiennik w chłodzonej komorze jest zawsze parownikiem."
   }
  },
  {
   "n": 2,
   "tytul": "Rodzaj sprężarki na zdjęciu",
   "dzial": "Elementy i automatyka obiegu",
   "tresc": "Na rysunku przedstawiono sprężarkę",
   "img": "img/ee15-2021-06/z02.png",
   "img_alt": "Zdjęcie dużej wielocylindrowej sprężarki chłodniczej z silnikiem, głowicami cylindrów i sterownikiem.",
   "odp": {
    "A": "tłokową.",
    "B": "śrubową.",
    "C": "rotacyjną.",
    "D": "odśrodkową."
   },
   "klucz": "A",
   "rozw": {
    "lead": "Na zdjęciu widać wielocylindrową sprężarkę z głowicami cylindrów i kadłubem skrzyni korbowej, typową dla sprężarek tłokowych stosowanych w chłodnictwie przemysłowym.",
    "kroki": [],
    "bledne": {
     "B": "Sprężarka śrubowa ma zwartą obudowę z dwoma wirnikami i nie ma głowic cylindrów ani skrzyni korbowej.",
     "C": "Sprężarka rotacyjna (łopatkowa, spiralna) jest zwykle mniejsza i ma walcową obudowę.",
     "D": "Sprężarka odśrodkowa ma obudowę ślimakową z wirnikiem i jest stosowana przy bardzo dużych wydajnościach."
    },
    "pulapka": "Cechą rozpoznawczą sprężarki tłokowej są głowice cylindrów oraz skrzynia korbowa z układem korbowo-tłokowym."
   }
  },
  {
   "n": 3,
   "tytul": "Elementy agregatu chłodniczego",
   "dzial": "Elementy i automatyka obiegu",
   "tresc": "Elementami składowymi przedstawionego na rysunku agregatu chłodniczego są:",
   "img": "img/ee15-2021-06/z03.png",
   "img_alt": "Zdjęcie niebieskiego agregatu chłodniczego: sprężarka z manometrami, silnik elektryczny i skraplacz pod spodem.",
   "odp": {
    "A": "pompa, parownik i silnik.",
    "B": "parownik, sprężarka i silnik.",
    "C": "sprężarka, skraplacz i silnik.",
    "D": "skraplacz, parownik i pompa."
   },
   "klucz": "C",
   "rozw": {
    "lead": "Agregat skraplający składa się ze sprężarki, napędzającego ją silnika elektrycznego oraz skraplacza (na zdjęciu poziomy skraplacz płaszczowo-rurowy pod sprężarką). Parownik pracuje poza agregatem, w chłodzonym obiekcie.",
    "kroki": [],
    "bledne": {
     "A": "Na zdjęciu nie ma pompy ani parownika; element napędowy to silnik elektryczny sprężarki.",
     "B": "Parownik nie wchodzi w skład agregatu skraplającego, a skraplacza (widocznego na zdjęciu) w tej odpowiedzi brakuje.",
     "D": "W agregacie nie ma parownika ani pompy; brakuje sprężarki, która jest jego głównym elementem."
    },
    "pulapka": "Agregat (skraplający) = sprężarka + silnik + skraplacz (często ze zbiornikiem cieczy); parownik jest osobnym elementem."
   }
  },
  {
   "n": 4,
   "tytul": "Moc sprężarki z EER",
   "dzial": "Obliczenia",
   "tresc": "Określ moc sprężarki L, jeśli moc chłodnicza urządzenia chłodniczego wynosi Q<sub>c</sub> = 60 kW, a współczynnik wydajności chłodniczej jest równy EER<sub>c</sub> = 3.",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "L= 10 kW",
    "B": "L= 20 kW",
    "C": "L= 40 kW",
    "D": "L= 90 kW"
   },
   "klucz": "B",
   "rozw": {
    "lead": "Współczynnik <span class=\"term\" data-key=\"eer\">EER</span> to stosunek mocy chłodniczej do mocy pobieranej przez sprężarkę, więc moc sprężarki wynika z przekształcenia tej zależności.",
    "kroki": [
     [
      "Dane",
      "\\( Q_c = 60\\ \\mathrm{kW},\\ EER_c = 3 \\)"
     ],
     [
      "Szukane",
      "\\( L \\) [kW]"
     ],
     [
      "Wzór",
      "\\[ EER_c = \\frac{Q_c}{L} \\ \\Rightarrow\\ L = \\frac{Q_c}{EER_c} \\]"
     ],
     [
      "Podstawienie",
      "\\( L = \\dfrac{60\\ \\mathrm{kW}}{3} \\)"
     ],
     [
      "Wynik",
      "\\( L = 20\\ \\mathrm{kW} \\)"
     ]
    ],
    "bledne": {
     "A": "10 kW nie wynika z EER = 3 (byłoby to dzielenie 60 przez 6).",
     "C": "40 kW to 60 − 20, czyli różnica mocy chłodniczej i mocy sprężarki – zła wielkość.",
     "D": "90 kW to wynik mnożenia 60 · 1,5 lub 60 + 30; zdający pomnożył zamiast podzielić albo pomylił moc skraplacza z mocą sprężarki."
    },
    "pulapka": "EER liczy się jako Q/L, a nie L/Q – dla EER > 1 moc sprężarki musi być mniejsza od mocy chłodniczej."
   }
  },
  {
   "n": 5,
   "tytul": "Dobór chłodnicy powietrza",
   "dzial": "Obliczenia",
   "tresc": "Na podstawie zamieszczonego fragmentu danych katalogowych, dobierz model chłodnicy powietrza do freonowego agregatu skraplającego, pobierającego moc elektryczną 0,5 kW, przy planowanym współczynniku wydajności chłodniczej w zakresie od 3,0 do 3,5.<br><i>Katalog chłodniczy. Freonowe chłodnice powietrza</i><div class=\"tblwrap\"><table><tr><th>Model</th><th>Wydajność chłodnicza</th></tr><tr><td>EP 80</td><td>0,55 kW</td></tr><tr><td>EP 100</td><td>0,77 kW</td></tr><tr><td>EP 200</td><td>1,55 kW</td></tr><tr><td>EP 300</td><td>2,31 kW</td></tr></table></div>",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "EP 80",
    "B": "EP 100",
    "C": "EP 200",
    "D": "EP 300"
   },
   "klucz": "C",
   "rozw": {
    "lead": "Wydajność chłodnicza wynika z pomnożenia pobieranej mocy elektrycznej przez współczynnik wydajności; dla EER 3,0–3,5 otrzymujemy przedział 1,5–1,75 kW, w którym mieści się tylko EP 200 (1,55 kW).",
    "kroki": [
     [
      "Dane",
      "\\( P = 0{,}5\\ \\mathrm{kW},\\ EER = 3{,}0\\ldots 3{,}5 \\)"
     ],
     [
      "Szukane",
      "\\( Q_0 \\) [kW]"
     ],
     [
      "Wzór",
      "\\[ Q_0 = EER \\cdot P \\]"
     ],
     [
      "Podstawienie",
      "\\( Q_{0,min} = 3{,}0\\cdot 0{,}5 = 1{,}5\\ \\mathrm{kW},\\quad Q_{0,max} = 3{,}5\\cdot 0{,}5 = 1{,}75\\ \\mathrm{kW} \\)"
     ],
     [
      "Wynik",
      "\\( 1{,}5\\ \\mathrm{kW} \\le Q_0 \\le 1{,}75\\ \\mathrm{kW} \\) → EP 200 (1,55 kW)"
     ]
    ],
    "bledne": {
     "A": "EP 80 (0,55 kW) odpowiada EER ≈ 1,1 – zdecydowanie za mało.",
     "B": "EP 100 (0,77 kW) odpowiada EER ≈ 1,5 – poniżej wymaganego zakresu.",
     "D": "EP 300 (2,31 kW) odpowiada EER ≈ 4,6 – powyżej zakresu 3,0–3,5."
    },
    "pulapka": "Zadanie wymaga odwrócenia wzoru EER: znana jest moc elektryczna i EER, szukana jest moc chłodnicza."
   }
  },
  {
   "n": 6,
   "tytul": "Koszt materiałów w kosztorysie",
   "dzial": "Kosztorys",
   "tresc": "Fragment kosztorysu – instalacja chłodnicza cieczowa:<div class=\"tblwrap\"><table><tr><th>Opis</th><th>J.m.</th><th>Ilość</th><th>Cena jedn. [zł]</th><th>Wartość [zł]</th></tr><tr><td>Rurociągi miedziane ø 6,35 mm (KNR 2-15 060101)</td><td>m</td><td>30</td><td>18,00</td><td>540,00</td></tr><tr><td>Trójniki miedziane ø 6,35 mm (060401)</td><td>szt.</td><td>3</td><td>13,30</td><td>39,90</td></tr><tr><td>Złączki miedziane ø 6,35 mm (060601)</td><td>szt.</td><td>41</td><td>1,27</td><td>52,07</td></tr><tr><td>Zawory odcinające ø 6,35 mm (060801)</td><td>szt.</td><td>10</td><td>33,64</td><td>336,40</td></tr><tr><td>Przygotowanie do uruchomienia, przedmuchanie (063301)</td><td>pkt.</td><td>1</td><td>50,00</td><td>50,00</td></tr><tr><td>Przygotowanie do uruchomienia, próba ciśnieniowa (063302)</td><td>do 30 m</td><td>1</td><td>160,00</td><td>160,00</td></tr><tr><td>Przygotowanie do uruchomienia, napełnienie (063306)</td><td>pkt</td><td>1</td><td>90,00</td><td>90,00</td></tr><tr><td>Izolacja rurociągów otulinami Armaflex gr. 20 mm (KNR 0-34 010110)</td><td>m</td><td>22</td><td>139,90</td><td>3077,80</td></tr></table></div>Na podstawie fragmentu kosztorysu oblicz koszt materiałów niezbędnych do wykonania instalacji chłodniczej cieczowej.",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "968,37 zł",
    "B": "1268,37 zł",
    "C": "4046,17 zł",
    "D": "4346,17 zł"
   },
   "klucz": "C",
   "rozw": {
    "lead": "Do materiałów zaliczamy rury, trójniki, złączki, zawory oraz izolację (otuliny). Pozycje „przygotowanie do uruchomienia” (przedmuchanie, próba ciśnieniowa, napełnienie) to usługi, czyli robocizna, i nie wchodzą do kosztu materiałów.",
    "kroki": [
     [
      "Dane",
      "rury 540,00; trójniki 39,90; złączki 52,07; zawory 336,40; izolacja 3077,80 zł"
     ],
     [
      "Szukane",
      "koszt materiałów \\( K_m \\) [zł]"
     ],
     [
      "Wzór",
      "\\[ K_m = \\sum W_i \\ (\\text{bez usług}) \\]"
     ],
     [
      "Podstawienie",
      "\\( K_m = 540{,}00+39{,}90+52{,}07+336{,}40+3077{,}80 \\)"
     ],
     [
      "Wynik",
      "\\( K_m = 4046{,}17\\ \\mathrm{zł} \\)"
     ]
    ],
    "bledne": {
     "A": "968,37 zł to suma tylko rur, trójników, złączek i zaworów – pominięto izolację, która też jest materiałem.",
     "B": "1268,37 zł to 968,37 zł + 300 zł usług (przedmuchanie, próba, napełnienie) – wliczono robociznę, a pominięto izolację.",
     "D": "4346,17 zł to suma wszystkich pozycji kosztorysu, także usług (300 zł) – zadanie pytało wyłącznie o materiały."
    },
    "pulapka": "Czytaj kolumnę „Opis”: pozycje typu przygotowanie, próba, napełnienie to robocizna, natomiast otuliny izolacyjne są materiałem."
   }
  },
  {
   "n": 7,
   "tytul": "Odstępy montażowe agregatu skraplającego",
   "dzial": "Montaż i rurociągi",
   "tresc": "Na podstawie fragmentu zaleceń instalacyjnych, wskaż które wartości odstępów od ściany i przeszkód zapewniają prawidłowe zamontowanie agregatu skraplającego OP-MGZD086MTC21E.",
   "img": "img/ee15-2021-06/z07.png",
   "img_alt": "Rysunek z minimalnymi odstępami agregatu skraplającego od ściany (1 × wysokość) i od przeszkody (2 × szerokość) oraz tabela wymiarów typów agregatów OP-MGZD.",
   "odp": {
    "A": "odstęp 1: 0,5 m, odstęp 2: 1,6 m",
    "B": "odstęp 1: 0,5 m, odstęp 2: 2,1 m",
    "C": "odstęp 1: 0,6 m, odstęp 2: 1,6 m",
    "D": "odstęp 1: 0,6 m, odstęp 2: 2,1 m"
   },
   "klucz": "D",
   "rozw": {
    "lead": "Z rysunku: odstęp 1 ≥ 1 × wysokość agregatu, odstęp 2 ≥ 2 × szerokość agregatu. Dla OP-MGZD086MTC21E H = 555 mm, W = 1000 mm, więc odstęp 1 ≥ 0,555 m, a odstęp 2 ≥ 2,0 m. Tylko odpowiedź D spełnia oba minima.",
    "kroki": [
     [
      "Dane",
      "H = 555 mm, W = 1000 mm"
     ],
     [
      "Szukane",
      "minimalne odstępy 1 i 2"
     ],
     [
      "Wzór",
      "\\[ a_1 \\ge H,\\quad a_2 \\ge 2W \\]"
     ],
     [
      "Podstawienie",
      "\\( a_1 \\ge 0{,}555\\ \\mathrm{m},\\quad a_2 \\ge 2\\cdot 1{,}0 = 2{,}0\\ \\mathrm{m} \\)"
     ],
     [
      "Wynik",
      "spełniają to wartości 0,6 m i 2,1 m"
     ]
    ],
    "bledne": {
     "A": "0,5 m jest mniejsze od wymaganego minimum 0,555 m, a 1,6 m jest mniejsze od 2,0 m.",
     "B": "Odstęp 2 = 2,1 m jest poprawny, ale odstęp 1 = 0,5 m jest mniejszy od minimum 0,555 m.",
     "C": "Odstęp 1 = 0,6 m jest poprawny, ale odstęp 2 = 1,6 m jest mniejszy od 2 × 1000 mm = 2,0 m."
    },
    "pulapka": "To są wartości minimalne – odczytuj je z wiersza właściwego dla podanego typu agregatu i wybieraj odpowiedź nie mniejszą od minimum."
   }
  },
  {
   "n": 8,
   "tytul": "Narzędzie do gięcia rur miedzianych",
   "dzial": "Montaż i rurociągi",
   "tresc": "Które z przedstawionych na rysunkach narzędzi służy do ręcznego gięcia rur miedzianych?",
   "img": "img/ee15-2021-06/z08.png",
   "img_alt": "Cztery narzędzia oznaczone I–IV: ręczna giętarka do rur, dźwigniowe narzędzie do rozszerzania rur, przyrząd do kielichowania ze śrubą motylkową i zaginarka do blachy.",
   "odp": {
    "A": "Rysunek I",
    "B": "Rysunek II",
    "C": "Rysunek III",
    "D": "Rysunek IV"
   },
   "klucz": "A",
   "rozw": {
    "lead": "Narzędzie I to ręczna giętarka do rur z kształtką (segmentem) i dźwignią – służy do gięcia rur miedzianych bez ich spłaszczania.",
    "kroki": [],
    "bledne": {
     "B": "Narzędzie II to dźwigniowe narzędzie do rozszerzania/rozwalcowywania końcówek rur, nie giętarka.",
     "C": "Narzędzie III to przyrząd do kielichowania (bortowania) końców rur ze śrubą motylkową.",
     "D": "Narzędzie IV to zaginarka do blachy, nie do rur."
    },
    "pulapka": "Do rur miedzianych stosuje się giętarki z kształtką o odpowiednim promieniu; gięcie bez nich grozi załamaniem i owalizacją rury."
   }
  },
  {
   "n": 9,
   "tytul": "Narzędzie do przecinania rur",
   "dzial": "Montaż i rurociągi",
   "tresc": "Które narzędzie należy zastosować do przecinania rur miedzianych?",
   "img": "img/ee15-2021-06/z09.png",
   "img_alt": "Cztery narzędzia oznaczone I–IV: obcinak rolkowy do rur, szczypce do ściągania izolacji, szczypce tnące boczne i giętarka rolkowa.",
   "odp": {
    "A": "Rysunek I",
    "B": "Rysunek II",
    "C": "Rysunek III",
    "D": "Rysunek IV"
   },
   "klucz": "A",
   "rozw": {
    "lead": "Do przecinania rur miedzianych stosuje się obcinak rolkowy (przecinak do rur) z ostrzem tnącym i rolkami dociskowymi – daje równe, prostopadłe cięcie bez opiłków (narzędzie I).",
    "kroki": [],
    "bledne": {
     "B": "Narzędzie II to szczypce do ściągania izolacji z przewodów elektrycznych.",
     "C": "Narzędzie III to szczypce tnące boczne do przewodów; rozgniatają rurę zamiast ją przeciąć.",
     "D": "Narzędzie IV to ręczna giętarka rolkowa do rur, nie służy do cięcia."
    },
    "pulapka": "Piłki do metalu używa się tylko awaryjnie – daje opiłki, które mogą zanieczyścić układ chłodniczy; po cięciu rurę należy zagratować."
   }
  },
  {
   "n": 10,
   "tytul": "Lutowanie zaworu rozprężnego",
   "dzial": "Montaż i rurociągi",
   "tresc": "Na którym rysunku zilustrowano prawidłowy sposób posługiwania się palnikiem podczas montażu zaworu rozprężnego w technologii lutowania?",
   "img": "img/ee15-2021-06/z10.png",
   "img_alt": "Cztery rysunki I–IV pokazujące różne ustawienia palnika podczas lutowania rur przy zaworze rozprężnym; czerwone strzałki wskazują kierunek płomienia.",
   "odp": {
    "A": "Rysunek I",
    "B": "Rysunek II",
    "C": "Rysunek III",
    "D": "Rysunek IV"
   },
   "klucz": "D",
   "rozw": {
    "lead": "Podczas <span class=\"term\" data-key=\"lut\">lutowania</span> zaworu rozprężnego płomień kieruje się na rurę i złączkę, odprowadzając ciepło od korpusu zaworu (strzałki skierowane od zaworu), aby nie przegrzać gniazda, membrany i elementów w głowicy. Tę zasadę spełnia rysunek IV.",
    "kroki": [],
    "bledne": {
     "A": "Na rysunku I płomień i strumień ciepła skierowano w stronę korpusu zaworu, co grozi jego przegrzaniem.",
     "B": "Na rysunku II jeden z palników nagrzewa połączenie od strony korpusu zaworu.",
     "C": "Na rysunku III jeden z palników kieruje ciepło w stronę korpusu zaworu zamiast od niego."
    },
    "pulapka": "Korpus zaworu rozprężnego (zwłaszcza z głowicą i czujnikiem) chroni się przed przegrzaniem, np. owinięciem mokrą szmatą, i lutuje płomieniem skierowanym od zaworu."
   }
  },
  {
   "n": 11,
   "tytul": "Izolowane uchwyty narzędzi",
   "dzial": "BHP i przepisy",
   "tresc": "Podczas montażu elektrycznego układu zasilającego urządzeń w instalacji chłodniczej, instalator używa narzędzi, w których uchwyty pokryte są izolacją w celu ochrony przed",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "porażeniem prądem elektrycznym.",
    "B": "urazami mechanicznymi.",
    "C": "wysoką wilgotnością.",
    "D": "wysoką temperaturą."
   },
   "klucz": "A",
   "rozw": {
    "lead": "Narzędzia elektryka (izolowane szczypce, wkrętaki) mają uchwyty z materiału izolacyjnego, które chronią użytkownika przed porażeniem w razie przypadkowego dotknięcia elementu pod napięciem.",
    "kroki": [],
    "bledne": {
     "B": "Przed urazami mechanicznymi chronią rękawice i okulary, a nie izolacja uchwytów narzędzi.",
     "C": "Izolacja uchwytów nie jest zabezpieczeniem przed wilgocią.",
     "D": "Przed wysoką temperaturą chroni inny sprzęt (np. rękawice spawalnicze), a nie izolacja elektryczna."
    },
    "pulapka": "Narzędzia do prac pod napięciem są oznaczone symbolem 1000 V i badane; zwykła gumowa osłona nie jest równoznaczna z izolacją elektryczną."
   }
  },
  {
   "n": 12,
   "tytul": "Butla do próby szczelności azotem",
   "dzial": "Serwis, napełnianie, szczelność",
   "tresc": "Której butli należy użyć do wykonania ciśnieniowej próby szczelności w urządzeniu chłodniczym za pomocą suchego azotu?",
   "img": "img/ee15-2021-06/z12.png",
   "img_alt": "Cztery butle z gazem oznaczone I–IV: z tlenem O2 (biała głowica), z CO2 (szara), z azotem N2 (czarna głowica) i z amoniakiem NH3 (żółta głowica).",
   "odp": {
    "A": "Rysunek I",
    "B": "Rysunek II",
    "C": "Rysunek III",
    "D": "Rysunek IV"
   },
   "klucz": "C",
   "rozw": {
    "lead": "<span class=\"term\" data-key=\"proba\">Próbę szczelności</span> wykonuje się azotem sprężonym (N<sub>2</sub>); butla z azotem ma czarną głowicę (część górną) i oznaczenie N<sub>2</sub> – rysunek III.",
    "kroki": [],
    "bledne": {
     "A": "Rysunek I przedstawia butlę z tlenem (O<sub>2</sub>) – biała głowica; tlen w kontakcie z olejem tworzy mieszaninę wybuchową.",
     "B": "Rysunek II to butla z dwutlenkiem węgla (CO<sub>2</sub>) – szara; CO<sub>2</sub> nie nadaje się do prób szczelności.",
     "D": "Rysunek IV to butla z amoniakiem (NH<sub>3</sub>) – żółta głowica oznacza gaz toksyczny."
    },
    "pulapka": "Do prób ciśnieniowych nigdy nie wolno stosować tlenu ani sprężonego powietrza (ryzyko wybuchu z olejem); azot podaje się przez reduktor."
   }
  },
  {
   "n": 13,
   "tytul": "Cel izolacji przeciwdrganiowej",
   "dzial": "Montaż i rurociągi",
   "tresc": "Głównym celem stosowania izolacji przeciwdrganiowej w instalacjach chłodniczych jest",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "wypoziomowanie agregatu.",
    "B": "zabezpieczenie przed wilgocią.",
    "C": "przeciwdziałanie powstawaniu pleśni i grzybów.",
    "D": "przeciwdziałanie rozprzestrzenianiu się wibracji."
   },
   "klucz": "D",
   "rozw": {
    "lead": "Podkładki, odbojniki i wibroizolatory tłumią drgania sprężarki i agregatu, dzięki czemu nie przenoszą się one na konstrukcję budynku i rurociągi (mniejszy hałas, mniejsze ryzyko pęknięć przewodów).",
    "kroki": [],
    "bledne": {
     "A": "Poziomowanie agregatu wykonuje się podkładkami regulacyjnymi, a nie izolacją przeciwdrganiową.",
     "B": "Przed wilgocią chroni izolacja paroszczelna lub antykorozyjna.",
     "C": "Pleśni i grzybom zapobiega osuszenie i higiena pomieszczenia, nie izolacja przeciwdrganiowa."
    },
    "pulapka": "Rurociągi przy sprężarce prowadzi się z kompensatorami lub pętlami, żeby drgania nie łamały lutowanych połączeń."
   }
  },
  {
   "n": 14,
   "tytul": "Waga do czynnika chłodniczego",
   "dzial": "Pomiary i diagnostyka",
   "tresc": "Przedstawiony na rysunku przyrząd przeznaczony jest do pomiaru",
   "img": "img/ee15-2021-06/z14.png",
   "img_alt": "Walizka z elektroniczną wagą do czynnika chłodniczego: platforma ważąca i ręczny wyświetlacz z klawiaturą.",
   "odp": {
    "A": "temperatury czynnika chłodniczego w butli.",
    "B": "ciśnienia czynnika chłodniczego w butli.",
    "C": "objętości czynnika chłodniczego i butli.",
    "D": "masy czynnika chłodniczego i butli."
   },
   "klucz": "D",
   "rozw": {
    "lead": "Na zdjęciu jest elektroniczna waga do czynnika chłodniczego (platforma i wyświetlacz w walizce). Mierzy masę butli z czynnikiem, a dzięki tarowaniu – ilość pobranego lub wprowadzonego czynnika.",
    "kroki": [],
    "bledne": {
     "A": "Temperaturę mierzy się termometrem lub czujnikiem, nie wagą.",
     "B": "Ciśnienie mierzą manometry, a nie waga z platformą.",
     "C": "Waga nie mierzy objętości; czynnik dozuje się masowo, nie objętościowo."
    },
    "pulapka": "Czynnik chłodniczy napełnia się wagowo (w kg), dlatego waga elektroniczna jest podstawowym przyrządem serwisanta."
   }
  },
  {
   "n": 15,
   "tytul": "Odtajanie gorącymi parami",
   "dzial": "Elementy i automatyka obiegu",
   "tresc": "Jak należy ustawić wentylator W, grzałkę G oraz zawory elektromagnetyczne Z1 i Z2, aby w przedstawionym na schemacie urządzeniu chłodniczym mroźni, przeprowadzić proces odtajania <span class=\"term\" data-key=\"parownik\">parownika</span> gorącymi parami czynnika.",
   "img": "img/ee15-2021-06/z15.png",
   "img_alt": "Schemat urządzenia chłodniczego mroźni z parownikiem (wentylator W, grzałka G, TZR), sprężarką, skraplaczem, zbiornikiem cieczy, odwadniaczem i zaworami elektromagnetycznymi Z1 i Z2.",
   "odp": {
    "A": "W – włączony, G – włączona, Z1 – zamknięty, Z2 – otwarty.",
    "B": "W – wyłączony, G – włączona, Z1 – otwarty, Z2 – zamknięty.",
    "C": "W – włączony, G – wyłączona, Z1 – otwarty, Z2 – zamknięty.",
    "D": "W – wyłączony, G – włączona, Z1 – zamknięty, Z2 – otwarty."
   },
   "klucz": "B",
   "rozw": {
    "lead": "Przy odtajaniu gorącymi parami otwiera się zawór Z1 (obejście ze strony tłoczenia), aby gorące pary ze sprężarki płynęły do parownika, a Z2 (do skraplacza) zamyka się. Wentylator parownika wyłącza się, żeby nie rozprowadzać ciepła i wilgoci po komorze; grzałka G jest włączona zgodnie z kluczem CKE.",
    "kroki": [],
    "bledne": {
     "A": "Wentylator włączony rozdmuchałby ciepłe, wilgotne powietrze po komorze, a Z1 zamknięty i Z2 otwarty kierują gaz do skraplacza – to normalna praca chłodnicza, nie odtajanie.",
     "C": "Wentylator włączony i grzałka wyłączona – niezgodne z kluczem; wentylator pracujący w trakcie odtajania wydmuchuje ciepło do komory.",
     "D": "Wentylator i grzałka ustawione zgodnie z kluczem, ale Z1 zamknięty i Z2 otwarty kierują gorące pary do skraplacza, a nie do parownika."
    },
    "pulapka": "Włączona grzałka G jest elementem klucza CKE (technicznie przy odtajaniu gorącymi parami grzałka nie jest niezbędna); kluczowe są położenia zaworów: Z1 otwarty, Z2 zamknięty, wentylator wyłączony."
   }
  },
  {
   "n": 16,
   "tytul": "Armatura w instalacji glikolowej",
   "dzial": "Montaż i rurociągi",
   "tresc": "W przedstawionym na schemacie fragmencie instalacji glikolowej zastosowano",
   "img": "img/ee15-2021-06/z16.png",
   "img_alt": "Schemat fragmentu instalacji glikolowej z wymiennikiem (RW in 40 °C, RW out 45 °C), dwiema pompami w układzie równoległym, zaworami trójdrogowymi i pompą przy zbiorniku.",
   "odp": {
    "A": "2 trójniki, 6 kolan, 4 mufy.",
    "B": "4 trójniki, 6 kolan, 2 mufy.",
    "C": "6 trójników, 4 kolana, 2 mufy.",
    "D": "6 trójników, 2 kolana, 4 mufy."
   },
   "klucz": "C",
   "rozw": {
    "lead": "Po zliczeniu symboli kształtek na schemacie (rozgałęzienia przy pompach i zaworach trójdrogowych, załamania rurociągu i łączniki prostoliniowe) otrzymuje się 6 trójników, 4 kolana i 2 mufy, zgodnie z kluczem CKE.",
    "kroki": [],
    "bledne": {
     "A": "2 trójniki to za mało – na schemacie jest wyraźnie więcej rozgałęzień; kolan i muf też policzono błędnie.",
     "B": "4 trójniki i 6 kolan – liczby trójników i kolan nie zgadzają się ze schematem.",
     "D": "6 trójników się zgadza, ale 2 kolana i 4 mufy to błędne zliczenie załamań i łączników."
    },
    "pulapka": "Zliczaj elementy po jednym rodzaju naraz i zaznaczaj policzone na schemacie; trójnik to rozgałęzienie, kolano – zmiana kierunku, mufa – proste połączenie dwóch odcinków."
   }
  },
  {
   "n": 17,
   "tytul": "Detektor nieszczelności",
   "dzial": "Pomiary i diagnostyka",
   "tresc": "Przedstawione na rysunku urządzenie służy do",
   "img": "img/ee15-2021-06/z17.png",
   "img_alt": "Zdjęcia elektronicznego wykrywacza nieszczelności z elastyczną sondą: podczas sprawdzania parownika i osobno na białym tle.",
   "odp": {
    "A": "kontroli szczelności podczas próby ciśnieniowej z zastosowaniem azotu.",
    "B": "kontroli szczelności napełnionego urządzenia chłodniczego.",
    "C": "pomiaru temperatury przegrzania czynnika chłodniczego.",
    "D": "pomiaru poziomu hałasu agregatu."
   },
   "klucz": "B",
   "rozw": {
    "lead": "Przyrząd z elastyczną sondą to elektroniczny wykrywacz nieszczelności, reagujący na obecność czynnika chłodniczego w powietrzu. Służy do sprawdzania szczelności napełnionej instalacji (sondę prowadzi się wzdłuż rur i połączeń).",
    "kroki": [],
    "bledne": {
     "A": "Wykrywacz czynnika nie wykryje wycieku azotu, więc nie służy do próby ciśnieniowej azotem (tam obserwuje się manometr lub stosuje środek pianotwórczy).",
     "C": "Przegrzanie mierzy się manometrem i termometrem, a nie detektorem nieszczelności.",
     "D": "Poziom hałasu mierzy się sonometrem, który wygląda inaczej."
    },
    "pulapka": "Detektor elektroniczny wykrywa gazy halogenowe, więc nadaje się tylko do instalacji napełnionej czynnikiem; przy próbie azotem kontroluje się spadek ciśnienia."
   }
  },
  {
   "n": 18,
   "tytul": "Cykl napraw sprężarki",
   "dzial": "Serwis, napełnianie, szczelność",
   "tresc": "Na podstawie przedstawionego na rysunku cyklu napraw sprężarki chłodniczej tłokowej określ, po ilu godzinach pracy sprężarki liczonych po pierwszej naprawie średniej, należy przeprowadzić drugi przegląd zapobiegawczy.",
   "img": "img/ee15-2021-06/z18.png",
   "img_alt": "Oś czasu cyklu napraw sprężarki 12000 h: naprawa główna G, przeglądy P, naprawy bieżące B, naprawy średnie S, z oznaczeniami odstępów 1000, 2000, 4000 i 12000 h.",
   "odp": {
    "A": "1 000 h",
    "B": "2 000 h",
    "C": "3 000 h",
    "D": "4 000 h"
   },
   "klucz": "C",
   "rozw": {
    "lead": "Na osi czasu przeglądy P przypadają co 1000 h, naprawy bieżące B co 2000 h, a naprawa średnia S po 4000 h od naprawy głównej. Po pierwszej naprawie średniej kolejno występują: P po 1000 h, B po 2000 h, drugi P po 3000 h.",
    "kroki": [
     [
      "Dane",
      "po S: P w 1000 h, B w 2000 h, P w 3000 h"
     ],
     [
      "Szukane",
      "czas do 2. przeglądu P po S"
     ],
     [
      "Wzór",
      "kolejność zdarzeń po naprawie S: P, B, P"
     ],
     [
      "Podstawienie",
      "1000 h (P), 2000 h (B), 3000 h (P)"
     ],
     [
      "Wynik",
      "3000 h"
     ]
    ],
    "bledne": {
     "A": "1000 h to czas do pierwszego przeglądu P po naprawie średniej, nie do drugiego.",
     "B": "2000 h to czas do naprawy bieżącej B po naprawie średniej.",
     "D": "4000 h to interwał do kolejnej naprawy średniej S; drugi przegląd P występuje wcześniej."
    },
    "pulapka": "Licz od punktu S (naprawa średnia): P → B → P, czyli drugi przegląd zapobiegawczy wypada 3000 h po S."
   }
  },
  {
   "n": 19,
   "tytul": "Częstotliwość kontroli obiegu oleju",
   "dzial": "Serwis, napełnianie, szczelność",
   "tresc": "Na podstawie harmonogramu czynności serwisowych podaj częstotliwość kontroli obiegu oleju w sprężarce.<br><i>Tabela 2. Harmonogram czynności serwisowych</i><div class=\"tblwrap\"><table><tr><th>Lp.</th><th>Czynność serwisowa</th><th>Okres wykonywania</th></tr><tr><td>1</td><td>Sprawdzanie temperatury pracy</td><td>Codziennie</td></tr><tr><td>2</td><td>Sprawdzanie poziomu oleju w sprężarce</td><td>Codziennie</td></tr><tr><td>3</td><td>Sprawdzanie poziomu czynnika chłodniczego w zbiorniku</td><td>Codziennie</td></tr><tr><td>4</td><td>Sprawdzanie podciśnienia generowanego przez sprężarki</td><td>Co 3 miesiące</td></tr><tr><td>5</td><td>Kontrola obiegu oleju w sprężarkach</td><td>Co 3 miesiące</td></tr><tr><td>6</td><td>Sprawdzanie zaworów</td><td>Co 6 miesięcy</td></tr><tr><td>7</td><td>Kontrola działania zaworów bezpieczeństwa</td><td>Co 6 miesięcy</td></tr><tr><td>8</td><td>Sprawdzanie łączników elektrycznych i bezpieczników</td><td>Co rok</td></tr><tr><td>9</td><td>Sprawdzenie rurociągów, skraplacza, mebli chłodniczych</td><td>Co rok</td></tr></table></div>",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "3 razy w roku.",
    "B": "4 razy w roku.",
    "C": "Co 6 miesięcy.",
    "D": "Co rok."
   },
   "klucz": "B",
   "rozw": {
    "lead": "W wierszu 5 harmonogramu „Kontrola obiegu oleju w sprężarkach” ma okres „Co 3 miesiące”. Rok ma 12 miesięcy, więc kontrola odbywa się 12 : 3 = 4 razy w roku.",
    "kroki": [
     [
      "Dane",
      "okres kontroli obiegu oleju: co 3 miesiące"
     ],
     [
      "Szukane",
      "liczba kontroli w roku"
     ],
     [
      "Wzór",
      "\\[ n = \\frac{12\\ \\text{miesięcy}}{3\\ \\text{miesiące}} \\]"
     ],
     [
      "Podstawienie",
      "\\( n = 12 : 3 \\)"
     ],
     [
      "Wynik",
      "\\( n = 4 \\) razy w roku"
     ]
    ],
    "bledne": {
     "A": "3 razy w roku odpowiadałoby okresowi co 4 miesiące.",
     "C": "Co 6 miesięcy to okres dla zaworów (wiersz 6) i zaworów bezpieczeństwa (wiersz 7).",
     "D": "Co rok dotyczy łączników elektrycznych i rurociągów (wiersze 8 i 9)."
    },
    "pulapka": "Nie myl wiersza 2 (poziom oleju – codziennie) z wierszem 5 (obieg oleju – co 3 miesiące)."
   }
  },
  {
   "n": 20,
   "tytul": "Podłączenie przewodu zasilającego",
   "dzial": "Elektrotechnika",
   "tresc": "W celu podłączenia zasilania lady chłodniczej do instalacji elektrycznej należy wykorzystać przewód YDYp 3x1,5 mm<sup>2</sup>, który ma 3 żyły w kolorach: czarnym, niebieskim, żółto-zielonym. Prawidłowy sposób podłączenia przewodów do zacisków lady chłodniczej przedstawiono na rysunku",
   "img": "img/ee15-2021-06/z20.png",
   "img_alt": "Cztery schematy listew zaciskowych L1, N i PE z różnie podłączonymi żyłami czarną, niebieską i żółto-zieloną, oznaczone I–IV.",
   "odp": {
    "A": "Rysunek I",
    "B": "Rysunek II",
    "C": "Rysunek III",
    "D": "Rysunek IV"
   },
   "klucz": "A",
   "rozw": {
    "lead": "Żyła niebieska to przewód neutralny N, żyła żółto-zielona to przewód ochronny PE (zacisk uziemienia), a pozostała żyła czarna jest przewodem fazowym L1. Taki układ (L1 – czarny, N – niebieski, PE – żółto-zielony) pokazuje rysunek I.",
    "kroki": [],
    "bledne": {
     "B": "Na rysunku II niebieska żyła jest podłączona do zacisku L1, a czarna do zacisku PE – błąd.",
     "C": "Na rysunku III żółto-zielona żyła jest podłączona do N, a niebieska do PE – błąd.",
     "D": "Na rysunku IV żółto-zielona żyła jest podłączona do L1, a niebieska do PE – błąd."
    },
    "pulapka": "Żyły żółto-zielonej nie wolno używać jako fazowej ani neutralnej – służy wyłącznie jako ochronna (PE); niebieska jest zawsze neutralna."
   }
  },
  {
   "n": 21,
   "tytul": "Zadanie termostatycznego zaworu rozprężnego",
   "dzial": "Elementy i automatyka obiegu",
   "tresc": "<span class=\"term\" data-key=\"tzr\">Termostatyczny zawór rozprężny</span> utrzymuje",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "stałą ilość cieczy w parowniku.",
    "B": "stałą temperaturę w komorze.",
    "C": "stałe ciśnienie parowania.",
    "D": "stałe przegrzanie par."
   },
   "klucz": "D",
   "rozw": {
    "lead": "Termostatyczny zawór rozprężny reguluje dopływ czynnika do parownika na podstawie temperatury na wylocie parownika (czujnik) i ciśnienia parowania, dzięki czemu utrzymuje stałe <span class=\"term\" data-key=\"sh\">przegrzanie</span> par na wylocie.",
    "kroki": [],
    "bledne": {
     "A": "Ilość cieczy w parowniku zmienia się wraz z obciążeniem; TZR jej nie stabilizuje (to cecha zaworu pływakowego).",
     "B": "Temperaturę w komorze utrzymuje termostat sterujący sprężarką, nie zawór rozprężny.",
     "C": "Stałe ciśnienie parowania utrzymuje automatyczny zawór rozprężny."
    },
    "pulapka": "Rozróżniaj: TZR – stałe przegrzanie, automatyczny zawór rozprężny – stałe ciśnienie parowania, zawór pływakowy – stały poziom cieczy."
   }
  },
  {
   "n": 22,
   "tytul": "Rejestrator temperatury i wilgotności",
   "dzial": "Pomiary i diagnostyka",
   "tresc": "Przedstawiony na rysunku bezprzewodowy rejestrator wyświetla informacje o",
   "img": "img/ee15-2021-06/z22.png",
   "img_alt": "Bezprzewodowy termohigrometr WiFi LB-523 z wyświetlaczem pokazującym 22,3 (T, °C) i 57,4 (RH, %).",
   "odp": {
    "A": "ciśnieniu i wilgotności.",
    "B": "prędkości i temperaturze.",
    "C": "temperaturze i wilgotności względnej.",
    "D": "temperaturze i wilgotności bezwzględnej."
   },
   "klucz": "C",
   "rozw": {
    "lead": "Na wyświetlaczu są oznaczenia T [°C] i RH [%]. RH to wilgotność względna (relative humidity), a urządzenie podpisano jako termohigrometr.",
    "kroki": [],
    "bledne": {
     "A": "Na wyświetlaczu nie ma jednostek ciśnienia (np. hPa).",
     "B": "Nie ma jednostek prędkości (m/s); wyświetlane wielkości to °C i %.",
     "D": "Wilgotność bezwzględna podawana jest w g/m³ lub g/kg, a nie w %; oznaczenie RH oznacza wilgotność względną."
    },
    "pulapka": "Skrót RH (relative humidity) zawsze oznacza wilgotność względną w procentach."
   }
  },
  {
   "n": 23,
   "tytul": "Wykres temperatury parowania",
   "dzial": "Elementy i automatyka obiegu",
   "tresc": "Na podstawie wykresu przedstawiającego zmiany temperatury parowania w funkcji czasu podczas pracy układu chłodniczego określ, który element został zastosowany w tym układzie.",
   "img": "img/ee15-2021-06/z23.png",
   "img_alt": "Wykres temperatury parowania w czasie: szczyt −5 °C po zatrzymaniu, wartość stała −15 °C w czasie pracy, opisane punkty uruchomienia sprężarki, otwarcia zaworu i zatrzymania.",
   "odp": {
    "A": "Zawór pływakowy niskiego ciśnienia.",
    "B": "Termostatyczny zawór rozprężny.",
    "C": "Automatyczny zawór rozprężny.",
    "D": "Rurka kapilarna."
   },
   "klucz": "C",
   "rozw": {
    "lead": "Na wykresie temperatura parowania po uruchomieniu sprężarki spada i w czasie pracy jest stała (−15 °C), po zatrzymaniu rośnie do −5 °C. Utrzymywanie stałego ciśnienia (a więc temperatury) parowania jest cechą automatycznego zaworu rozprężnego.",
    "kroki": [],
    "bledne": {
     "A": "Zawór pływakowy utrzymuje stały poziom cieczy w parowniku, a nie stałą temperaturę parowania.",
     "B": "TZR stabilizuje przegrzanie, a temperatura parowania zmienia się wraz z obciążeniem.",
     "D": "Przy rurce kapilarnej temperatura parowania zmienia się w czasie pracy wraz z obciążeniem, nie jest stała."
    },
    "pulapka": "Płaski odcinek wykresu w czasie pracy oznacza stałe ciśnienie parowania – to znak rozpoznawczy automatycznego zaworu rozprężnego."
   }
  },
  {
   "n": 24,
   "tytul": "Przegląd agregatu samochodowego",
   "dzial": "Serwis, napełnianie, szczelność",
   "tresc": "Na podstawie zamieszczonego fragmentu instrukcji obsługi określ, po jakim przebiegu eksploatacji samochodowego agregatu chłodniczego należy wymienić łożyska koła napinacza.",
   "img": "img/ee15-2021-06/z24.png",
   "img_alt": "Fragment instrukcji obsługi agregatu: harmonogram przeglądów (kilometry, mile, przegląd wstępny, A, B) oraz opis czynności przeglądów, w tym wymiana łożysk koła pasowego napinacza w przeglądzie B.",
   "odp": {
    "A": "36 000 km",
    "B": "60 000 mi",
    "C": "36 000 mi",
    "D": "90 000 km"
   },
   "klucz": "C",
   "rozw": {
    "lead": "Łożyska koła pasowego napinacza wymienia się w „Przeglądzie B”. W harmonogramie przegląd B zaznaczono przy 60 000 km, czyli 36 000 mi (następnie co 60 000 km). Poprawna para wartości to więc 36 000 mi.",
    "kroki": [],
    "bledne": {
     "A": "36 000 km to wartość z kolumny mil podana w niewłaściwych jednostkach – 36 000 km nie występuje w tabeli.",
     "B": "60 000 mi to wartość z kolumny kilometrów podana w milach (ok. 96 500 km); takiego przeglądu B w tabeli nie ma.",
     "D": "Przy 90 000 km wykonuje się tylko przegląd A, bez przeglądu B i bez wymiany łożysk."
    },
    "pulapka": "Zwracaj uwagę na jednostki – tabela podaje kilometry i mile w osobnych kolumnach; 1 mila ≈ 1,609 km."
   }
  },
  {
   "n": 25,
   "tytul": "Zamrażanie groszku",
   "dzial": "Obieg i termodynamika",
   "tresc": "Zmrażanie groszku przeprowadza się w zamrażarkach",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "kontaktowych wielopłytowych.",
    "B": "fluidyzacyjnych w powietrzu.",
    "C": "immersyjnych w solance.",
    "D": "immersyjnych w glikolu."
   },
   "klucz": "B",
   "rozw": {
    "lead": "Groszek to produkt drobny, sypki, który zamraża się metodą IQF w zamrażarkach fluidyzacyjnych: silny strumień zimnego powietrza utrzymuje ziarna w zawieszeniu, dzięki czemu zamrażają się szybko i pojedynczo.",
    "kroki": [],
    "bledne": {
     "A": "Zamrażarki płytowe służą do produktów płaskich i opakowanych (filety, bloki), nie do sypkiego groszku.",
     "C": "Zanurzenie w solance zasalałoby groszek; metodę tę stosuje się głównie do ryb.",
     "D": "Glikol jest czynnikiem pośredniczącym, a nie środowiskiem do zamrażania żywności luzem."
    },
    "pulapka": "Skrót IQF (Individually Quick Frozen) – sypkie owoce i warzywa mrozi się w złożu fluidalnym."
   }
  },
  {
   "n": 26,
   "tytul": "Ciepło odprowadzone z wołowiny",
   "dzial": "Obliczenia",
   "tresc": "Na podstawie danych zamieszczonych w tabeli oblicz ilość ciepła odprowadzonego z 1 t wołowiny zamrażanej od temperatury 20 °C do temperatury −20 °C.<br><i>Tabela. Entalpia produktów spożywczych [kJ/kg]</i><div class=\"tblwrap\"><table><tr><th>Temperatura [°C]</th><th>Cielęcina</th><th>Dorsz chudy</th><th>Wołowina</th></tr><tr><td>20</td><td>380</td><td>410</td><td>353</td></tr><tr><td>10</td><td>340</td><td>360</td><td>320</td></tr><tr><td>0</td><td>310</td><td>323</td><td>286</td></tr><tr><td>−10</td><td>74</td><td>73</td><td>75</td></tr><tr><td>−20</td><td>44</td><td>43</td><td>43</td></tr><tr><td>−30</td><td>21</td><td>22</td><td>23</td></tr></table></div>",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "353 MJ",
    "B": "310 MJ",
    "C": "398 MJ",
    "D": "243 MJ"
   },
   "klucz": "B",
   "rozw": {
    "lead": "Odprowadzone ciepło równa się różnicy entalpii właściwych wołowiny w temperaturze początkowej i końcowej, pomnożonej przez masę.",
    "kroki": [
     [
      "Dane",
      "\\( m = 1000\\ \\mathrm{kg},\\ h_{20}=353\\ \\mathrm{kJ/kg},\\ h_{-20}=43\\ \\mathrm{kJ/kg} \\)"
     ],
     [
      "Szukane",
      "\\( Q \\) [MJ]"
     ],
     [
      "Wzór",
      "\\[ Q = m\\,(h_1 - h_2) \\]"
     ],
     [
      "Podstawienie",
      "\\( Q = 1000\\ \\mathrm{kg}\\cdot (353-43)\\ \\mathrm{kJ/kg} = 310\\,000\\ \\mathrm{kJ} \\)"
     ],
     [
      "Wynik",
      "\\( Q = 310\\ \\mathrm{MJ} \\)"
     ]
    ],
    "bledne": {
     "A": "353 MJ to entalpia przy 20 °C pomnożona przez masę – zapomniano odjąć entalpię końcową.",
     "C": "398 MJ to 353 + 45 – błąd w odczycie lub dodawanie zamiast odejmowania.",
     "D": "243 MJ to 286 − 43 (od 0 °C zamiast od 20 °C) – błędna temperatura początkowa."
    },
    "pulapka": "Czytaj wartości z kolumny właściwego produktu (tu: wołowina) i odejmuj entalpię końcową od początkowej; 1 t = 1000 kg, a 1000 kJ = 1 MJ."
   }
  },
  {
   "n": 27,
   "tytul": "Urządzenie do odzysku czynnika",
   "dzial": "Serwis, napełnianie, szczelność",
   "tresc": "Które z przedstawionych na rysunkach urządzeń jest przeznaczone do odzysku czynnika chłodniczego?",
   "img": "img/ee15-2021-06/z27.png",
   "img_alt": "Cztery urządzenia I–IV: stacja odzysku czynnika z manometrami, agregat skraplający, agregat prądotwórczy i pompa próżniowa.",
   "odp": {
    "A": "Rysunek I",
    "B": "Rysunek II",
    "C": "Rysunek III",
    "D": "Rysunek IV"
   },
   "klucz": "A",
   "rozw": {
    "lead": "Urządzenie I to stacja odzysku czynnika chłodniczego – kompaktowa jednostka z dwoma manometrami, zaworami i sprężarką, która odsysa czynnik z instalacji do butli.",
    "kroki": [],
    "bledne": {
     "B": "Urządzenie II to agregat skraplający (sprężarka ze skraplaczem), element układu chłodniczego.",
     "C": "Urządzenie III to agregat prądotwórczy (generator spalinowy).",
     "D": "Urządzenie IV to <span class=\"term\" data-key=\"pompa\">pompa próżniowa</span> – służy do odpowietrzania i osuszania instalacji, a nie do odzysku czynnika."
    },
    "pulapka": "Odzysk (stacja odzysku) i próżniowanie (pompa próżniowa) to dwie różne operacje; zgodnie z przepisami o F-gazach czynnika nie wolno wypuszczać do atmosfery."
   }
  },
  {
   "n": 28,
   "tytul": "Cel gratowania rur miedzianych",
   "dzial": "Montaż i rurociągi",
   "tresc": "Gratowanie odcinków rur miedzianych wykonuje się w celu",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "usunięcia ostrych pozostałości materiału.",
    "B": "przywrócenia kształtu i wymiaru rury.",
    "C": "umożliwienia odgałęzienia instalacji.",
    "D": "rozszerzenia średnicy rur."
   },
   "klucz": "A",
   "rozw": {
    "lead": "Po cięciu na końcu rury pozostaje zadzior i ostre krawędzie. Gratowanie (gratownikiem) usuwa je, co zapobiega zwężeniu przepływu, zanieczyszczeniu instalacji opiłkami i skaleczeniom.",
    "kroki": [],
    "bledne": {
     "B": "Kształt i wymiar rury przywraca się kalibrowaniem, nie gratowaniem.",
     "C": "Odgałęzienie instalacji wykonuje się za pomocą trójnika lub odgałęzienia wyciąganego, nie gratowaniem.",
     "D": "Rozszerzanie średnicy to kielichowanie lub rozwalcowywanie."
    },
    "pulapka": "Zadzior pozostawiony w rurze odrywa się później i może zatkać filtr lub zawór rozprężny."
   }
  },
  {
   "n": 29,
   "tytul": "Kolory węży stacji odzysku",
   "dzial": "Serwis, napełnianie, szczelność",
   "tresc": "Którymi kolorami w instrukcji obsługi stacji odzysku rysowane są elastyczne przewody oznaczone na rysunku cyframi 1, 2, 3?",
   "img": "img/ee15-2021-06/z29.png",
   "img_alt": "Schemat podłączenia stacji odzysku do instalacji: instalacja chłodnicza, bateria manometrów, stacja odzysku z filtrem, zbiornik na wadze elektronicznej; przewody oznaczone cyframi 1, 2, 3.",
   "odp": {
    "A": "1 - czarnym, 2 - niebieskim, 3 – czerwonym.",
    "B": "1 - niebieskim, 2 - czerwonym, 3 - żółtym.",
    "C": "1 - żółtym, 2 - czerwonym, 3 - niebieskim.",
    "D": "1 - czerwonym, 2 - żółtym, 3 - niebieskim."
   },
   "klucz": "B",
   "rozw": {
    "lead": "Zgodnie z przyjętą konwencją węże serwisowe mają kolory: niebieski – strona niskiego ciśnienia (gaz, 1), czerwony – strona wysokiego ciśnienia (ciecz, 2), żółty – wąż serwisowy (do stacji odzysku, wlot, 3).",
    "kroki": [],
    "bledne": {
     "A": "Czarny nie jest standardowym kolorem węża w tej konwencji, a kolejność kolorów nie zgadza się z opisem.",
     "C": "Wąż gazowy (niskie ciśnienie) powinien być niebieski, a nie żółty; kolory 1 i 3 zamienione.",
     "D": "Strona gazowa niskiego ciśnienia jest niebieska, a nie czerwona; czerwony dotyczy cieczy (wysokiego ciśnienia)."
    },
    "pulapka": "Niebieski – niskie ciśnienie (ssanie), czerwony – wysokie (tłoczenie), żółty – serwisowy (próżnia, odzysk, napełnianie)."
   }
  },
  {
   "n": 30,
   "tytul": "Przyczyna oszronienia sprężarki",
   "dzial": "Pomiary i diagnostyka",
   "tresc": "Najbardziej prawdopodobną przyczyną oszronienia przedstawionej na rysunku sprężarki jest",
   "img": "img/ee15-2021-06/z30.png",
   "img_alt": "Zdjęcie sprężarki hermetycznej pokrytej grubą warstwą szronu, z miedzianą rurką i panelem sterowania obok.",
   "odp": {
    "A": "uszkodzenie silnika sprężarki.",
    "B": "zbyt częste załączanie się sprężarki.",
    "C": "zalanie sprężarki ciekłym czynnikiem.",
    "D": "zanieczyszczenie instalacji opiłkami miedzianymi."
   },
   "klucz": "C",
   "rozw": {
    "lead": "Gruba warstwa szronu na obudowie sprężarki oznacza, że do sprężarki wraca ciekły czynnik (mokry odciąg). Odparowuje on w obudowie, odbierając ciepło i obniżając temperaturę ścianki poniżej 0 °C.",
    "kroki": [],
    "bledne": {
     "A": "Uszkodzenie silnika objawia się raczej nadmiernym nagrzewaniem, a nie szronem.",
     "B": "Zbyt częste załączanie powoduje przegrzewanie uzwojeń, nie oszronienie.",
     "D": "Opiłki miedzi zatykają filtry i uszkadzają łożyska, ale nie powodują równomiernego oszronienia obudowy."
    },
    "pulapka": "Oszronienie sprężarki to ostrzeżenie przed „uderzeniem cieczą”, które może uszkodzić zawory i korbowód – sprawdź przegrzanie i ustawienie zaworu rozprężnego."
   }
  },
  {
   "n": 31,
   "tytul": "Najniższy koszt robocizny",
   "dzial": "Kosztorys",
   "tresc": "W tabeli zestawiono koszty wymiany odwadniacza i części rurociągów wraz z kosztami przygotowania urządzenia do pracy. Który z wykonawców zaoferował tę usługę z najniższym kosztem robocizny?<div class=\"tblwrap\"><table><tr><th>Lp.</th><th>Elementy kosztorysu</th><th>Wykonawca A</th><th>Wykonawca B</th><th>Wykonawca C</th><th>Wykonawca D</th></tr><tr><td>1</td><td>Cena filtra chemicznego</td><td>110</td><td>170</td><td>220</td><td>290</td></tr><tr><td>2</td><td>Nakrętki/narzutki mosiężne GAR gwint 1/4\"</td><td>12</td><td>9</td><td>10</td><td>11</td></tr><tr><td>3</td><td>Rura miedziana 1/4\"</td><td>8</td><td>11</td><td>10</td><td>9</td></tr><tr><td>4</td><td>Czynnik chłodniczy</td><td>60</td><td>50</td><td>70</td><td>90</td></tr><tr><td>5</td><td>Demontaż układu</td><td>40</td><td>50</td><td>40</td><td>10</td></tr><tr><td>6</td><td>Wykonanie połączeń</td><td>15</td><td>20</td><td>10</td><td>20</td></tr><tr><td>7</td><td>Wykonanie ciśnieniowej próby szczelności</td><td>45</td><td>20</td><td>20</td><td>20</td></tr><tr><td>8</td><td>Napełnienie instalacji czynnikiem chłodniczym</td><td>60</td><td>50</td><td>35</td><td>40</td></tr><tr><td>9</td><td>Regulacja i uruchomienie</td><td>20</td><td>20</td><td>15</td><td>10</td></tr></table></div>",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "Wykonawca A.",
    "B": "Wykonawca B.",
    "C": "Wykonawca C.",
    "D": "Wykonawca D."
   },
   "klucz": "D",
   "rozw": {
    "lead": "Robociznę stanowią pozycje usługowe: demontaż, wykonanie połączeń, próba szczelności, napełnienie oraz regulacja i uruchomienie (pozycje 5–9). Materiały (pozycje 1–4) pomijamy. Najniższa suma wychodzi dla wykonawcy D.",
    "kroki": [
     [
      "Dane",
      "robocizna to pozycje 5–9 tabeli"
     ],
     [
      "Szukane",
      "wykonawca z najniższą sumą robocizny"
     ],
     [
      "Wzór",
      "\\[ R = p_5+p_6+p_7+p_8+p_9 \\]"
     ],
     [
      "Podstawienie",
      "\\( R_A=180,\\ R_B=160,\\ R_C=120,\\ R_D=10+20+20+40+10 \\)"
     ],
     [
      "Wynik",
      "\\( R_D = 100\\ \\mathrm{zł} \\) – najniższy"
     ]
    ],
    "bledne": {
     "A": "Wykonawca A: 40 + 15 + 45 + 60 + 20 = 180 zł – najdrożej, a nie najtaniej.",
     "B": "Wykonawca B: 50 + 20 + 20 + 50 + 20 = 160 zł – więcej niż wykonawca D.",
     "C": "Wykonawca C: 40 + 10 + 20 + 35 + 15 = 120 zł – więcej niż wykonawca D."
    },
    "pulapka": "Najczęstszy błąd to liczenie całego kosztorysu zamiast samej robocizny; wykonawca D ma najdroższe materiały (filtr 290 zł, czynnik 90 zł), ale najtańsze usługi."
   }
  },
  {
   "n": 32,
   "tytul": "Uszkodzony element sprężarki",
   "dzial": "Elementy i automatyka obiegu",
   "tresc": "Uszkodzony element sprężarki chłodniczej, oznaczony na rysunku cyfrą 1, to",
   "img": "img/ee15-2021-06/z32.png",
   "img_alt": "Zdjęcie uszkodzonego korbowodu sprężarki chłodniczej, oznaczonego czerwoną strzałką i cyfrą 1, przy czopie wału korbowego.",
   "odp": {
    "A": "tłok.",
    "B": "wodzik.",
    "C": "cylinder.",
    "D": "korbowód."
   },
   "klucz": "D",
   "rozw": {
    "lead": "Cyfra 1 wskazuje korbowód, czyli element łączący tłok (przez sworzeń) z czopem wału korbowego; ma oko na czop wału, a na zdjęciu widać pęknięcie przy tym otworze.",
    "kroki": [],
    "bledne": {
     "A": "Tłok porusza się w cylindrze i jest połączony z mniejszym końcem korbowodu; nie ma kształtu ramienia z okami.",
     "B": "Wodzik występuje w mechanizmach z prowadnicą (krzyżulcem); nie wygląda tak jak element na zdjęciu.",
     "C": "Cylinder to element nieruchomy, w którym pracuje tłok; nie jest ramieniem z okiem na wał."
    },
    "pulapka": "Korbowód zamienia ruch obrotowy wału na posuwisto-zwrotny tłoka; jego pęknięcie wymaga wymiany."
   }
  },
  {
   "n": 33,
   "tytul": "Wskazanie wagi po napełnieniu",
   "dzial": "Serwis, napełnianie, szczelność",
   "tresc": "Ile powinno wynosić wskazanie wagi nieposiadającej funkcji dynamicznego tarowania po napełnieniu instalacji czynnikiem chłodniczym w ilości 7,4 kg, jeżeli do napełniania użyto butli, która przed napełnieniem ważyła brutto 15,3 kg, a tara butli wynosi 2,3 kg ?",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "5,6 kg",
    "B": "7,4 kg",
    "C": "7,9 kg",
    "D": "15,3 kg"
   },
   "klucz": "C",
   "rozw": {
    "lead": "Waga bez tarowania pokazuje masę brutto, czyli masę butli wraz z pozostałym czynnikiem. Po przekazaniu do instalacji 7,4 kg masa butli maleje o 7,4 kg względem wartości początkowej 15,3 kg.",
    "kroki": [
     [
      "Dane",
      "\\( m_{br,0} = 15{,}3\\ \\mathrm{kg},\\ m_{cz} = 7{,}4\\ \\mathrm{kg},\\ m_t=2{,}3\\ \\mathrm{kg} \\)"
     ],
     [
      "Szukane",
      "\\( m_{br,1} \\) [kg]"
     ],
     [
      "Wzór",
      "\\[ m_{br,1} = m_{br,0} - m_{cz} \\]"
     ],
     [
      "Podstawienie",
      "\\( m_{br,1} = 15{,}3 - 7{,}4 \\)"
     ],
     [
      "Wynik",
      "\\( m_{br,1} = 7{,}9\\ \\mathrm{kg} \\)"
     ]
    ],
    "bledne": {
     "A": "5,6 kg to masa samego czynnika pozostałego w butli (15,3 − 2,3 − 7,4); waga bez tarowania pokazuje też tarę butli.",
     "B": "7,4 kg to masa wprowadzonego czynnika, a nie wskazanie wagi z butlą.",
     "D": "15,3 kg to wskazanie przed napełnieniem; część czynnika została już przekazana do instalacji."
    },
    "pulapka": "Tara (2,3 kg) jest daną zbędną – wskazanie brutto zmniejsza się dokładnie o masę przekazanego czynnika."
   }
  },
  {
   "n": 34,
   "tytul": "Kolejność dokręcania śrub głowicy",
   "dzial": "Serwis, napełnianie, szczelność",
   "tresc": "Na podstawie zamieszczonego rysunku wskaż poprawną kolejność wkręcania śrub mocujących głowicę sprężarki chłodniczej, tłokowej, dwucylindrowej po wymianie uszczelki pod głowicą.",
   "img": "img/ee15-2021-06/z34.png",
   "img_alt": "Rysunek uszczelki pod głowicę dwucylindrowej sprężarki z numerowanymi otworami śrub 1–6 (1, 2, 3 u góry; 4, 5, 6 u dołu).",
   "odp": {
    "A": "3, 5, 2, 4, 1, 6",
    "B": "2, 5, 4, 1, 3, 6",
    "C": "4, 1, 5, 2, 6, 3",
    "D": "1, 2, 3, 6, 5, 4"
   },
   "klucz": "B",
   "rozw": {
    "lead": "Śruby głowicy wkręca się od środka na zewnątrz, naprzemiennie, aby uszczelka była dociskana równomiernie i głowica się nie wypaczyła. Zgodnie z kluczem CKE poprawna kolejność to 2, 5, 4, 1, 3, 6 (najpierw środkowe 2 i 5).",
    "kroki": [],
    "bledne": {
     "A": "Kolejność 3, 5, 2, 4, 1, 6 zaczyna się od śruby narożnej 3, a nie od środkowych.",
     "C": "Kolejność 4, 1, 5, 2, 6, 3 zaczyna się od narożnej śruby 4 i nie dociska środka jako pierwszego.",
     "D": "Kolejność 1, 2, 3, 6, 5, 4 to dokręcanie po obwodzie, które nie wyrównuje docisku uszczelki."
    },
    "pulapka": "Zasada: od środka na zewnątrz, na krzyż, w kilku etapach (najpierw lekko, potem docelowym momentem klucza dynamometrycznego)."
   }
  },
  {
   "n": 35,
   "tytul": "Częstotliwość prób szczelności",
   "dzial": "Czynniki i F-gazy",
   "tresc": "Korzystając z danych zamieszczonych w tabeli określ jak często należy wykonywać próby szczelności instalacji napełnionej 150 kg czynnika R404A, jeżeli instalacja posiada stały system wykrywania wycieków.<div class=\"tblwrap\"><table><tr><th>Napełnienie [kg]</th><th>Czynnik</th><th>GWP</th><th>Ekw. CO<sub>2</sub> [t]</th><th>Częstotliwość kontroli instalacji*</th></tr><tr><td>6,5</td><td>R32</td><td>675</td><td>4,39</td><td>nie podlega kontroli</td></tr><tr><td>6,5</td><td>R410A</td><td>2088</td><td>13,57</td><td>co najmniej raz na 12 m-cy</td></tr><tr><td>25</td><td>R404A</td><td>3992</td><td>99,8</td><td>co najmniej raz na 6 m-cy</td></tr><tr><td>150</td><td>R134A</td><td>1340</td><td>214</td><td>co najmniej raz na 6 m-cy</td></tr><tr><td>150</td><td>R404A</td><td>3992</td><td>598,8</td><td>co najmniej raz na 3 m-ce</td></tr></table></div>*Jeśli instalacja wyposażona jest w stały system wykrywania wycieków, częstotliwość jest dwukrotnie mniejsza.",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "Co najmniej raz w roku.",
    "B": "Co najmniej raz na 3 m-ce.",
    "C": "Co najmniej 2 razy w roku.",
    "D": "Co najmniej raz na 1,5 m-ca."
   },
   "klucz": "C",
   "rozw": {
    "lead": "Dla 150 kg R404A (598,8 t CO<sub>2</sub>-ekw.) tabela podaje kontrolę co 3 miesiące. Przy stałym systemie wykrywania wycieków częstotliwość jest dwukrotnie mniejsza, więc kontrola co 6 miesięcy, czyli 2 razy w roku.",
    "kroki": [
     [
      "Dane",
      "okres bazowy T = 3 miesiące (150 kg R404A); system wykrywania → częstotliwość ÷2"
     ],
     [
      "Szukane",
      "okres kontroli T′"
     ],
     [
      "Wzór",
      "\\[ T' = 2\\,T \\]"
     ],
     [
      "Podstawienie",
      "\\( T' = 2\\cdot 3 \\)"
     ],
     [
      "Wynik",
      "\\( T' = 6 \\) miesięcy, czyli 2 razy w roku"
     ]
    ],
    "bledne": {
     "A": "Raz w roku to kontrola co 12 miesięcy – to czterokrotne, a nie dwukrotne zmniejszenie częstotliwości.",
     "B": "Co 3 miesiące to wartość bazowa z tabeli dla instalacji bez systemu wykrywania wycieków.",
     "D": "Co 1,5 miesiąca to zwiększenie częstotliwości, a nie zmniejszenie – zła interpretacja słowa „dwukrotnie”."
    },
    "pulapka": "„Dwukrotnie mniejsza częstotliwość” oznacza dwa razy rzadziej, czyli okres się podwaja (3 → 6 miesięcy). Arkusz oparto na rozporządzeniu 517/2014; obecnie obowiązuje rozporządzenie (UE) 2024/573 (<span class=\"term\" data-key=\"fgaz\">F-gazy</span>), które zmieniło progi i zasady kontroli – tabela nie odzwierciedla aktualnego prawa."
   }
  },
  {
   "n": 36,
   "tytul": "Czynnik wykluczający miedź",
   "dzial": "Czynniki i F-gazy",
   "tresc": "Który z zastosowanych czynników wyklucza stosowanie rurociągów miedzianych w urządzeniu chłodniczym?",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "R12",
    "B": "R134a",
    "C": "R407A",
    "D": "R717"
   },
   "klucz": "D",
   "rozw": {
    "lead": "R717 to amoniak (NH<sub>3</sub>). Amoniak, zwłaszcza z wilgocią, silnie koroduje miedź i jej stopy, dlatego w instalacjach amoniakalnych stosuje się rury stalowe.",
    "kroki": [],
    "bledne": {
     "A": "R12 to freon (CFC) obojętny dla miedzi; jest wycofany ze względu na ochronę warstwy ozonowej, nie z powodu korozji miedzi.",
     "B": "R134a (HFC) jest kompatybilny z miedzią.",
     "C": "R407A (mieszanina HFC) jest kompatybilny z miedzią."
    },
    "pulapka": "W instalacjach z amoniakiem nie stosuje się miedzi ani mosiądzu; R12 jest wycofany z użytku, ale nie ma to związku z materiałem rur."
   }
  },
  {
   "n": 37,
   "tytul": "Demontaż łożyska z wału",
   "dzial": "Serwis, napełnianie, szczelność",
   "tresc": "Na którym rysunku przedstawiono demontaż łożyska tocznego z wału sprężarki chłodniczej ?",
   "img": "img/ee15-2021-06/z37.png",
   "img_alt": "Cztery rysunki techniczne I–IV: osadzanie łożyska tuleją, ściągacz zdejmujący łożysko z wału, prasowanie łożyska na wał oraz montaż łożyska w obudowie.",
   "odp": {
    "A": "Rysunek I",
    "B": "Rysunek II",
    "C": "Rysunek III",
    "D": "Rysunek IV"
   },
   "klucz": "B",
   "rozw": {
    "lead": "Rysunek II pokazuje ściągacz z ramionami zaczepionymi o pierścień łożyska i śrubą dociskającą wał – narzędzie do demontażu łożyska z wału.",
    "kroki": [],
    "bledne": {
     "A": "Na rysunku I łożysko jest osadzane na wale za pomocą tulei dociskowej (siła wciskająca) – to montaż, nie demontaż.",
     "C": "Rysunek III przedstawia wciskanie łożyska prasą lub tulejką na wał – ilustracja montażu.",
     "D": "Rysunek IV pokazuje montaż łożyska w obudowie za pomocą tulei i nacisku."
    },
    "pulapka": "Łożysko demontuje się ściągaczem, przykładając siłę do pierścienia osadzonego ciasno; uderzanie młotkiem w łożysko je uszkadza."
   }
  },
  {
   "n": 38,
   "tytul": "Zastosowanie klucza dynamometrycznego",
   "dzial": "Materiały i rysunek techniczny",
   "tresc": "Klucz dynamometryczny przeznaczony jest do",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "dokręcania śrub w miejscach trudnodostępnych.",
    "B": "dokręcania śrub z określonym momentem siły.",
    "C": "odkręcania śrub skorodowanych.",
    "D": "odkręcania śrub rzymskich."
   },
   "klucz": "B",
   "rozw": {
    "lead": "Klucz dynamometryczny ma wskaźnik lub mechanizm ograniczający, który pozwala dokręcić śrubę z zadanym momentem siły, np. śruby głowicy sprężarki zgodnie z dokumentacją producenta.",
    "kroki": [],
    "bledne": {
     "A": "W miejscach trudnodostępnych stosuje się klucze przegubowe, kątowe lub nasadowe, a nie dynamometryczny.",
     "C": "Skorodowane śruby odkręca się po zastosowaniu penetratora, kluczem o dużej dźwigni lub udarowym; klucz dynamometryczny do tego nie służy.",
     "D": "Śruby rzymskie (ściągacze) reguluje się kluczem płaskim; moment siły nie ma tu znaczenia."
    },
    "pulapka": "Klucza dynamometrycznego nie używa się do odkręcania ani do luzowania zapieczonych połączeń; po użyciu ustawia się go na najmniejszą wartość skali."
   }
  },
  {
   "n": 39,
   "tytul": "Pęknięty korbowód",
   "dzial": "Serwis, napełnianie, szczelność",
   "tresc": "W przypadku stwierdzenia drobnego pęknięcia korbowodu wykonanego w technologii odlewu, korbowód ten",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "zszywa się wkręcanymi kołkami śrubowymi.",
    "B": "spawa się elektrycznie lub gazowo.",
    "C": "lutuje się lutem twardym.",
    "D": "wymienia się na nowy."
   },
   "klucz": "D",
   "rozw": {
    "lead": "Korbowód jest elementem silnie obciążonym dynamicznie, a odlew ma niską odporność na zmęczenie. Nawet drobne pęknięcie dyskwalifikuje element – naprawa (spawanie, lutowanie, zszywanie) nie przywróci wytrzymałości, więc korbowód wymienia się na nowy.",
    "kroki": [],
    "bledne": {
     "A": "Zszywanie kołkami śrubowymi stosuje się do naprawy pęknięć korpusów, nie elementów obciążonych cyklicznie.",
     "B": "Spawanie odlewu zmienia strukturę materiału i wprowadza naprężenia, a pęknięcie może się rozwinąć.",
     "C": "Lut twardy nie zapewnia wytrzymałości wymaganej dla korbowodu."
    },
    "pulapka": "Elementy układu korbowego (korbowód, wał, sworznie) po wykryciu pęknięcia zawsze się wymienia; naprawy spawaniem dopuszcza się dla korpusów."
   }
  },
  {
   "n": 40,
   "tytul": "Ciepło wydzielane przez ludzi",
   "dzial": "Obliczenia",
   "tresc": "Ile ciepła wydzieli się w komorze chłodniczej o temperaturze −10 °C w ciągu doby, jeżeli w komorze wykonują ciężką pracę dwie osoby codziennie przez 4 godziny?",
   "img": "img/ee15-2021-06/z40.png",
   "img_alt": "Wykres ciepła wydzielanego przez człowieka w kJ/h na osobę w funkcji temperatury w komorze od +10 do −20 °C dla pracy ciężkiej i lekkiej.",
   "odp": {
    "A": "16 000 kJ",
    "B": "12 000 kJ",
    "C": "8 000 kJ",
    "D": "6 000 kJ"
   },
   "klucz": "B",
   "rozw": {
    "lead": "Z wykresu dla temperatury −10 °C i pracy ciężkiej odczytujemy ok. 1500 kJ/(h·osobę). Ciepło dobowe jest iloczynem tej wartości, liczby osób i czasu pracy.",
    "kroki": [
     [
      "Dane",
      "\\( q = 1500\\ \\mathrm{kJ/(h\\cdot osobę)},\\ n=2,\\ \\tau=4\\ \\mathrm{h} \\)"
     ],
     [
      "Szukane",
      "\\( Q \\) [kJ]"
     ],
     [
      "Wzór",
      "\\[ Q = q\\cdot n\\cdot \\tau \\]"
     ],
     [
      "Podstawienie",
      "\\( Q = 1500\\cdot 2\\cdot 4 \\)"
     ],
     [
      "Wynik",
      "\\( Q = 12\\,000\\ \\mathrm{kJ} \\)"
     ]
    ],
    "bledne": {
     "A": "16 000 kJ wynikałoby z odczytu 2000 kJ/(h·osobę), który nie występuje na wykresie dla −10 °C.",
     "C": "8 000 kJ odpowiada 1000 kJ/(h·osobę) – to wartość niższa niż dla pracy ciężkiej.",
     "D": "6 000 kJ to 1500 kJ/h · 4 h dla jednej osoby – pominięto drugą osobę."
    },
    "pulapka": "Odczytuj linię „Praca ciężka” (górną) dla temperatury −10 °C i pamiętaj o mnożeniu przez liczbę osób oraz godzin."
   }
  }
 ]
};
