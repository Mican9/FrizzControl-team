# FrizzControl — PRD & SOW

**Projekat:** Prezentacioni sajt salona FrizzControl (Pirot)
**Tip dokumenta:** Product Requirements Document + Statement of Work
**Verzija:** 1.0
**Datum:** 31.07.2026.
**Status:** U izradi — jezgro sajta implementirano, sadržaj se dopunjava

---

## 1. Pregled projekta

FrizzControl je frizersko-kozmetički salon u Pirotu (Trg slobode 5) u kom trenutno rade **četiri izvođača usluga**. Cilj projekta je prezentacioni web sajt koji:

- predstavlja svakog člana tima pojedinačno (ko šta radi, cenovnik, galerija radova),
- omogućava posetiocu da preko pretrage usluga na početnoj strani brzo nađe uslugu koja mu treba i vidi ko je izvodi, po kojoj ceni i (ako postoji) primer rada,
- prikazuje lokaciju (Google mapa), radno vreme i kontakt (Instagram),
- je optimizovan za lokalnu pretragu ("frizer/PMU/šminka Pirot").

Sekundarni cilj (vlasnik projekta, developer): sajt posle predaje klijentu služi i kao **portfolio primer** — bez developerskog potpisa na samom sajtu. Cena za klijenta je namenjena da bude niska, prvenstveno da pokrije trošak održavanja (hosting/domen), ne kao puna komercijalna izrada — što direktno diktira arhitekturu: **bez CMS-a, bez baze podataka, bez plaćenih integracija** u v1.

---

## 2. Stejkholderi

| Uloga | Ko | Napomena |
|---|---|---|
| Vlasnik/naručilac | Salon FrizzControl | Krajnji korisnik i (buduci) platilac hostinga/domena |
| Frizer 1 | Vladimir Todorović | Hairstylist — žensko/muško šišanje, farbanje, blanš. IG: `frizzcontrol87` (ujedno i zvanični IG salona) |
| Frizer 2 | Nena Todorović | Hairstylist — iste usluge kao Vladimir. **Cenovnik i IG nalog još nisu dostavljeni.** |
| PMU umetnica | Jovana Barunović | PMU & Make Up Artist — mikropigmentacija obrva/usana/ajlajnera, autorska tehnika **Soft Elegance Hairstroke**. IG: `jovanabarunovic` |
| Šminkerka/lash artist | Iva Ignjatović | Make Up & Lash Artist — šminka, trepavice (1:1, ruski volumen), lash lift. IG: `by.ivaignjatovic` |
| Developer | Milan | Implementacija, sadržaj, SEO, deploy, održavanje |

---

## 3. Obim posla (Scope)

### 3.1 U obimu (implementirano ili aktivno u izradi)

**Početna strana**
- Hero sekcija sa horizontalnim redom fotografija celog tima (trenutni redosled: Nena, Vladimir, Jovana, Iva), sa dve veličine prikaza (`large`/`small` po osobi) i horizontalnim skrolom ako ne stane na ekran.
- Klik na fotografiju → profil te osobe (`/tim/[slug]`).
- Sekcija "Pronađite uslugu koja vam treba" ispod hero-a: dugmad po kategoriji usluge → filtrirana lista usluga → klik otvara modal sa nazivom, cenom, izvođačem, primerom slike (ako postoji) i linkom na profil izvođača.

**Profil stranica izvođača (`/tim/[slug]`)**
- Statički generisane rute za sve članove tima (`generateStaticParams`).
- Biografija, uloga, Instagram dugme (lični nalog izvođača, fallback na nalog salona).
- Cenovnik grupisan po kategoriji usluge, fiksne cene (podržan i format sa više tarifa, npr. `1000/1100/1200` za različite dužine kose).
- Galerija radova sa tabovima po kategoriji — prikazuje samo usluge koje imaju fotografiju; usluga može imati i više fotografija.

**Zajednički elementi (header/footer)**
- Navigacija: "Početna" skroz levo, imena članova tima po sredini (hamburger meni na mobilnom), naziv salona skroz desno.
- Footer: radno vreme, adresa, Instagram dugme salona, ugrađena Google mapa (Trg slobode 5, Pirot).

**SEO**
- `generateMetadata` po stranici (naslov/opis), `sitemap.ts`, `robots.ts`.
- JSON-LD structured data (`BeautySalon` schema) sa nazivom, adresom, radnim vremenom, Instagram linkom.
- Semantički HTML, `next/image` optimizacija slika.

**Tehnički temelji**
- Next.js 16.2.12 (App Router), React 19.2.4, TypeScript, Tailwind CSS v4.
- Dizajn sistem: **shadcn/ui** (stil `base-maia`, `lucide-react` ikonice, `class-variance-authority`, `base-ui/react` primitivi, `tw-animate-css` animacije) — uveden naknadno u odnosu na početni raw-Tailwind pristup.
- Podrška za svetlu i tamnu temu (CSS varijable u `globals.css`, `.dark` klasa).
- Responzivan dizajn (mobilni telefon → tablet → laptop → desktop).
- Sadržaj (osoblje, usluge, cene, kategorije) živi u strukturiranim TypeScript fajlovima (`lib/data/*.ts`) — bez baze podataka, bez CMS-a; ažuriranje sadržaja ide kroz developera.

### 3.2 Van obima (v1)

- Online zakazivanje / kalendar termina.
- Kontakt forma (kontakt ide isključivo preko Instagram dugmeta).
- Admin panel ili CMS za samostalno ažuriranje cenovnika od strane salona (moguć budući plaćeni dodatak).
- Automatska Instagram integracija (auto-povlačenje slika sa profila) — galerija je ručno kurirana + link ka Instagramu.
- Widget sa Google recenzijama (salon trenutno nema Google Business profil — preporuka da se napravi).
- Višejezičnost (sajt je na srpskom/latinica; tekstovi su izolovani u `lib/content/copy.ts` da bi se engleski mogao dodati kasnije bez prepravke arhitekture).
- Plaćeni domen / produkcijski hosting (trenutno cilj je besplatan Vercel preview subdomen dok se domen ne kupi).

---

## 4. Funkcionalni zahtevi (sažetak)

| # | Zahtev | Status |
|---|---|---|
| F1 | Prikaz celog tima na početnoj sa linkom ka profilu svakog | ✅ Implementirano |
| F2 | Pretraga/filter usluga po kategoriji sa detaljima u modalu | ✅ Implementirano |
| F3 | Profil stranica po izvođaču: bio, cenovnik, galerija | ✅ Implementirano |
| F4 | Cenovnik — Vladimir (15 usluga) | ✅ Uneto iz zvaničnog PDF cenovnika |
| F5 | Cenovnik — Jovana (9 usluga) | ✅ Uneto iz zvaničnog PDF cenovnika |
| F6 | Cenovnik — Iva (8 usluga) | ✅ Uneto iz zvaničnog PDF cenovnika |
| F7 | Cenovnik — Nena | ❌ **Nedostaje — čeka se PDF/lista od klijenta** |
| F8 | Instagram nalozi po osobi | ✅ Vladimir, Jovana, Iva povezani; Nena nedostaje |
| F9 | Lokacija (Google mapa) i radno vreme | ✅ Implementirano (Trg slobode 5, Pirot; uto–ned 10–18h, pon zatvoreno) |
| F10 | SEO osnove (metadata, sitemap, JSON-LD) | ✅ Implementirano |
| F11 | Responzivnost (mobilni/tablet/desktop) | ✅ Implementirano |

---

## 5. Nefunkcionalni zahtevi

- **Performanse:** minimalan JS na klijentu — interaktivni delovi (filter usluga + modal, tabovi u galeriji) su izolovani u zasebne client komponente; sve ostalo je server-rendered/statično.
- **Održavanje:** nizak trošak — bez baze, bez pretplata na treće servise; ažuriranje sadržaja = izmena TypeScript fajlova + redeploy.
- **SEO:** prioritet na lokalnoj pretrazi (grad: Pirot).
- **Pristupačnost:** semantički HTML, alt tekst na slikama, kontrast boja u skladu sa dizajn sistemom.
- **Kompatibilnost:** Next.js 16 unosi breaking changes u odnosu na starije verzije (npr. `params`/`searchParams` su `Promise` u svim page/layout/route fajlovima) — ovo je already ispoštovano u kodu.

---

## 6. Sadržajni / podatkovni model

Ključni tipovi (`lib/data/*.ts`):

- **Staff** — `slug`, `name`, `role`, `shortBio`, `fullBio`, `heroPhoto` (uklj. opcioni `focalPosition`/`zoom`), `categories`, `instagramUrl`, `homePhotoVariant` (`large`/`small`).
- **Service** — `id`, `name`, `category`, `staffSlug`, `price` (string — podržava i tarifne cene), `currency`, opciono `description`, `featuredImages[]` (0 ili više slika po usluzi), `isSignature`.
- **Kategorije usluga** (`SERVICE_CATEGORIES`): Ženske frizure, Muške frizure, Farbanje/Blanš, Obrve/PMU, Trepavice, Šminka.
- **SITE** — poslovni podaci salona: naziv, adresa, grad, radno vreme, Instagram, URL Google mape.

Ovaj model je namerno pljosnat (flat) i tekstualan kako bi dodavanje preostalih usluga (Nena) ili izmena cena bio prost uređivački zadatak, bez menjanja koda komponenti.

---

## 7. Otvorene stavke (zavisnosti od klijenta)

Pre potpunog lansiranja, od klijenta je potrebno:

1. **Cenovnik za Nenu Todorović** (PDF ili lista usluga i cena, po istom formatu kao ostali).
2. **Instagram nalog za Nenu Todorović.**
3. Prave fotografije osoblja tamo gde je i dalje placeholder (proveriti trenutno stanje po osobi).
4. Telefon salona (opciono — koristi se samo u schema/footer tekstu, nikad kao CTA dugme, po odluci klijenta da je Instagram jedini kontakt kanal).
5. Zvaničan FrizzControl logo (za sada tekstualni naziv u headeru/footeru).
6. Konačne brend boje (trenutna paleta je topli placeholder dok se ne uskladi sa zvaničnim logom).
7. Kupovina pravog domena (sajt trenutno cilja besplatan Vercel subdomen).
8. Kreiranje Google Business profila za salon (preporuka — omogućava kasnije recenzije i bolju vidljivost na Google mapi).

---

## 8. Faze isporuke

| Faza | Sadržaj | Status |
|---|---|---|
| 0 | Dizajn temelji, paleta, tipografija, osnovni layout | ✅ Završeno |
| 1 | Početna strana (hero + pretraga usluga) | ✅ Završeno |
| 2 | Profil stranice izvođača (bio, cenovnik, galerija) | ✅ Završeno |
| 3 | SEO (metadata, sitemap, robots, JSON-LD) | ✅ Završeno |
| 4 | Unos realnog sadržaja (adresa, radno vreme, cenovnici, Instagram nalozi) | 🔄 U toku — nedostaje samo Nenin deo |
| 5 | Dizajn sistem shadcn/ui, tamna tema, finije podešavanje layout-a (header, hero varijante fotografija) | 🔄 U toku |
| 6 | Deploy na Vercel (preview), predaja klijentu | ⏳ Sledeće |
| 7 | Kupovina domena, povezivanje, finalni logo/boje | ⏳ Čeka klijenta |

Projekat nema fiksan rok — gradi se inkrementalno, svaka faza je samostalno demonstrabilna.

---

## 9. Kriterijumi prihvatanja (Acceptance Criteria)

- [ ] Sva četiri člana tima prikazana na početnoj sa ispravnim linkovima ka profilima.
- [ ] Svaki profil ima kompletan, tačan cenovnik (trenutno nedostaje samo Nenin).
- [ ] Pretraga usluga vraća tačne rezultate za sve kategorije i tačno prikazuje izvođača i cenu.
- [ ] Sajt je vizuelno i funkcionalno ispravan na mobilnom, tabletu i desktopu.
- [ ] `npm run build` i `npm run lint` prolaze bez grešaka.
- [ ] Google mapa prikazuje tačnu adresu (Trg slobode 5, Pirot).
- [ ] Svako Instagram dugme vodi na tačan, live nalog.

---

## 10. Održavanje posle predaje

- Izmena cena/usluga: uređivanje `lib/data/services.ts` (dodavanje/izmena objekata u nizu).
- Dodavanje novog člana tima: dodavanje objekta u `lib/data/staff.ts` + njegove usluge u `services.ts`.
- Zamena slika: zamena fajlova u `public/staff/` i `public/gallery/`.
- Svaka izmena zahteva redeploy (Vercel automatski redeployuje na push ka glavnoj grani, kada bude povezan repo).

---

## 11. Komercijalni uslovi

*(Nisu definisani u ovom dokumentu — dodati cenu izrade/održavanja i uslove plaćanja pre slanja klijentu, ako je dokument namenjen za deljenje.)*
