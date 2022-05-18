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
import MyIcon from "../../components/Icon";

const initialState = {
    login: '',
    email: '',
    pass: ''
}

export default function RegistrationScreen() {
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
                        <View style={AuthStyles.imageContainer}>
                            <TouchableOpacity>
                                <MyIcon options={{
                                    "name": 'pluscircleo',
                                    "style": AuthStyles.icon,
                                    "size": 25,
                                    "color": '#FF6C00'
                                }}/>
                            </TouchableOpacity>
                        </View>

                        <Text style={AuthStyles.formTitle}>Регистрация</Text>

                        <View style={AuthStyles.form}>
                            <TextInput
                                style={AuthStyles.input}
                                onChangeText={(value) => setState(prevState => ({...prevState, login: value}))}
                                value={state.login}
                                placeholder="Логин"
                                onFocus={() => setShowKeyboard(true)}
                            />
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
                                <Text style={AuthStyles.submitBtnText}>Зарегистрироваться</Text>
                            </TouchableOpacity>
                            <Link
                                style={AuthStyles.changeScreen}
                                to={{ screen: 'login'}}>
                                <Text style={AuthStyles.changeScreenText}>Уже есть аккаунт? Войти</Text>
                            </Link>
                        </View>

                    </View>

                </ImageBackground>
            </View>
        </TouchableWithoutFeedback>
    )
        ;
}
