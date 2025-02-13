import { chromium, expect, test } from "@playwright/test";
import {log} from 'node:console'
test("marathon 1", async({page})=>{
await page.goto('https://login.salesforce.com/')
await page.locator('#username').fill('ravindran.ramdas@testleaf.com')
await page.locator('#password').fill('Indran#1432')
await page.locator('#Login').click()
await page.waitForTimeout(10000)
await page.locator("//button[contains(@class,'slds-button slds-context-bar__button')]").click()
await page.locator("(//button[@class='slds-button'])[2]").click()
await page.getByPlaceholder('Search apps or items...').fill("Service")
await page.waitForTimeout(12000)
await page.locator("(//lightning-formatted-rich-text[@class='slds-rich-text-editor__output'])[1]").click()
//lightning-formatted-rich-text[@class='slds-rich-text-editor__output']
//await page.locator("//div[@class='slds-truncate']']").click()
//await page.locator("(//span[text()='Cases'])[1]").click()
//await page.locator("//a[@title='Cases']']").click()
await page.waitForTimeout(12000)
await page.locator("//one-app-nav-bar-item-root[@data-id='Case']").click()
await page.waitForTimeout(10000)
await page.locator("//div[text()='New']").click()
await page.getByPlaceholder("Search Contacts...").fill("Ravi")
await page.locator("//span[text()='New Contact']").click()
await page.locator("//button[@name='salutation']").click()
await page.waitForTimeout(5000)
await page.locator("//span[@tile='Mr.']").click()
await page.getByPlaceholder("First Name").fill("Ranjith")
await page.getByPlaceholder("Last Name").fill("Kumar")
await page.locator("//button[@name='SaveEdit']").click()
await page.waitForTimeout(5000)
await page.getByPlaceholder("Search Accounts...").click()
await page.locator("//span[text()='New Account']").click()
await page.locator("//input[@name='Name']").fill("Ranjith")
await page.locator("//button[@name='SaveEdit']").click()
await page.waitForTimeout(5000)
await page.locator("(//button[@aria-haspopup='listbox'])[3]").click()
await page.locator("//lightning-base-combobox-item[@data-value='Phone']").click()
await page.locator("//button[@name='SaveEdit']").click()
await page.waitForTimeout(5000)
await page.locator("//span[text()='Edit Status']").click()
await page.locator("(//button[@aria-haspopup='listbox'])[1]").click()
await page.waitForTimeout(5000)
await page.locator("//span[text()='Escalated']").click()
await page.locator("//button[@name='SaveEdit']").click()
await page.waitForTimeout(5000)
await page.locator("//span[text()='Share an update...']").click()
await page.getByPlaceholder("Share an update...").fill("Testing for test leaf")
await page.locator("//button[@title='Click, or press Ctrl+Enter']").click()
await page.locator("//article[@data-type='TextPost']//a[@class='cuf-feedItemActionTrigger cuf-buttonIcon slds-button slds-button_icon-border slds-button_icon-x-small']").click()
await page.locator("//span[text()='Like on Chatter']").click()
await expect( page.locator("//span[text()='Post was liked.']")).toHaveText("Post was liked.")

})
