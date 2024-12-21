// Yeni bir router nesnesi oluşturuluyor
const express = require("express");
const router = express.Router();

const { getHome, postHome } = require("./home/index");


// "/home" adresine GET isteği geldiğinde home/index şablonunu render et
router.get("/home", getHome);

// "/home" adresine POST isteği geldiğinde form verisini al ve konsola yazdır
router.post("/home", postHome);

module.exports = router;
