const apiData = [
  {
    id: 1,
    name: "Sample model 1",
    price: 25.45,
    uploadedOn: new Date(2021, 10, 25).toDateString(),
    specs: [
      {
        title: "Category",
        value: "Spare parts",
      },
      {
        title: "Brand and machine model",
        value: "Flex - Raspberry Pie",
      },
      {
        title: "Material",
        value: "HP 3D PA12",
      },
      {
        title: "3D printer",
        value: "HP 3D 4200",
      },
      {
        title: "3D printing technology",
        value: "Multi Jet Fusion",
      },
      {
        title: "Layer height",
        value: "0.08 mm",
      },
      {
        title: "Model infill",
        value: "100%",
      },
    ],
    modelUrl: "./sample_model1.stl",
  },
  {
    id: 2,
    name: "Sample model 2",
    price: 1.98,
    uploadedOn: new Date(2022, 3, 12).toDateString(),
    specs: [
      {
        title: "Category",
        value: "End-use parts",
      },
      {
        title: "Brand and machine model",
        value: "Big'Ol machine",
      },
      {
        title: "Material",
        value: "PLA",
      },
      {
        title: "3D printer",
        value: "Ultimaker S5",
      },
      {
        title: "3D printing technology",
        value: "FDM",
      },
      {
        title: "Layer height",
        value: "0.20 mm",
      },
      {
        title: "Model infill",
        value: "20%",
      },
    ],
    modelUrl: "./sample_model2.stl",
  },
];

export default apiData;
