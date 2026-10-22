/* Część pisemna – arkusz EE.15-SG-20.06 (czerwiec 2020). Dane: pytania CKE + opracowanie rozwiązań. */
(window.ELE04_BANK = window.ELE04_BANK || {})["ee15-2020-06"] = {
 "id": "ee15-2020-06",
 "kwalifikacja": "EE.15",
 "kod": "EE.15-SG-20.06",
 "sesja": "czerwiec 2020",
 "pytania": [
  {
   "n": 1,
   "tytul": "Zawory serwisowe jednostki zewnętrznej",
   "dzial": "Elementy i automatyka obiegu",
   "tresc": "Na rysunku przedstawiono zawory",
   "img": "img/ee15-2020-06/z01.png",
   "img_alt": "Dwa mosiężne zawory z kapturkami na przyłączach jednostki zewnętrznej klimatyzatora split, jeden nad drugim.",
   "odp": {
    "A": "bezpieczeństwa: gazowy i cieczowy.",
    "B": "serwisowe: gazowy i cieczowy.",
    "C": "termostatyczne rozprężne.",
    "D": "automatyczne rozprężne."
   },
   "klucz": "B",
   "rozw": {
    "lead": "Na rysunku widać dwa mosiężne zawory z kapturkami (nakrętkami zabezpieczającymi) na przyłączach jednostki zewnętrznej klimatyzatora typu split. Są to zawory serwisowe: cieczowy (cieńsza rura) i gazowy (grubsza rura), z króćcem serwisowym do podłączenia manometrów i pompy próżniowej oraz trzpieniem do otwierania i zamykania przepływu.",
    "kroki": [],
    "bledne": {
     "A": "Zawory bezpieczeństwa są sprężynowe, montowane na zbiornikach i skraplaczach, i nie mają kapturków z trzpieniem do odcinania przepływu.",
     "C": "Termostatyczny zawór rozprężny ma korpus z kapilarą czujnika i przyłączem wyrównawczym, a nie mosiężne kapturki na obudowie jednostki.",
     "D": "Automatyczny zawór rozprężny to element regulujący ciśnienie parowania, montowany w obiegu, a nie dostępny z zewnątrz zawór z trzpieniem."
    },
    "pulapka": "Zawory serwisowe odcinają jednostkę zewnętrzną od rurociągów; po zakończeniu pracy trzpienie i kapturki muszą być dokręcone, bo kapturek jest dodatkowym uszczelnieniem."
   }
  },
  {
   "n": 2,
   "tytul": "Agregat wody lodowej ze skraplaczem powietrznym",
   "dzial": "Elementy i automatyka obiegu",
   "tresc": "Na rysunku przedstawiono agregat wody lodowej",
   "img": "img/ee15-2020-06/z02.png",
   "img_alt": "Agregat wody lodowej z czterema wentylatorami osiowymi na górze, lamelowymi wymiennikami w układzie V i sprężarkami w dolnej części ramy.",
   "odp": {
    "A": "z parownikiem chłodzonym wodą.",
    "B": "ze skraplaczem chłodzonym wodą.",
    "C": "z parownikiem chłodzonym powietrzem.",
    "D": "ze skraplaczem chłodzonym powietrzem."
   },
   "klucz": "D",
   "rozw": {
    "lead": "Na rysunku widać agregat z wentylatorami osiowymi na górze i lamelowymi wymiennikami ustawionymi w kształcie litery V nad sprężarkami. Wymiennik ożebrowany przedmuchiwany powietrzem to <span class=\"term\" data-key=\"skraplacz\">skraplacz</span> chłodzony powietrzem; wodę lodową chłodzi osobny parownik (zwykle płytowy lub płaszczowo-rurowy) ukryty wewnątrz agregatu.",
    "kroki": [],
    "bledne": {
     "A": "Parownik agregatu wody lodowej schładza wodę czynnikiem chłodniczym; nie jest wymiennikiem „chłodzonym wodą” i nie ma wentylatorów.",
     "B": "Skraplacz chłodzony wodą to zwarty wymiennik płaszczowo-rurowy lub płytowy bez wentylatorów; wymaga wody z wieży lub studni.",
     "C": "Parownik agregatu wody lodowej schładza wodę, a nie jest chłodzony powietrzem; wentylatory na rysunku obsługują skraplacz."
    },
    "pulapka": "Wentylatory i duże ożebrowane powierzchnie to charakterystyczny znak skraplacza powietrznego; skraplacz wodny jest bez wentylatorów."
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
    "lead": "Moc skraplacza to strumień ciepła oddany wodzie chłodzącej. Z bilansu cieplnego po stronie wody (przepływ ustalony, bez zmiany fazy wody) wynika, że jest on równy iloczynowi strumienia masy, ciepła właściwego i różnicy temperatur.",
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
      "\\( \\dot Q_k = 1\\ \\tfrac{\\mathrm{kg}}{\\mathrm{s}} \\cdot 4{,}19\\ \\tfrac{\\mathrm{kJ}}{\\mathrm{kg\\cdot K}} \\cdot (35-25)\\ \\mathrm{K} \\)"
     ],
     [
      "Wynik",
      "\\( \\dot Q_k = 41{,}9\\ \\mathrm{kW} \\) (bo 1 kJ/s = 1 kW)"
     ]
    ],
    "bledne": {
     "B": "58,7 kW nie wynika z poprawnego podstawienia; odpowiadałby różnicy temperatur 14 K zamiast 10 K (4,19 · 14 = 58,7).",
     "C": "419 kW to błąd rzędu wielkości: pomnożenie przez 100 K zamiast 10 K albo przesunięcie przecinka.",
     "D": "587 kW to wynik o rząd wielkości za duży – różnica temperatur 140 K (4,19 · 140 = 587) zamiast 10 K."
    },
    "pulapka": "Różnica temperatur w kelwinach jest liczbowo równa różnicy w °C – nie przeliczaj temperatur na K przed odjęciem. Pamiętaj też, że w rzeczywistym obiegu moc skraplacza jest większa od mocy chłodniczej o pracę sprężarki."
   }
  },
  {
   "n": 4,
   "tytul": "Termostatyczny zawór rozprężny na schemacie",
   "dzial": "Elementy i automatyka obiegu",
   "tresc": "Element oznaczony na schemacie dołączanym do dokumentacji technicznej agregatu chłodniczego literą A to",
   "img": "img/ee15-2020-06/z04.png",
   "img_alt": "Schemat agregatu chłodniczego z dwiema sprężarkami, skraplaczem i parownikiem; litera A wskazuje zawór z siłownikiem na przewodzie cieczowym.",
   "odp": {
    "A": "zawór wody.",
    "B": "filtr osuszacz.",
    "C": "kurek trójdrogowy z przelotem.",
    "D": "termostatyczny zawór rozprężny."
   },
   "klucz": "D",
   "rozw": {
    "lead": "Litera A wskazuje symbol zaworu z siłownikiem i czujnikiem (cylinder z kreskowaniem połączony przewodem z wylotem parownika) – to znormalizowany symbol <span class=\"term\" data-key=\"tzr\">termostatycznego zaworu rozprężnego</span>. Zawór dławi ciecz przed parownikiem, a jego otwarcie reguluje czujnik temperatury na wylocie parownika.",
    "kroki": [],
    "bledne": {
     "A": "Zawór wody (regulator ciśnienia skraplania) leży na obwodzie wodnym skraplacza, a nie przed parownikiem na przewodzie cieczowym.",
     "B": "Filtr osuszacz ma inny symbol (romb z przekątną lub z kreskowaniem) i nie ma elementu sterującego z czujnikiem.",
     "C": "Kurek trójdrogowy ma w symbolu trzy przyłącza; element A ma dwa przyłącza i siłownik."
    },
    "pulapka": "Symbol zaworu rozprężnego rozpoznasz po elemencie sterującym z czujnikiem (kapilara do wylotu parownika) i przewodzie wyrównawczym."
   }
  },
  {
   "n": 5,
   "tytul": "Kosztorys montażu klimatyzatora split",
   "dzial": "Kosztorys",
   "tresc": "Na podstawie cennika oblicz łączny koszt usługi sprzedaży, montażu i uruchomienia agregatu chłodniczego typu split, jeżeli wykonano 8 m rurociągu łączącego jednostki, 2 m instalacji odprowadzania skroplin i 12 m instalacji elektrycznej. Uwzględnij 23% podatek VAT.",
   "img": "img/ee15-2020-06/z05.png",
   "img_alt": "Cennik usług: agregat chłodniczy 2100 zł/szt., montaż jednostki zewnętrznej i wewnętrznej po 90 zł, rurociągi 80 zł/m, skropliny 30 zł/m, instalacja elektryczna 40 zł/m, uruchomienie 100 zł.",
   "odp": {
    "A": "4378,80 zł",
    "B": "3560,00 zł",
    "C": "1795,80 zł",
    "D": "1460,00 zł"
   },
   "klucz": "A",
   "rozw": {
    "lead": "Kosztorys sumuje pozycje jednostkowe (szt.) i metrażowe (m.b. × ilość), a dopiero na końcu dolicza się VAT.",
    "kroki": [
     [
      "Dane",
      "Agregat 2100 zł; montaż jednostek 2 · 90 zł; rurociągi 8 m · 80 zł/m; skropliny 2 m · 30 zł/m; elektryka 12 m · 40 zł/m; uruchomienie 100 zł; VAT 23%"
     ],
     [
      "Szukane",
      "Koszt brutto \\( K_b \\)"
     ],
     [
      "Wzór",
      "\\[ K_b = K_n \\cdot (1+0{,}23) \\]"
     ],
     [
      "Podstawienie",
      "\\( K_n = 2100 + 90 + 90 + 8\\cdot 80 + 2\\cdot 30 + 12\\cdot 40 + 100 = 3560{,}00\\ \\mathrm{zł} \\), \\( K_b = 3560 \\cdot 1{,}23 \\)"
     ],
     [
      "Wynik",
      "\\( K_b = 4378{,}80\\ \\mathrm{zł} \\)"
     ]
    ],
    "bledne": {
     "B": "3560,00 zł to kwota netto – pominięto VAT (najczęstszy błąd).",
     "C": "1795,80 zł to koszt samej robocizny z VAT (1460 · 1,23), bez ceny agregatu.",
     "D": "1460,00 zł to robocizna netto, bez agregatu i bez VAT."
    },
    "pulapka": "Czytaj polecenie do końca – VAT bywa na końcu zdania. Pozycje „m.b.” mnóż przez podany metraż, pozycje „szt.” licz raz."
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
    "lead": "<span class=\"term\" data-key=\"lut\">Lutowanie twarde</span> palnikiem zużywa tlen i wytwarza spaliny oraz opary topnika; resztki czynnika w płomieniu rozkładają się dodatkowo do toksycznych związków (m.in. fluorowodoru). Dlatego stanowisko musi być wentylowane.",
    "kroki": [],
    "bledne": {
     "A": "Woda ciepła nie ma związku z bezpieczeństwem lutowania.",
     "B": "Woda zimna bywa pomocna (np. mokra szmata przy chłodzeniu zaworów), ale nie jest warunkiem koniecznym – wentylacja jest.",
     "D": "„Wentylacja maski tlenowej” nie ma sensu technicznego – to dystraktor językowy."
    },
    "pulapka": "Skojarzenie „palnik – tlen – maska tlenowa” jest fałszywe. Zestaw BHP lutowania: okulary, rękawice, gaśnica, wentylacja, usunięcie materiałów palnych, osłona azotem wewnątrz rury."
   }
  },
  {
   "n": 7,
   "tytul": "Narzędzie do wykonania kielicha w rurze",
   "dzial": "Montaż i rurociągi",
   "tresc": "Którego z przedstawionych narzędzi używa się do wykonania kielicha w rurze miedzianej?",
   "img": "img/ee15-2020-06/z07.png",
   "img_alt": "Cztery narzędzia: A – elektryczna kielichownica do rur miedzianych, B – obcinak rolkowy do rur, C – szczypce Morse'a, D – wkrętarka akumulatorowa.",
   "odp": {
    "A": "Rysunek A",
    "B": "Rysunek B",
    "C": "Rysunek C",
    "D": "Rysunek D"
   },
   "klucz": "A",
   "rozw": {
    "lead": "Kielich (połączenie kielichowe, „flara”) wykonuje się kielichownicą – tu elektryczną, z kompletem szczęk i trzpieni na różne średnice rur. Kielich powstaje na końcu rury i jest dociskany nakrętką do króćca.",
    "kroki": [],
    "bledne": {
     "B": "Obcinak rolkowy tylko tnie rurę na wymiar; kielicha nie wykonuje.",
     "C": "Szczypce typu Morse'a służą do chwytania i blokowania elementów, nie do kształtowania rury.",
     "D": "Wkrętarka akumulatorowa sama nie ukształtuje kielicha; potrzebny jest do tego dedykowany przyrząd."
    },
    "pulapka": "Kolejność na rurze: obcięcie obcinakiem, usunięcie zadziorów, założenie nakrętki, dopiero potem kielichowanie."
   }
  },
  {
   "n": 8,
   "tytul": "Pułapki olejowe na rurociągu",
   "dzial": "Montaż i rurociągi",
   "tresc": "Podstawowym celem stosowania tzw. „pułapek olejowych” jest zapewnienie",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "prawidłowego powrotu oleju do sprężarki.",
    "B": "prawidłowego powrotu oleju do skraplacza.",
    "C": "zatrzymanie oleju i odprowadzenie go do parownika.",
    "D": "zatrzymania oleju i odprowadzenie go do kanalizacji."
   },
   "klucz": "A",
   "rozw": {
    "lead": "Olej opuszcza sprężarkę razem z parą czynnika i musi do niej wrócić. Na pionowych odcinkach wznośnych wykonuje się syfony („pułapki olejowe”): w syfonie zbiera się olej, zmniejsza się przekrój przepływu, rośnie prędkość pary i porywa ona olej w górę do sprężarki.",
    "kroki": [],
    "bledne": {
     "B": "Olej w skraplaczu pogarsza wymianę ciepła – to skutek niepożądany, a nie cel pułapki.",
     "C": "Olej w parowniku też pogarsza wymianę ciepła, a „zatrzymanie oleju” to zadanie <span class=\"term\" data-key=\"odolejacz\">odolejacza</span>, nie pułapki.",
     "D": "Odprowadzanie oleju do kanalizacji jest niezgodne z przepisami o ochronie środowiska."
    },
    "pulapka": "Nie myl pułapki olejowej (syfon na rurze, pomaga olejowi wrócić) z odolejaczem (separator na tłoczeniu zawracający olej do karteru)."
   }
  },
  {
   "n": 9,
   "tytul": "Łączenie rur miedzianych systemem Lokring",
   "dzial": "Montaż i rurociągi",
   "tresc": "Na ilustracji przedstawiono łączenie rur miedzianych z wykorzystaniem",
   "img": "img/ee15-2020-06/z09.png",
   "img_alt": "Szczypce do zaciskania obejmujące mosiężną złączkę na rurze miedzianej przy płycie perforowanej.",
   "odp": {
    "A": "lutowania elektrycznego.",
    "B": "lutowania twardego.",
    "C": "zgrzewania złączy.",
    "D": "systemu Lokring."
   },
   "klucz": "D",
   "rozw": {
    "lead": "Na zdjęciu widać specjalne szczypce (zaciskarkę) obejmujące mosiężną złączkę na rurach miedzianych. To połączenie zaciskowe bez lutowania, w którym złączkę dociska się na rurze (system Lokring) – przydatne tam, gdzie nie wolno użyć otwartego płomienia.",
    "kroki": [],
    "bledne": {
     "A": "Lutowanie elektryczne wymaga elektrod lub szczęk grzewczych zasilanych prądem, a nie szczypiec do zaciskania złączki.",
     "B": "Lutowanie twarde wykonuje się palnikiem z lutem i topnikiem, bez zaciskania.",
     "C": "Zgrzewanie złączy dotyczy rur z tworzyw sztucznych, nie miedzi."
    },
    "pulapka": "Połączenia zaciskowe pozwalają uniknąć ognia, ale wymagają właściwego narzędzia i kontroli kompletności zaciśnięcia."
   }
  },
  {
   "n": 10,
   "tytul": "Materiał termoizolacyjny – właściwości",
   "dzial": "Materiały i rysunek techniczny",
   "tresc": "Na podstawie właściwości materiałów zamieszczonych w tabelach określ, który z nich najlepiej nadaje się do zastosowań termoizolacyjnych.",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "• palny<br>• o wysokim współczynniku przewodzenia ciepła<br>• o niskiej zdolności pochłaniania wilgoci i dyfuzji pary wodnej<br>• odporny na oddziaływanie czynników biologicznych",
    "B": "• niepalny<br>• o niskim współczynniku przewodzenia ciepła<br>• o dużej zdolności pochłaniania wilgoci i dyfuzji pary wodnej<br>• odporny na oddziaływanie czynników biologicznych",
    "C": "• palny<br>• o wysokim współczynniku przewodzenia ciepła<br>• o dużej zdolności pochłaniania wilgoci i dyfuzji pary wodnej<br>• nieodporny na oddziaływanie czynników biologicznych",
    "D": "• niepalny<br>• o niskim współczynniku przewodzenia ciepła<br>• o niskiej zdolności pochłaniania wilgoci i dyfuzji pary wodnej<br>• odporny na oddziaływanie czynników biologicznych"
   },
   "klucz": "D",
   "rozw": {
    "lead": "Dobra izolacja cieplna jest niepalna, ma niski współczynnik przewodzenia ciepła λ, niską nasiąkliwość i dyfuzję pary wodnej oraz jest odporna biologicznie. Tylko zestaw D spełnia wszystkie te cechy.",
    "kroki": [],
    "bledne": {
     "A": "Materiał palny o wysokim λ źle izoluje i jest niebezpieczny pożarowo.",
     "B": "Duża zdolność pochłaniania wilgoci to wada – zawilgocona izolacja ma wielokrotnie większe λ i traci właściwości.",
     "C": "Palny, o wysokim λ, chłonący wilgoć i nieodporny biologicznie – komplet cech niekorzystnych."
    },
    "pulapka": "W instalacjach chłodniczych (zimne rury) szczególnie liczy się wysoki opór dyfuzji pary wodnej – inaczej izolacja zawilgoci się."
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
    "lead": "Do próby ciśnieniowej stosuje się suchy <span class=\"term\" data-key=\"ofn\">azot beztlenowy (OFN)</span> z butli przez reduktor. Jest obojętny chemicznie, niepalny, nie wnosi wilgoci ani nie reaguje z olejem.",
    "kroki": [],
    "bledne": {
     "B": "Tlen pod ciśnieniem w kontakcie z olejem sprężarkowym grozi samozapłonem i wybuchem – bezwzględny zakaz.",
     "C": "Fluor jest silnie toksycznym i agresywnym gazem; nie ma zastosowania serwisowego.",
     "D": "Chlor jest toksyczny i korozyjny; niszczyłby miedź i olej."
    },
    "pulapka": "Sprężone powietrze również jest błędnym wyborem (tlen i wilgoć). Czynnika chłodniczego nie wolno używać jako gazu próbnego."
   }
  },
  {
   "n": 12,
   "tytul": "Kontrola ilości czynnika przy napełnianiu",
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
    "lead": "Ilość czynnika określa się masowo: butlę ustawia się na wadze elektronicznej, taruje i napełnia do masy podanej na tabliczce znamionowej. Manometr pokazuje ciśnienie, które zależy od temperatury, więc nie określa masy napełnienia.",
    "kroki": [],
    "bledne": {
     "B": "Manometr różnicowy mierzy różnicę ciśnień (np. na filtrze), nie ilość czynnika.",
     "C": "Tachometr mierzy prędkość obrotową, np. wentylatora czy silnika.",
     "D": "Manometr membranowy mierzy ciśnienie, a ciśnienie nie jest miarą masy czynnika w układzie."
    },
    "pulapka": "Przy mieszaninach (np. R407C) napełnia się fazą ciekłą, a ilość kontroluje wagą."
   }
  },
  {
   "n": 13,
   "tytul": "Odprowadzenie skroplin z jednostki wewnętrznej",
   "dzial": "Klimatyzacja i wentylacja",
   "tresc": "Na którym rysunku przedstawiono prawidłowe wykonanie odprowadzenia skroplin z jednostki wewnętrznej klimatyzatora?",
   "img": "img/ee15-2020-06/z13.png",
   "img_alt": "Cztery warianty odprowadzenia skroplin z jednostki wewnętrznej przez ścianę: A – do odpływu na posadzce, B – do naczynia z wodą, C – swobodny wylot nad gruntem, D – rura wznosząca się ku górze.",
   "odp": {
    "A": "Rysunek A",
    "B": "Rysunek B",
    "C": "Rysunek C",
    "D": "Rysunek D"
   },
   "klucz": "C",
   "rozw": {
    "lead": "Rura skroplin powinna mieć stały spadek od jednostki na zewnątrz i swobodny wylot nad gruntem, bez zanurzenia i bez zamknięcia wodnego. Na rysunku C rura wychodzi przez ścianę ze spadkiem w dół i kończy się swobodnym wylotem nad podłożem.",
    "kroki": [],
    "bledne": {
     "A": "Według rysunku rura jest wprowadzona wprost do odpływu na posadzce, bez swobodnego wylotu – brak przerwy powietrznej, więc możliwy jest powrót zapachów i zanieczyszczeń.",
     "B": "Wylot zanurzony w naczyniu z wodą tworzy zamknięcie wodne, które utrudnia odpływ i może zasysać wodę do rury.",
     "D": "Po wyjściu ze ściany rura wznosi się do góry – brak spadku, skropliny nie spłyną grawitacyjnie i będą zalegać."
    },
    "pulapka": "Odprowadzenie skroplin wymaga ciągłego spadku i braku zagłębień, w których woda się zbiera."
   }
  },
  {
   "n": 14,
   "tytul": "Przetwornica częstotliwości a prąd rozruchowy",
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
    "lead": "Przetwornica rozpędza silnik łagodnie, zwiększając częstotliwość i napięcie od zera, więc rozruch odbywa się z niewielkim prądem (bez udaru kilkukrotnie większego od znamionowego, jak przy rozruchu bezpośrednim). Dodatkowo umożliwia płynną regulację wydajności.",
    "kroki": [],
    "bledne": {
     "A": "Napięcie na silniku zmienia się wraz z częstotliwością (U/f), ale jego obniżenie nie jest celem ani istotą zastosowania przetwornicy.",
     "B": "Przetwornica nie podnosi napięcia ponad wartość znamionową silnika.",
     "C": "Przeciwnie – przetwornica ogranicza prąd rozruchowy."
    },
    "pulapka": "Korzyści: łagodny rozruch, regulacja wydajności, mniejsze zużycie energii przy obciążeniach częściowych."
   }
  },
  {
   "n": 15,
   "tytul": "Miejsce pomiaru ciśnienia parowania",
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
    "lead": "Ciśnienie parowania panuje w parowniku i na przewodzie ssawnym, czyli po stronie niskiego ciśnienia (od zaworu rozprężnego do zaworu ssawnego sprężarki). Tam podłącza się manometr niskiego ciśnienia.",
    "kroki": [],
    "bledne": {
     "A": "Między skraplaczem a zaworem rozprężnym jest przewód cieczowy po stronie wysokiego ciśnienia (ciśnienie skraplania).",
     "B": "Między sprężarką a skraplaczem jest strona tłoczna (wysokie ciśnienie).",
     "C": "Strona wysokiego ciśnienia to ciśnienie skraplania, nie parowania."
    },
    "pulapka": "Ciśnienie parowania odczytujesz na manometrze niskiego ciśnienia, a z tabeli czynnika wyznaczasz temperaturę parowania."
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
    "lead": "Najpierw wyłącza się urządzenie normalnie (pilotem), by zatrzymać pracę sprężarki i wentylatora w kontrolowany sposób, potem odłącza zasilanie, a dopiero gdy urządzenie jest odłączone od prądu, otwiera pokrywę i wyjmuje filtr.",
    "kroki": [],
    "bledne": {
     "A": "Odłączenie zasilania przed wyłączeniem pilotem odwraca kolejność – urządzenie należy wyłączyć w trybie normalnym.",
     "C": "Pokrywę odchyla się dopiero po odłączeniu zasilania – inaczej ryzyko kontaktu z ruchomymi lub będącymi pod napięciem elementami.",
     "D": "Otwieranie pokrywy przed wyłączeniem urządzenia jest niebezpieczne."
    },
    "pulapka": "Zasada: wyłącz, odłącz od zasilania, dopiero potem otwieraj i demontuj."
   }
  },
  {
   "n": 17,
   "tytul": "Wyciek czynnika R744 (CO2)",
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
    "lead": "R744 to dwutlenek węgla. Jest niepalny, cięższy od powietrza i w dużej ilości wypiera tlen z pomieszczenia, co grozi uduszeniem – dlatego wymagane są detektory CO<sub>2</sub> i wentylacja.",
    "kroki": [],
    "bledne": {
     "A": "CO<sub>2</sub> jest niepalny (klasa bezpieczeństwa A1) i nie powoduje zapłonu.",
     "B": "Rozprężający się gaz lokalnie schładza otoczenie, a nie ogrzewa.",
     "D": "Amoniak to R717, inny czynnik; wyciek R744 nie zwiększa jego stężenia."
    },
    "pulapka": "Numer po „R7” oznacza czynnik nieorganiczny: R717 – amoniak, R744 – dwutlenek węgla."
   }
  },
  {
   "n": 18,
   "tytul": "Liczba elementów instalacji VRF z obmiaru",
   "dzial": "Materiały i rysunek techniczny",
   "tresc": "Na podstawie schematu instalacji wykonanego podczas obmiaru określ, w której kolumnie tabeli podano właściwą liczbę wybranych elementów użytych podczas montażu instalacji klimatyzacyjnej. Tabela (liczba w szt.) w kolumnach A–D: jednostka zewnętrzna – A: 2, B: 1, C: 1, D: 2; jednostka wewnętrzna – A: 4, B: 5, C: 4, D: 5; trójnik 19,05/15,88x2 – A: 1, B: –, C: 2, D: –; trójnik 28,58/15,88x2 – A: –, B: 2, C: –, D: 1.",
   "img": "img/ee15-2020-06/z18.png",
   "img_alt": "Schemat instalacji klimatyzacji wielosplitowej: jedna jednostka zewnętrzna, główny przewód gazowy 28,58 i cieczowy 12,7, trójniki rozgałęziające, cztery kasetonowe jednostki wewnętrzne i pilot przewodowy.",
   "odp": {
    "A": "Kolumna A",
    "B": "Kolumna B",
    "C": "Kolumna C",
    "D": "Kolumna D"
   },
   "klucz": "C",
   "rozw": {
    "lead": "Na schemacie jest jedna jednostka zewnętrzna i cztery kasetonowe jednostki wewnętrzne. Trójniki 19,05/15,88x2 to dwa dolne rozgałęzienia, z których każde zasila dwie jednostki wewnętrzne (przewody 15,88 mm), czyli razem 2 sztuki. Trójnika 28,58/15,88x2 na schemacie nie ma (górny rozdziela na przewody 19,05). Zestaw 1 / 4 / 2 / – daje kolumna C.",
    "kroki": [],
    "bledne": {
     "A": "Dwie jednostki zewnętrzne i tylko jeden trójnik 19,05/15,88x2 nie zgadzają się ze schematem.",
     "B": "Pięć jednostek wewnętrznych i dwa trójniki 28,58/15,88x2 nie występują na schemacie.",
     "D": "Dwie jednostki zewnętrzne, pięć wewnętrznych i trójnik 28,58/15,88x2 – żadna z liczb nie zgadza się ze schematem."
    },
    "pulapka": "Przy zadaniach z obmiarem policz elementy ze schematu i porównuj średnice przewodów przy każdym rozgałęzieniu."
   }
  },
  {
   "n": 19,
   "tytul": "Częstotliwość przeglądów a czynnik chłodniczy",
   "dzial": "Czynniki i F-gazy",
   "tresc": "Ustawa o substancjach zubożających warstwę ozonową oraz o niektórych fluorowanych gazach cieplarnianych (tzw. ustawa F-gazowa) określa częstotliwość przeglądów agregatu chłodniczego z kontrolą szczelności. Ilość obowiązkowych przeglądów zależy od",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "sposobu realizacji chłodzenia skraplacza w układzie chłodniczym.",
    "B": "rodzaju i ilości zastosowanego w układzie czynnika chłodniczego.",
    "C": "sposobu realizacji rozprowadzenia czynnika chłodniczego w układzie.",
    "D": "rodzaju i ilości zastosowanego oleju sprężarkowego w układzie chłodniczym."
   },
   "klucz": "B",
   "rozw": {
    "lead": "Częstotliwość kontroli szczelności zależy od ilości <span class=\"term\" data-key=\"fgaz\">F-gazu</span> wyrażonej w ekwiwalencie CO<sub>2</sub>, czyli od rodzaju czynnika (jego GWP) i napełnienia (progi 5, 50 i 500 t CO<sub>2</sub>e).",
    "kroki": [],
    "bledne": {
     "A": "Sposób chłodzenia skraplacza nie wpływa na wymaganą częstotliwość kontroli.",
     "C": "Sposób rozprowadzenia czynnika (układ bezpośredni lub pośredni) nie decyduje o liczbie przeglądów.",
     "D": "Rodzaj i ilość oleju nie są kryterium przepisów F-gazowych."
    },
    "pulapka": "Arkusz powstał za czasów rozporządzenia (UE) 517/2014; obecnie obowiązuje rozporządzenie (UE) 2024/573, które zmieniło m.in. progi i obowiązki, ale zasada zależności od ilości i GWP czynnika pozostaje."
   }
  },
  {
   "n": 20,
   "tytul": "Podłączenie zasilania kontrolera chłodniczego",
   "dzial": "Elektrotechnika",
   "tresc": "Do których zacisków kontrolera chłodniczego należy zgodnie z rysunkiem instruktażowym podłączyć przewody zasilania elektrycznego?",
   "img": "img/ee15-2020-06/z20.png",
   "img_alt": "Schemat podłączenia kontrolera chłodniczego z zaciskami 1–8, wejściami czujników T1 i T2, wyjściami przekaźnikowymi i zasilaniem 230 V AC (N do zacisku 1, L do zacisku 5).",
   "odp": {
    "A": "Ochronny do zacisku 1, fazowy prądu przemiennego o napięciu 230 V do zacisku 5.",
    "B": "Neutralny do zacisku 1, fazowy prądu przemiennego o napięciu 230 V do zacisku 5.",
    "C": "Neutralny do zacisku 1, dodatni prądu stałego o napięciu 230 V do zacisku 5.",
    "D": "Ujemny do zacisku 1, dodatni prądu stałego o napięciu 230 V do zacisku 5."
   },
   "klucz": "B",
   "rozw": {
    "lead": "Na rysunku zasilanie oznaczono „230 V AC”: przewód N (neutralny) idzie do zacisku 1, a przewód L (fazowy) do zacisku 5. Zasilanie jest więc przemienne, nie stałe.",
    "kroki": [],
    "bledne": {
     "A": "Przewód ochronny PE nie jest podłączany do zacisku 1 – tam wchodzi przewód neutralny N.",
     "C": "Napięcie 230 V AC to prąd przemienny, więc nie ma przewodu „dodatniego prądu stałego”.",
     "D": "Rysunek podaje zasilanie przemienne, więc określenia „ujemny” i „dodatni” prądu stałego są błędne."
    },
    "pulapka": "Przy schematach zasilania sprawdź opis przy zaciskach: N i L oraz napięcie i rodzaj prądu (AC lub DC)."
   }
  },
  {
   "n": 21,
   "tytul": "Ciśnienie próby szczelności i spadek ciśnienia",
   "dzial": "Obliczenia",
   "tresc": "Fragment instrukcji obsługi agregatu chłodniczego: <i>Podczas próby szczelności wymagane jest napełnienie instalacji azotem i sprawdzenie utrzymywania się stałego ciśnienia. Ciśnienie podczas próby szczelności powinno wynosić 110% maksymalnego ciśnienia pracy i po 24 godzinach spadek tego ciśnienia nie powinien być większy niż 1 % w tej samej temperaturze.</i><br>Maksymalne ciśnienie pracy dla badanej instalacji wynosi 24 bar. Na podstawie podanej instrukcji wskaż prawidłowe wartości ciśnienia <i>p</i> w instalacji podczas <span class=\"term\" data-key=\"proba\">próby szczelności</span> oraz dopuszczalnego ciśnienia <i>p</i><sub>24h</sub> dla 1% spadku ciśnienia po 1 dobie.",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "<i>p</i> = 24,00 bar, <i>p</i><sub>24h</sub> &lt; 26,40 bar",
    "B": "<i>p</i> = 24,00 bar, <i>p</i><sub>24h</sub> &lt; 0,26 bar",
    "C": "<i>p</i> = 26,40 bar, <i>p</i><sub>24h</sub> &lt; 0,26 bar",
    "D": "<i>p</i> = 26,40 bar, <i>p</i><sub>24h</sub> &lt; 2,61 bar"
   },
   "klucz": "C",
   "rozw": {
    "lead": "Ciśnienie próby to 110% ciśnienia maksymalnego, czyli 26,40 bar. Dopuszczalny spadek to 1% tej wartości, czyli 0,264 bar, zaokrąglone do 0,26 bar.",
    "kroki": [
     [
      "Dane",
      "\\( p_{max}=24\\ \\mathrm{bar},\\ p = 110\\%\\,p_{max},\\ \\Delta p_{24h}\\le 1\\% \\)"
     ],
     [
      "Szukane",
      "\\( p \\) oraz dopuszczalny spadek \\( \\Delta p_{24h} \\)"
     ],
     [
      "Wzór",
      "\\[ p = 1{,}1\\cdot p_{max},\\quad \\Delta p_{24h} = 0{,}01\\cdot p \\]"
     ],
     [
      "Podstawienie",
      "\\( p = 1{,}1\\cdot 24 = 26{,}40\\ \\mathrm{bar},\\ \\Delta p_{24h} = 0{,}01\\cdot 26{,}40 \\)"
     ],
     [
      "Wynik",
      "\\( p = 26{,}40\\ \\mathrm{bar},\\ \\Delta p_{24h}\\approx 0{,}26\\ \\mathrm{bar} \\)"
     ]
    ],
    "bledne": {
     "A": "p = 24,00 bar to ciśnienie pracy bez dodatku 10%, a p<sub>24h</sub> &lt; 26,40 bar nie opisuje spadku 1% (to całe ciśnienie próby).",
     "B": "Spadek (0,26 bar) podano poprawnie, ale ciśnienie próby bez dodatku 10% (24,00 zamiast 26,40 bar).",
     "D": "Ciśnienie próby poprawne, ale 2,61 bar to około 10%, a nie 1% ciśnienia próby."
    },
    "pulapka": "W kluczu CKE zapis „p<sub>24h</sub> &lt; 0,26 bar” oznacza dopuszczalny spadek ciśnienia (ciśnienie po 24 h wynosiłoby ok. 26,14 bar). Procenty liczysz od ciśnienia próby, nie od ciśnienia pracy."
   }
  },
  {
   "n": 22,
   "tytul": "Wziernik z indykatorem wilgoci",
   "dzial": "Pomiary i diagnostyka",
   "tresc": "Element przedstawiony na rysunku służy do",
   "img": "img/ee15-2020-06/z22.png",
   "img_alt": "Wziernik z mosiężnym korpusem i szkiełkiem z kolorowym pierścieniem indykatora wilgoci, z końcówkami z rury miedzianej do wlutowania.",
   "odp": {
    "A": "pomiaru temperatury czynnika w instalacji chłodniczej.",
    "B": "oceny napowietrzenia czynnika w instalacji chłodniczej.",
    "C": "pomiaru ciśnienia po stronie tłocznej instalacji chłodniczej.",
    "D": "oceny stanu zawilgocenia czynnika w instalacji chłodniczej."
   },
   "klucz": "D",
   "rozw": {
    "lead": "Na rysunku widać <span class=\"term\" data-key=\"wziernik\">wziernik</span> z wlutowanymi końcówkami z rury miedzianej. Szkiełko wziernika pozwala ocenić przepływ cieczy (pęcherzyki), a kolorowy pierścień z indykatorem zmienia barwę w zależności od zawartości wilgoci w czynniku.",
    "kroki": [],
    "bledne": {
     "A": "Temperaturę mierzy się czujnikiem lub termometrem, a nie wziernikiem.",
     "B": "Wziernik pozwala zobaczyć pęcherzyki pary w cieczy, ale „napowietrzenie” nie jest jego zadaniem; wskaźnik na pierścieniu służy do oceny wilgoci.",
     "C": "Ciśnienie mierzy manometr podłączony do króćca serwisowego, nie wziernik."
    },
    "pulapka": "Pęcherzyki w wzierniku na przewodzie cieczowym sygnalizują niedobór czynnika lub spadek dochłodzenia, a kolor indykatora – wilgoć w układzie."
   }
  },
  {
   "n": 23,
   "tytul": "Ciśnienie i temperatura końca sprężania",
   "dzial": "Obieg i termodynamika",
   "tresc": "Ile wynoszą ciśnienie i temperatura zakończenia sprężania na przedstawionym obiegu agregatu chłodniczego?",
   "img": "img/ee15-2020-06/z23.png",
   "img_alt": "Wykres log p–h czynnika R410A (ciśnienie w MPa, entalpia w kJ/kg) z narysowanym obiegiem chłodniczym w kształcie równoległoboku między 0,2 a 1,0 MPa.",
   "odp": {
    "A": "0,2 MPa, −37 °C",
    "B": "0,2 MPa, −30 °C",
    "C": "1,0 MPa, +30 °C",
    "D": "1,0 MPa, +8 °C"
   },
   "klucz": "C",
   "rozw": {
    "lead": "Na wykresie <span class=\"term\" data-key=\"logph\">log p–h</span> sprężanie przebiega od ciśnienia parowania (0,2 MPa) do ciśnienia skraplania (1,0 MPa). Punkt końca sprężania to górny prawy narożnik obiegu, czyli 1,0 MPa, a jego temperaturę odczytuje się z izotermy w obszarze pary przegrzanej – według klucza CKE +30 °C.",
    "kroki": [],
    "bledne": {
     "A": "0,2 MPa to ciśnienie parowania, czyli początek sprężania; temperatura nasycenia R410A przy tym ciśnieniu wynosi około −37 °C.",
     "B": "Ciśnienie 0,2 MPa odpowiada początkowi sprężania, a nie jego końcowi.",
     "D": "+8 °C to w przybliżeniu temperatura nasycenia przy 1,0 MPa (skraplania), a nie temperatura pary na końcu sprężania."
    },
    "pulapka": "Na wykresie rozpoznaj punkty obiegu: sprężanie biegnie w górę i w prawo, skraplanie poziomo, rozprężanie pionowo w dół, parowanie poziomo. Temperatura tłoczenia jest wyższa od temperatury skraplania (para przegrzana); rzeczywista wartość zależy od odczytu z wykresu – trzymaj się klucza CKE."
   }
  },
  {
   "n": 24,
   "tytul": "Rozpoznanie układu chłodniczego na rysunku",
   "dzial": "Obieg i termodynamika",
   "tresc": "Na rysunku przedstawiono",
   "img": "img/ee15-2020-06/z24.png",
   "img_alt": "Schemat instalacji chłodniczej: sprężarka, skraplacz z wentylatorem, odbiornik cieczy, zawór rozprężny i parownik w komorze chłodniczej (−15 °C), z panelem sterującym i komunikacją.",
   "odp": {
    "A": "rewersyjną pompę ciepła.",
    "B": "sprężarkową pompę ciepła.",
    "C": "absorpcyjny układ chłodniczy.",
    "D": "sprężarkowy układ chłodniczy."
   },
   "klucz": "D",
   "rozw": {
    "lead": "Na rysunku widać sprężarkę, skraplacz z wentylatorem, zbiornik cieczy, zawór rozprężny i parownik w komorze o temperaturze −15 °C, czyli klasyczny sprężarkowy układ chłodniczy, który odbiera ciepło z komory i oddaje je na zewnątrz. Panel i sygnalizacja SMS/e-mail to tylko system monitoringu.",
    "kroki": [],
    "bledne": {
     "A": "Pompa rewersyjna ma zawór czterodrożny zmieniający kierunek obiegu (chłodzenie/grzanie); na rysunku go nie ma.",
     "B": "Pompa ciepła służy do ogrzewania; tu celem jest chłodzenie komory do −15 °C.",
     "C": "Układ absorpcyjny ma generator, absorber i roztwór, bez sprężarki mechanicznej."
    },
    "pulapka": "Elementy układu sprężarkowego: sprężarka, skraplacz, element rozprężny, parownik."
   }
  },
  {
   "n": 25,
   "tytul": "Obowiązek rejestracji urządzeń z F-gazami",
   "dzial": "BHP i przepisy",
   "tresc": "W przypadku instalacji chłodniczych i klimatyzacyjnych oraz pomp ciepła, które zawierają co najmniej 3 kg substancji kontrolowanej lub co najmniej 5 ton ekwiwalentu CO<sub>2</sub> fluorowanych gazów cieplarnianych, wymagane jest",
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
    "lead": "Operator urządzeń z substancjami kontrolowanymi lub <span class=\"term\" data-key=\"fgaz\">F-gazami</span> powyżej progów (3 kg substancji kontrolowanej lub 5 t <span class=\"term\" data-key=\"co2eq\">ekwiwalentu CO<sub>2</sub></span>) prowadzi kartę urządzenia (dokumentację) i jest wpisany do Centralnego Rejestru Operatorów (CRO).",
    "kroki": [],
    "bledne": {
     "A": "Krajowe Forum Chłodnictwa to organizacja branżowa, nie rejestr urzędowy.",
     "C": "Krajowy Rejestr Sądowy dotyczy podmiotów gospodarczych, nie rejestracji urządzeń z czynnikami.",
     "D": "Centralny Rejestr Ubezpieczonych nie istnieje w tym kontekście – to dystraktor."
    },
    "pulapka": "Przepisy zmieniły się: rozporządzenie (UE) 2024/573 oraz nowe przepisy krajowe zmieniły progi i szczegóły obowiązków, więc odpowiedź opiera się na stanie prawnym z 2020 r."
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
    "lead": "Zamrażanie immersyjne polega na zanurzeniu produktu (lub spryskaniu go) w cieczy chłodzącej o niskiej temperaturze, np. w solance lub roztworze glikolu. Duży współczynnik przejmowania ciepła cieczy powoduje szybkie schłodzenie powierzchni.",
    "kroki": [],
    "bledne": {
     "B": "Ciecz o dużym współczynniku przejmowania ciepła chłodzi szybko, nie powoli.",
     "C": "Kontakt z chłodnym powietrzem to zamrażanie powietrzne (komorowe, tunelowe), nie immersyjne.",
     "D": "Powolne chłodzenie powietrzem to zamrażanie w komorze – inna metoda."
    },
    "pulapka": "Immersja = zanurzenie w cieczy; im większy współczynnik przejmowania ciepła, tym szybsze zamrażanie."
   }
  },
  {
   "n": 27,
   "tytul": "Uszkodzenie wału korbowego sprężarki",
   "dzial": "Serwis, napełnianie, szczelność",
   "tresc": "Do uszkodzenia wału korbowego sprężarki może doprowadzić",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "tłoczenie przez sprężarkę powietrza.",
    "B": "zassanie ciekłego czynnika przez sprężarkę.",
    "C": "zassanie gazowego czynnika przez sprężarkę.",
    "D": "tłoczenie przez sprężarkę czynnika gazowego."
   },
   "klucz": "B",
   "rozw": {
    "lead": "Ciecz jest praktycznie nieściśliwa. Gdy sprężarka tłokowa zasysa ciekły czynnik („mokry bieg”), powstaje uderzenie hydrauliczne, które może uszkodzić zawory, korbowody i wał korbowy.",
    "kroki": [],
    "bledne": {
     "A": "Sprężanie powietrza nie powoduje uderzenia hydraulicznego; to niewłaściwy gaz, ale nie przyczyna złamania wału.",
     "C": "Zassanie pary jest normalną pracą sprężarki.",
     "D": "Tłoczenie sprężonego gazu to normalna praca sprężarki."
    },
    "pulapka": "Zabezpieczeniem jest odpowiednie przegrzanie na ssaniu, odsysacz cieczy i podgrzewacz karteru."
   }
  },
  {
   "n": 28,
   "tytul": "Kosztorys naprawy lodówki",
   "dzial": "Kosztorys",
   "tresc": "Na podstawie podanego cennika oblicz całkowity koszt ekspresowej naprawy (z wymianą sprężarki) lodówki wolnostojącej, jeżeli odległość do miejsca wykonania usługi wynosiła 3 km, ilość czynnika zużyta podczas napełniania lodówki jest równa 0,15 kg, a po wykonaniu naprawy dokonano gruntownego czyszczenia lodówki. Uwzględnij 23% podatek VAT.",
   "img": "img/ee15-2020-06/z28.png",
   "img_alt": "Cennik napraw lodówek: naprawa zwykła 60 zł, ekspresowa 90 zł, dojazd 2 zł/km, lodówka w zabudowie 50 zł, wolnostojąca 0 zł, czyszczenie 15 zł, sprężarka 220 zł, czynnik 120 zł/kg, filtr odwadniacz 60 zł.",
   "odp": {
    "A": "503,07 zł",
    "B": "571,00 zł",
    "C": "702,33 zł",
    "D": "712,17 zł"
   },
   "klucz": "A",
   "rozw": {
    "lead": "Do sumy netto wliczamy: naprawę ekspresową, dojazd, lodówkę wolnostojącą (0 zł), czyszczenie oraz zużyte materiały: sprężarkę, czynnik i filtr odwadniacz (przy wymianie sprężarki zawsze wymienia się filtr). Dopiero całość mnożymy przez 1,23.",
    "kroki": [
     [
      "Dane",
      "Naprawa ekspresowa 90 zł; dojazd 3 km · 2 zł/km; lodówka wolnostojąca 0 zł; czyszczenie 15 zł; sprężarka 220 zł; czynnik 0,15 kg · 120 zł/kg; filtr odwadniacz 60 zł; VAT 23%"
     ],
     [
      "Szukane",
      "Koszt brutto \\( K_b \\)"
     ],
     [
      "Wzór",
      "\\[ K_b = K_n\\cdot 1{,}23 \\]"
     ],
     [
      "Podstawienie",
      "\\( K_n = 90 + 3\\cdot 2 + 0 + 15 + 220 + 0{,}15\\cdot 120 + 60 = 409{,}00\\ \\mathrm{zł} \\), \\( K_b = 409\\cdot 1{,}23 \\)"
     ],
     [
      "Wynik",
      "\\( K_b = 503{,}07\\ \\mathrm{zł} \\)"
     ]
    ],
    "bledne": {
     "B": "571,00 zł jest kwotą wyższą od poprawnej sumy netto (409 zł) i nie jest ceną brutto – nie odpowiada poprawnemu rachunkowi z cennika.",
     "C": "702,33 zł to brutto od 571 zł netto, a poprawna suma netto to 409 zł, więc do kwoty wliczono pozycje, które nie wynikają z treści zadania.",
     "D": "712,17 zł to brutto od 579 zł netto – zawyżona suma pozycji (poprawna suma netto to 409 zł)."
    },
    "pulapka": "Treść nie wymienia filtra odwadniacza wprost – klucz CKE zakłada jego wymianę razem ze sprężarką (zgodnie z dobrą praktyką serwisową). Czynnik liczysz w kg, dojazd w km, a VAT na końcu."
   }
  },
  {
   "n": 29,
   "tytul": "Ściągacz do łożysk",
   "dzial": "Serwis, napełnianie, szczelność",
   "tresc": "Którego narzędzia należy użyć do ściągnięcia łożysk z silnika elektrycznego sprężarki chłodniczej?",
   "img": "img/ee15-2020-06/z29.png",
   "img_alt": "Cztery narzędzia: A – szczypce do zdejmowania izolacji z przewodów, B – przecinak, C – trójramienny ściągacz do łożysk, D – klucz do rur.",
   "odp": {
    "A": "Rysunek A",
    "B": "Rysunek B",
    "C": "Rysunek C",
    "D": "Rysunek D"
   },
   "klucz": "C",
   "rozw": {
    "lead": "Łożyska z wału ściąga się ściągaczem (trójramiennym), który obejmuje łożysko lub pierścień i wciąga je śrubą centralną bez uderzeń i uszkodzenia wału.",
    "kroki": [],
    "bledne": {
     "A": "Ściągacz izolacji (szczypce do zdejmowania izolacji z przewodów) służy do przewodów elektrycznych.",
     "B": "Przecinak (dłuto) służy do cięcia i wyburzania; ściąganie łożyska uderzeniami uszkodziłoby je i wał.",
     "D": "Klucz do rur (szwedzki) służy do dokręcania rur i nakrętek; nie ściąga łożysk."
    },
    "pulapka": "Do demontażu łożysk używaj ściągacza – uderzanie młotkiem niszczy łożysko i wał."
   }
  },
  {
   "n": 30,
   "tytul": "Zbyt wysoka temperatura skraplacza w lodówce",
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
    "lead": "Za wysoką temperaturę skraplacza powodują zabrudzenie jego powierzchni (kurz) i ograniczona cyrkulacja powietrza. Usuwa się to czyszczeniem skraplacza i odsunięciem urządzenia od ściany, co poprawia oddawanie ciepła do otoczenia.",
    "kroki": [],
    "bledne": {
     "A": "Czyszczenie parownika nie obniży temperatury skraplacza.",
     "C": "Czyszczenie parownika jest nieskuteczne, a dosunięcie do ściany pogorszy chłodzenie skraplacza.",
     "D": "Dosunięcie do ściany zmniejsza oddawanie ciepła ze skraplacza – pogarsza sytuację."
    },
    "pulapka": "Dobra wymiana ciepła na skraplaczu to czysta powierzchnia i swobodny przepływ powietrza."
   }
  },
  {
   "n": 31,
   "tytul": "Pierwsza kontrola po wymianie rurki kapilarnej",
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
    "lead": "Wymiana kapilary wymaga lutowania, więc najpierw sprawdza się szczelność wykonanych połączeń (azot pod ciśnieniem). Dopiero potem następują próżniowanie i napełnienie czynnikiem.",
    "kroki": [],
    "bledne": {
     "B": "Średnicę kapilary dobiera się przed jej montażem, a nie po wymianie.",
     "C": "Napięcie w sieci nie ma związku z pracami przy rurkach i nie jest pierwszą czynnością po naprawie.",
     "D": "Układ jest po naprawie bez czynnika lub dopiero będzie napełniany – kontrola jego ilości wymaga wcześniejszej szczelności."
    },
    "pulapka": "Kolejność po naprawie: próba szczelności, próżniowanie, napełnienie, kontrola parametrów pracy."
   }
  },
  {
   "n": 32,
   "tytul": "Kontrola agregatu wody lodowej przed uruchomieniem",
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
    "lead": "Przed rozruchem sprawdza się obiegi wodne (woda chłodząca skraplacz i woda lodowa w zbiorniku), zabezpieczenia agregatu oraz olej sprężarki – jego poziom i temperaturę (podgrzewacz karteru).",
    "kroki": [],
    "bledne": {
     "B": "Skraplacz się chłodzi, a nie podgrzewa – „woda podgrzewająca” jest błędem.",
     "C": "W wieży wyparnej jest woda chłodząca, a nie lodowa.",
     "D": "Kontroluje się zabezpieczenia agregatu i olej sprężarki, a nie olej wentylatorów chłodnic."
    },
    "pulapka": "Zwracaj uwagę na sensowność terminów: skraplacz chłodzi woda chłodząca, a woda lodowa jest w obiegu odbiornika."
   }
  },
  {
   "n": 33,
   "tytul": "Rozpoznanie pojemnika z olejem",
   "dzial": "Czynniki i F-gazy",
   "tresc": "Co zawiera przedstawiony na rysunku pojemnik?",
   "img": "img/ee15-2020-06/z33.png",
   "img_alt": "Puszka oleju poliestrowego do sprężarek Danfoss 160 PZ z etykietą informującą o zastosowaniu z czynnikami R134a, R507A, R404A, R407C.",
   "odp": {
    "A": "Czynnik chłodniczy do instalacji zawierającej czynniki chłodnicze r134a, R507A, R404A, R407C",
    "B": "Czynnik chłodniczy do instalacji zawierającej inne czynniki chłodnicze niż R134a, R507A, R404A, R407C",
    "C": "Olej do sprężarki chłodniczej instalacji zawierającej czynniki chłodnicze R134a, R507A, R404A, R407C",
    "D": "Olej do chłodniczej instalacji absorpcyjnej zawierającej czynniki chłodnicze R134a, R507A, R404A, R407C"
   },
   "klucz": "C",
   "rozw": {
    "lead": "Na etykiecie widnieje napis „POLYOLESTER LUBRICANT 160 PZ” oraz lista czynników R134a, R507A, R404A, R407C. To olej poliestrowy (POE) do sprężarek pracujących z tymi czynnikami HFC.",
    "kroki": [],
    "bledne": {
     "A": "Napis „lubricant” oznacza smar/olej, a nie czynnik chłodniczy.",
     "B": "To nie czynnik chłodniczy, tylko olej smarny.",
     "D": "Układy absorpcyjne nie mają sprężarki mechanicznej i nie stosuje się w nich oleju POE z czynnikami HFC."
    },
    "pulapka": "Oleje POE są silnie higroskopijne – puszkę otwieraj tuż przed użyciem i szczelnie zamykaj."
   }
  },
  {
   "n": 34,
   "tytul": "Kolejność izolowania instalacji chłodniczej",
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
    "lead": "Izolację wykonuje się na końcu: po <span class=\"term\" data-key=\"proba\">próbie szczelności</span> (połączenia muszą być dostępne do kontroli) i po wykonaniu powłoki parochronnej chroniącej powierzchnię przed wilgocią. Dopiero wtedy zakłada się izolację.",
    "kroki": [],
    "bledne": {
     "B": "Izolowanie przed próbą szczelności zasłania połączenia i utrudnia wykrycie nieszczelności.",
     "C": "Powłoka parochronna ma chronić powierzchnię pod izolacją, więc nie może być wykonana po izolacji.",
     "D": "Izolacja przed próbą i przed powłoką jest błędna z obu powodów."
    },
    "pulapka": "Kolejność prac: montaż rur, próba szczelności, zabezpieczenie i powłoka parochronna, izolacja."
   }
  },
  {
   "n": 35,
   "tytul": "Demontaż agregatu z czynnika R22",
   "dzial": "BHP i przepisy",
   "tresc": "Podczas demontażu sprężarkowego, hermetycznego agregatu chłodniczego, z którego odessano czynnik chłodniczy R22 oraz olej sprężarkowy, bezwzględnie należy",
   "img": null,
   "img_alt": null,
   "odp": {
    "A": "zastosować acetylenowo-tlenowy palnik gazowy.",
    "B": "wykonać najpierw demontaż rurociągów, a następnie sprężarki.",
    "C": "przestrzegać przepisów bhp i poż. oraz ochrony przeciwporażeniowej.",
    "D": "pozostawić dalsze czynności firmie serwisowej posiadającej odpowiedni certyfikat."
   },
   "klucz": "C",
   "rozw": {
    "lead": "Niezależnie od zakresu prac demontażowych zawsze obowiązuje przestrzeganie przepisów BHP, ppoż. i ochrony przeciwporażeniowej. Pozostałe czynności są wyborem metody, a nie bezwzględnym wymogiem.",
    "kroki": [],
    "bledne": {
     "A": "Palnik acetylenowo-tlenowy nie jest jedynym narzędziem i nie jest bezwzględnie wymagany (można użyć np. obcinaków do rur).",
     "B": "Kolejność demontażu zależy od okoliczności i nie jest wymogiem bezwzględnym.",
     "D": "Po odzysku czynnika demontaż może wykonać osoba upoważniona; zlecanie firmie z certyfikatem nie jest bezwzględnie konieczne na tym etapie."
    },
    "pulapka": "Czynnik R22 to substancja kontrolowana – odzysk i certyfikat są wymagane na etapie pracy z czynnikiem, ale samo przestrzeganie BHP obowiązuje zawsze."
   }
  },
  {
   "n": 36,
   "tytul": "Zawór elektromagnetyczny",
   "dzial": "Elementy i automatyka obiegu",
   "tresc": "Na rysunku przedstawiono zawór",
   "img": "img/ee15-2020-06/z36.png",
   "img_alt": "Zawór elektromagnetyczny z niebieską cewką, szarą wtyczką zasilającą i miedzianymi króćcami do wlutowania.",
   "odp": {
    "A": "kulowy z przyłączami z rury miedzianej do zaciskania.",
    "B": "zwrotny z przyłączami z rury miedzianej do wlutowania.",
    "C": "bezpieczeństwa z przyłączami z rury miedzianej do zaciskania.",
    "D": "elektromagnetyczny z przyłączami z rury miedzianej do wlutowania."
   },
   "klucz": "D",
   "rozw": {
    "lead": "Na rysunku widać zawór z niebieską cewką elektromagnetyczną i wtyczką zasilającą oraz króćcami z miedzi do wlutowania – to zawór elektromagnetyczny (odcinający), sterowany elektrycznie.",
    "kroki": [],
    "bledne": {
     "A": "Zawór kulowy ma pokrętło lub dźwignię, a nie cewkę z wtyczką.",
     "B": "Zawór zwrotny nie ma cewki; otwiera go różnica ciśnień.",
     "C": "Zawór bezpieczeństwa jest sprężynowy i nie ma cewki."
    },
    "pulapka": "Cewkę zawsze zdejmuj tylko po odłączeniu zasilania; przy lutowaniu zaworu chroń korpus i cewkę przed przegrzaniem."
   }
  },
  {
   "n": 37,
   "tytul": "Lada chłodnicza",
   "dzial": "Elementy i automatyka obiegu",
   "tresc": "Ladę chłodniczą przedstawiono na rysunku",
   "img": "img/ee15-2020-06/z37.png",
   "img_alt": "Cztery urządzenia chłodnicze: A – kontener chłodniczy, B – szafa chłodnicza z półkami, C – lada chłodnicza z szybą, D – przeszklona witryna pionowa.",
   "odp": {
    "A": "Rysunek A",
    "B": "Rysunek B",
    "C": "Rysunek C",
    "D": "Rysunek D"
   },
   "klucz": "C",
   "rozw": {
    "lead": "Lada chłodnicza to otwarta od góry lub przeszklona lada sklepowa z osłoną i półką ekspozycyjną; na rysunku C widać właśnie takie urządzenie ekspozycyjne.",
    "kroki": [],
    "bledne": {
     "A": "Kontener chłodniczy służy do transportu towarów.",
     "B": "To szafa chłodnicza (komora z półkami i drzwiami).",
     "D": "To przeszklona witryna (szafa) chłodnicza pionowa, a nie lada."
    },
    "pulapka": "Rozróżniaj: lada (pozioma ekspozycja), witryna/szafa (pionowa), kontener (transport)."
   }
  },
  {
   "n": 38,
   "tytul": "Materiał w instalacjach amoniakalnych",
   "dzial": "Materiały i rysunek techniczny",
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
    "lead": "Amoniak wraz z wilgocią agresywnie atakuje miedź i jej stopy (mosiądz, brąz), powodując korozję naprężeniową. Dlatego instalacje amoniakalne wykonuje się ze stali (rury, zbiorniki i armatura stalowa).",
    "kroki": [],
    "bledne": {
     "B": "Brąz jest stopem miedzi i koroduje w obecności amoniaku.",
     "C": "Miedź jest atakowana przez amoniak i jej zastosowanie w tych instalacjach jest zabronione.",
     "D": "Mosiądz zawiera miedź i podlega korozji w amoniaku."
    },
    "pulapka": "Amoniak (R717) – stal; freony – miedź. W instalacjach z amoniakiem unikaj miedzi i jej stopów."
   }
  },
  {
   "n": 39,
   "tytul": "Układ gwiazda – trójkąt",
   "dzial": "Elektrotechnika",
   "tresc": "Na schemacie przedstawiono zasilanie i sterowanie silnikiem indukcyjnym trójfazowym w układzie połączeń",
   "img": "img/ee15-2020-06/z39.png",
   "img_alt": "Schemat części silnoprądowej (bezpieczniki, styczniki Q11, Q13, Q15, przekaźnik termiczny F2, silnik M1) i układu sterowania z przekaźnikiem czasowym K1.",
   "odp": {
    "A": "Dahlandera.",
    "B": "gwiazda – trójkąt.",
    "C": "trójkąt – gwiazda.",
    "D": "gwiazda – podwójna gwiazda."
   },
   "klucz": "B",
   "rozw": {
    "lead": "Schemat zawiera trzy styczniki (Q11 sieciowy oraz Q13 i Q15 do przełączania uzwojeń) i przekaźnik czasowy K1. Rozruch odbywa się w gwieździe (zmniejszony prąd), a po czasie następuje przełączenie na trójkąt – układ gwiazda–trójkąt.",
    "kroki": [],
    "bledne": {
     "A": "Układ Dahlandera służy do zmiany prędkości (liczby par biegunów) i ma inne połączenia uzwojeń.",
     "C": "Nie ma układu „trójkąt–gwiazda” jako rozruchowego; rozruch zawsze zaczyna się od gwiazdy.",
     "D": "Gwiazda – podwójna gwiazda to wariant przełączania biegunów w układzie Dahlandera."
    },
    "pulapka": "Rozruch Y–Δ obniża prąd rozruchowy około trzykrotnie, ale też moment rozruchowy."
   }
  },
  {
   "n": 40,
   "tytul": "Miejsce montażu czujnika TZR",
   "dzial": "Elementy i automatyka obiegu",
   "tresc": "Właściwe miejsce montażu w instalacji czujnika termostatycznego zaworu rozprężnego oznaczono na rysunku literą",
   "img": "img/ee15-2020-06/z40.png",
   "img_alt": "Schemat parownika z zaworem rozprężnym i czterema oznaczonymi miejscami (A–D) potencjalnego montażu czujnika: na zwojach parownika, na przewodzie ssawnym i na wylocie parownika.",
   "odp": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "klucz": "D",
   "rozw": {
    "lead": "Czujnik <span class=\"term\" data-key=\"tzr\">termostatycznego zaworu rozprężnego</span> montuje się na przewodzie ssawnym tuż za wylotem parownika, na prostym poziomym odcinku, aby mierzyć temperaturę pary i regulować <span class=\"term\" data-key=\"sh\">przegrzanie</span>. Na rysunku odpowiada temu litera D.",
    "kroki": [],
    "bledne": {
     "A": "Czujnik zamocowany na samym parowniku (zwojach wężownicy) nie mierzy przegrzania pary na wylocie.",
     "B": "Miejsce B znajduje się na pionowym odcinku dalej na ssaniu, a nie bezpośrednio za wylotem parownika.",
     "C": "Pionowy odcinek rury tuż za parownikiem jest niewskazany – w jego pobliżu zbiera się ciecz lub olej, co zaburza pomiar."
    },
    "pulapka": "Czujnik mocuje się w pozycji 3 lub 9 na zegarze na rurze poziomej, z dobrym kontaktem cieplnym i izolacją; wyjątkowo trudne przypadki rozstrzyga instrukcja producenta."
   }
  }
 ]
};
