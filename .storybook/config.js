import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import {Row, Col} from 'antd';

const req = require.context('../src/stories', true);

addDecorator(story => (
    <Row><Col span={12}>{story()}</Col></Row>
));

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);