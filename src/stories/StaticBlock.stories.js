import React from 'react';
import {storiesOf} from '@storybook/react';

import StaticBlock from '../components/common/StaticBlock';

const termsUrl = 'https://justsmartcontracts.dev/jscapi/static/terms';

storiesOf('StaticBlock', module)
    .add('Terms.md', () => (
        <StaticBlock query={termsUrl} />
    ));