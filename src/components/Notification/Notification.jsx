import PropTypes from 'prop-types';

import { NotificationMassage } from './Notification.styles';

export function Notification({ message }) {
  return (
    <> {message && <NotificationMassage>{message}</NotificationMassage>} </>
  );
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
