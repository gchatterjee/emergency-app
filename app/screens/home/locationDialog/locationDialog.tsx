import React from 'react';
import { Text } from 'react-native';
import { Dialog, ProgressBar } from 'react-native-paper';
import { locationDialogText } from './locationDialog.language';
import {
  getLocationData,
  getCountyData,
  getAddress,
} from '../../../lib/location';
import { FccCensusApiAreaResult } from '../../../lib/fccCensusApi';
import { Address } from 'expo-location';

class LocationDialog extends React.Component<{
  visible: boolean;
  onSuccess: (
    city?: string,
    county?: string,
    region?: string,
    country?: string,
  ) => void;
  onFailure: () => void;
}> {
  constructor(props: {
    visible: boolean;
    onSuccess: (
      city?: string,
      county?: string,
      region?: string,
      country?: string,
    ) => void;
    onFailure: () => void;
  }) {
    super(props);
    this.setStateP = this.setStateP.bind(this);
    this.state = { progressBarVisible: false };
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  setStateP(state: object): Promise<void> {
    return new Promise((resolve) => {
      this.setState(state, () => resolve());
    });
  }

  componentDidMount(): void {
    this.setStateP({ progressBarVisible: true })
      .then(getLocationData)
      .then((location) =>
        getAddress(location)
          .then(({ city, region, country }) => {
            getCountyData(location)
              .then(({ county_name }) => {
                this.props.onSuccess(city, county_name, region, country);
              })
              .catch(() =>
                this.props.onSuccess(city, undefined, region, country),
              );
          })
          .catch(() =>
            getCountyData(location)
              .then(({ county_name }) =>
                this.props.onSuccess(
                  undefined,
                  county_name,
                  undefined,
                  undefined,
                ),
              )
              .catch(() => this.props.onFailure()),
          ),
      );
  }

  render(): JSX.Element {
    return (
      <Dialog visible={this.props.visible} dismissable={false}>
        <Dialog.Title>Location</Dialog.Title>
        <Dialog.Content>
          <Text>{locationDialogText}</Text>
          <ProgressBar
            visible={this.state.progressBarVisible}
            style={{ margin: 10 }}
            indeterminate={true}
          />
        </Dialog.Content>
      </Dialog>
    );
  }
}

export default LocationDialog;
