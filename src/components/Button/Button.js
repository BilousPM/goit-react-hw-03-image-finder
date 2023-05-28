import css from './Button.module.css';

const Btn = ({ onClick }) => {
  return (
    <button className={css.button} type="button" onClick={onClick}>
      Load more
    </button>
  );
};

export default Btn;
