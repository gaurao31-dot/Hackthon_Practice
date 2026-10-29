import {test, expect} from '@playwright/test';
test('Mocking tags API', async ({page})=>{

    await page.route('**/api/tags', async route =>{
        route.fulfill({
            status: 200,
            contentType: 'application/json',
            body:JSON.stringify({
                tags:['cypress','testing','automation']
            })
        })

    })

    await page.goto('https://conduit.bondaracademy.com/');
    await expect(page.locator('.navbar-brand')).toHaveText('conduit');




});