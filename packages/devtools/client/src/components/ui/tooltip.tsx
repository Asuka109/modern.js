import { Tooltip } from '@ark-ui/react/tooltip';
import type { ComponentProps } from 'react';
import { styled } from 'styled-system/jsx';
import { tooltip } from 'styled-system/recipes';
import { createStyleContext } from '~/lib/create-style-context';

const { withProvider, withContext } = createStyleContext(tooltip);

export const Root = withProvider(Tooltip.Root);
export const Arrow = withContext(styled(Tooltip.Arrow), 'arrow');
export const ArrowTip = withContext(styled(Tooltip.ArrowTip), 'arrowTip');
export const Content = withContext(styled(Tooltip.Content), 'content');
export const Positioner = withContext(styled(Tooltip.Positioner), 'positioner');
export const Trigger = withContext(styled(Tooltip.Trigger), 'trigger');

export type RootProps = ComponentProps<typeof Root>;
export type ArrowProps = ComponentProps<typeof Arrow>;
export type ArrowTipProps = ComponentProps<typeof ArrowTip>;
export type ContentProps = ComponentProps<typeof Content>;
export type PositionerProps = ComponentProps<typeof Positioner>;
export type TriggerProps = ComponentProps<typeof Trigger>;
