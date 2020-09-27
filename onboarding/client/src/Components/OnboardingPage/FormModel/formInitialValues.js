import checkoutFormModel from "./checkoutFormModel";
import { subYears } from "date-fns";

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
const maxDate = subYears(today, 18);

export default {
  [geslacht.name]: "",
  [naam.name]: "",
  [achternaam.name]: "",
  [geboortedatum.name]: maxDate,
  [nationaliteit.name]: "Nederlandse",
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
