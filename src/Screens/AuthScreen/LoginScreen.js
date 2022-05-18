import {
    Text,
    View,
    ImageBackground,
    TextInput,
    TouchableOpacity,
    Keyboard,
    TouchableWithoutFeedback
} from "react-native";
import {AuthStyles} from "./AuthStyles";
import {useState} from "react";
import {Link} from "@react-navigation/native";

const initialState = {
    email: '',
    pass: ''
}

export default function LoginScreen({navigation}) {
    const [state, setState] = useState(initialState)
    const [isShow, setShowPass] = useState(true)
    const [isShowKeyboard, setShowKeyboard] = useState(false)

    const hideKeyboard = () => {
        setShowKeyboard(false)
        Keyboard.dismiss()
    }
    const onSubmitHandler = () => {
        console.log(state)
        setState(initialState)
        hideKeyboard()
    }

    return (
        <TouchableWithoutFeedback onPress={hideKeyboard}>
            <View style={AuthStyles.container}>
                <ImageBackground
                    style={AuthStyles.bgImage}
                    source={require("../../../src/img/photoBG.png")}
                    resizeMode={"stretch"}
                >

                    <View style={AuthStyles.formContainer}>

                        <Text style={{...AuthStyles.formTitle,marginTop:32}}>Войти</Text>

                        <View style={AuthStyles.form}>
                            <TextInput
                                style={AuthStyles.input}
                                onChangeText={(value) => setState(prevState => ({...prevState, email: value}))}
                                value={state.email}
                                placeholder="Адрес электронной почты"
                                onFocus={() => setShowKeyboard(true)}
                            />
                            <View style={AuthStyles.passInput}>
                                <TextInput
                                    style={AuthStyles.input}
                                    onChangeText={(value) => setState(prevState => ({...prevState, pass: value}))}
                                    value={state.pass}
                                    placeholder="Пароль"
                                    secureTextEntry={isShow}
                                    onFocus={() => setShowKeyboard(true)}
                                />
                                <TouchableOpacity
                                    style={AuthStyles.showPassBtn}
                                    onPress={() => setShowPass(!isShow)}
                                >
                                    <Text style={AuthStyles.showPassBtnText}>Показать</Text>
                                </TouchableOpacity>

                            </View>

                            <TouchableOpacity
                                style={AuthStyles.submitBtn}
                                onPress={onSubmitHandler}
                            >
                                <Text style={AuthStyles.submitBtnText}>Войти</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={AuthStyles.changeScreen}
                                onPress={()=>navigation.navigate('registration')}
                            >
                                <Text style={AuthStyles.changeScreenText}>Нет аккаунта? Зарегистрироваться</Text>
                            </TouchableOpacity>
                        </View>

                    </View>

                </ImageBackground>
            </View>
        </TouchableWithoutFeedback>
    )
        ;
}
