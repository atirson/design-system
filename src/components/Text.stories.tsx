import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from './Text'

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Hello World',
    size: 'md'
  },
  argTypes: {
    size: {
      control: {
        type: 'inline-radio',
      },
    }
  },
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}

export const CustomComponent: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: (
      <p>Agora usando tag customizada</p>
    )
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    },
    asChild: {
      table: {
        disable: true
      }
    }
  }
}
