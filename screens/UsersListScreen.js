import { StyleSheet, Text, View, FlatList,TouchableOpacity,Image } from 'react-native'
import React,{useState} from 'react'
import { GetUserInfo,getAsyncUser,getUsersFiltered } from '../components/FirebaseOperations';
import Prompt from 'react-native-prompt-crossplatform';
import { Ionicons} from '@expo/vector-icons';
import userIcon from '../assets/user.png';
const UsersListScreen = ({navigation}) => {
    const [userInfo, setUserInfo] = useState(null);
    const [usersList, usersListSet] = useState([]);
    const [promptVisible,promptVisibleSet] = useState(false);
    const [promptText,promptTextSet] = useState('');
    const [searchTerm,searchTermSet] = useState('');
    const getViewUsers = ()=> {
        getUsersFiltered(searchTerm).then(response => {
            if(response){
                usersListSet(response);
            }
        })
    }
    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getViewUsers();
        });
    
        // Return the function to unsubscribe from the event so it gets removed on unmount
        return unsubscribe;
      }, [navigation]);
    React.useLayoutEffect(() => {
        navigation.setOptions({
          
          headerRight: () =>(
            <TouchableOpacity onPress={() => {promptVisibleSet(true)}}>
                <Text style={styles.searchBtn}>
                <Ionicons name='search' size={20} color='white' />
                </Text>
            </TouchableOpacity> 
          ),

          
        });
      })

  return (
    <View style={styles.container}>
        
        <Prompt
              title=  {"Search..."}
              inputPlaceholder={""}
              defaultValue={searchTerm}
              isVisible={promptVisible}
              onChangeText={(text) => {promptTextSet(text)}}
              onCancel={() => {promptVisibleSet(false)}}
              onSubmit={() => {searchTermSet(promptText);promptTextSet('');promptVisibleSet(false);getViewUsers()}}
            />
        <FlatList
            data={usersList}
            renderItem={({x,item,index}) => {
                return (
				
				
                    <TouchableOpacity style={styles.listItem} onPress={() => {navigation.navigate('UserInfoScreen', {user:item})}}>
					
					 <Image resizeMode="contain"
        style={styles.itemImg}
        source={userIcon}
      />
					<View style={styles.itemDesc}>
                        <Text style={styles.title}>{item.name} </Text>
                        <Text style={styles.subtitle}>{item.email} </Text>
						</View>
                    </TouchableOpacity> 
                )}}
            keyExtractor={user => user.id}
        />
    </View>
  )
}

export default UsersListScreen

const styles = StyleSheet.create({
    container: {
        fontSize: 18,
        flex: 1,
        backgroundColor: '#ebedeb',
        paddingHorizontal: 0,
        paddingTop:10,
    },
    listItem: {
		flexDirection : 'row',
        paddingVertical: 12,
        paddingHorizontal:'10%',
        borderBottomColor: '#ebedeb',
		backgroundColor: '#ffffff',
        borderBottomWidth: 2,
        width:'100%'
    },
    title: {
        fontSize: 15,
		fontWeight: "700"
    },
    subtitle: {
        fontSize: 16
        
    },
	itemImg : {
        width: '15%',
        height: 45,
		marginTop:6
    },
	itemDesc:{
        padding: 6,
        width: '80%',
        // alignItems: 'center' 
    },
    searchBtn: {
      marginHorizontal: 10,
      padding: 5
    }
})