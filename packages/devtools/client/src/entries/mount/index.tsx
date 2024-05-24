import './react-devtools-backend';
import './state';
import { createRoot } from 'react-dom/client';
import { SetupClientParams } from '@modern-js/devtools-kit/runtime';
import styles from './index.module.scss';
import { DevtoolsCapsule } from '@/components/Devtools/Capsule';

declare global {
  interface Window {
    __MODERN_JS_DEVTOOLS_OPTIONS__: SetupClientParams;
  }
}

const setupDevtools = async () => {
  const outer = document.createElement('div');
  outer.className = '_modern_js_devtools_container';
  document.body.appendChild(outer);

  const shadow = outer.attachShadow({ mode: 'closed' });

  const template = document.getElementById('_modern_js_devtools_styles');
  if (!(template instanceof HTMLTemplateElement)) {
    throw new Error('template not found');
  }
  shadow.appendChild(template.content);
  template.content.childNodes.forEach(node => {
    node instanceof HTMLElement && shadow.appendChild(node);
  });

  const container = document.createElement('div');
  container.classList.add(
    '_modern_js_devtools_mountpoint',
    'theme-register',
    styles.container,
  );
  shadow.appendChild(container);

  const options = window.__MODERN_JS_DEVTOOLS_OPTIONS__;
  const root = createRoot(container);
  root.render(<DevtoolsCapsule {...options} />);
};

if (
  document.readyState === 'interactive' ||
  document.readyState === 'complete'
) {
  setupDevtools();
} else {
  document.addEventListener('DOMContentLoaded', setupDevtools, { once: true });
}
