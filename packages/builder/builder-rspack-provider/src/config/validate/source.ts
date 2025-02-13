import { sharedSourceConfigSchema, z } from '@modern-js/builder-shared';
import type { SourceConfig } from '../../types';

export const sourceConfigSchema: z.ZodType<SourceConfig> =
  sharedSourceConfigSchema
    .extend({
      define: z.record(z.any()),
    })
    .partial();
