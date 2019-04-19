import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {StyledButton} from "../src/styled-components/Button";
import {StyledTextBox} from "../src/styled-components/TextInput";
import {Header} from "../src/components/Header";
import {Footer} from "../src/components/Footer";
import {Wrapper} from "../src/components/Wrapper";
// @ts-ignore
import { Button  } from '@storybook/react/demo';
import {ListItem} from "../src/styled-components/listItem";

storiesOf('Custom Component', module)
    .add('Button Component', () => <StyledButton onClick={() => console.log('Clicked')}>Click Me</StyledButton>)
    .add('TextBox Component', () => <StyledTextBox placeHolder={'TextBox Place Holder'} className={''} value={''}
    onChange={(e) => console.log(e)}/>)
    .add('ListItem', () => <ListItem>item 1</ListItem>)
    .add('Header', () => <Header/>)
    .add('Footer', () => <Footer/>)
    .add('Wrapper', () => <Wrapper children={<p>Some Text</p>}/>);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
