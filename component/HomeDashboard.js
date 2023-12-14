import React, { useState, useEffect } from 'react'
import { Text, View, SafeAreaView, ScrollView } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch } from 'react-redux'
import { user } from './Redux/action'
import Header from './Header'
import Product from './Product'


const HomeDashboard = () => {

    const dispatch = useDispatch();

    const [userData, setuserData] = useState();

    const Data = async () => {

        const token = await AsyncStorage.getItem('token')

        const fetchData = await fetch('http://10.0.2.2:5000/valid', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorazation: token
            }

        })

        const res = await fetchData.json();
        // console.log(res.root[0])
        dispatch(user(res.root[0]))

    }

    useEffect(() => {
        Data()
    }, [])
    return (

        <ScrollView
        showsVerticalScrollIndicator={false}
        >
            <SafeAreaView style={{
                height: '100%',
                width: '100%',
                alignItems: 'center'
            }}>

                <View style={{
                    width: '90%',
                    gap: 10
                }}>
                    <Header />
                    <Product />
                </View>


            </SafeAreaView>
        </ScrollView >

    )
}

export default HomeDashboard