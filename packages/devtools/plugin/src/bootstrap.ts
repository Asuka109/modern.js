/// <reference lib="dom" />
import {
  type SetupClientParams,
  ClientDefinition,
} from '@modern-js/devtools-kit/runtime';

interface RouteAsset {
  chunkIds: string[];
  assets: string[];
  referenceCssAssets: string[];
}

interface RouteManifest {
  routeAssets: Record<string, RouteAsset>;
}

// Request function based on XMLHttpRequest intend to block the main thread.
const fetchSync = (
  url: string | URL,
  body?: Document | XMLHttpRequestBodyInit | null,
) => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, false);
  xhr.send(body);
  return {
    text() {
      return xhr.responseText;
    },
    json() {
      return JSON.parse(xhr.responseText);
    },
    blob() {
      return new Blob([xhr.response]);
    },
  };
};

const importScript = (url: string | URL) => {
  const script = document.createElement('script');
  script.setAttribute('src', url.toString());
  document.head.appendChild(script);
};

const importStyle = (
  url: string | URL,
  parent: HTMLElement | DocumentFragment = document.head,
) => {
  const link = document.createElement('link');
  link.setAttribute('rel', 'stylesheet');
  link.setAttribute('href', url.toString());
  parent.appendChild(link);
};

const parseCookie = (cookie: string) => {
  const result: Record<string, string> = {};
  cookie.split(';').forEach(pair => {
    const [key, value] = pair.split('=').map(str => str.trim());
    result[key] = value;
  });
  return result;
};

const definedUrl: string | null = process.env.LOAD_MODERNJS_DEVTOOLS!;
const { use_modernjs_devtools: cookieUrl } = parseCookie(document.cookie);
const url = definedUrl || cookieUrl;

if (url) {
  console.log('Loading Modern.js Devtools from:', url);
  const manifest: RouteManifest = fetchSync(url).json();

  const setupScript = document.createElement('script');
  const setupParams: SetupClientParams = {
    endpoint: '/__devtools',
    dataSource: '/__devtools/rpc',
    def: new ClientDefinition(),
  };
  setupScript.textContent = `
    window.__MODERN_JS_DEVTOOLS_OPTIONS__ = ${JSON.stringify(setupParams)};
  `;
  document.head.appendChild(setupScript);

  // Inject JavaScript chunks to client.
  const template = document.createElement('template');
  template.id = '_modern_js_devtools_styles';

  for (const src of manifest.routeAssets.mount.assets) {
    if (src.endsWith('.js')) {
      importScript(src);
    } else if (src.endsWith('.css')) {
      // Inject CSS chunks to client inside of template to avoid polluting global.
      importStyle(src, template.content);
    }
  }

  document.body.appendChild(template);
}
