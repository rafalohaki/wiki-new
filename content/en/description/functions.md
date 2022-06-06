---
title: Functions HLBOT
description: 'Various known bugs and other issues in Ultramarine Linux.'
position: 5
category: description
---

## Opis funkcji

<details><summary><strong>Automatyczne atakowanie.</strong></summary>


1. Automatyczna rotacja
2. Zmieniaj spoty
3. Teleportuj między spotami
4. Prędkość rotacji oraz co ile sekund ma zmieniać spota
5. Minimalna ilość potworów do zastania na spocie
6. Lista spotów 
#### Robi ważenie, prawda?

</details>
<details>
<summary><strong>Automatyczne używanie pelerynki.</strong></summary>

1. Minimalna prędkość używania peleryny
2. Maksymalna prędkość używania peleryny.
3. Tryb pelerynki: Normalny (Zwykłe używanie pelerynki)
4.  Tryb pelerynki: Moblock (Teleportuje wizualnie moby pod postać)
5. Tryb pelerynki: Mega (Teleportuje się po spocie przyciągając moby z dalszych obszarów)
(Na lepiej zabezpieczonych serwerach może nie działać)
(Na lepiej zabezpieczonych serwerach może być wykrywany przez system logów)
6. Miejsce na włożenie pelerynki
(Jeżeli nie włożysz peleryny serwerowej bot będzie używał Waithacka do przyciągania mobów)
7. Ilość mobów od ilu ma używać pelerynki 
#### Robi ważenie, prawda?

</details>
<details><summary><strong>Przyśpieszone zadawanie obrażeń hitami.</strong></summary>

<alert type='info'>Działanie Waithacka jest w pełni zależne od zabezpieczeń serwera
Na lepiej zabezpieczonych serwerach, może być wykrywany przez system logów</alert>

Można wybrać jakie cele ma atakować waithack
1.  Potwory
2. Bossy
3. Metiny
4. Inne 
    <alert type='info'>
    Dodajemy cele, na które ma działać Waithack
    </alert>
5. Prędkość atakowania (w sekundach)
6. Zasięg atakowania
7. Rysuj linie w grze
8. Nie atakuj celów w ścianach
9. Zasięgowy waithack
    <alert type='info'>
    Teleportuje do celów i je bije
    </alert>
10. Maksymalna ilość potworów do atakowania.
11. Nie zadawaj obrażeń zwykłymi atakami 
    <alert type='info'>
    Zwykłe hity nie działają, zadajemy obrażenia tylko poprzez Waithacka
    </alert>
12. Zwiększ ilość potworów do bicia przy zwykłych atakach
    <alert type='info'>
    Standardowo metin ogranicza ilość bitych celów do `16`.
    Funkcja ta pozwala na zadawanie obrażeń wszystkim celom w zasięgu ataku. 
    </alert>
13. Lista potworów które waithack ma bić w przypadku zaznaczenia opcji Inne(4)
#### Robi ważenie, prawda?

</details>