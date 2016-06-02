const React = require('react-native');

const {
  StyleSheet,
  Text,
  View
} = React;

const pick = require('lodash.pick');

const BaseIconNative = require('../BaseIconNative');

const iconCodes = require('./iconCodes');


const FONT_NAME = 'SalesforceDesignSystemIconsAction';
const ICON_SCALE = 0.65;


const getCodeAndColorByName = (iconName) => {
  const name = iconName.toLowerCase().replace(/_/g,'');
  const index = iconCodes.names.indexOf(name);
  return {code:iconCodes.codes[index], color:iconCodes.colors[index]};
};


module.exports = React.createClass({

  getDefaultProps(){
    return {
      size: 50,
      iconCode: "\uEA03",
      iconColor: "white",
      name:'like',
      isRound: false
    };
  },

  propTypes: {
    size: React.PropTypes.number,
    iconName: React.PropTypes.string,
    iconColor: React.PropTypes.string,
    isRound: React.PropTypes.bool,
  },

  getBGColor (iconConfig) {
    return {
      red: 255*iconConfig.color[0],
      green: 255*iconConfig.color[1],
      blue: 255*iconConfig.color[2]
    };
  },

  setNativeProps(nativeProps) {
    this._root.setNativeProps(nativeProps);
  },

  render () {
    const iconConfig = getCodeAndColorByName(this.props.name)
    const bgColor = this.getBGColor(iconConfig);
      return <View {... this.props} style={{
              backgroundColor:'rgb('+bgColor.red+','+bgColor.green+','+bgColor.blue+')',
              borderRadius:this.props.isRound?Math.floor(this.props.size/2):Math.floor(this.props.size/10)
            }}>
      <BaseIconNative 
        style={[{width:50,height:50},pick(this.props.style,['width','height'])]}
        iconCode={iconConfig.code}
        iconColor='#ffffff'
        iconScale={ICON_SCALE}
        fontName={FONT_NAME}
      />
      </View>;
  }

});

module.exports.names = iconCodes.names;