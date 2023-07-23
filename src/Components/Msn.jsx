import { StyleSheet, Text, View, Modal, Button, Pressable } from 'react-native'
import * as React from 'react'
import Search from './Search'
import ItemListCategory from '../Screens/ItemListCategory'

export default function Msn({
    isModalOpen,
    setIsModalOpen,
    children,
    
}) 
{
     ////visible = {keywordError}
  return (
    <>
        <Modal
            visible = {isModalOpen}
            transparent = {true}
        >
            <View style={styles.containerMsn} > 
                <View style={styles.modalMsn}> 
                   {children}
                <Text>heloooo</Text>
 
                <Button title= 'OK' onPress={() => setIsModalOpen(!setIsModalOpen)}/>

                </View>
            </View>
           
        </Modal>
    </>
  )

}

const styles = StyleSheet.create({
    containerMsn:{
        flex:1,
        justifyContent: 'center'
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    modalMsn:{
        backgroundColor:'white',
        shadowColor: '#000',
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowOpacity:0.30,
        borderRadius : 8,
        shadowRadius: 8,
        elevation: 10,
    }
})

