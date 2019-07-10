import React from 'react';
import {Tabs} from 'antd';
import ContractPropertiesView from './ContractPropertiesView.jsx';
import ContractGettersView from './ContractGettersView.jsx';
import ContractOperationsView from './ContractOperationsView.jsx';
import ContractEventsView from './ContractEventsView.jsx';

const TabPane = Tabs.TabPane;

class ContractView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.contract === undefined) {
            return <>
                First you need to add a contract in the left sider
                    </>;
        } else {
            let contract = this.props.web3Provider.getContract(
                this.props.contract.abi,
                this.props.contract.address
            );
            return (
                <>
                    <Tabs defaultActiveKey="properties">
                        <TabPane tab="Properties" key="properties" >
                            <ContractPropertiesView contract={contract} />
                        </TabPane>
                        <TabPane tab="Calls" key="getters" >
                            <ContractGettersView contract={contract} />
                        </TabPane>
                        <TabPane tab="Operations" key="operations" >
                            <ContractOperationsView contract={contract} />
                        </TabPane>
                        <TabPane tab="Events" key="events" >
                            <ContractEventsView contract={contract} />
                        </TabPane>
                    </Tabs>
                </>
            );
        }
    }
}

export default ContractView;