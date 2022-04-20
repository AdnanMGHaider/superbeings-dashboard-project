import classes from "./Welcome.module.css";

const Welcome = () => {
  return (
    <div className={classes.welcome}>
      <h2>WELCOME TO THE SUPERBEINGS DATABASE</h2>
      <h4>Search for your favourite Super Hero or Super Villian above</h4>
    </div>
  );
};

export default Welcome;
