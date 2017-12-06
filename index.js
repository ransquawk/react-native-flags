// @flow

import React from 'react';
import { Image,View } from 'react-native';
import * as flags from './flags';
type Props = {
  size: 16 | 24 | 32 | 48 | 64,
  code: string,
  type?: 'flat' | 'shiny',
  style?: any,
};

const Flag = ({ size = 64, code, type = 'shiny', style }: Props) => {
  const  flag = flags[type][`icons${size}`][code];
  const unknownFlag = flags[type][`icons${size}`]['unknown'];
   if(flag){
 return (
    <Image
      source={flag}
      style={[{ width: size, height: size }, style]}
    />
  );
}else{
  return(
    <View style={{height:size,backgroundColor:'white',zIndex:100}}/>
  );
}
};
export default Flag;
