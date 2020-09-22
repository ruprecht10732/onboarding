import checkoutFormModel from "./checkoutFormModel";
const {
  formField: {
    geslacht,
    naam,
    achternaam,
    geboortedatum,
    nationaliteit,
    telefoon,
    straat,
    huisnummer,
    toevoeging,
    postcode,
    woonplaats,
    type,
    documentnummer,
    bsn,
    idvoorkant,
    idachterkant,
    noodContactNaam,
    noodContactAchternaam,
    noodContactTelefoon,
    banknaam,
    iban,
  },
} = checkoutFormModel;

let today = new Date();
let date =
  today.getFullYear() -
  18 +
  "-" +
  (today.getMonth() + 1) +
  "-" +
  today.getDate();

export default {
  [geslacht.name]: "",
  [naam.name]: "",
  [achternaam.name]: "",
  [geboortedatum.name]: date,
  [nationaliteit.name]: "",
  [telefoon.name]: "",
  [straat.name]: "",
  [huisnummer.name]: "",
  [toevoeging.name]: "",
  [postcode.name]: "",
  [woonplaats.name]: "",
  [type.name]: "",
  [documentnummer.name]: "",
  [bsn.name]: "",
  [idvoorkant.name]: "",
  [idachterkant.name]: "",
  [noodContactNaam.name]: "",
  [noodContactAchternaam.name]: "",
  [noodContactTelefoon.name]: "",
  [banknaam.name]: "",
  [iban.name]: "",
};
