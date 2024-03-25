import { Collapsible } from '@ark-ui/react/collapsible';
import type { ComponentProps } from 'react';
import { styled } from 'styled-system/jsx';
import { collapsible } from 'styled-system/recipes';
import { createStyleContext } from '~/lib/create-style-context';

const { withProvider, withContext } = createStyleContext(collapsible);

export const Root = withProvider(styled(Collapsible.Root), 'root');
export const Content = withContext(styled(Collapsible.Content), 'content');
export const Trigger = withContext(styled(Collapsible.Trigger), 'trigger');

export type RootProps = ComponentProps<typeof Root>;
export type ContentProps = ComponentProps<typeof Content>;
export type TriggerProps = ComponentProps<typeof Trigger>;
