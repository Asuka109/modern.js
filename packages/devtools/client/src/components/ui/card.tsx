import { ark } from '@ark-ui/react/factory';
import type { ComponentProps } from 'react';
import { styled } from 'styled-system/jsx';
import { card } from 'styled-system/recipes';
import { createStyleContext } from '~/lib/create-style-context';

const { withProvider, withContext } = createStyleContext(card);

export const Root = withProvider(styled(ark.div), 'root');
export const Body = withContext(styled(ark.div), 'body');
export const Description = withContext(styled(ark.div), 'description');
export const Footer = withContext(styled(ark.div), 'footer');
export const Header = withContext(styled(ark.div), 'header');
export const Title = withContext(styled(ark.h3), 'title');

export type RootProps = ComponentProps<typeof Root>;
export type BodyProps = ComponentProps<typeof Body>;
export type DescriptionProps = ComponentProps<typeof Description>;
export type FooterProps = ComponentProps<typeof Footer>;
export type HeaderProps = ComponentProps<typeof Header>;
export type TitleProps = ComponentProps<typeof Title>;
