const os = require("os");
const numOfCpus = os.cpus().length;
const cluster = require("cluster");

cluster.setupMaster({
    exec: "server.js",
});

// calling cluster.fork will start a new instance of our server everytime we call it.
for (let i = 0; i < numOfCpus; i++) {
    cluster.fork(); // child processes / worker
}

// if a worker dies - replace it
cluster.on("exit", (worker) => {
    console.log("server", worker.process.pid, "just died ☠️");
    cluster.fork();
});
