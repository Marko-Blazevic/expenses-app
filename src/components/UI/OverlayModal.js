import classes from './ErrorModal.module.css';
import Button from './Button';
import Card from './Card';

const OverlayModal = (props) => {
  return (
    <Card className={classes.modal}>
      <div>
        <header className={classes.header}>
          <h2>There was a mistake</h2>
        </header>
        <div className={classes.message}>
          <p>Please fill in all fields</p>
        </div>
        <footer className={classes.footer}>
          <Button onClick={props.onClick}>Ok</Button>
        </footer>
      </div>
    </Card>
  );
};

export default OverlayModal;
