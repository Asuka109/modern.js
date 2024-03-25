import { ark } from '@ark-ui/react/factory';
import type { ComponentProps } from 'react';
import { styled } from 'styled-system/jsx';
import { table } from 'styled-system/recipes';
import { createStyleContext } from '~/lib/create-style-context';

const { withProvider, withContext } = createStyleContext(table);

export const Root = withProvider(styled(ark.table), 'root');
export const Body = withContext(styled(ark.tbody), 'body');
export const Caption = withContext(styled(ark.caption), 'caption');
export const Cell = withContext(styled(ark.td), 'cell');
export const Footer = withContext(styled(ark.tfoot), 'footer');
export const Head = withContext(styled(ark.thead), 'head');
export const Header = withContext(styled(ark.th), 'header');
export const Row = withContext(styled(ark.tr), 'row');

export type RootProps = ComponentProps<typeof Root>;
export type BodyProps = ComponentProps<typeof Body>;
export type CaptionProps = ComponentProps<typeof Caption>;
export type CellProps = ComponentProps<typeof Cell>;
export type FooterProps = ComponentProps<typeof Footer>;
export type HeadProps = ComponentProps<typeof Head>;
export type HeaderProps = ComponentProps<typeof Header>;
export type RowProps = ComponentProps<typeof Row>;
