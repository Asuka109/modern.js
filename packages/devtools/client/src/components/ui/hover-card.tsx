import { HoverCard } from '@ark-ui/react/hover-card';
import type { ComponentProps } from 'react';
import { styled } from 'styled-system/jsx';
import { hoverCard } from 'styled-system/recipes';
import { createStyleContext } from '~/lib/create-style-context';

const { withProvider, withContext } = createStyleContext(hoverCard);

export const Root = withProvider(HoverCard.Root);
export const Arrow = withContext(styled(HoverCard.Arrow), 'arrow');
export const ArrowTip = withContext(styled(HoverCard.ArrowTip), 'arrowTip');
export const Content = withContext(styled(HoverCard.Content), 'content');
export const Positioner = withContext(
  styled(HoverCard.Positioner),
  'positioner',
);
export const Trigger = withContext(styled(HoverCard.Trigger), 'trigger');

export type RootProps = ComponentProps<typeof Root>;
export type ArrowProps = ComponentProps<typeof Arrow>;
export type ArrowTipProps = ComponentProps<typeof ArrowTip>;
export type ContentProps = ComponentProps<typeof Content>;
export type PositionerProps = ComponentProps<typeof Positioner>;
export type TriggerProps = ComponentProps<typeof Trigger>;
