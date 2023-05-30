import React from 'react';
import {
  View,
  Modal,
  ViewProps
} from 'react-native';
import {
  Camera,
  CameraDevice,
} from 'react-native-vision-camera';
import Button from '../../../components/Button';

interface CamProps extends ViewProps {
  active: boolean, 
  onHandlePress: ( ) => void, 
  onHandleClose: ( ) => void, 
  device: CameraDevice 
}

export const MyCamera = React.forwardRef<Camera, CamProps>(
  (props, ref) => {

    const { active, onHandlePress, onHandleClose, device } = props;
  

    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 22,
        }}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={active}>

          <Camera
            photo
            enableHighQualityPhotos
            ref={ref}
            style={{
              borderRadius: 20,
              borderWidth: 2,
              borderColor: '#000',
              height: '100%',
            }}
            isActive={true}
            device={device}
          />
          <View style={{position: 'absolute', bottom: 0, right: 0, left: 0, width: '100%', padding: 30, justifyContent: 'center'}}>
            <Button 
              title='Tirar Foto' 
              handlePress={onHandlePress} 
              color='#FFF' 
              textColor='#000' 
              disabled={false}/>
            <Button 
              title='Voltar' 
              handlePress={onHandleClose} 
              color='#12C2E9' 
              textColor='#000' 
              disabled={false}/>
          </View>
        </Modal>
      </View>
    )
  })