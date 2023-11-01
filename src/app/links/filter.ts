import {Filter} from '../model/model';
import {todo, auth, sheet, theme, react} from './cards'

export const todoFilter:Filter = {
  name: 'filterProject',
  text: 'Crud App',
  value: 'todoApp',
  checked: true,
  obj: todo,
};
export const authFilter:Filter = {
  name: 'filterProject',
  text: 'Google Auth',
  value: 'googleAuth',
  checked: true,
  obj: auth,
};
export const sheetFilter:Filter = {
  name: 'filterProject',
  text: 'Sheet Driven',
  value: 'spreadSheet',
  checked: true,
  obj: sheet,
};
export const themeFilter:Filter = {
  name: 'filterProject',
  text: 'VS Color Theme',
  value: 'vsTheme',
  checked: true,
  obj: theme,
};
export const reactFilter:Filter = {
  name: 'filterProject',
  text: 'React UI Theme',
  value: 'vsTheme',
  checked: true,
  obj: react,
};
