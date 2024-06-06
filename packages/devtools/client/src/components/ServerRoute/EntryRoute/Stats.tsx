import React from 'react';
import _ from 'lodash';
import type { ServerRoute } from '@modern-js/types';
import { Box, Flex, Strong, Text } from '@radix-ui/themes';
import { useSnapshot } from 'valtio';
import styles from './Stats.module.scss';
import { $serverExported } from '@/entries/client/routes/state';
import { useThrowable } from '@/utils';

export interface EntryStatsProps {
  route: ServerRoute;
}

export const EntryStats: React.FC<EntryStatsProps> = ({ route }) => {
  const serverExported = useThrowable($serverExported);
  const { entrypoints } = useSnapshot(serverExported.framework).context;
  const entrypoint =
    route.entryName && _.find(entrypoints, { entryName: route.entryName });

  if (!entrypoint) {
    throw new Error(
      `Can't found the entrypoint named ${JSON.stringify(route.entryName)}`,
    );
  }

  return (
    <Box className={styles.stats}>
      <Flex gap="1">
        <Strong>Directory: </Strong>
        <Text>{entrypoint.absoluteEntryDir}</Text>
      </Flex>
      <Flex gap="1">
        <Strong>Entry:</Strong>
        <Text>{entrypoint.entry}</Text>
      </Flex>
    </Box>
  );
};
