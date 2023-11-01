import {Filter} from '../model/model';
import {todo, auth, sheet, theme, react} from './cards'

export const todoFilter:Filter = {
  name: 'filterProject',
  text: 'Todo',
  value: 'todoApp',
  checked: true,
  obj: todo,
};
export const authFilter:Filter = {
  name: 'filterProject',
  text: 'Auth',
  value: 'googleAuth',
  checked: true,
  obj: auth,
};
export const sheetFilter:Filter = {
  name: 'filterProject',
  text: 'sheet',
  value: 'spreadSheet',
  checked: true,
  obj: sheet,
};
export const themeFilter:Filter = {
  name: 'filterProject',
  text: 'Theme',
  value: 'vsTheme',
  checked: true,
  obj: theme,
};
export const themeReact:Filter = {
  name: 'filterProject',
  text: 'Theme',
  value: 'vsTheme',
  checked: true,
  obj: react,
};
