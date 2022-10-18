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
  Drop,
  TextSubmitSenha, Text, InputButton} from './styles';

import { View } from 'react-native';

import SignInput from '../../components/SignInput';
import { useNavigation } from '@react-navigation/native';
import {RadioButton} from 'react-native-paper';
import SelectList from 'react-native-dropdown-select-list';
import DropDownPicker from 'react-native-dropdown-picker';



export default() =>{

  const navigation = useNavigation();
  const [checked, setChecked] = React.useState('first');


  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('');



const handleMessageButtonClick = () => {
    navigation.reset({
        routes: [{name: 'Signin'}]
    });
}

const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'AC', value: 'apple'},
    {label: 'AL', value: 'banana'},
    {label: 'AP', value: 'banana'},
    {label: 'AM', value: 'banana'},
    {label: 'BA', value: 'banana'},
    {label: 'CE', value: 'banana'},
    {label: 'DF', value: 'banana'},
    {label: 'ES', value: 'banana'},
    {label: 'GO', value: 'banana'},
    {label: 'MA', value: 'banana'},
    {label: 'MT', value: 'banana'},
    {label: 'MS', value: 'banana'},
    {label: 'MG', value: 'banana'},
    {label: 'PA', value: 'banana'},
    {label: 'PB', value: 'banana'},
    {label: 'PR', value: 'banana'},
    {label: 'PE', value: 'banana'},
    {label: 'PI', value: 'banana'},
    {label: 'RJ', value: 'banana'},
    {label: 'RN', value: 'banana'},
    {label: 'RS', value: 'banana'},
    {label: 'RO', value: 'banana'},
    {label: 'RR', value: 'banana'},
    {label: 'SC', value: 'banana'},
    {label: 'SP', value: 'banana'},
    {label: 'SE', value: 'banana'},
    {label: 'TO', value: 'banana'},
 
  ]);

  const [open1, setOpen1] = useState(false);
  const [value1, setValue1] = useState(null);
  const [items1, setItems1] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
   
  ]);




  return (
    
    <Container>
          <Title>Dados pessoais</Title>
          <InputButton>
          <View>
            <Text>Tutor</Text>
            <RadioButton 
              Color={'white'}
              value="first"
              status={ checked === 'first' ? 'checked' : 'unchecked' }
              onPress={() => setChecked('first')}
              
              
            />  <Text>Veterinario / Petshop</Text>
            <RadioButton
              value="second"
              status={ checked === 'second' ? 'checked' : 'unchecked' }
              onPress={() => setChecked('second')}
           
            /><Text>Doador</Text>
            <RadioButton
              value="third"
              status={ checked === 'third' ? 'checked' : 'unchecked' }
              onPress={() => setChecked('third')}
             
               
           
            />
          </View>
          </InputButton>
       
          <InputArea>
          <Input
                  placeholderTextColor="#808080"
                  placeholder="Digite seu nome completo"
  
                  />
            
            <Input
                  placeholderTextColor="#808080"
                  placeholder="Digite seu CPF/CNPJ"
  
                  />
            
            <Input
                  placeholderTextColor="#808080"
                  placeholder="Digite seu Telefone"
  
                  />
           
            

              
              
          
        <Drop>
        <DropDownPicker  
         placeholder="Estado"
                      open={open}
                      value={value}
                      items={items}
                      setOpen={setOpen}
                      setValue={setValue}
                      setItems={setItems}
                    />
       </Drop>

       
      

              <Input
                  placeholderTextColor="#808080"
                  placeholder="Digite seu endereço"
  
                  />
             <Input
                  type="number" min="1" max="5"
                 placeholderTextColor="#808080"
                 placeholder="Digite seu CEP"
  
                 />
        <Drop>
          <DropDownPicker  
         placeholder="Cidade"
                      open={open1}
                      value={value1}
                      items={items1}
                      setOpen={setOpen1}
                      setValue={setValue1}
                      setItems={setItems1}
                    />
        </Drop>
        
                  

                <Input
                  
                  placeholderTextColor="#808080"
                  placeholder="Digite sua email"
                  value ={emailField}
                  onChangeText={t=>setEmailField(t)}

                  
                  />
                <Input  
                 placeholderTextColor="#808080"
                  placeholder="Digite sua senha"
                  secureTextEntry 
                  value={passwordField}
                  onChangeText={t=>setPasswordField(t)}
                    password={true}
                  
                  />
                <Input  
                 placeholderTextColor="#808080"
                  placeholder="Repita sua senha"
                  secureTextEntry 
                  value={passwordField}
                  onChangeText={t=>setPasswordField(t)}
                    password={true}
                  
                  />

              </InputArea>
              
              


                <ButtonSubmit1 onPress={handleMessageButtonClick}>
                    <TextSubmit>Registrar-se</TextSubmit>
                </ButtonSubmit1>


    </Container>
);
}