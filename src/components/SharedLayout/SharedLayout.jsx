import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../AppBar/AppBar";
import Loader from "../Loader/Loader";
import css from "./SharedLayout.module.css";

function SharedLayout() {
  return (
    <div className={css.wrapper}>
      <Header />
      <main className={css.main}>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
}

export default SharedLayout;
