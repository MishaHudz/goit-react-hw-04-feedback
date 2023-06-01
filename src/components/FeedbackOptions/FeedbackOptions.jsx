import PropTypes from 'prop-types';

import { ButtonList, Button } from './FeedbackOptions.styles';

export function FeedbackOptions({ increment }) {
  return (
    <>
      <ButtonList>
        <li>
          <Button onClick={() => increment('good')}>Good</Button>
        </li>
        <li>
          <Button onClick={() => increment('neutral')}>Neutral</Button>
        </li>
        <li>
          <Button onClick={() => increment('bad')}>Bad</Button>
        </li>
      </ButtonList>
    </>
  );
}

FeedbackOptions.propTypes = {
  increment: PropTypes.func.isRequired,
};
