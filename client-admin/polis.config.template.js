
module.exports = {

  domainWhitelist: [
    "^localhost$",
    "^127\\.0\\.0\\.1$",
    "^192\\.168\\.1\\.140$",
    "^pol\\.is",
    ".+\\.pol\\.is$",
    "^xip\\.io$",
    ".+\\.xip\\.io$",

    ".+\\.copernicani\\.it$",
  ],

  DISABLE_INTERCOM: true,
  DISABLE_PLANS: true,

  FB_APP_ID: '000000000000000',

  //SERVICE_URL: 'http://localhost:5000',
  SERVICE_URL: 'http://polis.copenicani.it',

  UPLOADER: 'local', // alt: s3, scp

  // Uploader settings: local
  LOCAL_OUTPUT_PATH: './build',

  // Uploader settings: s3
  S3_BUCKET_PROD: 'pol.is',
  S3_BUCKET_PREPROD: 'preprod.pol.is',

  // Uploader settings: scp
  SCP_SUBDIR_PREPROD: 'preprod',
  SCP_SUBDIR_PROD: 'prod',
};
