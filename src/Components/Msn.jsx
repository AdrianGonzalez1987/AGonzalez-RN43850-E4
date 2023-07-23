import { StyleSheet, Text, View, Modal, Button, Pressable } from 'react-native'
import * as React from 'react'
import Search from './Search'

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
            width: 0,
            height: 2
        },
        shadowOpacity:0.25,
        borderRadius : 8,
        shadowRadius: 8,
        elevation: 5,
    }
})

