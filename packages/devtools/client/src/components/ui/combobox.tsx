import { Combobox } from '@ark-ui/react/combobox';
import type { ComponentProps } from 'react';
import { styled } from 'styled-system/jsx';
import { combobox } from 'styled-system/recipes';
import { createStyleContext } from '~/lib/create-style-context';

const { withProvider, withContext } = createStyleContext(combobox);

export const Root = withProvider(styled(Combobox.Root), 'root');
export const ClearTrigger = withContext(
  styled(Combobox.ClearTrigger),
  'clearTrigger',
);
export const Content = withContext(styled(Combobox.Content), 'content');
export const Control = withContext(styled(Combobox.Control), 'control');
export const Input = withContext(styled(Combobox.Input), 'input');
export const Item = withContext(styled(Combobox.Item), 'item');
export const ItemGroup = withContext(styled(Combobox.ItemGroup), 'itemGroup');
export const ItemGroupLabel = withContext(
  styled(Combobox.ItemGroupLabel),
  'itemGroupLabel',
);
export const ItemIndicator = withContext(
  styled(Combobox.ItemIndicator),
  'itemIndicator',
);
export const ItemText = withContext(styled(Combobox.ItemText), 'itemText');
export const Label = withContext(styled(Combobox.Label), 'label');
export const Positioner = withContext(
  styled(Combobox.Positioner),
  'positioner',
);
export const Trigger = withContext(styled(Combobox.Trigger), 'trigger');

export type RootProps = ComponentProps<typeof Root>;
export type ClearTriggerProps = ComponentProps<typeof ClearTrigger>;
export type ContentProps = ComponentProps<typeof Content>;
export type ControlProps = ComponentProps<typeof Control>;
export type InputProps = ComponentProps<typeof Input>;
export type ItemProps = ComponentProps<typeof Item>;
export type ItemGroupProps = ComponentProps<typeof ItemGroup>;
export type ItemGroupLabelProps = ComponentProps<typeof ItemGroupLabel>;
export type ItemIndicatorProps = ComponentProps<typeof ItemIndicator>;
export type ItemTextProps = ComponentProps<typeof ItemText>;
export type LabelProps = ComponentProps<typeof Label>;
export type PositionerProps = ComponentProps<typeof Positioner>;
export type TriggerProps = ComponentProps<typeof Trigger>;
