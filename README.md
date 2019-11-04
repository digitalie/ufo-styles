# Utility-first object-based (UFO) styles 

A javascript library for creating style objects, inspired by utility first CSS techniques.

## Installation

```bash
$ npm install https://github.com/digitalie/ufo-styles.git
```

## Usage in React Native

```javascript
import { 
  displayFlex, 
  flexItemsCenter, 
  flexJustifyCenter, 
  color, 
  fontSize, 
  backgroundColor, 
  size,
  compose
} from 'ufo-styles';

const flexCenter = compose(
    displayFlex,
    flexItemsCenter,
    flexJustifyCenter,
);

const textStyle = compose(
    fontSize(30),
    color("papayawhip"),
);

const headerStyle = compose(
    flexCenter,
    backgroundColor("lightsalmon"),
    size("100%", "20%"),
);

const Componsnet = () => {
    return (
        <View style={headerStyle}>
            <Text style={textStyle}>
                Hello
            </Text>
        </View>
            
};
```

## Usage in React

```javascript
import { useUfoClassName } from 'ufo-styles/ufo-react';
import { 
    displayFlex, 
    flexItemsCenter, 
    flexJustifyCenter, 
    color, 
    fontSize, 
    backgroundColor, 
    size,
    compose
  } from 'ufo-styles';

function Component() {

    const flexCenter = compose(
        displayFlex,
        flexItemsCenter,
        flexJustifyCenter,
    );

    const textClassName = useUfoClassName(
        fontSize(30),
        color("papayawhip"),
    );

    const headerClassName = useUfoClassName(
        flexCenter,
        backgroundColor("lightsalmon"),
        size("100%", "20%"),
    );

    return (
        <div className={headerClassName}>
            <p className={textClassName}>Hello</p>
        </div>
    );
};
```
