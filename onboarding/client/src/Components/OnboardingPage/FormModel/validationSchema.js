import * as Yup from "yup";
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

const bsnRegEx = /^\d{9}$/;
const ibanRegEx = /^[a-zA-Z]{2}[0-9]{2}[a-zA-Z0-9]{4}[0-9]{7}([a-zA-Z0-9]?){0,16}$/;
const geenCijfersRegEx = /^([^0-9]*)$/;
const documentNummerRegEx = /^[A-NP-Za-np-z]{2}[0-9A-NP-Za-np-z]{6}[0-9]{1}$/;

export default [
  Yup.object().shape({
    [geslacht.name]: Yup.string()
      .required(`${geslacht.requiredErrorMsg}`)
      .min(2, "Minimaal 2 karakters")
      .max(7, "Maximaal 7 karakters"),
    [naam.name]: Yup.string()
      .required(`${naam.requiredErrorMsg}`)
      .matches(geenCijfersRegEx, "Je mag geen cijfers gebruiken")
      .min(2, "Minimaal 2 karakters"),
    [achternaam.name]: Yup.string()
      .required(`${achternaam.requiredErrorMsg}`)
      .matches(geenCijfersRegEx, "Je mag geen cijfers gebruiken")
      .min(2, "Minimaal 2 karakters"),
    [geboortedatum.name]: Yup.date().required(
      `${geboortedatum.requiredErrorMsg}`
    ),
    [nationaliteit.name]: Yup.string()
      .required(`${nationaliteit.requiredErrorMsg}`)
      .matches(geenCijfersRegEx, "Je mag geen cijfers gebruiken")
      .min(2, "Minimaal 2 karakters")
      .matches(geenCijfersRegEx, "Je mag geen cijfers gebruiken"),
    [telefoon.name]: Yup.string()
      .required(`${telefoon.requiredErrorMsg}`)
      .matches(
        "^(((\\+31|0|0031)6){1}[1-9]{1}[0-9]{7})$",
        "Dit is geen geldig telefoonnummer"
      )
      .max(10, "Maximaal 10 cijfers")
      .min(10, "Minimaal 10 cijfers"),
  }),
  Yup.object().shape({
    [straat.name]: Yup.string()
      .required(`${straat.requiredErrorMsg}`)
      .min(2, "Minimaal 2 karakters"),
    [huisnummer.name]: Yup.string().required(`${huisnummer.requiredErrorMsg}`),
    [toevoeging.name]: Yup.string().min(
      1,
      "Dit veld moet minimaal 1 teken bevatten"
    ),
    [postcode.name]: Yup.string()
      .required(`${postcode.requiredErrorMsg}`)
      .min(6, "Dit veld moet minimaal 6 karakters bevatten")
      .max(7, "Dit veld mag maximaal 7 karakters bevatten"),
    [woonplaats.name]: Yup.string()
      .required(`${woonplaats.requiredErrorMsg}`)
      .min(2, "Minimaal 2 karakters"),
  }),
  Yup.object().shape({
    [type.name]: Yup.string().required(`${type.requiredErrorMsg}`),
    [documentnummer.name]: Yup.string()
      .required(`${documentnummer.requiredErrorMsg}`)
      .max(9, "Maximaal 9 karakters")
      .min(9, "Minimaal 9 karakters")
      .matches(documentNummerRegEx, {
        message: "Dit is geen geldig documentnummer",
        excludeEmptyString: true,
      }),
    [bsn.name]: Yup.string()
      .required(`${bsn.requiredErrorMsg}`)
      .matches(bsnRegEx, "Dit is geen geldig burger service nummer"),
    [idvoorkant.name]: Yup.string().required(`${idvoorkant.requiredErrorMsg}`),
    [idachterkant.name]: Yup.string().required(
      `${idachterkant.requiredErrorMsg}`
    ),
  }),
  Yup.object().shape({
    [noodContactNaam.name]: Yup.string()
      .required(`${noodContactNaam.requiredErrorMsg}`)
      .min(2, "Minimaal 2 karakters"),
    [noodContactAchternaam.name]: Yup.string()
      .required(`${noodContactAchternaam.requiredErrorMsg}`)
      .min(2, "Minimaal 2 karakters"),
    [noodContactTelefoon.name]: Yup.string().required(
      `${noodContactTelefoon.requiredErrorMsg}`
    ),
  }),
  Yup.object().shape({
    [banknaam.name]: Yup.string()
      .required(`${banknaam.requiredErrorMsg}`)
      .min(2, "Minimaal 2 karakters"),
    [iban.name]: Yup.string()
      .required(`${iban.requiredErrorMsg}`)
      .matches(ibanRegEx, "Dit is geen geldig IBAN nummer")
      .max(18, "Een geldig Nederlands IBAN nummer bestaat uit 18 tekens")
      .min(18, "Een geldig Nederlands IBAN nummer bestaat uit 18 tekens"),
  }),
];
