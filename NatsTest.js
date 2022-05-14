const { connect, StringCodec } = require("nats");

// const host = "nats://nats.platform-provisioner-dev.svc:4222";
const host = "https://nats-dev-platform-provisioner-dev.apps.silver.devops.gov.bc.ca/";

async function makeNats() {
  // to create a connection to a nats-server:
  let nc;
  try {
    nc = await connect({
      // json: true,
      servers: host,
    });
  } catch (err) {
    console.log("ERR")
    console.log(err);
  }

  const subject = "registry_project_provisioning_silver";

  // create a codec
  const sc = StringCodec();
  // create a simple subscriber and iterate over messages
  // matching the subscription
  console.log(nc)
  const sub = nc.subscribe(subject);
  (async () => {
    for await (const m of sub) {
      console.log("SUBSCRIBE");
      console.log(`[${sub.getProcessed()}]: ${sc.decode(m.data)}`);
    }
    console.log("subscription closed");
  })();

  nc.publish("hello", sc.encode("test"));
  nc.publish("hello", sc.encode("another teset"));
}

makeNats();
