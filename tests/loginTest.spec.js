import {test,expect} from '@playwright/test';

test('Login Scenario with valid credentials', async function loginValidation({page})
{ 
   await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
   await page.locator("input[id='username']").type("rahulshettyacademy");
   await page.locator("input[id='password']").type("learning");
   await page.locator("#signInBtn").click();
    const title = await page.title();
    console.log("Title of the page: "+title);   
});

test('Login Scenario with invalid credentials',async ({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await page.locator("input[id='username']").type("rahulshettyacademy");
    await page.locator("input[id='password']").type("learning123");
    await page.locator("#signInBtn").click();
   const errorMessage = await page.locator("[style*='block']").textContent();
   await expect(page.locator("[style*='block']")).toContainText('Incorrect');
   console.log("Error message: " +errorMessage);
})

// test()