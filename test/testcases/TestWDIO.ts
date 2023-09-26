

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        console.log('zen1: '+process.env.ENV)
        await browser.url('');
    })
})

// describe('Login TC1', () => {
//     it('Navigate to login page',async () => {
//         await browser.url('https://the-internet.herokuapp.com/login')
//     })
//     it('I enter my credentials', async () => {
//         (await $('#username')).addValue('tomsmith');
//         (await $('#password')).addValue('SuperSecretPassword');
//     })
//     it('I click login button', async () => {
//         (await $('button[type="submit"]')).click;
//     })

// })