import { SegmentGroup } from '@ark-ui/react/segment-group';
import type { ComponentProps } from 'react';
import { styled } from 'styled-system/jsx';
import { segmentGroup } from 'styled-system/recipes';
import { createStyleContext } from '~/lib/create-style-context';

const { withProvider, withContext } = createStyleContext(segmentGroup);

export const Root = withProvider(styled(SegmentGroup.Root), 'root');
export const Indicator = withContext(
  styled(SegmentGroup.Indicator),
  'indicator',
);
export const Item = withContext(styled(SegmentGroup.Item), 'item');
export const ItemControl = withContext(
  styled(SegmentGroup.ItemControl),
  'itemControl',
);
export const ItemText = withContext(styled(SegmentGroup.ItemText), 'itemText');
export const Label = withContext(styled(SegmentGroup.Label), 'label');

export type RootProps = ComponentProps<typeof Root>;
export type IndicatorProps = ComponentProps<typeof Indicator>;
export type ItemProps = ComponentProps<typeof Item>;
export type ItemControlProps = ComponentProps<typeof ItemControl>;
export type ItemTextProps = ComponentProps<typeof ItemText>;
export type LabelProps = ComponentProps<typeof Label>;
