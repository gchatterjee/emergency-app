import { LOCATION, askAsync } from 'expo-permissions';
import {
  LocationData,
  getCurrentPositionAsync,
  Accuracy,
  reverseGeocodeAsync,
  Address,
} from 'expo-location';
import { makeRequest, FccCensusApiAreaResult } from './fccCensusApi';
export function getPermission(): Promise<boolean> {
  return askAsync(LOCATION)
    .then(({ granted }: { granted: boolean }) => granted)
    .catch(() => false);
}

export function getLocationData(): Promise<LocationData> {
  return getPermission().then((granted) => {
    if (granted) {
      return getCurrentPositionAsync({ accuracy: Accuracy.Highest });
    } else {
      throw Error('Permission not granted.');
    }
  });
}

export function getAddress(location: LocationData): Promise<Address> {
  const {
    coords: { latitude, longitude },
  } = location;
  return reverseGeocodeAsync({ latitude, longitude }).then((results) => {
    if (results.length === 0) {
      throw Error('No Results');
    } else {
      return results[0];
    }
  });
}

export function getCountyData(
  location: LocationData,
): Promise<FccCensusApiAreaResult> {
  const {
    coords: { latitude, longitude },
  } = location;
  return makeRequest(latitude, longitude).then(({ data: { results } }) => {
    if (results.length === 0) {
      throw Error('No Results');
    } else {
      return results[0];
    }
  });
}
