import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { Waypoint } from "react-waypoint";
import HandtekeningJasperBos from "./static/handtekening_jasper_bos.png";

function Arbeidsovereenkomst({ imageURL, data, setSubmitButton }) {
  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
    >
      <Grid item xs={12}>
        <Typography variant="h2" component="h1">
          <strong>Arbeidsovereenkomst</strong>
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <h1>Oproepcontract</h1>
        <p>
          <strong>De ondergetekenden: </strong>
        </p>
        <ol>
          <li>
            <strong>The Call Company B.V. </strong>statutair gevestigd en
            kantoorhoudende te (2312CM ) Leiden aan de Lammermarkt Nederland,
            rechtsgeldig vertegenwoordigd door de heer Jasper Bos, directeur,
            verder te noemen: de werkgever. en
          </li>
          <li>
            De heer {data.fullname} wonende te {data.postcode},{" "}
            {data.woonplaats} aan{" "}
            {`${data.straat} ${data.huisnummer}${data.toevoeging}`} , Nederland,
            geboren op {data.geboortedatum}, verder te noemen: de werknemer.
          </li>
        </ol>
        <p>
          <strong>
            De ondergetekenden verklaren de volgende arbeidsovereenkomst te zijn
            aangegaan.
          </strong>
        </p>
        <h1>1. DATUM VAN INGANG EN DUUR</h1>
        <p>
          <strong>Artikel 1.</strong>
        </p>
        <ol>
          <li>
            De werknemer treedt per (datum) bij de werkgever in dienst. De
            overeenkomst wordt aangegaan voor bepaalde tijd, te weten voor
            twaalf maanden. De arbeidsovereenkomst eindigt daarmee van
            rechtswege, zonder dat daarvoor enige opzegging vereist is.
          </li>
          <li>
            De arbeidsovereenkomst kan door beide partijen tussentijds
            schriftelijk worden opgezegd met inachtneming van de wettelijke
            opzegtermijn van &eacute;&eacute;n maand. Opzegging van de
            arbeidsovereenkomst kan slechts tegen het einde van elke
            kalendermaand.
          </li>
          <li>
            De dienstbetrekking eindigt in ieder geval, zonder dat opzegging is
            vereist, wanneer de werknemer de AOW-gerechtigde leeftijd bereikt.
          </li>
          <li>
            Werkgever zegt nu reeds als bedoeld in art. 7:668, lid 1 BW aan
            werknemer aan deze voor bepaalde tijd gesloten arbeidsovereenkomst
            na de overeengekomen einddatum als genoemd in art. 1.1 niet te
            zullen voor te zetten.
          </li>
          <li>
            Op de arbeidsovereenkomst is geen collectieve arbeidsovereenkomst
            (cao) van toepassing.
          </li>
          <li>
            Indien het dienstverband eindigt van rechtswege of op initiatief van
            werkgever is werknemer verplicht om op de eerste doordeweekse dag
            volgend op de einddatum van het dienstverband in bij UWV Werkbedrijf
            een rechtsgeldige aanvraag in te dienen voor een WW-uitkering. Deze
            verplichting vervalt indien werknemer direct aansluitend op de
            be&euml;indiging van dit dienstverband elders in loondienst treedt.
            Wanneer de werkgever op enig moment schade lijdt doordat werknemer
            in gebreke is gebleven met voornoemde verplichting, is werknemer
            hiervoor verantwoordelijk.
          </li>
        </ol>

        <h1>2. FUNCTIE, WERKZAAMHEDEN EN WERKTIJDEN</h1>
        <p>
          <strong>Artikel 2.</strong>
        </p>
        <ol>
          <li>
            De werknemer treedt bij de werkgever in dienst in de functie van
            'projectmedewerker'.
          </li>
          <li>
            Naast de werkzaamheden die direct bij de functie van werver van
            projectmedewerker behoren, is werknemer gehouden in voorkomende
            gevallen alle overige door of namens de werkgever in redelijkheid op
            te dragen werkzaamheden te verrichten die werkgever van hem
            verlangt.
          </li>
          <li>
            De plaats waar de arbeid gewoonlijk wordt verricht is The Call
            Company B.V.
          </li>
          <li>
            De omvang van de werkzaamheden en de arbeidstijden zullen bij iedere
            oproep worden vastgesteld door de werkgever.
          </li>
          <li>
            De werknemer houdt zich beschikbaar om op afroep van werkgever
            werkzaam te zijn. Werkgever zal werknemer steeds zo tijdig mogelijk,
            doch uiterlijk 2 dagen voorafgaand aan de feitelijke aanvang van de
            uit te voeren werkzaamheden, oproepen voor de door hem te verrichten
            werkzaamheden. Hierbij zullen tevens de werktijden waarbinnen moet
            worden gewerkt, bekend gemaakt worden. De werknemer is verplicht aan
            een oproep van werkgever gehoor te geven, tenzij hij uiterlijk 2
            dagen voorafgaand aan de betreffende dag waarop hij wordt benaderd,
            heeft doorgegeven op de betreffende datum verhinderd te zijn, geniet
            van een op voorhand opgegeven vakantie of ziek is.
          </li>
          <li>
            De werknemer is verplicht alles te doen en na te laten, wat hij in
            zijn functie behoort te doen en na te laten en zal zijn gehele
            persoon en werkkracht inzetten om de bloei van het bedrijf van zijn
            werkgever te bevorderen.
          </li>
          <li>
            Bij werknemer zijn geen medische of andere omstandigheden of
            beperkingen bekend die het verrichten van zijn werkzaamheden zouden
            kunnen beperken.
          </li>
          <li>
            Wanneer werkgever daarbij een zwaarwichtig belang heeft, is
            werkgever bevoegd de functie van werknemer te wijzigen wanneer hij
            daarbij een zodanig zwaarwichtig belang heeft dat het belang van de
            werknemer daarvoor redelijkerwijs moet wijken.
          </li>
          <li>
            Werkgever is te allen tijde gerechtigd werknemer te plaatsen bij
            opdrachtgevers in een andere passende functie. Indien werknemer
            hiervoor transitiekosten moet maken in de vorm van het op kosten van
            werkgever inschakelen van een outplacementbureau dan stemt werknemer
            op voorhand ermee in dat deze transitiekosten in mindering mogen
            strekken op een eventueel bij be&euml;indiging van het dienstverband
            aan werknemer verschuldigde transitievergoeding.
          </li>
          <li>
            De standplaats van werknemer zal bij aanvang van de
            arbeidsovereenkomst Leiden Bellen zijn, maar werkgever behoudt zich
            het recht voor hierin wijziging aan te brengen.
          </li>
        </ol>
        <h1>3. SALARIS, VAKANTIETOESLAG, VAKANTIEDAGEN EN WACHTDAGEN</h1>
        <p>
          <strong>Artikel 3.</strong>
        </p>
        <ol>
          <li>
            De werknemer ontvangt een brutosalaris bestaande uit het wettelijk
            minimumloon dat naar rato wordt vastgesteld naar aanleiding de
            leeftijd en van het aantal gewerkte uren op de locatie per week,
            vermeerderd met de wettelijke vakantietoeslag van 8% en de
            vergoeding voor vakantie-uren van 10,59%. De vakantietoeslag en het
            bedrag voor vakantie-uren zijn dus uitdrukkelijk inbegrepen bij het
            genoemde salaris. In aanvulling op dit salaris kan werknemer een
            bonus verdienen, overeenkomstig de bonusstructuur. Over de bonus
            worden nadrukkelijk geen vakantietoeslag en geen vakantie-uren
            opgebouwd c.q. uitbetaald. Woon-/werkverkeer geschiedt in eigen tijd
            en wordt niet uitbetaald.
          </li>
          <li>
            Het salaris zal tegen het einde van iedere maand worden uitbetaald
            op een door Werknemer aangegeven IBAN nummer, namelijk (IBAN
            nummer).
          </li>
          <li>
            Werknemer heeft het recht om onbetaalde vakantiedagen op te nemen.
            De werknemer die vakantiedagen wil opnemen dient zijn aanvraag
            schriftelijk bij werkgever in te dienen en worden uitsluitend door
            werkgever verleend na handtekening voor akkoord. Bij die
            vaststelling houdt werkgever rekening met de wensen van de
            werknemer, tenzij gewichtige redenen aan de zijde van werkgever zich
            daartegen verzetten.
          </li>
          <li>
            De werkgever heeft het recht om in geval van ziekte of
            arbeidsongeschiktheid het wettelijke aantal wachtdagen op het loon
            van de werknemer in te houden.
          </li>
        </ol>
        <h1>4. ZIEKTE EN ARBEIDSONGESCHIKTHEID</h1>
        <p>
          <strong>Artikel 4.</strong>
        </p>
        <ol>
          <li>
            Ingeval van ziekte in de zin van artikel 7:629 BW, dient de
            werknemer zich zo snel mogelijk, doch uiterlijk op de eerste dag van
            ziekte voor 09.00 uur ziek te melden bij de werkgever. De werknemer
            verbindt zich de regels omtrent melding en controle bij ziekte,
            zoals deze van tijd tot tijd zijn vastgesteld door de werkgever, na
            te leven.
          </li>
          <li>
            Ingeval van ziekte wordt uitsluitend ten aanzien van de
            werkzaamheden waarvoor de werknemer reeds is opgeroepen, met ingang
            van de derde dag van ziekte 70% van het salaris en de
            vakantietoeslag als bedoeld in artikel 3.1 van deze Overeenkomst
            gemaximeerd tot 70% van het maximum dagloon zoals gedefinieerd in de
            Wet Financiering Sociale Verzekeringen door de werkgever betaald
            gedurende een periode van maximaal 52 weken gerekend vanaf de eerste
            dag van ziekte. In de periode vanaf 53 weken tot en met 104 weken
            van ziekte wordt uitsluitend ten aanzien van de werkzaamheden
            waarvoor de werknemer reeds is opgeroepen 70% van het salaris en de
            vakantietoeslag als bedoeld in artikel 5 van deze Overeenkomst
            gemaximeerd tot 70% van het maximum dagloon zoals gedefinieerd in de
            Wet Financiering Sociale Verzekeringen door de werkgever betaald.
          </li>
          <li>
            Indien de arbeidsongeschiktheid het gevolg is van een gebeurtenis
            waarvoor een ander aansprakelijk is, dan zal de werknemer alle
            medewerking verlenen aan werkgever om de (loon) schade van werkgever
            op grond van artikel 6:107a BW op de veroorzaker te verhalen.
          </li>
        </ol>
        <h1>5. REISKOSTEN</h1>
        <ol>
          <li>
            Werkgever vergoed geen reiskosten voor werknemer. Dit betekent dat
            het woon/werk verkeer op eigen kosten van werknemer is.
          </li>
        </ol>
        <h1>6. BESCHERMING PERSOONSGEGEVENS</h1>
        <p>
          <strong>Artikel 6.</strong>
        </p>
        <p>
          In het kader van de arbeidsrelatie van de werknemer met de werkgever,
          zal de werkgever bepaalde persoonsgegevens van de werknemer verzamelen
          en verwerken (waaronder bijzondere persoonsgegevens), met inbegrip van
          maar niet beperkt tot de persoonlijke gegevens van de werknemer,
          bankrekeningnummer, salarisdetails, opleiding, werkgeschiedenis,
          beoordelingsverslagen en ziekteverzuim (de Persoonsgegevens). Verdere
          details over het verwerken van Persoonsgegevens door de werkgever zijn
          neergelegd in het Compliance plan.
        </p>
        <h1> </h1>
        <h1>7. GEHEIMHOUDING EN BOETE</h1>
        <p>
          <strong>Artikel 7.</strong>
        </p>
        <p>
          De werknemer verbindt zich om zowel gedurende het bestaan van de
          arbeidsovereenkomst alsook nadat de arbeidsovereenkomst om welke reden
          dan ook zal zijn be&euml;indigd, op geen enkele wijze aan wie dan ook
          (daarbij inbegrepen andere personeelsleden van de werkgever, tenzij
          zij in verband met hun werkzaamheden in dienst van de werkgever van
          een en ander op de hoogte dienen te worden gesteld) enige mededeling
          te doen van zaken, activiteiten en belangen betreffende de onderneming
          van de werkgever en/of aan de werkgever gelieerde ondernemingen
          waarvan de werknemer in het kader van zijn werkzaamheden bij de
          werkgever heeft kennisgenomen en waarvan hij het vertrouwelijke
          karakter kent of behoort te kennen.
        </p>
        <p>
          Bij overtreding van het in dit artikel opgenomen geheimhoudingsbeding
          verbeurt werknemer aan werkgever een dadelijk en ineens zonder
          sommatie of in gebrekestelling opeisbare boete groot
        </p>
        <p>
          5.000,00 (zegge: vijfduizend euro), te vermeerderen met 250,00 voor
          elke dag, een gedeelte van een dag daaronder begrepen, dat de
          overtreding voortduurt, onverminderd het recht van werkgever in de
          plaats hiervan op volledige vergoeding door werknemer van de geleden
          schade aanspraak te maken.
        </p>
        <h1>8. EIGENDOMSRECHTEN</h1>
        <p>
          <strong>Artikel 8.</strong>
        </p>
        <p>
          Auteursrechten, industri&euml;le eigendomsrechten en andere
          (soortgelijke) IE-rechten, voortvloeiend en/of voortkomend uit
          werkzaamheden en/of bevindingen van werknemer verricht c.q. gedaan
          tijdens het bestaan van de dienstbetrekking, komen toe aan de
          werkgever, tenzij uitdrukkelijk schriftelijk anders is overeengekomen.
          Alle bescheiden en/of kopie&euml;n daarvan, van welke aard ook, die
          verkregen zijn van de onderneming van werkgever of diens
          cli&euml;nten, zijn en blijven eigendom van werkgever, ook indien
          bedoelde bescheiden door werknemer zijn vervaardigd of aan hem
          persoonlijk geadresseerd zijn. Het is aan werknemer verboden bedoelde
          bescheiden zonder schriftelijke toestemming van werkgever in
          particulier bezit te houden, te kopi&euml;ren of de bescheiden of
          kopie&euml;n daarvan aan derden ter inzage te geven, een en ander voor
          zover de werkzaamheden van werknemer in dienst van werkgever dit niet
          vereisen. Alle bescheiden en kopie&euml;n als hierboven bedoeld moeten
          door werknemer ongevraagd bij het einde van de dienstbetrekking of
          zoveel eerder als werkgever verlangt, onmiddellijk aan werkgever ter
          beschikking worden gesteld.
        </p>
        <h1>9. GEEN PENSIOEN</h1>
        <p>
          <strong>Artikel 9.</strong>
        </p>
        <p>
          Werkgever doet aan werknemer geen pensioenaanbod. De werknemer zal
          niet deelnemen aan een bedrijfspensioenregeling, nu deze bij de
          werkgever er niet is.
        </p>
        <h1>10 NON-CONCURRENTIEBEDING</h1>
        <p>
          <strong>Artikel 10.</strong>
        </p>
        <p>
          Het is de werknemer verboden om, zowel gedurende het bestaan van de
          arbeidsovereenkomst alsook gedurende een periode van &eacute;&eacute;n
          jaar nadat de arbeidsovereenkomst om welke reden dan ook zal zijn
          ge&euml;indigd, zonder voorafgaande schriftelijke toestemming van de
          werkgever, direct of indirect, voor zichzelf of voor anderen, op
          enigerlei wijze werkzaam of betrokken te zijn in of bij of enig
          aandeel te hebben in enige onderneming met activiteiten op een
          terrein, gelijk aan of anderszins concurrerend met dat van de
          werkgever of met dat van een aan de werkgever gelieerde onderneming,
          of daarbij zijn bemiddeling, direct of indirect, voor zichzelf of voor
          anderen, op enigerlei wijze te verlenen. Dit geldt ook voor het
          verkrijgen of houden van aandelen of certificaten van aandelen
          (exclusief aandelen die officieel aan een beurs zijn genoteerd), in
          eigen naam of op naam van anderen, in enige onderneming met
          activiteiten op een terrein, gelijk aan of anderszins concurrerend met
          dat van de werkgever of met dat van een aan de werkgever gelieerde
          onderneming.
        </p>
        <p>
          Bovengenoemd non-concurrentiebeding is noodzakelijk vanwege
          zwaarwegende bedrijfsbelangen van de werkgever, die hieronder nader
          zullen worden toegelicht.
        </p>
        <p>
          De Werkgever is actief in de callcenterbranche voor het werven van
          leden voor telecom partijen. De groei en het voortbestaan van de
          werkgever zijn sterk afhankelijk van de voortzetting van de voorsprong
          die de werkgever op haar concurrenten heeft en de werkgever ziet zich
          dan ook in een kwetsbare positie. In dat opzicht is het van het
          grootste belang voor de werkgever om haar bedrijfsgeheimen en
          bedrijfsgevoelige informatie, met name met betrekking tot de leden en
          werving te beschermen.
        </p>
        <p>
          Als Projectmedewerker houdt de werknemer zich primair bezig met het
          werven van klanten en recruitment van nieuwe medewerkers. De
          activiteiten van de werknemer hebben een directe impact op de
          prestaties van het bedrijf van de werkgever. Bij de uitoefening van
          zijn taken heeft de werknemer toegang tot en specifieke kennis van
          alle zakelijke geheimen en bedrijfsgevoelige informatie van de
          werkgever, onder meer met betrekking tot verkoop strategie&euml;n,
          sales pitches, recruitment, Backstage, materialen en apparatuur die
          gebruikt worden door de Werkgever. Nu de groei en het voortbestaan van
          de werkgever sterk afhankelijk zijn van de voortzetting van de
          voorsprong die de werkgever op haar concurrenten heeft, zal de
          werkgever onevenredig worden benadeeld indien de werknemer in dienst
          treedt bij of anderszins op enigerlei wijze betrokken is bij een
          concurrerende onderneming zoals omschreven in artikel 10. Voorgaande
          betekent dat de werknemer de werkgever met de bij de werkgever
          opgedane kennis zodanige concurrentie kan aandoen, dat dit
          non-concurrentiebeding vanwege zwaarwegende bedrijfsbelangen van de
          werkgever noodzakelijk is.
        </p>
        <h1>11 RELATIEBEDING</h1>
        <p>
          <strong>Artikel 11.</strong>
        </p>
        <p>
          Het is de werknemer verboden om, zowel gedurende het bestaan van de
          arbeidsovereenkomst alsook gedurende een periode van &eacute;&eacute;n
          jaar nadat de arbeidsovereenkomst om welke reden dan ook zal zijn
          ge&euml;indigd, zonder voorafgaande schriftelijke toestemming van de
          werkgever, direct of indirect, voor zichzelf of voor anderen, op
          enigerlei wijze professionele diensten te verrichten of doen
          verrichten voor cli&euml;nten of relaties van de werkgever of aan de
          werkgever gelieerde ondernemingen of afnemers van producten of
          diensten van de werkgever of aan de werkgever gelieerde ondernemingen.
          Het is de werknemer tevens verboden om op enigerlei wijze in contact
          te treden met cli&euml;nten of relaties van de werkgever of aan de
          werkgever gelieerde ondernemingen of afnemers van producten of
          diensten van de werkgever of aan de werkgever gelieerde ondernemingen.
        </p>
        <p>
          Met cli&euml;nten of relaties van de werkgever zoals bedoeld in
          artikel 11.1 van deze arbeidsovereenkomst worden in ieder geval
          bedoeld de cli&euml;nten en relaties van de werkgever of aan de
          werkgever gelieerde ondernemingen, waarmee de werkgever gedurende dan
          wel voorafgaand aan de be&euml;indiging van de arbeidsovereenkomst op
          enigerlei wijze (zakelijk) contact heeft gehad.
        </p>
        <p>
          Bovengenoemd relatiebeding is noodzakelijk vanwege zwaarwegende
          bedrijfsbelangen van de werkgever, die hieronder nader zullen worden
          toegelicht.
        </p>
        <p>
          Als Projectmedewerker houdt de werknemer zich primair bezig met het
          werven van klanten en leden en recruitment. Bij de uitoefening van
          zijn taken heeft de werknemer (veelvuldig) contact met cli&euml;nten
          of relaties van de werkgever. De werknemer heeft daarnaast toegang tot
          de gegevens van alle cli&euml;nten of relaties van de werkgever en is
          betrokken bij het opstellen en het verwerken van concurrentiegevoelige
          informatie, zoals diensten- en productspecificaties, prijsstellingen,
          (historische) verkoopgegevens, wensen, eisen en klachten van
          cli&euml;nten of relaties en trainingen. Voorgaande betekent dat de
          werknemer de werkgever met de bij de werkgever opgedane kennis
          zodanige concurrentie kan aandoen dan wel schade kan berokkenen, dat
          dit relatiebeding vanwege zwaarwegende bedrijfsbelangen van de
          werkgever noodzakelijk is. Door dit relatiebeding kan de werkgever
          voorkomen dat haar bedrijfsgeheimen of haar bedrijfsgevoelige
          informatie bekend wordt bij &eacute;&eacute;n van haar concurrenten en
          dat de werknemer de bedrijfsgeheimen of bedrijfsgevoelige informatie
          van de werkgever gebruikt om cli&euml;nten of relaties van de
          werkgever te bewegen hun relatie met de werkgever te be&euml;indigen
          dan wel hen te bewegen geen diensten van de werkgever meer af te
          nemen.
        </p>
        <h1>12. OVERIGE BEPALINGEN</h1>
        <p>
          <strong>Artikel 12.</strong>
        </p>
        <ol>
          <li>
            Op deze arbeidsovereenkomst is het Nederlandse recht van toepassing.
          </li>
          <li>
            Indien werknemer binnen 28 dagen nadat het dienstverband van
            rechtswege of op initiatief van werkgever is be&euml;indigd zonder
            ondertussen elders in loondienst te zijn getreden, zich bij het UWV
            Werkbedrijf (of de eventuele (rechts)opvolgster daarvan) ziek meldt,
            is hij verplicht dit tegelijkertijd schriftelijk aan werkgever te
            melden en aan re-integratie mee te werken, bij gebreke waarvan
            werknemer aan werkgever zonder nadere ingebrekestelling is werknemer
            verantwoordelijk voor eventuele schade.
          </li>
          <li>
            Werkgever heeft de bevoegdheid om de overeengekomen
            arbeidsvoorwaarden eenzijdig te wijzigen wanneer hij daarbij een
            zodanig zwaarwichtig belang heeft dat het belang van de werknemer
            daarvoor redelijkerwijs moet wijken.
          </li>
        </ol>
        <Waypoint
          onEnter={({ previousPosition, currentPosition, event }) => {
            setSubmitButton(true);
          }}
        />
        <p>
          Deze overeenkomst is in tweevoud opgemaakt en ondertekend{" "}
          {data.plaats ? `te ${data.plaats}` : ""} op {data.datum}
        </p>
        <p>
          <strong>De werkgever:</strong>
        </p>
        <p>
          <img
            alt="handtekening jasper bos"
            src={HandtekeningJasperBos}
            style={{
              borderBottom: "1px dotted black",
              padding: "5px",
              width: "25%",
            }}
          />
        </p>
        <p>The Call Company B.V.</p>
        <p>De heer J. Bos</p>
        <p>
          <strong>De werknemer:</strong>
        </p>
        <p>{data.fullname}</p>
        <p>
          {imageURL && (
            <img
              src={imageURL}
              alt="handtekening werknemer"
              style={{
                borderBottom: "1px dotted black",
                padding: "5px",
                width: "25%",
              }}
            />
          )}
        </p>
        <p>
          <strong>Contractuele gegevens</strong>
        </p>
        <p>
          <em>Loonheffingskorting:</em> (afhankelijk van formulier)
        </p>
        <p>
          <em>Geboortedatum:</em> {data.geboortedatum}
        </p>
        <p>
          <em>IBAN Nummer:</em> {data.iban}
        </p>
        <p>
          <em>Adres:</em>
          {` ${data.straat} ${data.huisnummer}${data.toevoeging} ${data.postcode} ${data.woonplaats}`}
        </p>
      </Grid>
    </Grid>
  );
}

export default Arbeidsovereenkomst;
