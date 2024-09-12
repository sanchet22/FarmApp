import React from "react";
import { View,Text,Button,StyleSheet } from "react-native";

const Profile =({navigation})=>{
    return(
        <View>
            <Text>Profile</Text>
            <Button 
                 title="Click here"
                 onPress={()=> alert('Button Clicked')}
            />
        </View>
    )
}
export default Profile;
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#8fcbbc'
    }
})