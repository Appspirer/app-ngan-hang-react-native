import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import Colors from "../../themes/Colors";
import Icons from "../../themes/Icons";
import Images from "../../themes/Images";
import styles from "./styles";

const dataCard = [
    {
        id: 0,
        img: Images.card1
    },
    {
        id: 1,
        img: Images.card2
    },
]

const dataPerson = [
    {
        id: 0,
        name: "Josie Maran",
        img: Images.avatar1
    },
    {
        id: 1,
        name: "Ricardo Joseph",
        img: Images.avatar2
    },
    {
        id: 2,
        name: "Liz Hurtley",
        img: Images.avatar3
    }
]

const dataTime = [
    {
        id: 0,
        name: "Day"
    },
    {
        id: 1,
        name: "Week"
    },
    {
        id: 2,
        name: "Month"
    },
    {
        id: 3,
        name: "Year"
    },
]

export default function Wallet() {

    const [timeSelected, setTimeSelected] = useState(0)

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={styles.top_container}>
                <View style={styles.top_left}>
                    <Text style={styles.title}>Wallet</Text>
                    <Text style={styles.for}>for <Text style={styles.platinum}>Axess Platinum </Text>Card</Text>
                </View>
                <TouchableOpacity>
                    {Icons.Icons({ name: "add_card", height: 22, width: 34 })}
                </TouchableOpacity>
            </View>
            <View>
                <ScrollView horizontal={true} style={styles.card_container} showsHorizontalScrollIndicator={false}>
                    {dataCard.map((item, index) => {
                        return (
                            <Image key={index} source={item.img} style={{ marginRight: index === dataCard.length - 1 ? 32 : 16 }} />
                        )
                    })}
                </ScrollView>
            </View>
            <View style={styles.amount_container}>
                <Text style={styles.amount}>Remaining Amount</Text>
                <Text style={styles.amount}>%38</Text>
            </View>
            <View style={styles.bar_red}>
                <View style={styles.bar_green} />
            </View>
            <View style={styles.status}>
                <View style={styles.status_block}>
                    <View style={[styles.block, { backgroundColor: Colors.green_10 }]}>
                        {Icons.Icons({ name: "arrow_up_green", height: 15, width: 22 })}
                    </View>
                    <View style={styles.right_block}>
                        <Text style={styles.text_block}>Income</Text>
                        <Text style={styles.price_block}>$3,214</Text>
                    </View>
                </View>
                <View style={styles.status_block}>
                    <View style={[styles.block, { backgroundColor: Colors.red_10 }]}>
                        {Icons.Icons({ name: "arrow_down_red", height: 15, width: 22 })}
                    </View>
                    <View style={styles.right_block}>
                        <Text style={styles.text_block}>Expense</Text>
                        <Text style={styles.price_block}>$1,640</Text>
                    </View>
                </View>
            </View>
            <Text style={[styles.title, { marginTop: 30, marginHorizontal: 16, marginBottom: 20 }]}>Send Money to</Text>
            <View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.person_list}>
                    <TouchableOpacity style={[styles.person_container, { borderStyle: 'dashed', borderWidth: 1, borderColor: Colors.border1 }]}>
                        {Icons.Icons({ name: 'plus_person', height: 20, width: 20 })}
                        <Text style={styles.person_text}>Add new contact</Text>
                    </TouchableOpacity>
                    {dataPerson.map((item, index) => {
                        return (
                            <TouchableOpacity key={index} style={[styles.person_container, { paddingTop: 20, marginRight: index === dataPerson.length - 1 ? 16 : 0 }]}>
                                <Image source={item.img} style={styles.avatar} />
                                <Text style={styles.person_text}>{item.name}</Text>
                            </TouchableOpacity>
                        )
                    })}
                </ScrollView>
            </View>
            <Text style={[styles.title, { marginTop: 30, marginHorizontal: 16, marginBottom: 20 }]}>Send Money to</Text>
            <View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {dataTime.map((item, index) => {
                        return (
                            <TouchableOpacity key={index} style={[styles.time_item, {
                                marginRight: index === dataTime.length - 1 ? 16 : 0,
                                backgroundColor: timeSelected === index ? Colors.border1 : null
                            }]}
                                onPress={() => setTimeSelected(item.id)}>
                                <Text style={styles.time}>{item.name}</Text>
                            </TouchableOpacity>
                        )
                    })}
                </ScrollView>
            </View>
            <View style={styles.bottom_price_container}>
                <View style={styles.left_bottom_price}>
                    <Image source={Images.bill} style={styles.img_bill} />
                    <View>
                        <Text style={styles.bill_name}>Vodafone</Text>
                        <Text style={styles.bill_time}>17 Monday June</Text>
                    </View>
                </View>
                <Text style={styles.price}>- $34,21</Text>
            </View>
            <View style={{ height: 50 }} />
        </ScrollView>
    )
}