const BASE_URL = "https://www.heritageit.edu/";
const NOTICE_URL = "https://www.heritageit.edu/Notice.aspx";
const NOTICE_DIR_URL = "https://www.heritageid.edu/NoticePDF/"; 

exports.BASE_URL = BASE_URL;
exports.NOTICE_URL = NOTICE_URL;
exports.NOTICE_DIR_URL = NOTICE_DIR_URL;
exports.FIREBASE_URL = process.env.FIREBASE_URL;
exports.TELEGRAM_BOT_API_URL = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}`
exports.TELEGRAM_GROUP_ID=process.env.TELEGRAM_GROUP_ID

const DB = {
    NOTICES: "notices"
};

exports.DB = DB;

const TOPIC = {
    NEW_NOTICE: "new-notice"
};

exports.TOPIC = TOPIC;
