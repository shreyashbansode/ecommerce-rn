import React, { useState } from 'react'
import { Text, View, SafeAreaView, ImageBackground, Dimensions, ScrollView, TouchableOpacity } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useRoute } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
const ProductDetail = () => {

    const navigate = useNavigation()

    const route = useRoute()

    const data = route.params.Data;

    const [Quantity, setQuantity] = useState(1)


    const userData = useSelector(data => data.userReducer)



    const DescreseQuantity = () => {
        if (Quantity <= 1) {
            return false
        }
        else {
            setQuantity(Quantity - 1)
        }
    }


    const AddtoCart = async () => {

        const Cart = { ...data, qty: Quantity, uid: userData.Data._id }
        console.log(Cart)

        const Fetch = await fetch('http://10.0.2.2:5000/cart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Cart)
        })

        const res = await Fetch.json()

        if (res) {
            navigate.navigate('tab')
        }

    }


    return (

        <SafeAreaView>
            <View style={{
                height: '100%',
                width: Dimensions.get('window').width,
                backgroundColor: 'white'
            }}>

                <View style={{
                    height: '50%',
                    width: '100%',
                }}>
                    <ImageBackground source={{ uri: `http://10.0.2.2:5000/uploads/${data?.image}` }} style={{
                        height: '100%',
                    }}>
                        <View style={{
                            height: 40,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            margin: 10
                        }}>
                            <View style={{
                                height: 30,
                                width: 30,
                                backgroundColor: 'red',
                                borderRadius: 15,
                                backgroundColor: '#d7eaf8'
                            }}>
                                <TouchableOpacity onPress={() => navigate.navigate('tab')}>
                                    <Ionicons name='chevron-back' size={30} />

                                </TouchableOpacity>
                            </View>
                            <MaterialIcons name='favorite-border' size={30} />

                        </View>
                    </ImageBackground>
                </View>
                <View style={{
                    height: '100%',
                    width: '100%',
                    flex: 1,
                    alignItems: 'center',
                }}>
                    <ScrollView style={{
                        height: '100%',
                        width: '90%',
                    }}>
                        <View style={{
                            height: 40,
                            width: '90%',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}>
                            <Text style={{
                                color: 'black',
                                fontSize: 20,
                                fontWeight: 'bold'
                            }}
                            >{data?.productName}</Text>
                            <Text style={{
                                color: 'black',
                                fontSize: 20,
                                fontWeight: 'bold'
                            }}>
                                ₹{data?.productPrice}
                            </Text>
                        </View>
                        <View style={{
                            height: 40,
                            width: '90%',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}>
                            <View style={{
                                flexDirection: 'row'
                            }}>
                                <AntDesign name='star' size={20} />
                                <AntDesign name='star' size={20} />
                                <AntDesign name='star' size={20} />
                                <AntDesign name='star' size={20} />
                                <AntDesign name='star' size={20} />
                            </View>
                            <View style={{
                                width: '25%',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}>
                                <TouchableOpacity onPress={() => setQuantity(Quantity + 1)}>
                                    <AntDesign name='pluscircleo' size={25} color='black' />
                                </TouchableOpacity>
                                <Text style={{ color: 'black' }}>{Quantity}</Text>
                                <TouchableOpacity onPress={() => DescreseQuantity()}>

                                    <AntDesign name='minuscircleo' size={25} color='black' />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{
                            marginTop: 10,
                            gap: 10
                        }}>
                            <View style={
                                {
                                    gap: 10
                                }
                            }>
                                <Text style={{
                                    color: 'black',
                                    fontSize: 20,
                                    fontWeight: 'bold'
                                }}>Description :</Text>
                                <Text style={{
                                    fontSize: 16,
                                    color: 'black',
                                }}>
                                    Food is the main source of energy and of nutrition for animals, and is usually of animal or plant origin. There are 4 (four) basic food energy sources: fats, proteins, carbohydrates and alchol. Humans are omnivorous animals that can consume both plant and animal products. We changed from gatherers to hunter gatherers. fungal origin and contains essential nutrients ...
                                </Text>
                            </View>
                            <View style={{
                                height: 30,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                backgroundColor: '#EE675C',
                                borderRadius: 10
                            }} >
                                <View style={{
                                    width: '30%',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-evenly'
                                }}>
                                    <EvilIcons name='location' size={20} color='black' />
                                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Satara</Text>
                                </View>
                                <View style={{
                                    width: '50%',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-evenly'
                                }}>
                                    <MaterialCommunityIcons name='van-utility' size={20} color='black' />
                                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Free Delivery</Text>
                                </View>
                            </View>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                marginBottom: 20
                            }}>
                                <TouchableOpacity style={{
                                    height: 40,
                                    width: '100%',
                                    backgroundColor: '#d7eaf8',
                                    borderRadius: 10
                                }}
                                    onPress={AddtoCart}
                                >
                                    <View style={{
                                        height: '100%',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                                        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20, marginRight: 10 }}>BUY NOW</Text>
                                        <EvilIcons name='cart' size={25} color='black' />

                                    </View>
                                </TouchableOpacity>

                            </View>


                        </View>
                    </ScrollView>

                </View>
            </View>

        </SafeAreaView>
    )
}

export default ProductDetail