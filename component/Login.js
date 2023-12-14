import React, { useState } from 'react'
import { View, Text, ImageBackground, Image, TextInput, ScrollView, Button, TouchableOpacity, Pressable } from 'react-native'
import Fontisto from 'react-native-vector-icons/Fontisto'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Foundation from 'react-native-vector-icons/Foundation'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native';
const Login = () => {


    const [userData, setuserData] = useState({
        email: '',
        password: ''
    })



    const handleChange = (TextInput, TextValue) => {


        setuserData({
            ...userData, [TextInput]: TextValue
        })
    }


    const navigation = useNavigation()


    const submitHandler = async () => {

        const { email, password } = userData

        const data = await fetch('http://10.0.2.2:5000/login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                email, password
            })
        })


        const res = await data.json()

        if (res) {
            const token = await AsyncStorage.setItem('token', res.token);
            const user = await AsyncStorage.setItem('user', res.uservalid._id)
            navigation.navigate('tab')

        }

    }

    return (
        <View style={{
            height: '100%',
            width: '100%',
            flex: 1,
            gap: 20,
        }}>
            <View style={{
                height: '50%',
                alignItems: 'center',
            }}>
                <Image source={require('../images/bk.png')} style={{
                    height: '100%',
                }} resizeMode='contain' />
            </View>
            <ScrollView  >

                <View style={{
                    height: '100%',
                    gap: 20,

                }}>
                    <View style={{
                        height: 30,
                        alignItems: 'center',
                        justifyContent: 'center',

                    }}>
                        <Text style={{ fontSize: 25, color: '#3a4a4c', fontWeight: 'bold', letterSpacing: 1 }}>Unlimited Luxurious Furniture</Text>
                    </View>

                    <View style={{
                        height: '100%',
                        width: '100%',
                        gap: 20,
                        alignItems: 'center',

                    }}>
                        <View style={{
                            width: '90%',
                            gap: 15,
                        }}>
                            <Text style={{ color: 'black' }}>Email</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 20, borderRadius: 10, backgroundColor: '#d7eaf8' }}>
                                <Fontisto name='email' size={20} style={{ marginLeft: 10 }} />
                                <TextInput placeholder='Enter Email' onChangeText={(text) => handleChange('email', text)} value={userData.email} />
                            </View>
                        </View>

                        <View style={{
                            width: '90%',
                            gap: 15
                        }}>
                            <Text style={{ color: 'black' }}>Password</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 20, borderRadius: 10, backgroundColor: '#d7eaf8', }}>
                                <MaterialIcons name='password' size={20} style={{ marginLeft: 10 }} />
                                <TextInput placeholder=' Password' style={{ width: '70%' }} onChangeText={(text) => handleChange('password', text)} />
                                <Foundation name='eye' size={20} />
                            </View>
                        </View>
                        <View style={{
                            height: 100,
                            width: '80%',
                            gap: 10
                        }}>

                            <TouchableOpacity style={{
                                height: 40,
                                backgroundColor: '#2a4d4f',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 50
                            }} onPress={() => submitHandler()} >
                                <Text style={{ textAlign: 'center', color: 'white' }} >LOGIN</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={()=>navigation.navigate('register')}>
                                <Text style={{
                                    textAlign: 'center',
                                    color: 'black',
                                    fontWeight: 'bold'
                                }}>Don't have an account ? Register </Text>

                            </TouchableOpacity>
                        </View>

                    </View>

                </View>
            </ScrollView>
        </View >
    )
}

export default Login