module.exports = {
	rules: [
    {
      pattern: /\/api\/getHot.php/,
      respondwith: './getHot.json'
    },
    {
      pattern: /\/api\/getHot.php\?type\=more$/,
      respondwith: './moregetHot.json'
    },
    {
      pattern: /\/api\/getHot.php\?type\=new$/,
      respondwith: './newgetHot.json'
    }
   ]
}
