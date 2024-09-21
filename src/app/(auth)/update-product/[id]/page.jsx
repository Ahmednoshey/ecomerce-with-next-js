// @ts-nocheck

import Header from "componatnt/header/header";
import UpdateproductForm from "./UpdateproductForm";
export const metadata = {
  title: "Update-Product Page",
  description: "Description My Update-Product Page",
};
const Page = ({ params }) => {
  return (
    <>
      <Header Admin={true} />
      <main className="px-3">
        <UpdateproductForm productId={params.id} />
      </main>
    </>
  );
};
export default Page;
