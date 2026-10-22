/* Część pisemna – arkusz EE.15-SG-21.01 (styczeń 2021). Dane: pytania CKE + opracowanie rozwiązań. */
(window.ELE04_BANK = window.ELE04_BANK || {})["ee15-2021-01"] = {
 "id": "ee15-2021-01",
 "kwalifikacja": "EE.15",
 "kod": "EE.15-SG-21.01",
 "sesja": "styczeń 2021",
 "pytania": [
  {
   "n": 1,
   "tytul": "Agregat skraplający ze sprężarką półhermetyczną",
   "dzial": "Elementy i automatyka obiegu",
   "tresc": "Na której ilustracji przedstawiono chłodniczy agregat skraplający ze sprężarką półhermetyczną?",
   "img": "img/ee15-2021-01/z01.png",
   "img_alt": "Cztery ilustracje: I – agregat skraplający ze sprężarką półhermetyczną i wentylatorem, II – sama sprężarka półhermetyczna, III – agregat skraplający ze sprężarką hermetyczną, IV – sama sprężarka hermetyczna.",
   "odp": {
    "A": "I.",
    "B": "II.",
    "C": "III.",
    "D": "IV."
   },
   "klucz": "A",
   "rozw": {
    "lead": "Agregat skraplający to zestaw: sprężarka + skraplacz z wentylatorem + zbiornik cieczy na wspólnej ramie. Na rysunku I widać sprężarkę półhermetyczną (skręcaną, z pokrywami, możliwą do serwisowania) wraz ze skraplaczem i wentylatorem.",
    "kroki": [],
    "bledne": {
     "B": "Rysunek II to sama sprężarka półhermetyczna (bez skraplacza i wentylatora), a więc nie jest to agregat skraplający.",
     "C": "Rysunek III przedstawia agregat skraplający, ale ze sprężarką hermetyczną (zgrzana, nierozbieralna obudowa).",
     "D": "Rysunek IV to sama sprężarka hermetyczna w zgrzanej obudowie – bez skraplacza."
    },
    "pulapka": "Dwa warunki naraz: agregat (sprężarka + skraplacz) i sprężarka półhermetyczna (odkręcane pokrywy). Sama sprężarka bez skraplacza nie jest agregatem."
   }
  },
  {
   "n": 2,
   "tytul": "Element obiegu chłodniczego na schemacie",
   "dzial": "Elementy i automatyka obiegu",
   "tresc": "Na zamieszczonym schemacie element oznaczony cyfrą 1 to",
   "img": "img/ee15-2021-01/z02.png",
   "img_alt": "Schemat jednostopniowego obiegu chłodniczego: komora chłodzona z parownikiem (-15 °C), skraplacz (+32 °C), zawór rozprężny i sprężarka tłokowa napędzana paskiem, oznaczona cyfrą 1; podano strony wysokiego i niskiego ciśnienia.",
   "odp": {
    "A": "sprężarka.",
    "B": "parownik.",
    "C": "skraplacz.",
    "D": "zawór."
   },
   "klucz": "A",
   "rozw": {
    "lead": "Element 1 leży między stroną niskiego ciśnienia (rura od parownika) a stroną wysokiego ciśnienia (rura do skraplacza) i jest napędzany paskiem – to sprężarka tłokowa, która zasysa parę z parownika i tłoczy ją do skraplacza.",
    "kroki": [],
    "bledne": {
     "B": "Parownik znajduje się w komorze chłodzonej (-15 °C) – to żebrowany wymiennik w górnej części komory.",
     "C": "Skraplacz to żebrowany wężownik po lewej stronie (+32 °C), w którym para oddaje ciepło i skrapla się.",
     "D": "Zawór (rozprężny) to symbol na rurze cieczy nad skraplaczem, przed parownikiem."
    },
    "pulapka": null
   }
  },
  {
   "n": 3,
   "tytul": "Lada chłodnicza",
   "dzial": "Elementy i automatyka obiegu",
   "tresc": "Na której ilustracji przedstawiono ladę chłodniczą?",
   "img": "img/ee15-2021-01/z03.png",
   "img_alt": "Cztery urządzenia chłodnicze: I – szafa przeszklona dwudrzwiowa, II – regał chłodniczy otwarty, III – lada chłodnicza z szybą, IV – stół chłodniczy z blatem.",
   "odp": {
    "A": "I.",
    "B": "II.",
    "C": "III.",
    "D": "IV."
   },
   "klucz": "C",
   "rozw": {
    "lead": "Lada chłodnicza to niska, pozioma witryna do ekspozycji i sprzedaży towaru z agregatem w podstawie, zwykle z wygiętą szybą od strony klienta. Takie urządzenie przedstawia rysunek III.",
    "kroki": [],
    "bledne": {
     "A": "Rysunek I to szafa chłodnicza (pionowa, z przeszklonymi drzwiami).",
     "B": "Rysunek II to regał chłodniczy (witryna pionowa otwarta).",
     "D": "Rysunek IV to stół chłodniczy (blat roboczy z drzwiami)."
    },
    "pulapka": "Nazwy urządzeń handlowych: lada (pozioma), regał (pionowy otwarty), szafa (z drzwiami), stół chłodniczy (blat roboczy)."
   }
  },
  {
   "n": 4,
   "tytul": "Powierzchnia wymiany ciepła parownika",
   "dzial": "Obliczenia",
   "tresc": "Jaką powierzchnię wymiany ciepła powinien mieć parownik, jeżeli współczynnik przenikania ciepła dla parownika jest równy 800 W/(m<sup>2</sup>∙K), moc chłodnicza parownika wynosi 4 kW, średnia różnica temperatur między czynnikiem chłodniczym, a środowiskiem chłodzonym 5 K?",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "1,0 m<sup>2</sup>",
    "B": "3,0 m<sup>2</sup>",
    "C": "2,0 m<sup>2</sup>",
    "D": "4,0 m<sup>2</sup>"
   },
   "klucz": "A",
   "rozw": {
    "lead": "Moc parownika opisuje równanie przenikania ciepła \\( \\dot Q_0 = k\\cdot A\\cdot \\Delta T \\), skąd \\( A = \\dot Q_0/(k\\,\\Delta T) \\). Moc trzeba wyrazić w watach.",
    "kroki": [
     [
      "Dane",
      "\\( k=800\\ \\mathrm{W/(m^2\\cdot K)},\\ \\dot Q_0=4\\ \\mathrm{kW}=4000\\ \\mathrm{W},\\ \\Delta T=5\\ \\mathrm{K} \\)"
     ],
     [
      "Szukane",
      "\\( A \\) [m²]"
     ],
     [
      "Wzór",
      "\\[ A=\\frac{\\dot Q_0}{k\\cdot\\Delta T} \\]"
     ],
     [
      "Podstawienie",
      "\\( A=\\dfrac{4000}{800\\cdot 5}=\\dfrac{4000}{4000} \\)"
     ],
     [
      "Wynik",
      "\\( A=1{,}0\\ \\mathrm{m^2} \\)"
     ]
    ],
    "bledne": {
     "B": "3,0 m<sup>2</sup> – wartość nie wynika z żadnego poprawnego podstawienia.",
     "C": "2,0 m<sup>2</sup> – wynik błędu rachunkowego; poprawny mianownik to 800·5 = 4000 W/m<sup>2</sup>, a nie 2000.",
     "D": "4,0 m<sup>2</sup> – to liczba mocy w kW przepisana jako powierzchnia, bez dzielenia przez \\( k\\,\\Delta T \\)."
    },
    "pulapka": "Zawsze zamieniaj kW na W (4 kW = 4000 W), bo k jest podany w W/(m²·K)."
   }
  },
  {
   "n": 5,
   "tytul": "Moc chłodnicza z COP",
   "dzial": "Obliczenia",
   "tresc": "Ile wynosi moc chłodnicza urządzenia chłodniczego, w którym sprężarka ma moc 2 kW, a współczynnik wydajności chłodniczej urządzenia jest równy 3,5?",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "3,5 kW",
    "B": "7,0 kW",
    "C": "9,0 kW",
    "D": "9,5 kW"
   },
   "klucz": "B",
   "rozw": {
    "lead": "<span class=\"term\" data-key=\"cop\">Współczynnik wydajności chłodniczej</span> to stosunek mocy chłodniczej do mocy napędowej sprężarki: \\( \\varepsilon=\\dot Q_0/P \\), więc \\( \\dot Q_0=\\varepsilon\\cdot P \\).",
    "kroki": [
     [
      "Dane",
      "\\( P=2\\ \\mathrm{kW},\\ \\varepsilon=3{,}5 \\)"
     ],
     [
      "Szukane",
      "\\( \\dot Q_0 \\) [kW]"
     ],
     [
      "Wzór",
      "\\[ \\dot Q_0=\\varepsilon\\cdot P \\]"
     ],
     [
      "Podstawienie",
      "\\( \\dot Q_0=3{,}5\\cdot 2\\ \\mathrm{kW} \\)"
     ],
     [
      "Wynik",
      "\\( \\dot Q_0=7{,}0\\ \\mathrm{kW} \\)"
     ]
    ],
    "bledne": {
     "A": "3,5 kW – to sam współczynnik wydajności z jednostką kW; pominięto mnożenie przez moc sprężarki.",
     "C": "9,0 kW – to moc skraplacza w przybliżeniu (\\( \\dot Q_k=\\dot Q_0+P \\) = 7 + 2 = 9 kW), a nie moc chłodnicza.",
     "D": "9,5 kW – wynik dodawania 7,5 + 2 lub innego nieuzasadnionego działania; poprawne jest mnożenie 3,5·2."
    },
    "pulapka": "Moc skraplacza to \\( \\dot Q_k=\\dot Q_0+P=9\\ \\mathrm{kW} \\) – dystraktor dla zdających, którzy policzą ciepło oddawane w skraplaczu zamiast mocy chłodniczej."
   }
  },
  {
   "n": 6,
   "tytul": "Czynnik R290",
   "dzial": "Czynniki i F-gazy",
   "tresc": "Która substancja jest czynnikiem chłodniczym R290 ?",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "Amoniak.",
    "B": "Izobutan.",
    "C": "Propan.",
    "D": "Woda."
   },
   "klucz": "C",
   "rozw": {
    "lead": "R290 to propan (C<sub>3</sub>H<sub>8</sub>), naturalny czynnik węglowodorowy o bardzo niskim GWP (ok. 3), palny (klasa bezpieczeństwa A3).",
    "kroki": [],
    "bledne": {
     "A": "Amoniak to R717.",
     "B": "Izobutan to R600a.",
     "D": "Woda to R718."
    },
    "pulapka": "Zapamiętaj numery czynników naturalnych: R717 – amoniak, R744 – CO<sub>2</sub>, R290 – propan, R600a – izobutan, R718 – woda."
   }
  },
  {
   "n": 7,
   "tytul": "Najniższy koszt robocizny wykonawcy",
   "dzial": "Kosztorys",
   "tresc": "<div class=\"tblwrap\"><table><thead><tr><th>Lp.</th><th>Elementy kosztorysu</th><th>Wykonawca 1</th><th>Wykonawca 2</th><th>Wykonawca 3</th><th>Wykonawca 4</th></tr></thead><tbody><tr><td>1</td><td>Cena agregatu skraplającego</td><td>1250,00</td><td>1310</td><td>1420</td><td>1660</td></tr><tr><td>2</td><td>Cena chłodnicy powietrza</td><td>1550,00</td><td>1410</td><td>1321</td><td>1344</td></tr><tr><td>3</td><td>Nakrętki/narzutki mosiężna GAR gwint 3/8\", rura 3/8\"</td><td>12,00</td><td>9</td><td>10</td><td>11</td></tr><tr><td>3</td><td>Czynnik chłodniczy</td><td>60,00</td><td>50</td><td>70</td><td>90</td></tr><tr><td>4</td><td>Wykonanie połączeń</td><td>20,00</td><td>30</td><td>20</td><td>40</td></tr><tr><td>5</td><td>Wykonanie ciśnieniowej próby szczelności</td><td>45,00</td><td>30</td><td>20</td><td>20</td></tr><tr><td>6</td><td>Wykonanie próżniowej próby szczelności</td><td>20,00</td><td>15</td><td>20</td><td>15</td></tr><tr><td>7</td><td>Napełnienie instalacji czynnikiem chłodniczym</td><td>70,00</td><td>60</td><td>55</td><td>50</td></tr><tr><td>8</td><td>Regulacja i uruchomienie</td><td>25,00</td><td>20</td><td>15</td><td>30</td></tr><tr><td></td><td>Razem</td><td></td><td></td><td></td><td></td></tr></tbody></table></div>W tabeli zestawiono koszty montażu urządzenia chłodniczego wraz z kosztami przygotowania urządzenia do pracy. Który z wykonawców zaoferował usługę z najniższym kosztem robocizny?",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "Wykonawca 1",
    "B": "Wykonawca 2",
    "C": "Wykonawca 3",
    "D": "Wykonawca 4"
   },
   "klucz": "C",
   "rozw": {
    "lead": "Robociznę stanowią pozycje usługowe (połączenia, próby szczelności, napełnienie, regulacja i uruchomienie); ceny agregatu, chłodnicy, nakrętek i czynnika to materiały. Najniższą sumę robocizny ma wykonawca 3.",
    "kroki": [
     [
      "Dane",
      "Pozycje robocizny: lp. 4–8 (połączenia, próba ciśnieniowa, próba próżniowa, napełnienie, regulacja)"
     ],
     [
      "Szukane",
      "Wykonawca o najmniejszej sumie robocizny"
     ],
     [
      "Wzór",
      "\\[ R=\\sum \\text{pozycji usługowych} \\]"
     ],
     [
      "Podstawienie",
      "\\( R_1=180,\\ R_2=155,\\ R_3=20+20+20+55+15,\\ R_4=155 \\) [zł]"
     ],
     [
      "Wynik",
      "\\( R_3=130\\ \\mathrm{zł} \\) – najmniej, wykonawca 3"
     ]
    ],
    "bledne": {
     "A": "Wykonawca 1: 20+45+20+70+25 = 180 zł – najwyższa robocizna.",
     "B": "Wykonawca 2: 30+30+15+60+20 = 155 zł – więcej niż wykonawca 3.",
     "D": "Wykonawca 4: 40+20+15+50+30 = 155 zł – więcej niż wykonawca 3; ma najwyższe ceny materiałów, co mylnie sugeruje, że jest najtańszy lub najdroższy w robociźnie."
    },
    "pulapka": "Nie sumuj całej kolumny – materiały (agregat, chłodnica, czynnik, nakrętki) to nie robocizna. Wykonawca 3: 20+20+20+55+15 = 130 zł."
   }
  },
  {
   "n": 8,
   "tytul": "Przeznaczenie suwmiarki",
   "dzial": "Pomiary i diagnostyka",
   "tresc": "Przyrząd przedstawiony na rysunku przeznaczony jest do",
   "img": "img/ee15-2021-01/z08.png",
   "img_alt": "Suwmiarka uniwersalna z noniuszem i wysuwką głębokościomierza.",
   "odp": {
    "A": "pomiaru głębokości.",
    "B": "gratowania krawędzi rury.",
    "C": "kielichowania rur miedzianych.",
    "D": "kalibrowania średnicy wewnętrznej rury."
   },
   "klucz": "A",
   "rozw": {
    "lead": "Na rysunku jest suwmiarka uniwersalna z noniuszem. Poza szczękami do pomiarów zewnętrznych i wewnętrznych ma wysuwany wskaźnik głębokości, którym mierzy się głębokość – to odpowiedź wskazana w kluczu CKE.",
    "kroki": [],
    "bledne": {
     "B": "Gratowanie krawędzi rury wykonuje się gratownikiem, a nie suwmiarką.",
     "C": "Kielichowanie rur wykonuje się kielichownicą.",
     "D": "Do kalibrowania średnicy rur służy kalibrator (rozwiertak); suwmiarką się tylko mierzy."
    },
    "pulapka": "Klucz CKE wskazuje pomiar głębokości (wysuwka z tyłu suwmiarki). Suwmiarka mierzy też średnice zewnętrzne i wewnętrzne, ale niczego nie kalibruje."
   }
  },
  {
   "n": 9,
   "tytul": "Narzędzie do gięcia rur miedzianych",
   "dzial": "Montaż i rurociągi",
   "tresc": "Narzędzie stosowane do gięcia rur miedzianych przedstawiono na ilustracji",
   "img": "img/ee15-2021-01/z09.png",
   "img_alt": "Cztery narzędzia: I – ekspander ręczny, II – obcinarka krążkowa do rur, III – kielichownica, IV – giętarka ręczna z długimi rączkami.",
   "odp": {
    "A": "I.",
    "B": "II.",
    "C": "III.",
    "D": "IV."
   },
   "klucz": "D",
   "rozw": {
    "lead": "Rury miedziane gnie się giętarką ręczną z długimi rączkami i rolką (ilustracja IV), co zapobiega zgnieceniu rury i zachowuje jej przekrój.",
    "kroki": [],
    "bledne": {
     "A": "Ilustracja I to ekspander (rozszerzacz) ręczny do wykonywania końcówek pod lutowanie.",
     "B": "Ilustracja II to obcinarka krążkowa do cięcia rur.",
     "C": "Ilustracja III to kielichownica (do kielichowania końcówek pod połączenia gwintowe)."
    },
    "pulapka": null
   }
  },
  {
   "n": 10,
   "tytul": "Miejsce osuszacza przed sprężarką",
   "dzial": "Elementy i automatyka obiegu",
   "tresc": "W którym miejscu urządzenia chłodniczego przedstawionego na schemacie należy zamontować osuszacz zabezpieczający sprężarkę przed zalaniem ciekłym czynnikiem?",
   "img": "img/ee15-2021-01/z10.png",
   "img_alt": "Schemat urządzenia chłodniczego: skraplacz, sprężarka, odwadniacz na przewodzie cieczy, komora chłodnicza z parownikiem; cztery miejsca montażu oznaczone cyframi 1–4 (1 i 2 – przewód cieczy, 3 – przewód ssawny, 4 – przewód tłoczny).",
   "odp": {
    "A": "1",
    "B": "2",
    "C": "3",
    "D": "4"
   },
   "klucz": "C",
   "rozw": {
    "lead": "Zabezpieczenie sprężarki przed zalaniem cieczą (odwadniacz/separator cieczy) montuje się na przewodzie ssawnym, między parownikiem a sprężarką, czyli w punkcie 3 (zgodnie z kluczem CKE).",
    "kroki": [],
    "bledne": {
     "A": "Punkt 1 leży na przewodzie cieczy za filtrem odwadniaczem, przed zaworem rozprężnym; tam nie ma ryzyka zalania sprężarki.",
     "B": "Punkt 2 to przewód cieczy przed elementem oznaczonym „odwadniacz” – ten element chroni układ przed wilgocią, a nie sprężarkę przed cieczą.",
     "D": "Punkt 4 to przewód tłoczny (gorąca para), gdzie montuje się np. odolejacz, nie zabezpieczenie przed cieczą."
    },
    "pulapka": "Nazwa „osuszacz” bywa mylona z filtrem odwadniaczem (przewód cieczy). Pytanie dotyczy ochrony sprężarki przed cieczą, więc chodzi o przewód ssawny – klucz CKE wskazuje 3."
   }
  },
  {
   "n": 11,
   "tytul": "Łącznik redukcyjny nyplowy",
   "dzial": "Montaż i rurociągi",
   "tresc": "Na którym rysunku przedstawiono łącznik redukcyjny nyplowy?",
   "img": "img/ee15-2021-01/z11.png",
   "img_alt": "Miedziane kształtki lutownicze: I – łącznik redukcyjny, II – mufa prosta, III – kolano 90°, IV – trójnik.",
   "odp": {
    "A": "I.",
    "B": "II.",
    "C": "III.",
    "D": "IV."
   },
   "klucz": "A",
   "rozw": {
    "lead": "Łącznik redukcyjny nyplowy łączy rury o różnych średnicach – jeden koniec ma mniejszą średnicę i wchodzi (jak nypel) w rurę. Taki kształt ma rysunek I.",
    "kroki": [],
    "bledne": {
     "B": "Rysunek II to mufa (łącznik prosty) o jednakowej średnicy końców.",
     "C": "Rysunek III to kolano 90°.",
     "D": "Rysunek IV to trójnik."
    },
    "pulapka": null
   }
  },
  {
   "n": 12,
   "tytul": "Kolor żyły przewodu neutralnego",
   "dzial": "Elektrotechnika",
   "tresc": "Jaki kolor izolacji żyły przewodu w instalacji elektrycznej jest zastrzeżony dla przewodu neutralnego?",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "Żółty.",
    "B": "Zielony.",
    "C": "Czarny.",
    "D": "Niebieski."
   },
   "klucz": "D",
   "rozw": {
    "lead": "Przewód neutralny N oznacza się kolorem jasnoniebieskim (niebieskim).",
    "kroki": [],
    "bledne": {
     "A": "Żółty występuje tylko w parze z zielonym i oznacza przewód ochronny PE.",
     "B": "Zielony jest używany tylko w połączeniu z żółtym (PE); sam nie jest barwą przewodu N.",
     "C": "Czarny (oraz brązowy i szary) to kolory przewodów fazowych L."
    },
    "pulapka": "PE: żółto-zielony, N: niebieski, L: brązowy, czarny lub szary."
   }
  },
  {
   "n": 13,
   "tytul": "Miejsce czujnika zaworu rozprężnego",
   "dzial": "Elementy i automatyka obiegu",
   "tresc": "W przypadku montażu <span class=\"term\" data-key=\"tzr\">termostatycznego zaworu rozprężnego</span> czujnik zaworu montuje się na",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "wypływie ze sprężarki.",
    "B": "wypływie z parownika.",
    "C": "dopływie do skraplacza.",
    "D": "dopływie do dochładzacza."
   },
   "klucz": "B",
   "rozw": {
    "lead": "Czujnik TZR mierzy temperaturę pary na wylocie z parownika; różnica jej i temperatury parowania to przegrzanie, które steruje otwarciem zaworu.",
    "kroki": [],
    "bledne": {
     "A": "Na wypływie ze sprężarki (tłoczeniu) temperatura jest za wysoka i nie odzwierciedla przegrzania w parowniku.",
     "C": "Dopływ do skraplacza to przewód tłoczny – brak związku z regulacją napełnienia parownika.",
     "D": "Dochładzacz leży po stronie cieczy; czujnik tam nie mierzy przegrzania."
    },
    "pulapka": "Czujnik mocuje się opaską na poziomym odcinku przewodu ssawnego tuż za parownikiem, z dobrym kontaktem i izolacją."
   }
  },
  {
   "n": 14,
   "tytul": "Przyrząd do wytwarzania próżni",
   "dzial": "Serwis, napełnianie, szczelność",
   "tresc": "Który przyrząd należy zastosować do wytworzenia próżni w układzie chłodniczym ?",
   "img": "img/ee15-2021-01/z14.png",
   "img_alt": "Cztery przyrządy serwisowe: I – waga elektroniczna do czynnika, II – pompa próżniowa, III – zestaw lutowniczy z butlami i okularami, IV – elektroniczny wykrywacz nieszczelności.",
   "odp": {
    "A": "I.",
    "B": "II.",
    "C": "III.",
    "D": "IV."
   },
   "klucz": "B",
   "rozw": {
    "lead": "Próżnię wytwarza pompa próżniowa (ilustracja II); <span class=\"term\" data-key=\"prozn\">próżniowanie</span> usuwa powietrze i wilgoć z instalacji.",
    "kroki": [],
    "bledne": {
     "A": "I to waga do czynnika chłodniczego, służy do dozowania ilości czynnika.",
     "C": "III to zestaw lutowniczy z palnikiem gazowym.",
     "D": "IV to elektroniczny detektor nieszczelności."
    },
    "pulapka": null
   }
  },
  {
   "n": 15,
   "tytul": "Wymiary maty izolacyjnej rurociągu",
   "dzial": "Obliczenia",
   "tresc": "Określ wymiary maty z wełny mineralnej przeznaczonej na izolację prostego odcinka rurociągu o średnicy zewnętrznej 250 mm i długości 3 m.",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "0,25 m × 0,785 m",
    "B": "2,5 m × 0,25 m",
    "C": "3,0 m × 0,25 m",
    "D": "3,0 m × 0,785 m"
   },
   "klucz": "D",
   "rozw": {
    "lead": "Mata owija rurę: jeden wymiar to długość odcinka (3,0 m), drugi to obwód rury \\( \\pi d \\approx 0{,}785\\ \\mathrm{m} \\).",
    "kroki": [
     [
      "Dane",
      "\\( d=250\\ \\mathrm{mm}=0{,}25\\ \\mathrm{m},\\ L=3\\ \\mathrm{m} \\)"
     ],
     [
      "Szukane",
      "Wymiary maty: długość × szerokość (obwód)"
     ],
     [
      "Wzór",
      "\\[ O=\\pi\\cdot d \\]"
     ],
     [
      "Podstawienie",
      "\\( O=3{,}14\\cdot 0{,}25 \\)"
     ],
     [
      "Wynik",
      "\\( O=0{,}785\\ \\mathrm{m} \\), mata \\( 3{,}0\\ \\mathrm{m}\\times 0{,}785\\ \\mathrm{m} \\)"
     ]
    ],
    "bledne": {
     "A": "0,25 m × 0,785 m – zamieniono długość z średnicą; długość rury to 3 m.",
     "B": "2,5 m × 0,25 m – nie wynika z długości (3 m) ani z obwodu; 0,25 m to średnica, nie obwód.",
     "C": "3,0 m × 0,25 m – użyto średnicy zamiast obwodu; taka mata nie owinęłaby rury."
    },
    "pulapka": "Do obwodu użyj średnicy w metrach (0,25 m). Grubość izolacji w tym zadaniu się pomija."
   }
  },
  {
   "n": 16,
   "tytul": "Ustawienie zaworów w oprawie manometrów",
   "dzial": "Serwis, napełnianie, szczelność",
   "tresc": "Na którym rysunku przedstawiono prawidłowe ustawienie zaworów w oprawie do manometrów podczas dopełniania urządzenia chłodniczego czynnikiem chłodniczym w postaci pary w czasie pracy urządzenia chłodniczego?",
   "img": "img/ee15-2021-01/z16.png",
   "img_alt": "Cztery rysunki oprawy manometrycznej (niebieski zawór niskiego i czerwony zawór wysokiego ciśnienia, żółty przewód środkowy) w różnych ustawieniach zaworów oznaczonych I–IV.",
   "odp": {
    "A": "I.",
    "B": "II.",
    "C": "III.",
    "D": "IV."
   },
   "klucz": "A",
   "rozw": {
    "lead": "Zgodnie z kluczem CKE poprawny jest rysunek I. Przy dopełnianiu parą w czasie pracy czynnik podaje się od strony niskiego ciśnienia (niebieski zawór i środkowy przewód do butli), a zawór wysokiego ciśnienia (czerwony) pozostaje zamknięty, żeby wysokie ciśnienie nie dostało się do butli.",
    "kroki": [],
    "bledne": {
     "B": "Rysunek II – układ zaworów inny niż wymagany (nie spełnia warunku: strona niska połączona ze środkowym przewodem, strona wysoka odcięta).",
     "C": "Rysunek III – układ zaworów nie odpowiada wymaganemu ustawieniu dla dopełniania parą w czasie pracy.",
     "D": "Rysunek IV – układ zaworów nie odpowiada wymaganemu; otwarcie strony wysokiej do butli grozi cofnięciem czynnika."
    },
    "pulapka": "Dopełnianie w czasie pracy – tylko parą od strony ssawnej (niebieski). Ciecz podaje się wyłącznie według instrukcji producenta (zwykle przy zatrzymanym urządzeniu lub przez zawór cieczowy). Rysunki różnią się drobnymi szczegółami przekroju zaworów – oceniaj położenie trzpieni względem gniazd."
   }
  },
  {
   "n": 17,
   "tytul": "Nastawa presostatu maksymalnego R502",
   "dzial": "Pomiary i diagnostyka",
   "tresc": "Na podstawie danych zamieszczonych w tabeli określ na jakie ciśnienie należy w urządzeniu chłodniczym na czynnik R502 nastawić presostat maksymalny, aby temperatura skraplania równa 30°C nie została przekroczona?<div class=\"tblwrap\"><table><thead><tr><th>Temperatura [°C]</th><th>R502 – ciśnienie nasycenia [MPa]</th><th>R717 – ciśnienie nasycenia [MPa]</th></tr></thead><tbody><tr><td>20</td><td>1,01</td><td>0,86</td></tr><tr><td>25</td><td>1,18</td><td>1,10</td></tr><tr><td>30</td><td>1,31</td><td>1,17</td></tr><tr><td>35</td><td>1,51</td><td>1,35</td></tr><tr><td>40</td><td>1,67</td><td>1,45</td></tr></tbody></table></div>",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "1,17 MPa",
    "B": "1,18 MPa",
    "C": "1,31 MPa",
    "D": "1,35 MPa"
   },
   "klucz": "C",
   "rozw": {
    "lead": "<span class=\"term\" data-key=\"presostat\">Presostat</span> HP ma wyłączyć sprężarkę, gdy temperatura skraplania osiągnie 30 °C, czyli przy ciśnieniu nasycenia R502 w 30 °C: 1,31 MPa (wiersz 30 °C, kolumna R502).",
    "kroki": [],
    "bledne": {
     "A": "1,17 MPa to ciśnienie dla R717 przy 30 °C – odczyt z niewłaściwej kolumny.",
     "B": "1,18 MPa to ciśnienie R502 w 25 °C – odczyt z niewłaściwego wiersza.",
     "D": "1,35 MPa to ciśnienie R717 w 35 °C – zły wiersz i zła kolumna."
    },
    "pulapka": "Sprawdź czynnik (R502, nie R717) i wiersz temperatury. R502 jest czynnikiem wycofanym z użytku (zawiera CFC; przepisy o substancjach zubożających warstwę ozonową) – zadanie ma charakter wyłącznie odczytowy."
   }
  },
  {
   "n": 18,
   "tytul": "Temperatura krzepnięcia solanki NaCl",
   "dzial": "Pomiary i diagnostyka",
   "tresc": "Na podstawie danych z zamieszczonej tablicy określ temperaturę krzepnięcia roztworu solanki NaCl o gęstości 1,14 kg/dm<sup>3</sup>.<div class=\"tblwrap\"><table><thead><tr><th>Gęstość [kg/m<sup>3</sup>]</th><th>Stężenie masowe [%]</th><th>Temperatura krzepnięcia [°C]</th></tr></thead><tbody><tr><td>1080</td><td>11</td><td>-7,5</td></tr><tr><td>1100</td><td>13,6</td><td>-9,6</td></tr><tr><td>1120</td><td>16,2</td><td>-12,2</td></tr><tr><td>1140</td><td>18,8</td><td>-15,1</td></tr><tr><td>1160</td><td>21,2</td><td>-18,2</td></tr></tbody></table></div>",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "-9,6<sup>o</sup>C",
    "B": "-12,2<sup>o</sup>C",
    "C": "-15,1<sup>o</sup>C",
    "D": "-18,8<sup>o</sup>C"
   },
   "klucz": "C",
   "rozw": {
    "lead": "1,14 kg/dm<sup>3</sup> = 1140 kg/m<sup>3</sup>; w wierszu 1140 temperatura krzepnięcia wynosi -15,1 °C.",
    "kroki": [],
    "bledne": {
     "A": "-9,6 °C odpowiada gęstości 1100 kg/m<sup>3</sup>.",
     "B": "-12,2 °C odpowiada gęstości 1120 kg/m<sup>3</sup>.",
     "D": "-18,8 °C to stężenie 18,8 % z wiersza 1140 przepisane jako temperatura (pomylenie kolumn)."
    },
    "pulapka": "Przelicz jednostki gęstości: 1 kg/dm<sup>3</sup> = 1000 kg/m<sup>3</sup>. Uważaj na wartość 18,8 – to stężenie, nie temperatura."
   }
  },
  {
   "n": 19,
   "tytul": "Przyrząd do pomiaru długości rurociągu",
   "dzial": "Pomiary i diagnostyka",
   "tresc": "Do pomiaru długości zainstalowanego rurociągu należy użyć",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "mikrometru.",
    "B": "liniału pomiarowego.",
    "C": "suwmiarki uniwersalnej.",
    "D": "średnicówki mikrometrycznej."
   },
   "klucz": "B",
   "rozw": {
    "lead": "Długość zamontowanego odcinka (rzędu metrów) mierzy się liniałem, miarką lub przymiarem; pozostałe przyrządy służą do pomiarów małych wymiarów liniowych.",
    "kroki": [],
    "bledne": {
     "A": "Mikrometr mierzy z dokładnością setnych części milimetra średnice i grubości małych elementów.",
     "C": "Suwmiarka ma zakres kilkunastu centymetrów i mierzy średnice, grubości i głębokości.",
     "D": "Średnicówka mikrometryczna mierzy średnice wewnętrzne otworów."
    },
    "pulapka": null
   }
  },
  {
   "n": 20,
   "tytul": "Dokument po zakończeniu montażu",
   "dzial": "BHP i przepisy",
   "tresc": "Po zakończeniu robót montażowych i uruchomieniu instalacji chłodniczej należy sporządzić",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "instrukcję konserwacji i smarowania.",
    "B": "roczny plan naprawy i przeglądów.",
    "C": "protokół zdawczo-odbiorczy.",
    "D": "kartę naprawy maszyny."
   },
   "klucz": "C",
   "rozw": {
    "lead": "Zakończenie robót montażowych i rozruch potwierdza się protokołem zdawczo-odbiorczym podpisanym przez wykonawcę i odbiorcę.",
    "kroki": [],
    "bledne": {
     "A": "Instrukcja konserwacji i smarowania pochodzi od producenta lub projektanta – nie jest wynikiem zakończenia robót.",
     "B": "Roczny plan napraw i przeglądów dotyczy eksploatacji, nie odbioru.",
     "D": "Karta naprawy maszyny dotyczy wykonywanej naprawy, a nie nowo zamontowanej instalacji."
    },
    "pulapka": null
   }
  },
  {
   "n": 21,
   "tytul": "Podstawa rozruchu i obsługi urządzenia",
   "dzial": "BHP i przepisy",
   "tresc": "Rozruch i obsługę urządzenia chłodniczego przeprowadza się w oparciu o",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "dokumentację techniczno-ruchową.",
    "B": "kartę technologiczną.",
    "C": "schemat montażowy.",
    "D": "rysunek złożeniowy."
   },
   "klucz": "A",
   "rozw": {
    "lead": "Dokumentacja techniczno-ruchowa (DTR) zawiera opis działania, nastawy, zasady uruchamiania, obsługi i konserwacji urządzenia.",
    "kroki": [],
    "bledne": {
     "B": "Karta technologiczna opisuje przebieg procesu wytwarzania, nie obsługę urządzenia.",
     "C": "Schemat montażowy pokazuje sposób łączenia elementów podczas montażu.",
     "D": "Rysunek złożeniowy pokazuje budowę zespołu i położenie części, nie zasady obsługi."
    },
    "pulapka": null
   }
  },
  {
   "n": 22,
   "tytul": "Cykl remontowy sprężarki",
   "dzial": "Serwis, napełnianie, szczelność",
   "tresc": "Na podstawie przedstawionego na schemacie cyklu remontowego sprężarki określ liczbę godzin pracy sprężarki do kolejnej naprawy głównej, po drugiej naprawie bieżącej.",
   "img": "img/ee15-2021-01/z22.png",
   "img_alt": "Schemat cyklu remontowego sprężarki na osi czasu: naprawa główna G, naprawy bieżące B, średnie S i przeglądy techniczne p; wymiary 500, 1000, 2000 i 6000 godzin; legenda oznaczeń.",
   "odp": {
    "A": "1 000 h",
    "B": "3 000 h",
    "C": "5 000 h",
    "D": "6 000 h"
   },
   "klucz": "B",
   "rozw": {
    "lead": "Cały cykl od naprawy głównej G do kolejnej G trwa 6000 h. Naprawy bieżące B wypadają co 2000 h, począwszy od 1000 h (1000, 3000, 5000 h), więc druga naprawa bieżąca jest w 3000 h cyklu, a do naprawy głównej pozostaje 6000 − 3000 = 3000 h.",
    "kroki": [
     [
      "Dane",
      "Cykl G–G: 6000 h; druga naprawa bieżąca B w 3000 h cyklu"
     ],
     [
      "Szukane",
      "Czas do kolejnej naprawy głównej"
     ],
     [
      "Wzór",
      "\\[ t=t_{cyklu}-t_B \\]"
     ],
     [
      "Podstawienie",
      "\\( t=6000-3000 \\)"
     ],
     [
      "Wynik",
      "\\( t=3000\\ \\mathrm{h} \\)"
     ]
    ],
    "bledne": {
     "A": "1000 h to czas do kolejnej naprawy głównej dopiero po piątej, ostatniej naprawie bieżącej (w 5000 h) – nie po drugiej.",
     "C": "5000 h pozostałoby po pierwszej naprawie bieżącej (w 1000 h), a nie po drugiej.",
     "D": "6000 h to długość całego cyklu od naprawy głównej do kolejnej naprawy głównej."
    },
    "pulapka": "Od całego cyklu (6000 h) odejmij czas, który upłynął do wskazanej naprawy – nie podawaj długości całego cyklu. Policz B od początku cyklu: pierwsza w 1000 h, druga w 3000 h."
   }
  },
  {
   "n": 23,
   "tytul": "Skutek zanieczyszczenia skraplacza",
   "dzial": "Serwis, napełnianie, szczelność",
   "tresc": "Który z wymienionych czynników jest bezpośrednim skutkiem zanieczyszczenia <span class=\"term\" data-key=\"skraplacz\">skraplacza</span>?",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "Wzrost temperatury ssania.",
    "B": "Wzrost temperatury skraplania.",
    "C": "Obniżenie temperatury skraplania.",
    "D": "Nadmierne oszronienie parownika."
   },
   "klucz": "B",
   "rozw": {
    "lead": "Brud pogarsza przenikanie ciepła w skraplaczu, więc żeby oddać to samo ciepło, temperatura (i ciśnienie) skraplania muszą wzrosnąć.",
    "kroki": [],
    "bledne": {
     "A": "Temperatura ssania zależy od przegrzania w parowniku; nie jest bezpośrednim skutkiem brudnego skraplacza.",
     "C": "Brud skraplacza podnosi, a nie obniża temperaturę skraplania.",
     "D": "Oszronienie parownika wynika z warunków po stronie parownika (wilgoć, odszranianie), nie ze skraplacza."
    },
    "pulapka": "Skutki zabrudzenia: wzrost ciśnienia skraplania, wzrost poboru mocy, spadek wydajności; skrajnie – wyłączenie przez presostat HP."
   }
  },
  {
   "n": 24,
   "tytul": "Przegrzanie czynnika R290",
   "dzial": "Obliczenia",
   "tresc": "W urządzeniu chłodniczym ciśnienie czynnika R290 na ssaniu wynosi 2,91 bara przy temperaturze na wypływie z parownika równej -7<sup>0</sup>C. Na podstawie zamieszczonych w tabeli właściwości termodynamicznych czynnika R290, określ temperaturę przegrzania tego czynnika.<div class=\"tblwrap\"><table><thead><tr><th>Temperatura [°C]</th><th>Ciśnienie nasycenia [bar]</th></tr></thead><tbody><tr><td>-25</td><td>2,03</td></tr><tr><td>-20</td><td>2,44</td></tr><tr><td>-15</td><td>2,91</td></tr><tr><td>-10</td><td>3,45</td></tr><tr><td>-5</td><td>4,06</td></tr></tbody></table></div>",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "7ºC",
    "B": "8ºC",
    "C": "-8ºC",
    "D": "-15ºC"
   },
   "klucz": "B",
   "rozw": {
    "lead": "Temperatura parowania odpowiada ciśnieniu 2,91 bara, czyli -15 °C. <span class=\"term\" data-key=\"sh\">Przegrzanie</span> to różnica temperatury pary na wylocie z parownika i temperatury parowania: -7 − (−15) = 8 K.",
    "kroki": [
     [
      "Dane",
      "\\( p=2{,}91\\ \\mathrm{bar}\\Rightarrow t_0=-15\\ ^\\circ\\mathrm{C},\\ t_{wyl}=-7\\ ^\\circ\\mathrm{C} \\)"
     ],
     [
      "Szukane",
      "\\( \\Delta T_{sh} \\)"
     ],
     [
      "Wzór",
      "\\[ \\Delta T_{sh}=t_{wyl}-t_0 \\]"
     ],
     [
      "Podstawienie",
      "\\( \\Delta T_{sh}=-7-(-15) \\)"
     ],
     [
      "Wynik",
      "\\( \\Delta T_{sh}=8\\ \\mathrm{K} \\)"
     ]
    ],
    "bledne": {
     "A": "7 °C – błąd w odejmowaniu liczb ujemnych (np. 15 − 8).",
     "C": "-8 °C – zły znak wyniku; przegrzanie jest dodatnią różnicą temperatur.",
     "D": "-15 °C to temperatura parowania, a nie przegrzanie."
    },
    "pulapka": "Przegrzanie podaje się w kelwinach (8 K). Odejmując liczby ujemne, uważaj na znaki: -7 − (−15) = +8."
   }
  },
  {
   "n": 25,
   "tytul": "Dane techniczne termo-higrometru",
   "dzial": "Pomiary i diagnostyka",
   "tresc": "W przedstawionej tabeli zamieszczono dane techniczne",
   "img": "img/ee15-2021-01/z25.png",
   "img_alt": "Tabela Dane techniczne: pomiar temperatury (-25...+65 °C), pomiar wilgotności (0–100 %), pamięć 15000 rekordów, interfejs BLE 2,4 GHz, zasilanie bateria 3 V CR2450, obudowa ABS IP 30.",
   "odp": {
    "A": "przewodowego termo-barometru.",
    "B": "przewodowego termo-higrometru.",
    "C": "bezprzewodowego termo-barometru.",
    "D": "bezprzewodowego termo-higrometru."
   },
   "klucz": "D",
   "rozw": {
    "lead": "Tabela opisuje pomiar temperatury i wilgotności (termo-higrometr), a komunikacja odbywa się bezprzewodowo (interfejs BLE, bateria CR2450, zasięg 55 m).",
    "kroki": [],
    "bledne": {
     "A": "Przyrząd mierzy wilgotność, nie ciśnienie, i komunikuje się bezprzewodowo, więc nie jest przewodowym termo-barometrem.",
     "B": "Przyrząd jest termo-higrometrem, ale łączy się przez BLE i ma baterię, więc jest bezprzewodowy.",
     "C": "Tabela nie zawiera pomiaru ciśnienia atmosferycznego, więc nie jest to termo-barometr."
    },
    "pulapka": null
   }
  },
  {
   "n": 26,
   "tytul": "Rotametr",
   "dzial": "Pomiary i diagnostyka",
   "tresc": "Przyrząd pomiarowy przedstawiony na rysunku to",
   "img": "img/ee15-2021-01/z26.png",
   "img_alt": "Rotametr: pionowa rura pomiarowa z pływakiem, przyłącza u góry i u dołu, opisy: przyłącze, rura pomiarowa, pływak.",
   "odp": {
    "A": "rotametr.",
    "B": "areometr.",
    "C": "termometr.",
    "D": "anemometr."
   },
   "klucz": "A",
   "rozw": {
    "lead": "Rotametr to przepływomierz z pionową rurą pomiarową i pływakiem, którego położenie wskazuje natężenie przepływu; na rysunku widać przyłącza, rurę pomiarową i pływak.",
    "kroki": [],
    "bledne": {
     "B": "Areometr to pływak do pomiaru gęstości cieczy, zanurzany swobodnie w cieczy.",
     "C": "Termometr mierzy temperaturę i nie ma pływaka w rurze z przyłączami.",
     "D": "Anemometr mierzy prędkość przepływu powietrza (wiatraczek lub sonda), nie ma przyłączy rurowych."
    },
    "pulapka": null
   }
  },
  {
   "n": 27,
   "tytul": "Działanie presostatu LP",
   "dzial": "Elementy i automatyka obiegu",
   "tresc": "<span class=\"term\" data-key=\"presostat\">Presostat</span> niskiego ciśnienia LP wyłączy sprężarkę przy",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "zbyt niskim ciśnieniu w parowniku.",
    "B": "zbyt niskim ciśnieniu skraplania.",
    "C": "zbyt niskim ciśnieniu tłoczenia.",
    "D": "zbyt niskim ciśnieniu oleju."
   },
   "klucz": "A",
   "rozw": {
    "lead": "LP mierzy ciśnienie po stronie ssawnej (parowania) i wyłącza sprężarkę, gdy spadnie poniżej nastawy (np. wskutek braku czynnika lub zatkania zaworu).",
    "kroki": [],
    "bledne": {
     "B": "Ciśnienie skraplania leży po stronie wysokiej; nie steruje nim LP.",
     "C": "Ciśnienie tłoczenia kontroluje presostat HP, i to przy wzroście.",
     "D": "Ciśnienie oleju kontroluje presostat różnicowy oleju."
    },
    "pulapka": "Nie myl: LP – za niskie ssanie, HP – za wysokie tłoczenie, presostat oleju – za mała różnica ciśnień oleju."
   }
  },
  {
   "n": 28,
   "tytul": "Próby po naprawie głównej sprężarki",
   "dzial": "Serwis, napełnianie, szczelność",
   "tresc": "Po wykonanej naprawie głównej sprężarki chłodniczej przeprowadza się",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "próby bez obciążenia, a następnie pod obciążeniem.",
    "B": "próby pod obciążeniem, a następnie bez obciążenia.",
    "C": "wyłącznie próby pod obciążeniem.",
    "D": "wyłącznie próby bez obciążenia."
   },
   "klucz": "A",
   "rozw": {
    "lead": "Odbiór po naprawie zaczyna się od próby na biegu jałowym (bez obciążenia), aby sprawdzić poprawność montażu i docieranie, a dopiero potem przeprowadza się próbę pod obciążeniem.",
    "kroki": [],
    "bledne": {
     "B": "Rozpoczęcie od obciążenia grozi uszkodzeniem niedotartych elementów.",
     "C": "Pominięcie próby bez obciążenia nie pozwala wykryć usterek przed obciążeniem sprężarki.",
     "D": "Sama próba bez obciążenia nie potwierdza parametrów roboczych."
    },
    "pulapka": null
   }
  },
  {
   "n": 29,
   "tytul": "Zamrażanie kriogeniczne",
   "dzial": "Czynniki i F-gazy",
   "tresc": "Którą z podanych substancji wykorzystuje się podczas zamrażania kriogenicznego produktów spożywczych?",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "Wilgotne powietrze.",
    "B": "Zimną solankę.",
    "C": "Suchy azot.",
    "D": "Ciekły azot."
   },
   "klucz": "D",
   "rozw": {
    "lead": "Zamrażanie kriogeniczne polega na bezpośrednim kontakcie żywności z ciekłym azotem (wrze w -196 °C), co daje bardzo szybkie zamrożenie.",
    "kroki": [],
    "bledne": {
     "A": "Wilgotne powietrze jest ośrodkiem w komorach powietrznych, nie kriogenicznym.",
     "B": "Zimna solanka służy do zamrażania immersyjnego, ale nie jest czynnikiem kriogenicznym.",
     "C": "Suchy azot jest gazem – nie osiąga się nim tak niskiej temperatury jak odparowującym ciekłym azotem."
    },
    "pulapka": null
   }
  },
  {
   "n": 30,
   "tytul": "Zagrożenie pożarem przy wycieku czynnika",
   "dzial": "Czynniki i F-gazy",
   "tresc": "Podczas napełniania instalacji chłodniczych zagrożenie pożarem może spowodować wyciek czynnika chłodniczego o symbolu",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "R 744",
    "B": "R 600a",
    "C": "R 502",
    "D": "R 401A"
   },
   "klucz": "B",
   "rozw": {
    "lead": "R600a (izobutan) to palny węglowodór (klasa A3), tworzący z powietrzem mieszaninę wybuchową.",
    "kroki": [],
    "bledne": {
     "A": "R744 to CO<sub>2</sub> – niepalny, groźny przez wysokie ciśnienie i duszenie.",
     "C": "R502 to niepalna mieszanina czynników chlorowcopochodnych.",
     "D": "R401A to niepalna mieszanina HCFC (klasa A1)."
    },
    "pulapka": "Czynniki palne: węglowodory (R290, R600a, R1270), a także R32 i HFO (A2L) – lekko palne."
   }
  },
  {
   "n": 31,
   "tytul": "Element układu odzysku czynnika",
   "dzial": "Serwis, napełnianie, szczelność",
   "tresc": "W przedstawionym na ilustracji układzie do odzysku czynnika chłodniczego element wskazany strzałką to",
   "img": "img/ee15-2021-01/z31.png",
   "img_alt": "Technik przy odzysku czynnika chłodniczego z klimatyzatora: stacja odzysku, butla odzyskowa (żółta), przewody; strzałka wskazuje niebieski element na przewodzie przed stacją.",
   "odp": {
    "A": "filtr.",
    "B": "zawór pary.",
    "C": "zawór cieczy.",
    "D": "przepływomierz."
   },
   "klucz": "A",
   "rozw": {
    "lead": "Strzałka wskazuje niebieski element wstawiony w przewód przed stacją odzysku – filtr (filtr-osuszacz), który zatrzymuje zanieczyszczenia i chroni stację.",
    "kroki": [],
    "bledne": {
     "B": "Zawory pary i cieczy znajdują się na bloku manometrycznym, stacji lub butli, a nie jako element wstawiony w przewód.",
     "C": "Zawór cieczy także znajduje się na stacji lub butli.",
     "D": "Przepływomierz wyglądałby jak rotametr lub licznik z wyświetlaczem."
    },
    "pulapka": null
   }
  },
  {
   "n": 32,
   "tytul": "Działanie presostatu HP",
   "dzial": "Elementy i automatyka obiegu",
   "tresc": "Presostat maksymalny HP wyłącza sprężarkę w przypadku nadmiernego wzrostu ciśnienia",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "parowania.",
    "B": "tłoczenia.",
    "C": "ssania.",
    "D": "oleju."
   },
   "klucz": "B",
   "rozw": {
    "lead": "HP chroni przed zbyt wysokim ciśnieniem po stronie tłocznej (skraplania) i wyłącza sprężarkę po przekroczeniu nastawy.",
    "kroki": [],
    "bledne": {
     "A": "Ciśnienie parowania kontroluje presostat LP, przy spadku.",
     "C": "Ciśnienie ssania także kontroluje LP – strona ssawna nie jest chroniona przez HP.",
     "D": "Ciśnienie oleju monitoruje osobny presostat różnicowy."
    },
    "pulapka": null
   }
  },
  {
   "n": 33,
   "tytul": "Przyczyna mokrej pracy sprężarki",
   "dzial": "Serwis, napełnianie, szczelność",
   "tresc": "Wskaż przyczynę mokrej pracy sprężarki, w przypadku układu chłodniczego z termostatycznym zaworem rozprężnym.",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "Zbyt mała ilość czynnika w urządzeniu chłodniczym.",
    "B": "Nastawienie zbyt dużego przegrzania.",
    "C": "Czujnik nie przylega do parownika.",
    "D": "Za mała wydajność zaworu."
   },
   "klucz": "C",
   "rozw": {
    "lead": "Jeżeli czujnik zaworu nie ma dobrego kontaktu z mierzonym miejscem, odczytuje zafałszowaną (zbyt wysoką) temperaturę i zawór otwiera się za szeroko, więc do parownika, a dalej do sprężarki, dostaje się za dużo czynnika (mokra praca) – zgodnie z kluczem CKE.",
    "kroki": [],
    "bledne": {
     "A": "Za mała ilość czynnika powoduje suchą pracę i duże przegrzanie, nie mokrą.",
     "B": "Duże nastawione przegrzanie przymyka zawór i zmniejsza napełnienie parownika.",
     "D": "Za mała wydajność zaworu dławi dopływ czynnika – parownik niedolany, para przegrzana."
    },
    "pulapka": "Czujnik powinien być przymocowany opaską do przewodu na wylocie z parownika (przewód ssawny) i zaizolowany. Klucz CKE traktuje „brak przylegania czujnika” jako przyczynę mokrej pracy."
   }
  },
  {
   "n": 34,
   "tytul": "Narzędzie do kielichowania rur",
   "dzial": "Montaż i rurociągi",
   "tresc": "Którym narzędziem należy się posłużyć, wykonując kielichowanie końcówek rur miedzianych, w celu ich połączenia przez lutowanie?",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "Obcęgami.",
    "B": "Ekspanderem.",
    "C": "Giętarką ręczną.",
    "D": "Obcinarką krążkową."
   },
   "klucz": "B",
   "rozw": {
    "lead": "Do rozszerzania końcówek rur pod lutowanie (kielich, w który wchodzi rura tej samej średnicy) służy ekspander (rozszerzacz).",
    "kroki": [],
    "bledne": {
     "A": "Obcęgi nie rozszerzają końcówki w sposób kontrolowany.",
     "C": "Giętarka służy do gięcia rur.",
     "D": "Obcinarka krążkowa tnie rury."
    },
    "pulapka": "Kielichownica wytwarza kielich 45° pod połączenie gwintowe (kołnierzowe, flare); pod lutowanie używa się ekspandera."
   }
  },
  {
   "n": 35,
   "tytul": "Dokładne osuszenie instalacji",
   "dzial": "Serwis, napełnianie, szczelność",
   "tresc": "Dokładne osuszenie instalacji chłodniczej po naprawie należy przeprowadzić przez",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "przedmuchanie suchym azotem.",
    "B": "odessanie czynnika sprężarką chłodniczą.",
    "C": "wykonanie próżni za pomocą pompy próżniowej.",
    "D": "przedmuchanie instalacji suchym dwutlenkiem węgla."
   },
   "klucz": "C",
   "rozw": {
    "lead": "Wilgoć usuwa się przez <span class=\"term\" data-key=\"prozn\">próżniowanie</span> pompą próżniową – przy niskim ciśnieniu woda wrze w niskiej temperaturze i jest odsysana.",
    "kroki": [],
    "bledne": {
     "A": "Przedmuchanie azotem usuwa tylko część wilgoci i zanieczyszczeń.",
     "B": "Odessanie czynnika sprężarką nie usuwa wilgoci i może uszkodzić sprężarkę.",
     "D": "Dwutlenek węgla nie jest przeznaczony do osuszania instalacji."
    },
    "pulapka": "Azot służy do próby ciśnieniowej i przedmuchu przy lutowaniu, a dokładne osuszanie robi się próżnią."
   }
  },
  {
   "n": 36,
   "tytul": "Przyczyna wysokiej temperatury skraplania",
   "dzial": "Serwis, napełnianie, szczelność",
   "tresc": "Co może być przyczyną nadmiernie wysokiej temperatury skraplania?",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "Za mała wydajność sprężarki.",
    "B": "Awaria wentylatora skraplacza.",
    "C": "Nadmierne chłodzenie skraplacza.",
    "D": "Niedostateczne dochłodzenie w dochładzaczu."
   },
   "klucz": "B",
   "rozw": {
    "lead": "Awaria wentylatora ogranicza odbiór ciepła w <span class=\"term\" data-key=\"skraplacz\">skraplaczu</span>, więc temperatura i ciśnienie skraplania rosną.",
    "kroki": [],
    "bledne": {
     "A": "Za mała wydajność sprężarki obniża, a nie podnosi ciśnienie skraplania.",
     "C": "Nadmierne chłodzenie obniża temperaturę skraplania.",
     "D": "Niedostateczne dochłodzenie dotyczy temperatury cieczy za skraplaczem i nie podnosi temperatury skraplania."
    },
    "pulapka": null
   }
  },
  {
   "n": 37,
   "tytul": "Zakres ciśnienia z tolerancją",
   "dzial": "Obliczenia",
   "tresc": "W jakim przedziale wartości może zmieniać się ciśnienie na wyjściu naprawionej sprężarki, jeżeli zgodnie z dokumentacją powinno ono wynosić 2 bar ±5%?",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "1,55÷2,55 bar",
    "B": "1,85÷2,05 bar",
    "C": "1,90÷2,10 bar",
    "D": "1,95÷2,15 bar"
   },
   "klucz": "C",
   "rozw": {
    "lead": "5% z 2 bar to 0,1 bar; zakres wynosi 2 ± 0,1 = 1,90÷2,10 bar.",
    "kroki": [
     [
      "Dane",
      "\\( p=2\\ \\mathrm{bar},\\ \\pm 5\\% \\)"
     ],
     [
      "Szukane",
      "Przedział \\( p_{min}\\div p_{max} \\)"
     ],
     [
      "Wzór",
      "\\[ \\Delta p=0{,}05\\cdot p \\]"
     ],
     [
      "Podstawienie",
      "\\( \\Delta p=0{,}05\\cdot 2=0{,}1\\ \\mathrm{bar} \\)"
     ],
     [
      "Wynik",
      "\\( 1{,}90\\div 2{,}10\\ \\mathrm{bar} \\)"
     ]
    ],
    "bledne": {
     "A": "1,55÷2,55 bar – tolerancja 0,45 bar (ok. 22%), a nie 5%.",
     "B": "1,85÷2,05 bar – przedział niesymetryczny (−0,15; +0,05).",
     "D": "1,95÷2,15 bar – przesunięty o +0,05 bar; środek nie wynosi 2 bar."
    },
    "pulapka": "Tolerancja procentowa liczona jest od wartości nominalnej (2 bar), nie od 100 bar ani od wartości granicznej."
   }
  },
  {
   "n": 38,
   "tytul": "Średnia temperatura parowania z pomiarów",
   "dzial": "Obliczenia",
   "tresc": "Na podstawie zamieszczonych w tabeli wyników 5 wykonanych pomiarów oblicz średnią wartość temperatury parowania.<div class=\"tblwrap\"><table><thead><tr><th>Nr pomiaru</th><th>Pomiar 1</th><th>Pomiar 2</th><th>Pomiar 3</th><th>Pomiar 4</th><th>Pomiar 5</th></tr></thead><tbody><tr><td>Temperatura [°C]</td><td>-36</td><td>-34</td><td>-33</td><td>-35</td><td>-37</td></tr></tbody></table></div>",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "-34 <sup>o</sup>C",
    "B": "-35 <sup>o</sup>C",
    "C": "-36 <sup>o</sup>C",
    "D": "-37 <sup>o</sup>C"
   },
   "klucz": "B",
   "rozw": {
    "lead": "Średnia arytmetyczna to suma wyników podzielona przez liczbę pomiarów: -175/5 = -35 °C.",
    "kroki": [
     [
      "Dane",
      "\\( -36;\\ -34;\\ -33;\\ -35;\\ -37\\ ^\\circ\\mathrm{C} \\)"
     ],
     [
      "Szukane",
      "\\( \\bar t_0 \\)"
     ],
     [
      "Wzór",
      "\\[ \\bar t=\\frac{\\sum t_i}{n} \\]"
     ],
     [
      "Podstawienie",
      "\\( \\bar t=\\dfrac{-36-34-33-35-37}{5}=\\dfrac{-175}{5} \\)"
     ],
     [
      "Wynik",
      "\\( \\bar t_0=-35\\ ^\\circ\\mathrm{C} \\)"
     ]
    ],
    "bledne": {
     "A": "-34 °C to wartość pomiaru 2, a nie średnia (lub wynik błędnego dodawania).",
     "C": "-36 °C to wartość pomiaru 1.",
     "D": "-37 °C to wartość pomiaru 5 (najniższa), a nie średnia."
    },
    "pulapka": "Przy ujemnych liczbach dodawaj wartości bezwzględne i dopisz znak minus: 36+34+33+35+37 = 175."
   }
  },
  {
   "n": 39,
   "tytul": "Czynnik o najniższych GWP i ODP",
   "dzial": "Czynniki i F-gazy",
   "tresc": "Który z czynników chłodniczych posiada najniższe wartości GWP i ODP?",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "R 134a",
    "B": "R 290",
    "C": "R 600a",
    "D": "R 717"
   },
   "klucz": "D",
   "rozw": {
    "lead": "Amoniak R717 ma ODP = 0 i GWP = 0 (czynnik naturalny); propan i izobutan mają ODP = 0, ale GWP ok. 3, a R134a ma GWP ok. 1430.",
    "kroki": [],
    "bledne": {
     "A": "R134a ma GWP ok. 1430 (ODP = 0).",
     "B": "R290 (propan) ma GWP ok. 3 – nie jest najniższe.",
     "C": "R600a (izobutan) ma GWP ok. 3 – nie jest najniższe."
    },
    "pulapka": "Niskie GWP nie oznacza bezpieczeństwa: R717 jest toksyczny, R290 i R600a palne. Dziś obowiązuje rozporządzenie (UE) 2024/573 (zastąpiło 517/2014); wartości GWP zależą od raportu IPCC użytego w przepisie."
   }
  },
  {
   "n": 40,
   "tytul": "Test wyłącznika różnicowoprądowego",
   "dzial": "Elektrotechnika",
   "tresc": "W jaki sposób sprawdza się działanie wyłącznika różnicowoprądowego?",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "Wykonując zwarcie w obwodzie chronionym.",
    "B": "Zmieniając położenie dźwigni \"ON-OFF\".",
    "C": "Mierząc napięcie i prąd wyłącznika.",
    "D": "Wciskając przycisk \"TEST\"."
   },
   "klucz": "D",
   "rozw": {
    "lead": "Przycisk TEST wprowadza sztuczny prąd różnicowy; sprawny wyłącznik powinien natychmiast zadziałać.",
    "kroki": [],
    "bledne": {
     "A": "Zwarcie jest niebezpieczne i sprawdza zabezpieczenie nadprądowe, a nie różnicowe.",
     "B": "Przełączanie dźwigni tylko włącza i wyłącza, nie sprawdza zadziałania.",
     "C": "Pomiar napięcia i prądu nie weryfikuje zadziałania wyłącznika różnicowoprądowego."
    },
    "pulapka": "Zalecane jest testowanie przyciskiem TEST co miesiąc; dokładne parametry bada się miernikiem instalacji."
   }
  }
 ]
};
