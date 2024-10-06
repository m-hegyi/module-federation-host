import { Suspense, lazy } from "react";
import products from "./products/products.json";

const RemoteAdmin = lazy(() => import("testApp/Admin"));

const Admin = () => (
  <Suspense fallback="loading...">
    <RemoteAdmin data={products} />
  </Suspense>
);

export default Admin;
