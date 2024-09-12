import React from "react";
import { View,Text,Button,StyleSheet } from "react-native";

const Post =({navigation})=>{
    return(
        <View>
            <Text>Post</Text>
            <Button 
                 title="Click here"
                 onPress={()=> alert('Button Clicked')}
            />
        </View>
    )
}
export default Post;
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#8fcbbc'
    }
})