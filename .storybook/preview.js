import React from 'react';
import { addDecorator } from '@storybook/react';
import {Row, Col} from 'antd';

addDecorator(story => (
    <Row><Col span={12}>{story()}</Col></Row>
));
