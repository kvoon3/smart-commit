import { cac } from 'cac'
import { name, version } from '../package.json'

const cli = cac(name)

cli
  // TODO: remove test command
  .command('test', 'test')
  // eslint-disable-next-line no-console
  .action(() => console.log('test'))

cli.help()

cli.version(version)

cli.parse()
