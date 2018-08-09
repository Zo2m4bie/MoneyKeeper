import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

class CreateWallet extends Component {
    render () {
        return (
            <View >
                <View style={styles.containerStyle}>
                    <Text style={styles.labelSize} >
                        Wallet name
                    </Text>
                    <TextInput style={styles.inputStyle} 
                        value={ this.props.name }/>
                </View>
                <View style={styles.containerStyle}>
                    <Text style={styles.labelSize}>Currency</Text>
                    <TextInput style={styles.inputStyle} value={ this.props.currency } />
                </View>
                <TouchableOpacity style={styles.buttonStyle}>
                    <Text >
                        Create
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = {
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23
    }, 
    labelSize: {
        paddingLeft: 20,
        fontSize: 18
    },
    containerStyle: {
        height: 40,
        flexDirection: 'row',
        alignItems: 'center'
    },
    buttonStyle: {
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    }
};


const mapStateToProps = (state) => {
    const {name, currency} = state.createWalletForm;
    return {name, currency};
}

export default connect(mapStateToProps)(CreateWallet);
