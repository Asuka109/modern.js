import { RadioGroup } from '@ark-ui/react/radio-group';
import type { ComponentProps } from 'react';
import { styled } from 'styled-system/jsx';
import { radioGroup } from 'styled-system/recipes';
import { createStyleContext } from '~/lib/create-style-context';

const { withProvider, withContext } = createStyleContext(radioGroup);

export const Root = withProvider(styled(RadioGroup.Root), 'root');
export const Indicator = withContext(styled(RadioGroup.Indicator), 'indicator');
export const Item = withContext(styled(RadioGroup.Item), 'item');
export const ItemControl = withContext(
  styled(RadioGroup.ItemControl),
  'itemControl',
);
export const ItemText = withContext(styled(RadioGroup.ItemText), 'itemText');
export const Label = withContext(styled(RadioGroup.Label), 'label');

export type RootProps = ComponentProps<typeof Root>;
export type IndicatorProps = ComponentProps<typeof Indicator>;
export type ItemProps = ComponentProps<typeof Item>;
export type ItemControlProps = ComponentProps<typeof ItemControl>;
export type ItemTextProps = ComponentProps<typeof ItemText>;
export type LabelProps = ComponentProps<typeof Label>;
