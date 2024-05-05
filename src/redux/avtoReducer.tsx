type Action = { type: string, loginName: string };

const initialState="Вы не авторизованы. Перейдите на страницу авторизации";

const avtoReducer = (state=initialState, action: Action) => {
  if (action.type === 'A_IN') {
    return "Вы авторизованы как " + action.loginName;
  } else if (action.type === 'A_OUT') {
    return "Вы не авторизованы. Перейдите на страницу авторизации";
  }
  return state;
};

export default avtoReducer;