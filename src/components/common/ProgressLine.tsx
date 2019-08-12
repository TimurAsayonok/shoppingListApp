import React from 'react';
import { View } from 'react-native';
import { ProgressLineStyles } from './styles';

interface Props {
  containerStyles: {
    backgroundColor?: string
    borderColor?: string
  }
  progressStyles: {
    backgroundColor?: string
  }
  progress?: number
};

const ProgressLine = ({
  containerStyles, progressStyles, progress
}: Props) => {
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