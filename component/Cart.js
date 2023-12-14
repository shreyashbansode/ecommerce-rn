import React, { useState, useEffect } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
import RazorpayCheckout from 'react-native-razorpay';
import { useSelector } from 'react-redux'
import EvilIcons from 'react-native-vector-icons'

const Cart = () => {

    const [cartData, setcartData] = useState([])


    const [paymentId, setpaymentId] = useState()

    const userData = useSelector((data) => data.userReducer)

    const Data = async () => {
        const res = await fetch('http://10.0.2.2:5000/cart/get', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await res.json()
        setcartData(data)
    }


    useEffect(() => {
        Data()
    }, [cartData])


    const CheckoutHandler = () => {

        const Checkout = () => {
            var options = {
                description: 'Credits towards consultation',
                image: 'https://i.imgur.com/3g7nmJC.jpg',
                currency: 'INR',
                key: 'rzp_test_JfmPXbBKUfQT6x',
                amount: `${totalPrice}00`,
                name: 'E-cart',
                order_id: '',//Replace this with an order_id created using Orders API.
                prefill: {
                    email: 'gaurav.kumar@example.com',
                    contact: '9191919191',
                    name: 'Gaurav Kumar'
                },
                theme: { color: '#000000' }
            }
            RazorpayCheckout.open(options).then((data) => {
                // handle success
                setpaymentId(data.razorpay_payment_id)

            }).catch((error) => {
                // handle failure
                alert(`Error: ${error.code} | ${error.description}`);
            });
        }

        Checkout()


        if (paymentId) {

            const orderData = {
                userInfo: {
                    uid: userData.Data._id,
                    userName: userData.Data.userName,
                    mobNumber: userData.Data.mobNumber,
                    email: userData.Data.email,
                    Address: userData.Data.Address
                },
                product: cartData,
                totalAmount: totalPrice,
                paymentId: paymentId
            }

            const order = async () => {
                try {
                    const data = await fetch('http://10.0.2.2:5000/order', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(orderData)
                    })

                    const res = await data.json()
                    console.log(res, 'ressss')

                    if (res) {
                        const data = await fetch('http://10.0.2.2:5000/cart/delete', {
                            method: 'DELETE',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                        })

                        const res = await data.json()
                    }



                } catch (err) {
                    console.log(err)
                }
            }
            order()
        }

    }

    const totalPrice = cartData?.reduce((currenValue, nextValue) => {
        return currenValue + nextValue?.productPrice
    }, 0)


    const navigation = useNavigation()

    return (
        <View style={{
            height: "100%",
            width: '100%',
            alignItems: 'center',

        }}>

            {
                cartData == [] ?
                    <View>
                        <EvilIcons name='cart' size={50} />
                    </View> : <View style={{
                        height: "90%",
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
                            }}>Cart</Text>
                        </View>
                        <ScrollView style={{
                            height: 'auto'
                        }}>
                            <View style={{
                                height: 'auto',
                                gap: 20
                            }}>


                                {
                                    cartData?.map((row) => {
                                        return (

                                            <>

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
                                                        <Image source={require('../images/fn1.jpg')} style={{ height: '100%', width: '100%', borderBottomLeftRadius: 10, borderTopLeftRadius: 10 }} />
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
                                                            <Text style={{ color: 'black' }}>{row?.productName}</Text>
                                                            <Text style={{ color: 'black' }}>₹ {row?.productPrice}</Text>
                                                        </View>
                                                        <View>
                                                            <AntDesign name='delete' color='red' size={20} />
                                                        </View>
                                                    </View>
                                                </View>

                                            </>
                                        )
                                    })
                                }

                            </View>

                        </ScrollView>
                        <View style={{
                            height: 100,
                            marginTop: 20,
                            gap: 10
                        }}>
                            <View>
                                <Text style={{
                                    color: 'black',
                                    fontSize: 20,
                                    fontWeight: 'bold'
                                }}>Order Info</Text>
                            </View>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between'
                            }}>
                                <Text style={{ color: 'black' }}>Subtotal</Text>
                                <Text style={{ color: 'black' }}>₹ {totalPrice}</Text>
                            </View>

                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between'
                            }}>
                                <Text style={{ color: 'black' }}>
                                    Total
                                </Text>
                                <Text style={{ color: 'black' }}>
                                    ₹ {totalPrice}
                                </Text>
                            </View>
                            <View style={{
                                alignItems: 'center'
                            }}>
                                <TouchableOpacity style={{
                                    height: 50,
                                    width: '80%',
                                    backgroundColor: '#d7eaf8',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: 10
                                }} onPress={() => CheckoutHandler()}>
                                    <Text style={{ color: 'black' }}>
                                        Checkout ₹ {totalPrice}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>

            }

        </View>
    )
}

export default Cart