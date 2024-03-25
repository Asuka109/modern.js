import { ark } from '@ark-ui/react/factory';
import type { ComponentProps } from 'react';
import { styled } from 'styled-system/jsx';
import { alert } from 'styled-system/recipes';
import { createStyleContext } from '~/lib/create-style-context';

const { withProvider, withContext } = createStyleContext(alert);

export const Root = withProvider(styled(ark.div), 'root');
export const Content = withContext(styled(ark.div), 'content');
export const Description = withContext(styled(ark.div), 'description');
export const Icon = withContext(styled(ark.svg), 'icon');
export const Title = withContext(styled(ark.h5), 'title');

export type RootProps = ComponentProps<typeof Root>;
export type ContentProps = ComponentProps<typeof Content>;
export type DescriptionProps = ComponentProps<typeof Description>;
export type IconProps = ComponentProps<typeof Icon>;
export type TitleProps = ComponentProps<typeof Title>;
