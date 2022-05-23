import { Component } from 'react'
import { View, Button } from '@tarojs/components'
import PopupLayer from '../../component/popupLayer/index'
import './index.scss'

export default class Index extends Component {
  private PopupLayer: any;
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  onRef = (ref) => {
    this.PopupLayer = ref;
  }
  openPopupLayer = () =>{
    this.PopupLayer.show()
  }
  render () {
    return (
      <View className='index'>
        <Button onClick={()=>{this.openPopupLayer()}}>向上弹出</Button>
        <PopupLayer id="popupRef" direction="top" onRef={this.onRef}>
          <View>
            123
          </View>
        </PopupLayer>
      </View>
    )
  }
}
