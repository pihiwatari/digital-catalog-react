import * as Yup from "yup";

export const schemaOptions = {
  categories: [
    "Spare parts",
    "End-use parts",
    "Jigs & fixtures",
    "Functional prototype",
    "Concept model",
  ],
  technologies: ["Multi Jet Fusion", "FDM / FFF", "PolyJet", "SLA"],
  printers: [
    "HP 3D 4200",
    "Fortus 400mc",
    "Ultimaker S5",
    "Formlabs Form 2",
    "J750",
    "Objet500",
  ],
};

export const formSchema = Yup.object().shape({
  name: Yup.string()
    .max(50, "Model name length muest be 50 characters or less")
    .required("Required"),
  category: Yup.string().oneOf(schemaOptions.categories).required(),
  brand: Yup.string().required("Required"),
  machineModel: Yup.string().required("Required"),
  technology: Yup.string().oneOf(schemaOptions.technologies),
  printer: Yup.string().oneOf(schemaOptions.printers),
  material: Yup.string().required(),
  layerHeight: Yup.number(),
  infill: Yup.number(),
  file: Yup.mixed().required(),
});
