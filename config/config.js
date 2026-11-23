const config = {
 env: process.env.NODE_ENV || 'development', 
 port: process.env.PORT || 3000,
 jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key", 
//  mongoUri: process.env.MONGODB_URI || "mongodb+srv://Blessing:qzzJjISAcwfPklIo@cluster0.txlxgvp.mongodb.net/Skeleton?retryWrites=true&w=majority"||
mongoUri: process.env.MONGODB_URI || "mongodb+srv://stakeda_db_user:eLRMOY5IzxGQRG5B@cluster0.wfrzyru.mongodb.net/Skeleton?appName=Cluster0" ||
process.env.MONGO_HOST ||
 'mongodb://' + (process.env.IP || 'localhost') + ':' + 
(process.env.MONGO_PORT || '27017') +
 '/mernproject' 
 }
 export default config




// const config = {
//     env: process.env.NODE_ENV || 'development', 
//     port: process.env.PORT || 3000,
//     jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key", 
//     mongoUri: process.env.MONGODB_URI || "mongodb+srv://blessjiboye1234:oNW5kKPR1Skn8b5V@cluster0.evtisc1.mongodb.net/Skeleton?retryWrites=true&w=majority"||
//     process.env.MONGO_HOST ||
//     'mongodb://' + (process.env.IP || 'localhost') + ':' + 
//    (process.env.MONGO_PORT || '27017') +'/mernproject' 
//     }
//     export default config
   