import React from 'react';
import {Text} from 'react-native';

const getFullName = function(firstn, middlen, lastn){
    return firstn + ' ' + middlen + ' ' + lastn;
};
const cat = () => {
    return(
        <Text>Hello World! This is {getFullName("Rom", "Rom", "Meow")}!</Text>
    );
};

export default cat;