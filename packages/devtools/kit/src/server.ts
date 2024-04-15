import type { AppTools, IAppContext, UserConfig } from '@modern-js/app-tools';
import type {
  RsbuildContext,
  NormalizedConfig as NormalizedBuilderConfig,
  RsbuildConfig,
  webpack,
  Rspack,
  WebpackConfig,
  RspackConfig,
} from '@modern-js/uni-builder';
import { NormalizedConfig } from '@modern-js/core';
import { RouteLegacy, NestedRouteForCli, PageRoute } from '@modern-js/types';
import type { Manifest } from '@rsdoctor/types';
import type { StoragePresetContext } from './storage-preset';

export type BuilderContext = RsbuildContext;

export type FrameworkConfig = UserConfig<AppTools>;

export type TransformedFrameworkConfig = NormalizedConfig<AppTools>;

export type BuilderConfig = RsbuildConfig;

export type { NormalizedBuilderConfig, WebpackConfig, RspackConfig };

export type Aliases = NonNullable<
  NonNullable<WebpackConfig['resolve']>['alias']
>;

export type BundlerConfig = WebpackConfig | RspackConfig;

export type Compiler =
  | webpack.Compiler
  | Rspack.Compiler
  | webpack.MultiCompiler
  | Rspack.MultiCompiler;

export type AppContext = Omit<IAppContext, 'builder' | 'serverInternalPlugins'>;

export type FileSystemRoutes =
  | RouteLegacy[]
  | (NestedRouteForCli | PageRoute)[];

export interface DoctorManifestOverview {
  numModules: number;
  numChunks: number;
  numPackages: number;
  summary: Manifest.RsdoctorManifest['data']['summary'];
  errors: Manifest.RsdoctorManifest['data']['errors'];
}

export interface DevtoolsConfig {
  storagePresets?: StoragePresetContext[];
}

export interface ServerFunctions {
  echo: (content: string) => string;
}
