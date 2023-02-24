import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, Button } from 'react-native'
import Icons from "../../themes/Icons";
import styles from "./styles";
import { Formik } from 'formik';
import Colors from "../../themes/Colors";

export default function Login({ navigation }) {

    const [selectedRemember, setSelectedRemember] = useState(false)

    return (
        <View style={styles.container}>
            <Text style={styles.text_header}>Welcome Login</Text>
            <View style={styles.login_special}>
                <TouchableOpacity style={styles.button_special}>
                    {Icons.Icons({ name: 'facebook', height: 18, width: 10 })}
                </TouchableOpacity>
                <TouchableOpacity style={styles.button_special}>
                    {Icons.Icons({ name: 'google', height: 18, width: 18 })}
                </TouchableOpacity>
            </View>
            <View style={styles.formik}>
                <Formik
                    initialValues={{ username: '', password: '' }}
                    onSubmit={values => console.log(values)}
                    validate={(values) => {
                        const errors = {
                            username: "",
                            password: ""
                        }
                        if (values.username === '') {
                            errors.username = 'Required'
                        }

                        if (values.password === '') {
                            errors.password = 'Required'
                        }

                        return errors
                    }}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                        <View>
                            <Text style={styles.input_title}>Username</Text>
                            <View style={[styles.row_input, {
                                borderBottomColor: errors.username === "" ? Colors.green : Colors.gray_text,
                                borderBottomWidth: errors.username === "" ? 2 : 0.5
                            }]}>
                                <TextInput
                                    style={styles.text_input}
                                    onChangeText={handleChange('username')}
                                    value={values.username}
                                    placeholder="Username"
                                />
                                {errors.username === "" ? Icons.Icons({ name: 'check', height: 20, width: 20 }) : <></>}
                            </View>
                            <Text style={[styles.input_title, { marginTop: 30 }]}>Password</Text>
                            <View style={[styles.row_input, {
                                borderBottomColor: errors.password === "" ? Colors.green : Colors.gray_text,
                                borderBottomWidth: errors.password === "" ? 2 : 0.5
                            }]}>
                                <TextInput
                                    style={styles.text_input}
                                    onChangeText={handleChange('password')}
                                    value={values.password}
                                    placeholder="Password"
                                />
                                {errors.password === "" ? Icons.Icons({ name: 'check', height: 20, width: 20 }) : <></>}
                            </View>
                            <View style={styles.bottom_container}>
                                <TouchableOpacity style={styles.left_bottom} onPress={() => setSelectedRemember(!selectedRemember)}>
                                    <View style={styles.radio_button}>
                                        {selectedRemember && <View style={styles.dot} />}
                                    </View>
                                    <Text style={styles.text_radio}>Remember me</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={styles.forgot}>Forgot password?</Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity style={styles.login} onPress={() => navigation.navigate("HomeScreen")}>
                                <Text style={styles.login_text}>Login</Text>
                            </TouchableOpacity>
                            <View style={styles.question_container}>
                                <Text style={styles.question}>Don’t have a account?</Text>
                                <TouchableOpacity>
                                    <Text style={styles.signup}>Sign up</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                </Formik>
            </View>
        </View>
    )
}