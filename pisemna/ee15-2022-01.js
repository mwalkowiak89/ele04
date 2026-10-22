/* Część pisemna – arkusz EE.15-SG-22.01 (styczeń 2022). Dane: pytania CKE + opracowanie rozwiązań. */
(window.ELE04_BANK = window.ELE04_BANK || {})["ee15-2022-01"] = {
 "id": "ee15-2022-01",
 "kwalifikacja": "EE.15",
 "kod": "EE.15-SG-22.01",
 "sesja": "styczeń 2022",
 "pytania": [
  {
   "n": 1,
   "tytul": "Element instalacji oznaczony cyfrą 4",
   "dzial": "Elementy i automatyka obiegu",
   "tresc": "Który element instalacji chłodniczej oznaczono na schemacie cyfrą 4?",
   "img": "img/ee15-2022-01/z01.png",
   "img_alt": "Schemat instalacji chłodniczej z dwiema komorami (−15 °C i −10 °C): 1 – skraplacz z wentylatorem, 2 – sprężarka, 3 – zbiornik cieczy, 4 – wymiennik z wentylatorami w komorze.",
   "odp": {
    "A": "Skraplacz.",
    "B": "Sprężarkę.",
    "C": "Termostat.",
    "D": "Parownik."
   },
   "klucz": "D",
   "rozw": {
    "lead": "Cyfra 4 wskazuje wymiennik z wentylatorami umieszczony wewnątrz komory chłodniczej (−15 °C), do którego ciecz dopływa przez zawór rozprężny – jest to <span class=\"term\" data-key=\"parownik\">parownik</span>. Pozostałe cyfry: 1 – <span class=\"term\" data-key=\"skraplacz\">skraplacz</span> (na zewnątrz), 2 – sprężarka, 3 – zbiornik cieczy.",
    "kroki": [],
    "bledne": {
     "A": "Skraplacz to element oznaczony cyfrą 1 – leży poza komorami, z wentylatorem odprowadzającym ciepło do otoczenia.",
     "B": "Sprężarka to element oznaczony cyfrą 2 (zielony agregat na dole schematu).",
     "C": "Termostat jest elementem sterującym (czujnikiem temperatury), a nie wymiennikiem ciepła; cyfra 4 wskazuje duży wymiennik żebrowy w komorze."
    },
    "pulapka": "Rozpoznawaj elementy po położeniu w obiegu: wymiennik w chłodzonej komorze to parownik, wymiennik na zewnątrz – skraplacz."
   }
  },
  {
   "n": 2,
   "tytul": "Rodzaj przedstawionej sprężarki",
   "dzial": "Elementy i automatyka obiegu",
   "tresc": "Na rysunku przedstawiono sprężarkę",
   "img": "img/ee15-2022-01/z02.png",
   "img_alt": "Zdjęcie dużej sprężarki chłodniczej z silnikiem elektrycznym, panelem sterowania i zbiornikiem (odolejaczem) obok.",
   "odp": {
    "A": "tłokową.",
    "B": "śrubową.",
    "C": "rotacyjną.",
    "D": "odśrodkową."
   },
   "klucz": "A",
   "rozw": {
    "lead": "Na rysunku widać dużą, wielocylindrową sprężarkę z masywnym korpusem, głowicami cylindrów i silnikiem elektrycznym – to konstrukcja tłokowa, najczęstsza w średnich i dużych agregatach chłodniczych.",
    "kroki": [],
    "bledne": {
     "B": "Sprężarka śrubowa ma zwartą obudowę z dwoma wirnikami śrubowymi i nie ma widocznych głowic cylindrowych.",
     "C": "Sprężarki rotacyjne są małe, najczęściej hermetyczne, stosowane w klimatyzatorach i chłodziarkach domowych.",
     "D": "Sprężarka odśrodkowa (turbosprężarka) ma wirnik w spiralnej obudowie i występuje w dużych agregatach wody lodowej – nie ma wielu cylindrów."
    },
    "pulapka": null
   }
  },
  {
   "n": 3,
   "tytul": "Elementy składowe agregatu chłodniczego",
   "dzial": "Elementy i automatyka obiegu",
   "tresc": "Elementami składowymi przedstawionego na rysunku agregatu chłodniczego są:",
   "img": "img/ee15-2022-01/z03.png",
   "img_alt": "Zdjęcie niebieskiego agregatu chłodniczego: sprężarka tłokowa z silnikiem elektrycznym na zbiorniku (skraplaczu) oraz manometry.",
   "odp": {
    "A": "pompa, parownik i silnik.",
    "B": "parownik, sprężarka i silnik.",
    "C": "sprężarka, skraplacz i silnik.",
    "D": "skraplacz, parownik i pompa."
   },
   "klucz": "C",
   "rozw": {
    "lead": "Agregat skraplający (sprężarkowo-skraplający) składa się ze sprężarki, napędzającego ją silnika elektrycznego i <span class=\"term\" data-key=\"skraplacz\">skraplacza</span> (tu płaszczowo-rurowego, pod spodem agregatu). Parownik jest odrębnym elementem instalacji.",
    "kroki": [],
    "bledne": {
     "A": "W agregacie nie ma pompy ani parownika – sprężarka tłokowa nie wymaga pompy, a parownik montuje się w chłodzonym obiekcie.",
     "B": "Parownika nie ma w agregacie, a skraplacz (widoczny w dolnej części) został pominięty.",
     "D": "Brakuje sprężarki i silnika – głównych elementów agregatu – a parownika i pompy na zdjęciu nie ma."
    },
    "pulapka": null
   }
  },
  {
   "n": 4,
   "tytul": "Moc sprężarki z EER",
   "dzial": "Obliczenia",
   "tresc": "Określ moc sprężarki L, jeśli moc chłodnicza urządzenia chłodniczego wynosi Q<sub>c</sub> = 60 kW, a współczynnik wydajności chłodniczej jest równy <span class=\"term\" data-key=\"eer\">EER</span><sub>c</sub> = 3.",
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
    "lead": "Współczynnik wydajności chłodniczej to stosunek mocy chłodniczej do mocy doprowadzonej do sprężarki, więc moc sprężarki wyznaczamy dzieląc moc chłodniczą przez EER.",
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
      "\\[ EER_c = \\frac{Q_c}{L} \\;\\Rightarrow\\; L = \\frac{Q_c}{EER_c} \\]"
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
     "A": "10 kW nie wynika z poprawnego podstawienia; przy EER = 3 moc sprężarki 10 kW dałaby moc chłodniczą tylko 30 kW.",
     "C": "40 kW to różnica Q<sub>c</sub> − L (60 − 20), a nie moc sprężarki.",
     "D": "90 kW nie wynika z przekształcenia wzoru; mnożenie zamiast dzielenia dałoby 60·3 = 180 kW."
    },
    "pulapka": "Moc skraplacza to Q<sub>k</sub> = Q<sub>c</sub> + L = 80 kW – nie myl jej z mocą sprężarki."
   }
  },
  {
   "n": 5,
   "tytul": "Dobór chłodnicy do agregatu",
   "dzial": "Obliczenia",
   "tresc": "Na podstawie zamieszczonego fragmentu danych katalogowych, dobierz model chłodnicy powietrza do freonowego agregatu skraplającego, pobierającego moc elektryczną 0,5 kW, przy planowanym współczynniku wydajności chłodniczej w zakresie od 3,0 do 3,5.",
   "img": "img/ee15-2022-01/z05.png",
   "img_alt": "Tabela katalogowa freonowych chłodnic powietrza: EP 80 – 0,55 kW, EP 100 – 0,77 kW, EP 200 – 1,55 kW, EP 300 – 2,31 kW.",
   "odp": {
    "A": "EP 80",
    "B": "EP 100",
    "C": "EP 200",
    "D": "EP 300"
   },
   "klucz": "C",
   "rozw": {
    "lead": "Wydajność chłodnicza wynika z EER i pobieranej mocy: Q<sub>c</sub> = EER · P. Dla EER 3,0–3,5 i P = 0,5 kW wydajność powinna mieścić się w zakresie 1,5–1,75 kW; w katalogu zakres ten spełnia tylko EP 200 (1,55 kW).",
    "kroki": [
     [
      "Dane",
      "\\( P = 0{,}5\\ \\mathrm{kW},\\ EER = 3{,}0\\ldots 3{,}5 \\)"
     ],
     [
      "Szukane",
      "\\( Q_c \\) [kW]"
     ],
     [
      "Wzór",
      "\\[ Q_c = EER \\cdot P \\]"
     ],
     [
      "Podstawienie",
      "\\( Q_{c,min} = 3{,}0\\cdot 0{,}5 = 1{,}5\\ \\mathrm{kW},\\quad Q_{c,max} = 3{,}5\\cdot 0{,}5 = 1{,}75\\ \\mathrm{kW} \\)"
     ],
     [
      "Wynik",
      "Zakres 1,5–1,75 kW spełnia EP 200 (1,55 kW)."
     ]
    ],
    "bledne": {
     "A": "EP 80 (0,55 kW) dałby EER = 0,55/0,5 = 1,1 – znacznie poniżej wymaganego zakresu.",
     "B": "EP 100 (0,77 kW) dałby EER ≈ 1,54 – za mało.",
     "D": "EP 300 (2,31 kW) dałby EER ≈ 4,6 – powyżej planowanego zakresu."
    },
    "pulapka": "Zakres EER daje przedział wydajności, a nie jedną wartość – sprawdź, który model mieści się w obu granicach."
   }
  },
  {
   "n": 6,
   "tytul": "Koszt materiałów instalacji cieczowej",
   "dzial": "Kosztorys",
   "tresc": "Na podstawie fragmentu kosztorysu oblicz koszt materiałów niezbędnych do wykonania instalacji chłodniczej cieczowej.",
   "img": "img/ee15-2022-01/z06.png",
   "img_alt": "Fragment kosztorysu „Instalacja chłodnicza cieczowa” z pozycjami 1–11: rurociągi, trójniki, złączki, zawory, przygotowanie do uruchomienia i izolacja Armaflex, z ilościami, cenami i wartościami.",
   "odp": {
    "A": "968,37 zł",
    "B": "1268,37 zł",
    "C": "4046,17 zł",
    "D": "4346,17 zł"
   },
   "klucz": "C",
   "rozw": {
    "lead": "Do materiałów zaliczamy rurociągi, trójniki, złączki, zawory oraz izolację (otuliny Armaflex). Pozycje 8–10 (przedmuchanie, próba ciśnieniowa, napełnienie) to usługi, więc nie wchodzą w koszt materiałów.",
    "kroki": [
     [
      "Dane",
      "Pozycje materiałowe: 1, 3, 5, 7 i 11 (pozycje 8–10 to usługi)."
     ],
     [
      "Szukane",
      "\\( K_m \\) [zł]"
     ],
     [
      "Wzór",
      "\\[ K_m = \\sum W_i \\]"
     ],
     [
      "Podstawienie",
      "\\( K_m = 540{,}00 + 39{,}90 + 52{,}07 + 336{,}40 + 3077{,}80 \\)"
     ],
     [
      "Wynik",
      "\\( K_m = 4046{,}17\\ \\mathrm{zł} \\)"
     ]
    ],
    "bledne": {
     "A": "968,37 zł to suma materiałów bez izolacji (pozycje 1, 3, 5, 7) – pominięto otuliny za 3077,80 zł, które także są materiałem.",
     "B": "1268,37 zł = 968,37 + 300 zł usług (50 + 160 + 90); pominięto izolację i doliczono robociznę.",
     "D": "4346,17 zł = materiały (4046,17 zł) + 300 zł usług przygotowania do uruchomienia – usługi nie są materiałami."
    },
    "pulapka": "Rozdziel pozycje na materiały i usługi; izolacja rurociągów jest materiałem, choć w kosztorysie ma najwyższą wartość."
   }
  },
  {
   "n": 7,
   "tytul": "Odstępy montażowe agregatu skraplającego",
   "dzial": "Montaż i rurociągi",
   "tresc": "Na podstawie fragmentu zaleceń instalacyjnych, wskaż które wartości odstępów od ściany i przeszkód zapewniają prawidłowe zamontowanie agregatu skraplającego OP-MGZD086MTC21E.",
   "img": "img/ee15-2022-01/z07.png",
   "img_alt": "Rysunek agregatu skraplającego przy ścianie z odstępami: odstęp 1 = 1 × wysokość agregatu, odstęp 2 = 2 × szerokość agregatu, oraz tabela wymiarów (H, W, D) agregatów OP-MGZD054…271MTC21E.",
   "odp": {
    "A": "odstęp 1: 0,5 m, odstęp 2: 1,6 m",
    "B": "odstęp 1: 0,5 m, odstęp 2: 2,1 m",
    "C": "odstęp 1: 0,6 m, odstęp 2: 1,6 m",
    "D": "odstęp 1: 0,6 m, odstęp 2: 2,1 m"
   },
   "klucz": "D",
   "rozw": {
    "lead": "Z tabeli: agregat OP-MGZD086MTC21E ma wysokość H = 555 mm i szerokość W = 1000 mm. Odstęp 1 musi wynosić co najmniej 1 × H = 0,555 m, a odstęp 2 co najmniej 2 × W = 2,0 m. Oba warunki spełnia tylko odpowiedź D.",
    "kroki": [
     [
      "Dane",
      "\\( H = 555\\ \\mathrm{mm},\\ W = 1000\\ \\mathrm{mm} \\)"
     ],
     [
      "Szukane",
      "Minimalne odstępy 1 i 2."
     ],
     [
      "Wzór",
      "\\( a_1 \\ge 1\\cdot H,\\quad a_2 \\ge 2\\cdot W \\)"
     ],
     [
      "Podstawienie",
      "\\( a_1 \\ge 0{,}555\\ \\mathrm{m},\\quad a_2 \\ge 2\\cdot 1{,}0 = 2{,}0\\ \\mathrm{m} \\)"
     ],
     [
      "Wynik",
      "Odstęp 1 ≥ 0,555 m i odstęp 2 ≥ 2,0 m, czyli 0,6 m i 2,1 m."
     ]
    ],
    "bledne": {
     "A": "0,5 m < 0,555 m oraz 1,6 m < 2,0 m – oba odstępy za małe.",
     "B": "Odstęp 2 (2,1 m) jest wystarczający, ale odstęp 1 = 0,5 m jest mniejszy niż wymagane 0,555 m.",
     "C": "Odstęp 1 (0,6 m) jest wystarczający, ale odstęp 2 = 1,6 m jest mniejszy niż wymagane 2,0 m (1,6 m = 2 × 800 mm to szerokość mniejszego agregatu z pierwszego wiersza tabeli)."
    },
    "pulapka": "Wiersze tabeli o podobnych nazwach mają różne wymiary – czytaj wiersz właściwego typu agregatu i pamiętaj o przeliczeniu mm na m."
   }
  },
  {
   "n": 8,
   "tytul": "Narzędzie do ręcznego gięcia rur",
   "dzial": "Montaż i rurociągi",
   "tresc": "Które z przedstawionych na rysunkach narzędzi służy do ręcznego gięcia rur miedzianych?",
   "img": "img/ee15-2022-01/z08.png",
   "img_alt": "Cztery narzędzia oznaczone I–IV: I – czerwona ręczna giętarka do rur, II – dźwigniowy przyrząd z uchwytami, III – aluminiowy przyrząd do obróbki końcówek rur, IV – niebieska krawędziarka do blachy.",
   "odp": {
    "A": "I.",
    "B": "II.",
    "C": "III.",
    "D": "IV."
   },
   "klucz": "A",
   "rozw": {
    "lead": "Narzędzie I to ręczna giętarka do rur miedzianych (dźwignia z szablonem i prowadnicą), pozwalająca wykonać łuk bez załamania rury.",
    "kroki": [],
    "bledne": {
     "B": "II to dźwigniowe narzędzie do obróbki końców rur (rozszerzania), a nie do gięcia.",
     "C": "III to przyrząd do obróbki końcówek rur (np. kielichowania), nie giętarka.",
     "D": "IV to ręczna krawędziarka do blachy – służy do gięcia blach, nie rur."
    },
    "pulapka": "Do gięcia rur miedzianych używa się giętarek ze sprężyną, szablonem lub rolkami – nigdy nie wolno zginać rury „na kolanie”, bo ulega spłaszczeniu."
   }
  },
  {
   "n": 9,
   "tytul": "Narzędzie do przecinania rur miedzianych",
   "dzial": "Montaż i rurociągi",
   "tresc": "Które narzędzie należy zastosować do przecinania rur miedzianych?",
   "img": "img/ee15-2022-01/z09.png",
   "img_alt": "Cztery narzędzia I–IV: I – czerwony obcinak rolkowy do rur, II – szczypce do ściągania izolacji, III – szczypce tnące boczne, IV – narzędzie z dwiema rolkami i długimi rączkami.",
   "odp": {
    "A": "I.",
    "B": "II.",
    "C": "III.",
    "D": "IV."
   },
   "klucz": "A",
   "rozw": {
    "lead": "Do przecinania rur miedzianych stosuje się obcinak rolkowy (I): obracany wokół rury z krążkiem tnącym daje prostopadłe, równe cięcie bez dużej ilości wiórów.",
    "kroki": [],
    "bledne": {
     "B": "II to szczypce do ściągania izolacji z przewodów elektrycznych.",
     "C": "III to szczypce tnące boczne do drutu i przewodów – zgniatają rurę zamiast ją przeciąć.",
     "D": "IV to narzędzie z rolkami do gięcia/formowania rur, nie do cięcia."
    },
    "pulapka": "Po przecięciu obcinakiem rolkowym należy usunąć zadzior (gratowanie) wewnątrz rury."
   }
  },
  {
   "n": 10,
   "tytul": "Posługiwanie się palnikiem przy lutowaniu zaworu",
   "dzial": "Montaż i rurociągi",
   "tresc": "Na którym rysunku zilustrowano prawidłowy sposób posługiwania się palnikiem podczas montażu zaworu rozprężnego w technologii lutowania?",
   "img": "img/ee15-2022-01/z10.png",
   "img_alt": "Cztery rysunki I–IV pokazujące sposób lutowania rurek przy zaworze rozprężnym palnikiem; czerwone strzałki wskazują kierunek ciepła, na II i IV dodatkowa dłoń osłania górną część zaworu.",
   "odp": {
    "A": "I.",
    "B": "II.",
    "C": "III.",
    "D": "IV."
   },
   "klucz": "D",
   "rozw": {
    "lead": "Podczas <span class=\"term\" data-key=\"lut\">lutowania</span> zaworu rozprężnego płomień kieruje się na końcówki rurek, tak aby ciepło odpływało od korpusu zaworu, a sam korpus (z elementami wrażliwymi na temperaturę) był dodatkowo osłonięty. Taki sposób przedstawia rysunek IV: strzałki ciepła są skierowane od zaworu, a korpus jest zabezpieczony.",
    "kroki": [],
    "bledne": {
     "A": "Na rysunku I brak osłony korpusu, a ciepło z jednego złącza kierowane jest w stronę zaworu – ryzyko przegrzania.",
     "B": "Na rysunku II płomień grzeje lewe złącze tak, że ciepło płynie w stronę korpusu zaworu – ryzyko przegrzania.",
     "C": "Na rysunku III korpus zaworu od góry nie jest osłonięty, więc ciepło z lutowania może uszkodzić jego elementy."
    },
    "pulapka": "Korpus zaworu rozprężnego zabezpiecza się przed przegrzaniem (np. mokrą szmatą), a lutowanie wykonuje się w przepływie azotu, według instrukcji producenta."
   }
  },
  {
   "n": 11,
   "tytul": "Izolowane uchwyty narzędzi",
   "dzial": "BHP i przepisy",
   "tresc": "Podczas montażu elektrycznego układu zasilającego urządzenia w instalacji chłodniczej, instalator używa narzędzi, w których uchwyty pokryte są izolacją w celu ochrony przed",
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
    "lead": "Izolacja uchwytów narzędzi elektroizolacyjnych (tzw. narzędzi 1000 V) chroni użytkownika przed porażeniem prądem elektrycznym przy przypadkowym zetknięciu z elementem pod napięciem.",
    "kroki": [],
    "bledne": {
     "B": "Przed urazami mechanicznymi chronią rękawice i okulary, a izolacja uchwytu tego celu nie spełnia.",
     "C": "Izolacja nie służy ochronie przed wilgocią – ta wymaga odpowiednich obudów i stopnia ochrony IP urządzeń.",
     "D": "Ochrona przed wysoką temperaturą wymaga rękawic termoodpornych, a nie izolacji elektrycznej."
    },
    "pulapka": "Narzędzia do prac pod napięciem mają oznaczenie 1000 V; mimo to pracę przy instalacji wykonuje się po wyłączeniu zasilania."
   }
  },
  {
   "n": 12,
   "tytul": "Butla do próby szczelności azotem",
   "dzial": "Serwis, napełnianie, szczelność",
   "tresc": "Której butli należy użyć do wykonania ciśnieniowej próby szczelności w urządzeniu chłodniczym za pomocą suchego azotu?",
   "img": "img/ee15-2022-01/z12.png",
   "img_alt": "Cztery butle gazowe: I – tlen (O2, ramię białe, korpus niebieski), II – dwutlenek węgla (CO2, szara), III – azot (N2, czarne ramię, korpus szary), IV – amoniak (NH3, żółte ramię).",
   "odp": {
    "A": "I.",
    "B": "II.",
    "C": "III.",
    "D": "IV."
   },
   "klucz": "C",
   "rozw": {
    "lead": "<span class=\"term\" data-key=\"proba\">Próbę ciśnieniową</span> wykonuje się suchym, beztlenowym azotem (<span class=\"term\" data-key=\"ofn\">OFN</span>) – butla III jest oznaczona N<sub>2</sub> i ma czarne ramię właściwe dla azotu.",
    "kroki": [],
    "bledne": {
     "A": "Butla I zawiera tlen (O<sub>2</sub>) – w kontakcie z olejem sprężarkowym grozi wybuchem.",
     "B": "Butla II zawiera dwutlenek węgla (CO<sub>2</sub>) – niedopuszczalny do prób, bo skrapla się i wnosi wilgoć.",
     "D": "Butla IV zawiera amoniak (NH<sub>3</sub>) – gaz toksyczny, żółte ramię oznacza gaz trujący."
    },
    "pulapka": "Do prób szczelności nigdy nie używa się tlenu ani powietrza ze sprężarki warsztatowej; azot podaje się przez reduktor ciśnienia, a ciśnienie próby ustala się wg dokumentacji i normy."
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
    "lead": "Izolacja przeciwdrganiowa (podkładki gumowe, sprężyny, kompensatory) tłumi drgania sprężarki i ogranicza ich przenoszenie na konstrukcję budynku i rurociągi, zmniejszając hałas i ryzyko pęknięć rur.",
    "kroki": [],
    "bledne": {
     "A": "Poziomowanie wykonuje się za pomocą regulowanych stóp i poziomnicy – nie jest to rola izolacji drgań.",
     "B": "Ochronę przed wilgocią zapewnia izolacja paroszczelna rurociągów.",
     "C": "Pleśni i grzybom zapobiega osuszanie i wentylacja pomieszczeń, a nie izolacja przeciwdrganiowa."
    },
    "pulapka": "Rurociągi przy sprężarce prowadzi się z elastycznym odcinkiem („pętlą”), aby drgania nie przenosiły się na instalację."
   }
  },
  {
   "n": 14,
   "tytul": "Przyrząd do ważenia czynnika",
   "dzial": "Serwis, napełnianie, szczelność",
   "tresc": "Przedstawiony na rysunku przyrząd przeznaczony jest do pomiaru",
   "img": "img/ee15-2022-01/z14.png",
   "img_alt": "Walizka z elektroniczną wagą do czynnika chłodniczego: czarna platforma ważąca i ręczny wyświetlacz z klawiaturą.",
   "odp": {
    "A": "temperatury czynnika chłodniczego w butli.",
    "B": "ciśnienia czynnika chłodniczego w butli.",
    "C": "objętości czynnika chłodniczego i butli.",
    "D": "masy czynnika chłodniczego i butli."
   },
   "klucz": "D",
   "rozw": {
    "lead": "Na zdjęciu widać elektroniczną wagę do czynnika chłodniczego (platforma z wyświetlaczem). Służy do ważenia butli i dozowania lub odzysku czynnika według masy.",
    "kroki": [],
    "bledne": {
     "A": "Temperaturę mierzy się termometrem, a nie wagą.",
     "B": "Ciśnienie mierzy się manometrem (np. na bloku manometrycznym).",
     "C": "Waga nie mierzy objętości – jej wskazanie to masa."
    },
    "pulapka": "Ilość czynnika w układzie określa się przez masę, a nie ciśnienie – ciśnienie zależy od temperatury i nie informuje o napełnieniu."
   }
  },
  {
   "n": 15,
   "tytul": "Odtajanie gorącymi parami czynnika",
   "dzial": "Elementy i automatyka obiegu",
   "tresc": "Jak należy ustawić wentylator W, grzałkę G oraz zawory elektromagnetyczne Z1 i Z2, aby w przedstawionym na schemacie urządzeniu chłodniczym mroźni, przeprowadzić proces odtajania parownika gorącymi parami czynnika.",
   "img": "img/ee15-2022-01/z15.png",
   "img_alt": "Schemat urządzenia chłodniczego mroźni: sprężarka, skraplacz, zbiornik cieczy, odwadniacz, parownik z TZR, wentylator W, grzałka G oraz zawory elektromagnetyczne Z1 (obejście gorących par) i Z2 (przed skraplaczem).",
   "odp": {
    "A": "W – włączony, G – włączona, Z1 – zamknięty, Z2 – otwarty.",
    "B": "W – wyłączony, G – włączona, Z1 – otwarty, Z2 – zamknięty.",
    "C": "W – włączony, G – wyłączona, Z1 – otwarty, Z2 – zamknięty.",
    "D": "W – wyłączony, G – włączona, Z1 – zamknięty, Z2 – otwarty."
   },
   "klucz": "B",
   "rozw": {
    "lead": "Przy odtajaniu gorącymi parami zawór Z1 otwiera drogę gorącym parom z tłoczenia sprężarki bezpośrednio do <span class=\"term\" data-key=\"parownik\">parownika</span>, a Z2 zamyka przepływ do skraplacza. Wentylator się wyłącza, by nie roznosić ciepła po komorze, a grzałka G wspomaga odtajanie.",
    "kroki": [],
    "bledne": {
     "A": "Wentylator włączony roznosi ciepło po komorze; Z1 zamknięty i Z2 otwarty to ustawienie normalnej pracy chłodniczej (gorące pary idą do skraplacza).",
     "C": "Wentylator włączony roznosi ciepło po komorze, a grzałka wyłączona nie wspomaga odtajania.",
     "D": "Zawory ustawione jak w normalnej pracy (Z1 zamknięty, Z2 otwarty) – gorące pary trafiałyby do skraplacza zamiast do parownika."
    },
    "pulapka": "Podczas odtajania wentylator parownika jest wyłączony, żeby ciepło nie trafiało do komory, a po odtajaniu stosuje się krótkie opóźnienie startu wentylatora (odciekanie)."
   }
  },
  {
   "n": 16,
   "tytul": "Kształtki w instalacji glikolowej",
   "dzial": "Montaż i rurociągi",
   "tresc": "W przedstawionym na schemacie fragmencie instalacji glikolowej zastosowano",
   "img": "img/ee15-2022-01/z16.png",
   "img_alt": "Schemat fragmentu instalacji glikolowej: wymiennik, dwie pompy w układzie równoległym, dwa zawory trójdrożne, trójniki, kolana i mufy oraz kocioł; temperatury RW in 40 °C i RW out 45 °C.",
   "odp": {
    "A": "2 trójniki, 6 kolan, 4 mufy.",
    "B": "4 trójniki, 6 kolan, 2 mufy.",
    "C": "6 trójników, 4 kolana, 2 mufy.",
    "D": "6 trójników, 2 kolana, 4 mufy."
   },
   "klucz": "C",
   "rozw": {
    "lead": "Po policzeniu kształtek na schemacie: 6 trójników (dwa przy pętli z pompami, jeden za nią oraz trzy na dolnej gałęzi przy zaworach trójdrogowych), 4 kolana w narożach pętli pomp i 2 mufy przy przejściu przez ścianę przy wymienniku.",
    "kroki": [],
    "bledne": {
     "A": "Trójników jest 6, a nie 2; kolan jest 4, a nie 6.",
     "B": "Trójników jest 6, a nie 4; kolan jest 4, a nie 6.",
     "D": "Trójników jest 6, ale kolan 4 (nie 2) i muf 2 (nie 4)."
    },
    "pulapka": "Licz kształtki systematycznie od wymiennika w kierunku kotła, oddzielnie każdego rodzaju – zawory i pompy nie są kształtkami."
   }
  },
  {
   "n": 17,
   "tytul": "Detektor nieszczelności",
   "dzial": "Pomiary i diagnostyka",
   "tresc": "Przedstawione na rysunku urządzenie służy do",
   "img": "img/ee15-2022-01/z17.png",
   "img_alt": "Zdjęcie pomiaru detektorem nieszczelności przy wężownicy parownika oraz osobne zdjęcie detektora z elastyczną sondą.",
   "odp": {
    "A": "kontroli szczelności podczas próby ciśnieniowej z zastosowaniem azotu.",
    "B": "kontroli szczelności napełnionego urządzenia chłodniczego.",
    "C": "pomiaru temperatury przegrzania czynnika chłodniczego.",
    "D": "pomiaru poziomu hałasu agregatu."
   },
   "klucz": "B",
   "rozw": {
    "lead": "To elektroniczny detektor nieszczelności z elastyczną sondą, którym sprawdza się szczelność napełnionego układu: czujnik reaguje na obecność czynnika (węglowodorów halogenowych) przy złączach i wymiennikach.",
    "kroki": [],
    "bledne": {
     "A": "Detektor czynnika nie wykryje azotu – ciśnieniową próbę azotem sprawdza się spadkiem ciśnienia lub pianą/sprayem.",
     "C": "Przegrzanie wyznacza się z ciśnienia i temperatury na ssaniu (manometry i termometr), a nie detektorem nieszczelności.",
     "D": "Poziom hałasu mierzy się miernikiem poziomu dźwięku (sonometrem)."
    },
    "pulapka": "Elektroniczny detektor reaguje na <span class=\"term\" data-key=\"fgaz\">F-gazy</span> (halogeny) – służy do kontroli napełnionych układów, nie do prób azotem."
   }
  },
  {
   "n": 18,
   "tytul": "Cykl napraw sprężarki tłokowej",
   "dzial": "Serwis, napełnianie, szczelność",
   "tresc": "Na podstawie przedstawionego na rysunku cyklu napraw sprężarki chłodniczej tłokowej określ, po ilu godzinach pracy sprężarki liczonych po pierwszej naprawie średniej, należy przeprowadzić drugi przegląd zapobiegawczy.",
   "img": "img/ee15-2022-01/z18.png",
   "img_alt": "Wykres cyklu napraw sprężarki: oś czasu z naprawą główną G, przeglądami zapobiegawczymi P, naprawami bieżącymi B i naprawami średnimi S; odstępy 1000, 2000, 4000 i 12000 h.",
   "odp": {
    "A": "1 000 h",
    "B": "2 000 h",
    "C": "3 000 h",
    "D": "4 000 h"
   },
   "klucz": "C",
   "rozw": {
    "lead": "Cykl od naprawy głównej G do następnej trwa 12 000 h, a kolejne czynności następują co 1000 h (G, P, B, P, S, P, B, P, S, P, B, P, G). Po pierwszej naprawie średniej S (4000 h) kolejno następują: P po 1000 h, B po 2000 h i drugi przegląd P po 3000 h.",
    "kroki": [],
    "bledne": {
     "A": "1000 h to pierwszy przegląd zapobiegawczy po naprawie średniej, nie drugi.",
     "B": "2000 h po naprawie średniej przypada naprawa bieżąca B.",
     "D": "4000 h po naprawie średniej to kolejna naprawa średnia S."
    },
    "pulapka": "Licz czynności od naprawy średniej S, a nie od naprawy głównej G – odległości na osi podano właśnie od G."
   }
  },
  {
   "n": 19,
   "tytul": "Częstotliwość kontroli obiegu oleju",
   "dzial": "Serwis, napełnianie, szczelność",
   "tresc": "Na podstawie harmonogramu czynności serwisowych podaj częstotliwość kontroli obiegu oleju w sprężarce.",
   "img": "img/ee15-2022-01/z19.png",
   "img_alt": "Tabela 2. Harmonogram czynności serwisowych: dziewięć czynności z okresem wykonywania (codziennie, co 3 miesiące, co 6 miesięcy, co rok).",
   "odp": {
    "A": "3 razy w roku.",
    "B": "4 razy w roku.",
    "C": "Co 6 miesięcy.",
    "D": "Co rok."
   },
   "klucz": "B",
   "rozw": {
    "lead": "W harmonogramie pozycja 5 „Kontrola obiegu oleju w sprężarkach” ma okres „co 3 miesiące”, czyli 12 : 3 = 4 razy w roku.",
    "kroki": [],
    "bledne": {
     "A": "3 razy w roku odpowiadałoby okresowi 4 miesięcy.",
     "C": "Co 6 miesięcy dotyczy sprawdzania zaworów i kontroli zaworów bezpieczeństwa (pozycje 6–7).",
     "D": "Raz w roku sprawdza się łączniki elektryczne, rurociągi i skraplacz (pozycje 8–9)."
    },
    "pulapka": "Nie myl kontroli obiegu oleju (co 3 miesiące) ze sprawdzaniem poziomu oleju w sprężarce, które wykonuje się codziennie."
   }
  },
  {
   "n": 20,
   "tytul": "Podłączenie przewodu YDYp do lady",
   "dzial": "Elektrotechnika",
   "tresc": "W celu podłączenia zasilania lady chłodniczej do instalacji elektrycznej należy wykorzystać przewód YDYp 3x1,5 mm<sup>2</sup>, który ma 3 żyły w kolorach: czarnym, niebieskim, żółto-zielonym. Prawidłowy sposób podłączenia przewodów do zacisków lady chłodniczej przedstawiono na rysunku",
   "img": "img/ee15-2022-01/z20.png",
   "img_alt": "Cztery wersje podłączenia trzech żył do zacisków L1, N i PE lady chłodniczej, oznaczone I–IV.",
   "odp": {
    "A": "I.",
    "B": "II.",
    "C": "III.",
    "D": "IV."
   },
   "klucz": "A",
   "rozw": {
    "lead": "Żyła niebieska jest przewodem neutralnym N, żółto-zielona – ochronnym PE, a pozostała (czarna) – fazowym L1. Tak podłączono przewody na rysunku I: czarny do L1, niebieski do N, żółto-zielony do zacisku uziemienia.",
    "kroki": [],
    "bledne": {
     "B": "Niebieski przewód podłączono do L1, żółto-zielony do N, a czarny do zacisku PE – wszystkie trzy żyły są pomylone.",
     "C": "Żółto-zielony przewód podłączono do N, a niebieski do zacisku PE – błędne.",
     "D": "Żółto-zielony przewód podłączono do L1, a czarny do N – przewód ochronny nie może być fazowy."
    },
    "pulapka": "Kolor żółto-zielony jest zarezerwowany wyłącznie dla przewodu ochronnego PE, niebieski – wyłącznie dla N."
   }
  },
  {
   "n": 21,
   "tytul": "Funkcja termostatycznego zaworu rozprężnego",
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
    "lead": "Termostatyczny zawór rozprężny reguluje dopływ czynnika do parownika w zależności od temperatury na wylocie parownika (czujnik) i ciśnienia parowania, utrzymując stałe <span class=\"term\" data-key=\"sh\">przegrzanie</span> par.",
    "kroki": [],
    "bledne": {
     "A": "Stałą ilość (poziom) cieczy utrzymuje zawór pływakowy.",
     "B": "Temperaturę w komorze reguluje termostat włączający i wyłączający sprężarkę lub zawór elektromagnetyczny.",
     "C": "Stałe ciśnienie parowania utrzymuje automatyczny zawór rozprężny (AZR)."
    },
    "pulapka": "TZR utrzymuje przegrzanie (zwykle 5–8 K), a nie temperaturę w komorze ani stałe ciśnienie parowania."
   }
  },
  {
   "n": 22,
   "tytul": "Wskazania rejestratora temperatury i wilgotności",
   "dzial": "Pomiary i diagnostyka",
   "tresc": "Przedstawiony na rysunku bezprzewodowy rejestrator wyświetla informacje o",
   "img": "img/ee15-2022-01/z22.png",
   "img_alt": "Zdjęcie termohigrometru WiFi LAB-EL LB-523 z wyświetlaczem pokazującym 22,3 °C (T) i 57,4 % (RH).",
   "odp": {
    "A": "ciśnieniu i wilgotności.",
    "B": "prędkości i temperaturze.",
    "C": "temperaturze i wilgotności względnej.",
    "D": "temperaturze i wilgotności bezwzględnej."
   },
   "klucz": "C",
   "rozw": {
    "lead": "Wyświetlacz ma oznaczenia T [°C] i RH [%] – to temperatura oraz wilgotność względna (RH – relative humidity). Urządzenie to termohigrometr.",
    "kroki": [],
    "bledne": {
     "A": "Brak oznaczeń ciśnienia (np. hPa); wyświetlane są °C i %.",
     "B": "Na wyświetlaczu nie ma wskazania prędkości (np. m/s).",
     "D": "RH wyraża wilgotność względną w %, a wilgotność bezwzględną podaje się w g/m³ lub g/kg."
    },
    "pulapka": "Skrót RH i jednostka % oznaczają zawsze wilgotność względną."
   }
  },
  {
   "n": 23,
   "tytul": "Element rozprężny wg wykresu temperatury parowania",
   "dzial": "Elementy i automatyka obiegu",
   "tresc": "Na podstawie wykresu przedstawiającego zmiany temperatury parowania w funkcji czasu podczas pracy układu chłodniczego określ, który element został zastosowany w tym układzie.",
   "img": "img/ee15-2022-01/z23.png",
   "img_alt": "Wykres temperatury parowania w czasie: po uruchomieniu sprężarki temperatura spada z −5 °C do −15 °C po otwarciu zaworu, pozostaje stała w czasie pracy i rośnie po zatrzymaniu sprężarki (postój).",
   "odp": {
    "A": "Zawór pływakowy niskiego ciśnienia.",
    "B": "Termostatyczny zawór rozprężny.",
    "C": "Automatyczny zawór rozprężny.",
    "D": "Rurka kapilarna."
   },
   "klucz": "C",
   "rozw": {
    "lead": "Na wykresie podczas pracy sprężarki temperatura (ciśnienie) parowania po otwarciu zaworu jest stała (−15 °C), a po zatrzymaniu sprężarki rośnie do −5 °C. Utrzymywanie stałego ciśnienia parowania jest cechą automatycznego zaworu rozprężnego (AZR).",
    "kroki": [],
    "bledne": {
     "A": "Zawór pływakowy utrzymuje stały poziom cieczy w parowniku, a nie stałe ciśnienie parowania.",
     "B": "TZR utrzymuje stałe przegrzanie, więc temperatura parowania zmienia się wraz z obciążeniem cieplnym.",
     "D": "Przy rurce kapilarnej ciśnienie parowania nie jest regulowane i zależy od warunków pracy – wykres nie byłby poziomy."
    },
    "pulapka": "Stałe ciśnienie parowania ma zarówno AZR, jak i regulator ciśnienia parowania; TZR kojarz ze stałym przegrzaniem."
   }
  },
  {
   "n": 24,
   "tytul": "Wymiana łożyska koła napinacza",
   "dzial": "Serwis, napełnianie, szczelność",
   "tresc": "Na podstawie zamieszczonego fragmentu instrukcji obsługi określ, po jakim przebiegu eksploatacji samochodowego agregatu chłodniczego należy wymienić łożyska koła napinacza.",
   "img": "img/ee15-2022-01/z24.png",
   "img_alt": "Fragment instrukcji obsługi agregatu: harmonogram przeglądów (przebiegi w km i milach, przeglądy wstępny, A i B) oraz opis przeglądów, w tym wymiana łożyska koła napinacza w przeglądzie B.",
   "odp": {
    "A": "36 000 km",
    "B": "60 000 mi",
    "C": "36 000 mi",
    "D": "90 000 km"
   },
   "klucz": "C",
   "rozw": {
    "lead": "W opisie przeglądów „Przegląd B” obejmuje wymianę łożyska koła pasowego napinacza. W harmonogramie przegląd B zaznaczono przy 60 000 km, co odpowiada 36 000 mil (pierwszy raz).",
    "kroki": [],
    "bledne": {
     "A": "36 000 km nie występuje w tabeli jako przebieg z przeglądem B; liczba 36 000 dotyczy mil.",
     "B": "60 000 mi nie ma w tabeli – 60 000 to wartość w kilometrach.",
     "D": "Przy 90 000 km (54 000 mi) wykonuje się tylko przegląd A, bez przeglądu B."
    },
    "pulapka": "Zwracaj uwagę na jednostki (km i mi) – tabela podaje je w osobnych kolumnach, a odpowiedzi celowo je mieszają."
   }
  },
  {
   "n": 25,
   "tytul": "Zamrażarki do groszku",
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
    "lead": "Groszek to drobny produkt sypki, który zamraża się metodą IQF w zamrażarkach fluidyzacyjnych: strumień zimnego powietrza unosi ziarna, dzięki czemu każde zamrażane jest osobno i nie zlepia się w bryłę.",
    "kroki": [],
    "bledne": {
     "A": "Zamrażarki kontaktowe wielopłytowe służą do zamrażania produktów w blokach lub opakowaniach płaskich (np. filety).",
     "C": "Immersja w solance stosowana jest głównie do ryb i produktów pakowanych; groszek nasiąkałby solanką.",
     "D": "Immersja w glikolu dotyczy produktów w szczelnych opakowaniach – dla sypkiego groszku nie jest stosowana."
    },
    "pulapka": null
   }
  },
  {
   "n": 26,
   "tytul": "Ciepło odprowadzone z wołowiny",
   "dzial": "Obliczenia",
   "tresc": "Na podstawie danych zamieszczonych w tabeli oblicz ilość ciepła odprowadzonego z 1 t wołowiny zamrażanej od temperatury 20°C do temperatury −20°C.",
   "img": "img/ee15-2022-01/z26.png",
   "img_alt": "Tabela entalpii produktów spożywczych (kJ/kg) dla cielęciny, dorsza chudego i wołowiny w temperaturach od 20 °C do −30 °C; dla wołowiny 353 kJ/kg w 20 °C i 43 kJ/kg w −20 °C.",
   "odp": {
    "A": "353 MJ",
    "B": "310 MJ",
    "C": "398 MJ",
    "D": "243 MJ"
   },
   "klucz": "B",
   "rozw": {
    "lead": "Ilość ciepła to różnica entalpii wołowiny w temperaturze początkowej (20 °C) i końcowej (−20 °C), pomnożona przez masę: odczyt z tabeli h(20 °C) = 353 kJ/kg, h(−20 °C) = 43 kJ/kg.",
    "kroki": [
     [
      "Dane",
      "\\( m = 1000\\ \\mathrm{kg},\\ h_1 = 353\\ \\mathrm{kJ/kg}\\ (20\\,^\\circ\\mathrm{C}),\\ h_2 = 43\\ \\mathrm{kJ/kg}\\ (-20\\,^\\circ\\mathrm{C}) \\)"
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
      "\\( Q = 1000\\ \\mathrm{kg}\\cdot(353-43)\\ \\tfrac{\\mathrm{kJ}}{\\mathrm{kg}} = 310\\,000\\ \\mathrm{kJ} \\)"
     ],
     [
      "Wynik",
      "\\( Q = 310\\ \\mathrm{MJ} \\)"
     ]
    ],
    "bledne": {
     "A": "353 MJ to tylko entalpia w 20 °C – nie odjęto entalpii w −20 °C.",
     "C": "398 MJ nie wynika z poprawnej różnicy; dodanie entalpii (353 + 43) dałoby 396 MJ.",
     "D": "243 MJ = (286 − 43)·1000 kJ – różnicę liczono od 0 °C zamiast od 20 °C."
    },
    "pulapka": "Masę 1 t zamień na 1000 kg; 1000 kJ = 1 MJ, więc wynik w kJ/kg przy 1000 kg jest liczbowo równy wynikowi w MJ."
   }
  },
  {
   "n": 27,
   "tytul": "Urządzenie do odzysku czynnika",
   "dzial": "Serwis, napełnianie, szczelność",
   "tresc": "Które z przedstawionych na rysunkach urządzeń jest przeznaczone do odzysku czynnika chłodniczego?",
   "img": "img/ee15-2022-01/z27.png",
   "img_alt": "Cztery urządzenia I–IV: I – niebieska stacja odzysku z dwoma manometrami, II – agregat skraplający z dwiema sprężarkami, III – czerwony agregat prądotwórczy, IV – pompa próżniowa.",
   "odp": {
    "A": "I.",
    "B": "II.",
    "C": "III.",
    "D": "IV."
   },
   "klucz": "A",
   "rozw": {
    "lead": "Urządzenie I to stacja odzysku czynnika chłodniczego: ma własną sprężarkę, manometry i przyłącza węży – przetłacza czynnik z instalacji do butli odzyskowej.",
    "kroki": [],
    "bledne": {
     "B": "II to agregat skraplający (sprężarki ze skraplaczem) – element instalacji, a nie urządzenie serwisowe.",
     "C": "III to spalinowy agregat prądotwórczy.",
     "D": "IV to dwustopniowa <span class=\"term\" data-key=\"pompa\">pompa próżniowa</span> służąca do osuszania instalacji, a nie do odzysku czynnika."
    },
    "pulapka": "Odzysk (stacja odzysku) i próżniowanie (pompa próżniowa) to dwie różne czynności serwisowe wykonywane odrębnymi urządzeniami."
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
    "lead": "Gratowanie polega na usunięciu zadziorów (ostrych krawędzi i wiórów) powstałych przy cięciu rury; zadzior zmniejsza przekrój, zakłóca przepływ i może zostać wciągnięty do układu.",
    "kroki": [],
    "bledne": {
     "B": "Kształt i wymiar rury przywraca się kalibrowaniem (kalibratorem), a nie gratowaniem.",
     "C": "Odgałęzienie wykonuje się trójnikiem lub kształtką, a nie przez gratowanie.",
     "D": "Rozszerzanie średnicy to kielichowanie (rozszerzak lub rozwijarka)."
    },
    "pulapka": null
   }
  },
  {
   "n": 29,
   "tytul": "Kolory przewodów stacji odzysku",
   "dzial": "Serwis, napełnianie, szczelność",
   "tresc": "Którymi kolorami w instrukcji obsługi stacji odzysku rysowane są elastyczne przewody oznaczone na rysunku cyframi 1, 2, 3?",
   "img": "img/ee15-2022-01/z29.png",
   "img_alt": "Schemat podłączenia stacji odzysku: instalacja chłodnicza z przewodami 1 (gaz) i 2 (ciecz) do baterii manometrów, przewód 3 do wlotu stacji odzysku, zbiornik na wadze elektronicznej.",
   "odp": {
    "A": "1 - czarnym, 2 - niebieskim, 3 – czerwonym.",
    "B": "1 - niebieskim, 2 - czerwonym, 3 - żółtym.",
    "C": "1 - żółtym, 2 - czerwonym, 3 - niebieskim.",
    "D": "1 - czerwonym, 2 - żółtym, 3 - niebieskim."
   },
   "klucz": "B",
   "rozw": {
    "lead": "Zgodnie z konwencją kolorów węży <span class=\"term\" data-key=\"manometry\">bloku manometrycznego</span>: niebieski – strona niskiego ciśnienia (przewód 1, gaz), czerwony – strona wysokiego ciśnienia (przewód 2, ciecz), żółty – przewód serwisowy łączący manometry ze stacją (przewód 3).",
    "kroki": [],
    "bledne": {
     "A": "Czarny nie jest standardowym kolorem węży, a przewód 3 jest żółty, nie czerwony.",
     "C": "Zamieniono kolory: przewód 1 (gaz, LP) nie jest żółty.",
     "D": "Przewód 1 (gaz, LP) nie jest czerwony, a przewód 3 nie jest niebieski."
    },
    "pulapka": "Niebieski = niskie ciśnienie, czerwony = wysokie ciśnienie, żółty = serwisowy; pamiętaj o tym przy podłączaniu manometrów do stacji."
   }
  },
  {
   "n": 30,
   "tytul": "Przyczyna oszronienia sprężarki",
   "dzial": "Pomiary i diagnostyka",
   "tresc": "Najbardziej prawdopodobną przyczyną oszronienia przedstawionej na rysunku sprężarki jest",
   "img": "img/ee15-2022-01/z30.png",
   "img_alt": "Zdjęcie sprężarki hermetycznej w szafie – górna część korpusu oszroniona (pokryta szronem), miedziana rurka owinięta wokół obudowy.",
   "odp": {
    "A": "uszkodzenie silnika sprężarki.",
    "B": "zbyt częste załączanie się sprężarki.",
    "C": "zalanie sprężarki ciekłym czynnikiem.",
    "D": "zanieczyszczenie instalacji opiłkami miedzianymi."
   },
   "klucz": "C",
   "rozw": {
    "lead": "Oszronienie całego korpusu sprężarki oznacza, że do jej wnętrza wraca zimny, ciekły czynnik (za małe <span class=\"term\" data-key=\"sh\">przegrzanie</span>), który odparowuje w sprężarce i oziębia korpus poniżej 0 °C. Grozi to uderzeniem hydraulicznym.",
    "kroki": [],
    "bledne": {
     "A": "Uszkodzony silnik powoduje przegrzewanie sprężarki, a nie oszronienie.",
     "B": "Zbyt częste załączanie przegrzewa uzwojenia – skutek jest odwrotny.",
     "D": "Opiłki zatykają filtry i uszkadzają łożyska, ale nie powodują oszronienia korpusu."
    },
    "pulapka": "Oszroniony korpus sprężarki to sygnał ostrzegawczy: sprawdź przegrzanie, nastawę TZR i ilość czynnika."
   }
  },
  {
   "n": 31,
   "tytul": "Najtańsza robocizna wykonawcy",
   "dzial": "Kosztorys",
   "tresc": "W tabeli zestawiono koszty wymiany odwadniacza i części rurociągów wraz z kosztami przygotowania urządzenia do pracy. Który z wykonawców zaoferował tę usługę z najniższym kosztem robocizny?",
   "img": "img/ee15-2022-01/z31.png",
   "img_alt": "Tabela kosztorysów czterech wykonawców (A–D) z dziewięcioma pozycjami: filtr, nakrętki, rura, czynnik, demontaż, połączenia, próba szczelności, napełnienie, regulacja i uruchomienie.",
   "odp": {
    "A": "Wykonawca A.",
    "B": "Wykonawca B.",
    "C": "Wykonawca C.",
    "D": "Wykonawca D."
   },
   "klucz": "D",
   "rozw": {
    "lead": "Robociznę stanowią pozycje usługowe 5–9 (demontaż, połączenia, próba szczelności, napełnienie, regulacja i uruchomienie). Pozycje 1–4 to materiały (filtr, nakrętki, rura, czynnik). Najniższą sumę robocizny ma wykonawca D.",
    "kroki": [
     [
      "Dane",
      "Robocizna = pozycje 5–9."
     ],
     [
      "Szukane",
      "Suma robocizny dla każdego wykonawcy."
     ],
     [
      "Wzór",
      "\\[ R = \\sum_{i=5}^{9} c_i \\]"
     ],
     [
      "Podstawienie",
      "\\( R_A = 40+15+45+60+20 = 180,\\ R_B = 50+20+20+50+20 = 160,\\ R_C = 40+10+20+35+15 = 120,\\ R_D = 10+20+20+40+10 = 100 \\)"
     ],
     [
      "Wynik",
      "Najmniej: wykonawca D (\\( 100\\ \\mathrm{zł} \\))."
     ]
    ],
    "bledne": {
     "A": "Wykonawca A: robocizna 180 zł – najwyższa, choć jego łączny koszt jest najniższy.",
     "B": "Wykonawca B: robocizna 160 zł.",
     "C": "Wykonawca C: robocizna 120 zł – niższa niż u A i B, ale wyższa niż u D."
    },
    "pulapka": "Pytanie dotyczy samej robocizny, a nie łącznego kosztu – wykonawca A ma najniższą cenę całkowitą (370 zł), ale najwyższą robociznę."
   }
  },
  {
   "n": 32,
   "tytul": "Uszkodzony element sprężarki",
   "dzial": "Serwis, napełnianie, szczelność",
   "tresc": "Uszkodzony element sprężarki chłodniczej, oznaczony na rysunku cyfrą 1, to",
   "img": "img/ee15-2022-01/z32.png",
   "img_alt": "Zdjęcie uszkodzonego korbowodu sprężarki chłodniczej z oznaczeniem czerwoną strzałką (cyfra 1) na łbie korbowodu ze śladami zatarcia łożyska.",
   "odp": {
    "A": "tłok.",
    "B": "wodzik.",
    "C": "cylinder.",
    "D": "korbowód."
   },
   "klucz": "D",
   "rozw": {
    "lead": "Cyfra 1 wskazuje łeb korbowodu – ramię łączące tłok z wałem korbowym, z otworem na łożysko ślizgowe, w którym widać ślady zatarcia i zużycia.",
    "kroki": [],
    "bledne": {
     "A": "Tłok jest cylindryczny i porusza się w cylindrze – nie ma otworu na czop korbowy.",
     "B": "Wodzik występuje w sprężarkach krzyżulcowych (np. amoniakalnych) i prowadzi tłoczysko – to inny element.",
     "C": "Cylinder to nieruchoma tuleja lub otwór w korpusie, w którym pracuje tłok."
    },
    "pulapka": null
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
    "lead": "Waga bez tarowania pokazuje masę butli brutto, która maleje wraz z ubytkiem czynnika: po napełnieniu instalacji 7,4 kg wskazanie spadnie z 15,3 kg do 7,9 kg. Tara butli (2,3 kg) jest już zawarta we wskazaniu brutto.",
    "kroki": [
     [
      "Dane",
      "\\( m_{brutto,p} = 15{,}3\\ \\mathrm{kg},\\ \\Delta m = 7{,}4\\ \\mathrm{kg} \\)"
     ],
     [
      "Szukane",
      "\\( m_{brutto,k} \\) [kg]"
     ],
     [
      "Wzór",
      "\\[ m_{brutto,k} = m_{brutto,p} - \\Delta m \\]"
     ],
     [
      "Podstawienie",
      "\\( m_{brutto,k} = 15{,}3 - 7{,}4 \\)"
     ],
     [
      "Wynik",
      "\\( m_{brutto,k} = 7{,}9\\ \\mathrm{kg} \\)"
     ]
    ],
    "bledne": {
     "A": "5,6 kg = 15,3 − 7,4 − 2,3 – błędnie odjęto tarę, która jest już zawarta w masie brutto.",
     "B": "7,4 kg to masa czynnika wprowadzonego do instalacji, a nie wskazanie wagi z butlą.",
     "D": "15,3 kg to wskazanie przed napełnieniem."
    },
    "pulapka": "Dane o tarze to dystraktor – tarę odejmuje się tylko wtedy, gdy trzeba obliczyć masę netto czynnika w butli."
   }
  },
  {
   "n": 34,
   "tytul": "Kolejność dokręcania śrub głowicy",
   "dzial": "Montaż i rurociągi",
   "tresc": "Na podstawie zamieszczonego rysunku wskaż poprawną kolejność wkręcania śrub mocujących głowicę sprężarki chłodniczej, tłokowej, dwucylindrowej po wymianie uszczelki pod głowicą.",
   "img": "img/ee15-2022-01/z34.png",
   "img_alt": "Rysunek uszczelki pod głowicą dwucylindrowej sprężarki z sześcioma otworami na śruby ponumerowanymi 1–3 (góra, od lewej) i 4–6 (dół, od lewej).",
   "odp": {
    "A": "3, 5, 2, 4, 1, 6",
    "B": "2, 5, 4, 1, 3, 6",
    "C": "4, 1, 5, 2, 6, 3",
    "D": "1, 2, 3, 6, 5, 4"
   },
   "klucz": "B",
   "rozw": {
    "lead": "Zgodnie z kluczem CKE śruby głowicy wkręca się od środka na zewnątrz, naprzemiennie (na krzyż), stopniowo – tu kolejność 2, 5, 4, 1, 3, 6. Dzięki temu uszczelka dociska się równomiernie, bez wypaczenia głowicy.",
    "kroki": [],
    "bledne": {
     "A": "Kolejność zaczyna od śruby narożnej 3, a nie od środkowych – uszczelka dociska się nierównomiernie.",
     "C": "Zaczyna od narożnej śruby 4 i jest niesymetryczna – groźba wypaczenia głowicy.",
     "D": "Dokręcanie kolejno po obwodzie (1, 2, 3, 6, 5, 4) powoduje nierównomierny docisk uszczelki."
    },
    "pulapka": "Śruby dokręca się kilkustopniowo kluczem dynamometrycznym do momentu podanego przez producenta, zawsze w tej samej kolejności."
   }
  },
  {
   "n": 35,
   "tytul": "Częstotliwość prób szczelności R404A",
   "dzial": "Czynniki i F-gazy",
   "tresc": "Korzystając z danych zamieszczonych w tabeli określ jak często należy wykonywać próby szczelności instalacji napełnionej 150 kg czynnika R404A , jeżeli instalacja posiada stały system wykrywania wycieków.",
   "img": "img/ee15-2022-01/z35.png",
   "img_alt": "Tabela częstotliwości kontroli instalacji w zależności od napełnienia (6,5, 25 i 150 kg), czynnika (R32, R410A, R404A, R134A), GWP i ekwiwalentu CO2, z uwagą o zmniejszeniu częstotliwości przy stałym systemie wykrywania wycieków.",
   "odp": {
    "A": "Co najmniej raz w roku.",
    "B": "Co najmniej raz na 3 m-ce.",
    "C": "Co najmniej 2 razy w roku.",
    "D": "Co najmniej raz na 1,5 m-ca."
   },
   "klucz": "C",
   "rozw": {
    "lead": "Dla 150 kg R404A (598,8 t ekwiwalentu CO<sub>2</sub>) kontrola jest wymagana co 3 miesiące. Stały system wykrywania wycieków zmniejsza częstotliwość dwukrotnie, czyli kontrola co 6 miesięcy = 2 razy w roku.",
    "kroki": [
     [
      "Dane",
      "\\( m = 150\\ \\mathrm{kg}\\ \\mathrm{R404A},\\ GWP = 3992,\\ \\text{kontrola co 3 m-ce} \\)"
     ],
     [
      "Szukane",
      "Częstotliwość kontroli z systemem wykrywania wycieków."
     ],
     [
      "Wzór",
      "\\( T_{z\\,wykr.} = 2\\cdot T \\)"
     ],
     [
      "Podstawienie",
      "\\( T = 2\\cdot 3\\ \\mathrm{m\\text{-}ce} = 6\\ \\mathrm{m\\text{-}cy} \\)"
     ],
     [
      "Wynik",
      "Co 6 miesięcy, czyli co najmniej 2 razy w roku."
     ]
    ],
    "bledne": {
     "A": "Raz w roku oznaczałoby czterokrotne zmniejszenie częstotliwości – tabela przewiduje tylko dwukrotne.",
     "B": "Co 3 miesiące to częstotliwość bez systemu wykrywania wycieków.",
     "D": "Co 1,5 miesiąca to pomylony kierunek: system wykrywania zmniejsza częstotliwość, a nie ją zwiększa."
    },
    "pulapka": "Tabela w arkuszu pochodzi z czasów rozporządzenia 517/2014; w rozporządzeniu (UE) 2024/573 zasady kontroli szczelności zostały zachowane i rozszerzone, a R404A (<span class=\"term\" data-key=\"gwp\">GWP</span> ok. 3922) podlega ograniczeniom serwisowym."
   }
  },
  {
   "n": 36,
   "tytul": "Czynnik wykluczający rurociągi miedziane",
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
    "lead": "R717 to amoniak (NH<sub>3</sub>), który w obecności wilgoci reaguje z miedzią i jej stopami, powodując korozję. W instalacjach amoniakalnych stosuje się rurociągi stalowe.",
    "kroki": [],
    "bledne": {
     "A": "R12 (freon, CFC) nie reaguje z miedzią – dawniej instalacje z nim były wykonywane z miedzi.",
     "B": "R134a (HFC) jest zgodny z miedzią.",
     "C": "R407A (mieszanina HFC) jest zgodny z miedzią."
    },
    "pulapka": "R12 jest wycofany z użycia z powodu wpływu na warstwę ozonową (nie ma to związku z doborem materiału rur) – nie daj się zmylić jego „przestarzałością”."
   }
  },
  {
   "n": 37,
   "tytul": "Demontaż łożyska z wału",
   "dzial": "Serwis, napełnianie, szczelność",
   "tresc": "Na którym rysunku przedstawiono demontaż łożyska tocznego z wału sprężarki chłodniczej ?",
   "img": "img/ee15-2022-01/z37.png",
   "img_alt": "Cztery rysunki techniczne I–IV operacji z łożyskiem tocznym: wciskanie tuleją, ściąganie ściągaczem (II), prasowanie, wciskanie w oprawę.",
   "odp": {
    "A": "I.",
    "B": "II.",
    "C": "III.",
    "D": "IV."
   },
   "klucz": "B",
   "rozw": {
    "lead": "Na rysunku II widać ściągacz mechaniczny z ramionami zahaczonymi za pierścień łożyska i wrzecionem dociskanym do wału – to typowy sposób zdejmowania łożyska z wału bez uszkodzenia.",
    "kroki": [],
    "bledne": {
     "A": "Rysunek I pokazuje osiowy docisk tuleją przez element dociskowy – wciskanie (montaż) łożyska, a nie ściąganie.",
     "C": "Rysunek III pokazuje nacisk osiowy prasą lub młotkiem przez wał – nie przedstawia ściągacza.",
     "D": "Rysunek IV pokazuje wciskanie łożyska w oprawę tuleją – montaż."
    },
    "pulapka": "Łożysko ściąga się ściągaczem, przykładając siłę do pierścienia wewnętrznego (osadzonego na wale), by nie uszkodzić bieżni i elementów tocznych."
   }
  },
  {
   "n": 38,
   "tytul": "Przeznaczenie klucza dynamometrycznego",
   "dzial": "Montaż i rurociągi",
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
    "lead": "Klucz dynamometryczny umożliwia dokręcenie śruby z zadanym momentem siły (w N·m), co zapewnia równomierny, bezpieczny docisk, np. głowicy sprężarki czy kołnierzy.",
    "kroki": [],
    "bledne": {
     "A": "Do miejsc trudnodostępnych używa się kluczy nasadowych z przegubem lub przedłużką.",
     "C": "Skorodowane śruby odkręca się po zastosowaniu penetratora i kluczem udarowym.",
     "D": "Śruby rzymskie (napinacze) reguluje się specjalnymi kluczami lub kluczem płaskim."
    },
    "pulapka": "Klucz dynamometryczny nie służy do odkręcania – po użyciu ustawia się go na najniższą wartość, aby nie rozregulować sprężyny."
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
    "lead": "Korbowód jest elementem silnie obciążonym dynamicznie, a jego awaria niszczy sprężarkę. Pęknięty korbowód (nawet z drobnym pęknięciem) wymienia się na nowy – naprawa spawaniem, lutowaniem lub zszywaniem jest niedopuszczalna.",
    "kroki": [],
    "bledne": {
     "A": "Zszywanie kołkami stosuje się do naprawy pęknięć korpusów żeliwnych, a nie elementów ruchomych.",
     "B": "Spawanie zmienia strukturę materiału i obniża wytrzymałość zmęczeniową korbowodu.",
     "C": "Lutowanie twarde nie zapewnia wytrzymałości wymaganej dla elementu przenoszącego siły zmienne."
    },
    "pulapka": null
   }
  },
  {
   "n": 40,
   "tytul": "Ciepło wydzielane przez ludzi w komorze",
   "dzial": "Obliczenia",
   "tresc": "Ile ciepła wydzieli się w komorze chłodniczej o temperaturze −10°C w ciągu doby, jeżeli w komorze wykonują ciężką pracę dwie osoby codziennie przez 4 godziny?",
   "img": "img/ee15-2022-01/z40.png",
   "img_alt": "Wykres ciepła wydzielanego przez człowieka w kJ/h na osobę w funkcji temperatury w komorze (od +10 do −20 °C) dla pracy lekkiej i ciężkiej; w −10 °C praca ciężka daje ok. 1500 kJ/h.",
   "odp": {
    "A": "16 000 kJ",
    "B": "12 000 kJ",
    "C": "8 000 kJ",
    "D": "6 000 kJ"
   },
   "klucz": "B",
   "rozw": {
    "lead": "Z wykresu dla pracy ciężkiej w temperaturze −10 °C odczytujemy około 1500 kJ/h na osobę. Ciepło dobowe to iloczyn liczby osób, czasu pracy i jednostkowego strumienia ciepła.",
    "kroki": [
     [
      "Dane",
      "\\( n = 2,\\ \\tau = 4\\ \\mathrm{h},\\ q = 1500\\ \\mathrm{kJ/(h\\cdot osobę)}\\ (\\text{praca ciężka, } -10\\,^\\circ\\mathrm{C}) \\)"
     ],
     [
      "Szukane",
      "\\( Q \\) [kJ]"
     ],
     [
      "Wzór",
      "\\[ Q = n\\cdot \\tau\\cdot q \\]"
     ],
     [
      "Podstawienie",
      "\\( Q = 2\\cdot 4\\ \\mathrm{h}\\cdot 1500\\ \\tfrac{\\mathrm{kJ}}{\\mathrm{h}\\cdot\\text{osobę}} \\)"
     ],
     [
      "Wynik",
      "\\( Q = 12\\,000\\ \\mathrm{kJ} \\)"
     ]
    ],
    "bledne": {
     "A": "16 000 kJ odpowiadałoby 2000 kJ/(h·osobę), a to wartość spoza wykresu.",
     "C": "8 000 kJ odpowiada ok. 1000 kJ/(h·osobę), czyli wartości z krzywej pracy lekkiej.",
     "D": "6 000 kJ odpowiada 750 kJ/(h·osobę), czyli wartości, której krzywe nie osiągają w −10 °C."
    },
    "pulapka": "Użyj krzywej „praca ciężka”, a nie „praca lekka”, i pamiętaj o czasie pracy (4 h), a nie o całej dobie."
   }
  }
 ]
};
