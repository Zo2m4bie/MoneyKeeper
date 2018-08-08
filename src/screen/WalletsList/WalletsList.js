import React, { Component } from 'react';
import { ListView, View } from 'react-native';
import { connect } from 'react-redux';
import WalletItem from './component/WalletItem';

class WalletList extends Component {
    renderRow(wallet) {
        return <WalletItem wallet={wallet} />
    }
    render() {
        console.log('TSTING');
        console.log(this.props.wallets);
        // console.log(this.state);
        return (
            <ListView 
                dataSource={this.props.wallets}
                renderRow={this.renderRow}/>
        );
    }
}

const mapStateToProps = state => {
    console.log(state.wallets);
    return { wallets: state.wallets};
}

export default connect(mapStateToProps, null)(WalletList);