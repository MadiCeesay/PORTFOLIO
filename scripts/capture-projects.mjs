import { chromium } from '@playwright/test'
import { mkdir,writeFile } from 'node:fs/promises'
await mkdir('public/images',{recursive:true})
const browser=await chromium.launch({headless:true,executablePath:process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE||undefined})
const results=[]
for(const [slug,url] of [['amc-gambia','https://amc-gambia.vercel.app/'],['car-rental-system','https://car-rental-system-eosin.vercel.app/'],['floodwatch-gambia','https://floodwatch-gambia.vercel.app/']]){
 const page=await browser.newPage({viewport:{width:1440,height:960},deviceScaleFactor:1})
 try{const response=await page.goto(url,{waitUntil:'domcontentloaded',timeout:45000});if(!response?.ok())throw Error(`HTTP ${response?.status()}`);await page.locator('h1').first().waitFor({state:'visible',timeout:15000});await page.waitForLoadState('load',{timeout:15000}).catch(()=>{});await page.screenshot({path:`public/images/${slug}.png`});results.push({slug,url,status:response.status(),title:await page.title(),text:(await page.locator('body').innerText()).slice(0,1500),screenshot:`${slug}.png`})}catch(e){results.push({slug,url,error:e.message})}finally{await page.close()}
}
await browser.close();await writeFile('project-verification.json',JSON.stringify(results,null,2));console.log(JSON.stringify(results,null,2))
