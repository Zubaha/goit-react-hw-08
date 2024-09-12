import css from "./HomePage.module.css";

function HomePage() {
  return (
    <div>
      <h1 className={css.title}>Save Your Contacts Easily and Securely!</h1>
      <p className={css.text}>
        Our platform helps you organize, sync, and store all your important
        contacts in one place. Always accessible - always protected.
      </p>
    </div>
  );
}

export default HomePage;
