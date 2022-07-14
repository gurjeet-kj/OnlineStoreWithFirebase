import { StyleSheet, Text, View,TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Logo from '../assets/product.png';
//import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
const ProductListItem = ({ item, onPress, backgroundColor }) => {

    

  return (
    <TouchableOpacity onPress={onPress} style={[styles.item]}>
         <Image resizeMode="contain"
        style={styles.itemImg}
        source={Logo}
      />
        <View style={styles.itemDesc}>
            <Text style={[styles.title]}>{item.name}</Text>
			<Text style={[styles.price]}>{'$ ' + (parseFloat(item.price).toFixed(2)).toString()}</Text>
            <Text >{item.description.substring(0, 81)+'...'}</Text>
            

        </View>
    </TouchableOpacity>
  )
}

export default ProductListItem

const styles = StyleSheet.create({

    item:{
        flexDirection : 'row',
        paddingHorizontal: 10,
        paddingVertical:10,
        backgroundColor: 'white',
        margin: 2,
        borderRadius: 8
    },
    itemImg : {
        width: '20%',
        height: 45,
		marginTop:15
    },
    itemDesc:{
        padding: 4,
        width: '80%',
        // alignItems: 'center' 
    },
    title : {
        fontSize: 15,
        fontWeight: "700"
    },
    lastRow : {
        flexDirection : 'row',
        justifyContent: 'space-between'
    },
    category:{
        flexDirection: 'column',
    },  
    price : {
        fontSize: 15,
        flexDirection: 'column',
        textAlign: 'left',
    },
})