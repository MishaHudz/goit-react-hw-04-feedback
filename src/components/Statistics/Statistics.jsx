import PropTypes from 'prop-types';

import {
  StatisticTitel,
  StatisticList,
  StatisticItem,
} from './Statistics.styles';

export function Statistics({
  good,
  neutral,
  bad,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) {
  return (
    <>
      <StatisticTitel>Statistics:</StatisticTitel>

      <StatisticList>
        <StatisticItem>Good: {good}</StatisticItem>
        <StatisticItem>Neutral: {neutral}</StatisticItem>
        <StatisticItem>Bad: {bad}</StatisticItem>
        <StatisticItem>Total: {countTotalFeedback()}</StatisticItem>
        <StatisticItem>
          Positive feedback:
          {countPositiveFeedbackPercentage()
            ? countPositiveFeedbackPercentage()
            : 0}
          %
        </StatisticItem>
      </StatisticList>
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  countTotalFeedback: PropTypes.func.isRequired,
  countPositiveFeedbackPercentage: PropTypes.func.isRequired,
};
