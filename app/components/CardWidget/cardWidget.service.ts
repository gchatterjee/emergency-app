import { Linking } from 'react-native';

export function goToUrl(url: string): Promise<boolean> {
  return Linking.canOpenURL(url)
    .then(
      (isSupported: boolean) =>
        isSupported && Linking.openURL(url).then(() => true),
    )
    .catch(() => false);
}
