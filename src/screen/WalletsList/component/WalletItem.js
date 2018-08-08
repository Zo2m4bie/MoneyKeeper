import React, {Component} from 'react';
import { Text } from 'react-native';

class WalletItem extends Component {
    render() {
        const name = this.props.wallet.name;

        return (
            <View> 
                <Text>
                    {name}
                </Text>
            </View>
        );
    }
}

export default WalletItem;