import React from 'react';
import { View } from 'react-native';
import { ProgressLineStyles } from './styles';

const ProgressLine = ({ containerStyles, progressStyles, progress }: {}) => {
  const customContainerStyles = {
    backgroundColor: containerStyles.backgroundColor || 'white',
    borderColor: containerStyles.borderColor || 'white',
  };
  const customBodyStyles = {
    width: `${progress}%`,
    backgroundColor: progressStyles.backgroundColor || 'white',
  };

  return (
    <View
      style={[
        ProgressLineStyles.container,
        customContainerStyles
      ]}
    >
      <View
        style={[
          ProgressLineStyles.body,
          customBodyStyles
        ]}
      />
    </View>
  )
};

export default ProgressLine;