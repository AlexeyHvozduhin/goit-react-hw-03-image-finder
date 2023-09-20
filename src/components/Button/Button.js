import { CgSearch } from 'react-icons/cg';

export const Button = ({ addElements }) => {
  return (
    <button type="button" className="Button" onClick={addElements}>
      Load more
    </button>
  );
};
