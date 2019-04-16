import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {Hello} from "../src/components/Hello";
// @ts-ignore
import { Button  } from '@storybook/react/demo';
import {ListItem} from "../src/styled-components/listItem";

storiesOf('Custom Component', module)
    .add('Hello Component', () => <Hello name={'Lewis'} age={25}/>);

storiesOf('Styled Components', module)
    .add('ListItem', () => <ListItem>item 1</ListItem>);
storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
