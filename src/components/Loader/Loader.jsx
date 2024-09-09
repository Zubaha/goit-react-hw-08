import { InfinitySpin } from "react-loader-spinner";
import css from "./Loader.module.css";

function Loader() {
  return (
    <div className={css.container}>
      <InfinitySpin
        visible={true}
        width="200"
        color="#4fa94d"
        ariaLabel="infinity-spin-loading"
        wrapperStyle={{}}
        wrapperClass={css.loader}
      />
    </div>
  );
}

export default Loader;
