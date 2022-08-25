import React from "react";
import ModelDetailData from "../../layouts/modelDetailData/ModelDetailData";
import ModelDetailDisplay from "../../layouts/modelDetailDisplay/ModelDetailDisplay";
import { ErrorBoundary } from "../../components/ErrorBoundary";
import useFetchData from "../../hooks/useFetchData";
import { useParams } from "react-router-dom";
import "./ModelDetails.css";

export default function ModelDetails() {
  const params = useParams();
  const {
    data: model,
    error,
    isError,
    isLoading,
  } = useFetchData("http://localhost:3003/3DModels/" + params.id);

  return (
    <div>
      <ErrorBoundary>
        {isLoading && <h1>Loading...</h1>}
        {model && !isLoading && (
          <main className="model-container">
            <ModelDetailDisplay model={model} />
            <ModelDetailData
              name={model.name}
              url={model.modelURL}
              price={model.price}
              specs={model.modelSpecs}
            />
          </main>
        )}
        {isError && <h1>{error}</h1>}
      </ErrorBoundary>
    </div>
  );
}
