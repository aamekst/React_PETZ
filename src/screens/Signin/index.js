import React, { useState} from 'react';
import {
  Container,
  InputArea,
  CustomButton,
  CustomButtonText,
  SignMessageButton,
  SignMessageButtonText,
  SignMessageButtonTextBold,
  Input,
  Title, 
  ButtonSubmitSenha, 
  ButtonSubmit,
  ButtonSubmit1,
  TextSubmit,
  TextSubmit1,
  TextSubmitSenha} from './styles';

 import SignInput from '../../components/SignInput';
import { useNavigation } from '@react-navigation/native';

export default() =>{

  const navigation = useNavigation();

  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('');





const handleMessageButtonClick = () => {
    navigation.reset({
        routes: [{name: 'SignUp'}]
    });
}



  return (
    <Container>
          <Title>Login</Title>
          <InputArea>
        
                <Input
                  
                  placeholderTextColor="#808080"
                  placeholder="E-mail"
                  value ={emailField}
                  onChangeText={t=>setEmailField(t)}

                  
                  />
                <Input  
                 placeholderTextColor="#808080"
                  placeholder="Senha"
                  secureTextEntry 
                  value={passwordField}
                  onChangeText={t=>setPasswordField(t)}
                    password={true}
                  
                  />
              </InputArea>
                
                 <ButtonSubmitSenha>
                    <TextSubmitSenha>Esqueci minha senha</TextSubmitSenha>
                </ButtonSubmitSenha>

                <ButtonSubmit> 
                    <TextSubmit>Entrar</TextSubmit>
                </ButtonSubmit>

                <ButtonSubmit1 onPress={handleMessageButtonClick}>
                    <TextSubmit>Cadastra-se</TextSubmit>
                </ButtonSubmit1>
        
  

    </Container>
);
}