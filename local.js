import { watch } from 'fs';
import * as localtunnel from 'localtunnel';

let port = 8080;
let dirName = process.argv[1];
let projectDir = dirName;


const watcher = watch(projectDir, { recursive: true } (event, filename) => {
  console.log("event");
};


(async () => {
  const tunnel = await localtunnel({ port: 3000 });

  // the assigned public url for your tunnel
  // i.e. https://abcdefgjhij.localtunnel.me
  tunnel.url;

  tunnel.on('close', () => {
    // tunnels are closed
  });
})();
