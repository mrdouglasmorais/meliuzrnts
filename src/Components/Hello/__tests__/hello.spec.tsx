import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';

import Hello from '..';

describe('Switch de testes', () => {
  test('este é o meu primeiro teste', () => {
    const {getByTestId} = render(<Hello />);
    const textRender = getByTestId('hello');
    expect(textRender.props.children).toEqual('Hello');
    // primeiro teste
  });
  test('este é o meu segundo teste', () => {
    const {getByPlaceholderText} = render(<Hello />);
    const firstInputText = getByPlaceholderText('Informe seu nome');
    expect(firstInputText).toBeTruthy();
    // segundo teste
  });
  test('este é o meu terceiro teste', async () => {
    const {getByPlaceholderText} = render(<Hello />);
    const myInput = getByPlaceholderText('Informe seu nome');
    await fireEvent.changeText(myInput, 'Matheus');
    expect(myInput.props.value).toEqual('Matheus');
    // simulando eventos
  });
  test('este é o meu quarto teste', async () => {
    const {getByPlaceholderText} = render(<Hello />);
    const myInput = getByPlaceholderText('Informe sua idade');
    await fireEvent.changeText(myInput, '22');
    expect(myInput.props.value).toEqual('22');
  });
  test('este é o meu quinto teste', async () => {
    const {getByTestId} = render(<Hello />);
    const myFirstButton = getByTestId('clique-aqui');
    await fireEvent.press(myFirstButton);
    const displayName = getByTestId('name');
    const displayAge = getByTestId('age');

    expect(displayName).toBeTruthy();
    expect(displayAge).toBeTruthy();
  });
});
