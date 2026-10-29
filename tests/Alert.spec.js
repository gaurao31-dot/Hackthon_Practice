import {test, expect} from '@playwright/test';
test('Validate JavaScript Alert', async ({ page }) => {
    await page.goto(
        'https://rahulshettyacademy.com/AutomationPractice/'
    );

    // Enter name
    await page.locator('#name').fill('Gaurao');

    // Register alert handler before clicking the button
    page.once('Dialogue validation',async dialog=>{
        expect(dialog.type()).toBe('alert'); 
        expect(dialog.message()).toContain('Gaurao');
        await dialog.accept();
    });
    await page.locator('#alertbtn').click();
});
