import _ from 'lodash';
import { FontIcons } from '../../assets/icons';
import * as Screens from '../../screens/index';

export const MainRoutes = [
  {
    id: 'LoginMenu',
    title: 'Autenticação',
    icon: FontIcons.login,
    screen: Screens.LoginMenu,
    children: [
      {
        id: 'Login1',
        title: 'Login',
        screen: Screens.LoginV1,
        children: [],
      },

      {
        id: 'SignUp',
        title: 'Se inscrever',
        screen: Screens.SignUp,
        children: [],
      },
      {
        id: 'password',
        title: 'Recuperação de Senha',
        screen: Screens.PasswordRecovery,
        children: [],
      },
    ],
  },
  {
    id: 'SocialMenu',
    title: 'Perfil',
    icon: FontIcons.profile,
    screen: Screens.SocialMenu,
    children: [
      {
        id: 'ProfileSettings',
        title: 'Configurações de perfil',
        screen: Screens.ProfileSettings,
        children: [],
      },
      {
        id: 'Notifications',
        title: 'Notificações',
        screen: Screens.Notifications,
        children: [],
      },
      {
        id: 'Contacts',
        title: 'Contatos',
        screen: Screens.Contacts,
        children: [],
      },
    ],
  },
  {
    id: 'ArticlesMenu',
    title: 'Artigos',
    icon: FontIcons.article,
    screen: Screens.ArticleMenu,
    children: [
      {
        id: 'Articles1',
        title: 'Dicas',
        screen: Screens.Articles1,
        children: [],
      },
      {
        id: 'Articles2',
        title: 'Dicas2',
        screen: Screens.Articles2,
        children: [],
      },
    ],
  },
  {
    id: 'MessagingMenu',
    title: 'Mensagens',
    icon: FontIcons.mail,
    screen: Screens.MessagingMenu,
    children: [
      {
        id: 'Chat',
        title: 'Chat',
        screen: Screens.Chat,
        children: [],
      },
      {
        id: 'ChatList',
        title: 'Lista de Chat',
        screen: Screens.ChatList,
        children: [],
      },

    ],
  },
  {
    id: 'DashboardsMenu',
    title: 'Administrativo',
    icon: FontIcons.dashboard,
    screen: Screens.DashboardMenu,
    children: [],

    // {
    //   id: 'Dashboard',
    //   title: 'Dashboard',
    //   screen: Screens.Dashboard,
    //   children: [],
    // }
    //
  },
  {
    id: 'WalkthroughMenu',
    title: 'Inicio',
    icon: FontIcons.mobile,
    screen: Screens.WalkthroughMenu,
    children: [{
      id: 'Walkthrough',
      title: 'Inicio',
      screen: Screens.WalkthroughScreen,
      children: [],
    }],
  },
  {
    id: 'EcommerceMenu',
    title: 'Pagamentos',
    icon: FontIcons.card,
    screen: Screens.EcommerceMenu,
    children: [
      {
        id: 'Cards',
        title: 'Cartões',
        icon: FontIcons.card,
        screen: Screens.Cards,
        children: [],
      },
      {
        id: 'AddToCardForm',
        title: 'Add Card',
        icon: FontIcons.addToCardForm,
        screen: Screens.AddToCardForm,
        children: [],
      },

    ],
  },
  {
    id: 'NavigationMenu',
    icon: FontIcons.navigation,
    title: 'Navegação',
    screen: Screens.NavigationMenu,
    children: [
      {
        id: 'GridV1',
        title: 'MENU EM GRADE',
        screen: Screens.GridV1,
        children: [],
      },
      {
        id: 'GridV2',
        title: 'Menu Grade Minimal',
        screen: Screens.GridV2,
        children: [],
      },
      {
        id: 'List',
        title: 'Menu Lista',
        screen: Screens.ListMenu,
        children: [],
      },

    ],
  },
  {
    id: 'OtherMenu',
    title: 'Config',
    icon: FontIcons.other,
    screen: Screens.OtherMenu,
    children: [
      {
        id: 'Settings',
        title: 'Configurações',
        screen: Screens.Settings,
        children: [],
      },
    ],
  },
  // {
  //   id: 'Themes',
  //   title: 'Themes 123',
  //   icon: FontIcons.theme,
  //   screen: Screens.Themes,
  //   children: [],
  // }, >> Theme color
];

const menuRoutes = _.cloneDeep(MainRoutes);
menuRoutes.unshift({
  id: 'GridV2',
  title: 'Start',
  screen: Screens.GridV2,
  children: [],
});

export const MenuRoutes = menuRoutes;
