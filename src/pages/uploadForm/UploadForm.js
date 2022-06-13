import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import "./UploadForm.css";

export default function uploadForm() {
  const validationSchema = Yup.object({
    modelName: Yup.string()
      .max(50, "Model name length muest be 50 characters or less")
      .required("Required"),
    category: Yup.string()
      .oneOf(["Spare parts", "End-use parts", "Jigs & fixtures"])
      .required(),
    brand: Yup.string().required("Required"),
    machineModel: Yup.string().required("Required"),
    printingTechnology: Yup.string().oneOf([
      "Multi Jet Fusion",
      "FDM",
      "PolyJet",
    ]),
  });

  return (
    <div>
      <h1>3D model upload</h1>
      <Formik
        initialValues={{
          modelName: "",
          category: "",
          brand: "",
          machineModel: "",
          printingTechnology: "Multi Jet Fusion",
          printerModel: "HP 3D 4200",
          material: "PA12",
          layerheight: 0.08,
          infill: 100,
        }}
      ></Formik>
    </div>
  );
}
