// @ts-nocheck

import Header from "componatnt/header/header";
import AddproductForm from "./AddproductForm";

export const metadata = {
  title: "Add-Product Page",
  description: "Description My Add-Product Page",
};

const Page = () => {
  return (
    <>
      <Header Admin={true} />
      <main className="px-3">
        <AddproductForm />
      </main>
    </>
  );
};

export default Page;
