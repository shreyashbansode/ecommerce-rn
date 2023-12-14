import React, { useEffect, useState } from 'react'
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
const Order = () => {

    const navigation = useNavigation()

    const [orderData, setorderData] = useState()
    console.log(orderData)

    const Data = async () => {

        const fetchData = await fetch('http://10.0.2.2:5000/order/get', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const res = await fetchData.json()
        setorderData(res[0].product)
    }


    useEffect(() => {
        Data()
    }, [])

    return (
        <View style={{
            height: '100%',
            width: '100%',
            alignItems: 'center'
        }}>
            <View style={{
                height: '100%',
                width: '90%',
            }}>
                <View style={{
                    height: '8%',
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <TouchableOpacity onPress={() => navigation.navigate('profile')}>
                        <View style={{
                            height: 25,
                            width: 25,
                            backgroundColor: '#d7eaf8',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 25,
                            marginRight: 20
                        }}>
                            <Ionicons name='chevron-back' color='black' />
                        </View>
                    </TouchableOpacity>
                    <Text style={{
                        fontSize: 22,
                        color: 'black',
                        fontWeight: 'bold'
                    }}>Order</Text>
                </View>
                <ScrollView>


                    <View style={{
                        gap: 20,
                        marginVertical: 20
                    }}>

                        {
                            orderData?.map((row) => {
                                return (

                                    <View style={{
                                        height: 100,
                                        width: '100%',
                                        backgroundColor: 'white',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        borderRadius: 10

                                    }}>
                                        <View style={{
                                            height: '100%',
                                            width: '40%',
                                        }}>
                                            <Image source={{ uri: `http://10.0.2.2:5000/uploads/${row?.image}` }} style={{ height: '100%', width: '100%', borderBottomLeftRadius: 10, borderTopLeftRadius: 10 }} />
                                        </View>
                                        <View style={{
                                            width: '50%',
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                            alignItems: 'center'
                                        }}>
                                            <View style={{
                                                margin: 10,
                                                gap: 10
                                            }}>
                                                <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold' }}>
                                                    {row?.productName}
                                                </Text>
                                                <Text style={{ color: 'black' }}>{row?.ProductDetail}</Text>
                                                <Text style={{ color: 'black' }}>₹{row?.productPrice}</Text>
                                            </View>
                                            <View style={{
                                                alignItems: 'center',
                                                gap: 10
                                            }}>
                                                <View style={{
                                                    width: 50,
                                                    backgroundColor: 'grey',
                                                    borderRadius: 10
                                                }}>
                                                    <Text style={{ textAlign: 'center', color: 'white' }}>Paid</Text>
                                                </View>
                                                <AntDesign name='delete' color='red' size={20} />
                                            </View>
                                        </View>
                                    </View>

                                )
                            })
                        }

                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

export default Order