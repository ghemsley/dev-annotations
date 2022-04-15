import { playwrightLauncher } from '@web/test-runner-playwright'
import { esbuildPlugin } from '@web/dev-server-esbuild'
// import { fromRollup } from '@web/dev-server-rollup'
// import alias from '@rollup/plugin-alias'
import { voiceOverPlugin } from 'web-test-runner-voiceover'

export default /** @type {import("@web/test-runner").TestRunnerConfig} */ ({
  concurrency: 1,
  concurrentBrowsers: 1,
  files: ['./src/**/*.spec.js'],
  testsFinishTimeout: 60000,
  testFramework: {
    config: { timeout: '60000' }
  },
  browsers: [
    playwrightLauncher({
      product: 'webkit',
      launchOptions: { headless: false }
    })
  ],
  nodeResolve: true,
  dedupe: true,
  plugins: [
    voiceOverPlugin(),
    // fromRollup(alias)({
    //   entries: [{ find: /^my-cool-library/, replacement: `${process.cwd()}/dist` }],
    // }),
    esbuildPlugin({ js: true, ts: true, json: true, target: 'auto' })
  ]
})
