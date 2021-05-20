const NodeMediaServer = require('node-media-server');

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://divyansh:div21902@cluster0.bfbrp.mongodb.net/strixx?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const config = {
  rtmp: {
    port: 1935,
    chunk_size: 60000,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60,
  },
  http: {
    port: 8000,
    allow_origin: '*',
    mediaroot: './media'
  },
  trans: {
    ffmpeg: '/usr/bin/ffmpeg',
    tasks: [{
      app: 'live',
      mp4: true,
      mp4Flags: '[movflags=frag_keyframe+empty_moov]',
    }]
  },
  fission: {
    ffmpeg: '/usr/bin/ffmpeg',
    tasks: [{
      rule: "live/*",
      model: [{
          ab: "128k",
          vb: "1500k",
          vs: "1280x720",
          vf: "30",
        },
        {
          ab: "96k",
          vb: "1000k",
          vs: "854x480",
          vf: "24",
        },
        {
          ab: "96k",
          vb: "600k",
          vs: "640x360",
          vf: "20",
        },
      ]
    }]
  }
}


var nms = new NodeMediaServer(config)
nms.run();

nms.on('preConnect', (id, args) => {
  //console.log(id);
  //let session = nms.getSession(id);
  // session.reject();
});

nms.on('postConnect', (id, args, key) => {
  //console.log('[NodeEvent on postConnect]', `id=${id} args=${JSON.stringify(args)}`);
});

nms.on('doneConnect', (id, args) => {});

nms.on('prePublish', (id, StreamPath, args) => {
  const streamKey = StreamPath.split('/')[2]
  let session = nms.getSession(id);

  client.connect(err => {
    const collection = client.db("strixx").collection("streams")

    collection.findOne({
        "stream-key": streamKey
      })
      .then(stream => {
        if (stream == null) session.reject()
        //Verify stream key here
        client.close()
      })
  })
  // session.reject();
});

nms.on('postPublish', (id, StreamPath, args) => {});

nms.on('donePublish', (id, StreamPath, args) => {});

nms.on('prePlay', (id, StreamPath, args) => {
  // let session = nms.getSession(id);
  // session.reject();
});

nms.on('postPlay', (id, StreamPath, args) => {});

nms.on('donePlay', (id, StreamPath, args) => {});