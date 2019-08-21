import React from 'react';
import {storiesOf} from '@storybook/react';

import StaticBlock from '../components/common/StaticBlock';

const termsUrl = 'http://localhost:3000/static/terms'; 

storiesOf('StaticBlock', module)
.add('Terms.md', () => (
    <StaticBlock query={termsUrl} />
));