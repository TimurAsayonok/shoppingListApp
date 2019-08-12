import { Alert } from 'react-native';

interface ButtonType {
  text: string
  onPress: () => any
};

interface ShowActionAlertProps {
  title: string,
  message?: string,
  buttons?: ButtonType[]
};

export class ComponentsHelper {
  static onShowActionAlert = ({
    title, message, buttons,
  }: ShowActionAlertProps) => {
    Alert.alert(
      title,
      message,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        ...buttons,
      ],
      { cancelable: true },
    );
  }
}
