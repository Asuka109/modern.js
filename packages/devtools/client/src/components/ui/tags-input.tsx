import { TagsInput } from '@ark-ui/react/tags-input';
import type { ComponentProps } from 'react';
import { styled } from 'styled-system/jsx';
import { tagsInput } from 'styled-system/recipes';
import { createStyleContext } from '~/lib/create-style-context';

const { withProvider, withContext } = createStyleContext(tagsInput);

export const Root = withProvider(styled(TagsInput.Root), 'root');
export const ClearTrigger = withContext(
  styled(TagsInput.ClearTrigger),
  'clearTrigger',
);
export const Control = withContext(styled(TagsInput.Control), 'control');
export const Input = withContext(styled(TagsInput.Input), 'input');
export const Item = withContext(styled(TagsInput.Item), 'item');
export const ItemDeleteTrigger = withContext(
  styled(TagsInput.ItemDeleteTrigger),
  'itemDeleteTrigger',
);
export const ItemInput = withContext(styled(TagsInput.ItemInput), 'itemInput');
export const ItemPreview = withContext(
  styled(TagsInput.ItemPreview),
  'itemPreview',
);
export const ItemText = withContext(styled(TagsInput.ItemText), 'itemText');
export const Label = withContext(styled(TagsInput.Label), 'label');

export type RootProps = ComponentProps<typeof Root>;
export type ClearTriggerProps = ComponentProps<typeof ClearTrigger>;
export type ControlProps = ComponentProps<typeof Control>;
export type InputProps = ComponentProps<typeof Input>;
export type ItemProps = ComponentProps<typeof Item>;
export type ItemDeleteTriggerProps = ComponentProps<typeof ItemDeleteTrigger>;
export type ItemInputProps = ComponentProps<typeof ItemInput>;
export type ItemPreviewProps = ComponentProps<typeof ItemPreview>;
export type ItemTextProps = ComponentProps<typeof ItemText>;
export type LabelProps = ComponentProps<typeof Label>;
