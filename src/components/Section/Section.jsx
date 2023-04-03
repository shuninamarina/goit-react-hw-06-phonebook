import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <ul>
      <h1>{title}</h1>
      {children}
    </ul>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
