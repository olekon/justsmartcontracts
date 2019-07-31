import React from 'react';
import {Typography} from 'antd';

import styles from '../Globals.css';

const {Title, Paragraph, Text} = Typography;
const Terms = props => (
    <Typography className={styles.staticInfo}>
        <Title level={1}>Terms of use</Title>
        <Paragraph type='secondary'>Last updated: April 23, 2019</Paragraph>
        Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using the JustSmartContracts.dev website (the "Service") operated by its authors ("us", "we", or "our").
        Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service.
        By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.
        <Title level={2}>General information</Title>
        The website is still in its beta version. The Service is provided “as is” without any representations or warranties, express or implied.
        We are not responsible for any loss: Ethereum, JustSmartContracts.dev, and some of the underlying Javascript libraries we use are under active development. While we have thoroughly tested, there is always the possibility something unexpected happens that causes your funds to be lost.
        Always double check transaction parameters and contract address.
        <Title level={2}>Links To Other Web Sites</Title>
        Our Service may contain links to third-party web sites or services that are not owned or controlled by JustSmartContracts.dev.
        JustSmartContracts.dev has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that JustSmartContracts.dev shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.
        We strongly advise you to read the terms and conditions and privacy policies of any third-party web sites or services that you visit.
        <Title level={2}>Changes</Title>
        We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
        By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
        <Title level={2}>Licensing</Title>
        <Paragraph>MIT License Copyright © 2019 Oleg Kondrakhanov, Alexey Kuzmin</Paragraph>

        <Paragraph>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
        furnished to do so, subject to the following conditions: </Paragraph>
        <Paragraph>The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
        </Paragraph>
        <Paragraph>
            THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
        </Paragraph>
    </Typography>
);

export default Terms;