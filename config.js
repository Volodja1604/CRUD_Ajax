hostname=process.argv[2]||process.env.NODE_ADDRESS||'localhost'
port=process.argv[3]||process.env.PORT||8000

exports.port=port;
exports.hostname=hostname;