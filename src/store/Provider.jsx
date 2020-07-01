import React from 'react';
import PropTypes from 'prop-types';

import providers from './providers';

const ContextProviderComposer = ({contextProviders, children}) => (
  contextProviders.reduceRight((children, parent) => React.cloneElement(parent, { children }), children)
);

ContextProviderComposer.propTypes = {
  contextProviders: PropTypes.arrayOf(
    PropTypes.element,
  ).isRequired,
  children: PropTypes.node.isRequired,
};

export default props => {
  return (
    <ContextProviderComposer contextProviders={providers}>
      {props.children}
    </ContextProviderComposer>
  );
}