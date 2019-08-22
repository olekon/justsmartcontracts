import {action, decorate} from '@storybook/addon-actions';

const fromJsonDecorator = decorate([args => args.map(arg => JSON.stringify(arg, null, '\t'))]);

/**
 * Returns storybook action that shows extended response object 
 * @param {*} name Action name
 */
export const actionExtJson = name => fromJsonDecorator.action(name);