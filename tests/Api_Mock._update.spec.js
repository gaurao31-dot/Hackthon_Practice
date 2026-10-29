import {test, expect} from '@playwright/test';
let responsebody;
test('To test upadate resullt', async ({page})=>{

     await page.route('**/api/articles*',async (route)=>{
        let response = await route.fetch()
         responsebody= await response.json()
         responsebody.articles[0].title="This is Gaurao article for mocking"
         responsebody.articles[0].description="This description for Gaurao article for mocking"

        await route.fulfill({
        
            body: JSON.stringify(responsebody)
         })
     })
      await page.goto('https://conduit.bondaracademy.com/')   
      await expect(page.locator('.navbar-brand')).toHaveText('conduit')
      await expect(page.locator('h1').nth(1)).toHaveText("This is Gaurao article for mocking")
      await expect(page.locator('app-article-list p').first()).toHaveText("This description for Gaurao article for mocking")
      

});