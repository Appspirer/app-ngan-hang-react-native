import React from "react";
import { View, Text, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native'
import Icons from "../../themes/Icons";
import Images from "../../themes/Images";
import styles from "./styles";

export default function Profile() {
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <Image source={Images.bg} style={styles.bg} />
            <View style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.profile}>Profile</Text>
                    <TouchableOpacity>
                        {Icons.Icons({ name: "edit", height: 22, width: 22 })}
                    </TouchableOpacity>
                </View>
                <View style={styles.info_container}>
                    <Image source={Images.avatar} style={styles.avatar} />
                    <View style={styles.name_container}>
                        <Text style={styles.name}>Ricardo Joseph</Text>
                        {Icons.Icons({ name: "verified", height: 18, width: 19 })}
                    </View>
                    <Text style={styles.email}>ricardojoseph@gmail.com</Text>
                    <View style={styles.medal_container}>
                        <Image source={Images.medal1} style={styles.medal} />
                        <Image source={Images.medal2} style={styles.medal} />
                        <Image source={Images.medal3} style={styles.medal} />
                        <Image source={Images.medal4} style={styles.medal} />
                    </View>
                </View>
                <Text style={styles.title}>GENERAL</Text>
                <TouchableOpacity style={styles.block}>
                    <View style={styles.block_left}>
                        {Icons.Icons({ name: 'settings', height: 40, width: 40 })}
                        <View style={styles.block_content}>
                            <Text style={styles.block_title}>Profile Settings</Text>
                            <Text style={styles.block_description}>Update and modify your profile</Text>
                        </View>
                    </View>
                    {Icons.Icons({ name: 'right', height: 18, width: 24 })}
                </TouchableOpacity>
                <TouchableOpacity style={styles.block}>
                    <View style={styles.block_left}>
                        {Icons.Icons({ name: 'security', height: 40, width: 40 })}
                        <View style={styles.block_content}>
                            <Text style={styles.block_title}>Privacy</Text>
                            <Text style={styles.block_description}>Change your password</Text>
                        </View>
                    </View>
                    {Icons.Icons({ name: 'right', height: 18, width: 24 })}
                </TouchableOpacity>
                <TouchableOpacity style={styles.block}>
                    <View style={styles.block_left}>
                        {Icons.Icons({ name: 'notification', height: 40, width: 40 })}
                        <View style={styles.block_content}>
                            <Text style={styles.block_title}>Notifications</Text>
                            <Text style={styles.block_description}>Change your notification settings</Text>
                        </View>
                    </View>
                    {Icons.Icons({ name: 'right', height: 18, width: 24 })}
                </TouchableOpacity>
                <Text style={styles.title}>CHART</Text>
                <TouchableOpacity style={styles.block}>
                    <View style={styles.block_left}>
                        {Icons.Icons({ name: 'chart', height: 40, width: 40 })}
                        <View style={styles.block_content}>
                            <Text style={styles.block_title}>Show Volumes</Text>
                            <Text style={styles.block_description}>Edit graphics</Text>
                        </View>
                    </View>
                    {Icons.Icons({ name: 'right', height: 18, width: 24 })}
                </TouchableOpacity>
                <View style={{height:50}}/>
            </View>
        </ScrollView>
    )
}