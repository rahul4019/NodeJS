import os from 'node:os';

function monitor() {
  const oldCpus = os.cpus();

  setTimeout(() => {
    const newCpus = os.cpus();

    const usage = newCpus.map((cpu, index) => {
      return {
        core: index,
        usage: calculateCpuUsage(oldCpus[index], newCpus[index]) + '%',
      };
    });

    console.clear();
    console.log(usage);
    console.table(usage);

    console.log(`Memory used: ${(
      (os.totalmem() - os.freemem()) /
      (1024 * 1024 * 1024)
    ).toFixed(2)} GB / ${(os.totalmem() / (1024 * 1024 * 1024)).toFixed(2)}
      `);
  }, 1000);
}

setInterval(monitor, 1000);

function calculateCpuUsage(oldCpus, newCpus) {
  const oldTotal = Object.values(oldCpus.times).reduce(
    (acc, curr) => acc + curr
  );
  const newTotal = Object.values(newCpus.times).reduce(
    (acc, curr) => acc + curr
  );

  const idle = newCpus.times.idle - oldCpus.times.idle;

  const total = newTotal - oldTotal;

  const used = total - idle;

  return ((used * 100) / total).toFixed(1);
}

/* [
  {
    model: '12th Gen Intel(R) Core(TM) i5-12450H',
    speed: 2496,
    times: {
      user: 47936031,
      nice: 0,
      sys: 68941062,
      idle: 1220147812,
      irq: 10524765
    }
  },
  {
    model: '12th Gen Intel(R) Core(TM) i5-12450H',
    speed: 2496,
    times: {
      user: 14138625,
      nice: 0,
      sys: 18157937,
      idle: 1304728234,
      irq: 2851562
    }
  },
  {
    model: '12th Gen Intel(R) Core(TM) i5-12450H',
    speed: 2496,
    times: {
      user: 55594500,
      nice: 0,
      sys: 60335203,
      idle: 1221095125,
      irq: 5855453
    }
  },
  {
    model: '12th Gen Intel(R) Core(TM) i5-12450H',
    speed: 2496,
    times: {
      user: 15369515,
      nice: 0,
      sys: 17987812,
      idle: 1303666906,
      irq: 2582000
    }
  },
  {
    model: '12th Gen Intel(R) Core(TM) i5-12450H',
    speed: 2496,
    times: {
      user: 49842843,
      nice: 0,
      sys: 54345812,
      idle: 1232836171,
      irq: 4820578
    }
  },
  {
    model: '12th Gen Intel(R) Core(TM) i5-12450H',
    speed: 2496,
    times: {
      user: 15105406,
      nice: 0,
      sys: 16480843,
      idle: 1305438546,
      irq: 2112031
    }
  },
  {
    model: '12th Gen Intel(R) Core(TM) i5-12450H',
    speed: 2496,
    times: {
      user: 52415875,
      nice: 0,
      sys: 56625390,
      idle: 1227983562,
      irq: 4349984
    }
  },
  {
    model: '12th Gen Intel(R) Core(TM) i5-12450H',
    speed: 2496,
    times: {
      user: 15285312,
      nice: 0,
      sys: 15251562,
      idle: 1306487937,
      irq: 1575968
    }
  },
  {
    model: '12th Gen Intel(R) Core(TM) i5-12450H',
    speed: 2496,
    times: {
      user: 30646250,
      nice: 0,
      sys: 33704484,
      idle: 1272674062,
      irq: 2248234
    }
  },
  {
    model: '12th Gen Intel(R) Core(TM) i5-12450H',
    speed: 2496,
    times: {
      user: 32866812,
      nice: 0,
      sys: 35149359,
      idle: 1269008640,
      irq: 2109703
    }
  },
  {
    model: '12th Gen Intel(R) Core(TM) i5-12450H',
    speed: 2496,
    times: {
      user: 34162609,
      nice: 0,
      sys: 35458937,
      idle: 1267403250,
      irq: 2048625
    }
  },
  {
    model: '12th Gen Intel(R) Core(TM) i5-12450H',
    speed: 2496,
    times: {
      user: 35719187,
      nice: 0,
      sys: 36479203,
      idle: 1264826406,
      irq: 2000218
    }
  }
] */
