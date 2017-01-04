import { browserHistory } from 'react-router';

export default store => next => action => {
  const { redirect } = action;
  if(!redirect) return next(action);
  console.log(action.type);
  localStorage.clear();
  browserHistory.push(redirect);
};
