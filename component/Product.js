import React, { useState, useEffect } from 'react'
import { FlatList, Image, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'


const Product = () => {

    const [productData, setproductData] = useState([])

    const navigation = useNavigation()

    const fetchData = async () => {

        try {
            const Data = await fetch('http://10.0.2.2:5000/product/get', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const res = await Data.json()
            setproductData(res)
        } catch (err) {
            console.log('err', err)
        }

    }

    useEffect(() => {
        fetchData()

    }, [])

    const productDetail = (row) => {
        navigation.navigate('detail', { Data: row })
    }
    return (
        <View style={{
            height:'auto',
            width: '100%',
        }}>
            <View style={{
                height: 30,
                justifyContent: 'center',
            }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', letterSpacing: 2, color: 'black' }}>New Arrivals</Text>
            </View>

            <View style={{
                height: 'auto',
                width: '100%',
                flex: 1,
                flexWrap: 'wrap',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center'
            }} >

                {
                    productData?.map((item) => {
                        return (
                            <>
                                <TouchableOpacity style={{ marginBottom: 20 }} onPress={() => productDetail(item)} >
                                    <View style={{
                                        backgroundColor: '#E3E3E3',
                                        width: 150,
                                        height: 200,
                                        margin: 10,
                                        alignItems: 'center',
                                        borderRadius: 10,
                                        marginBottom: 20
                                    }} >
                                        <View style={{
                                            height: 100,
                                            width: '100%',
                                            padding: 10
                                        }}>
                                            <Image source={{ uri: `http://10.0.2.2:5000/uploads/${item?.image}` }} style={{
                                                height: '100%',
                                                width: '100%',
                                            }} />
                                        </View>
                                        <View style={{
                                            height: '50%',
                                            flexDirection: 'row',
                                            justifyContent: 'space-between'
                                        }}>
                                            <View style={{
                                                height: '70%',
                                                width: '80%',
                                                margin: 10,
                                                flexDirection: 'column',
                                                justifyContent: 'center',
                                                gap: 5
                                            }}>
                                                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{item?.productName}</Text>
                                                <Text>{item?.ProductDetail}</Text>
                                                <View style={{
                                                    height: 30,
                                                    width: '100%',
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                    justifyContent: 'space-between'
                                                }}>
                                                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{item.productPrice}</Text>
                                                    <View style={{
                                                        height: 30,
                                                        width: 30,
                                                        borderRadius: 15,
                                                        backgroundColor: 'black',
                                                        justifyContent: 'center',
                                                        alignItems: 'center'
                                                    }}>
                                                        <Text style={{ color: 'white' }}>
                                                            +
                                                        </Text >
                                                    </View>
                                                </View>
                                            </View>

                                        </View>

                                    </View>
                                </TouchableOpacity>
                            </>
                        )
                    })
                }
            </View>
        </View >
    )
}

export default Product