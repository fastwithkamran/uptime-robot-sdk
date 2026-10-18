// test-live.js (at the root of your project)
const sdk = require('./uptime-robot-sdk/ts/dist/UptimeRobotSDK');

async function runLiveTest() {
  try {
    console.log("Initializing UptimeRobot SDK client...");
    
    const ClientClass = sdk.UptimeRobotSDK || sdk.UptimeRobot || sdk;
    const client = new ClientClass();

    console.log("Fetching monitors from UptimeRobot API...");
    
    // Use the GetMonitor entity and its create operation
    const response = await client.GetMonitor().create({
      api_key: process.env.UPTIMEROBOT_API_KEY,
      format: 'json'
    });

    console.log("API Response Success:", JSON.stringify(response, null, 2));
  } catch (error) {
    console.error("API Error:", error.message);
  }
}

runLiveTest();