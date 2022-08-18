import React from "react";
import { Formik, Form } from "formik";
import SelectInput from "../../components/inputs/SelectInput";
import TextInput from "../../components/inputs/TextInput";
import { schemaOptions, formSchema } from "../../utils/formSchema";
import "./UploadForm.css";

export default function uploadForm() {
  let initialValues = {
    name: "",
    price: 10.0,
    category: "",
    brand: "",
    machineModel: "",
    technology: "",
    printer: "",
    material: "",
    layerHeight: 0.08,
    modelInfill: 100,
    file: null,
  };

  return (
    <div className="form-container">
      <h1 className="form-title">3D model upload</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={formSchema}
        onSubmit={(values, actions) => {
          console.log("submitting...");

          // POST function
          setTimeout(() => {
            const valuesArray = Object.entries(values);

            const formData = new FormData();
            valuesArray.forEach(([key, value]) => {
              formData.append(key, value);
            });

            //POST REQUEST
            fetch("http://localhost:3003/3DModels/", {
              method: "POST",
              body: formData,
            })
              .then((res) => {
                console.log(res);
                // return res.json();
              })
              // .then((data) => console.log(data))
              .catch((err) => console.log(err));

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
              setFieldValue("name", file.name);
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
                  name="name"
                  placeholder="Model Name"
                  type="text"
                />
                <TextInput
                  label="3D printing cost"
                  name="price"
                  placeholder="$9.99"
                  type="number"
                />
                <SelectInput label="Category" name="category">
                  <option>Select one...</option>
                  {schemaOptions.categories.map((category) => {
                    return <option>{category}</option>;
                  })}
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
                  {schemaOptions.technologies.map((technology) => {
                    return <option>{technology}</option>;
                  })}
                </SelectInput>
                <SelectInput label="3D printer" name="printerModel">
                  <option>Select one...</option>
                  {schemaOptions.printers.map((printer) => {
                    return <option>{printer}</option>;
                  })}
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
                />
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
