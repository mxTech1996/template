"use client";
import {
  Missions,
  ProductSection,
  References,
  Typography,
  theme,
  ListFeatures,
  Hero,
  CartContext,
  FeaturesV2
} from "ecommerce-mxtech";
import { MdOutlineArchitecture } from "react-icons/md";
import { useRouter } from "next/navigation";
import Footer from "@/components/organisms/Footer";
import Navbar from "@/components/organisms/Navbar";
import { useInformation } from "@/store/useInformation";
import { useContext } from "react";

const { useToken } = theme;

export default function Home() {
  const router = useRouter();
  const { dataSite } = useInformation();
  const { cleanCartItems } = useContext(CartContext);
  const {
    token: { colorPrimary },
  } = useToken();
  return (
    <main
      style={{
        backgroundColor: "#666666",
      }}
    >
      <Navbar />
      <Hero
        contentThirdSection={
          <Typography.Title className=" drop-shadow-sm text-yellow-300">
            The best services for you
          </Typography.Title>
        }
        variant="background-img"
        src={dataSite.image_hero}
        withSubView
        title={dataSite.subtitle}
        description={dataSite.description}
        srcSecondary={dataSite.image_hero2}
        colorText="#f7dc6f"
      />
      <div className="container mx-auto flex flex-col gap-20 my-24">
        <div className="flex flex-col">
          <Typography.Title
            level={3}
            className="font-medium mb-10 text-center text-white"
          >
            Features
          </Typography.Title>
          <ListFeatures
            stylesContainer={{
              borderColor: "#f7dc6f",
              borderWidth: 2,
              padding: 10,
              borderRadius: 10,
            }}
            src={dataSite.image_hero2}
            features={dataSite.services.map((feature) => ({
              icon: <MdOutlineArchitecture />,
              title: feature.title,

              color: "#f7dc6f",
            }))}
          />
        </div>

        <div id="products">
          {dataSite.products.length > 1 && (
            <ProductSection


              withTitles={false}
              gridColumns={2}
              variant="grid"
              productsPerPage={3}
              productItemVariant="horizontal"
              onClickImage={(id) => {
                router.push(`/product/${id}`);
              }}

              stylesItem={{
                backgroundColor: "#f7dc6f",
                borderRadius: 10,
              }}
              productVersion="1"
              carouselOptions={{
                // backgroundColor: "transparent",
                arrowColor: "blue"
              }}
            />
          )}
        </div>
        <div className="flex flex-col" id="features">

          <FeaturesV2
            features={dataSite.services.map((feature) => ({

              title: feature.title,
              description: feature.description,
              src: feature.image,
            }))}
            styleTitle={{
              color: "#f7dc6f",
            }}
            styleDescription={{
              color: "#fff",


            }}
            onClickButton={() => {
              router.push("/more-information")
            }}
            gridColumns={3}
            backgroundColor="#f7dc6f"
            borderRadius={10}
            variant="text"
            textColorDescription="#f7dc6f"
            version="v2"
          />
        </div>

        <div className="flex flex-col" id="our-services">
          <Typography.Title
            level={3}
            className="text-white font-medium mb-10 text-center"
          >
            Know Us
          </Typography.Title>
          <Missions
            data={dataSite.info}
            gridColumns={3}
            backgroundColor="#f7dc6f"
            borderRadius={10}
            variant="text"
          />
        </div>

        <div className="flex flex-col" id="references">
          <Typography.Title
            level={3}
            className=" text-white font-medium mb-10 text-center"
          >
            References
          </Typography.Title>
          <References
            carouselOptions={{
              arrowColor: "black",
              fade: true,
              autoPlay: false,
              direction: "horizontal",
            }}
            variantItem="text"
            variant="carousel"
            backgroundColor="#f7dc6f"
            borderRadius={10}
            references={dataSite.references}
            gridColumns={3}
            titleAlign="center"
          />
        </div>

      </div>

      <Footer />
    </main>
  );
}
