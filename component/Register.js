import React, { useState } from 'react'
import { View, Text, ImageBackground, Image, TextInput, ScrollView, Button, TouchableOpacity, Pressable, Alert } from 'react-native'
import Fontisto from 'react-native-vector-icons/Fontisto'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Foundation from 'react-native-vector-icons/Foundation'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'

const Register = () => {

    const navigate = useNavigation()

    const [userData, setuserData] = useState({
        userName: '',
        mobNumber: '',
        email: '',
        password: ''
    })


    const [showPassword, setShowPassword] = useState(true)


    const handleChange = (TextInput, TextValue) => {

        setuserData({
            ...userData, [TextInput]: TextValue
        })

    }

    const submitHandler = async () => {

        const { userName, mobNumber, email, password } = userData;

        const data = await fetch('http://10.0.2.2:5000', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userName, mobNumber, email, password
            })
        })

        const res = await data.json()

        if (res) {
            navigate.navigate('login')
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
                    gap: 20
                }}>
                    <View style={{
                        height: 40,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Text style={{ fontSize: 25, color: '#3a4a4c', fontWeight: 'bold', letterSpacing: 1 }}>Sign Up And Start Shopping</Text>
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
                            marginTop: 5
                        }}>
                            <Text style={{ color: 'black' }}>Username</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 20, borderRadius: 10, backgroundColor: '#d7eaf8' }}>
                                <AntDesign name='user' size={20} style={{ marginLeft: 10 }} />
                                <TextInput placeholder='Username' onChangeText={(text) => handleChange('userName', text)} value={userData.userName} />
                            </View>
                        </View>
                        <View style={{

                            width: '90%',
                            gap: 15,
                        }}>
                            <Text style={{ color: 'black' }}>Phone Number</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 20, borderRadius: 10, backgroundColor: '#d7eaf8' }}>
                                <MaterialCommunityIcons name='cellphone' size={20} style={{ marginLeft: 10 }} />
                                <TextInput placeholder='Mobile number' onChangeText={(text) => handleChange('mobNumber', text)} inputMode='numeric' value={userData.mobNumber} maxLength={10} />
                            </View>
                        </View>
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
                                <TextInput placeholder=' Password' style={{ width: '70%' }} onChangeText={(text) => handleChange('password', text)} value={userData.password} secureTextEntry={showPassword} />
                                <Foundation name='eye' size={20} onPress={() => setShowPassword(!showPassword)} />
                            </View>
                        </View>
                        <View style={{
                            height: 50,
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
                                <Text style={{ textAlign: 'center', color: 'white' }} >Register</Text>
                            </TouchableOpacity>

                        </View>

                    </View>

                </View>
            </ScrollView>
        </View >
    )
}

export default Register;