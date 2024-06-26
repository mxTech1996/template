"use client";
import { MainProvider } from "ecommerce-mxtech";
import { useInformation } from "./useInformation";

const Provider = ({ children }) => {
  const { dataSite } = useInformation();
  const products = dataSite.products.map((product) => {
    return {
      ...product,
      content: product.content.split(", "),
      product_type: product.product_type?.toLowerCase(),
    };
  });

  return (
    <MainProvider
      pageName={dataSite.name}
      products={products}
      address={dataSite.address}
      email={dataSite.email}
      phoneNumber={dataSite.telephone}
      locale={"en"}
      colorPrimary={"#f7dc6f"}
    >
      {children}
    </MainProvider>
  );
};

export default Provider;
