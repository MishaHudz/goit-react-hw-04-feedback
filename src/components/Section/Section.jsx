import PropTypes from 'prop-types';

import { StatisticSection, SectionTitle } from './Section.styles';

export function Section({ children, title }) {
  return (
    <>
      <StatisticSection>
        {title && <SectionTitle>{title}</SectionTitle>}
        {children}
      </StatisticSection>
    </>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
