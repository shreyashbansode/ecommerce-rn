import React, { useEffect, useState } from 'react'
import { Text, View, ScrollView, SafeAreaView, TouchableOpacity, TextInput, Dimensions } from 'react-native'
import Foundation from 'react-native-vector-icons/Foundation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import { SliderBox } from "react-native-image-slider-box";


const Header = () => {

    const navigate = useNavigation()

    const image = [

        require('./../images/fn2.jpg'),
        require('./../images/fn3.jpg'),
        require('./../images/fn4.jpg'),
    ]


    const Width = Dimensions.get('window').width

    const [cartData, setcartData] = useState([]);


    const Data = async () => {

        try {
            const fetchData = await fetch('http://10.0.2.2:5000/cart/get', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const res = await fetchData.json()
            setcartData(res)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {

        Data()
    }, [cartData])


    return (
        <SafeAreaView>

            <View style={{
                width: '100%',
            }} >
                <View style={{
                    height: 50,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'

                }}>
                    <Text style={{ fontSize: 20, color: 'black' }}>Ecart</Text>
                    <TouchableOpacity onPress={() =>navigate.navigate('cart')}>
                        <View style={{
                            height: 20,
                            width: 20,
                            backgroundColor: '#183a3a',
                            borderRadius: 50,
                            alignItems: 'center'
                        }}>
                            <Text style={{
                                color: 'white'
                            }}>{cartData?.length}</Text>
                        </View>
                        <Foundation name='shopping-cart' size={25} />
                    </TouchableOpacity>
                </View>
                <View style={{
                    height: 120,
                    width: '100%',
                    justifyContent: 'center'
                }}>
                    <Text style={{
                        fontSize: 30,
                        letterSpacing: 2,
                        fontWeight: 'bold',
                        color: 'black'
                    }}>Find The Most </Text>
                    <Text
                        style={{
                            fontSize: 30,
                            letterSpacing: 2,
                            fontWeight: 'bold',
                            color: '#183a3a'
                        }}
                    >Luxurious Furniture</Text>
                </View>
                <View style={{
                    height: 60,
                }}>
                    <View
                        style={{
                            height: 40,
                            backgroundColor: 'red',
                            flexDirection: 'row',
                            alignItems: 'center',
                            borderRadius: 10,
                            backgroundColor: '#d7eaf8'
                        }}
                    >

                        <View style={{
                            width: '10%',
                            margin: 10
                        }}>
                            <Ionicons name='search-outline' size={25} />
                        </View>
                        <TextInput placeholder='search' />
                    </View>
                </View>
                <View style={{
                    height: 200,
                    width: '100%'
                }}>


                    <SliderBox
                        images={image}
                        dotColor='black'
                        autoplay={true}
                        autoplayInterval={3000}
                        inactiveDotColor='white'
                        circleLoop={true}

                    >
                    </SliderBox>
                </View>

            </View>

        </SafeAreaView >
    )
}

export default Header