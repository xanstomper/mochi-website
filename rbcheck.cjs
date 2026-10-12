const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch({args:['--use-gl=swiftshader','--enable-unsafe-swiftshader']});
  const p = await b.newPage({ viewport:{width:1920,height:1080} });
  await p.goto('http://127.0.0.1:8937/mochi/source.html', {waitUntil:'networkidle'});
  await p.waitForTimeout(5000);
  const info = await p.evaluate(() => {
    const rbWindow = document.querySelector('.rb-window');
    const wraps = document.querySelectorAll('.wrap');
    const wrapInfo = [...wraps].map(w => ({
      cls: w.className,
      children: w.children.length,
      firstChild: w.children[0]?.className?.slice(0,30),
    }));
    return { rbWindow: !!rbWindow, wrapInfo };
  });
  console.log(JSON.stringify(info, null, 1));
  await b.close();
})();
