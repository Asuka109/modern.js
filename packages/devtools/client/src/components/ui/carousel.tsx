import { Carousel } from '@ark-ui/react/carousel';
import type { ComponentProps } from 'react';
import { styled } from 'styled-system/jsx';
import { carousel } from 'styled-system/recipes';
import { createStyleContext } from '~/lib/create-style-context';

const { withProvider, withContext } = createStyleContext(carousel);

export const Root = withProvider(styled(Carousel.Root), 'root');
export const Control = withContext(styled(Carousel.Control), 'control');
export const Indicator = withContext(styled(Carousel.Indicator), 'indicator');
export const IndicatorGroup = withContext(
  styled(Carousel.IndicatorGroup),
  'indicatorGroup',
);
export const Item = withContext(styled(Carousel.Item), 'item');
export const ItemGroup = withContext(styled(Carousel.ItemGroup), 'itemGroup');
export const NextTrigger = withContext(
  styled(Carousel.NextTrigger),
  'nextTrigger',
);
export const PrevTrigger = withContext(
  styled(Carousel.PrevTrigger),
  'prevTrigger',
);
export const Viewport = withContext(styled(Carousel.Viewport), 'viewport');

export type RootProps = ComponentProps<typeof Root>;
export type ControlProps = ComponentProps<typeof Control>;
export type IndicatorProps = ComponentProps<typeof Indicator>;
export type IndicatorGroupProps = ComponentProps<typeof IndicatorGroup>;
export type ItemProps = ComponentProps<typeof Item>;
export type ItemGroupProps = ComponentProps<typeof ItemGroup>;
export type NextTriggerProps = ComponentProps<typeof NextTrigger>;
export type PrevTriggerProps = ComponentProps<typeof PrevTrigger>;
export type ViewportProps = ComponentProps<typeof Viewport>;
