import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';

import Flex from '../Flex';
import View from '../View';
import Space from '../Space';
import { Info } from '../../icons';
import Button from './Button';

const variants = {
  primary: 'primary',
  secondary: 'secondary',
  tertiary: 'tertiary',
};

const sizes = {
  xsmall: 'xsmall',
  small: 'small',
  medium: 'medium',
  large: 'large',
};

const iconAlign = {
  left: 'left',
  right: 'right',
};

storiesOf('Button', module)
  .addParameters({
    component: Button,
  })
  .add('default', () => (
    <Flex flex={1} justifyContent="space-around" flexDirection="column">
      <View>
        <Flex flexDirection="row">
          <Space margin={[1, 0]}>
            <View>
              <Button
                size={select('Sizes', sizes, 'medium')}
                variant={select('Variants', variants, 'primary')}
                block
              >
                Block Button
              </Button>
            </View>
          </Space>
        </Flex>
        <Flex flexDirection="row">
          <Space margin={[1, 0]}>
            <View>
              <Button
                size={select('Sizes', sizes, 'medium')}
                variant={select('Variants', variants, 'primary')}
                icon={Info}
                block
              />
            </View>
          </Space>
        </Flex>
        <Flex flexDirection="row">
          <Space margin={[1, 0]}>
            <View>
              <Button
                size={select('Sizes', sizes, 'medium')}
                variant={select('Variants', variants, 'primary')}
                icon={Info}
                block
                iconAlign={select('iconAlign', iconAlign, 'left')}
              >
                Block Button
              </Button>
            </View>
          </Space>
        </Flex>
        <Button
          size={select('Sizes', sizes, 'medium')}
          variant={select('Variants', variants, 'primary')}
          icon={Info}
        />
        <Space margin={[1, 0]}>
          <View>
            <Button
              size={select('Sizes', sizes, 'medium')}
              variant={select('Variants', variants, 'primary')}
            >
              Button
            </Button>
          </View>
        </Space>
        <Space margin={[1, 0]}>
          <View>
            <Button
              size={select('Sizes', sizes, 'medium')}
              variant={select('Variants', variants, 'primary')}
              icon={Info}
              iconAlign={select('iconAlign', iconAlign, 'left')}
            >
              Button with Icon
            </Button>
          </View>
        </Space>
        <Button
          size={select('Sizes', sizes, 'medium')}
          variant={select('Variants', variants, 'primary')}
          icon={Info}
          disabled
          iconAlign={select('iconAlign', iconAlign, 'left')}
        >
          Disabled Button with Icon
        </Button>
      </View>
    </Flex>
  ));
