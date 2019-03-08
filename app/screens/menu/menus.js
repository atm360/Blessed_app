/* eslint-disable react/no-multi-comp */
import React from 'react';

import { CategoryMenu } from './categoryMenu';
import * as Routes from '../../config/navigation/routesBuilder';
import NavigationType from '../../config/navigation/propTypes';

export class LoginMenu extends React.Component {
  static propTypes = {
    navigation: NavigationType.isRequired,
  };
  static navigationOptions = {
    title: 'Login e Acessos'.toUpperCase(),
  };
  render = () => (
    <CategoryMenu navigation={this.props.navigation} items={Routes.LoginRoutes} />
  );
}

export class NavigationMenu extends React.Component {
  static propTypes = {
    navigation: NavigationType.isRequired,
  };
  static navigationOptions = {
    title: 'Navegação'.toUpperCase(),
  };
  render = () => (
    <CategoryMenu navigation={this.props.navigation} items={Routes.NavigationRoutes} />
  );
}

export class SocialMenu extends React.Component {
  static propTypes = {
    navigation: NavigationType.isRequired,
  };
  static navigationOptions = {
    title: 'Perfil e Redes Sociais'.toUpperCase(),
  };
  render = () => (
    <CategoryMenu navigation={this.props.navigation} items={Routes.SocialRoutes} />
  );
}

export class ArticleMenu extends React.Component {
  static propTypes = {
    navigation: NavigationType.isRequired,
  };
  static navigationOptions = {
    title: 'Artgos e notícias'.toUpperCase(),
  };
  render = () => (
    <CategoryMenu navigation={this.props.navigation} items={Routes.ArticleRoutes} />
  );
}

export class MessagingMenu extends React.Component {
  static propTypes = {
    navigation: NavigationType.isRequired,
  };
  static navigationOptions = {
    title: 'Mensagens'.toUpperCase(),
  };
  render = () => (
    <CategoryMenu navigation={this.props.navigation} items={Routes.MessagingRoutes} />
  );
}

export class DashboardMenu extends React.Component {
  static propTypes = {
    navigation: NavigationType.isRequired,
  };
  static navigationOptions = {
    title: 'Administrativo'.toUpperCase(),
  };
  render = () => (
    <CategoryMenu navigation={this.props.navigation} items={Routes.DashboardRoutes} />
  );
}

export class WalkthroughMenu extends React.Component {
  static propTypes = {
    navigation: NavigationType.isRequired,
  };
  static navigationOptions = {
    title: 'início rápido'.toUpperCase(),
  };
  render = () => (
    <CategoryMenu navigation={this.props.navigation} items={Routes.WalkthroughRoutes} />
  );
}

export class EcommerceMenu extends React.Component {
  static propTypes = {
    navigation: NavigationType.isRequired,
  };
  static navigationOptions = {
    title: 'Financeiro'.toUpperCase(),
  };
  render = () => (
    <CategoryMenu navigation={this.props.navigation} items={Routes.EcommerceRoutes} />
  );
}

export class OtherMenu extends React.Component {
  static propTypes = {
    navigation: NavigationType.isRequired,
  };
  static navigationOptions = {
    title: 'Adicionais'.toUpperCase(),
  };
  render = () => (
    <CategoryMenu navigation={this.props.navigation} items={Routes.OtherRoutes} />
  );
}
