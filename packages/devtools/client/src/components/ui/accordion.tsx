import { Accordion } from '@ark-ui/react/accordion';
import type { ComponentProps } from 'react';
import { styled } from 'styled-system/jsx';
import { accordion } from 'styled-system/recipes';
import { createStyleContext } from '~/lib/create-style-context';

const { withProvider, withContext } = createStyleContext(accordion);

export const Root = withProvider(styled(Accordion.Root), 'root');
export const Item = withContext(styled(Accordion.Item), 'item');
export const ItemContent = withContext(
  styled(Accordion.ItemContent),
  'itemContent',
);
export const ItemIndicator = withContext(
  styled(Accordion.ItemIndicator),
  'itemIndicator',
);
export const ItemTrigger = withContext(
  styled(Accordion.ItemTrigger),
  'itemTrigger',
);

export type RootProps = ComponentProps<typeof Root>;
export type ItemProps = ComponentProps<typeof Item>;
export type ItemContentProps = ComponentProps<typeof ItemContent>;
export type ItemIndicatorProps = ComponentProps<typeof ItemIndicator>;
export type ItemTriggerProps = ComponentProps<typeof ItemTrigger>;
