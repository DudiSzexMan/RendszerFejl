<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>

<h1>Bevezetés</h1>
<p>Ez a dokumentáció a React alapú bejelentkezési oldal működését és felépítését írja le. Az oldal egy felhasználóbarát felületet biztosít a felhasználók számára, hogy bejelentkezhessenek és egyéb funkciókat használhassanak. A projekt fejlesztéséhez a VSCode fejlesztői környezetet és a Node.js környezetet használtuk.</p>


<h2>Telepítés és Futtatás</h2>
<ol>
  <li>Klónozd le a projektet a GitHub repositoryból vagy más forrásból.</li>
  <li>Nyisd meg a projekt könyvtárát a VSCode-ban.</li>
  <li>Telepítsd a szükséges függőségeket a <code>npm install</code> parancs kiadásával a terminálban.</li>
  <li>Futtasd az alkalmazást a <code>npm start</code> parancs kiadásával.</li>
  <li>Az alkalmazás most elérhető lesz a böngésződben a <code>http://localhost:3000</code> címen.</li>
</ol>

<h2>Funkcionalitások</h2>
<p>Az alkalmazás az alábbi funkciókat nyújtja:</p>
<ol>
  <li><strong>Bejelentkezés:</strong> A felhasználók megadhatják a nevüket, email címüket és jelszavukat a bejelentkezéshez. A "Manager Login" és "Developer Login" gombokkal kiválaszthatják a megfelelő bejelentkezési típust.</li>
  <li><strong>Manager Tasks Megjelenítése:</strong> A Manager felhasználók bejelentkezés után megtekinthetik a Manager feladatokat, amelyek egy táblázatban jelennek meg. Minden feladathoz tartozik egyedi azonosító, név, leírás, projekt azonosító, felhasználó azonosító és határidő.</li>
  <li><strong>Fejlett CSS Stílusok:</strong> Az oldal felhasználja a CSS-et a vonzó és felhasználóbarát
