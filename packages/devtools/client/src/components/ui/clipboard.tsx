import { Clipboard } from '@ark-ui/react/clipboard';
import type { ComponentProps } from 'react';
import { styled } from 'styled-system/jsx';
import { clipboard } from 'styled-system/recipes';
import { createStyleContext } from '~/lib/create-style-context';

const { withProvider, withContext } = createStyleContext(clipboard);

export const Root = withProvider(styled(Clipboard.Root), 'root');
export const Control = withContext(styled(Clipboard.Control), 'control');
export const Indicator = withContext(styled(Clipboard.Indicator), 'indicator');
export const Input = withContext(styled(Clipboard.Input), 'input');
export const Label = withContext(styled(Clipboard.Label), 'label');
export const Trigger = withContext(styled(Clipboard.Trigger), 'trigger');

export type RootProps = ComponentProps<typeof Root>;
export type ControlProps = ComponentProps<typeof Control>;
export type IndicatorProps = ComponentProps<typeof Indicator>;
export type InputProps = ComponentProps<typeof Input>;
export type LabelProps = ComponentProps<typeof Label>;
export type TriggerProps = ComponentProps<typeof Trigger>;
