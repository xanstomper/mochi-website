const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch({args:['--use-gl=swiftshader','--enable-unsafe-swiftshader']});
  const p = await b.newPage({ viewport:{width:1920,height:1080} });
  await p.goto('http://127.0.0.1:8937/mochi/index.html', {waitUntil:'networkidle'});
  await p.waitForTimeout(3000);
  const info = await p.evaluate(() => {
    const ticker = document.querySelector('.stats-ticker');
    const hero = document.querySelector('.hero');
    const tickerR = ticker?.getBoundingClientRect();
    const heroR = hero?.getBoundingClientRect();
    const tickerParent = ticker?.parentElement;
    const tickerZ = ticker ? getComputedStyle(ticker).zIndex : 'none';
    const parentZ = tickerParent ? getComputedStyle(tickerParent).zIndex : 'none';
    const tickerBg = ticker ? getComputedStyle(ticker).backgroundColor : 'none';
    return { tickerR, heroR, tickerZ, parentZ, tickerBg, parentTag: tickerParent?.tagName, parentClass: tickerParent?.className };
  });
  console.log(JSON.stringify(info, null, 1));
  await b.close();
})();
