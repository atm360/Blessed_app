import React from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
} from 'react-native';
import {
  RkText,
  RkTextInput,
  RkAvoidKeyboard,
  RkTheme,
  RkStyleSheet,
} from 'react-native-ui-kitten';
import { data } from '../../data';
import {
  Avatar,
  SocialSetting,
  GradientButton,
} from '../../components';
import { FontAwesome } from '../../assets/icons';

export class ProfileSettings extends React.Component {
  static navigationOptions = {
    title: 'Configuração de perfil'.toUpperCase(),
  };

  user = data.getUser();

  state = {
    firstName: this.user.firstName,
    lastName: this.user.lastName,
    email: this.user.email,
    country: this.user.country,
    phone: this.user.phone,
    password: this.user.password,
    newPassword: this.user.newPassword,
    confirmPassword: this.user.confirmPassword,
  };

  onFirstNameInputChanged = (text) => {
    this.setState({ firstName: text });
  };

  onLastNameInputChanged = (text) => {
    this.setState({ lastName: text });
  };

  onEmailInputChanged = (text) => {
    this.setState({ email: text });
  };

  onCountryInputChanged = (text) => {
    this.setState({ country: text });
  };

  onPhoneInputChanged = (text) => {
    this.setState({ phone: text });
  };

  onPasswordInputChanged = (text) => {
    this.setState({ password: text });
  };

  onNewPasswordInputChanged = (text) => {
    this.setState({ newPassword: text });
  };

  onConfirmPasswordInputChanged = (text) => {
    this.setState({ confirmPassword: text });
  };

  render = () => (
    <ScrollView style={styles.root}>
      <RkAvoidKeyboard>
        <View style={styles.header}>
          <Avatar img={this.user.photo} rkType='big' />
        </View>
        <View style={styles.section}>
          <View style={[styles.row, styles.heading]}>
            <RkText rkType='header6 primary'>INFORMAÇÕES</RkText>
          </View>
          <View style={styles.row}>
            <RkTextInput
              label='Nome'
              value={this.state.firstName}
              rkType='right clear'
              onChangeText={this.onFirstNameInputChanged}
            />
          </View>
          <View style={styles.row}>
            <RkTextInput
              label='Sobre nome'
              value={this.state.lastName}
              onChangeText={this.onLastNameInputChanged}
              rkType='right clear'
            />
          </View>
          <View style={styles.row}>
            <RkTextInput
              label='Email'
              value={this.state.email}
              onChangeText={this.onEmailInputChanged}
              rkType='right clear'
            />
          </View>
          <View style={styles.row}>
            <RkTextInput
              label='Igreja'
              value={this.state.country}
              onChangeText={this.onCountryInputChanged}
              rkType='right clear'
            />
          </View>
          <View style={styles.row}>
            <RkTextInput
              label='Telefone'
              value={this.state.phone}
              onChangeText={this.onPhoneInputChanged}
              rkType='right clear'
            />
          </View>
        </View>
        <View style={styles.section}>
          <View style={[styles.row, styles.heading]}>
            <RkText rkType='primary header6'>MUDAR SENHA</RkText>
          </View>
          <View style={styles.row}>
            <RkTextInput
              label='Senha antiga'
              value={this.state.password}
              rkType='right clear'
              secureTextEntry
              onChangeText={this.onPasswordInputChanged}
            />
          </View>
          <View style={styles.row}>
            <RkTextInput
              label='Senha nova'
              value={this.state.newPassword}
              rkType='right clear'
              secureTextEntry
              onChangeText={this.onNewPasswordInputChanged}
            />
          </View>
          <View style={styles.row}>
            <RkTextInput
              label='Confirmar senha'
              value={this.state.confirmPassword}
              rkType='right clear'
              secureTextEntry
              onChangeText={this.onConfirmPasswordInputChanged}
            />
          </View>
        </View>
        <View style={styles.section}>
          <View style={[styles.row, styles.heading]}>
            <RkText rkType='primary header6'>Conectar redes sociais</RkText>
          </View>
          <View style={styles.row}>
            <SocialSetting name='Google' icon={FontAwesome.google} tintColor={RkTheme.current.colors.google} />
          </View>
          <View style={styles.row}>
            <SocialSetting name='Facebook' icon={FontAwesome.facebook} tintColor={RkTheme.current.colors.facebook} />
          </View>
        </View>
        <GradientButton rkType='large' style={styles.button} text='SALVAR' />
      </RkAvoidKeyboard>
    </ScrollView>
  );
}

const styles = RkStyleSheet.create(theme => ({
  root: {
    backgroundColor: theme.colors.screen.base,
  },
  header: {
    backgroundColor: theme.colors.screen.neutral,
    paddingVertical: 25,
  },
  section: {
    marginVertical: 25,
  },
  heading: {
    paddingBottom: 12.5,
  },
  row: {
    flexDirection: 'row',
    paddingHorizontal: 17.5,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.border.base,
    alignItems: 'center',
  },
  button: {
    marginHorizontal: 16,
    marginBottom: 32,
  },
}));
