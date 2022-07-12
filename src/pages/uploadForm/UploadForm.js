import React from "react";
import { Formik, Form } from "formik";
// import * as Yup from "yup";
// import SelectInput from "../../components/inputs/SelectInput";
import TextInput from "../../components/inputs/TextInput";
import "./UploadForm.css";

// const formSchema = Yup.object().shape({
//   modelName: Yup.string()
//     .max(50, "Model name length muest be 50 characters or less")
//     .required("Required"),
//   category: Yup.string()
//     .oneOf(["Spare parts", "End-use parts", "Jigs & fixtures"])
//     .required(),
//   brand: Yup.string().required("Required"),
//   machineModel: Yup.string().required("Required"),
//   printingTechnology: Yup.string().oneOf([
//     "Multi Jet Fusion",
//     "FDM",
//     "PolyJet",
//   ]),
//   printerModel: Yup.string().oneOf([
//     "HP 3D 4200",
//     "Ultimaker S5",
//     "Objet J750",
//   ]),
//   material: Yup.string().required(),
//   layerHeight: Yup.number(),
//   infill: Yup.number(),
//   file: Yup.mixed().required(),
// });

export default function uploadForm() {
  let initialValues = {
    modelName: "",
    // category: "",
    // brand: "",
    // machineModel: "",
    // printingTechnology: "",
    // printerModel: "",
    // material: "",
    // layerHeight: 0.08,
    // infill: 0,
    file: null,
  };

  return (
    <div className="form-container">
      <h1 className="form-title">3D model upload</h1>
      <Formik
        initialValues={initialValues}
        // validationSchema={formSchema}
        onSubmit={(values, actions) => {
          console.log("submitting...");
          setTimeout(() => {
            // actions.setValues({ file: "" });
            alert(
              JSON.stringify(
                {
                  ...values,
                  file: {
                    name: values.file.name,
                    size: values.file.size,
                    type: values.file.type,
                  },
                },
                null,
                2
              )
            );
            actions.setSubmitting(false);
            actions.resetForm();
          }, 1000);
        }}
      >
        {({ setFieldValue }) => {
          const _onFileChange = (e) => {
            /**
             * Read user's uploaded file, and fill the upload form fields with the
             * file's data.
             * @param {event} e onChange event object
             */
            let file = e.target.files[0];
            if (file) {
              setFieldValue("file", file);
              setFieldValue("modelName", file.name);
            }
          };

          return (
            <Form className="form">
              <div className="form-grid">
                <input
                  className="file-input"
                  id="file"
                  name="file"
                  type="file"
                  label="Upload file"
                  accept=".stl, .3mf"
                  onChange={(event) => _onFileChange(event)}
                />
                <TextInput
                  label="Model Name"
                  name="modelName"
                  placeholder="Model Name"
                  type="text"
                />
                {/* <SelectInput label="Category" name="category">
                  <option>Select one...</option>
                  <option>Spare parts</option>
                  <option>End-use parts</option>
                  <option>Jigs & fixtures</option>
                </SelectInput>
                <TextInput
                  label="Machine Brand"
                  name="brand"
                  placeholder="N/A if not a spare part"
                  type="text"
                />
                <TextInput
                  label="Machine model"
                  name="machineModel"
                  placeholder="N/A if not a spare part"
                  type="text"
                />
                <SelectInput
                  label="3D printing technology"
                  name="printingTechnology"
                >
                  <option>Select one...</option>
                  <option>Multi Jet Fusion</option>
                  <option>FDM</option>
                  <option>Poly Jet</option>
                </SelectInput>
                <SelectInput label="3D printer" name="printerModel">
                  <option>Select one...</option>
                  <option>HP 3D 4200</option>
                  <option>Ultimaker S5</option>
                  <option>Objet J750</option>
                </SelectInput>
                <TextInput
                  label="Material"
                  name="material"
                  placeholder="E.g. Nylon-12"
                  type="text"
                />
                <TextInput
                  label="Layer height"
                  name="layerHeight"
                  placeholder="0.08"
                  type="number"
                />
                <TextInput
                  label="Printed part infill"
                  name="infill"
                  placeholder="E.g. 100%"
                  type="number"
                  step=".01"
                /> */}
              </div>
              <button className="form-submit" type="submit">
                Upload Model
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
