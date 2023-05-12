//web scraping and took out every fucking suicide jokes from a website

const pt = require('puppeteer');

async function scrapingShit(url){
    const browser = await pt.launch();
    const page = await browser.newPage();
    await page.goto(url);

    for(var number=3;number<88;number++){
        const quote = await page.$x(`/html/body/div[1]/div[1]/div[5]/div[2]/div[1]/div/article/div[1]/div[2]/p[${number}]`);
        let bullshit = await page.evaluate(el=>el.textContent,quote[0]);
        if(bullshit.includes('Recommended')) continue;
        console.log(bullshit);
        console.log();
    }
    await browser.close();
}

scrapingShit('https://humornama.com/jokes/suicide-jokes/')