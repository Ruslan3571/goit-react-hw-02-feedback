import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export function Statistics({ good, neutral, bad, total, positive }) {
  return (
    <div>
      <div className={s.blockStatistics}>
        <ul className={s.titleStatistics}>
          <li>Good:</li>
          <li>Neutral:</li>
          <li>Bad:</li>
        </ul>
        <ul className={s.feedBack}>
          <li>{good}</li>
          <li>{neutral}</li>
          <li>{bad}</li>
        </ul>
      </div>
      <div className={s.wrapperStatistics}>
        <ul className={s.titleStatistics}>
          <li>Total:</li>
          <li>Positive feedback:</li>
        </ul>
        <ul className={s.stats}>
          <li>{total}</li>
          <li>{positive + '%'}</li>
        </ul>
      </div>
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positive: PropTypes.number,
};
