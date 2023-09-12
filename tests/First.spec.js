import {test,expect} from '@playwright/test';



test('Using browser fixture', async ({browser})=>
{
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://google.com");
  await expect(page).toHaveTitle("Google");
 });

test('Using pae fixture', async ({page})=>
{
    await page.goto("https://youtube.com");  
});

test.only('testing' , async  function abc({browser})
{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://udemy.com");
    console.log(await page.title());
});

 

