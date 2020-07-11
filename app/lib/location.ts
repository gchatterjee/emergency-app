import * as Location from 'expo-location';
import { LOCATION, askAsync } from 'expo-permissions';
import { LocationData } from 'expo-location';

export function getLocation(): Promise<LocationData | null> {
  return askAsync(LOCATION).then(({ granted }: { granted: boolean }) => {
    if (granted) {
      return Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Highest,
      });
    } else {
      return null;
    }
  });
}
